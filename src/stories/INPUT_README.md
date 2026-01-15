# Input Component

Componente Input creado a partir del diseño de Figma, compatible con Angular y Storybook.

## 📦 Archivos Generados

- `src/stories/input.component.ts` - Componente Angular
- `src/stories/input.css` - Estilos del componente
- `src/stories/input.stories.ts` - Stories de Storybook

## 🎨 Propiedades (Props)

### size
Tamaño del input field
- **Tipo:** `'sm' | 'md' | 'lg'`
- **Valores:**
  - `sm` - Altura: 32px, Padding: 4px 12px
  - `md` - Altura: 40px, Padding: 4px 12px (default)
  - `lg` - Altura: 48px, Padding: 4px 12px

### state
Estado visual del input
- **Tipo:** `'default' | 'hover' | 'focus' | 'disabled' | 'error'`
- **Valores:**
  - `default` - Estado normal (border: #CBD5E1)
  - `hover` - Estado hover con opacidad 0.9
  - `focus` - Estado focus (border: #64748B) con outline violeta
  - `disabled` - Deshabilitado, opacidad 0.4, no interactivo
  - `error` - Estado de error (border y texto: #DC2626)

### icon
Posición del icono
- **Tipo:** `'none' | 'leading'`
- **Valores:**
  - `none` - Sin icono (default)
  - `leading` - Icono de búsqueda a la izquierda

### placeholder
Texto del placeholder
- **Tipo:** `string`
- **Default:** `"Ingresa información"`

### value
Valor del input
- **Tipo:** `string`
- **Default:** `""`

## 📤 Eventos (Outputs)

- `valueChange` - Emite cuando el valor cambia (two-way binding)
- `onInputChange` - Emite cuando el usuario escribe
- `onFocusEvent` - Emite cuando el input recibe focus
- `onBlurEvent` - Emite cuando el input pierde focus

## 🎯 Uso en Angular

### Uso básico
```typescript
import { InputComponent } from './stories/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputComponent],
  template: `
    <storybook-input 
      size="md" 
      state="default"
      icon="none"
      placeholder="Ingresa tu nombre"
    ></storybook-input>
  `
})
export class AppComponent {}
```

### Con icono de búsqueda
```typescript
<storybook-input 
  size="md" 
  state="default"
  icon="leading"
  placeholder="Buscar..."
></storybook-input>
```

### Con manejo de valor
```typescript
@Component({
  template: `
    <storybook-input 
      size="md" 
      [value]="searchQuery"
      (valueChange)="onSearch($event)"
      icon="leading"
    ></storybook-input>
    <p>Buscando: {{ searchQuery }}</p>
  `
})
export class SearchComponent {
  searchQuery = '';

  onSearch(value: string) {
    this.searchQuery = value;
    console.log('Search query:', value);
  }
}
```

### Estado de error
```typescript
<storybook-input 
  size="md" 
  state="error"
  placeholder="Email inválido"
  [value]="email"
></storybook-input>
```

## 🎨 Colores del Diseño

Basado en el diseño de Figma:

| Estado | Border | Texto | Icon |
|--------|--------|-------|------|
| Default | `#CBD5E1` (neutral-300) | `#64748B` (neutral-500) | `#64748B` |
| Hover | `#CBD5E1` | `#64748B` | `#64748B` |
| Focus | `#64748B` (neutral-500) | `#64748B` | `#64748B` |
| Disabled | `#CBD5E1` | `#64748B` | `#64748B` |
| Error | `#DC2626` (Red-600) | `#DC2626` | `#DC2626` |

### Focus Outline
- Color: `#7C3AED` (Violet-600)
- Estilo: Box-shadow con 3px de espacio blanco + 4px de borde violeta

## 📚 Stories Disponibles en Storybook

### Por tamaño (sin icono)
- SmallDefault, MediumDefault, LargeDefault
- SmallHover, MediumHover, LargeHover
- SmallFocus, MediumFocus, LargeFocus
- SmallDisabled, MediumDisabled, LargeDisabled
- SmallError, MediumError, LargeError

### Con icono leading
- SmallWithIconDefault, MediumWithIconDefault, LargeWithIconDefault
- SmallWithIconHover, MediumWithIconHover, LargeWithIconHover
- SmallWithIconFocus, MediumWithIconFocus, LargeWithIconFocus
- SmallWithIconDisabled, MediumWithIconDisabled, LargeWithIconDisabled
- SmallWithIconError, MediumWithIconError, LargeWithIconError

### Showcases
- **AllSizes** - Muestra todos los tamaños en estado default
- **AllStates** - Muestra todos los estados en tamaño medium
- **WithIcons** - Muestra todos los tamaños con icono
- **DesignSystemShowcase** - Vista completa de todo el sistema

## 🔧 Para usar en Builder.io

Este componente está diseñado para ser fácilmente integrable en Builder.io:

### 1. Registrar el componente en Builder.io

```typescript
import { Builder } from '@builder.io/react';
import { InputComponent } from './input.component';

Builder.registerComponent(InputComponent, {
  name: 'Input',
  inputs: [
    {
      name: 'size',
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      defaultValue: 'md'
    },
    {
      name: 'state',
      type: 'string',
      enum: ['default', 'hover', 'focus', 'disabled', 'error'],
      defaultValue: 'default'
    },
    {
      name: 'icon',
      type: 'string',
      enum: ['none', 'leading'],
      defaultValue: 'none'
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: 'Ingresa información'
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: ''
    }
  ]
});
```

## ✅ Características Implementadas

- ✅ 3 tamaños configurables (sm, md, lg)
- ✅ 5 estados visuales (default, hover, focus, disabled, error)
- ✅ Soporte de icono leading (búsqueda)
- ✅ Placeholder editable
- ✅ Colores exactos del diseño de Figma
- ✅ Border radius 6px (consistente)
- ✅ Focus state con outline violeta
- ✅ Estado disabled no interactivo
- ✅ Estado error con color rojo
- ✅ Eventos para manejo de cambios
- ✅ Totalmente tipado con TypeScript
- ✅ Compatible con Angular standalone components

## 🚀 Ver en Storybook

El componente está disponible en Storybook en:
```
http://localhost:6006/?path=/story/example-input--medium-default
```

¡Explora todas las variaciones en el **DesignSystemShowcase** story!
