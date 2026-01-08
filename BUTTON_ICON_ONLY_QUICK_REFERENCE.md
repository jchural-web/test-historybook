# Icon-Only Circular Buttons - Quick Reference

## 🎯 Uso Rápido

### Básico (Outline - Recomendado)

```typescript
<storybook-button
  shape="icon-only"
  size="md"
  variant="outline"
  iconName="chevron-left"
  label="Previous"
></storybook-button>
```

### Con Otros Variants

```typescript
<!-- Default (púrpura lleno) -->
<storybook-button shape="icon-only" variant="default" iconName="check" label="Confirm" />

<!-- Secondary (azul lleno) -->
<storybook-button shape="icon-only" variant="secondary" iconName="chevron-right" label="Next" />

<!-- Ghost (púrpura claro) -->
<storybook-button shape="icon-only" variant="ghost" iconName="chevron-up" label="Scroll up" />

<!-- Link (azul transparente) -->
<storybook-button shape="icon-only" variant="link" iconName="chevron-down" label="Expand" />

<!-- Destructive (rojo - eliminar) -->
<storybook-button shape="icon-only" variant="destructive" iconName="check" label="Delete" />
```

---

## 🎨 Variants (NUEVO!)

```typescript
// outline - Borde, para navegación (RECOMENDADO)
<storybook-button shape="icon-only" variant="outline" iconName="chevron-left" />

// default - Púrpura lleno, para acciones primarias
<storybook-button shape="icon-only" variant="default" iconName="check" />

// secondary - Azul lleno, para acciones alternativas
<storybook-button shape="icon-only" variant="secondary" iconName="chevron-right" />

// ghost - Púrpura claro, para acciones sutiles
<storybook-button shape="icon-only" variant="ghost" iconName="chevron-up" />

// link - Azul transparente, para links
<storybook-button shape="icon-only" variant="link" iconName="chevron-down" />

// destructive - Rojo, para eliminar/peligroso
<storybook-button shape="icon-only" variant="destructive" iconName="check" />
```

---

## 📐 Tamaños

```typescript
// Small (27px)
<storybook-button shape="icon-only" size="sm" iconName="chevron-left"></storybook-button>

// Medium (35px) - Default
<storybook-button shape="icon-only" size="md" iconName="chevron-left"></storybook-button>

// Large (43px)
<storybook-button shape="icon-only" size="lg" iconName="chevron-left"></storybook-button>
```

---

## 🎨 Estados

```typescript
// Default
<storybook-button shape="icon-only" state="default" iconName="chevron-left"></storybook-button>

// Hover (opacity: 0.9)
<storybook-button shape="icon-only" state="hover" iconName="chevron-left"></storybook-button>

// Active
<storybook-button shape="icon-only" state="active" iconName="chevron-left"></storybook-button>

// Focus (con focus ring #581C87)
<storybook-button shape="icon-only" state="focus" iconName="chevron-left"></storybook-button>

// Disabled (opacity: 0.4)
<storybook-button shape="icon-only" state="disabled" iconName="chevron-left"></storybook-button>
```

---

## 🎭 Iconos

```typescript
// Chevron Left (←)
<storybook-button shape="icon-only" iconName="chevron-left" label="Previous"></storybook-button>

// Chevron Right (→)
<storybook-button shape="icon-only" iconName="chevron-right" label="Next"></storybook-button>

// Chevron Up (↑)
<storybook-button shape="icon-only" iconName="chevron-up" label="Scroll up"></storybook-button>

// Chevron Down (↓)
<storybook-button shape="icon-only" iconName="chevron-down" label="Expand"></storybook-button>

// Check (✓)
<storybook-button shape="icon-only" iconName="check" label="Confirm"></storybook-button>
```

---

## 🔧 Props

| Prop       | Values                                                                                   | Default          |
| ---------- | ---------------------------------------------------------------------------------------- | ---------------- |
| `shape`    | `'icon-only'` **(requerido)**                                                            | -                |
| `variant`  | `'outline'` \| `'default'` \| `'secondary'` \| `'ghost'` \| `'link'` \| `'destructive'`  | `'outline'`      |
| `size`     | `'sm'` \| `'md'` \| `'lg'`                                                               | `'md'`           |
| `iconName` | `'chevron-left'` \| `'chevron-right'` \| `'chevron-up'` \| `'chevron-down'` \| `'check'` | `'chevron-left'` |
| `state`    | `'default'` \| `'hover'` \| `'active'` \| `'focus'` \| `'disabled'`                      | `'default'`      |
| `label`    | string (para aria-label)                                                                 | `'Boton'`        |

---

## 📊 Tabla de Variants

| Variant         | Visual | Border/Color                     | Uso                      |
| --------------- | ------ | -------------------------------- | ------------------------ |
| **outline**     | 🔷     | `#CBD5E1` border, `#9333EA` icon | Navegación (RECOMENDADO) |
| **default**     | 🟣     | `#7C3AED` background             | Acción primaria          |
| **secondary**   | 🔵     | `#2563EB` background             | Acción alternativa       |
| **ghost**       | 💜     | `#EDE9FE` background             | Acción sutil             |
| **link**        | 🔗     | Transparente, `#2563EB` icon     | Links                    |
| **destructive** | 🔴     | `#DC2626` background             | Eliminar/Peligro         |

