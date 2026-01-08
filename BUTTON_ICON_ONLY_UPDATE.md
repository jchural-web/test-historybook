# Button Component - Icon-Only Circular Variants Update

**Status:** ✅ Successfully Integrated  
**Framework:** Angular 20 Standalone  
**Update Type:** Enhancement (Non-Breaking)  
**Fecha:** 2025

---

## 📋 Resumen de Actualización

Se han agregado **variantes circulares icon-only** al componente Button existente, siguiendo las especificaciones de Figma. Estas nuevas variantes se integran perfectamente con el sistema de botones ya creado, **sin romper ninguna funcionalidad existente**.

### Cambios Realizados

✅ **Nuevo tipo de botón**: `shape="icon-only"` (botones circulares solo con icono)  
✅ **5 iconos integrados**: chevron-left, chevron-right, chevron-up, chevron-down, check  
✅ **3 tamaños**: sm (27px), md (35px), lg (43px)  
✅ **5 estados**: default, hover, active, focus, disabled  
✅ **DomSanitizer**: Renderizado seguro de iconos SVG  
✅ **Accesibilidad**: aria-label automático para screen readers  
✅ **15+ Stories nuevas**: Documentación completa en Storybook  

---

## 🎨 Especificaciones de Diseño (desde Figma)

### Tamaños

| Size | Diámetro | Icono SVG |
| ---- | -------- | --------- |
| `sm` | 27px     | 17x17px   |
| `md` | 35px     | 21x21px   |
| `lg` | 43px     | 26x26px   |

### Estados Visuales

| Estado     | Border Color | Icon Color | Opacidad | Focus Ring  |
| ---------- | ------------ | ---------- | -------- | ----------- |
| `default`  | `#CBD5E1`    | `#9333EA`  | 1.0      | -           |
| `hover`    | `#CBD5E1`    | `#9333EA`  | 0.9      | -           |
| `active`   | `#CBD5E1`    | `#9333EA`  | 1.0      | -           |
| `focus`    | `#64748B`    | `#6B21A8`  | 1.0      | `#581C87`   |
| `disabled` | `#CBD5E1`    | `#9333EA`  | 0.4      | -           |

### Design Tokens

```css
/* Colores */
--icon-only-border-default: #cbd5e1;
--icon-only-border-focus: #64748b;
--icon-only-icon-default: #9333ea;
--icon-only-icon-focus: #6b21a8;
--icon-only-focus-ring: #581c87;

/* Opacidades */
--icon-only-hover-opacity: 0.9;
--icon-only-disabled-opacity: 0.4;

/* Tamaños */
--icon-only-sm: 27px;
--icon-only-md: 35px;
--icon-only-lg: 43px;
```

---

## 🔧 Uso del Componente

### Sintaxis Básica

```typescript
<storybook-button
  shape="icon-only"
  size="md"
  iconName="chevron-left"
  label="Previous page"
></storybook-button>
```

### Props del Icon-Only Button

| Prop       | Tipo                                                            | Default         | Descripción                           |
| ---------- | --------------------------------------------------------------- | --------------- | ------------------------------------- |
| `shape`    | `'icon-only'`                                                   | -               | **Requerido** para botones circulares |
| `size`     | `'sm' \| 'md' \| 'lg'`                                          | `'md'`          | Tamaño del botón circular             |
| `iconName` | `'check' \| 'chevron-left' \| 'chevron-right' \| 'chevron-up' \| 'chevron-down' \| 'none'` | `'chevron-left'` | Icono a mostrar                       |
| `state`    | `'default' \| 'hover' \| 'active' \| 'focus' \| 'disabled'`     | `'default'`     | Estado visual del botón               |
| `label`    | `string`                                                        | `'Boton'`       | Texto para aria-label (accesibilidad) |

---

## 💻 Ejemplos de Código

### Ejemplo 1: Navegación Básica

```typescript
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="pagination">
      <storybook-button
        shape="icon-only"
        size="md"
        iconName="chevron-left"
        label="Previous page"
        (onClick)="previousPage()"
      ></storybook-button>

      <span>Page {{ currentPage }} of {{ totalPages }}</span>

      <storybook-button
        shape="icon-only"
        size="md"
        iconName="chevron-right"
        label="Next page"
        (onClick)="nextPage()"
      ></storybook-button>
    </div>
  `,
})
export class PaginationComponent {
  currentPage = 1;
  totalPages = 10;

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
}
```

### Ejemplo 2: Dropdown Toggle

```typescript
<storybook-button
  shape="icon-only"
  size="sm"
  iconName="chevron-down"
  label="Open menu"
  [state]="isOpen ? 'active' : 'default'"
  (onClick)="toggleMenu()"
