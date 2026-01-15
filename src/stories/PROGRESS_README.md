# Progress Component

The Progress component displays loading states, task completion, and process indicators in both circular and linear formats. It supports determinate (with specific value) and indeterminate (loading) modes.

## Features

- 2 types: `circular`, `linear`
- 3 sizes: `sm`, `md`, `lg` (exact dimensions from Figma)
- 2 modes: `determinate`, `indeterminate`
- Circular progress with centered percentage and optional label
- Linear progress with optional top label showing progress text
- Smooth animations for indeterminate states
- Pixel-perfect replication from Figma design
- Accessible with ARIA attributes
- Angular 20 standalone component

## Import

```typescript
import { ProgressComponent } from './progress.component';
```

## Basic Usage

```html
<!-- Circular determinate progress -->
<storybook-progress 
  type="circular" 
  mode="determinate" 
  [value]="73">
</storybook-progress>

<!-- Linear progress with label -->
<storybook-progress 
  type="linear" 
  mode="determinate" 
  [value]="51" 
  label="Progreso general">
</storybook-progress>

<!-- Indeterminate spinner -->
<storybook-progress 
  type="circular" 
  mode="indeterminate">
</storybook-progress>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Progress size (exact dimensions from Figma) |
| `type` | `'circular' \| 'linear'` | `'circular'` | Progress type |
| `mode` | `'determinate' \| 'indeterminate'` | `'determinate'` | Progress mode |
| `value` | `number` (0-100) | `51` | Progress value (only applies to determinate mode) |
| `label` | `string` | `'Tasa de asistencia'` | Label text (for circular lg or linear determinate) |

## Sizes (from Figma)

### Circular Progress

| Size | Diameter | Stroke Width | Percentage Font Size |
|------|----------|--------------|---------------------|
| `sm` | 40px | 6px | 12px |
| `md` | 64px | 10px | 20px |
| `lg` | 124px | 18px | 25px |

### Linear Progress

| Size | Height | Width | Notes |
|------|--------|-------|-------|
| All | 8px | 286px max | Responsive, adapts to container |

**Note**: Linear progress uses the same dimensions for all sizes (sm, md, lg). The `size` prop doesn't affect linear progress visually but can be used for semantic consistency.

## Types

### Circular Progress

**Determinate Mode**:
- Displays completion percentage in the center
- Shows animated arc based on `value` (0-100)
- For `lg` size, includes optional label below percentage

**Indeterminate Mode**:
- Animated spinning arc
- No percentage displayed
- Used for loading states

**Example**:
```html
<!-- Attendance rate display -->
<storybook-progress 
  size="lg"
  type="circular" 
  mode="determinate" 
  [value]="73"
  label="Tasa de asistencia">
</storybook-progress>

<!-- Loading spinner -->
<storybook-progress 
  size="md"
  type="circular" 
  mode="indeterminate">
</storybook-progress>
```

### Linear Progress

**Determinate Mode**:
- Shows progress bar with specific completion percentage
- Optional label above showing text and percentage
- Fill width proportional to `value`

**Indeterminate Mode**:
- Animated sliding bar
- Used for ongoing processes without specific progress
- No label or percentage shown

**Example**:
```html
<!-- File upload progress -->
<storybook-progress 
  type="linear" 
  mode="determinate" 
  [value]="67" 
  label="Uploading files">
</storybook-progress>

<!-- Processing data -->
<storybook-progress 
  type="linear" 
  mode="indeterminate">
</storybook-progress>
```

## Design Specifications

### Circular Progress

**Layout**:
- **SVG-based**: Uses `<circle>` elements with stroke manipulation
- **Transform**: Rotated -90deg to start at top
- **Stroke Linecap**: Round for smooth ends

**Colors**:
- **Track (background)**: `#E2E8F0` (neutral-200)
- **Fill (progress)**: `#2563EB` (Blue-600)
- **Percentage Text**: `#2563EB` (Blue-600)
- **Label Text**: `#94A3B8` (neutral-400)

**Typography (Center Content)**:
- **Font Family**: Inter, -apple-system, Roboto, Helvetica, sans-serif
- **Percentage Weight**: 700 (Bold)
- **Label Weight**: 500 (Medium)
- **Label Size**: 9px (only for lg size)

