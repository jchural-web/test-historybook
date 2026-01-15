# RadioGroup Component

A composite component that groups multiple radio buttons together with consistent layout and single-selection behavior.

## Overview

The RadioGroup component provides a container for multiple radio button options with automatic layout management (horizontal or vertical), proper spacing, and single-selection logic.

## Features

- **2 Sizes**: Small (14px text) and Medium (16px text)
- **2 Orientations**: Horizontal and Vertical layouts
- **Dynamic Options**: Configurable list of radio options
- **Single Selection**: Only one option can be selected at a time
- **Disabled Support**: Individual options can be disabled
- **Consistent Spacing**: Automatic gap management based on size and orientation
- **Pixel-Perfect**: Based on Figma design specifications

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md'` | `'md'` | Size of radio buttons and text |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `options` | `RadioGroupOption[]` | `[...]` | Array of radio options |
| `selectedValue` | `string` | `''` | Currently selected value |

### RadioGroupOption Interface

```typescript
interface RadioGroupOption {
  value: string;        // Unique identifier
  label: string;        // Display text
  disabled?: boolean;   // Optional disabled state
}
```

## Events

| Event | Type | Description |
|-------|------|-------------|
| `valueChange` | `EventEmitter<string>` | Emits selected value when selection changes |
| `selectionChange` | `EventEmitter<RadioGroupOption>` | Emits selected option object |

## Sizes

### Small (sm)
- **Radio**: 16×16px
- **Text**: 14px, 21px line-height (Inter, 400 weight)
- **Gap (radio-to-label)**: 8px
- **Gap (between options)**:
  - Horizontal: 12px
  - Vertical: 12px

### Medium (md)
- **Radio**: 20×20px
- **Text**: 16px, 24px line-height (Inter, 400 weight)
- **Gap (radio-to-label)**: 12px
- **Gap (between options)**:
  - Horizontal: 15px
  - Vertical: 12px

## Orientations

### Horizontal
- Radio buttons arranged in a row
- Suitable for 2-4 short options
- Best for inline selection contexts

### Vertical
- Radio buttons stacked vertically
- Suitable for longer lists or options with descriptions
- Better readability for multiple options

## Design Specifications

### Layout Structure

**Horizontal:**
```
[Radio] Label   [Radio] Label   [Radio] Label
├─ 8/12px gap  ├─ 8/12px gap  ├─ 8/12px gap
└─ 12/15px between options ─┘
```

**Vertical:**
```
[Radio] Label
├─ 8/12px gap
[Radio] Label
├─ 12px between
[Radio] Label
```

### Typography
- **Font Family**: Inter (fallback: -apple-system, Roboto, Helvetica, sans-serif)
- **Font Weight**: 400 (Regular)
- **Letter Spacing**: 0.05px
- **Text Color**: `#202020` (default), `#64748B` (disabled)

### Colors
| State | Color | Token |
|-------|-------|-------|
| Label text | `#202020` | Light-Mode-Text-Default |
| Disabled text | `#64748B` | neutral-500 (60% opacity) |

## Usage Examples

### Basic Usage

```typescript
// Horizontal group
<storybook-radio-group
  size="md"
  orientation="horizontal"
  [options]="[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ]">
</storybook-radio-group>

// Vertical group
<storybook-radio-group
  size="sm"
  orientation="vertical"
  [options]="options">
</storybook-radio-group>
```

### With Pre-selection

```typescript
<storybook-radio-group
  size="md"
  orientation="vertical"
  selectedValue="option2"
  [options]="[
    { value: 'option1', label: 'First Option' },
    { value: 'option2', label: 'Second Option' },
    { value: 'option3', label: 'Third Option' }
  ]">
</storybook-radio-group>
```

### With Event Handling

```typescript
<storybook-radio-group
  size="md"
  orientation="horizontal"
  [options]="paymentOptions"
  (valueChange)="onPaymentMethodChange($event)"
  (selectionChange)="onSelectionChange($event)">
</storybook-radio-group>
```

