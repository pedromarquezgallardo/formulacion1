/* ════════════════════════════════════════════════════════════════
   PDF_REPORT.JS — Generación del informe de sesión con jsPDF
   ════════════════════════════════════════════════════════════════ */

'use strict';

const PDFReport = (() => {

  function generar(sesion) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    const W = 210, H = 297;
    const margen = 18;
    let y = margen;

    const pct = sesion.totalIntentos > 0
      ? Math.round((sesion.totalAciertos / sesion.totalIntentos) * 100)
      : 0;

    const niveles = { '3eso':'3º ESO', '4eso':'4º ESO', '1bach':'1º Bachillerato', '2bach':'2º Bachillerato' };
    const fecha = new Date().toLocaleDateString('es-ES', {
      day:'2-digit', month:'long', year:'numeric'
    });

    /* ── Encabezado ──────────────────────────────────────────── */
    // Fondo azul header
    doc.setFillColor(26, 58, 92);
    doc.rect(0, 0, W, 42, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Tutor de Formulación Inorgánica', margen, 16);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text('Informe de sesión · Nomenclatura IUPAC en español', margen, 24);

    doc.setFontSize(9);
    doc.setTextColor(180, 200, 220);
    doc.text(`Fecha: ${fecha}`, margen, 32);
    if (sesion.codigo) {
      doc.text(`Código de sesión: ${sesion.codigo}`, margen, 38);
    }
    doc.text(`Nivel: ${niveles[sesion.nivel] || sesion.nivel}`, W - margen - 40, 32);

    y = 52;
    doc.setTextColor(15, 25, 35);

    /* ── Resumen global ──────────────────────────────────────── */
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(13);
    doc.setTextColor(26, 58, 92);
    doc.text('Resumen global', margen, y);
    y += 8;

    // Cajas de estadísticas
    const cajas = [
      { lbl: 'Intentos',  val: sesion.totalIntentos,  color: [42, 95, 143] },
      { lbl: 'Aciertos',  val: sesion.totalAciertos,  color: [30, 122, 74] },
      { lbl: 'Fallos',    val: sesion.totalFallos,     color: [176, 48, 48] },
      { lbl: '% Acierto', val: `${pct}%`,              color: [232, 160, 32] },
    ];

    const cajaW = (W - margen * 2 - 9) / 4;
    cajas.forEach((c, i) => {
      const x = margen + i * (cajaW + 3);
      doc.setFillColor(...c.color);
      doc.roundedRect(x, y, cajaW, 20, 3, 3, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text(String(c.val), x + cajaW / 2, y + 12, { align: 'center' });
      doc.setFontSize(8);
      doc.setFont('helvetica', 'normal');
      doc.text(c.lbl, x + cajaW / 2, y + 18, { align: 'center' });
    });

    y += 28;
    doc.setTextColor(15, 25, 35);

    /* ── Gráfica de progreso por bloques ─────────────────────── */
    if (sesion.historialBloques.length > 0) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(26, 58, 92);
      doc.text('Progreso por bloques', margen, y);
      y += 6;

      const gW = W - margen * 2;
      const gH = 40;
      const datos = sesion.historialBloques;

      // Fondo de gráfica
      doc.setFillColor(244, 246, 249);
      doc.roundedRect(margen, y, gW, gH, 2, 2, 'F');

      // Líneas de referencia
      doc.setDrawColor(208, 216, 228);
      doc.setLineWidth(0.3);
      [50, 80].forEach(v => {
        const lineY = y + gH - (v / 100) * gH;
        doc.line(margen, lineY, margen + gW, lineY);
        doc.setTextColor(154, 168, 184);
        doc.setFontSize(7);
        doc.text(`${v}%`, margen + 1, lineY - 1);
      });

      // Barras
      if (datos.length > 0) {
        const barW = Math.min(12, (gW - 10) / datos.length - 3);
        datos.forEach((d, i) => {
          const bx = margen + 6 + i * ((gW - 10) / datos.length);
          const bh = (d.pct / 100) * (gH - 4);
          const by = y + gH - bh - 2;

          const col = d.pct >= 80 ? [30,122,74] : d.pct >= 50 ? [232,160,32] : [176,48,48];
          doc.setFillColor(...col);
          doc.rect(bx, by, barW, bh, 'F');

          doc.setTextColor(26, 58, 92);
          doc.setFontSize(7);
          doc.text(`${d.pct}%`, bx + barW/2, by - 1, { align: 'center' });
          doc.setTextColor(107, 122, 141);
          doc.text(`B${d.num}`, bx + barW/2, y + gH + 4, { align: 'center' });
        });
      }

      y += gH + 12;
    }

    /* ── Nivel alcanzado ──────────────────────────────────────── */
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(26, 58, 92);
    doc.text('Nivel alcanzado', margen, y);
    y += 6;

    const nivel = calcularNivel(pct, sesion);
    doc.setFillColor(240, 246, 255);
    doc.roundedRect(margen, y, W - margen*2, 12, 2, 2, 'F');
    doc.setTextColor(15, 25, 35);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.text(nivel, margen + 4, y + 8);
    y += 18;

    /* ── Recomendaciones ─────────────────────────────────────── */
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(26, 58, 92);
    doc.text('Recomendaciones personalizadas', margen, y);
    y += 6;

    const recs = generarRecomendacionesPDF(pct, sesion);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(15, 25, 35);

    recs.forEach(rec => {
      // Verificar salto de página
      if (y > H - 30) { doc.addPage(); y = margen; }

      doc.setFillColor(255, 243, 214);
      doc.roundedRect(margen, y, W - margen*2, 9, 1, 1, 'F');
      doc.setTextColor(40, 40, 40);
      doc.text(`• ${rec}`, margen + 4, y + 6);
      y += 12;
    });

    y += 4;

    /* ── Tabla de ejercicios ─────────────────────────────────── */
    if (sesion.historial.length > 0) {
      if (y > H - 50) { doc.addPage(); y = margen; }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(26, 58, 92);
      doc.text('Detalle de ejercicios', margen, y);
      y += 6;

      // Cabecera de tabla
      doc.setFillColor(26, 58, 92);
      doc.rect(margen, y, W - margen*2, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(8);
      doc.setFont('helvetica', 'bold');
      doc.text('#', margen + 2, y + 5.5);
      doc.text('Fórmula', margen + 10, y + 5.5);
      doc.text('Nombre correcto (IUPAC)', margen + 36, y + 5.5);
      doc.text('Subtema', margen + 118, y + 5.5);
      doc.text('Res.', margen + 162, y + 5.5);
      y += 8;

      doc.setFont('helvetica', 'normal');
      sesion.historial.forEach((item, idx) => {
        if (y > H - 20) { doc.addPage(); y = margen; }

        const bg = idx % 2 === 0 ? [248, 250, 253] : [255, 255, 255];
        doc.setFillColor(...bg);
        doc.rect(margen, y, W - margen*2, 7, 'F');

        doc.setTextColor(15, 25, 35);
        doc.setFontSize(7.5);
        doc.text(String(idx + 1), margen + 2, y + 5);
        doc.text(item.formula.substring(0, 10), margen + 10, y + 5);

        const nombreMostrar = item.nombre.length > 42
          ? item.nombre.substring(0, 39) + '…'
          : item.nombre;
        doc.text(nombreMostrar, margen + 36, y + 5);

        const subtema = (item.subtema || '').replace(/_/g, ' ').substring(0, 18);
        doc.text(subtema, margen + 118, y + 5);

        doc.setTextColor(item.acierto ? 30 : 176, item.acierto ? 122 : 48, item.acierto ? 74 : 48);
        doc.text(item.acierto ? '✓' : '✗', margen + 165, y + 5);

        y += 7;
      });
    }

    /* ── Pie de página ────────────────────────────────────────── */
    const totalPags = doc.internal.getNumberOfPages();
    for (let p = 1; p <= totalPags; p++) {
      doc.setPage(p);
      doc.setFillColor(244, 246, 249);
      doc.rect(0, H - 12, W, 12, 'F');
      doc.setTextColor(154, 168, 184);
      doc.setFontSize(7.5);
      doc.setFont('helvetica', 'normal');
      doc.text(
        'Tutor de Formulación Inorgánica · Nomenclatura IUPAC en español · Generado el ' + fecha,
        margen, H - 5
      );
      doc.text(`Página ${p} de ${totalPags}`, W - margen, H - 5, { align: 'right' });
    }

    /* ── Guardar ──────────────────────────────────────────────── */
    const nombreArchivo = sesion.codigo
      ? `formulacion-informe-${sesion.codigo}-${new Date().toISOString().slice(0,10)}.pdf`
      : `formulacion-informe-${new Date().toISOString().slice(0,10)}.pdf`;

    doc.save(nombreArchivo);
  }

  /* ── Nivel alcanzado (texto) ────────────────────────────────── */
  function calcularNivel(pct, sesion) {
    const bloques = sesion.historialBloques.length;
    if (pct >= 90 && bloques >= 3) return '⭐⭐⭐ Nivel avanzado — Excelente dominio de la nomenclatura IUPAC.';
    if (pct >= 75) return '⭐⭐ Nivel medio-alto — Buen manejo de los compuestos inorgánicos trabajados.';
    if (pct >= 55) return '⭐ Nivel medio — Progreso correcto, con margen de mejora en algunos tipos.';
    return '⚠ Nivel básico — Se recomienda reforzar los conceptos fundamentales con el profesor.';
  }

  /* ── Recomendaciones para PDF ───────────────────────────────── */
  function generarRecomendacionesPDF(pct, sesion) {
    const recs = [];

    if (pct < 50) {
      recs.push('Consulta con tu profesor antes de continuar con el siguiente bloque temático.');
      recs.push('Repasa el concepto de estado de oxidación y los prefijos multiplicadores IUPAC.');
    } else if (pct < 70) {
      recs.push('Practica más los tipos de compuestos en los que has obtenido menor puntuación.');
      recs.push('Revisa las explicaciones que aparecieron en los ejercicios incorrectos.');
    } else if (pct < 85) {
      recs.push('Presta atención a la ortografía: tildes en prefijos (dióxido, trióxido...).');
      recs.push('Practica el modo inverso: dado el nombre, escribe la fórmula.');
    } else {
      recs.push('¡Excelente nivel! Puedes avanzar al siguiente bloque del temario.');
      recs.push('Considera practicar los compuestos más complejos (coordinación, cuaternarios).');
    }

    // Subtemas con más fallos
    const fallos = {};
    sesion.historial.filter(h => !h.acierto).forEach(h => {
      fallos[h.subtema] = (fallos[h.subtema] || 0) + 1;
    });
    const flojos = Object.entries(fallos).sort((a,b)=>b[1]-a[1]).slice(0,2);
    if (flojos.length > 0) {
      const nombres = flojos.map(([k]) => k.replace(/_/g,' ')).join(' y ');
      recs.push(`Dedica tiempo extra a repasar: ${nombres}.`);
    }

    return recs;
  }

  /* ── API pública ────────────────────────────────────────────── */
  return { generar };

})();