></storybook-button>
```

### Ejemplo 3: Lista con Acciones

```typescript
<div class="item-list">
  <div class="item" *ngFor="let item of items">
    <span>{{ item.name }}</span>
    <div class="actions">
      <storybook-button
        shape="icon-only"
        size="sm"
        iconName="check"
        label="Approve"
        (onClick)="approve(item)"
      ></storybook-button>
    </div>
  </div>
</div>
```

### Ejemplo 4: Scroll to Top

```typescript
<storybook-button
  shape="icon-only"
  size="lg"
  iconName="chevron-up"
  label="Scroll to top"
  [state]="isAtTop ? 'disabled' : 'default'"
  (onClick)="scrollToTop()"
  style="position: fixed; bottom: 24px; right: 24px;"
></storybook-button>
```

### Ejemplo 5: Todos los Tamaños

```typescript
<div style="display: flex; gap: 16px; align-items: center;">
  <storybook-button
    shape="icon-only"
    size="sm"
    iconName="chevron-left"
    label="Small button"
  ></storybook-button>

  <storybook-button
    shape="icon-only"
    size="md"
    iconName="chevron-left"
    label="Medium button"
  ></storybook-button>

  <storybook-button
    shape="icon-only"
    size="lg"
    iconName="chevron-left"
    label="Large button"
  ></storybook-button>
</div>
```

---

## 📚 Iconos Disponibles

Los iconos son renderizados mediante `DomSanitizer` para garantizar seguridad. Se incluyen las siguientes opciones:

### 1. **chevron-left** (←)
- Uso: Navegación anterior, retroceder
- Ejemplo: `iconName="chevron-left"`

### 2. **chevron-right** (→)
- Uso: Navegación siguiente, avanzar
- Ejemplo: `iconName="chevron-right"`

### 3. **chevron-up** (↑)
- Uso: Colapsar, scroll arriba
- Ejemplo: `iconName="chevron-up"`

### 4. **chevron-down** (↓)
- Uso: Expandir, scroll abajo, dropdown
- Ejemplo: `iconName="chevron-down"`

### 5. **check** (✓)
- Uso: Confirmar, aprobar, completar
- Ejemplo: `iconName="check"`

### 6. **none** (sin icono)
- Uso: Placeholder o debugging
- Ejemplo: `iconName="none"`

---

## 🎭 Stories Disponibles en Storybook

### Stories por Tamaño

- `IconOnlySmallDefault` - Botón sm (27px)
- `IconOnlyMediumDefault` - Botón md (35px)
- `IconOnlyLargeDefault` - Botón lg (43px)

### Stories por Estado

- `IconOnlyHover` - Estado hover
- `IconOnlyActive` - Estado active
- `IconOnlyFocus` - Estado focus (con focus ring)
- `IconOnlyDisabled` - Estado disabled

### Stories por Icono

- `IconOnlyChevronRight` - Chevron derecha
- `IconOnlyChevronUp` - Chevron arriba
- `IconOnlyChevronDown` - Chevron abajo
- `IconOnlyCheck` - Ícono de check

### Stories Showcase

- `IconOnlyAllSizes` - Comparación de todos los tamaños
- `IconOnlyAllStates` - Comparación de todos los estados
- `IconOnlyAllIcons` - Comparación de todos los iconos

---

## 🔒 Compatibilidad con Variantes Existentes

**✅ TODAS las variantes anteriores siguen funcionando correctamente:**

- ✅ Rectangular buttons
- ✅ Pill buttons
- ✅ Icon buttons (cuadrados)
- ✅ Icon-text buttons
- ✅ Todos los variants (default, secondary, outline, ghost, link, destructive)
- ✅ Todos los estados (default, hover, active, focus, disabled)
- ✅ Todos los tamaños (sm, md, lg)

**No se rompió ninguna funcionalidad existente.** Las nuevas variantes icon-only son **completamente independientes** y se activan únicamente con `shape="icon-only"`.

---

## 🚀 Registro en Builder.io

### Actualización de Props

```typescript
Builder.registerComponent(ButtonComponent, {
  name: 'Button',
  inputs: [
    // ... props existentes ...
    {
      name: 'shape',
      type: 'string',
      enum: ['rectangular', 'pill', 'icon', 'icon-text', 'icon-only'],
      defaultValue: 'rectangular',
      helperText: 'Shape of the button'
    },
    {
      name: 'iconName',
      type: 'string',
      enum: ['check', 'chevron-left', 'chevron-right', 'chevron-up', 'chevron-down', 'none'],
      defaultValue: 'chevron-left',
      helperText: 'Icon name for icon-only buttons',
      showIf: 'options.get("shape") === "icon-only"'
    }
  ]
});
```

---

## 🔍 Detalles Técnicos

### Archivos Modificados

1. **`button.component.ts`**
   - Agregado `DomSanitizer` import
   - Agregado tipo `IconName`
   - Agregada constante `icons` con SVGs
   - Agregado prop `iconName`
   - Agregado método `getIconSvg()`
   - Actualizado template para soportar icon-only

2. **`button.css`**
   - Agregados estilos `.btn-shape-icon-only`
   - Agregados tamaños específicos (sm, md, lg)
   - Agregados estados (hover, active, focus, disabled)
   - Agregado focus ring con `box-shadow`
   - Agregados estilos `.button-icon-only`

3. **`button.stories.ts`**
   - Agregado `iconName` a argTypes
   - Agregado `'icon-only'` a options de shape
   - Agregadas 15+ nuevas stories
   - Actualizado `DesignSystemShowcase`

### Patrón de Implementación

El patrón usado sigue el mismo estándar de `SideNavbar` y `AppHeader`:

1. **DomSanitizer**: Para renderizar SVG inline de forma segura
2. **SafeHtml**: Tipo de retorno para el método getIconSvg()
3. **[innerHTML]**: Binding para inyectar el SVG sanitizado
4. **currentColor**: Los SVGs usan fill="currentColor" para heredar el color del CSS

---

## ♿ Accesibilidad

### Aria Labels

Los botones icon-only incluyen automáticamente `aria-label` para screen readers:

```html
<button aria-label="Previous page">
  <!-- icono chevron-left -->
