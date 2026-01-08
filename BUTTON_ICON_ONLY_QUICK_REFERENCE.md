# Icon-Only Circular Buttons - Quick Reference

## 🎯 Uso Rápido

```typescript
<storybook-button
  shape="icon-only"
  size="md"
  iconName="chevron-left"
  label="Previous"
></storybook-button>
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

| Prop       | Values                                         | Default         |
| ---------- | ---------------------------------------------- | --------------- |
| `shape`    | `'icon-only'` **(requerido)**                  | -               |
| `size`     | `'sm'` \| `'md'` \| `'lg'`                     | `'md'`          |
| `iconName` | `'chevron-left'` \| `'chevron-right'` \| `'chevron-up'` \| `'chevron-down'` \| `'check'` | `'chevron-left'` |
| `state`    | `'default'` \| `'hover'` \| `'active'` \| `'focus'` \| `'disabled'` | `'default'`     |
| `label`    | string (para aria-label)                       | `'Boton'`       |

---

## 🎯 Casos de Uso Comunes

### Paginación

```typescript
<div class="pagination">
  <storybook-button
    shape="icon-only"
    size="md"
    iconName="chevron-left"
    label="Previous page"
    (onClick)="previousPage()"
  ></storybook-button>

  <span>Page {{ page }}</span>

  <storybook-button
    shape="icon-only"
    size="md"
    iconName="chevron-right"
    label="Next page"
    (onClick)="nextPage()"
  ></storybook-button>
</div>
```

### Dropdown Menu

```typescript
<storybook-button
  shape="icon-only"
  size="sm"
  iconName="chevron-down"
  [state]="isOpen ? 'active' : 'default'"
  label="Toggle menu"
  (onClick)="toggleMenu()"
></storybook-button>
```

### Scroll to Top

```typescript
<storybook-button
  shape="icon-only"
  size="lg"
  iconName="chevron-up"
  label="Scroll to top"
  (onClick)="scrollToTop()"
></storybook-button>
```

### Confirmación

```typescript
<storybook-button
  shape="icon-only"
  size="md"
  iconName="check"
  label="Confirm"
  (onClick)="confirm()"
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
<storybook-button shape="icon-only" iconName="chevron-left"></storybook-button>
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

| Característica | `shape="icon"`   | `shape="icon-only"` |
| -------------- | ---------------- | ------------------- |
| Forma          | Cuadrado         | **Circular**        |
| Borde          | Sin borde        | **Con borde**       |
| Icono          | Fijo (check)     | **Configurable**    |
| Background     | Color sólido     | **Transparente**    |
| Focus Ring     | Estándar         | **Personalizado**   |

---

**✨ Listo para usar en Builder.io y producción!**
