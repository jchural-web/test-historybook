# Card Component

The Card component is a container component that displays key metrics and statistics in a structured, visually appealing format. It features a grid-based layout with header, value, helper text, and optional icons.

## Features

- 3 variants: `default`, `elevated`, `outlined`
- 2 states: `default`, `hover`
- Structured grid layout matching Figma design
- Optional action icon (phone)
- Info icon for additional context
- Helper text with customizable styling
- Pixel-perfect replication from Figma design
- Responsive behavior
- Angular 20 standalone component

## Import

```typescript
import { CardComponent } from './card.component';
```

## Basic Usage

```html
<!-- Default card -->
<storybook-card 
  variant="default"
  header="Actividades Totales"
  value="21"
  helper="+15.2%"
  icon="phone">
</storybook-card>

<!-- Elevated card with shadow -->
<storybook-card 
  variant="elevated"
  header="Usuarios Activos"
  value="1,247"
  helper="+8.4%"
  icon="phone">
</storybook-card>

<!-- Card in hover state -->
<storybook-card 
  variant="default"
  state="hover"
  header="Actividades Totales"
  value="21"
  helper="+15.2%">
</storybook-card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'elevated' \| 'outlined'` | `'default'` | Card visual variant |
| `state` | `'default' \| 'hover'` | `'default'` | Card state (visual only) |
| `header` | `string` | `'Actividades Totales'` | Header text |
| `value` | `string \| number` | `'21'` | Main value to display |
| `helper` | `string` | `'+15.2%'` | Helper text (e.g., percentage change) |
| `icon` | `string` | `'phone'` | Optional icon name |

## Variants

