# Guía de despliegue — Tutor de Formulación Inorgánica
## GitHub Pages → Google Sites

---

## PASO 1 — Crear cuenta en GitHub (si no tienes)

1. Ve a https://github.com y crea una cuenta gratuita
2. Elige un nombre de usuario (p.ej. `profquimica`)
3. Confirma tu email

---

## PASO 2 — Crear el repositorio

1. En GitHub, haz clic en **"New repository"** (botón verde)
2. Nombre del repositorio: `formulacion-inorganica`
   *(sin tildes ni espacios — este nombre aparecerá en la URL)*
3. Visibilidad: **Public** ← imprescindible para GitHub Pages gratuito
4. Marca "Add a README file"
5. Haz clic en **"Create repository"**

---

## PASO 3 — Subir los archivos

### Opción A — Desde el navegador (más sencilla)

En tu repositorio recién creado:

1. Haz clic en **"Add file" → "Upload files"**
2. Arrastra el archivo `index.html`
3. Haz clic en **"Commit changes"**

Luego crea las carpetas:

4. Haz clic en **"Add file" → "Create new file"**
5. En el campo de nombre escribe: `css/estilos.css`
   *(GitHub crea la carpeta automáticamente al usar `/`)*
6. Copia y pega el contenido de `estilos.css`
7. "Commit changes"

Repite para cada archivo de la carpeta `js/`:
- `js/banco_compuestos.js`
- `js/validador.js`
- `js/pubchem.js`
- `js/pdf_report.js`
- `js/motor.js`

### Opción B — Con GitHub Desktop (recomendada si tienes muchos archivos)

1. Descarga GitHub Desktop desde https://desktop.github.com
2. Clona tu repositorio en tu ordenador
3. Copia todos los archivos de la carpeta `formulacion-inorganica/`
   directamente en la carpeta del repositorio clonado
4. En GitHub Desktop, haz clic en "Commit to main" → "Push origin"

---

## PASO 4 — Activar GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings** (pestaña superior)
2. En el menú lateral izquierdo, haz clic en **"Pages"**
3. En "Source", selecciona **"Deploy from a branch"**
4. Branch: **main** / Folder: **/ (root)**
5. Haz clic en **"Save"**

GitHub tardará 1-3 minutos en publicar. La URL será:

```
https://TU_USUARIO.github.io/formulacion-inorganica/
```

Por ejemplo:
```
https://profquimica.github.io/formulacion-inorganica/
```

Puedes ver el estado en Settings → Pages (aparecerá "Your site is live").

---

## PASO 5 — Verificar que funciona

1. Abre la URL en un navegador
2. Comprueba que carga la pantalla de bienvenida
3. Selecciona nivel y bloque, y realiza un ejercicio de prueba
4. Verifica que la imagen de PubChem carga al acertar

**Si algo no carga:** espera 2 minutos más y recarga con Ctrl+Shift+R

---

## PASO 6 — Enlazar desde Google Sites

### 6a — Enlace directo (recomendado)

1. En Google Sites, edita la página donde quieres incluir el tutor
2. Inserta un botón o un texto con hipervínculo:
   - Escribe el texto: **"Abrir Tutor de Formulación Inorgánica"**
   - Selecciónalo y añade el enlace a tu URL de GitHub Pages
3. El alumno hará clic y se abrirá en una pestaña nueva

### 6b — Incrustado como iframe (alternativa)

Si prefieres que aparezca embebido en la página de Sites:

1. En Google Sites, haz clic en **Insertar → Insertar HTML**
2. Pega este código (sustituye la URL por la tuya):

```html
<iframe
  src="https://TU_USUARIO.github.io/formulacion-inorganica/"
  width="1100"
  height="660"
  frameborder="0"
  allow="clipboard-write"
  style="border-radius:8px; border:1px solid #d0d8e4;">
</iframe>
```

3. Haz clic en "Siguiente" → ajusta las dimensiones si es necesario

> ⚠️ **Nota sobre iframes en Sites:**
> Google Sites puede bloquear iframes de sitios externos dependiendo
> de la configuración de tu dominio escolar (Google Workspace for Education).
> Si el iframe no funciona, usa el enlace directo (opción 6a).

---

## PASO 7 — Actualizar el contenido en el futuro

Para añadir más compuestos al banco o corregir algo:

1. Ve a tu repositorio en GitHub
2. Haz clic en el archivo que quieres editar (p.ej. `js/banco_compuestos.js`)
3. Haz clic en el icono de lápiz ✏️ (Edit this file)
4. Realiza los cambios
5. "Commit changes" → GitHub Pages se actualiza automáticamente en 1-2 minutos

---

## Estructura final del repositorio

```
formulacion-inorganica/          ← raíz del repositorio
├── index.html                   ← página principal
├── css/
│   └── estilos.css              ← diseño y layout
├── js/
│   ├── banco_compuestos.js      ← ← EDITABLE: añade compuestos aquí
│   ├── validador.js             ← lógica de corrección
│   ├── pubchem.js               ← imágenes
│   ├── pdf_report.js            ← generación de PDF
│   └── motor.js                 ← lógica principal
└── README.md                    ← descripción del proyecto (opcional)
```

---

## Solución de problemas frecuentes

| Problema | Causa probable | Solución |
|---|---|---|
| La página no carga | GitHub Pages aún no está activo | Espera 2-3 min y recarga |
| Las imágenes no aparecen | Sin conexión a internet o PubChem caído | El fallback SVG se muestra automáticamente |
| El PDF no se descarga | jsPDF no cargó (sin internet) | Comprueba la conexión; jsPDF viene de CDN |
| El iframe no aparece en Sites | Restricción del dominio escolar | Usa enlace directo en su lugar |
| El código de sesión no funciona | El navegador bloquea localStorage | Pide al alumno que use Chrome o Firefox |

---

## URL de tu aplicación (rellena cuando la tengas)

```
https://________________________________.github.io/formulacion-inorganica/
```

---

*Generado para el Tutor de Formulación Inorgánica IUPAC · ESO y Bachillerato*
