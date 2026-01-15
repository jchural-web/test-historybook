# Radio Button Component

A circular radio button component for single-choice selection within a group of options.

## Overview

The Radio component provides a standard radio input with multiple sizes and states. It maintains perfect circular proportions and includes focus ring indicators for accessibility.

## Features

- **2 Sizes**: Small (16px) and Medium (20px)
- **5 States**: Default, Hover, Checked, Disabled, and Focus
- **Perfect Circles**: Maintains circular shape with precise proportions
- **Focus Rings**: Visible focus indicators with proper spacing
- **Inner Dot Indicator**: Displays only when checked
- **Pixel-Perfect**: Based on Figma design specifications

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md'` | `'md'` | Size of the radio button |
| `state` | `'default' \| 'hover' \| 'checked' \| 'disabled' \| 'focus'` | `'default'` | Current visual state |
| `checked` | `boolean` | `false` | Checked state (synced with state prop) |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `stateChange` | `EventEmitter<RadioState>` | Emitted when state changes |
| `checkedChange` | `EventEmitter<boolean>` | Emitted when checked state changes |
| `onChange` | `EventEmitter<boolean>` | Emitted on user interaction |

## Sizes

### Small (sm)
- **Outer Circle**: 16×16px
- **Inner Dot**: 10×10px (when checked)
- **Focus Ring**: 22×22px (3px gap)

### Medium (md)
- **Outer Circle**: 20×20px
- **Inner Dot**: 14×14px (when checked)
- **Focus Ring**: 26×26px (3px gap)

## States

### Default
- **Border**: `#64748B` (neutral-500)
- **Background**: Transparent
- **Use Case**: Unselected radio button

### Hover
- **Border**: `#3B82F6` (Blue-500)
- **Opacity**: 90%
- **Use Case**: Mouse hover state

### Checked
- **Outer Border**: `#2563EB` (Blue-600)
- **Inner Dot**: `#2563EB` (Blue-600) filled circle
- **Use Case**: Selected option

### Disabled
- **Border**: `#64748B` (neutral-500)
- **Background**: `#64748B` (neutral-500) filled
- **Opacity**: 40%
- **Interaction**: Disabled (no pointer events)
- **Use Case**: Unavailable option

### Focus
- **Outer Border**: `#64748B` (neutral-500)
- **Focus Ring**: `#7C3AED` (Violet-600) for sm, `#9333EA` (Purple-600) for md
- **Ring Size**: 3px gap from outer circle
- **Use Case**: Keyboard focus indicator

## Design Specifications

### Visual Structure
```
[Focus Ring] ← 3px gap → [Outer Circle] → [Inner Dot when checked]
```

### Dimensions
- **Small**: 16px outer, 10px inner dot, 22px focus ring
- **Medium**: 20px outer, 14px inner dot, 26px focus ring

### Colors
| Element | Color | Token |
|---------|-------|-------|
| Default border | `#64748B` | neutral-500 |
| Hover border | `#3B82F6` | Blue-500 |
| Checked border | `#2563EB` | Blue-600 |
| Inner dot | `#2563EB` | Blue-600 |
| Focus ring (sm) | `#7C3AED` | Violet-600 |
| Focus ring (md) | `#9333EA` | Purple-600 |

### Proportions
- **Inner dot** is exactly **62.5%** of outer circle diameter
- **Focus ring** extends **3px** beyond outer circle on all sides

## Usage Examples

### Basic Usage

```typescript
// Default unselected radio
<storybook-radio 
  size="md" 
  state="default">
</storybook-radio>

// Selected radio
<storybook-radio 
  size="md" 
  state="checked">
</storybook-radio>
```

### Radio Group

```typescript
<fieldset>
  <legend>Choose one option</legend>
  
  <label>
    <storybook-radio size="md" state="default"></storybook-radio>
    Option A
  </label>
  
  <label>
    <storybook-radio size="md" state="checked"></storybook-radio>
    Option B
  </label>
  
  <label>
    <storybook-radio size="md" state="default"></storybook-radio>
    Option C
  </label>
</fieldset>
```

### With Descriptions

```typescript
<label style="display: flex; gap: 8px;">
  <storybook-radio size="md" state="checked"></storybook-radio>
  <div>
    <div style="font-weight: 600;">Pro Plan</div>
    <div style="font-size: 12px; color: #64748B;">$29/month</div>
  </div>
</label>
```

### Small Size

```typescript
<storybook-radio size="sm" state="default"></storybook-radio>
```

### Disabled State

```typescript
<storybook-radio 
  size="md" 
  state="disabled">
</storybook-radio>
```

## Integration with Builder.io

This component is designed to be fully compatible with Builder.io's visual editor. All props are exposed and can be configured through the Builder.io interface:

1. **size**: Dropdown selector (`sm` | `md`)
2. **state**: Dropdown selector for visual state
3. **checked**: Boolean toggle for checked state

To register in Builder.io:

```typescript
import { Builder } from '@builder.io/react';
import { RadioComponent } from './radio.component';

Builder.registerComponent(RadioComponent, {
  name: 'Radio',
  inputs: [
    {
      name: 'size',
      type: 'string',
      enum: ['sm', 'md'],
      defaultValue: 'md',
    },
    {
      name: 'state',
      type: 'string',
      enum: ['default', 'hover', 'checked', 'disabled', 'focus'],
      defaultValue: 'default',
    },
    {
      name: 'checked',
      type: 'boolean',
      defaultValue: false,
    },
  ],
});
```

## Accessibility Considerations

- Component uses proper `role="radio"` attribute
- `aria-checked` reflects the checked state
- `aria-disabled` indicates disabled state
- `tabindex` set to `-1` when disabled for keyboard navigation
- Focus ring provides clear keyboard focus indicator
- Color contrast meets WCAG AA standards

### Keyboard Navigation

- **Tab**: Navigate between radio buttons
- **Space/Enter**: Select the focused radio button
- **Arrow Keys**: Navigate within radio group (requires group implementation)

## CSS Class Structure

```css
.radio-wrapper           /* Main container */
.radio                   /* Base radio class */
.radio-sm               /* Small size modifier */
.radio-md               /* Medium size modifier */
.radio-state-default    /* Default state */
.radio-state-hover      /* Hover state */
.radio-state-checked    /* Checked state */
.radio-state-disabled   /* Disabled state */
.radio-state-focus      /* Focus state */
.radio-focus-ring       /* Focus ring element */
.radio-outer            /* Outer circle SVG */
.radio-inner            /* Inner dot SVG */
```

## Best Practices

1. **Always use in groups**: Radio buttons should never appear alone; they represent a choice among multiple options
2. **Provide labels**: Always associate descriptive text with each radio button
3. **Default selection**: Consider pre-selecting a recommended option
4. **Logical ordering**: Arrange options in a logical order (e.g., most common first)
5. **Limit options**: For more than 5-7 options, consider using a dropdown instead
6. **Use fieldset**: Wrap radio groups in `<fieldset>` with a `<legend>` for semantic HTML

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires CSS flexbox support
- SVG support required
- Supports both mouse and keyboard interactions

## Related Components

- **Checkbox**: For multi-selection scenarios
- **Button**: For single actions
- **Input**: For text entry
- **Label**: For static indicators

## Notes

- The inner dot only appears when `state="checked"`
- Focus ring color differs by size (Violet-600 for sm, Purple-600 for md)
- Disabled state prevents all interactions via `pointer-events: none`
- All dimensions and colors match Figma specifications exactly
- Component maintains perfect circular proportions across all sizes and states
