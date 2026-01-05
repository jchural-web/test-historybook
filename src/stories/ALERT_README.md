# Alert Component

A notification/alert component with multiple visual variants and optional dismiss functionality.

## Overview

The Alert component displays important messages to users with different severity levels indicated by color-coded variants. It supports optional dismissal and includes appropriate icons for each variant type.

## Features

- **5 Variants**: Default, Info, Success, Warning, and Destructive
- **Dismissible Option**: Optional close button to remove the alert
- **Icon Integration**: Unique icon for each variant
- **Customizable Content**: Editable message text
- **Accessible**: Full ARIA support
- **Pixel-Perfect**: Based on Figma design specifications

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'info' \| 'success' \| 'warning' \| 'destructive'` | `'default'` | Alert variant type |
| `dismissible` | `boolean` | `false` | Whether the alert can be dismissed |
| `content` | `string` | `'Componente de alerta Default'` | Alert message text |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `onDismiss` | `EventEmitter<void>` | Emitted when the alert is dismissed |

## Variants

### Default
- **Background**: `#BAE6FD` (Sky-200)
- **Text/Icon**: `#0284C7` (Sky-600)
- **Icon**: Circle check (check mark in circle)
- **Use Case**: General confirmations, default status messages

### Info
- **Background**: `#BFDBFE` (Blue-200)
- **Text/Icon**: `#2563EB` (Blue-600)
- **Icon**: Information circle (i in circle)
- **Use Case**: Informational messages, tips, guidance

### Success
- **Background**: `#BBF7D0` (Green-200)
- **Text/Icon**: `#16A34A` (Green-600)
- **Icon**: Check mark
- **Use Case**: Success confirmations, completed actions

### Warning
- **Background**: `#FEF08A` (Yellow-200)
- **Text/Icon**: `#CA8A04` (Yellow-600)
- **Icon**: Triangle with exclamation mark
- **Use Case**: Warnings, cautions, important notices

### Destructive
- **Background**: `#FECACA` (Red-200)
- **Text/Icon**: `#DC2626` (Red-600)
- **Icon**: Ban/prohibition circle
- **Use Case**: Errors, critical issues, destructive actions

## Design Specifications

### Dimensions
- **Height**: 39px (fixed)
- **Padding**: 12px (vertical) × 16px (horizontal)
- **Border Radius**: 4px
- **Gap**: 10px (between icon, text, and close button)

### Typography
- **Font Family**: Inter (fallback: -apple-system, Roboto, Helvetica, sans-serif)
- **Font Size**: 14px
- **Font Weight**: 500 (Medium)
- **Line Height**: normal
- **Letter Spacing**: -0.28px

### Icons
- **Variant Icon**: 24×24px
- **Close Icon**: 8×8px (when dismissible)

## Usage Examples

### Basic Usage

```typescript
// Default alert
<storybook-alert
  variant="default"
  [dismissible]="false"
  content="Operation completed successfully">
</storybook-alert>

// Dismissible success alert
<storybook-alert
  variant="success"
  [dismissible]="true"
  content="Your changes have been saved!">
</storybook-alert>
```

### Error Notification

```typescript
<storybook-alert
  variant="destructive"
  [dismissible]="true"
  content="Error: Unable to save changes. Please try again.">
</storybook-alert>
```

### Warning Message

```typescript
<storybook-alert
  variant="warning"
  [dismissible]="false"
  content="Your session will expire in 5 minutes.">
</storybook-alert>
```

### Info Message

```typescript
<storybook-alert
  variant="info"
  [dismissible]="false"
  content="New features are now available in the settings.">
</storybook-alert>
```

### With Event Handling

```typescript
<storybook-alert
  variant="success"
  [dismissible]="true"
  content="File uploaded successfully"
  (onDismiss)="handleDismiss()">
</storybook-alert>
```

```typescript
export class MyComponent {
  handleDismiss() {
    console.log('Alert dismissed');
    // Perform cleanup or tracking
  }
}
```

### Notification Stack

