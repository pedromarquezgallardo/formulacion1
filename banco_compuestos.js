/* ════════════════════════════════════════════════════════════════
   BANCO_COMPUESTOS.JS — Tutor de Formulación Inorgánica
   Nomenclatura sistemática IUPAC en español
   ~180 compuestos organizados por subtema
   Cada entrada: formula, nombre, tipo, nivel mínimo,
                 explicacion, curiosidad, teoria, pubchemCID
   ════════════════════════════════════════════════════════════════ */

'use strict';

window.BancoCompuestos = {

  /* ════════════════════════════════════════════════════════════
     BLOQUE 1: ÓXIDOS
  ════════════════════════════════════════════════════════════ */

  oxidos_metalicos: [
    {
      formula: 'Na2O',
      nombre: 'óxido de disodio',
      tipo: 'Óxido metálico',
      nivel: '3eso',
      pubchemCID: 73971,
      explicacion: 'El sodio tiene estado de oxidación +1 (único posible). Dos átomos de Na compensan un átomo de O (−2). Prefijo <em>di</em> para 2 sodios, no se usa prefijo <em>mono</em> para el oxígeno cuando va al final.',
      curiosidad: 'El óxido de disodio reacciona violentamente con el agua formando hidróxido de sodio (sosa cáustica). Por eso el sodio metálico nunca debe contactar con agua.',
      teoria: `<h4>Óxidos metálicos — nomenclatura IUPAC</h4>
        <p>Fórmula general: <strong>Metal + O</strong></p>
        <p>Nombre: <strong>"óxido de" + prefijo griego + nombre del metal</strong></p>
        <ul>
          <li>Se usan prefijos multiplicadores: mono, di, tri, tetra, penta…</li>
          <li>El prefijo <em>mono</em> se omite solo para el oxígeno cuando aparece al final y es único.</li>
          <li>Ajustar prefijos para que la carga total sea 0.</li>
        </ul>
        <span class="ejemplo">Na₂O → óxido de di<u>sodio</u> (2×(+1) + 1×(−2) = 0)</span>`
    },
    {
      formula: 'MgO',
      nombre: 'óxido de magnesio',
      tipo: 'Óxido metálico',
      nivel: '3eso',
      pubchemCID: 14792,
      explicacion: 'Mg tiene estado de oxidación +2 y O tiene −2. Un átomo de cada uno. Al ser uno solo de cada elemento, no se usan prefijos (se omite <em>mono</em>).',
      curiosidad: 'El óxido de magnesio se usa como antiácido estomacal y como material refractario en hornos industriales, ya que funde a más de 2800 °C.',
      teoria: `<h4>Óxidos metálicos con un solo estado de oxidación</h4>
        <p>Cuando el metal solo tiene un posible estado de oxidación (Na⁺, Mg²⁺, Al³⁺, Ca²⁺...), la fórmula y el nombre quedan determinados únicamente por la electroneutralidad.</p>
        <span class="ejemplo">MgO → óxido de magnesio (sin prefijos, 1×(+2) + 1×(−2) = 0)</span>`
    },
    {
      formula: 'Al2O3',
      nombre: 'óxido de dialuminio y trioxígeno',
      tipo: 'Óxido metálico',
      nivel: '3eso',
      pubchemCID: 9989226,
      explicacion: 'Al tiene estado de oxidación +3 y O −2. Para equilibrar cargas: 2 átomos de Al (2×3=6+) y 3 átomos de O (3×2=6−). Prefijo <em>di</em> para el Al y <em>tri</em> para el O.',
      curiosidad: 'El óxido de dialuminio y trioxígeno es el principal componente del corindón. En su forma cristalina pura da lugar al rubí (con Cr) y al zafiro (con Fe y Ti).',
      teoria: `<h4>Óxidos con prefijos en ambos elementos</h4>
        <p>Cuando ni el número de átomos del metal ni el del oxígeno es 1, se ponen prefijos a ambos.</p>
        <span class="ejemplo">Al₂O₃ → óxido de di<u>aluminio</u> y tri<u>oxígeno</u></span>`
    },
    {
      formula: 'CaO',
      nombre: 'óxido de calcio',
      tipo: 'Óxido metálico',
      nivel: '3eso',
      pubchemCID: 14778,
      explicacion: 'Ca (+2) y O (−2) se compensan con un átomo de cada uno. Sin prefijos al ser proporción 1:1.',
      curiosidad: 'La cal viva. Se obtiene calcinando piedra caliza (CaCO₃). Al añadirle agua se convierte en cal apagada Ca(OH)₂, usada en construcción desde hace milenios.',
      teoria: `<h4>Óxidos 1:1</h4><p>Cuando la proporción es 1:1, no se escriben prefijos (se omite <em>mono</em> en ambos casos).</p>
        <span class="ejemplo">CaO → óxido de calcio</span>`
    },
    {
      formula: 'Fe2O3',
      nombre: 'óxido de dihierro y trioxígeno',
      tipo: 'Óxido metálico',
      nivel: '4eso',
      pubchemCID: 518696,
      explicacion: 'El hierro puede tener estados de oxidación +2 y +3. Aquí: 2 Fe con +3 (6+) y 3 O con −2 (6−). Prefijo <em>di</em> para Fe y <em>tri</em> para O.',
      curiosidad: 'Es el óxido de hierro(III), conocido popularmente como óxido rojo o herrumbre. Es el pigmento natural del ocre rojo utilizado en pinturas rupestres desde hace 40 000 años.',
      teoria: `<h4>Metales con varios estados de oxidación</h4>
        <p>Cuando un metal puede tener varios estados de oxidación, los prefijos en la nomenclatura sistemática IUPAC indican inequívocamente cuántos átomos de cada elemento hay.</p>
        <span class="ejemplo">Fe₂O₃ → óxido de di<u>hierro</u> y tri<u>oxígeno</u> (Fe en +3)</span>
        <span class="ejemplo">FeO → óxido de hierro (Fe en +2)</span>`
    },
    {
      formula: 'FeO',
      nombre: 'óxido de hierro',
      tipo: 'Óxido metálico',
      nivel: '4eso',
      pubchemCID: 14945,
      explicacion: 'Fe (+2) y O (−2). Proporción 1:1, sin prefijos. El hierro está en su estado de oxidación +2.',
      curiosidad: 'El óxido de hierro aparece como mineral wüstita. Junto con Fe₂O₃ forma la cascarilla negra que recubre el acero al forjarse.',
      teoria: `<h4>Distinción Fe²⁺ / Fe³⁺ por prefijos</h4>
        <p>FeO (1:1, sin prefijos) → Fe en +2. Fe₂O₃ (2:3, con prefijos) → Fe en +3.</p>
        <p>Los prefijos evitan la ambigüedad sin necesidad de indicar el estado de oxidación.</p>`
    },
    {
      formula: 'Fe3O4',
      nombre: 'óxido de trihierro y tetraoxígeno',
      tipo: 'Óxido metálico',
      nivel: '1bach',
      pubchemCID: 16211978,
      explicacion: 'La magnetita contiene hierro en dos estados de oxidación (+2 y +3) simultáneamente. En nomenclatura sistemática se indican los átomos: <em>tri</em> para Fe y <em>tetra</em> para O.',
      curiosidad: 'La magnetita fue el primer imán natural conocido. Los marineros de la antigüedad usaban trozos de magnetita como brújulas primitivas.',
      teoria: `<h4>Óxidos mixtos</h4>
        <p>Algunos óxidos contienen el mismo metal en dos estados de oxidación. La nomenclatura sistemática IUPAC los nombra directamente con prefijos, sin intentar separar los estados de oxidación.</p>
        <span class="ejemplo">Fe₃O₄ → óxido de tri<u>hierro</u> y tetra<u>oxígeno</u></span>`
    },
    {
      formula: 'CuO',
      nombre: 'óxido de cobre',
      tipo: 'Óxido metálico',
      nivel: '4eso',
      pubchemCID: 14829,
      explicacion: 'Cu (+2) y O (−2). Proporción 1:1. El cobre aquí está en estado de oxidación +2.',
      curiosidad: 'El óxido de cobre(II) da el color negro a algunos esmaltes cerámicos. También se usa como pigmento en vidrio azul-verde.',
      teoria: `<h4>Cobre: dos óxidos posibles</h4>
        <span class="ejemplo">Cu₂O → óxido de dicobre (Cu en +1)</span>
        <span class="ejemplo">CuO → óxido de cobre (Cu en +2)</span>
        <p>Los prefijos distinguen cuál es cuál.</p>`
    },
    {
      formula: 'Cu2O',
      nombre: 'óxido de dicobre',
      tipo: 'Óxido metálico',
      nivel: '4eso',
      pubchemCID: 62695,
      explicacion: 'Dos átomos de Cu (+1) compensan un átomo de O (−2). Prefijo <em>di</em> para el cobre.',
      curiosidad: 'El óxido de dicobre da el color rojo-ladrillo a algunos minerales y se usa como fungicida en pinturas antiincrustantes para barcos.',
      teoria: `<h4>Cobre: dos óxidos posibles</h4>
        <span class="ejemplo">Cu₂O → óxido de di<u>cobre</u> (Cu en +1)</span>
        <span class="ejemplo">CuO → óxido de cobre (Cu en +2)</span>`
    },
    {
      formula: 'PbO2',
      nombre: 'óxido de plomo y dioxígeno',
      tipo: 'Óxido metálico',
      nivel: '1bach',
      pubchemCID: 14829,
      explicacion: 'Pb (+4) y 2 O (−2): 1×(+4) + 2×(−2) = 0. Prefijo <em>di</em> para los dos oxígenos.',
      curiosidad: 'Es el óxido activo en las baterías de plomo-ácido de los automóviles. Sin él, el coche no arrancaría.',
      teoria: `<h4>Óxido de plomo</h4>
        <p>El plomo tiene estados de oxidación +2 y +4. Los prefijos permiten distinguirlos:</p>
        <span class="ejemplo">PbO → óxido de plomo (Pb en +2)</span>
        <span class="ejemplo">PbO₂ → óxido de plomo y di<u>oxígeno</u> (Pb en +4)</span>`
    },
    {
      formula: 'Mn2O7',
      nombre: 'óxido de dimanganeso y heptaoxígeno',
      tipo: 'Óxido metálico',
      nivel: '2bach',
      pubchemCID: 166793,
      explicacion: 'Mn en estado de oxidación +7 (el máximo del manganeso). 2 Mn (+14) y 7 O (−14). Prefijos <em>di</em> y <em>hepta</em>.',
      curiosidad: 'Es un líquido aceitoso verde oscuro a temperatura ambiente, extraordinariamente oxidante. Explota en contacto con materia orgánica. Se obtiene al tratar permanganato de potasio con ácido sulfúrico concentrado.',
      teoria: `<h4>Manganeso: múltiples estados de oxidación</h4>
        <p>El Mn puede tener +2, +3, +4, +6 y +7. Los prefijos son esenciales para distinguir sus óxidos.</p>
        <span class="ejemplo">MnO → óxido de manganeso (Mn en +2)</span>
        <span class="ejemplo">Mn₂O₇ → óxido de dimanganeso y heptaoxígeno (Mn en +7)</span>`
    },
    {
      formula: 'Cr2O3',
      nombre: 'óxido de dicromo y trioxígeno',
      tipo: 'Óxido metálico',
      nivel: '1bach',
      pubchemCID: 517277,
      explicacion: 'Cr (+3) y O (−2). 2 átomos de Cr (6+) y 3 de O (6−). Estructura análoga al Al₂O₃.',
      curiosidad: 'Es el pigmento "verde de cromo", ampliamente usado en pinturas artísticas y en el colorante de los billetes de euro.',
      teoria: `<h4>Cromo: estados de oxidación +3 y +6</h4>
        <span class="ejemplo">Cr₂O₃ → óxido de di<u>cromo</u> y tri<u>oxígeno</u> (Cr en +3)</span>
        <span class="ejemplo">CrO₃ → óxido de cromo y trioxígeno (Cr en +6)</span>`
    },
  ],

  oxidos_no_metalicos: [
    {
      formula: 'CO2',
      nombre: 'dióxido de carbono',
      tipo: 'Óxido no metálico',
      nivel: '3eso',
      pubchemCID: 280,
      explicacion: 'El carbono tiene aquí estado de oxidación +4. Un C y dos O. Nombre: prefijo numérico + "óxido de" + no metal. En los óxidos de no metales el orden es inverso: primero el prefijo del oxígeno.',
      curiosidad: 'El CO₂ representa el 0,04% de la atmósfera actual, pero su concentración ha aumentado un 50% desde la revolución industrial, siendo el principal responsable del cambio climático.',
      teoria: `<h4>Óxidos de no metales — nomenclatura IUPAC</h4>
        <p>Fórmula: <strong>No metal + O</strong></p>
        <p>Nombre: <strong>prefijo+óxido de + prefijo + no metal</strong></p>
        <p>Se usan prefijos en ambos elementos. El prefijo <em>mono</em> se omite solo cuando el no metal aparece sin prefijo al inicio.</p>
        <span class="ejemplo">CO₂ → di<u>óxido</u> de carbono</span>
        <span class="ejemplo">CO → monóxido de carbono</span>`
    },
    {
      formula: 'CO',
      nombre: 'monóxido de carbono',
      tipo: 'Óxido no metálico',
      nivel: '3eso',
      pubchemCID: 281,
      explicacion: 'Un átomo de C y uno de O. Se usa el prefijo <em>mono</em> para el oxígeno porque es necesario distinguirlo del CO₂.',
      curiosidad: 'Gas incoloro e inodoro, altamente tóxico. Se une a la hemoglobina con 240 veces más afinidad que el oxígeno, impidiendo el transporte de O₂. Es el responsable de intoxicaciones por estufas de gas mal ventiladas.',
      teoria: `<h4>Distinción CO / CO₂</h4>
        <span class="ejemplo">CO → mon<u>óxido</u> de carbono</span>
        <span class="ejemplo">CO₂ → di<u>óxido</u> de carbono</span>
        <p>El prefijo <em>mono</em> es imprescindible para distinguir ambos compuestos.</p>`
    },
    {
      formula: 'SO2',
      nombre: 'dióxido de azufre',
      tipo: 'Óxido no metálico',
      nivel: '3eso',
      pubchemCID: 1119,
      explicacion: 'S (+4) y 2 O (−2). Prefijo <em>di</em> para los dos oxígenos. El azufre está en su estado de oxidación +4.',
      curiosidad: 'Gas tóxico con olor a cerillas encendidas. Se forma en erupciones volcánicas y en la combustión de combustibles con azufre. Es el principal causante de la lluvia ácida.',
      teoria: `<h4>Óxidos de azufre</h4>
        <span class="ejemplo">SO₂ → di<u>óxido</u> de azufre (S en +4)</span>
        <span class="ejemplo">SO₃ → tri<u>óxido</u> de azufre (S en +6)</span>`
    },
    {
      formula: 'SO3',
      nombre: 'trióxido de azufre',
      tipo: 'Óxido no metálico',
      nivel: '3eso',
      pubchemCID: 24682,
      explicacion: 'S (+6) y 3 O (−2). Prefijo <em>tri</em> para los tres oxígenos.',
      curiosidad: 'Reacciona violentamente con el agua formando ácido sulfúrico (H₂SO₄). Es el paso clave en la fabricación industrial del ácido sulfúrico por el proceso de contacto.',
      teoria: `<h4>Óxidos de azufre</h4>
        <span class="ejemplo">SO₂ → di<u>óxido</u> de azufre (S en +4)</span>
        <span class="ejemplo">SO₃ → tri<u>óxido</u> de azufre (S en +6)</span>`
    },
    {
      formula: 'N2O5',
      nombre: 'pentaóxido de dinitrogeno',
      tipo: 'Óxido no metálico',
      nivel: '4eso',
      pubchemCID: 66242,
      explicacion: 'N (+5) y O (−2). 2 N (10+) y 5 O (10−). Prefijo <em>penta</em> para el oxígeno y <em>di</em> para el nitrógeno.',
      curiosidad: 'Es el anhídrido del ácido nítrico. Muy inestable, sublima a temperatura ambiente y es un potente oxidante usado en propulsantes de cohetes.',
      teoria: `<h4>Óxidos de nitrógeno</h4>
        <p>El nitrógeno tiene muchos óxidos posibles. Los prefijos son esenciales:</p>
        <span class="ejemplo">NO → monóxido de nitrógeno (N en +2)</span>
        <span class="ejemplo">NO₂ → dióxido de nitrógeno (N en +4)</span>
        <span class="ejemplo">N₂O₅ → penta<u>óxido</u> de di<u>nitrógeno</u> (N en +5)</span>`
    },
    {
      formula: 'N2O3',
      nombre: 'trióxido de dinitrógeno',
      tipo: 'Óxido no metálico',
      nivel: '4eso',
      pubchemCID: 25352,
      explicacion: 'N (+3) y O (−2). 2 N (6+) y 3 O (6−). Prefijos <em>tri</em> y <em>di</em>.',
      curiosidad: 'Anhídrido del ácido nitroso (HNO₂). Gas azul a temperatura ambiente, muy inestable. Se disocia fácilmente en NO y NO₂.',
      teoria: `<h4>Óxidos de nitrógeno</h4>
        <span class="ejemplo">N₂O₃ → tri<u>óxido</u> de di<u>nitrógeno</u> (N en +3)</span>`
    },
    {
      formula: 'NO',
      nombre: 'monóxido de nitrógeno',
      tipo: 'Óxido no metálico',
      nivel: '4eso',
      pubchemCID: 145068,
      explicacion: 'N (+2) y O (−2). Proporción 1:1. El prefijo <em>mono</em> es obligatorio para el oxígeno en este caso.',
      curiosidad: 'El monóxido de nitrógeno es un mensajero molecular en el organismo que regula la presión arterial y la respuesta inmune. El descubrimiento de su función valió el Nobel de Medicina 1998.',
      teoria: `<h4>Importancia del prefijo mono</h4>
        <p>En óxidos de no metales, <em>mono</em> para el oxígeno no se puede omitir si sirve para distinguir compuestos.</p>
        <span class="ejemplo">NO → mon<u>óxido</u> de nitrógeno</span>`
    },
    {
      formula: 'P4O10',
      nombre: 'decaóxido de tetrafósforo',
      tipo: 'Óxido no metálico',
      nivel: '1bach',
      pubchemCID: 14812,
      explicacion: 'P (+5) y O (−2). 4 P (20+) y 10 O (20−). Prefijos <em>deca</em> para el oxígeno y <em>tetra</em> para el fósforo.',
      curiosidad: 'Es un desecante tan potente que puede extraer agua de compuestos en los que el agua está enlazada químicamente. Se usa en laboratorio para crear atmósferas secas.',
      teoria: `<h4>Fósforo: unidades moleculares P₄</h4>
        <p>El fósforo blanco existe como P₄ en estado sólido. Sus óxidos mantienen esta unidad.</p>
        <span class="ejemplo">P₄O₆ → hexaóxido de tetrafósforo (P en +3)</span>
        <span class="ejemplo">P₄O₁₀ → decaóxido de tetrafósforo (P en +5)</span>`
    },
    {
      formula: 'Cl2O7',
      nombre: 'heptaóxido de dicloro',
      tipo: 'Óxido no metálico',
      nivel: '2bach',
      pubchemCID: 24637,
      explicacion: 'Cl (+7) y O (−2). 2 Cl (14+) y 7 O (14−). Prefijos <em>hepta</em> y <em>di</em>.',
      curiosidad: 'Anhídrido del ácido perclórico. Es el óxido de cloro más estable y un potente oxidante. Explota por impacto o calor.',
      teoria: `<h4>Óxidos de cloro</h4>
        <span class="ejemplo">Cl₂O → óxido de dicloro (Cl en +1)</span>
        <span class="ejemplo">Cl₂O₇ → hepta<u>óxido</u> de di<u>cloro</u> (Cl en +7)</span>`
    },
  ],

  /* ════════════════════════════════════════════════════════════
     BLOQUE 2: HIDRUROS
  ════════════════════════════════════════════════════════════ */

  hidruros_metalicos: [
    {
      formula: 'NaH',
      nombre: 'hidruro de sodio',
      tipo: 'Hidruro metálico',
      nivel: '3eso',
      pubchemCID: 24758,
      explicacion: 'En los hidruros metálicos el hidrógeno actúa como H⁻ (estado de oxidación −1). Na (+1) y H (−1). Proporción 1:1, sin prefijos.',
      curiosidad: 'Reacciona explosivamente con el agua liberando hidrógeno gaseoso. Se usa en síntesis orgánica como base fuerte y agente reductor.',
      teoria: `<h4>Hidruros metálicos — nomenclatura IUPAC</h4>
        <p>Fórmula: <strong>Metal + H</strong> (H en estado de oxidación −1)</p>
        <p>Nombre: <strong>"hidruro de" + nombre del metal</strong></p>
        <p>Si hay más de un átomo de algún elemento, se usan prefijos multiplicadores.</p>
        <span class="ejemplo">NaH → hidruro de sodio</span>
        <span class="ejemplo">CaH₂ → hidruro de calcio</span>`
    },
    {
      formula: 'CaH2',
      nombre: 'hidruro de calcio',
      tipo: 'Hidruro metálico',
      nivel: '3eso',
      pubchemCID: 10127,
      explicacion: 'Ca (+2) necesita dos H (−1) para compensar. "Hidruro de calcio", sin prefijos (la proporción 1:2 se entiende por las valencias).',
      curiosidad: 'Se usa para generar hidrógeno en campo: reacciona con agua de forma controlada. En aviación militar se empleó para inflar globos de reconocimiento.',
      teoria: `<h4>Hidruros de metales alcalinotérreos</h4>
        <p>Los metales alcalinotérreos (+2) siempre forman MH₂. El nombre no lleva prefijos.</p>
        <span class="ejemplo">MgH₂ → hidruro de magnesio</span>
        <span class="ejemplo">CaH₂ → hidruro de calcio</span>`
    },
    {
      formula: 'AlH3',
      nombre: 'hidruro de aluminio',
      tipo: 'Hidruro metálico',
      nivel: '4eso',
      pubchemCID: 82775,
      explicacion: 'Al (+3) y 3 H (−1). Sin prefijos en el nombre.',
      curiosidad: 'El AlH₃ polimérico es metaestable. Su derivado LiAlH₄ (tetrahidruroaluminato de litio) es uno de los reductores más potentes usados en química orgánica.',
      teoria: `<h4>Hidruro de aluminio</h4>
        <span class="ejemplo">AlH₃ → hidruro de aluminio (Al en +3, 3H en −1)</span>`
    },
    {
      formula: 'FeH2',
      nombre: 'hidruro de hierro',
      tipo: 'Hidruro metálico',
      nivel: '1bach',
      pubchemCID: 3084885,
      explicacion: 'Fe (+2) y 2 H (−1). Sin prefijos.',
      curiosidad: 'Los hidruros de metales de transición son inusuales. El hidruro de hierro solo se forma bajo presiones extremas y es objeto de investigación en almacenamiento de hidrógeno.',
      teoria: `<h4>Hidruros de metales de transición</h4>
        <p>Menos comunes que los de metales del grupo principal. Se nombran igual: "hidruro de + metal".</p>`
    },
  ],

  hidruros_no_metalicos: [
    {
      formula: 'HF',
      nombre: 'fluoruro de hidrógeno',
      tipo: 'Hidruro no metálico',
      nivel: '3eso',
      pubchemCID: 16211012,
      explicacion: 'Los hidruros de no metales se nombran como "uro del no metal + de hidrógeno". El flúor siempre tiene estado de oxidación −1.',
      curiosidad: 'El ácido fluorhídrico (HF disuelto en agua) es el único ácido capaz de disolver el vidrio (SiO₂). Se usa para grabar cristales y en la industria del semiconductor.',
      teoria: `<h4>Hidruros de no metales — nomenclatura IUPAC</h4>
        <p>Fórmula: <strong>H + No metal</strong></p>
        <p>Nombre: <strong>nombre del anión + "de hidrógeno"</strong></p>
        <ul>
          <li>El anión se forma añadiendo el sufijo <em>-uro</em> al no metal.</li>
        </ul>
        <span class="ejemplo">HF → fluoruro de hidrógeno</span>
        <span class="ejemplo">HCl → cloruro de hidrógeno</span>
        <span class="ejemplo">H₂S → sulfuro de dihidrógeno</span>`
    },
    {
      formula: 'HCl',
      nombre: 'cloruro de hidrógeno',
      tipo: 'Hidruro no metálico',
      nivel: '3eso',
      pubchemCID: 313,
      explicacion: 'H (+1) y Cl (−1). El anión es cloruro (Cl⁻). Nombre: "cloruro de hidrógeno".',
      curiosidad: 'Disuelto en agua forma el ácido clorhídrico, el ácido del estómago. El jugo gástrico humano contiene HCl a una concentración que disolvería un clavo de acero en pocas horas.',
      teoria: `<h4>Cloruro de hidrógeno vs. ácido clorhídrico</h4>
        <p>HCl gaseoso = cloruro de hidrógeno (hidruro de no metal).</p>
        <p>HCl(aq) disuelto en agua = ácido clorhídrico (nombre tradicional del ácido).</p>`
    },
    {
      formula: 'H2S',
      nombre: 'sulfuro de dihidrógeno',
      tipo: 'Hidruro no metálico',
      nivel: '3eso',
      pubchemCID: 402,
      explicacion: 'S (−2) y 2 H (+1). El sulfuro (S²⁻) necesita dos hidrógenos. Prefijo <em>di</em> para los dos átomos de H.',
      curiosidad: 'Gas incoloro con fuerte olor a huevos podridos. Producido por bacterias anaerobias en pantanos y tuberías. En altas concentraciones paraliza el sentido del olfato, volviéndose invisiblemente letal.',
      teoria: `<h4>Hidruros con prefijo en el hidrógeno</h4>
        <p>Cuando hay más de un H, se usa el prefijo correspondiente.</p>
        <span class="ejemplo">H₂S → sulfuro de di<u>hidrógeno</u></span>
        <span class="ejemplo">H₂Se → seleniuro de dihidrógeno</span>`
    },
    {
      formula: 'NH3',
      nombre: 'trihidruro de nitrógeno',
      tipo: 'Hidruro no metálico',
      nivel: '3eso',
      pubchemCID: 222,
      explicacion: 'N (−3) y 3 H (+1). En la nomenclatura IUPAC sistemática: prefijo <em>tri</em> para los tres hidrógenos + "hidruro de nitrógeno" → trihidruro de nitrógeno.',
      curiosidad: 'El amoniaco es uno de los compuestos más producidos industrialmente. El proceso Haber-Bosch (N₂ + H₂ → NH₃) permitió fabricar fertilizantes que alimentan hoy a la mitad de la humanidad.',
      teoria: `<h4>Hidruros con nombre sistemático alternativo</h4>
        <p>NH₃ puede nombrarse de dos formas IUPAC válidas:</p>
        <span class="ejemplo">NH₃ → trihidruro de nitrógeno (sistemático)</span>
        <p>El nombre "amoniaco" es el nombre retenido aceptado por IUPAC, pero en el contexto académico de ESO/Bach se usa el sistemático.</p>`
    },
    {
      formula: 'PH3',
      nombre: 'trihidruro de fósforo',
      tipo: 'Hidruro no metálico',
      nivel: '4eso',
      pubchemCID: 24313,
      explicacion: 'P (−3) y 3 H (+1). Análogo al NH₃ pero con fósforo.',
      curiosidad: 'Gas incoloro, extremadamente tóxico y espontáneamente inflamable en algunas condiciones. Fue descubierto en 1783. Se ha detectado en la atmósfera de Venus, lo que generó debate sobre posible vida extraterrestre.',
      teoria: `<h4>Hidruros de grupo 15 (V A)</h4>
        <span class="ejemplo">NH₃ → trihidruro de nitrógeno</span>
        <span class="ejemplo">PH₃ → trihidruro de fósforo</span>
        <span class="ejemplo">AsH₃ → trihidruro de arsénico</span>`
    },
    {
      formula: 'H2O',
      nombre: 'óxido de dihidrógeno',
      tipo: 'Hidruro no metálico',
      nivel: '3eso',
      pubchemCID: 962,
      explicacion: 'O (−2) y 2 H (+1). Sistemáticamente es el "óxido de dihidrógeno". El nombre "agua" es el nombre retenido aceptado por IUPAC.',
      curiosidad: 'La única sustancia que existe naturalmente en los tres estados de la materia en la superficie terrestre. Sus puentes de hidrógeno le dan propiedades únicas que hacen posible la vida.',
      teoria: `<h4>El agua en nomenclatura IUPAC</h4>
        <p>Aunque todos conocemos su nombre popular, sistemáticamente el agua es:</p>
        <span class="ejemplo">H₂O → óxido de dihidrógeno</span>
        <p>IUPAC acepta "agua" como nombre retenido.</p>`
    },
  ],

  /* ════════════════════════════════════════════════════════════
     BLOQUE 3: SALES HIDRÁCIDAS
  ════════════════════════════════════════════════════════════ */

  sales_hidracidas: [
    {
      formula: 'NaCl',
      nombre: 'cloruro de sodio',
      tipo: 'Sal hidrácida',
      nivel: '3eso',
      pubchemCID: 5234,
      explicacion: 'Las sales hidrácidas se forman entre un metal y un no metal. El anión (Cl⁻) toma el sufijo <em>-uro</em>: "cloruro". Nombre: "cloruro de sodio".',
      curiosidad: 'La sal común. Esencial para la vida: regula el equilibrio hídrico celular. Históricamente tan valiosa que los soldados romanos recibían parte de su paga en sal (de ahí "salario").',
      teoria: `<h4>Sales hidrácidas — nomenclatura IUPAC</h4>
        <p>Fórmula: <strong>Metal + No metal</strong></p>
        <p>Nombre: <strong>anión + "de" + catión</strong></p>
        <p>El anión se forma añadiendo <em>-uro</em> al no metal:</p>
        <ul>
          <li>F⁻ → fluoruro &nbsp; Cl⁻ → cloruro &nbsp; Br⁻ → bromuro &nbsp; I⁻ → yoduro</li>
          <li>S²⁻ → sulfuro &nbsp; Se²⁻ → seleniuro</li>
          <li>N³⁻ → nitruro &nbsp; P³⁻ → fosfuro</li>
        </ul>
        <span class="ejemplo">NaCl → cloruro de sodio</span>`
    },
    {
      formula: 'KBr',
      nombre: 'bromuro de potasio',
      tipo: 'Sal hidrácida',
      nivel: '3eso',
      pubchemCID: 253877,
      explicacion: 'K (+1) y Br (−1). Anión bromuro (Br⁻). "Bromuro de potasio".',
      curiosidad: 'Usado en fotografía analógica como agente antivelado. También fue el primer sedante moderno, utilizado en el siglo XIX para tratar la epilepsia.',
      teoria: `<h4>Anión bromuro</h4>
        <span class="ejemplo">KBr → bromuro de potasio</span>`
    },
    {
      formula: 'CaF2',
      nombre: 'fluoruro de calcio',
      tipo: 'Sal hidrácida',
      nivel: '3eso',
      pubchemCID: 84512,
      explicacion: 'Ca (+2) y 2 F (−1). Anión fluoruro (F⁻). "Fluoruro de calcio". Sin prefijos en el nombre.',
      curiosidad: 'Mineral fluorita. Fue el primer mineral descrito como fluorescente (el propio término "fluorescencia" viene de él). Se usa como fundente en metalurgia y en la fabricación de lentes ópticas de alta calidad.',
      teoria: `<h4>Sales con catión divalente</h4>
        <p>La proporción de aniones se determina por las cargas, pero el nombre no lleva prefijos multiplicadores en la nomenclatura de sales.</p>
        <span class="ejemplo">CaF₂ → fluoruro de calcio (no "difluoruro")</span>`
    },
    {
      formula: 'FeCl3',
      nombre: 'cloruro de hierro',
      tipo: 'Sal hidrácida',
      nivel: '4eso',
      pubchemCID: 24353,
      explicacion: 'Fe (+3) y 3 Cl (−1). Anión cloruro. El hierro en +3. En nomenclatura sistemática no se indica el estado de oxidación: "cloruro de hierro".',
      curiosidad: 'Se usa para grabar circuitos impresos. Al disolverse en agua forma una solución marrón oxidante que ataca selectivamente el cobre del circuito.',
      teoria: `<h4>Sales de metales con varios estados de oxidación</h4>
        <p>En nomenclatura IUPAC sistemática, las sales no incluyen el estado de oxidación en el nombre. La fórmula lo indica directamente.</p>
        <span class="ejemplo">FeCl₂ → cloruro de hierro (Fe en +2)</span>
        <span class="ejemplo">FeCl₃ → cloruro de hierro (Fe en +3)</span>`
    },
    {
      formula: 'FeCl2',
      nombre: 'cloruro de hierro',
      tipo: 'Sal hidrácida',
      nivel: '4eso',
      pubchemCID: 24458,
      explicacion: 'Fe (+2) y 2 Cl (−1). Anión cloruro. Hierro en +2. Mismo nombre que FeCl₃ en nomenclatura sistemática; la fórmula distingue.',
      curiosidad: 'Es un suplemento de hierro usado en medicina para tratar la anemia ferropénica. En forma de comprimidos ayuda a restablecer los niveles de hierro en sangre.',
      teoria: `<h4>FeCl₂ vs FeCl₃</h4>
        <p>Ambos se llaman "cloruro de hierro" en nomenclatura sistemática. La fórmula es la que indica el estado de oxidación del hierro.</p>`
    },
    {
      formula: 'CuS',
      nombre: 'sulfuro de cobre',
      tipo: 'Sal hidrácida',
      nivel: '4eso',
      pubchemCID: 30856,
      explicacion: 'Cu (+2) y S (−2). Anión sulfuro (S²⁻). "Sulfuro de cobre".',
      curiosidad: 'Mineral calcocita. Es uno de los minerales de cobre más importantes económicamente. De color negro intenso, fue usado por los alquimistas medievales.',
      teoria: `<h4>Anión sulfuro</h4>
        <span class="ejemplo">CuS → sulfuro de cobre (Cu en +2)</span>
        <span class="ejemplo">Cu₂S → sulfuro de cobre (Cu en +1)</span>`
    },
    {
      formula: 'AlN',
      nombre: 'nitruro de aluminio',
      tipo: 'Sal hidrácida',
      nivel: '1bach',
      pubchemCID: 9999459,
      explicacion: 'Al (+3) y N (−3). Anión nitruro (N³⁻). "Nitruro de aluminio".',
      curiosidad: 'Semiconductor con conductividad térmica muy alta. Se usa como sustrato en dispositivos electrónicos de alta potencia donde es necesario disipar calor sin conducir electricidad.',
      teoria: `<h4>Anión nitruro</h4>
        <p>N³⁻ → nitruro. Se forma con metales de alta carga positiva.</p>
        <span class="ejemplo">AlN → nitruro de aluminio</span>
        <span class="ejemplo">Li₃N → nitruro de litio</span>`
    },
    {
      formula: 'Ag2S',
      nombre: 'sulfuro de plata',
      tipo: 'Sal hidrácida',
      nivel: '4eso',
      pubchemCID: 14292,
      explicacion: 'Ag (+1) y S (−2). 2 Ag y 1 S. "Sulfuro de plata".',
      curiosidad: 'Es el ennegrecimiento de la plata. La plata se oxida en presencia de H₂S del aire formando esta capa oscura de Ag₂S. Las pulidas de plata eliminan esta capa.',
      teoria: `<h4>Plata: único estado de oxidación +1</h4>
        <span class="ejemplo">Ag₂S → sulfuro de plata</span>`
    },
    {
      formula: 'PbS',
      nombre: 'sulfuro de plomo',
      tipo: 'Sal hidrácida',
      nivel: '4eso',
      pubchemCID: 14683,
      explicacion: 'Pb (+2) y S (−2). Proporción 1:1.',
      curiosidad: 'Mineral galena, el mineral de plomo más importante. Los romanos lo fundían en grandes cantidades para fabricar tuberías, vasijas e incluso como edulcorante del vino (con consecuencias trágicas para la salud).',
      teoria: `<h4>Sulfuro de plomo</h4>
        <span class="ejemplo">PbS → sulfuro de plomo (Pb en +2)</span>`
    },
  ],

  /* ════════════════════════════════════════════════════════════
     BLOQUE 4: PERÓXIDOS
  ════════════════════════════════════════════════════════════ */

  peroxidos: [
    {
      formula: 'H2O2',
      nombre: 'dióxido de dihidrógeno',
      tipo: 'Peróxido',
      nivel: '4eso',
      pubchemCID: 784,
      explicacion: 'En el agua oxigenada el oxígeno tiene estado de oxidación −1 (no el habitual −2). Sistemáticamente: 2 H (+1) y 2 O (−1). Nombre: dióxido de dihidrógeno. También se acepta "peróxido de hidrógeno" (nombre IUPAC retenido).',
      curiosidad: 'El agua oxigenada al 3% es el antiséptico de botiquín. Al 30% es un oxidante peligroso. Al 90% se usó como propelante en torpedos y cohetes en la Segunda Guerra Mundial.',
      teoria: `<h4>Peróxidos — el grupo −O−O−</h4>
        <p>Los peróxidos contienen el ion peróxido O₂²⁻ (o enlace peroxídico −O−O−). El oxígeno tiene estado de oxidación −1.</p>
        <p>IUPAC acepta dos nomenclaturas:</p>
        <span class="ejemplo">H₂O₂ → dióxido de dihidrógeno (sistemática)</span>
        <span class="ejemplo">H₂O₂ → peróxido de hidrógeno (nombre retenido IUPAC)</span>`
    },
    {
      formula: 'Na2O2',
      nombre: 'dióxido de disodio',
      tipo: 'Peróxido',
      nivel: '4eso',
      pubchemCID: 14766,
      explicacion: '2 Na (+1) y 2 O (−1). El oxígeno en −1, grupo peroxídico. Nombre sistemático: "dióxido de disodio".',
      curiosidad: 'Se usa en submarinos y equipos de buceo para regenerar el oxígeno del aire: reacciona con el CO₂ espirado liberando O₂. Un kilo puede proporcionar horas de respiración.',
      teoria: `<h4>Peróxidos metálicos</h4>
        <p>Los metales alcalinos forman peróxidos (O₂²⁻) con facilidad.</p>
        <span class="ejemplo">Na₂O₂ → dióxido de disodio</span>
        <span class="ejemplo">BaO₂ → dióxido de bario</span>`
    },
    {
      formula: 'BaO2',
      nombre: 'dióxido de bario',
      tipo: 'Peróxido',
      nivel: '1bach',
      pubchemCID: 62662,
      explicacion: 'Ba (+2) y 2 O (−1). "Dióxido de bario". El Ba tiene un único estado de oxidación posible (+2).',
      curiosidad: 'Histórico agente blanqueante. En el siglo XIX se usaba para blanquear telas antes de la aparición del cloro. También se usa para preparar agua oxigenada industrialmente.',
      teoria: `<h4>Peróxido de bario</h4>
        <span class="ejemplo">BaO₂ → dióxido de bario (Ba en +2, O en −1)</span>`
    },
  ],

  /* ════════════════════════════════════════════════════════════
     BLOQUE 5: HIDRÓXIDOS
  ════════════════════════════════════════════════════════════ */

  hidroxidos: [
    {
      formula: 'NaOH',
      nombre: 'hidróxido de sodio',
      tipo: 'Hidróxido',
      nivel: '4eso',
      pubchemCID: 14798,
      explicacion: 'Los hidróxidos contienen el ion hidroxilo OH⁻. Na (+1) y OH (−1). "Hidróxido de sodio".',
      curiosidad: 'La sosa cáustica. Uno de los productos químicos más producidos en el mundo. Disuelve grasas y proteínas, por lo que se usa en limpiadores de desagües y en la fabricación de jabón.',
      teoria: `<h4>Hidróxidos — nomenclatura IUPAC</h4>
        <p>Fórmula: <strong>Metal + (OH)</strong></p>
        <p>Nombre: <strong>"hidróxido de" + nombre del metal</strong></p>
        <p>El ion hidroxilo OH⁻ siempre tiene carga −1.</p>
        <span class="ejemplo">NaOH → hidróxido de sodio</span>
        <span class="ejemplo">Ca(OH)₂ → hidróxido de calcio</span>`
    },
    {
      formula: 'Ca(OH)2',
      nombre: 'hidróxido de calcio',
      tipo: 'Hidróxido',
      nivel: '4eso',
      pubchemCID: 6093208,
      explicacion: 'Ca (+2) necesita 2 OH⁻. "Hidróxido de calcio". Los paréntesis indican que el grupo OH se repite.',
      curiosidad: 'La cal apagada o lechada de cal. Se usa en construcción, agricultura (para corregir la acidez del suelo) y en el tratamiento del agua potable. El encalado de paredes es una práctica milenaria.',
      teoria: `<h4>Hidróxidos con catión divalente</h4>
        <p>Ca(OH)₂: los paréntesis indican dos grupos OH. El nombre no cambia: "hidróxido de calcio".</p>`
    },
    {
      formula: 'Al(OH)3',
      nombre: 'hidróxido de aluminio',
      tipo: 'Hidróxido',
      nivel: '4eso',
      pubchemCID: 6083792,
      explicacion: 'Al (+3) necesita 3 OH⁻. "Hidróxido de aluminio".',
      curiosidad: 'Componente activo de los antiácidos de farmacia. Neutraliza el exceso de ácido gástrico y se usa también como adyuvante en vacunas para potenciar la respuesta inmune.',
      teoria: `<h4>Hidróxidos con catión trivalente</h4>
        <span class="ejemplo">Al(OH)₃ → hidróxido de aluminio (Al en +3)</span>`
    },
    {
      formula: 'Fe(OH)3',
      nombre: 'hidróxido de hierro',
      tipo: 'Hidróxido',
      nivel: '4eso',
      pubchemCID: 73964891,
      explicacion: 'Fe (+3) y 3 OH⁻. "Hidróxido de hierro". El hierro está en +3.',
      curiosidad: 'Precipitado marrón-rojizo que se forma al añadir base a una solución de Fe³⁺. Es uno de los precipitados más característicos en análisis cualitativo inorgánico.',
      teoria: `<h4>Fe(OH)₂ vs Fe(OH)₃</h4>
        <span class="ejemplo">Fe(OH)₂ → hidróxido de hierro (Fe en +2, precipitado verde)</span>
        <span class="ejemplo">Fe(OH)₃ → hidróxido de hierro (Fe en +3, precipitado marrón)</span>`
    },
    {
      formula: 'KOH',
      nombre: 'hidróxido de potasio',
      tipo: 'Hidróxido',
      nivel: '4eso',
      pubchemCID: 14797,
      explicacion: 'K (+1) y OH⁻ (−1). "Hidróxido de potasio".',
      curiosidad: 'La potasa cáustica. Base fuerte, más soluble que el NaOH. Se usa en la fabricación de jabones blandos y en pilas alcalinas (la solución interna es KOH concentrado).',
      teoria: `<h4>Hidróxidos de metales alcalinos</h4>
        <p>Todos los metales alcalinos forman MOH. Son bases fuertes solubles.</p>`
    },
    {
      formula: 'Mg(OH)2',
      nombre: 'hidróxido de magnesio',
      tipo: 'Hidróxido',
      nivel: '4eso',
      pubchemCID: 73981,
      explicacion: 'Mg (+2) y 2 OH⁻. "Hidróxido de magnesio".',
      curiosidad: 'La leche de magnesia. Antiácido y laxante suave muy usado en medicina. Su poca solubilidad hace que actúe lentamente, neutralizando el exceso de ácido gástrico de forma gradual.',
      teoria: `<h4>Hidróxidos de metales alcalinotérreos</h4>
        <span class="ejemplo">Mg(OH)₂ → hidróxido de magnesio</span>
        <span class="ejemplo">Ca(OH)₂ → hidróxido de calcio</span>`
    },
    {
      formula: 'Cu(OH)2',
      nombre: 'hidróxido de cobre',
      tipo: 'Hidróxido',
      nivel: '4eso',
      pubchemCID: 30826,
      explicacion: 'Cu (+2) y 2 OH⁻. "Hidróxido de cobre". El cobre está en su estado de oxidación +2.',
      curiosidad: 'Precipitado azul intenso que se forma al añadir NaOH a soluciones de Cu²⁺. Fungicida agrícola: el caldo bordelés (mezcla de Cu(OH)₂ y CaO) fue el primer pesticida moderno, inventado en 1885.',
      teoria: `<h4>Hidróxidos de cobre</h4>
        <span class="ejemplo">CuOH → hidróxido de cobre (Cu en +1)</span>
        <span class="ejemplo">Cu(OH)₂ → hidróxido de cobre (Cu en +2)</span>`
    },
  ],

  /* ════════════════════════════════════════════════════════════
     BLOQUE 6: ÁCIDOS OXOÁCIDOS
  ════════════════════════════════════════════════════════════ */

  acidos_oxoacidos: [
    {
      formula: 'H2SO4',
      nombre: 'ácido tetraoxosulfúrico',
      tipo: 'Ácido oxoácido',
      nivel: '4eso',
      pubchemCID: 1118,
      explicacion: 'Fórmula general: H₂[SO₄]. El anión sulfato contiene un S y cuatro O. Nombre IUPAC: "ácido" + prefijo(oxo×n) + raíz del no metal + terminación "-ico" para el estado de oxidación más alto.',
      curiosidad: 'El ácido más producido en el mundo. Se usa en fertilizantes, baterías de automóvil, refino de petróleo y decenas de industrias. Su producción es indicador del desarrollo industrial de un país.',
      teoria: `<h4>Ácidos oxoácidos — nomenclatura IUPAC sistemática</h4>
        <p>Nombre: <strong>"ácido" + n×"oxo" + raíz del no metal + "-ico"</strong></p>
        <p>Se cuenta el número de oxígenos del anión y se añade ese número de "oxo".</p>
        <span class="ejemplo">H₂SO₄ → ácido tetraoxo<u>sulfúrico</u> (4 oxígenos)</span>
        <span class="ejemplo">H₂SO₃ → ácido trioxo<u>sulfúrico</u> (3 oxígenos)</span>
        <span class="ejemplo">HNO₃ → ácido trioxo<u>nítrico</u> (3 oxígenos)</span>`
    },
    {
      formula: 'H2SO3',
      nombre: 'ácido trioxosulfúrico',
      tipo: 'Ácido oxoácido',
      nivel: '4eso',
      pubchemCID: 1100,
      explicacion: 'Anión sulfito SO₃²⁻ con 3 oxígenos. "Ácido trioxosulfúrico". El S aquí está en +4.',
      curiosidad: 'El ácido sulfuroso solo existe en solución acuosa; el H₂SO₃ puro no se ha aislado nunca. Se forma cuando el SO₂ se disuelve en agua, proceso que ocurre en la lluvia ácida.',
      teoria: `<h4>Ácidos del azufre</h4>
        <span class="ejemplo">H₂SO₃ → ácido trioxosulfúrico (S en +4)</span>
        <span class="ejemplo">H₂SO₄ → ácido tetraoxosulfúrico (S en +6)</span>`
    },
    {
      formula: 'HNO3',
      nombre: 'ácido trioxonítrico',
      tipo: 'Ácido oxoácido',
      nivel: '4eso',
      pubchemCID: 944,
      explicacion: 'Anión nitrato NO₃⁻ con 3 oxígenos y N en +5. "Ácido trioxonítrico".',
      curiosidad: 'El ácido nítrico concentrado disuelve la mayoría de los metales y forma con el HCl el "agua regia", único líquido que disuelve el oro. Esencial para fabricar fertilizantes y explosivos.',
      teoria: `<h4>Ácidos del nitrógeno</h4>
        <span class="ejemplo">HNO₂ → ácido dioxonítrico (N en +3)</span>
        <span class="ejemplo">HNO₃ → ácido trioxonítrico (N en +5)</span>`
    },
    {
      formula: 'HNO2',
      nombre: 'ácido dioxonítrico',
      tipo: 'Ácido oxoácido',
      nivel: '4eso',
      pubchemCID: 24529,
      explicacion: 'Anión nitrito NO₂⁻ con 2 oxígenos y N en +3. "Ácido dioxonítrico".',
      curiosidad: 'Ácido débil e inestable. Sus sales (nitritos) se usan como conservantes en embutidos (E-250, nitrito de sodio), que inhiben el crecimiento de Clostridium botulinum.',
      teoria: `<h4>Ácidos del nitrógeno</h4>
        <span class="ejemplo">HNO₂ → ácido dioxonítrico (2 oxígenos)</span>
        <span class="ejemplo">HNO₃ → ácido trioxonítrico (3 oxígenos)</span>`
    },
    {
      formula: 'H3PO4',
      nombre: 'ácido tetraoxofosfórico',
      tipo: 'Ácido oxoácido',
      nivel: '1bach',
      pubchemCID: 1004,
      explicacion: 'Anión fosfato PO₄³⁻ con 4 oxígenos y P en +5. "Ácido tetraoxofosfórico".',
      curiosidad: 'Se añade a los refrescos de cola para darles acidez (E-338). Una lata de cola contiene suficiente ácido fosfórico para disolver un clavo en unos días.',
      teoria: `<h4>Ácidos del fósforo</h4>
        <span class="ejemplo">H₃PO₃ → ácido trioxofosfórico (P en +3)</span>
        <span class="ejemplo">H₃PO₄ → ácido tetraoxofosfórico (P en +5)</span>`
    },
    {
      formula: 'HClO4',
      nombre: 'ácido tetraoxoclórico',
      tipo: 'Ácido oxoácido',
      nivel: '2bach',
      pubchemCID: 24247,
      explicacion: 'Anión perclorato ClO₄⁻ con 4 oxígenos y Cl en +7. "Ácido tetraoxoclórico".',
      curiosidad: 'El ácido mineral más fuerte conocido (en mezcla con anhídrido acético). Sus sales perclóricas se usan como propelante en cohetes y fuegos artificiales.',
      teoria: `<h4>Ácidos del cloro (4 posibles)</h4>
        <span class="ejemplo">HClO → ácido oxoclórico (Cl en +1)</span>
        <span class="ejemplo">HClO₂ → ácido dioxoclórico (Cl en +3)</span>
        <span class="ejemplo">HClO₃ → ácido trioxoclórico (Cl en +5)</span>
        <span class="ejemplo">HClO₄ → ácido tetraoxoclórico (Cl en +7)</span>`
    },
    {
      formula: 'HClO3',
      nombre: 'ácido trioxoclórico',
      tipo: 'Ácido oxoácido',
      nivel: '2bach',
      pubchemCID: 19654,
      explicacion: 'Anión clorato ClO₃⁻ con 3 oxígenos y Cl en +5. "Ácido trioxoclórico".',
      curiosidad: 'Muy inestable en forma pura. Su sal, el clorato de potasio (KClO₃), fue el primer oxidante de los fósforos modernos y sigue usándose en pirotecnia.',
      teoria: `<h4>Ácidos del cloro</h4>
        <span class="ejemplo">HClO₃ → ácido trioxoclórico (Cl en +5, 3 oxígenos)</span>`
    },
    {
      formula: 'H2CO3',
      nombre: 'ácido trioxocarbónico',
      tipo: 'Ácido oxoácido',
      nivel: '4eso',
      pubchemCID: 767,
      explicacion: 'Anión carbonato CO₃²⁻ con 3 oxígenos y C en +4. "Ácido trioxocarbónico".',
      curiosidad: 'Solo existe en solución acuosa. Es el ácido de las bebidas carbonatadas: el CO₂ disuelto en agua forma H₂CO₃ que les da el sabor ácido y el picor.',
      teoria: `<h4>Ácido carbónico</h4>
        <span class="ejemplo">H₂CO₃ → ácido trioxocarbónico</span>
        <p>Equilibrio: CO₂(aq) + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻</p>`
    },
  ],

  /* ════════════════════════════════════════════════════════════
     BLOQUE 7: OXISALES
  ════════════════════════════════════════════════════════════ */

  oxisales: [
    {
      formula: 'Na2SO4',
      nombre: 'tetraoxosulfato de disodio',
      tipo: 'Oxisal',
      nivel: '1bach',
      pubchemCID: 24436,
      explicacion: 'Anión sulfato SO₄²⁻ (tetraoxosulfato) y catión sodio Na⁺. Nombre: anión + "de" + catión. "Tetraoxosulfato de disodio".',
      curiosidad: 'El sulfato de sodio anhidro (sal de Glauber) se usa como laxante, en detergentes y en la industria papelera. Su decahidrato absorbe calor al fundirse y se investiga como material de almacenamiento térmico.',
      teoria: `<h4>Oxisales — nomenclatura IUPAC sistemática</h4>
        <p>Nombre: <strong>anión oxo + "de" + catión</strong></p>
        <p>El anión se nombra igual que en el ácido correspondiente pero sustituyendo "ácido" por el nombre del anión con sufijo <em>-ato</em>.</p>
        <p>En la nomenclatura sistemática IUPAC pura se usan los prefijos oxo:</p>
        <span class="ejemplo">Na₂SO₄ → tetraoxosulfato de disodio</span>
        <span class="ejemplo">KNO₃ → trioxonitrato de potasio</span>`
    },
    {
      formula: 'CaCO3',
      nombre: 'trioxocarbonato de calcio',
      tipo: 'Oxisal',
      nivel: '1bach',
      pubchemCID: 10112,
      explicacion: 'Anión carbonato CO₃²⁻ (trioxocarbonato) y Ca²⁺. "Trioxocarbonato de calcio".',
      curiosidad: 'El mineral más abundante de la corteza terrestre en formas diversas: caliza, mármol, creta, conchas marinas, cáscaras de huevo. La Torre de Pisa y el Partenón están hechos de mármol (CaCO₃).',
      teoria: `<h4>Sales del ácido carbónico</h4>
        <span class="ejemplo">CaCO₃ → trioxocarbonato de calcio</span>
        <span class="ejemplo">Na₂CO₃ → trioxocarbonato de disodio</span>`
    },
    {
      formula: 'KNO3',
      nombre: 'trioxonitrato de potasio',
      tipo: 'Oxisal',
      nivel: '1bach',
      pubchemCID: 24434,
      explicacion: 'Anión nitrato NO₃⁻ (trioxonitrato) y K⁺. "Trioxonitrato de potasio".',
      curiosidad: 'El salitre. Componente principal de la pólvora negra (75% KNO₃, 15% carbón, 10% azufre). Fertilizante nitropotásico fundamental en agricultura.',
      teoria: `<h4>Sales del ácido nítrico</h4>
        <span class="ejemplo">KNO₃ → trioxonitrato de potasio</span>
        <span class="ejemplo">NaNO₂ → dioxonitrito de sodio</span>`
    },
    {
      formula: 'Ca3(PO4)2',
      nombre: 'tetraoxofosfato de tricalcio',
      tipo: 'Oxisal',
      nivel: '1bach',
      pubchemCID: 24456,
      explicacion: 'Anión fosfato PO₄³⁻ (tetraoxofosfato) y Ca²⁺. Para equilibrar: 3 Ca²⁺ (6+) y 2 PO₄³⁻ (6−). "Tetraoxofosfato de tricalcio".',
      curiosidad: 'Principal componente mineral de los huesos y dientes humanos. El esmalte dental es el material más duro del cuerpo humano, compuesto principalmente de Ca₃(PO₄)₂.',
      teoria: `<h4>Sales con catión y anión poliatómico</h4>
        <p>Se nombra igual: anión + "de" + prefijo + catión.</p>
        <span class="ejemplo">Ca₃(PO₄)₂ → tetraoxofosfato de tricalcio</span>`
    },
    {
      formula: 'FeSO4',
      nombre: 'tetraoxosulfato de hierro',
      tipo: 'Oxisal',
      nivel: '1bach',
      pubchemCID: 24393,
      explicacion: 'Anión sulfato SO₄²⁻ y Fe²⁺. "Tetraoxosulfato de hierro".',
      curiosidad: 'Caparrosa verde o vitriolo verde. Fue el reactivo más importante de la alquimia medieval. Hoy se usa como suplemento de hierro en medicina y en el tratamiento de aguas.',
      teoria: `<h4>Sulfatos de hierro</h4>
        <span class="ejemplo">FeSO₄ → tetraoxosulfato de hierro (Fe en +2)</span>
        <span class="ejemplo">Fe₂(SO₄)₃ → tetraoxosulfato de dihierro (Fe en +3)</span>`
    },
    {
      formula: 'Na2SO3',
      nombre: 'trioxosulfato de disodio',
      tipo: 'Oxisal',
      nivel: '1bach',
      pubchemCID: 24437,
      explicacion: 'Anión sulfito SO₃²⁻ (trioxosulfato) y 2 Na⁺. "Trioxosulfato de disodio".',
      curiosidad: 'Conservante alimentario (E-221). Se usa en fotografía analógica como agente fijador y en enología para proteger el vino de la oxidación.',
      teoria: `<h4>Sulfitos vs. sulfatos</h4>
        <span class="ejemplo">Na₂SO₃ → trioxosulfato de disodio (3 oxígenos)</span>
        <span class="ejemplo">Na₂SO₄ → tetraoxosulfato de disodio (4 oxígenos)</span>`
    },
    {
      formula: 'Al2(SO4)3',
      nombre: 'tetraoxosulfato de dialuminio',
      tipo: 'Oxisal',
      nivel: '1bach',
      pubchemCID: 24850,
      explicacion: 'Anión sulfato SO₄²⁻ y Al³⁺. 2 Al³⁺ (6+) y 3 SO₄²⁻ (6−). "Tetraoxosulfato de dialuminio".',
      curiosidad: 'Floculante en el tratamiento de agua potable: neutraliza las partículas en suspensión que quedan atrapadas en el precipitado de Al(OH)₃ que se forma.',
      teoria: `<h4>Sulfatos con catión trivalente</h4>
        <span class="ejemplo">Al₂(SO₄)₃ → tetraoxosulfato de dialuminio</span>`
    },
  ],

  /* ════════════════════════════════════════════════════════════
     BLOQUE 8: HIDRATOS
  ════════════════════════════════════════════════════════════ */

  hidratos: [
    {
      formula: 'CuSO4·5H2O',
      nombre: 'pentahidrato de tetraoxosulfato de cobre',
      tipo: 'Hidrato',
      nivel: '1bach',
      pubchemCID: 24463,
      explicacion: 'La sal CuSO₄ con 5 moléculas de agua de cristalización. El número de moléculas de agua se indica con prefijo griego delante de "hidrato". "Penta" (5) + "hidrato de" + nombre de la sal.',
      curiosidad: 'El caparrosa azul o vitriolo azul. Los hermosos cristales azules son el CuSO₄·5H₂O; el anhidro (sin agua) es blanco. Fungicida agrícola y reactivo clásico de laboratorio.',
      teoria: `<h4>Hidratos de cristalización — nomenclatura IUPAC</h4>
        <p>Nombre: <strong>prefijo+hidrato + "de" + nombre de la sal</strong></p>
        <ul>
          <li>1 H₂O → monohidrato</li>
          <li>2 H₂O → dihidrato</li>
          <li>5 H₂O → pentahidrato</li>
          <li>7 H₂O → heptahidrato</li>
          <li>10 H₂O → decahidrato</li>
        </ul>
        <span class="ejemplo">CuSO₄·5H₂O → penta<u>hidrato</u> de tetraoxosulfato de cobre</span>`
    },
    {
      formula: 'Na2SO4·10H2O',
      nombre: 'decahidrato de tetraoxosulfato de disodio',
      tipo: 'Hidrato',
      nivel: '1bach',
      pubchemCID: 16218704,
      explicacion: 'Sal de Glauber: Na₂SO₄ con 10 moléculas de agua. Prefijo "deca" (10).',
      curiosidad: 'La sal de Glauber. Fundida a 32 °C absorbe grandes cantidades de calor. Se investiga como material de cambio de fase para almacenar calor solar en calefacción doméstica.',
      teoria: `<h4>Decahidratos</h4>
        <span class="ejemplo">Na₂SO₄·10H₂O → deca<u>hidrato</u> de tetraoxosulfato de disodio</span>`
    },
    {
      formula: 'MgSO4·7H2O',
      nombre: 'heptahidrato de tetraoxosulfato de magnesio',
      tipo: 'Hidrato',
      nivel: '1bach',
      pubchemCID: 24083,
      explicacion: 'Sal de Epsom: MgSO₄ con 7 moléculas de agua. Prefijo "hepta" (7).',
      curiosidad: 'La sal de Epsom o sal amarga. Laxante y relajante muscular. Disuelta en agua caliente se usa en baños terapéuticos. En jardinería se emplea para corregir deficiencias de magnesio.',
      teoria: `<h4>Heptahidratos</h4>
        <span class="ejemplo">MgSO₄·7H₂O → hepta<u>hidrato</u> de tetraoxosulfato de magnesio</span>`
    },
    {
      formula: 'FeSO4·7H2O',
      nombre: 'heptahidrato de tetraoxosulfato de hierro',
      tipo: 'Hidrato',
      nivel: '1bach',
      pubchemCID: 62662,
      explicacion: 'Caparrosa verde con 7 moléculas de agua. "Hepta" (7) + "hidrato de" + nombre de la sal.',
      curiosidad: 'Usado desde la Antigüedad en tintorería (con tanino produce tinta negra) y medicina. Con él se fabricó la tinta con la que escribió Leonardo da Vinci.',
      teoria: `<h4>Hidratos de sales de hierro</h4>
        <span class="ejemplo">FeSO₄·7H₂O → heptahidrato de tetraoxosulfato de hierro</span>`
    },
  ],

  /* ════════════════════════════════════════════════════════════
     BLOQUE 9: SALES ÁCIDAS (cuaternarias)
  ════════════════════════════════════════════════════════════ */

  sales_acidas: [
    {
      formula: 'NaHCO3',
      nombre: 'trioxocarbonato de sodio e hidrógeno',
      tipo: 'Sal ácida',
      nivel: '2bach',
      pubchemCID: 516892,
      explicacion: 'Sal ácida del ácido carbónico H₂CO₃. Solo uno de los dos H ácidos ha sido sustituido por Na⁺. El anión es HCO₃⁻ (hidrogenotrioxocarbonato). Nombre IUPAC: "trioxocarbonato de sodio e hidrógeno".',
      curiosidad: 'El bicarbonato de sodio de la cocina. Libera CO₂ al contacto con ácidos o calor, lo que hace esponjar los bizcochos. También es antiácido estomacal y extintor de incendios de clase B.',
      teoria: `<h4>Sales ácidas — nomenclatura IUPAC</h4>
        <p>Se forman cuando un ácido poliprótico no ha cedido todos sus H⁺.</p>
        <p>Nombre: nombre del anión + "de" + catión metálico + "e hidrógeno"</p>
        <span class="ejemplo">NaHCO₃ → trioxocarbonato de sodio e hidrógeno</span>
        <span class="ejemplo">NaHSO₄ → tetraoxosulfato de sodio e hidrógeno</span>`
    },
    {
      formula: 'NaHSO4',
      nombre: 'tetraoxosulfato de sodio e hidrógeno',
      tipo: 'Sal ácida',
      nivel: '2bach',
      pubchemCID: 516919,
      explicacion: 'Sal ácida del H₂SO₄. Un H sustituido por Na⁺, el otro permanece. Anión HSO₄⁻.',
      curiosidad: 'Sal ácida de ácido fuerte: la solución acuosa es ácida con pH muy bajo. Se usa como limpiador de superficies metálicas y como acidulante en algunos procesos industriales.',
      teoria: `<h4>Sales ácidas del ácido sulfúrico</h4>
        <span class="ejemplo">NaHSO₄ → tetraoxosulfato de sodio e hidrógeno</span>
        <span class="ejemplo">Na₂SO₄ → tetraoxosulfato de disodio (sal neutra)</span>`
    },
    {
      formula: 'Ca(HCO3)2',
      nombre: 'trioxocarbonato de calcio y dihidrógeno',
      tipo: 'Sal ácida',
      nivel: '2bach',
      pubchemCID: 10176262,
      explicacion: 'Ca²⁺ y 2 HCO₃⁻. El prefijo "di" indica que hay dos hidrógenos ácidos. "Trioxocarbonato de calcio y dihidrógeno".',
      curiosidad: 'Responsable de la dureza temporal del agua. Cuando el agua de lluvia (ligeramente ácida) disuelve la caliza: CaCO₃ + CO₂ + H₂O → Ca(HCO₃)₂. Al hervir el agua, el proceso se invierte y aparece la cal de las tuberías.',
      teoria: `<h4>Sales ácidas con catión divalente</h4>
        <p>Ca²⁺ + 2 HCO₃⁻ → Ca(HCO₃)₂</p>
        <span class="ejemplo">Ca(HCO₃)₂ → trioxocarbonato de calcio y di<u>hidrógeno</u></span>`
    },
    {
      formula: 'NaH2PO4',
      nombre: 'tetraoxofosfato de sodio y dihidrógeno',
      tipo: 'Sal ácida',
      nivel: '2bach',
      pubchemCID: 24204,
      explicacion: 'Sal ácida del H₃PO₄ (triácido). Solo un H sustituido por Na⁺, quedan 2 H. Anión H₂PO₄⁻.',
      curiosidad: 'Regulador de acidez alimentario (E-339). Se usa en refrescos, harinas y productos de panadería para controlar el pH y mejorar la textura.',
      teoria: `<h4>Sales ácidas del ácido fosfórico (triácido)</h4>
        <span class="ejemplo">NaH₂PO₄ → tetraoxofosfato de sodio y dihidrógeno (1 Na, 2 H)</span>
        <span class="ejemplo">Na₂HPO₄ → tetraoxofosfato de disodio e hidrógeno (2 Na, 1 H)</span>
        <span class="ejemplo">Na₃PO₄ → tetraoxofosfato de trisodio (sal neutra)</span>`
    },
  ],

  /* ════════════════════════════════════════════════════════════
     BLOQUE 10: SALES BÁSICAS (cuaternarias)
  ════════════════════════════════════════════════════════════ */

  sales_basicas: [
    {
      formula: 'Mg(OH)Cl',
      nombre: 'cloruro de hidróxido de magnesio',
      tipo: 'Sal básica',
      nivel: '2bach',
      pubchemCID: 16213748,
      explicacion: 'Sal básica: el catión Mg²⁺ está parcialmente neutralizado. Un OH⁻ y un Cl⁻ actúan como aniones. Nombre IUPAC: anión ácido + "de" + anión básico + "de" + catión. O más directamente: "cloruro de hidróxido de magnesio".',
      curiosidad: 'Las sales básicas aparecen en la corrosión de metales en ambientes marinos. La pátina verde del cobre ("verdín") es una mezcla de sales básicas de cobre.',
      teoria: `<h4>Sales básicas — nomenclatura IUPAC</h4>
        <p>Se forman cuando una base no está completamente neutralizada; quedan grupos OH⁻ en el compuesto.</p>
        <p>Nombre: anión ácido + "de" + "hidróxido" + "de" + catión</p>
        <span class="ejemplo">Mg(OH)Cl → cloruro de hidróxido de magnesio</span>`
    },
    {
      formula: 'Cu2(OH)2CO3',
      nombre: 'trioxocarbonato de dihidróxido de dobre',
      tipo: 'Sal básica',
      nivel: '2bach',
      pubchemCID: 10469849,
      explicacion: 'La malaquita: sal básica de Cu con carbonato e hidróxido. 2 Cu²⁺, 2 OH⁻ y CO₃²⁻.',
      curiosidad: 'La malaquita, mineral de color verde intenso, fue el primer pigmento verde de gran belleza usado en la pintura desde el Antiguo Egipto. Se forma en la superficie de objetos de cobre expuestos al aire húmedo con CO₂.',
      teoria: `<h4>Carbonato básico de cobre</h4>
        <span class="ejemplo">Cu₂(OH)₂CO₃ → trioxocarbonato de dihidróxido de dicobre</span>`
    },
    {
      formula: 'Al(OH)2Cl',
      nombre: 'cloruro de dihidróxido de aluminio',
      tipo: 'Sal básica',
      nivel: '2bach',
      pubchemCID: 2723862,
      explicacion: 'Al³⁺ con 2 OH⁻ y 1 Cl⁻. Sal básica: más OH⁻ que anión ácido.',
      curiosidad: 'El cloruro de aluminio básico es el principio activo de los antitranspirantes: los iones Al³⁺ hidrolizados forman geles que obturan los poros y reducen la sudoración.',
      teoria: `<h4>Sales básicas de aluminio</h4>
        <span class="ejemplo">Al(OH)₂Cl → cloruro de di<u>hidróxido</u> de aluminio</span>`
    },
  ],

  /* ════════════════════════════════════════════════════════════
     BLOQUE 11: COMPLEJOS DE COORDINACIÓN
  ════════════════════════════════════════════════════════════ */

  complejos_coordinacion: [
    {
      formula: '[Cu(NH3)4]SO4',
      nombre: 'tetraoxosulfato de tetraamminacobre(II)',
      tipo: 'Complejo de coordinación',
      nivel: '2bach',
      pubchemCID: 10129,
      explicacion: 'Complejo de Cu²⁺ con 4 ligandos amoniaco (NH₃ = "ammin-" o "amina"). El catión complejo [Cu(NH₃)₄]²⁺ se nombra: ligandos + metal + estado de oxidación entre paréntesis. Anión: SO₄²⁻ = tetraoxosulfato.',
      curiosidad: 'La solución de Schweitzer. El añil azul intenso que se forma al disolver Cu(OH)₂ en amoniaco concentrado. Fue el primer disolvente de la celulosa, clave para fabricar rayón.',
      teoria: `<h4>Complejos de coordinación — nomenclatura IUPAC</h4>
        <p>Catión complejo: <strong>prefijo+ligandos + metal + (estado de oxidación)</strong></p>
        <p>Ligandos neutros: amoniaco → "ammin"; agua → "aqua"</p>
        <p>Ligandos aniónicos: añadir "-o": Cl⁻→cloro, CN⁻→ciano, OH⁻→hidroxo</p>
        <span class="ejemplo">[Cu(NH₃)₄]²⁺ → tetraamminacobre(II)</span>
        <span class="ejemplo">[Fe(CN)₆]³⁻ → hexacianoferrato(III)</span>`
    },
    {
      formula: '[Fe(CN)6]K3',
      nombre: 'hexacianoferrato(III) de tripotasio',
      tipo: 'Complejo de coordinación',
      nivel: '2bach',
      pubchemCID: 26250,
      explicacion: 'Anión complejo [Fe(CN)₆]³⁻: Fe³⁺ con 6 ligandos cianuro (CN⁻ = "ciano-"). Catión K⁺. Los aniones complejos llevan sufijo "-ato". Nombre: "hexaciano" + "ferr" (lat. hierro) + "ato(III)" + "de tripotasio".',
      curiosidad: 'El ferricianuro de potasio o "sal roja de sangre". En contacto con iones Fe²⁺ forma azul de Prusia, el primer pigmente sintético moderno (1704), aún usado en pinturas y tintas.',
      teoria: `<h4>Aniones complejos: sufijo -ato</h4>
        <p>Los complejos con carga negativa llevan el sufijo <em>-ato</em> al metal:</p>
        <p>Fe → ferr + ato → ferrato &nbsp; Cu → cupr + ato → cuprato &nbsp; Ag → argent + ato → argentato</p>
        <span class="ejemplo">[Fe(CN)₆]³⁻ → hexacianoferrato(III)</span>`
    },
    {
      formula: '[Ag(NH3)2]OH',
      nombre: 'hidróxido de diamminaplata(I)',
      tipo: 'Complejo de coordinación',
      nivel: '2bach',
      pubchemCID: 73981,
      explicacion: 'Ag⁺ con 2 ligandos NH₃ ("ammin-"). Catión complejo [Ag(NH₃)₂]⁺: "diammina" + "plata(I)". Anión OH⁻: hidróxido.',
      curiosidad: 'El reactivo de Tollens. Al reducirse, deposita plata metálica en espejo sobre el vidrio: es la base del proceso de plateado de espejos y de la reacción que identifica aldehídos en el laboratorio.',
      teoria: `<h4>Complejos de plata</h4>
        <span class="ejemplo">[Ag(NH₃)₂]⁺ → diammina<u>plata</u>(I)</span>
        <p>Para la plata se usa la palabra española "plata", no la latina.</p>`
    },
    {
      formula: '[PtCl4]K2',
      nombre: 'tetracloroplatinato(II) de dipotasio',
      tipo: 'Complejo de coordinación',
      nivel: '2bach',
      pubchemCID: 61984,
      explicacion: 'Pt²⁺ con 4 ligandos Cl⁻ ("cloro-"). Anión complejo [PtCl₄]²⁻: "tetracloro" + "platin" + "ato(II)". Catión 2 K⁺.',
      curiosidad: 'Precursor del cisplatino, el fármaco antitumoral más usado en quimioterapia. El descubrimiento casual de que los compuestos de platino inhibían la división celular (Rosenberg, 1965) revolucionó el tratamiento del cáncer.',
      teoria: `<h4>Complejos de platino</h4>
        <span class="ejemplo">[PtCl₄]²⁻ → tetracloro<u>platinato</u>(II)</span>
        <p>Para el platino se usa "platin-" como raíz latina en nomenclatura de complejos.</p>`
    },
  ],

}; // fin BancoCompuestos