### Linear Progress

**Layout**:
- **Height**: 8px (all sizes)
- **Max Width**: 286px (responsive to container)
- **Border Radius**: 9999px (fully rounded)

**Colors**:
- **Track (background)**: `#CBD5E1` (neutral-300)
- **Fill (progress)**: `#2563EB` (Blue-600)
- **Label Text**: `#1E40AF` (Blue-800)

**Typography (Label)**:
- **Font Family**: Inter, -apple-system, Roboto, Helvetica, sans-serif
- **Font Size**: 15px
- **Font Weight**: 600 (Semi-bold)
- **Position**: Above bar with 8px gap
- **Format**: "{label} {value}%" (e.g., "Progreso general 51%")

## Animations

### Circular Indeterminate

Two synchronized animations:
1. **Rotation**: Continuous 360° rotation (2s linear)
2. **Dash**: Expanding and contracting arc (1.5s ease-in-out)

### Linear Indeterminate

Sliding bar animation:
- Primary bar slides from left to right
- Secondary bar follows with delay
- Infinite loop with cubic-bezier easing
- Duration: 2.1s per cycle

## Examples

### Dashboard Widget

```html
<storybook-progress 
  size="lg"
  type="circular" 
  mode="determinate" 
  [value]="73"
  label="Tasa de asistencia">
</storybook-progress>
```

### File Upload

```html
<storybook-progress 
  type="linear" 
  mode="determinate" 
  [value]="67" 
  label="Uploading document.pdf">
</storybook-progress>
```

### Loading State

```html
<storybook-progress 
  size="md"
  type="circular" 
  mode="indeterminate">
</storybook-progress>
```

### Course Progress

```html
<storybook-progress 
  type="linear" 
  mode="determinate" 
  [value]="51" 
  label="Progreso general">
</storybook-progress>
```

### Data Processing

```html
<storybook-progress 
  type="linear" 
  mode="indeterminate">
</storybook-progress>
```

## Use Cases

### When to Use Circular Progress

- **Dashboards**: Display key metrics (attendance, completion rates)
- **Compact spaces**: When horizontal space is limited
- **Single values**: Focus on one metric at a time
- **Loading overlays**: Center of modal or full-page loaders

### When to Use Linear Progress

- **Step-by-step processes**: Multi-step forms, wizards
- **File operations**: Uploads, downloads, installations
- **Long lists**: When width is available but height is constrained
- **Page loading**: Top-of-page progress bars

### Determinate vs Indeterminate

**Use Determinate when**:
- You know the exact progress (0-100%)
- Users need to see specific completion status
- Time estimation is important

**Use Indeterminate when**:
- Progress can't be calculated
- Processing time is unknown
- Initial loading before progress can be determined

## Accessibility

- Circular progress uses SVG with proper `viewBox` and dimensions
- Linear progress uses semantic HTML structure
- Values are bounded (0-100) for determinate mode
- Smooth transitions provide visual feedback
- Color contrast meets WCAG standards
- Component can be paired with ARIA labels:

```html
<div role="progressbar" 
     [attr.aria-valuenow]="value" 
     aria-valuemin="0" 
     aria-valuemax="100">
  <storybook-progress [value]="value"></storybook-progress>
</div>
```

## Component Architecture

```typescript
@Component({
  selector: 'storybook-progress',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
  styleUrls: ['./progress.css']
})
export class ProgressComponent {
  @Input() size: ProgressSize = 'md';
  @Input() type: ProgressType = 'circular';
  @Input() mode: ProgressMode = 'determinate';
  @Input() value: number = 51;
  @Input() label: string = 'Progreso general';
  
  get circularDimensions() { ... }
  get circumference(): number { ... }
  get strokeDashOffset(): number { ... }
}
```

## Styling

The component uses external CSS (`progress.css`) with:

### Circular Progress Classes
- `.circular-progress` - Container
- `.circular-progress-{size}` - Size variants
- `.progress-track` - Background circle
- `.progress-fill` - Progress arc
- `.progress-indeterminate` - Indeterminate animation
- `.circular-content` - Center text container
- `.circular-percentage` - Percentage text
- `.circular-label` - Label text (lg only)

