# Badge Component

The Badge component is a small, non-interactive visual indicator used to display status, counts, or notifications. It supports multiple variants and sizes.

## Features

- 5 variants: `default`, `secondary`, `destructive`, `outline`, `success`
- 3 sizes: `dot`, `default`, `large`
- Configurable value (for default and large sizes)
- Dot-only mode for simple status indicators
- Pill-shaped design for text badges
- Non-interactive (no hover, click states)
- Pixel-perfect replication from Figma design
- Accessible with ARIA attributes
- Angular 20 standalone component

## Import

```typescript
import { BadgeComponent } from './badge.component';
```

## Basic Usage

```html
<!-- Dot badge (status indicator) -->
<storybook-badge variant="success" size="dot"></storybook-badge>

<!-- Default badge with value -->
<storybook-badge variant="default" size="default" value="10"></storybook-badge>

<!-- Large badge with text -->
<storybook-badge variant="destructive" size="large" value="99+"></storybook-badge>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'secondary' \| 'destructive' \| 'outline' \| 'success'` | `'default'` | Badge color variant |
| `size` | `'dot' \| 'default' \| 'large'` | `'default'` | Badge size |
| `value` | `string \| number` | `'10'` | Badge value (displayed for default and large sizes) |

## Variants

### Default (Violet)
- **Background**: `#7C3AED` (Violet-600)
- **Text Color**: White
- **Use Case**: Primary notifications, general purpose

### Secondary (Blue)
- **Background**: `#2563EB` (Blue-600)
- **Text Color**: White
- **Use Case**: Secondary notifications, information

### Destructive (Red)
- **Background**: `#DC2626` (Red-600)
- **Text Color**: White
- **Use Case**: Errors, critical alerts, urgent notifications

### Outline
- **Border**: `1px solid #CBD5E1` (neutral-300)
- **Background**: Transparent
- **Text Color**: `#1E293B` (neutral-800)
- **Use Case**: Draft status, inactive items

### Success (Green)
- **Background**: `#16A34A` (Green-600)
- **Text Color**: White
- **Use Case**: Success messages, completed tasks, active status

## Sizes

### Dot
- **Dimensions**: 12×12px circle
- **Purpose**: Simple status indicator
- **No Text**: Only shows color, no value displayed
- **Use Case**: Online/offline status, color-coded indicators

```html
<storybook-badge variant="success" size="dot"></storybook-badge>
```

### Default
- **Padding**: 2px 8px
- **Min Height**: 15px
- **Border Radius**: 12.5px (pill shape)
- **Font Size**: 12px
- **Use Case**: Small counters, notification badges

```html
<storybook-badge variant="default" size="default" value="10"></storybook-badge>
```

### Large
- **Padding**: 2px 8px (same as default)
- **Min Height**: 15px
- **Border Radius**: 12.5px (pill shape)
- **Font Size**: 12px
- **Use Case**: Larger text values, "99+" indicators, category tags

```html
<storybook-badge variant="default" size="large" value="99+"></storybook-badge>
```

**Note**: Default and Large have the same visual styling. The size distinction is semantic to differentiate between numeric counts (default) and text labels or overflow indicators (large).

## Design Specifications

### Typography (for default and large)
- **Font Family**: Inter, -apple-system, Roboto, Helvetica, sans-serif
- **Font Size**: 12px
- **Font Weight**: 400 (regular)
- **Line Height**: 17px
- **Letter Spacing**: 0.05px

### Layout
- **Display**: `inline-flex`
- **Alignment**: Center (both vertical and horizontal)
- **Flex Shrink**: 0 (prevents shrinking)
- **White Space**: nowrap (prevents text wrapping)

### Behavior
- **Non-interactive**: `pointer-events: none`
- **Non-selectable**: `user-select: none`
- **No states**: No hover, active, or focus states

## Examples

### Notification Badge on Button

```html
<button style="position: relative;">
  Messages
  <span style="position: absolute; top: -6px; right: -6px;">
    <storybook-badge variant="destructive" size="default" value="5"></storybook-badge>
  </span>
</button>
```

### Online Status Indicator

```html
<div style="position: relative; width: 40px; height: 40px;">
  <img src="avatar.jpg" alt="User" />
  <span style="position: absolute; bottom: 0; right: 0;">
    <storybook-badge variant="success" size="dot"></storybook-badge>
  </span>
</div>
```

### Category Tags

```html
<div style="display: flex; gap: 8px;">
  <storybook-badge variant="default" size="large" value="New"></storybook-badge>
  <storybook-badge variant="secondary" size="large" value="Featured"></storybook-badge>
  <storybook-badge variant="success" size="large" value="Active"></storybook-badge>
</div>
```

### Menu with Notification Counts

```html
<div style="display: flex; justify-content: space-between;">
  <span>Notifications</span>
  <storybook-badge variant="destructive" size="default" value="3"></storybook-badge>
</div>
```

### Inbox Counter

```html
<div style="display: flex; align-items: center; gap: 6px;">
  <span>Inbox</span>
  <storybook-badge variant="default" size="default" value="12"></storybook-badge>
</div>
```

### High Count Indicator

```html
<storybook-badge variant="destructive" size="large" value="99+"></storybook-badge>
```

## Use Cases

### When to Use Dot Size
- Online/offline status indicators
- Activity indicators
- Color-coded status (available, busy, away)
- Simple presence indicators

