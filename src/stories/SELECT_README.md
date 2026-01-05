# Select Component

A dropdown select component with multiple sizes, states, and customizable options.

## Overview

The Select component provides a styled dropdown selector with support for different sizes, visual states (including error and disabled), and a customizable dropdown menu.

## Features

- **3 Sizes**: Small (32px), Medium (40px), and Large (48px)
- **5 States**: Default, Hover, Focus, Disabled, and Error
- **Dropdown Menu**: Displays options when opened
- **Selected Highlight**: Visual indication of selected option
- **Click Outside**: Closes dropdown when clicking outside
- **Keyboard Accessible**: Full ARIA support
- **Pixel-Perfect**: Based on Figma design specifications

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'sm'` | Size of the select |
| `state` | `'default' \| 'hover' \| 'focus' \| 'disabled' \| 'error'` | `'default'` | Current visual state |
| `options` | `SelectOption[]` | `[...]` | Array of select options |
| `selectedValue` | `string` | `''` | Currently selected value |
| `placeholder` | `string` | `'Selecciona'` | Placeholder text |
| `open` | `boolean` | `false` | Dropdown open state |

### SelectOption Interface

```typescript
interface SelectOption {
  value: string;  // Unique identifier
  label: string;  // Display text
}
```

## Events

| Event | Type | Description |
|-------|------|-------------|
| `valueChange` | `EventEmitter<string>` | Emits selected value when selection changes |
| `selectionChange` | `EventEmitter<SelectOption>` | Emits selected option object |
| `openChange` | `EventEmitter<boolean>` | Emits when dropdown opens/closes |

## Sizes

### Small (sm)
- **Height**: 32px
- **Width**: 133px
- **Padding**: 4px 12px

### Medium (md)
- **Height**: 40px
- **Width**: 132px
- **Padding**: 4px 12px

### Large (lg)
- **Height**: 48px
- **Width**: 133px
- **Padding**: 4px 12px

## States

### Default
- **Border**: `#CBD5E1` (neutral-300)
- **Text**: `#64748B` (neutral-500)
- **Icon**: `#64748B` (neutral-500)

### Hover
- **Opacity**: 90%
- Triggered on mouse hover (when not disabled)

### Focus
- **Border**: `#7C3AED` (Violet-600)
- Triggered when dropdown is open or on keyboard focus

### Disabled
- **Opacity**: 40%
- **Cursor**: not-allowed
- No interactions allowed

### Error
- **Border**: `#DC2626` (Red-600)
- **Text**: `#DC2626` (Red-600)
- **Icon**: `#DC2626` (Red-600)
- Used for form validation errors

## Design Specifications

### Visual Structure
```
┌─────────────────────────────┐
│ Selecciona            ▼     │  ← Select trigger
└─────────────────────────────┘
┌─────────────────────────────┐
│ Opcion 1                    │  ← Dropdown option
│ Opcion 2                    │
│ Opcion 3        ← Selected  │  ← Highlighted
│ Opcion 4                    │
└─────────────────────────────┘
```

### Dimensions
- **Border Radius**: 6px (trigger and dropdown)
- **Gap**: 12px between text and chevron icon
- **Dropdown Offset**: 4px below trigger

### Typography
- **Font Family**: Inter (fallback: -apple-system, Roboto, Helvetica, sans-serif)
- **Font Size**: 16px
- **Font Weight**: 400 (Regular)
- **Line Height**: 24px
- **Letter Spacing**: 0.05px

### Colors
| Element | Default | Error |
|---------|---------|-------|
| Border | `#CBD5E1` | `#DC2626` |
| Text | `#64748B` | `#DC2626` |
| Icon | `#64748B` | `#DC2626` |
| Selected bg | `#CBD5E1` | `#CBD5E1` |

### Chevron Icon
- **Size**: 14×8px
- **Type**: Down arrow chevron
- **Color**: Matches text color (changes with state)

## Usage Examples

### Basic Usage

```typescript
// Simple select
<storybook-select
  size="md"
  state="default"
  [options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ]">
</storybook-select>
```

### With Pre-selection

```typescript
<storybook-select
  size="md"
  state="default"
  selectedValue="2"
  [options]="options">
</storybook-select>
```

### With Event Handling

```typescript
<storybook-select
  size="md"
  state="default"
  [options]="options"
  (valueChange)="onValueChange($event)"
  (selectionChange)="onSelectionChange($event)">
</storybook-select>
```

```typescript
export class MyComponent {
  options = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' }
  ];

  onValueChange(value: string) {
    console.log('Selected value:', value);
  }

  onSelectionChange(option: SelectOption) {
    console.log('Selected option:', option);
  }
}
```

### Error State with Message