### Linear Progress Classes
- `.linear-progress-container` - Outer container
- `.linear-label` - Top label text
- `.linear-progress` - Bar container
- `.linear-track` - Background bar
- `.linear-fill` - Progress bar
- `.linear-indeterminate` - Indeterminate animation

## Customization

### Changing Colors

Modify CSS variables or override classes:

```css
/* Custom brand colors */
.progress-fill {
  stroke: #10B981; /* Green-500 */
}

.linear-fill {
  background: #10B981; /* Green-500 */
}
```

### Adjusting Animation Speed

```css
/* Slower indeterminate animation */
.progress-indeterminate {
  animation-duration: 3s, 2s;
}

.linear-indeterminate {
  animation-duration: 3s;
}
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - CSS animations
  - SVG rendering
  - Flexbox
  - CSS calc() function
  - Angular 20+

## Performance

- Lightweight SVG for circular progress
- CSS-only animations (no JavaScript)
- Efficient DOM structure
- Smooth 60fps animations
- No external dependencies

## Builder.io Compatibility

This component is designed to be compatible with Builder.io:

1. **Standalone Component**: No module dependencies required
2. **Props System**: Simple @Input decorators map to Builder.io controls
3. **Self-contained**: All styles and logic encapsulated

### Builder.io Integration Example

When registering in Builder.io:

```typescript
Builder.registerComponent(ProgressComponent, {
  name: 'Progress',
  inputs: [
    {
      name: 'size',
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      defaultValue: 'md'
    },
    {
      name: 'type',
      type: 'string',
      enum: ['circular', 'linear'],
      defaultValue: 'circular'
    },
    {
      name: 'mode',
      type: 'string',
      enum: ['determinate', 'indeterminate'],
      defaultValue: 'determinate'
    },
    {
      name: 'value',
      type: 'number',
      defaultValue: 51,
      min: 0,
      max: 100
    },
    {
      name: 'label',
      type: 'string',
      defaultValue: 'Progreso general'
    }
  ]
});
```

## Comparison: Circular vs Linear

| Feature | Circular | Linear |
|---------|----------|--------|
| **Shape** | Circle/Arc | Horizontal Bar |
| **Space** | Square footprint | Rectangular, full width |
| **Best for** | Single metrics, compact display | Multi-step processes, file operations |
| **Label** | Center (lg only) | Top label with percentage |
| **Sizes** | 40px, 64px, 124px | 8px height, 286px max width |
| **Animation** | Rotating arc | Sliding bar |

## Related Components

- **Button**: For action triggers
- **Toast**: For completion notifications
- **Alert**: For status messages
- **Spinner**: Alternative loading indicator (not in this library)

## Version History

- **v1.0.0** - Initial release based on Figma design specifications
  - Circular progress (sm, md, lg)
  - Linear progress (all sizes)
  - Determinate and indeterminate modes
  - Animations for indeterminate states

## Troubleshooting

### Circular progress not rendering

- Ensure SVG viewBox dimensions match size
- Check that stroke-width doesn't exceed radius
- Verify transform-origin is set to 'center'

### Linear progress animation choppy

- Enable hardware acceleration: `will-change: transform`
- Reduce animation complexity
- Check browser performance

### Percentage not centered

- Verify `.circular-content` uses `position: absolute`
- Check `transform: translate(-50%, -50%)`
- Ensure parent has `position: relative`

### Value not updating

- Confirm `[value]` uses property binding, not attribute
- Check value is number, not string
- Verify value is between 0-100

## Best Practices

1. **Use determinate when possible** - Users prefer knowing exact progress
2. **Provide context** - Use labels to explain what's being measured
3. **Don't fake progress** - Only show indeterminate when truly unknown
4. **Size appropriately** - Large for dashboards, small for inline indicators
5. **Combine with text** - Add time remaining or step count for clarity
6. **Avoid too many** - Multiple progress indicators can overwhelm users
7. **Test animations** - Ensure smooth performance on target devices

## Future Enhancements

Potential features not included in current Figma design:
- Multiple colors for ranges (e.g., red for low, green for high)
- Gradient fills
- Buffer/secondary progress indicators
- Custom stroke caps (flat, square)
- Vertical linear progress
- Segmented progress (step indicators)
- Time remaining estimates