---

## 🎯 Casos de Uso Comunes

### Paginación (Outline)

```typescript
<div class="pagination">
  <storybook-button
    shape="icon-only"
    size="md"
    variant="outline"
    iconName="chevron-left"
    label="Previous page"
    (onClick)="previousPage()"
  ></storybook-button>

  <span>Page {{ page }}</span>

  <storybook-button
    shape="icon-only"
    size="md"
    variant="outline"
    iconName="chevron-right"
    label="Next page"
    (onClick)="nextPage()"
  ></storybook-button>
</div>
```

### Dropdown Menu (Ghost - sutil)

```typescript
<storybook-button
  shape="icon-only"
  size="sm"
  variant="ghost"
  iconName="chevron-down"
  [state]="isOpen ? 'active' : 'default'"
  label="Toggle menu"
  (onClick)="toggleMenu()"
></storybook-button>
```

### Scroll to Top (Ghost)

```typescript
<storybook-button
  shape="icon-only"
  size="lg"
  variant="ghost"
  iconName="chevron-up"
  label="Scroll to top"
  (onClick)="scrollToTop()"
></storybook-button>
```

### Confirmación (Default - acción primaria)

```typescript
<storybook-button
  shape="icon-only"
  size="md"
  variant="default"
  iconName="check"
  label="Confirm"
  (onClick)="confirm()"
></storybook-button>
```

### Eliminar (Destructive - rojo)

```typescript
<storybook-button
  shape="icon-only"
  size="md"
  variant="destructive"
  iconName="check"
  label="Delete"
  (onClick)="delete()"
></storybook-button>
```

---

## 🎨 Especificaciones de Diseño

### Tamaños

| Size | Diámetro | Icono   |
| ---- | -------- | ------- |
| sm   | 27px     | 17x17px |
| md   | 35px     | 21x21px |
| lg   | 43px     | 26x26px |

### Colores

| Estado   | Border    | Icon      | Opacity | Ring      |
| -------- | --------- | --------- | ------- | --------- |
| default  | `#CBD5E1` | `#9333EA` | 1.0     | -         |
| hover    | `#CBD5E1` | `#9333EA` | 0.9     | -         |
| active   | `#CBD5E1` | `#9333EA` | 1.0     | -         |
| focus    | `#64748B` | `#6B21A8` | 1.0     | `#581C87` |
| disabled | `#CBD5E1` | `#9333EA` | 0.4     | -         |

---

## 📚 Stories en Storybook

Navega a **Example/Button** en Storybook y busca:

- `IconOnlySmallDefault`
- `IconOnlyMediumDefault`
- `IconOnlyLargeDefault`
- `IconOnlyHover`
- `IconOnlyActive`
- `IconOnlyFocus`
- `IconOnlyDisabled`
- `IconOnlyAllSizes`
- `IconOnlyAllStates`
- `IconOnlyAllIcons`

O mira el **Design System Showcase** completo con la nueva sección "Icon-Only Circular Buttons".

---

## ✅ Checklist de Verificación

Asegúrate de que:

- [ ] `shape="icon-only"` está configurado
- [ ] `iconName` tiene un valor válido
- [ ] `label` está configurado para accesibilidad
- [ ] El botón está dentro de un componente que importa `ButtonComponent`
- [ ] Los estilos CSS están cargados

---

## 🚨 Errores Comunes

### ❌ Error: Botón cuadrado en vez de circular

```typescript
// INCORRECTO
<storybook-button shape="icon" iconName="chevron-left"></storybook-button>

// CORRECTO
<storybook-button shape="icon-only" variant="outline" iconName="chevron-left"></storybook-button>
```

### ❌ Error: No veo los colores, todo está gris

```typescript
// INCORRECTO - Falta variant
<storybook-button shape="icon-only" iconName="chevron-left"></storybook-button>

// CORRECTO
<storybook-button shape="icon-only" variant="default" iconName="chevron-left"></storybook-button>
```

### ❌ Error: Icono no aparece

```typescript
// INCORRECTO - Falta iconName
<storybook-button shape="icon-only"></storybook-button>

// CORRECTO
<storybook-button shape="icon-only" iconName="chevron-left"></storybook-button>
```

### ❌ Error: No hay aria-label

```typescript
// INCORRECTO - Sin label para screen readers
<storybook-button shape="icon-only" iconName="chevron-left"></storybook-button>

// CORRECTO
<storybook-button shape="icon-only" iconName="chevron-left" label="Previous page"></storybook-button>
```

---

## 🎓 Diferencias con `shape="icon"`

| Característica | `shape="icon"` | `shape="icon-only"`                                            |
| -------------- | -------------- | -------------------------------------------------------------- |
| Forma          | Cuadrado       | **Circular**                                                   |
| Icono          | Fijo (check)   | **Configurable** (chevron-left, right, up, down, check)        |
| Variants       | No             | **Sí (outline, default, secondary, ghost, link, destructive)** |
| Background     | Color sólido   | **Depende del variant**                                        |
| Focus Ring     | Estándar       | **Personalizado**                                              |
| Uso            | General        | **Navegación y acciones**                                      |

---

**✨ Listo para usar en Builder.io y producción!**