```typescript
<div style="display: flex; flex-direction: column; gap: 12px;">
  <storybook-alert
    variant="success"
    [dismissible]="true"
    content="Profile updated">
  </storybook-alert>
  
  <storybook-alert
    variant="info"
    [dismissible]="true"
    content="3 new messages">
  </storybook-alert>
  
  <storybook-alert
    variant="warning"
    [dismissible]="true"
    content="Password expiring soon">
  </storybook-alert>
</div>
```

## Integration with Builder.io

This component is designed to be fully compatible with Builder.io's visual editor:

```typescript
import { Builder } from '@builder.io/react';
import { AlertComponent } from './alert.component';

Builder.registerComponent(AlertComponent, {
  name: 'Alert',
  inputs: [
    {
      name: 'variant',
      type: 'string',
      enum: ['default', 'info', 'success', 'warning', 'destructive'],
      defaultValue: 'default',
    },
    {
      name: 'dismissible',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'content',
      type: 'string',
      defaultValue: 'Componente de alerta Default',
    },
  ],
});
```

## Accessibility Considerations

- Uses `role="alert"` for screen reader announcements
- `aria-label` on close button for accessibility
- Close button has proper focus states
- Color is not the only indicator (icons provide additional context)
- Sufficient color contrast for WCAG AA compliance

### Keyboard Navigation

- **Tab**: Navigate to close button (when dismissible)
- **Enter/Space**: Dismiss alert when close button is focused
- **Escape**: (Can be implemented) Dismiss alert

## Dismiss Behavior

When `dismissible` is set to `true`:
1. A close button (X icon) appears on the right side
2. Clicking the close button sets the internal `dismissed` state to `true`
3. The alert is removed from the DOM
4. The `onDismiss` event is emitted

**Note**: The component handles its own dismissed state internally. Once dismissed, the alert will not reappear unless the component is recreated.

## CSS Class Structure

```css
.alert                  /* Main container */
.alert-default          /* Default variant */
.alert-info             /* Info variant */
.alert-success          /* Success variant */
.alert-warning          /* Warning variant */
.alert-destructive      /* Destructive variant */
.alert-icon             /* Variant icon */
.alert-content          /* Message text */
.alert-close            /* Close button */
```

## Best Practices

1. **Choose Appropriate Variant**:
   - Use `success` for completed actions
   - Use `warning` for important notices that need attention
   - Use `destructive` for errors or critical issues
   - Use `info` for helpful information
   - Use `default` for general confirmations

2. **Dismissible vs Non-dismissible**:
   - Use dismissible for temporary notifications
   - Use non-dismissible for critical warnings that require action
   - Consider auto-dismiss with a timeout for success messages

3. **Content Guidelines**:
   - Keep messages concise and actionable
   - Use clear, user-friendly language
   - Avoid technical jargon when possible
   - Include next steps when appropriate

4. **Placement**:
   - Place alerts near the content they relate to
   - Use consistent positioning across the application
   - Stack multiple alerts vertically with spacing

5. **Timing**:
   - Show alerts immediately when the event occurs
   - Consider auto-dismissing success messages after 3-5 seconds
   - Keep warnings and errors visible until dismissed

## Common Use Cases

### Form Validation
```typescript
<storybook-alert
  variant="destructive"
  [dismissible]="false"
  content="Please fill in all required fields">
</storybook-alert>
```

### Save Confirmation
```typescript
<storybook-alert
  variant="success"
  [dismissible]="true"
  content="Settings saved successfully">
</storybook-alert>
```

### System Maintenance
```typescript
<storybook-alert
  variant="warning"
  [dismissible]="false"
  content="Scheduled maintenance on Sunday 2:00 AM - 4:00 AM">
</storybook-alert>
```

### Feature Announcement
```typescript
<storybook-alert
  variant="info"
  [dismissible]="true"
  content="New dashboard features are now available. Learn more">
</storybook-alert>
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires CSS flexbox support
- SVG support required for icons

## Related Components

- **Button**: For action triggers
- **Label**: For static status indicators
- **Input**: Often used together in forms

## Notes

- The component uses inline-flex display to adjust width based on content
- Icons are SVG-based and color-matched to each variant
- The close button is only rendered when `dismissible` is `true`
- Once dismissed, the alert cannot be shown again without recreating the component
- All color values are hardcoded to match Figma specifications exactly
