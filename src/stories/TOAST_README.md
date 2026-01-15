# Toast Component

The Toast component displays brief, non-intrusive notification messages with a white background and colored left accent border. Unlike the Alert component which spans full width with colored backgrounds, Toast maintains a compact, content-based width.

## Features

- 5 semantic variants: `default`, `info`, `success`, `warning`, `destructive`
- Optional dismissible state with close button
- White background with colored left accent border (9px)
- Icon + Text horizontal layout
- Fixed height (39px) with content-based width
- Pixel-perfect replication from Figma design
- Accessible with ARIA attributes
- Angular 20 standalone component

## Import

```typescript
import { ToastComponent } from './toast.component';
```

## Basic Usage

```html
<!-- Default toast -->
<storybook-toast 
  variant="default" 
  content="Operation completed">
</storybook-toast>

<!-- Dismissible toast -->
<storybook-toast 
  variant="success" 
  [dismissible]="true" 
  content="Changes saved successfully!">
</storybook-toast>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'info' \| 'success' \| 'warning' \| 'destructive'` | `'default'` | Toast variant type |
| `dismissible` | `boolean` | `false` | Whether the toast can be dismissed |
| `content` | `string` | `'Componente de toast Default'` | Toast message content |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `onDismiss` | `void` | Emitted when the toast is dismissed via close button |

## Variants

### Default
- **Accent Color**: `#BAE6FD` (Sky-200)
- **Text/Icon Color**: `#0284C7` (Sky-600)
- **Icon**: Circle check (large)
- **Use Case**: General notifications, confirmations

### Info
- **Accent Color**: `#BFDBFE` (Blue-200)
- **Text/Icon Color**: `#2563EB` (Blue-600)
- **Icon**: Info circle
- **Use Case**: Informational messages, tips

### Success
- **Accent Color**: `#BBF7D0` (Green-200)
- **Text/Icon Color**: `#16A34A` (Green-600)
- **Icon**: Checkmark
- **Use Case**: Success confirmations, completed actions

### Warning
- **Accent Color**: `#FEF08A` (Yellow-200)
- **Text/Icon Color**: `#CA8A04` (Yellow-600)
- **Icon**: Triangle alert
- **Use Case**: Warnings, cautions

### Destructive
- **Accent Color**: `#FECACA` (Red-200)
- **Text/Icon Color**: `#DC2626` (Red-600)
- **Icon**: Ban circle
- **Use Case**: Errors, destructive actions

## Design Specifications

### Layout
- **Display**: `inline-flex` (does not occupy full width)
- **Height**: `39px` (fixed)
- **Padding**: `12px 16px` (with additional 9px for left accent)
- **Gap**: `10px` (between icon, text, and close button)
- **Border**: `1px solid #E2E8F0` (neutral-200)
- **Border Radius**: `4px`
- **Background**: `#FFFFFF` (white)

### Left Accent Border
- **Width**: `9px`
- **Height**: Full height (39px)
- **Position**: Absolute, left edge
- **Border Radius**: `4px 0 0 4px` (rounded on left side only)
- **Color**: Variant-specific (see variants section)

### Typography
- **Font Family**: Inter, -apple-system, Roboto, Helvetica, sans-serif
- **Font Size**: `14px`
- **Font Weight**: `500`
- **Line Height**: `normal`
- **Letter Spacing**: `-0.28px`

### Icons
- **Main Icon**: `24×24px` (flex-shrink: 0)
- **Close Icon**: `8×8px` (shown only when dismissible)

## Examples

### Success Notification
```html
<storybook-toast 
  variant="success" 
  [dismissible]="true" 
  content="Your changes have been saved successfully!">
</storybook-toast>
```

### Error Toast
```html
<storybook-toast 
  variant="destructive" 
  [dismissible]="true" 
  content="Error: Unable to complete your request.">
</storybook-toast>
```

### Warning Message
```html
<storybook-toast 
  variant="warning" 
  content="Your session will expire in 5 minutes.">
</storybook-toast>
```