### Default
- **Border**: 1px solid #E4E4E7
- **Background**: White (#FFF)
- **Shadow**: None
- **Use Case**: Standard cards, base variant

### Elevated
- **Border**: 1px solid #E4E4E7
- **Background**: White (#FFF)
- **Shadow**: 0 1px 2px rgba(0, 0, 0, 0.08)
- **Use Case**: Cards that need to stand out, primary metrics

### Outlined
- **Border**: 1px solid #E4E4E7
- **Background**: White (#FFF)
- **Shadow**: None
- **Use Case**: Secondary information, alternative to default

## States

### Default
- **Opacity**: 1
- **Normal appearance**

### Hover
- **Opacity**: 0.9
- **Slightly transparent to indicate interactive state**

**Note**: The `state` prop is for visual representation only. For true interactive hover effects, use CSS `:hover` pseudo-class.

## Design Specifications

### Layout
- **Display**: `inline-grid`
- **Width**: 393px (responsive, max-width on mobile)
- **Padding**: 25px 19px
- **Border Radius**: 8px
- **Grid Template**: 3 rows × 3 columns
  - Rows: `repeat(3, fit-content(100%))`
  - Columns: `fit-content(100%) minmax(0, 1fr) fit-content(100%)`
- **Row Gap**: 24px
- **Column Gap**: 58px

### Grid Structure

```
┌─────────────────────────────────────────────┐
│ Header          Info   Description   Icon   │ Row 1
├─────────────────────────────────────────────┤
│ Value                                       │ Row 2
├─────────────────────────────────────────────┤
│ Helper                                      │ Row 3
└─────────────────────────────────────────────┘
```

### Colors

**Borders**:
- All variants: #E4E4E7

**Background**:
- All variants: #FFF (White)

**Shadow**:
- Elevated: 0 1px 2px 0 rgba(0, 0, 0, 0.08)

**Typography**:
- **Header**: #434C57
- **Value**: #2D2929
- **Helper**: #16A34A (Green for positive)
- **Description**: #707688

### Typography

| Element | Font Family | Size | Weight | Color |
|---------|-------------|------|--------|-------|
| Header | Inter | 14px | 400 | #434C57 |
| Value | Inter | 29px | 800 | #2D2929 |
| Helper | Inter | 14px | 400 | #16A34A |
| Description | Inter | 12px | 400 | #707688 |

### Icons

**Info Icon**:
- Size: 17×17px
- Color: #B0B6BF
- Position: Grid row 1, column 2

**Action Icon (Phone)**:
- Size: 20×20px
- Color: #9333EA (Purple)
- Position: Grid row 1, column 3

## Examples

### Dashboard Statistics

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 393px)); gap: 24px;">
  <storybook-card 
    variant="elevated"
    header="Actividades Totales"
    value="21"
    helper="+15.2%"
    icon="phone">
  </storybook-card>
  
  <storybook-card 
    variant="elevated"
    header="Usuarios Activos"
    value="1,247"
    helper="+8.4%"
    icon="phone">
  </storybook-card>
  
  <storybook-card 
    variant="elevated"
    header="Tasa de Conversión"
    value="3.2%"
    helper="-2.1%"
    icon="phone">
  </storybook-card>
</div>
```

### Monthly Revenue

```html
<storybook-card 
  variant="elevated"
  header="Ingresos Mensuales"
  value="$45,230"
  helper="+12.5%"
  icon="phone">
</storybook-card>
```

### Completion Rate

```html
<storybook-card 
  variant="outlined"
  header="Tasa de Éxito"
  value="94.7%"
  helper="+1.3%"
  icon="phone">
</storybook-card>
```

### Customer Satisfaction

```html
<storybook-card 
  variant="default"
  header="Satisfacción Cliente"
  value="4.8/5"
  helper="+0.2"
  icon="phone">
</storybook-card>
```

## Use Cases

### When to Use Each Variant

**Default**:
- General purpose cards
- Lists of similar metrics
- When all cards should have equal visual weight

**Elevated**:
- Primary or important metrics
- Dashboard KPIs
- Cards that need emphasis
- Clickable/interactive cards

**Outlined**:
- Secondary information
- Alternative to default when you want subtle variation
- Supporting metrics

## Helper Text Styling

The helper text typically shows change indicators. You can customize the color based on the type of change:

```typescript
// In your implementation
<div class="card-helper" [attr.data-type]="helperType">
  {{ helper }}
</div>
```

**Helper Types**:
- **Positive**: Green (#16A34A) - increases, improvements
- **Negative**: Red (#DC2626) - decreases, declines
- **Neutral**: Gray (#707688) - no significant change

## Responsive Behavior

**Desktop (> 768px)**:
- Full width: 393px
- All padding and gaps as specified

**Tablet (768px - 480px)**:
- Width: 100%, max-width 393px
- Same padding and gaps

**Mobile (< 480px)**:
- Width: 100%, max-width 393px
- Padding: 20px 16px (reduced)
- Row gap: 20px (reduced)
- Column gap: 40px (reduced)
- Font sizes slightly reduced

## Accessibility

- Use semantic HTML structure
- Include ARIA attributes when appropriate:
  ```html
  <div role="article" aria-labelledby="card-header">
    <storybook-card ...></storybook-card>
  </div>
  ```
- Ensure sufficient color contrast (WCAG AA compliant)
- Icons are decorative (use `aria-hidden="true"` if needed)

## Component Architecture

```typescript
@Component({
  selector: 'storybook-card',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
  styleUrls: ['./card.css']
})
export class CardComponent {
  @Input() variant: CardVariant = 'default';
  @Input() state: CardState = 'default';
  @Input() header: string = 'Actividades Totales';
  @Input() value: string | number = '21';
  @Input() helper: string = '+15.2%';
  @Input() icon: string = 'phone';
  
  get cardClasses(): string[] { ... }
}
```

## Styling

The component uses external CSS (`card.css`) with:

- `.card` - Main container with grid layout
- `.card-{variant}` - Variant-specific styles
- `.card-hover` - Hover state styling
- `.card-header` - Header text
- `.card-value` - Main value display
- `.card-helper` - Helper text
- `.card-helper-description` - Secondary description
- `.card-info-icon` - Info icon positioning
- `.card-action-icon` - Action icon positioning

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - CSS Grid
  - CSS custom properties (optional)
  - SVG rendering
  - Angular 20+

## Builder.io Compatibility

This component is designed to be compatible with Builder.io:

1. **Standalone Component**: No module dependencies required
2. **Props System**: Simple @Input decorators map to Builder.io controls
3. **Self-contained**: All styles and logic encapsulated

### Builder.io Integration Example

When registering in Builder.io:

```typescript
Builder.registerComponent(CardComponent, {
  name: 'Card',
  inputs: [
    {
      name: 'variant',
      type: 'string',
      enum: ['default', 'elevated', 'outlined'],
      defaultValue: 'default'
    },
    {
      name: 'state',
      type: 'string',
      enum: ['default', 'hover'],
      defaultValue: 'default'
    },
    {
      name: 'header',
      type: 'string',
      defaultValue: 'Actividades Totales'
    },
    {
      name: 'value',
      type: 'string',
      defaultValue: '21'
    },
    {
      name: 'helper',
      type: 'string',
      defaultValue: '+15.2%'
    },
    {
      name: 'icon',
      type: 'string',
      defaultValue: 'phone'
    }
  ]
});
```

## Comparison: Variant Differences

| Feature | Default | Elevated | Outlined |
|---------|---------|----------|----------|
| **Border** | ✓ 1px solid | ✓ 1px solid | ✓ 1px solid |
| **Shadow** | ✗ None | ✓ Subtle | ✗ None |
| **Background** | White | White | White |
| **Use Case** | General | Primary | Secondary |
| **Visual Weight** | Medium | Heavy | Light |

## Advanced Customization

### Custom Icons

Currently, the component supports the "phone" icon. To add more icons:

1. Add new SVG in the template
2. Use `*ngIf` directive to conditionally render
3. Update the `icon` prop type

```typescript
<svg
  *ngIf="icon === 'mail'"
  class="card-action-icon"
  ...
>
  <!-- Mail icon SVG -->
</svg>
```

### Custom Helper Colors

To dynamically change helper color based on value:

```typescript
get helperColor(): string {
  const value = parseFloat(this.helper);
  if (value > 0) return '#16A34A'; // Green
  if (value < 0) return '#DC2626'; // Red
  return '#707688'; // Gray
}
```

## Performance

- Lightweight component (~2KB gzipped)
- No external dependencies
- CSS-only styling (no JavaScript calculations)
- Efficient grid layout
- SVG icons (scalable, crisp)

## Best Practices

1. **Consistent Variants**: Use the same variant for related cards
2. **Meaningful Helpers**: Show percentage changes or absolute differences
3. **Appropriate Icons**: Use icons that relate to the metric
4. **Responsive Grids**: Wrap cards in responsive grid containers
5. **Accessible Labels**: Provide context for screen readers
6. **Data Formatting**: Format large numbers (e.g., 1,247 instead of 1247)

## Troubleshooting

### Card not displaying correctly

- Verify parent container has sufficient width
- Check that CSS grid is supported in browser
- Ensure card.css is properly imported

### Icons not showing

- Verify SVG paths are correct
- Check icon prop value matches conditional rendering
- Ensure SVG clipPath IDs are unique if multiple cards on page

### Grid layout broken

- Check for CSS conflicts with global styles
- Verify grid template values are not overridden
- Use browser DevTools to inspect grid structure

## Related Components

- **Progress**: For showing completion or loading states
- **Alert**: For notifications and messages
- **Toast**: For temporary notifications
- **Button**: For actions within cards

## Version History

- **v1.0.0** - Initial release based on Figma design specifications
  - Default, Elevated, and Outlined variants
  - Default and Hover states
  - Grid-based layout with header, value, and helper text
  - Phone icon support

## Future Enhancements

Potential features not included in current Figma design:
- Additional icon options (mail, chart, user, etc.)
- Custom content slots
- Click/action handlers
- Loading states
- Animation on state changes
- Dark mode support
- More helper text color options
- Badge/label overlays