### When to Use Default Size
- Notification counts (1-99)
- Unread message counts
- Small numeric indicators
- Item counts in lists

### When to Use Large Size
- Overflow counts ("99+", "100+")
- Text labels ("New", "Featured")
- Category badges
- Status labels ("Active", "Draft")

## Common Patterns

### Notification Badge Positioning

```html
<!-- Top-right corner -->
<div style="position: relative; display: inline-block;">
  <button>Icon</button>
  <span style="position: absolute; top: -6px; right: -6px;">
    <storybook-badge variant="destructive" size="default" value="3"></storybook-badge>
  </span>
</div>
```

### Status Dot Positioning

```html
<!-- Bottom-right corner of avatar -->
<div style="position: relative; width: 40px; height: 40px; border-radius: 50%;">
  <img src="avatar.jpg" style="width: 100%; height: 100%; border-radius: 50%;" />
  <span style="position: absolute; bottom: 0; right: 0;">
    <storybook-badge variant="success" size="dot"></storybook-badge>
  </span>
</div>
```

### Inline Badge

```html
<!-- Next to text -->
<div style="display: flex; align-items: center; gap: 8px;">
  <span>Tasks</span>
  <storybook-badge variant="secondary" size="default" value="24"></storybook-badge>
</div>
```

## Accessibility

- Uses `role="status"` for status indicators
- Includes `aria-label` for screen readers
- Non-interactive (won't interfere with keyboard navigation)
- Sufficient color contrast for WCAG compliance

```html
<!-- Rendered output for dot -->
<span 
  class="badge badge-dot badge-success" 
  role="status" 
  aria-label="Badge indicator">
</span>

<!-- Rendered output for text -->
<span 
  class="badge badge-text badge-default" 
  role="status" 
  aria-label="10">
  10
</span>
```

## Component Architecture

```typescript
@Component({
  selector: 'storybook-badge',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
  styleUrls: ['./badge.css']
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'default';
  @Input() size: BadgeSize = 'default';
  @Input() value: string | number = '10';
  
  get badgeClasses(): string[] { ... }
}
```

## Styling

The component uses external CSS (`badge.css`) with:

- `.badge` - Base badge styles
- `.badge-dot` - Dot-specific styles (12×12px circle)
- `.badge-text` - Text badge styles (pill shape)
- `.badge-{variant}` - Variant-specific colors
- `.badge-size-{size}` - Size-specific styles

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - CSS Flexbox
  - Border-radius
  - Angular 20+

## Performance

- Lightweight component (~1KB gzipped)
- No JavaScript interactions
- Minimal DOM footprint (single span element)
- CSS-only styling
- No external dependencies

## Builder.io Compatibility

This component is designed to be compatible with Builder.io:

1. **Standalone Component**: No module dependencies required
2. **Props System**: Simple @Input decorators map to Builder.io controls
3. **Self-contained**: All styles and logic encapsulated

### Builder.io Integration Example

When registering in Builder.io:

```typescript
Builder.registerComponent(BadgeComponent, {
  name: 'Badge',
  inputs: [
    {
      name: 'variant',
      type: 'string',
      enum: ['default', 'secondary', 'destructive', 'outline', 'success'],
      defaultValue: 'default'
    },
    {
      name: 'size',
      type: 'string',
      enum: ['dot', 'default', 'large'],
      defaultValue: 'default'
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: '10',
      // Hide this input when size is 'dot'
      showIf: 'options.get("size") !== "dot"'
    }
  ]
});
```

## Best Practices

### DO ✓

- Use dot size for simple status indicators
- Use destructive variant for critical notifications
- Keep values short and concise
- Position badges consistently in your UI
- Use "99+" for counts over 99

### DON'T ✗

- Don't make badges interactive (they're indicators only)
- Don't use long text in badges (use tags instead)
- Don't mix badge styles inconsistently
- Don't use badges for primary actions
- Don't rely solely on color to convey meaning

## Comparison: Dot vs Text Badges

| Feature | Dot | Default/Large |
|---------|-----|---------------|
| **Size** | 12×12px | Variable (based on content) |
| **Shape** | Circle | Pill |
| **Content** | None (color only) | Text or numbers |
| **Use Case** | Status indicators | Counters, labels |
| **Visibility** | Subtle | More prominent |

## Troubleshooting

### Badge not visible

**Problem**: Badge is too small or blends with background.

**Solution**: Ensure sufficient contrast and use appropriate variant.

### Text too long

**Problem**: Badge text is truncated or wraps.

**Solution**: Keep values short (2-4 characters). Use "99+" for large numbers.

### Badge positioning issues

**Problem**: Badge doesn't align correctly with parent element.

**Solution**: Use `position: relative` on parent and `position: absolute` on badge wrapper.

## Related Components

- **Button**: Often used with notification badges
- **Avatar**: Commonly paired with status dot badges
- **Card**: May include badges for categories or status

## Version History

- **v1.0.0** - Initial release based on Figma design specifications
  - 5 variants (default, secondary, destructive, outline, success)
  - 3 sizes (dot, default, large)
  - Non-interactive design
  - Pixel-perfect color matching

## Future Enhancements

Potential features not included in current Figma design:
- Animated pulse effect for dot badges
- Custom colors
- Icon support within badges
- Dismissible badges
- Badge groups/stacks
