/* ════════════════════════════════════════════════════════════════
   PUBCHEM.JS — Carga de imágenes desde PubChem REST API
   Con fallback SVG si no está disponible
   ════════════════════════════════════════════════════════════════ */

'use strict';

const PubChem = (() => {

  const BASE = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug';
  const cache = {};  // cache en memoria para la sesión

  /**
   * Carga la imagen de un compuesto en el elemento <img> dado.
   * Si falla, muestra el fallback SVG.
   */
  async function cargarImagen(compuesto, imgEl, fallbackEl) {
    imgEl.classList.add('oculto');
    fallbackEl.classList.add('oculto');

    // Usar CID si está definido en el banco, si no buscar por nombre IUPAC en inglés
    const identificador = compuesto.pubchemCID
      ? `cid/${compuesto.pubchemCID}`
      : `name/${encodeURIComponent(compuesto.pubchemNombre || compuesto.nombre)}`;

    const url = `${BASE}/compound/${identificador}/PNG?record_type=2d&image_size=300x300`;

    // Comprobar cache
    if (cache[url]) {
      if (cache[url] === 'error') {
        mostrarFallback(fallbackEl, compuesto);
      } else {
        imgEl.src = cache[url];
        imgEl.classList.remove('oculto');
      }
      return;
    }

    try {
      // Verificar que el compuesto existe en PubChem
      const response = await fetch(url, { signal: AbortSignal.timeout(6000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      cache[url] = objectUrl;

      imgEl.src = objectUrl;
      imgEl.onload  = () => imgEl.classList.remove('oculto');
      imgEl.onerror = () => { cache[url] = 'error'; mostrarFallback(fallbackEl, compuesto); };

    } catch (e) {
      cache[url] = 'error';
      mostrarFallback(fallbackEl, compuesto);
    }
  }

  /* ── Fallback SVG generado programáticamente ────────────────── */
  function mostrarFallback(fallbackEl, compuesto) {
    fallbackEl.classList.remove('oculto');
    fallbackEl.innerHTML = generarSVGSimple(compuesto);
  }

  function generarSVGSimple(compuesto) {
    // Genera un SVG simple mostrando la fórmula con estilo de estructura
    const formula = compuesto.formula;
    const nombre  = compuesto.nombre;

    return `
      <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"
           style="width:200px;height:140px;background:#f8fafe;border-radius:8px;border:1px solid #d0d8e4">
        <rect width="200" height="140" fill="#f8fafe" rx="8"/>
        <text x="100" y="58" text-anchor="middle"
              font-family="DM Mono, monospace" font-size="22"
              fill="#1a3a5c" font-weight="500">
          ${escaparSVG(formula)}
        </text>
        <line x1="30" y1="72" x2="170" y2="72" stroke="#d0d8e4" stroke-width="1"/>
        <text x="100" y="92" text-anchor="middle"
              font-family="DM Sans, sans-serif" font-size="11"
              fill="#6b7a8d">
          ${escaparSVG(nombre.length > 28 ? nombre.substring(0,25) + '…' : nombre)}
        </text>
        <text x="100" y="126" text-anchor="middle"
              font-family="DM Sans, sans-serif" font-size="9"
              fill="#9aa8b8">
          Imagen no disponible offline
        </text>
      </svg>
    `;
  }

  function escaparSVG(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── API pública ────────────────────────────────────────────── */
  return { cargarImagen };

})();