</button>
```

### Focus Ring

El estado focus incluye un anillo visible (`box-shadow`) para cumplir con WCAG 2.1:

```css
.btn-shape-icon-only:focus {
  box-shadow: 0 0 0 1px #581c87;
}
```

### Keyboard Navigation

Los botones icon-only son completamente navegables por teclado:
- `Tab` / `Shift+Tab`: Navegar entre botones
- `Enter` / `Space`: Activar el botón
- Visual feedback con focus ring

---

## 🐛 Solución de Problemas

### El icono no se muestra

**Problema**: El icono no aparece dentro del botón circular.

**Solución**: Verificar que:
1. `shape="icon-only"` está configurado
2. `iconName` tiene un valor válido
3. `DomSanitizer` está inyectado en el constructor

```typescript
constructor(private sanitizer: DomSanitizer) {}
```

### El focus ring no aparece

**Problema**: El anillo de foco no es visible en el estado focus.

**Solución**: Asegurarse de usar `state="focus"` o hacer click con teclado (Tab + Enter).

### El botón no es circular

**Problema**: El botón aparece cuadrado o rectangular.

**Solución**: Verificar que `shape="icon-only"` (no `shape="icon"`).

### El tamaño del icono no coincide

**Problema**: El icono se ve muy pequeño o muy grande.

**Solución**: Los tamaños de icono están definidos en CSS:
- sm: 17x17px
- md: 21x21px  
- lg: 26x26px

Verificar que el CSS de `.button-icon-only` esté aplicado correctamente.

---

## 📊 Comparación: `icon` vs `icon-only`

| Característica     | `shape="icon"`     | `shape="icon-only"` |
| ------------------ | ------------------ | ------------------- |
| Forma              | Cuadrado           | **Circular**        |
| Borde              | Sin borde          | **Con borde**       |
| Icono              | Hardcoded (check)  | **Configurable**    |
| Tamaños            | 27px, 35px, 43px   | 27px, 35px, 43px    |
| Focus Ring         | Estándar           | **Personalizado**   |
| Uso                | Sistema existente  | **Navegación**      |
| Background         | Sólido (variants)  | **Transparente**    |

---

## ✨ Mejoras Futuras

Ideas para expandir el sistema de botones icon-only:

- [ ] Agregar más iconos (close, plus, minus, etc.)
- [ ] Soporte para iconos personalizados (URL de SVG)
- [ ] Variante con background de color (no solo transparente)
- [ ] Tooltip integrado al hacer hover
- [ ] Loading state con spinner
- [ ] Badge de notificación superpuesto
- [ ] Animaciones de entrada/salida

---

## 📝 Resumen de Cambios

### ✅ Agregado

- Nuevo shape type: `icon-only`
- Nuevo prop: `iconName` (tipo `IconName`)
- 5 iconos SVG integrados
- Método `getIconSvg()` con DomSanitizer
- Estilos CSS circulares completos
- Focus ring personalizado
- 15+ nuevas stories en Storybook
- Soporte para aria-label automático

### ✅ Mantenido

- Todas las variantes existentes funcionan
- No se rompió retrocompatibilidad
- API consistente con el sistema actual
- Tokens de diseño alineados

### ❌ No Cambiado

- Variantes rectangular, pill, icon, icon-text
- Variants (default, secondary, etc.)
- Estados existentes
- Comportamiento de clicks
- Props label, size, state, variant

---

**Componente actualizado con éxito** ✅  
**Listo para uso en Builder.io** 🚀  
**Accesible y responsivo** ♿  
**Documentado completamente** 📚
