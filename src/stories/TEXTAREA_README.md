# Textarea Component

Componente Textarea creado a partir del diseño de Figma, compatible con Angular y Storybook.

## 📦 Archivos Generados

- `src/stories/textarea.component.ts` - Componente Angular
- `src/stories/textarea.css` - Estilos del componente
- `src/stories/textarea.stories.ts` - Stories de Storybook

## 🎨 Propiedades (Props)

### state
Estado visual del textarea
- **Tipo:** `'default' | 'hover' | 'focus' | 'disabled' | 'error'`
- **Valores:**
  - `default` - Estado normal (border: #CBD5E1)
  - `hover` - Estado hover con opacidad 0.9
  - `focus` - Estado focus con outline violeta (#7C3AED)
  - `disabled` - Deshabilitado, opacidad 0.4, no interactivo
  - `error` - Estado de error (border y texto: #DC2626)

### placeholder
Texto del placeholder
- **Tipo:** `string`
- **Default:** `"Ingresa información"`

### value
Valor del textarea
- **Tipo:** `string`
- **Default:** `""`

### rows
Número de filas visibles
- **Tipo:** `number`
- **Default:** `3`

## 📤 Eventos (Outputs)

- `valueChange` - Emite cuando el valor cambia (two-way binding)
- `onInputChange` - Emite cuando el usuario escribe
- `onFocusEvent` - Emite cuando el textarea recibe focus
- `onBlurEvent` - Emite cuando el textarea pierde focus

## 🎯 Uso en Angular

### Uso básico
```typescript
import { TextareaComponent } from './stories/textarea.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TextareaComponent],
  template: `
    <storybook-textarea 
      state="default"
      placeholder="Escribe tu mensaje aquí..."
    ></storybook-textarea>
  `
})
export class AppComponent {}
```

### Con manejo de valor
```typescript
@Component({
  template: `
    <storybook-textarea 
      state="default"
      [value]="message"
      (valueChange)="onMessageChange($event)"
      placeholder="Tu mensaje..."
    ></storybook-textarea>
    <p>Mensaje: {{ message }}</p>
  `
})
export class MessageComponent {
  message = '';

  onMessageChange(value: string) {
    this.message = value;
    console.log('Message:', value);
  }
}
```

### Estado de error
```typescript
<div>
  <storybook-textarea 
    state="error"
    placeholder="Este campo tiene un error"
    [value]="comment"
  ></storybook-textarea>
  <span style="color: #DC2626; font-size: 12px;">
    Este campo es requerido
  </span>
</div>
```

### Con label
```typescript
<div style="display: flex; flex-direction: column; gap: 8px;">
  <label style="font-weight: 500; color: #202020;">
    Comentarios *
  </label>
  <storybook-textarea 
    state="default"
    placeholder="Ingresa tus comentarios..."
    [rows]="4"
  ></storybook-textarea>
</div>
```

## 🎨 Colores del Diseño

Basado en el diseño de Figma:

| Estado | Border | Texto | Placeholder |
|--------|--------|-------|-------------|
| Default | `#CBD5E1` (neutral-300) | `#64748B` (neutral-500) | `#64748B` |
| Hover | `#CBD5E1` | `#64748B` | `#64748B` |
| Focus | `#CBD5E1` | `#64748B` | `#64748B` |
| Disabled | `#CBD5E1` | `#64748B` | `#64748B` |
| Error | `#DC2626` (Red-600) | `#DC2626` | `#DC2626` |

### Especificaciones de Diseño

**Dimensiones:**
- Width: 203px (max-width, 100% responsive)
- Min-height: 80px
- Padding: 8px 12px

**Border:**
- Width: 1px solid
- Radius: 6px

**Typography:**
- Font: Inter, 16px
- Line-height: 24px
- Letter-spacing: 0.05px
- Font-weight: 400

**Focus Outline:**
- Color: `#7C3AED` (Violet-600)
- Estilo: Box-shadow con 3px de espacio blanco + 4px de borde violeta

**Opacidad:**
- Hover: 90% (opacity: 0.9)
- Disabled: 40% (opacity: 0.4)

**Resize:**
- Deshabilitado (resize: none)

## 📚 Stories Disponibles en Storybook

### Estados básicos
- **Default** - Estado normal
- **Hover** - Estado hover
- **Focus** - Estado con foco
- **Disabled** - Deshabilitado
- **Error** - Estado de error

### Con contenido
- **WithContent** - Con texto de ejemplo
- **ErrorWithContent** - Error con texto

### Showcases
- **AllStates** - Todos los estados lado a lado
- **DesignSystemShowcase** - Vista completa del sistema de diseño
- **InForm** - Ejemplo integrado en formulario

## 🔧 Para usar en Builder.io

Este componente está diseñado para ser fácilmente integrable en Builder.io:

### 1. Registrar el componente en Builder.io

```typescript
import { Builder } from '@builder.io/react';
import { TextareaComponent } from './textarea.component';

Builder.registerComponent(TextareaComponent, {
  name: 'Textarea',
  inputs: [
    {
      name: 'state',
      type: 'string',
      enum: ['default', 'hover', 'focus', 'disabled', 'error'],
      defaultValue: 'default'
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
    },
    {
      name: 'rows',
      type: 'number',
      defaultValue: 3
    }
  ]
});
```

## ✅ Características Implementadas

- ✅ 5 estados visuales (default, hover, focus, disabled, error)
- ✅ Placeholder editable
- ✅ Colores exactos del diseño de Figma
- ✅ Border radius 6px
- ✅ Padding 8px 12px
- ✅ Focus state con outline violeta
- ✅ Estado disabled no interactivo
- ✅ Estado error con color rojo
- ✅ Resize deshabilitado (fiel al diseño)
- ✅ Scrollbar personalizado (opcional)
- ✅ Eventos para manejo de cambios
- ✅ Totalmente tipado con TypeScript
- ✅ Compatible con Angular standalone components
- ✅ Responsive (max-width con 100% width)

## 🎯 Casos de Uso

### 1. Formulario de contacto
```typescript
<form>
  <div>
    <label>Mensaje *</label>
    <storybook-textarea 
      state="default"
      placeholder="Escribe tu mensaje..."
      [rows]="5"
    ></storybook-textarea>
  </div>
</form>
```

### 2. Comentarios
```typescript
<div>
  <label>Comentarios</label>
  <storybook-textarea 
    state="default"
    placeholder="Agrega tus comentarios..."
    [rows]="3"
  ></storybook-textarea>
</div>
```

### 3. Validación con error
```typescript
<div>
  <storybook-textarea 
    [state]="hasError ? 'error' : 'default'"
    placeholder="Descripción..."
    [value]="description"
    (valueChange)="onDescriptionChange($event)"
  ></storybook-textarea>
  <span *ngIf="hasError" style="color: #DC2626;">
    Este campo es requerido (mínimo 10 caracteres)
  </span>
</div>
```

### 4. Área de texto grande
```typescript
<storybook-textarea 
  state="default"
  placeholder="Escribe tu historia..."
  [rows]="8"
></storybook-textarea>
```

## 🔍 Diferencias con Input

| Característica | Input | Textarea |
|----------------|-------|----------|
| Múltiples líneas | ❌ | ✅ |
| Altura ajustable | ❌ | ✅ (via rows) |
| Resize | N/A | ❌ Deshabilitado |
| Icono leading | ✅ | ❌ |
| Height fija | ✅ | ❌ (min-height) |

## 🚀 Ver en Storybook

El componente está disponible en Storybook en:
```
http://localhost:6006/?path=/story/example-textarea--default
```

**Stories recomendados:**
- **AllStates** - Ver todos los estados comparados
- **DesignSystemShowcase** - Vista completa con especificaciones
- **InForm** - Ver integración en formulario real

¡Explora todas las variaciones para entender el comportamiento completo del componente! 📝
