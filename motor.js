/* ════════════════════════════════════════════════════════════════
   MOTOR.JS v2 — Tutor de Formulación Inorgánica
   Integración completa con banco, validador, pubchem y PDF
   ════════════════════════════════════════════════════════════════ */

'use strict';

const App = (() => {

  /* ── Estado global ───────────────────────────────────────────── */
  let sesion = crearSesionVacia();

  function crearSesionVacia() {
    return {
      codigo: null, guardarCodigo: false,
      nivel: null, bloqueInicial: null, bloqueActual: null,
      subtemaActual: null, modoActual: 'formula-a-nombre',
      totalIntentos: 0, totalAciertos: 0, totalFallos: 0,
      ventana: [],
      bloqueNum: 1, bloqueIntentos: 0, bloqueAciertos: 0,
      historial: [], historialBloques: [],
      ejercicioActual: null,
      compuestosUsados: [],
      intentoActual: 1,
    };
  }

  /* ── Mapa de bloques por nivel ───────────────────────────────── */
  const BLOQUES = {
    '3eso': [
      { id:'oxidos',       icono:'🔴', nombre:'Óxidos',           subtemas:['oxidos_metalicos','oxidos_no_metalicos'] },
      { id:'hidruros',     icono:'🔵', nombre:'Hidruros',         subtemas:['hidruros_metalicos','hidruros_no_metalicos'] },
      { id:'sales_hidrac', icono:'🟡', nombre:'Sales hidrácidas', subtemas:['sales_hidracidas'] },
    ],
    '4eso': [
      { id:'oxidos',       icono:'🔴', nombre:'Óxidos',           subtemas:['oxidos_metalicos','oxidos_no_metalicos'] },
      { id:'hidruros',     icono:'🔵', nombre:'Hidruros',         subtemas:['hidruros_metalicos','hidruros_no_metalicos'] },
      { id:'sales_hidrac', icono:'🟡', nombre:'Sales hidrácidas', subtemas:['sales_hidracidas'] },
      { id:'peroxidos',    icono:'⚪', nombre:'Peróxidos',        subtemas:['peroxidos'] },
      { id:'hidroxidos',   icono:'🟢', nombre:'Hidróxidos',       subtemas:['hidroxidos'] },
      { id:'ac_oxoacidos', icono:'🟠', nombre:'Ácidos oxoácidos', subtemas:['acidos_oxoacidos'] },
    ],
    '1bach': [
      { id:'oxidos',       icono:'🔴', nombre:'Óxidos',           subtemas:['oxidos_metalicos','oxidos_no_metalicos'] },
      { id:'hidruros',     icono:'🔵', nombre:'Hidruros',         subtemas:['hidruros_metalicos','hidruros_no_metalicos'] },
      { id:'sales_hidrac', icono:'🟡', nombre:'Sales hidrácidas', subtemas:['sales_hidracidas'] },
      { id:'peroxidos',    icono:'⚪', nombre:'Peróxidos',        subtemas:['peroxidos'] },
      { id:'hidroxidos',   icono:'🟢', nombre:'Hidróxidos',       subtemas:['hidroxidos'] },
      { id:'ac_oxoacidos', icono:'🟠', nombre:'Ácidos oxoácidos', subtemas:['acidos_oxoacidos'] },
      { id:'oxisales',     icono:'🔷', nombre:'Oxisales',         subtemas:['oxisales'] },
      { id:'hidratos',     icono:'💧', nombre:'Hidratos',         subtemas:['hidratos'] },
    ],
    '2bach': [
      { id:'oxidos',        icono:'🔴', nombre:'Óxidos',           subtemas:['oxidos_metalicos','oxidos_no_metalicos'] },
      { id:'hidruros',      icono:'🔵', nombre:'Hidruros',         subtemas:['hidruros_metalicos','hidruros_no_metalicos'] },
      { id:'sales_hidrac',  icono:'🟡', nombre:'Sales hidrácidas', subtemas:['sales_hidracidas'] },
      { id:'peroxidos',     icono:'⚪', nombre:'Peróxidos',        subtemas:['peroxidos'] },
      { id:'hidroxidos',    icono:'🟢', nombre:'Hidróxidos',       subtemas:['hidroxidos'] },
      { id:'ac_oxoacidos',  icono:'🟠', nombre:'Ácidos oxoácidos', subtemas:['acidos_oxoacidos'] },
      { id:'oxisales',      icono:'🔷', nombre:'Oxisales',         subtemas:['oxisales'] },
      { id:'hidratos',      icono:'💧', nombre:'Hidratos',         subtemas:['hidratos'] },
      { id:'sales_acidas',  icono:'🔸', nombre:'Sales ácidas',     subtemas:['sales_acidas'] },
      { id:'sales_basicas', icono:'🔹', nombre:'Sales básicas',    subtemas:['sales_basicas'] },
      { id:'coordinacion',  icono:'⬡',  nombre:'Complejos',        subtemas:['complejos_coordinacion'] },
    ],
  };

  const ORDEN_NIVELES = ['3eso','4eso','1bach','2bach'];
  function nivelOk(nivelComp, nivelAlumno) {
    return ORDEN_NIVELES.indexOf(nivelComp||'3eso') <= ORDEN_NIVELES.indexOf(nivelAlumno);
  }

  /* ════════════════════════════════════════════════════════════
     PANTALLAS
  ════════════════════════════════════════════════════════════ */
  function mostrarPantalla(id) {
    document.querySelectorAll('.pantalla').forEach(p => {
      p.classList.remove('activa'); p.classList.add('oculta');
    });
    const p = document.getElementById(id);
    if (p) { p.classList.remove('oculta'); p.classList.add('activa'); }
  }

  /* ════════════════════════════════════════════════════════════
     BIENVENIDA
  ════════════════════════════════════════════════════════════ */
  function iniciarSesionNueva() {
    sesion.guardarCodigo = false;
    sesion.codigo = null;
    el('input-codigo-area').classList.add('oculto');
    el('msg-codigo').className = 'msg-codigo oculto';
  }

  function mostrarInputCodigo() {
    el('input-codigo-area').classList.toggle('oculto');
  }

  function cargarSesion() {
    const codigo = el('input-codigo-sesion').value.trim().toUpperCase();
    const msg = el('msg-codigo');
    msg.className = 'msg-codigo';

    if (codigo.length !== 6) {
      msg.textContent = 'El código debe tener 6 caracteres.';
      msg.classList.add('error'); return;
    }

    const datos = localStorage.getItem('formulacion_v1_' + codigo);
    if (!datos) {
      msg.textContent = 'No se encontró ninguna sesión con ese código.';
      msg.classList.add('error'); return;
    }

    try {
      const g = JSON.parse(datos);
      sesion = Object.assign(crearSesionVacia(), g);
      sesion.compuestosUsados = sesion.compuestosUsados || [];
      sesion.guardarCodigo = true;
      msg.textContent = '✓ Sesión recuperada. ¡Bienvenido de nuevo!';
      msg.classList.add('ok');
      const btnN = document.querySelector(`.btn-nivel[data-nivel="${sesion.nivel}"]`);
      if (btnN) seleccionarNivel(btnN);
      setTimeout(() => comenzar(), 800);
    } catch(e) {
      msg.textContent = 'Error al cargar la sesión.';
      msg.classList.add('error');
    }
  }

  function guardarEstado() {
    if (!sesion.guardarCodigo) return;
    if (!sesion.codigo) sesion.codigo = generarCodigo();
    try {
      localStorage.setItem('formulacion_v1_' + sesion.codigo, JSON.stringify({
        codigo: sesion.codigo, guardarCodigo: true,
        nivel: sesion.nivel, bloqueInicial: sesion.bloqueInicial,
        bloqueActual: sesion.bloqueActual, subtemaActual: sesion.subtemaActual,
        modoActual: sesion.modoActual,
        totalIntentos: sesion.totalIntentos, totalAciertos: sesion.totalAciertos,
        totalFallos: sesion.totalFallos, ventana: sesion.ventana,
        bloqueNum: sesion.bloqueNum, historialBloques: sesion.historialBloques,
        compuestosUsados: sesion.compuestosUsados,
      }));
    } catch(e) { console.warn('localStorage no disponible'); }
  }

  function generarCodigo() {
    const c = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({length:6}, () => c[Math.floor(Math.random()*c.length)]).join('');
  }

  /* ── Nivel y bloque ──────────────────────────────────────────── */
  function seleccionarNivel(btn) {
    document.querySelectorAll('.btn-nivel').forEach(b => b.classList.remove('seleccionado'));
    btn.classList.add('seleccionado');
    sesion.nivel = btn.dataset.nivel;
    sesion.bloqueActual = null; sesion.subtemaActual = null;
    renderizarBloques(sesion.nivel);
    actualizarBtnComenzar();
  }

  function renderizarBloques(nivel) {
    const cont = el('bloques-container');
    cont.innerHTML = '';
    (BLOQUES[nivel] || []).forEach(bloque => {
      const hayCompuestos = bloque.subtemas.some(st =>
        ((window.BancoCompuestos||{})[st]||[]).some(c => nivelOk(c.nivel, nivel))
      );
      if (!hayCompuestos) return;
      const btn = document.createElement('button');
      btn.className = 'btn-bloque';
      btn.dataset.bloqueId = bloque.id;
      btn.innerHTML = `<span class="bloque-icono">${bloque.icono}</span>${bloque.nombre}`;
      btn.onclick = () => seleccionarBloque(btn, bloque);
      cont.appendChild(btn);
    });
    if (!cont.children.length) cont.innerHTML = '<p class="bloques-hint">No hay bloques para este nivel.</p>';
  }

  function seleccionarBloque(btn, bloque) {
    document.querySelectorAll('.btn-bloque').forEach(b => b.classList.remove('seleccionado'));
    btn.classList.add('seleccionado');
    sesion.bloqueInicial = bloque.id;
    sesion.bloqueActual  = bloque.id;
    sesion.subtemaActual = bloque.subtemas[0];
    actualizarBtnComenzar();
  }

  function actualizarBtnComenzar() {
    const btn = el('btn-comenzar');
    if (btn) btn.disabled = !(sesion.nivel && sesion.bloqueActual);
  }

  /* ════════════════════════════════════════════════════════════
     COMENZAR
  ════════════════════════════════════════════════════════════ */
  function comenzar() {
    if (sesion.guardarCodigo && !sesion.codigo) sesion.codigo = generarCodigo();
    actualizarBarraEstado();
    mostrarPantalla('pantalla-ejercicio');
    cargarEjercicio();
  }

  /* ════════════════════════════════════════════════════════════
     BARRA DE ESTADO
  ════════════════════════════════════════════════════════════ */
  function actualizarBarraEstado() {
    const noms = {'3eso':'3º ESO','4eso':'4º ESO','1bach':'1º Bach.','2bach':'2º Bach.'};
    txt('estado-nivel', noms[sesion.nivel]||'');
    const bi = bloqueInfo();
    txt('estado-bloque', bi ? bi.nombre + (sesion.modoActual==='nombre-a-formula'?' (inverso)':'') : '');
    txt('total-aciertos', sesion.totalAciertos);
    txt('total-fallos',   sesion.totalFallos);
    txt('total-intentos', sesion.totalIntentos);
    const barra = el('progreso-barra');
    if (barra) barra.style.width = `${(sesion.bloqueIntentos/10)*100}%`;
    txt('progreso-texto', `${sesion.bloqueIntentos} / 10`);
  }

  function bloqueInfo() {
    return (BLOQUES[sesion.nivel]||[]).find(b => b.id === sesion.bloqueActual) || null;
  }

  /* ════════════════════════════════════════════════════════════
     CARGAR EJERCICIO
  ════════════════════════════════════════════════════════════ */
  function cargarEjercicio() {
    if (sesion.ventana.length >= 10) {
      const pct = sesion.ventana.filter(Boolean).length / sesion.ventana.length;
      toggle('aviso-nivel-bajo', pct < 0.5);
    }

    const comp = elegirCompuesto();
    if (!comp) { avanzarSubtema(); cargarEjercicio(); return; }

    sesion.ejercicioActual = comp;
    sesion.intentoActual = 1;

    renderizarPregunta(comp);
    resetUI();
    actualizarBarraEstado();
  }

  function elegirCompuesto() {
    const banco = window.BancoCompuestos || {};
    const lista = (banco[sesion.subtemaActual] || [])
      .filter(c => nivelOk(c.nivel, sesion.nivel))
      .filter(c => !sesion.compuestosUsados.includes(c.formula));
    if (!lista.length) { sesion.compuestosUsados = []; return null; }
    return lista[Math.floor(Math.random() * lista.length)];
  }

  /* ════════════════════════════════════════════════════════════
     RENDERIZAR PREGUNTA
  ════════════════════════════════════════════════════════════ */
  function renderizarPregunta(comp) {
    const inverso = sesion.modoActual === 'nombre-a-formula';
    const fEl = el('formula-texto');
    const iEl = el('formula-nombre-buscar');
    const badge = el('tipo-compuesto-badge');

    if (badge) badge.textContent = comp.tipo || sesion.subtemaActual.replace(/_/g,' ');
    txt('num-ejercicio', `Ejercicio #${sesion.totalIntentos + 1}`);

    if (!inverso) {
      if (fEl) fEl.innerHTML = fmtFormula(comp.formula);
      if (iEl) iEl.textContent = 'Escribe el nombre sistemático IUPAC';
    } else {
      if (fEl) fEl.innerHTML = `<span style="font-family:var(--font-body);font-size:1.3rem;font-style:italic;color:var(--azul)">${comp.nombre}</span>`;
      if (iEl) iEl.textContent = 'Escribe la fórmula química';
    }
  }

  function fmtFormula(f) {
    return f
      .replace(/([A-Za-z\)\]])(\d+)/g, '$1<sub>$2</sub>')
      .replace(/(\d+)([+\-])/g, '<sup>$1$2</sup>')
      .replace(/·/g, ' · ');
  }

  /* ════════════════════════════════════════════════════════════
     RESET UI DEL PANEL DE RESPUESTA
  ════════════════════════════════════════════════════════════ */
  function resetUI() {
    const input = el('input-respuesta');
    if (input) { input.value=''; input.disabled=false; input.className='input-respuesta'; }

    const btnC = document.querySelector('.btn-comprobar:not(.btn-reintento)');
    if (btnC) btnC.disabled = false;

    const btnA = el('btn-ayuda');
    if (btnA) { btnA.disabled=false; btnA.classList.remove('oculto'); }

    ocultar('area-reintento');
    ocultar('opciones-multiples');
    const grid = el('opciones-grid');
    if (grid) grid.innerHTML = '';

    estadoFeedback('esperando');
    setTimeout(() => input && input.focus(), 120);
  }

  /* ════════════════════════════════════════════════════════════
     COMPROBAR RESPUESTA
  ════════════════════════════════════════════════════════════ */
  function comprobarRespuesta() {
    const input = el('input-respuesta');
    const resp = (input ? input.value : '').trim();
    if (!resp) { input && input.focus(); return; }

    if (input) input.disabled = true;
    const btnC = document.querySelector('.btn-comprobar:not(.btn-reintento)');
    if (btnC) btnC.disabled = true;
    const btnA = el('btn-ayuda');
    if (btnA) btnA.disabled = true;

    const correcta = sesion.modoActual === 'nombre-a-formula'
      ? sesion.ejercicioActual.formula
      : sesion.ejercicioActual.nombre;

    procesarResultado(Validador.validar(resp, correcta, sesion.totalIntentos), false);
  }

  function comprobarReintento() {
    const input = el('input-reintento');
    const resp = (input ? input.value : '').trim();
    if (!resp) { input && input.focus(); return; }
    if (input) input.disabled = true;
    const btnR = document.querySelector('.btn-reintento');
    if (btnR) btnR.disabled = true;

    const correcta = sesion.modoActual === 'nombre-a-formula'
      ? sesion.ejercicioActual.formula
      : sesion.ejercicioActual.nombre;

    procesarResultado(Validador.validar(resp, correcta, sesion.totalIntentos), true);
  }

  /* ════════════════════════════════════════════════════════════
     PROCESAR RESULTADO
  ════════════════════════════════════════════════════════════ */
  function procesarResultado(res, esReintento) {
    const comp = sesion.ejercicioActual;
    sesion.totalIntentos++;

    if (res.correcto) {
      sesion.totalAciertos++; sesion.bloqueAciertos++; sesion.bloqueIntentos++;
      ventana(true);
      sesion.compuestosUsados.push(comp.formula);
      sesion.historial.push({ formula:comp.formula, nombre:comp.nombre, acierto:true,
        ortografia:res.ortografiaOk, bloque:sesion.bloqueNum, subtema:sesion.subtemaActual });
      feedbackCorrecto(comp, res);
      guardarEstado(); comprobarSubida();

    } else if (!esReintento) {
      sesion.totalFallos++; sesion.bloqueIntentos++;
      ventana(false);
      feedbackIncorrecto(comp, res);

    } else {
      sesion.historial.push({ formula:comp.formula, nombre:comp.nombre, acierto:false,
        ortografia:null, bloque:sesion.bloqueNum, subtema:sesion.subtemaActual });
      sesion.compuestosUsados.push(comp.formula);
      feedbackTeoria(comp);
      guardarEstado(); comprobarSubida();
    }
    actualizarBarraEstado();
  }

  function ventana(v) {
    sesion.ventana.push(v);
    if (sesion.ventana.length > 10) sesion.ventana.shift();
  }

  /* ════════════════════════════════════════════════════════════
     FEEDBACK
  ════════════════════════════════════════════════════════════ */
  function feedbackCorrecto(comp, res) {
    estadoFeedback('correcto');
    txt('feedback-titulo-ok', comp.nombre);

    const ortDiv = el('feedback-ortografia-ok');
    if (ortDiv) {
      if (!res.ortografiaOk && res.sugerencia) {
        ortDiv.innerHTML = `✏️ Respuesta aceptada, pero recuerda la ortografía: <strong>${res.sugerencia}</strong>`;
        ortDiv.classList.remove('oculto');
      } else { ortDiv.classList.add('oculto'); }
    }

    html('feedback-explicacion', comp.explicacion || '');

    const imgEl  = el('feedback-imagen');
    const fbkEl  = el('feedback-imagen-fallback');
    if (imgEl && fbkEl) {
      imgEl.classList.add('oculto'); fbkEl.classList.add('oculto');
      window.PubChem && window.PubChem.cargarImagen(comp, imgEl, fbkEl);
    }

    const curDiv = el('feedback-curiosidad');
    if (curDiv) {
      if (comp.curiosidad) {
        curDiv.innerHTML = `💡 <strong>¿Sabías que...?</strong> ${comp.curiosidad}`;
        curDiv.classList.remove('oculto');
      } else { curDiv.classList.add('oculto'); }
    }
  }

  function feedbackIncorrecto(comp, res) {
    estadoFeedback('incorrecto');
    txt('feedback-titulo-fail', 'Respuesta incorrecta');
    html('feedback-explicacion-fallo',
      res.mensajeError || `La respuesta correcta es: <strong>${comp.nombre}</strong>`);
    const entDiv = el('feedback-entendido');
    if (entDiv) {
      entDiv.style.opacity = '';
      entDiv.querySelectorAll('button').forEach(b => b.disabled = false);
    }
    ocultar('area-reintento');
  }

  function marcarEntendido(entendido) {
    const entDiv = el('feedback-entendido');
    if (entDiv) { entDiv.style.opacity='0.5'; entDiv.querySelectorAll('button').forEach(b=>b.disabled=true); }

    mostrar('area-reintento');
    txt('msg-reintento', entendido
      ? '¡Bien! Ahora inténtalo de nuevo:'
      : 'Sin problema, vuelve a intentarlo. Si fallas de nuevo te explicaré la teoría:');

    const inputR = el('input-reintento');
    if (inputR) { inputR.value=''; inputR.disabled=false; setTimeout(()=>inputR.focus(),100); }
    const btnR = document.querySelector('.btn-reintento');
    if (btnR) btnR.disabled = false;
  }

  function feedbackTeoria(comp) {
    estadoFeedback('teoria');
    html('feedback-teoria-contenido', comp.teoria || `
      <h4>Respuesta correcta</h4>
      <p>El nombre correcto de <strong>${comp.formula}</strong> es:</p>
      <span class="ejemplo">${comp.nombre}</span>
      <p>${comp.explicacion || ''}</p>
    `);
  }

  /* ════════════════════════════════════════════════════════════
     OPCIONES MÚLTIPLES
  ════════════════════════════════════════════════════════════ */
  function mostrarOpciones() {
    const cont = el('opciones-multiples');
    if (!cont) return;
    cont.classList.toggle('oculto');
    if (cont.classList.contains('oculto')) return;

    const grid = el('opciones-grid');
    if (!grid || grid.children.length) return;

    const inverso = sesion.modoActual === 'nombre-a-formula';
    const correcta = inverso ? sesion.ejercicioActual.formula : sesion.ejercicioActual.nombre;
    const dist = generarDistractoras(correcta, inverso);
    mezclar([correcta, ...dist]).forEach(op => {
      const btn = document.createElement('button');
      btn.className = 'btn-opcion';
      btn.innerHTML = inverso ? fmtFormula(op) : op;
      btn.onclick = () => seleccionarOpcion(btn, op, correcta);
      grid.appendChild(btn);
    });
  }

  function generarDistractoras(correcta, inverso) {
    const banco = window.BancoCompuestos || {};
    let pool = [];
    const bi = bloqueInfo();
    if (bi) {
      bi.subtemas.forEach(st => {
        (banco[st]||[]).forEach(c => {
          const v = inverso ? c.formula : c.nombre;
          if (v !== correcta) pool.push(v);
        });
      });
    }
    return mezclar(pool).slice(0, 3);
  }

  function seleccionarOpcion(btn, opcion, correcta) {
    document.querySelectorAll('.btn-opcion').forEach(b => b.disabled = true);
    btn.classList.add(opcion === correcta ? 'correcta' : 'incorrecta');
    if (opcion !== correcta) {
      document.querySelectorAll('.btn-opcion').forEach(b => {
        if (b !== btn && b.textContent === correcta) b.classList.add('correcta');
      });
    }
    const inputP = el('input-respuesta');
    if (inputP) inputP.value = opcion;
    setTimeout(() => comprobarRespuesta(), 350);
  }

  function mezclar(a) { return [...a].sort(()=>Math.random()-.5); }

  /* ════════════════════════════════════════════════════════════
     SIGUIENTE EJERCICIO
  ════════════════════════════════════════════════════════════ */
  function siguienteEjercicio() {
    if (sesion.bloqueIntentos >= 10) mostrarResumenBloque();
    else cargarEjercicio();
  }

  /* ════════════════════════════════════════════════════════════
     PROGRESIÓN
  ════════════════════════════════════════════════════════════ */
  function comprobarSubida() {
    if (sesion.ventana.length < 10) return;
    if (sesion.ventana.filter(Boolean).length / sesion.ventana.length > 0.8) avanzarSubtema();
  }

  function avanzarSubtema() {
    const bi = bloqueInfo();
    if (!bi) return;
    const subs = bi.subtemas;
    const idx = subs.indexOf(sesion.subtemaActual);

    if (idx < subs.length - 1) {
      sesion.subtemaActual = subs[idx+1]; sesion.compuestosUsados = [];
    } else if (sesion.modoActual === 'formula-a-nombre') {
      sesion.modoActual = 'nombre-a-formula'; sesion.subtemaActual = subs[0]; sesion.compuestosUsados = [];
    } else {
      const bloques = BLOQUES[sesion.nivel]||[];
      const ib = bloques.findIndex(b=>b.id===sesion.bloqueActual);
      if (ib < bloques.length-1) {
        const sig = bloques[ib+1];
        sesion.bloqueActual=sig.id; sesion.subtemaActual=sig.subtemas[0];
        sesion.modoActual='formula-a-nombre'; sesion.compuestosUsados=[]; sesion.ventana=[];
      }
    }
  }

  /* ════════════════════════════════════════════════════════════
     RESUMEN DE BLOQUE
  ════════════════════════════════════════════════════════════ */
  function mostrarResumenBloque() {
    const pct = sesion.bloqueIntentos > 0
      ? Math.round((sesion.bloqueAciertos/sesion.bloqueIntentos)*100) : 0;

    sesion.historialBloques.push({
      num:sesion.bloqueNum, aciertos:sesion.bloqueAciertos,
      intentos:sesion.bloqueIntentos, pct, subtema:sesion.subtemaActual,
    });

    txt('resumen-bloque-num', `Bloque ${sesion.bloqueNum}`);
    txt('resumen-porcentaje', `${pct}%`);
    txt('resumen-aciertos', sesion.bloqueAciertos);
    txt('resumen-fallos', sesion.bloqueIntentos - sesion.bloqueAciertos);

    const msgs = {
      a:'🌟 ¡Excelente! Dominas este tipo de compuestos.',
      b:'✅ Muy bien. Superaste el 80%. Avanzarás de nivel.',
      c:'👍 Buen progreso. Sigue practicando.',
      d:'💪 Vas por buen camino. Repasa los errores.',
      e:'⚠️ Porcentaje bajo. Habla con tu profesor.',
    };
    const k = pct>=90?'a':pct>=80?'b':pct>=60?'c':pct>=50?'d':'e';
    html('resumen-mensaje', msgs[k]);
    txt('resumen-progresion', pct>80
      ? '→ El siguiente bloque avanzará al siguiente subtema.'
      : '→ Continuarás practicando el mismo subtema.');

    renderizarListaResumen();
    dibujarGraficaResumen();
    mostrarPantalla('pantalla-resumen');
  }

  function renderizarListaResumen() {
    const lista = el('resumen-lista');
    if (!lista) return;
    lista.innerHTML = '';
    sesion.historial.slice(-sesion.bloqueIntentos).forEach(item => {
      const d = document.createElement('div');
      d.className = `resumen-item ${item.acierto?'ok':'fail'}`;
      d.innerHTML = `
        <span class="item-formula">${item.formula}</span>
        <span class="item-nombre">${item.nombre}</span>
        <span class="item-icono">${item.acierto?'✅':'❌'}</span>`;
      lista.appendChild(d);
    });
  }

  function dibujarGraficaResumen() {
    const canvas = el('resumen-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const datos = sesion.historialBloques;
    if (!datos.length) return;

    const W=canvas.width, H=canvas.height, p={t:22,r:24,b:28,l:36};
    const gw=W-p.l-p.r, gh=H-p.t-p.b;

    // Líneas de referencia
    ctx.setLineDash([3,4]); ctx.lineWidth=0.8;
    [0,50,80,100].forEach(v => {
      const y = p.t+gh-(v/100)*gh;
      ctx.strokeStyle='#d0d8e4'; ctx.beginPath(); ctx.moveTo(p.l,y); ctx.lineTo(W-p.r,y); ctx.stroke();
      ctx.fillStyle='#9aa8b8'; ctx.font='9px sans-serif';
      ctx.fillText(`${v}%`, 2, y+3.5);
    });
    ctx.setLineDash([]);

    if (datos.length === 1) {
      const bh=(datos[0].pct/100)*gh;
      ctx.fillStyle=datos[0].pct>=80?'#1e7a4a':datos[0].pct>=50?'#e8a020':'#b03030';
      ctx.fillRect(p.l+gw/2-12, p.t+gh-bh, 24, bh);
      ctx.fillStyle='#0f1923'; ctx.font='10px monospace';
      ctx.fillText(`${datos[0].pct}%`, p.l+gw/2-12, p.t+gh-bh-5);
      return;
    }

    ctx.strokeStyle='#4a90c4'; ctx.lineWidth=2.5; ctx.lineJoin='round';
    ctx.beginPath();
    datos.forEach((d,i) => {
      const x=p.l+(i/(datos.length-1))*gw, y=p.t+gh-(d.pct/100)*gh;
      i?ctx.lineTo(x,y):ctx.moveTo(x,y);
    });
    ctx.stroke();

    datos.forEach((d,i) => {
      const x=p.l+(i/(datos.length-1))*gw, y=p.t+gh-(d.pct/100)*gh;
      ctx.beginPath();
      ctx.fillStyle=d.pct>=80?'#1e7a4a':d.pct>=50?'#e8a020':'#b03030';
      ctx.arc(x,y,5,0,Math.PI*2); ctx.fill();
      ctx.fillStyle='#0f1923'; ctx.font='9px monospace';
      ctx.fillText(`${d.pct}%`, x-12, y-9);
      ctx.fillStyle='#9aa8b8'; ctx.font='9px sans-serif';
      ctx.fillText(`B${d.num}`, x-5, p.t+gh+14);
    });
  }

  /* ════════════════════════════════════════════════════════════
     CONTINUAR / FIN
  ════════════════════════════════════════════════════════════ */
  function continuarSesion() {
    sesion.bloqueNum++; sesion.bloqueIntentos=0; sesion.bloqueAciertos=0;
    mostrarPantalla('pantalla-ejercicio');
    cargarEjercicio();
  }

  function finalizarSesion() { mostrarPantallaFin(); }

  function confirmarFin() {
    abrirModal('¿Quieres finalizar la sesión y ver el informe completo?', mostrarPantallaFin);
  }

  function mostrarPantallaFin() {
    const pct = sesion.totalIntentos>0
      ? Math.round((sesion.totalAciertos/sesion.totalIntentos)*100) : 0;

    html('fin-stats', `
      <div class="fin-stat"><span class="fin-stat-num">${sesion.totalIntentos}</span><span class="fin-stat-lbl">Intentos</span></div>
      <div class="fin-stat"><span class="fin-stat-num" style="color:var(--verde)">${sesion.totalAciertos}</span><span class="fin-stat-lbl">Aciertos</span></div>
      <div class="fin-stat"><span class="fin-stat-num" style="color:var(--acento)">${pct}%</span><span class="fin-stat-lbl">Porcentaje</span></div>
    `);

    const codDiv = el('fin-codigo-sesion');
    if (codDiv) {
      if (sesion.guardarCodigo && sesion.codigo) {
        codDiv.classList.remove('oculto');
        txt('fin-codigo-valor', sesion.codigo);
      } else { codDiv.classList.add('oculto'); }
    }

    recomendacionesUI(pct);
    mostrarPantalla('pantalla-fin');
    guardarEstado();
  }

  function recomendacionesUI(pct) {
    const recs = [];
    if (pct<50)      recs.push('Consulta con tu profesor antes de continuar.','Repasa la teoría de nomenclatura IUPAC.');
    else if (pct<70) recs.push('Practica los tipos con menor acierto.','Revisa las explicaciones de los errores.');
    else if (pct<85) recs.push('Trabaja la ortografía: tildes en prefijos.','Prueba el modo inverso: nombre → fórmula.');
    else             recs.push('¡Excelente nivel! Avanza al siguiente bloque.','Practica complejos y cuaternarios.');

    const f={};
    sesion.historial.filter(h=>!h.acierto).forEach(h=>{f[h.subtema]=(f[h.subtema]||0)+1;});
    const flojos = Object.entries(f).sort((a,b)=>b[1]-a[1]).slice(0,2).map(([k])=>k.replace(/_/g,' '));
    if (flojos.length) recs.push(`Presta más atención a: ${flojos.join(' y ')}.`);

    html('fin-recomendaciones', `<h3>Recomendaciones</h3><ul>${recs.map(r=>`<li>${r}</li>`).join('')}</ul>`);
  }

  /* ════════════════════════════════════════════════════════════
     PDF
  ════════════════════════════════════════════════════════════ */
  function descargarPDF() {
    if (window.PDFReport) window.PDFReport.generar(sesion);
    else alert('jsPDF no disponible. Comprueba tu conexión a internet.');
  }

  /* ════════════════════════════════════════════════════════════
     REINICIAR
  ════════════════════════════════════════════════════════════ */
  function reiniciar() {
    sesion = crearSesionVacia();
    document.querySelectorAll('.btn-nivel').forEach(b=>b.classList.remove('seleccionado'));
    html('bloques-container','<p class="bloques-hint">← Selecciona primero tu nivel</p>');
    const bc=el('btn-comenzar'); if(bc) bc.disabled=true;
    ocultar('input-codigo-area');
    const mc=el('msg-codigo'); if(mc){mc.className='msg-codigo oculto';}
    mostrarPantalla('pantalla-bienvenida');
  }

  /* ════════════════════════════════════════════════════════════
     MODAL
  ════════════════════════════════════════════════════════════ */
  function abrirModal(texto, cb) {
    txt('modal-texto', texto);
    mostrar('modal-overlay');
    const bc=el('modal-confirmar');
    if(bc) bc.onclick=()=>{cerrarModal();cb&&cb();};
  }
  function cerrarModal() { ocultar('modal-overlay'); }

  /* ════════════════════════════════════════════════════════════
     HELPERS DOM
  ════════════════════════════════════════════════════════════ */
  const el    = id => document.getElementById(id);
  const txt   = (id,v) => { const e=el(id); if(e) e.textContent=v; };
  const html  = (id,v) => { const e=el(id); if(e) e.innerHTML=v; };
  const ocultar = id => { const e=el(id); if(e) e.classList.add('oculto'); };
  const mostrar = id => { const e=el(id); if(e) e.classList.remove('oculto'); };
  const toggle  = (id,show) => { const e=el(id); if(e) e.classList.toggle('oculto',!show); };

  function estadoFeedback(estado) {
    ['esperando','correcto','incorrecto','teoria'].forEach(e => {
      const d=el(`feedback-${e}`); if(d) d.classList.toggle('oculto', e!==estado);
    });
    const panel=el('panel-feedback');
    if(panel) panel.classList.toggle('panel-esperando', estado==='esperando');
  }

  /* ════════════════════════════════════════════════════════════
     API PÚBLICA
  ════════════════════════════════════════════════════════════ */
  return {
    iniciarSesionNueva, mostrarInputCodigo, cargarSesion,
    seleccionarNivel, comenzar,
    comprobarRespuesta, comprobarReintento,
    mostrarOpciones, marcarEntendido,
    siguienteEjercicio, continuarSesion,
    finalizarSesion, confirmarFin,
    descargarPDF, reiniciar, cerrarModal,
    getSesion: () => sesion,
  };

})();