```typescript
export class MyComponent {
  paymentOptions = [
    { value: 'credit', label: 'Credit Card' },
    { value: 'debit', label: 'Debit Card' },
    { value: 'paypal', label: 'PayPal' }
  ];

  onPaymentMethodChange(value: string) {
    console.log('Selected value:', value);
  }

  onSelectionChange(option: RadioGroupOption) {
    console.log('Selected option:', option);
  }
}
```

### With Disabled Options

```typescript
<storybook-radio-group
  size="md"
  orientation="vertical"
  [options]="[
    { value: 'email', label: 'Email Notification' },
    { value: 'sms', label: 'SMS Notification', disabled: true },
    { value: 'push', label: 'Push Notification' }
  ]">
</storybook-radio-group>
```

### Form Integration

```typescript
<form>
  <fieldset>
    <legend>Choose your plan</legend>
    <storybook-radio-group
      size="md"
      orientation="vertical"
      [options]="[
        { value: 'basic', label: 'Basic Plan - $9/month' },
        { value: 'pro', label: 'Pro Plan - $29/month' },
        { value: 'enterprise', label: 'Enterprise Plan - Contact us' }
      ]"
      (valueChange)="onPlanChange($event)">
    </storybook-radio-group>
  </fieldset>
</form>
```

## Integration with Builder.io

This component is designed to be fully compatible with Builder.io's visual editor:

```typescript
import { Builder } from '@builder.io/react';
import { RadioGroupComponent } from './radio-group.component';

Builder.registerComponent(RadioGroupComponent, {
  name: 'RadioGroup',
  inputs: [
    {
      name: 'size',
      type: 'string',
      enum: ['sm', 'md'],
      defaultValue: 'md',
    },
    {
      name: 'orientation',
      type: 'string',
      enum: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
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
        {
          name: 'disabled',
          type: 'boolean',
          defaultValue: false,
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
  ],
});
```

## Accessibility Considerations

- Uses proper `role="radiogroup"` attribute on container
- Each radio uses `role="radio"` (inherited from Radio component)
- `aria-checked` reflects selection state
- `aria-disabled` indicates disabled options
- Full keyboard navigation support:
  - **Tab**: Navigate to radio group
  - **Arrow Keys**: Navigate between options within group
  - **Space**: Select focused option
- Color contrast meets WCAG AA standards
- Clear visual focus indicators

### Best Practices

1. **Use `<fieldset>` and `<legend>`** for semantic grouping in forms
2. **Provide descriptive legends** that explain the choice
3. **Keep options concise** - use 2-5 words per label when possible
4. **Pre-select a default** when appropriate
5. **Disable unavailable options** instead of hiding them

## CSS Class Structure

```css
.radio-group                    /* Main container */
.radio-group-horizontal         /* Horizontal layout */
.radio-group-vertical           /* Vertical layout */
.radio-group-sm                 /* Small size modifier */
.radio-group-md                 /* Medium size modifier */
.radio-option                   /* Individual option wrapper */
.radio-option-sm                /* Small option spacing */
.radio-option-md                /* Medium option spacing */
.radio-label                    /* Label text */
.radio-label-sm                 /* Small label typography */
.radio-label-md                 /* Medium label typography */
```

## Component Composition

RadioGroup is a composite component that:
- Renders multiple `<storybook-radio>` components
- Does **not** redefine Radio component styles
- Manages selection state at the group level
- Handles layout and spacing between options
- Delegates individual radio rendering to the Radio component

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires CSS flexbox support
- Full support for touch and mouse interactions
- Keyboard navigation fully supported

## Related Components

- **Radio**: Individual radio button component (used internally)
- **Checkbox**: For multi-selection scenarios
- **Button Group**: For mutually exclusive button selections
- **Dropdown**: Alternative for larger option lists

## Notes

- Only one radio can be selected at a time within a group
- Clicking a selected radio does not deselect it (standard radio behavior)
- The component automatically aligns radios and labels vertically
- Spacing values are based exactly on Figma specifications
- Font size and line-height match the radio size for visual consistency
