# Separator Component

The Separator component is a simple, utility component that renders a visual divider line to separate content. It adapts to its container and does not impose its own spacing.

## Features

- 2 orientations: `horizontal`, `vertical`
- Configurable thickness
- Adapts length to container (100%)
- No built-in margins or padding
- Minimal, utility-focused design
- Pixel-perfect replication from Figma design
- Accessible with ARIA attributes
- Angular 20 standalone component

## Import

```typescript
import { SeparatorComponent } from './separator.component';
```

## Basic Usage

```html
<!-- Horizontal separator -->
<storybook-separator orientation="horizontal"></storybook-separator>

<!-- Vertical separator -->
<storybook-separator orientation="vertical"></storybook-separator>

<!-- Custom thickness -->
<storybook-separator 
  orientation="horizontal" 
  [thickness]="2">
</storybook-separator>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Separator orientation |
| `thickness` | `number` | `1` | Line thickness in pixels |

## Design Philosophy

### No Built-in Spacing

**Important**: The Separator component does NOT include margins or padding. Spacing around the separator should be managed by the parent container or layout.

```html
<!-- ✓ Correct: Container manages spacing -->
<div style="padding: 16px 0;">
  <div>Content Above</div>
  <storybook-separator orientation="horizontal"></storybook-separator>
  <div>Content Below</div>
</div>

<!-- ✗ Incorrect: Relying on separator to create spacing -->
<div>Content Above</div>
<storybook-separator orientation="horizontal"></storybook-separator>
<div>Content Below</div>
```

### Length Adaptation

The separator automatically fills its container:
- **Horizontal**: `width: 100%` of parent
- **Vertical**: `height: 100%` of parent (or `align-self: stretch`)

## Design Specifications

### General
- **Default Thickness**: 1px
- **Color**: `#CBD5E1` (neutral-300 from Figma)
- **Border**: None
- **Margins/Padding**: None (managed by parent)

### Horizontal
- **Width**: 100% (adapts to container)
- **Height**: thickness value (default 1px)

### Vertical
- **Width**: thickness value (default 1px)
- **Height**: 100% (adapts to container)
- **Alignment**: `align-self: stretch` to fill parent height

## Examples

### Content List with Separators

```html
<div style="max-width: 400px;">
  <div style="padding: 16px 0;">Item 1</div>
  <storybook-separator orientation="horizontal"></storybook-separator>
  <div style="padding: 16px 0;">Item 2</div>
  <storybook-separator orientation="horizontal"></storybook-separator>
  <div style="padding: 16px 0;">Item 3</div>
</div>
```

### Sidebar Layout

```html
<div style="display: flex; gap: 24px; height: 100vh;">
  <aside style="flex: 1;">Sidebar Content</aside>
  <storybook-separator orientation="vertical"></storybook-separator>
  <main style="flex: 3;">Main Content</main>
</div>
```

### Menu Sections

```html
<nav>
  <div style="padding: 12px 0;">Section 1</div>
  <div style="padding: 8px 0 8px 16px;">Menu Item 1.1</div>
  <div style="padding: 8px 0 8px 16px;">Menu Item 1.2</div>
  <div style="padding: 12px 0;">
    <storybook-separator orientation="horizontal"></storybook-separator>
  </div>
  <div style="padding: 12px 0;">Section 2</div>
  <div style="padding: 8px 0 8px 16px;">Menu Item 2.1</div>
</nav>
```

### Toolbar with Vertical Separators

```html
<div style="display: flex; align-items: center; gap: 16px;">
  <button>Action 1</button>
  <storybook-separator orientation="vertical" style="height: 24px;"></storybook-separator>
  <button>Action 2</button>
  <storybook-separator orientation="vertical" style="height: 24px;"></storybook-separator>
  <button>Action 3</button>
</div>
```

### Card Sections

```html
<div style="border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden;">
  <div style="padding: 16px;">Header Section</div>
  <storybook-separator orientation="horizontal"></storybook-separator>
  <div style="padding: 16px;">Content Section</div>
  <storybook-separator orientation="horizontal"></storybook-separator>
  <div style="padding: 16px;">Footer Section</div>
</div>
```

## Use Cases

### When to Use Horizontal Separator

- Dividing sections in a vertical layout
- Separating list items
- Breaking up content in cards
- Menu section dividers
- Footer boundaries

### When to Use Vertical Separator

- Sidebar/content column dividers
- Toolbar button groups
- Split pane layouts
- Navigation menu groups
- Dashboard panel separators

## Styling

