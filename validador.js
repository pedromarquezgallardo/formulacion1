/* ════════════════════════════════════════════════════════════════
   VALIDADOR.JS — Comparación de respuestas IUPAC
   Tolerancia ortográfica (intentos 1-100), obligatoria desde 101
   ════════════════════════════════════════════════════════════════ */

'use strict';

const Validador = (() => {

  /* ── Normalización base ─────────────────────────────────────── */

  // Elimina espacios sobrantes y pasa a minúsculas
  function normalizar(str) {
    return str.trim().toLowerCase().replace(/\s+/g, ' ');
  }

  // Elimina tildes para comparación tolerante
  function sinTildes(str) {
    return str
      .replace(/[áàä]/g, 'a')
      .replace(/[éèë]/g, 'e')
      .replace(/[íìï]/g, 'i')
      .replace(/[óòö]/g, 'o')
      .replace(/[úùü]/g, 'u')
      .replace(/ñ/g, 'n');
  }

  // Normalización completa: sin tildes + minúsculas + sin espacios extras
  function normalizarTotal(str) {
    return sinTildes(normalizar(str));
  }

  /* ── Distancia de Levenshtein ───────────────────────────────── */
  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    const dp = Array.from({length: m+1}, (_, i) =>
      Array.from({length: n+1}, (_, j) => i === 0 ? j : j === 0 ? i : 0)
    );
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (a[i-1] === b[j-1]) dp[i][j] = dp[i-1][j-1];
        else dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
      }
    }
    return dp[m][n];
  }

  /* ── Detección de errores ortográficos específicos ───────────── */

  // Comprueba si la diferencia es SOLO de tildes
  function soloTildes(respuesta, correcta) {
    const rNorm = normalizar(respuesta);   // sin pasar sinTildes
    const cNorm = normalizar(correcta);
    // Si sin tildes son iguales pero con tildes no, es error de tilde
    return normalizarTotal(rNorm) === normalizarTotal(cNorm) &&
           sinTildes(rNorm) === sinTildes(cNorm) &&
           rNorm !== cNorm;
  }

  // Detecta el tipo de error ortográfico
  function detectarErrorOrtografico(respuesta, correcta) {
    const r = normalizar(respuesta);
    const c = normalizar(correcta);
    const rST = normalizarTotal(r);
    const cST = normalizarTotal(c);

    if (rST !== cST) return null; // no es solo ortografía, es error de contenido

    const errores = [];

    // Tildes faltantes o sobrantes
    for (let i = 0; i < Math.min(r.length, c.length); i++) {
      if (r[i] !== c[i] && sinTildes(r[i]) === sinTildes(c[i])) {
        const charCorr = c[i];
        const tildes = { 'á':'a','é':'e','í':'i','ó':'o','ú':'u','ü':'u' };
        if (Object.keys(tildes).includes(charCorr)) {
          errores.push(`falta tilde en "${charCorr}"`);
        } else {
          errores.push(`tilde sobrante`);
        }
      }
    }

    if (errores.length > 0) {
      return `Atención a la ortografía: ${errores.join(', ')}.`;
    }

    return 'Revisa la ortografía (tildes o mayúsculas).';
  }

  /* ── Validación principal ───────────────────────────────────── */

  /**
   * Valida la respuesta del estudiante.
   * @param {string} respuesta    - Lo que escribió el alumno
   * @param {string|string[]} correcta - Nombre(s) correcto(s) IUPAC
   * @param {number} totalIntentos - Intentos acumulados (para regla ortográfica)
   * @returns {{ correcto, ortografiaOk, sugerencia, mensajeError }}
   */
  function validar(respuesta, correcta, totalIntentos) {
    const correctas = Array.isArray(correcta) ? correcta : [correcta];
    const respNorm  = normalizar(respuesta);
    const respST    = normalizarTotal(respNorm);

    // Modo estricto (intento > 100): ortografía obligatoria
    const modoEstricto = totalIntentos >= 100;

    for (const c of correctas) {
      const corrNorm = normalizar(c);
      const corrST   = normalizarTotal(corrNorm);

      // 1. Exacto
      if (respNorm === corrNorm) {
        return { correcto: true, ortografiaOk: true, sugerencia: null, mensajeError: null };
      }

      // 2. Correcto en contenido (sin tildes), posible error ortográfico
      if (respST === corrST) {
        const msgOrt = detectarErrorOrtografico(respNorm, corrNorm);

        if (modoEstricto) {
          // A partir del intento 101 no se acepta si hay error ortográfico
          return {
            correcto: false,
            ortografiaOk: false,
            sugerencia: c,
            mensajeError: `La respuesta es correcta en contenido, pero a partir del intento 100 se exige ortografía correcta. ${msgOrt || ''} La respuesta correcta es: <strong>${c}</strong>.`
          };
        } else {
          // Se acepta pero se avisa
          return {
            correcto: true,
            ortografiaOk: false,
            sugerencia: c,
            mensajeError: null
          };
        }
      }

      // 3. Muy cercano (Levenshtein ≤ 2 sobre texto sin tildes)
      // Considera posibles errores tipográficos leves además de tildes
      const dist = levenshtein(respST, corrST);
      const umbral = corrST.length > 15 ? 3 : corrST.length > 8 ? 2 : 1;

      if (dist <= umbral) {
        const msgOrt = `Pequeño error tipográfico o de ortografía. Escribe: <strong>${c}</strong>`;

        if (modoEstricto) {
          return {
            correcto: false,
            ortografiaOk: false,
            sugerencia: c,
            mensajeError: `A partir del intento 100 se exige ortografía exacta. ${msgOrt}`
          };
        } else {
          return {
            correcto: true,
            ortografiaOk: false,
            sugerencia: c,
            mensajeError: null
          };
        }
      }
    }

    // 4. Incorrecto — analizar tipo de error para feedback pedagógico
    const mejor = correctas[0];
    const mensajeError = analizarError(respNorm, normalizar(mejor));

    return {
      correcto: false,
      ortografiaOk: false,
      sugerencia: mejor,
      mensajeError
    };
  }

  /* ── Análisis pedagógico del error ─────────────────────────── */
  function analizarError(respuesta, correcta) {
    // Detectar errores comunes en nomenclatura IUPAC inorgánica

    const r = respuesta;
    const c = correcta;

    // Error de prefijo numérico
    const prefijos = ['mono','di','tri','tetra','penta','hexa','hepta','octa','nona','deca'];
    const prefijoEnCorrecta = prefijos.find(p => c.includes(p));
    const prefijoEnRespuesta = prefijos.find(p => r.includes(p));

    if (prefijoEnCorrecta && !prefijoEnRespuesta) {
      return `Falta el prefijo multiplicador. Recuerda usar prefijos griegos (mono-, di-, tri-...) para indicar la cantidad de átomos. La respuesta correcta es: <strong>${correcta}</strong>.`;
    }

    if (prefijoEnRespuesta && !prefijoEnCorrecta) {
      return `No es necesario usar prefijos en este tipo de compuesto. La respuesta correcta es: <strong>${correcta}</strong>.`;
    }

    if (prefijoEnCorrecta && prefijoEnRespuesta && prefijoEnCorrecta !== prefijoEnRespuesta) {
      return `El prefijo no es correcto. Has puesto "${prefijoEnRespuesta}" pero lo correcto es "${prefijoEnCorrecta}". La respuesta correcta es: <strong>${correcta}</strong>.`;
    }

    // Error de sufijo (-uro, -oso, -ico, -ato, -ito)
    const sufijos = [
      { suf:'uro',  tipo:'sales hidrácidas o hidruros' },
      { suf:'oso',  tipo:'ácido o sal de menor estado de oxidación' },
      { suf:'ico',  tipo:'ácido o sal de mayor estado de oxidación' },
      { suf:'ato',  tipo:'sal de ácido -ico' },
      { suf:'ito',  tipo:'sal de ácido -oso' },
      { suf:'uro',  tipo:'compuesto binario de no metal' },
      { suf:'hidróxido', tipo:'base o hidróxido' },
    ];
    const sufijoC = sufijos.find(s => c.endsWith(s.suf));
    const sufijoR = sufijos.find(s => r.endsWith(s.suf));

    if (sufijoC && sufijoR && sufijoC.suf !== sufijoR.suf) {
      return `El sufijo no es correcto. Has escrito "…${sufijoR.suf}" pero este compuesto es un <em>${sufijoC.tipo}</em> y termina en "…${sufijoC.suf}". La respuesta correcta es: <strong>${correcta}</strong>.`;
    }

    // Error genérico
    return `La respuesta no es correcta. La nomenclatura IUPAC correcta es: <strong>${correcta}</strong>.`;
  }

  /* ── API pública ────────────────────────────────────────────── */
  return { validar };

})();
