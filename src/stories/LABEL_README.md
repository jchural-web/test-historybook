# Label Component

A static badge/tag component for displaying categorized information, statuses, or filters with optional search icons.

## Overview

The Label component is a pill-shaped tag designed to display short text labels with optional leading icons. It's commonly used for status indicators, category tags, filters, and product badges.

## Features

- **3 Visual Variants**: Success (solid green), Success Light (light green with border), and Neutral (white with border)
- **Optional Leading Icon**: 16x16px search icon that appears before the text
- **Pill Shape**: Fixed border-radius of 15.5px for a rounded appearance
- **Static Component**: No interaction states (non-clickable)
- **Pixel-Perfect**: Based on Figma design specifications

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'success' \| 'success-light' \| 'neutral'` | `'success'` | Visual style variant |
| `icon` | `'none' \| 'leading'` | `'none'` | Icon configuration |
| `text` | `string` | `'Etiqueta'` | Label text content |

## Variants

### Success (Solid Green)
- **Background**: `#22C55E` (Green-500)
- **Text Color**: `#FFF` (White)
- **Icon Color**: `#FFF` (White)
- **Use Cases**: Active status, confirmed actions, positive indicators

### Success Light (Light Green with Border)
- **Background**: `#BBF7D0` (Green-200)
- **Border**: `1px solid #16A34A` (Green-600)
- **Text Color**: `#166534` (Green-800)
- **Icon Color**: `#166534` (Green-800)
- **Use Cases**: Pending status, secondary success indicators, category tags

### Neutral (White with Border and Shadow)
- **Background**: `#FFF` (White)
- **Border**: `1px solid rgba(241, 245, 249, 1)` (Neutral-100)
- **Text Color**: `#166534` (Green-800)
- **Icon Color**: `#166534` (Green-800)
- **Box Shadow**: `0 1px 2px 0 rgba(0, 0, 0, 0.08)`
- **Use Cases**: Inactive status, neutral information, general tags

## Icon

The component supports an optional **leading search icon** (16x16px) positioned before the text. The icon color automatically adapts based on the variant:
- **Success**: White icon
- **Success Light**: Green-800 icon
- **Neutral**: Green-800 icon

## Design Specifications

### Dimensions
- **Height**: 28px (fixed)
- **Padding**: 8px (vertical) × 20px (horizontal)
- **Border Radius**: 15.5px (pill shape)
- **Gap**: 10px (between icon and text)

### Typography
- **Font Family**: Inter (fallback: -apple-system, Roboto, Helvetica, sans-serif)
- **Font Size**: 14px
- **Font Weight**: 400 (Regular)
- **Line Height**: 21px (150%)
- **Letter Spacing**: 0.05px

### Icon
- **Size**: 16×16px
- **Type**: Search icon (lucide/search)
- **Position**: Leading (left side)

## Usage Examples

### Basic Usage

```typescript
// Success variant without icon
<storybook-label 
  variant="success" 
  icon="none" 
  text="Activo">
</storybook-label>

// Success variant with leading icon
<storybook-label 
  variant="success" 
  icon="leading" 
  text="Buscar">
</storybook-label>
```

### Status Indicators

```typescript
<storybook-label variant="success" text="Completado"></storybook-label>
<storybook-label variant="success-light" text="En progreso"></storybook-label>
<storybook-label variant="neutral" text="Pendiente"></storybook-label>
```

### Filter Tags

```typescript
<storybook-label variant="success" icon="leading" text="Búsqueda activa"></storybook-label>
<storybook-label variant="neutral" icon="leading" text="Filtro aplicado"></storybook-label>
```

### Product Badges

```typescript
<storybook-label variant="success" text="Nuevo"></storybook-label>
<storybook-label variant="success" text="Popular"></storybook-label>
<storybook-label variant="success-light" text="Oferta"></storybook-label>
<storybook-label variant="neutral" text="Stock limitado"></storybook-label>
```

## Integration with Builder.io

This component is designed to be fully compatible with Builder.io's visual editor. All props are exposed and can be configured through the Builder.io interface:

1. **variant**: Dropdown selector for visual style
2. **icon**: Toggle or dropdown for icon configuration
3. **text**: Text input for label content

## Accessibility Considerations

- The component is **static** (non-interactive) and does not require keyboard navigation
- Use semantic HTML context when embedding labels (e.g., within `<span>` or as part of larger interactive elements)
- Ensure sufficient color contrast between text and background (all variants meet WCAG AA standards)
- Consider adding `aria-label` attributes when used as visual-only indicators

## CSS Class Structure

```css
.label                  /* Base label container */
.label-success         /* Success variant styles */
.label-success-light   /* Success Light variant styles */
.label-neutral         /* Neutral variant styles */
.label-icon            /* Icon element styles */
.label-text            /* Text element styles */
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires CSS flexbox support
- SVG icon support required

## Related Components

- **Button**: For interactive pill-shaped elements
- **Input**: For form inputs with similar visual styling
- **Checkbox**: For selectable options with visual feedback

## Notes

- The component is **non-interactive** by design (no hover, focus, or click states)
- Text content is displayed using `white-space: nowrap` to prevent wrapping
- Icon is only displayed when `icon="leading"` is set
- All color values are hardcoded to match Figma specifications exactly