### Base Styles

```css
.separator {
  flex-shrink: 0;
  background-color: #cbd5e1;
  border: none;
}

.separator-horizontal {
  width: 100%;
  height: 1px;
}

.separator-vertical {
  width: 1px;
  height: 100%;
  align-self: stretch;
}
```

### Custom Thickness

The thickness prop directly controls the separator's dimensions:

```html
<!-- 2px horizontal separator -->
<storybook-separator orientation="horizontal" [thickness]="2"></storybook-separator>

<!-- 3px vertical separator -->
<storybook-separator orientation="vertical" [thickness]="3"></storybook-separator>
```

## Accessibility

- Uses `role="separator"` for semantic meaning
- Includes `aria-orientation` attribute
- Purely decorative (does not receive focus)
- Works with screen readers to announce content divisions

```html
<!-- Rendered output -->
<div 
  class="separator separator-horizontal" 
  role="separator" 
  aria-orientation="horizontal">
</div>
```

## Component Architecture

```typescript
@Component({
  selector: 'storybook-separator',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
  styleUrls: ['./separator.css']
})
export class SeparatorComponent {
  @Input() orientation: SeparatorOrientation = 'horizontal';
  @Input() thickness: number = 1;
  
  get separatorClasses(): string[] { ... }
}
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - CSS Flexbox
  - Angular 20+

## Builder.io Compatibility

This component is designed to be compatible with Builder.io:

1. **Standalone Component**: No module dependencies required
2. **Props System**: Simple @Input decorators map to Builder.io controls
3. **Utility-focused**: Minimal, reusable design

### Builder.io Integration Example

When registering in Builder.io:

```typescript
Builder.registerComponent(SeparatorComponent, {
  name: 'Separator',
  inputs: [
    {
      name: 'orientation',
      type: 'string',
      enum: ['horizontal', 'vertical'],
      defaultValue: 'horizontal'
    },
    {
      name: 'thickness',
      type: 'number',
      defaultValue: 1,
      min: 1,
      max: 10
    }
  ]
});
```

## Best Practices

### DO ✓

- Use separator as a visual divider only
- Manage spacing with parent container padding/margin
- Set explicit height for vertical separators in flex containers
- Keep thickness minimal (1-2px) for subtle dividers

### DON'T ✗

- Don't use separator for layout spacing
- Don't add margins directly to separator
- Don't use as a colored bar (use a div instead)
- Don't make thickness too large (defeats purpose)

## Comparison: Horizontal vs Vertical

| Feature | Horizontal | Vertical |
|---------|-----------|----------|
| **Dimension** | width: 100%, height: thickness | width: thickness, height: 100% |
| **Container** | Block/flex column | Flex row |
| **Use Case** | Vertical content flow | Horizontal layout |
| **Common In** | Lists, sections, menus | Sidebars, toolbars, panels |

## Performance

- Lightweight component (~0.5KB gzipped)
- No JavaScript required (pure CSS)
- Minimal DOM footprint (single div)
- No external dependencies
- Efficient rendering

## Troubleshooting

### Vertical separator not showing

**Problem**: Vertical separator is invisible or collapsed.

**Solution**: Ensure parent container has a defined height and uses flexbox:

```html
<div style="display: flex; height: 200px;">
  <div>Left Content</div>
  <storybook-separator orientation="vertical"></storybook-separator>
  <div>Right Content</div>
</div>
```

### Separator too thick/thin

**Problem**: Separator doesn't match expected thickness.

**Solution**: Check the `thickness` prop value:

```html
<storybook-separator [thickness]="2"></storybook-separator>
```

### Unwanted spacing around separator

**Problem**: Extra space above/below or left/right of separator.

**Solution**: The separator has no built-in spacing. Remove margins from parent or adjacent elements.

## Related Components

- **Card**: For containing separated content sections
- **Layout Components**: Grid, Flex containers that use separators

## Version History

- **v1.0.0** - Initial release based on Figma design specifications
  - Horizontal and vertical orientations
  - Configurable thickness
  - No built-in spacing (utility-focused)
  - ARIA accessibility

## Future Enhancements

Potential features not included in current Figma design:
- Custom colors (currently fixed to #CBD5E1)
- Gradient separators
- Dashed/dotted line styles
- Fade effects at ends
- Decorative separators (with icons or text)

## Notes

- The 16px spacing shown in Figma is **referential** and represents typical content spacing, not separator properties
- Separator is intentionally minimal to be a flexible utility component
- For colored dividers or decorative elements, consider using a different component