```typescript
<div>
  <storybook-select
    size="md"
    state="error"
    placeholder="Required field"
    [options]="options">
  </storybook-select>
  <p style="color: #DC2626; font-size: 12px; margin-top: 4px;">
    This field is required
  </p>
</div>
```

### Disabled State

```typescript
<storybook-select
  size="md"
  state="disabled"
  placeholder="Not available"
  [options]="options">
</storybook-select>
```

### Custom Placeholder

```typescript
<storybook-select
  size="md"
  state="default"
  placeholder="Choose an option..."
  [options]="options">
</storybook-select>
```

### Programmatically Control Dropdown

```typescript
<storybook-select
  size="md"
  state="default"
  [open]="isOpen"
  [options]="options"
  (openChange)="onOpenChange($event)">
</storybook-select>
```

```typescript
export class MyComponent {
  isOpen = false;

  onOpenChange(open: boolean) {
    this.isOpen = open;
    console.log('Dropdown is', open ? 'open' : 'closed');
  }
}
```

## Integration with Builder.io

This component is designed to be fully compatible with Builder.io's visual editor:

```typescript
import { Builder } from '@builder.io/react';
import { SelectComponent } from './select.component';

Builder.registerComponent(SelectComponent, {
  name: 'Select',
  inputs: [
    {
      name: 'size',
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    {
      name: 'state',
      type: 'string',
      enum: ['default', 'hover', 'focus', 'disabled', 'error'],
      defaultValue: 'default',
    },
    {
      name: 'options',
      type: 'list',
      subFields: [
        {
          name: 'value',
          type: 'string',
          required: true,
        },
        {
          name: 'label',
          type: 'string',
          required: true,
        },
      ],
      defaultValue: [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
      ],
    },
    {
      name: 'selectedValue',
      type: 'string',
      defaultValue: '',
    },
    {
      name: 'placeholder',
      type: 'string',
      defaultValue: 'Selecciona',
    },
    {
      name: 'open',
      type: 'boolean',
      defaultValue: false,
    },
  ],
});
```

## Accessibility Considerations

- Uses `role="listbox"` for the dropdown menu
- Uses `role="option"` for each dropdown item
- `aria-expanded` indicates dropdown state
- `aria-haspopup` indicates presence of dropdown
- `aria-disabled` indicates disabled state
- `aria-selected` indicates selected option
- Full keyboard navigation support:
  - **Click/Enter/Space**: Open/close dropdown
  - **Click option**: Select option
  - **Escape**: Close dropdown
  - **Click outside**: Close dropdown
- Color contrast meets WCAG AA standards

### Best Practices

1. **Always provide a placeholder** when no default selection
2. **Use error state** for form validation feedback
3. **Provide visual error messages** below the select
4. **Use appropriate size** based on context (sm for compact UIs, lg for prominent selections)
5. **Limit options** to reasonable numbers (consider search for long lists)
6. **Pre-select defaults** when appropriate
7. **Use disabled state** only when necessary (explain why in UI)

## Dropdown Behavior

### Opening
- Click on trigger button
- Opens below the trigger with 4px offset
- Shows all available options
- Highlights currently selected option

### Selection
- Click on any option to select
- Selected option gets highlighted background (#CBD5E1)
- Dropdown closes automatically after selection
- Value and selection events are emitted

### Closing
- Click selected option
- Click outside the component
- Press Escape key (when implemented)
- After selecting an option

### Click Outside Detection
The component automatically closes when clicking outside using a `@HostListener`:
- Listens to document clicks
- Checks if click is outside select wrapper
- Closes dropdown if open

## CSS Class Structure

```css
.select-wrapper           /* Main container */
.select-sm               /* Small size modifier */
.select-md               /* Medium size modifier */
.select-lg               /* Large size modifier */
.select-state-default    /* Default state */
.select-state-hover      /* Hover state */
.select-state-focus      /* Focus state */
.select-state-disabled   /* Disabled state */
.select-state-error      /* Error state */
.select-trigger          /* Trigger button */
.select-trigger-open     /* Open state modifier */
.select-value            /* Selected value text */
.select-icon             /* Chevron icon */
.select-dropdown         /* Dropdown container */
.select-option           /* Individual option */
.select-option-selected  /* Selected option */
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires CSS flexbox support
- Full support for touch and mouse interactions
- Keyboard navigation support

## Related Components

- **Input**: For text entry
- **RadioGroup**: For single selection with visible options
- **Checkbox**: For multi-selection scenarios
- **Button**: For action triggers

## Notes

- Dropdown automatically positions below the trigger
- Selected option is visually highlighted with background color
- Component maintains its own dropdown state
- Click outside detection automatically closes dropdown
- All dimensions and colors match Figma specifications exactly
- The chevron icon color adapts to the component state
- Disabled and error states prevent dropdown interaction