### Information Toast
```html
<storybook-toast 
  variant="info" 
  content="New features are now available.">
</storybook-toast>
```

### Toast Stack (Typical Pattern)
```html
<div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
  <storybook-toast 
    variant="success" 
    [dismissible]="true" 
    content="File uploaded successfully">
  </storybook-toast>
  
  <storybook-toast 
    variant="info" 
    [dismissible]="true" 
    content="3 new messages">
  </storybook-toast>
  
  <storybook-toast 
    variant="warning" 
    [dismissible]="true" 
    content="Password expires soon">
  </storybook-toast>
</div>
```

## Toast vs Alert

### Key Differences

| Feature | Toast | Alert |
|---------|-------|-------|
| **Background** | White (#FFF) | Colored (variant-specific) |
| **Accent** | 9px left border | Full background |
| **Width** | Content-based (inline-flex) | Full width available |
| **Border** | 1px solid #E2E8F0 | None |
| **Use Case** | Temporary notifications | Persistent messages |
| **Typical Position** | Top-right or bottom-right | Inline with content |

### When to Use Toast vs Alert

**Use Toast when:**
- Displaying temporary notifications
- Showing feedback for user actions
- Stacking multiple notifications
- Need minimal visual disruption
- Messages appear in a fixed corner/edge

**Use Alert when:**
- Displaying persistent messages
- Drawing attention to important information
- Inline with page content
- Need strong visual emphasis
- Messages are part of the layout flow

## Accessibility

- Uses `role="status"` for non-critical notifications
- Includes `aria-live="polite"` for screen reader announcements
- Close button has `aria-label="Close toast"`
- Keyboard navigable with visible focus states
- Sufficient color contrast ratios for WCAG compliance

## Component Architecture

```typescript
@Component({
  selector: 'storybook-toast',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
  styleUrls: ['./toast.css']
})
export class ToastComponent {
  @Input() variant: ToastVariant = 'default';
  @Input() dismissible: boolean = false;
  @Input() content: string = 'Componente de toast Default';
  @Output() onDismiss = new EventEmitter<void>();
  
  dismissed: boolean = false;
  
  get iconColor(): string { ... }
  dismiss(): void { ... }
}
```

## Styling

The component uses external CSS (`toast.css`) with the following structure:

- `.toast` - Main container with white background and border
- `.toast-accent` - Left accent border (9px, colored)
- `.toast-{variant}` - Variant-specific text colors
- `.toast-accent-{variant}` - Variant-specific accent colors
- `.toast-icon` - Icon sizing and positioning
- `.toast-content` - Text content styling
- `.toast-close` - Close button styling

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - CSS Flexbox
  - CSS absolute positioning
  - SVG rendering
  - Angular 20+

## Future Enhancements

Potential features not included in current Figma design:
- Auto-dismiss timeout functionality
- Entry/exit animations
- Toast container/manager for positioning
- Action buttons within toasts
- Progress indicators
- Multi-line content support

## Builder.io Compatibility

This component is designed to be compatible with Builder.io:

1. **Standalone Component**: No module dependencies required
2. **Props System**: Simple @Input decorators map to Builder.io controls
3. **Event Emitters**: @Output decorators for Builder.io actions
4. **Self-contained**: All styles and logic encapsulated

### Builder.io Integration Example

When registering in Builder.io:

```typescript
Builder.registerComponent(ToastComponent, {
  name: 'Toast',
  inputs: [
    {
      name: 'variant',
      type: 'string',
      enum: ['default', 'info', 'success', 'warning', 'destructive'],
      defaultValue: 'default'
    },
    {
      name: 'dismissible',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'content',
      type: 'string',
      defaultValue: 'Componente de toast Default'
    }
  ]
});
```

## Related Components

- **Alert**: Full-width colored background notifications
- **Button**: For action buttons
- **Icon**: SVG icon components

## Version History

- **v1.0.0** - Initial release based on Figma design specifications
