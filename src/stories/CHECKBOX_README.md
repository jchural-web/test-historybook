# Checkbox Component

Componente Checkbox creado a partir del diseño de Figma, compatible con Angular y Storybook.

## 📦 Archivos Generados

- `src/stories/checkbox.component.ts` - Componente Angular
- `src/stories/checkbox.css` - Estilos del componente
- `src/stories/checkbox.stories.ts` - Stories de Storybook

## 🎨 Propiedades (Props)

### size
Tamaño del checkbox
- **Tipo:** `'sm' | 'md'`
- **Valores:**
  - `sm` - 16x16px
  - `md` - 20x20px (default)

### state
Estado visual del checkbox
- **Tipo:** `'default' | 'hover' | 'checked' | 'disabled' | 'indeterminate' | 'focus'`
- **Valores:**
  - `default` - Estado normal sin marcar (border: #64748B)
  - `hover` - Estado hover (border: #3B82F6, opacity: 0.9)
  - `checked` - Marcado con check (background: #2563EB)
  - `disabled` - Deshabilitado (opacity: 0.4, no interactivo)
  - `indeterminate` - Estado parcial con línea (background: #2563EB)
  - `focus` - Con anillo de enfoque violeta (#4C1D95)

### checked
Estado checked (booleano)
- **Tipo:** `boolean`
- **Default:** `false`

## 📤 Eventos (Outputs)

- `stateChange` - Emite cuando el estado cambia
- `checkedChange` - Emite cuando el valor checked cambia (two-way binding)
- `onChange` - Emite cuando el usuario hace clic

## 🎯 Uso en Angular

### Uso básico
```typescript
import { CheckboxComponent } from './stories/checkbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CheckboxComponent],
  template: `
    <storybook-checkbox 
      size="md" 
      state="default"
    ></storybook-checkbox>
  `
})
export class AppComponent {}
```

### Con estado checked
```typescript
<storybook-checkbox 
  size="md" 
  state="checked"
  [checked]="true"
></storybook-checkbox>
```

### Con manejo de eventos
```typescript
@Component({
  template: `
    <storybook-checkbox 
      size="md" 
      [checked]="isAccepted"
      (checkedChange)="onAcceptChange($event)"
    ></storybook-checkbox>
    <p>Términos aceptados: {{ isAccepted }}</p>
  `
})
export class TermsComponent {
  isAccepted = false;

  onAcceptChange(checked: boolean) {
    this.isAccepted = checked;
    console.log('Terms accepted:', checked);
  }
}
```

### Con label
```typescript
<label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
  <storybook-checkbox size="md" state="default"></storybook-checkbox>
  <span>Accept terms and conditions</span>
</label>
```

### Estado indeterminate (selección parcial)
```typescript
<storybook-checkbox 
  size="md" 
  state="indeterminate"
></storybook-checkbox>
<span>Select all (2 of 5 items selected)</span>
```

## 🎨 Colores del Diseño

Basado en el diseño de Figma:

| Estado | Border | Background | Icon |
|--------|--------|------------|------|
| Default | `#64748B` (neutral-500) | Transparent | - |
| Hover | `#3B82F6` (Blue-500) | Transparent | - |
| Checked | `#2563EB` (Blue-600) | `#2563EB` | White check ✓ |
| Disabled | `#64748B` | `#64748B` | - |
| Indeterminate | `#2563EB` | `#2563EB` | White line — |
| Focus | `#64748B` | Transparent | - |

### Especificaciones de Diseño

**Tamaños:**
- Small: 16x16px
- Medium: 20x20px

**Border:**
- Width: 1px solid
- Radius: 2px

**Focus Outline:**
- Color: `#4C1D95` (Violet-900)
- Estilo: Box-shadow con 3px de espacio blanco + 4px de borde violeta

**Iconos:**
- Check icon (✓): SVG path con fill white
- Indeterminate icon (—): Línea horizontal con stroke white

**Opacidad:**
- Hover: 90% (opacity: 0.9)
- Disabled: 40% (opacity: 0.4)

## 📚 Stories Disponibles en Storybook

### Por tamaño
- **SmallDefault**, SmallHover, SmallChecked, SmallDisabled, SmallIndeterminate, SmallFocus
- **MediumDefault**, MediumHover, MediumChecked, MediumDisabled, MediumIndeterminate, MediumFocus

### Showcases
- **AllSizes** - Comparación de tamaños
- **AllStates** - Todos los estados en tamaño medium
- **DesignSystemShowcase** - Vista completa del sistema de diseño
- **WithLabel** - Ejemplos con labels y texto

## 🔧 Para usar en Builder.io

Este componente está diseñado para ser fácilmente integrable en Builder.io:

### 1. Registrar el componente en Builder.io

```typescript
import { Builder } from '@builder.io/react';
import { CheckboxComponent } from './checkbox.component';

Builder.registerComponent(CheckboxComponent, {
  name: 'Checkbox',
  inputs: [
    {
      name: 'size',
      type: 'string',
      enum: ['sm', 'md'],
      defaultValue: 'md'
    },
    {
      name: 'state',
      type: 'string',
      enum: ['default', 'hover', 'checked', 'disabled', 'indeterminate', 'focus'],
      defaultValue: 'default'
    },
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: false
    }
  ]
});
```

## ✨ Características Especiales

### Estado Indeterminate
El estado `indeterminate` es especialmente útil para checkboxes que representan una selección parcial:

```typescript
// Ejemplo: Select All checkbox
<div>
  <storybook-checkbox 
    size="md" 
    [state]="allSelected ? 'checked' : someSelected ? 'indeterminate' : 'default'"
  ></storybook-checkbox>
  <span>Select all items</span>
</div>
```

### Accesibilidad (a11y)
El componente incluye atributos ARIA para accesibilidad:
- `role="checkbox"` - Define el rol semántico
- `aria-checked` - Indica el estado (true, false, mixed)
- `aria-disabled` - Indica si está deshabilitado
- `tabindex` - Permite navegación por teclado

### Interacción por Teclado
- **Space/Enter**: Toggle checked state
- **Tab**: Navegar entre checkboxes
- Los checkboxes deshabilitados no reciben focus

## ✅ Características Implementadas

- ✅ 2 tamaños configurables (sm, md)
- ✅ 6 estados visuales (default, hover, checked, disabled, indeterminate, focus)
- ✅ Iconos SVG escalables según tamaño
- ✅ Check icon (✓) para estado checked
- ✅ Line icon (—) para estado indeterminate
- ✅ Focus state con outline violeta
- ✅ Estado disabled no interactivo
- ✅ Colores exactos del diseño de Figma
- ✅ Border radius 2px (consistente)
- ✅ Click handler para toggle
- ✅ Eventos para manejo de cambios
- ✅ Atributos ARIA para accesibilidad
- ✅ Totalmente tipado con TypeScript
- ✅ Compatible con Angular standalone components

## 🎯 Casos de Uso

### 1. Formulario simple
```typescript
<form>
  <label>
    <storybook-checkbox size="md" state="default"></storybook-checkbox>
    <span>I agree to the terms</span>
  </label>
</form>
```

### 2. Lista de opciones
```typescript
<div>
  <label>
    <storybook-checkbox size="sm" state="checked"></storybook-checkbox>
    <span>Email notifications</span>
  </label>
  <label>
    <storybook-checkbox size="sm" state="checked"></storybook-checkbox>
    <span>SMS notifications</span>
  </label>
  <label>
    <storybook-checkbox size="sm" state="default"></storybook-checkbox>
    <span>Push notifications</span>
  </label>
</div>
```

### 3. Select All con indeterminate
```typescript
<div>
  <label>
    <storybook-checkbox size="md" state="indeterminate"></storybook-checkbox>
    <span>Select all (3 of 5 selected)</span>
  </label>
</div>
```

## 🚀 Ver en Storybook

El componente está disponible en Storybook en:
```
http://localhost:6006/?path=/story/example-checkbox--medium-default
```

Explora todas las variaciones en el **DesignSystemShowcase** story para ver todos los estados y tamaños organizados!
