# Tooltip Component

The Tooltip component provides contextual help information that appears on hover or keyboard focus.

## Overview

The Tooltip is a non-interactive, floating component that displays brief helpful text when the user hovers over or focuses on a trigger element (like an icon or button).

## Features

- **Hover & Focus Activation**: Shows on mouseenter or focus, hides on mouseleave or blur
- **Four Placement Options**: top (default), right, bottom, left
- **Keyboard Accessible**: Visible on keyboard focus, supports arrow directional positioning
- **Non-Interactive**: Content is text-only, no clickable elements
- **Disabled State**: Can be disabled to prevent tooltip display
- **Flexible Trigger**: Works with any HTML element (icons, buttons, links, etc.)
- **Smooth Animation**: Scale-in animation for appearance

## Usage

### Basic Example

```html
<bsg-tooltip content="Click to save" placement="top">
  <button>Save</button>
</bsg-tooltip>
```

### With Icon

```html
<bsg-tooltip content="More information" placement="top">
  <svg width="20" height="20" viewBox="0 0 20 20">
    <!-- Icon content -->
  </svg>
</bsg-tooltip>
```

### Disabled Tooltip

```html
<bsg-tooltip 
  content="Help text" 
  placement="top" 
  [disabled]="true">
  <button>Action</button>
</bsg-tooltip>
```

## Props

### `content` (string, required)
The text displayed in the tooltip.

```typescript
content: string = '';
```

### `placement` (TooltipPlacement, optional)
Position of tooltip relative to the trigger element.

```typescript
placement: 'top' | 'right' | 'bottom' | 'left' = 'top';
```

### `disabled` (boolean, optional)
When true, the tooltip will not be displayed on hover or focus.

```typescript
disabled: boolean = false;
```

## Styling

The Tooltip uses the design system colors and is fully customizable via CSS variables.

- **Background**: `#334155` (neutral dark slate)
- **Text Color**: `#f1f5f9` (light slate)
- **Border Radius**: `6px`
- **Padding**: `8px 12px` (compact for short text)
- **Arrow**: Rotated square pointing to trigger

## Accessibility

The component includes several accessibility features:

- **aria-describedby**: Automatically linked to the trigger element
- **role="tooltip"**: Semantic role for screen readers
- **Keyboard Focus**: Tooltip appears when trigger receives keyboard focus
- **Tab Navigation**: Trigger element is automatically focusable

### ARIA Example

When you use a Tooltip, the HTML generated includes:

```html
<div 
  aria-describedby="tooltip-abc123"
  tabindex="0">
  <!-- Trigger content -->
</div>

<div 
  id="tooltip-abc123"
  role="tooltip">
  Help text here
</div>
```

## Behavior

### Show/Hide Logic

| Event | Action |
|-------|--------|
| `mouseenter` | Show tooltip |
| `mouseleave` | Hide tooltip |
| `focus` | Show tooltip |
| `blur` | Hide tooltip |

The hide action is debounced (0ms) to prevent flickering.

### Disabled State

When `disabled=true`:
- Tooltip is never displayed
- All events are ignored
- Trigger remains focusable but visually disabled

## Visual Hierarchy

The Tooltip floats above other content with `z-index: 1000` to ensure visibility.

## Responsiveness

On small screens (≤640px):
- Font size reduces to 12px
- Text can wrap on multiple lines
- Max-width: 200px

## Stories

The component includes comprehensive Storybook stories:

- **Default**: Basic tooltip with info icon
- **Placements**: Demonstrates all four placement options (top, right, bottom, left)
- **Disabled**: Shows disabled state behavior
- **With Long Content**: Text wrapping on small screens
- **With Button Trigger**: Demonstrates flexibility with different trigger types

## Implementation Notes

- Built with Angular standalone components
- Uses `ChangeDetectionStrategy.OnPush` for performance
- Unique tooltip IDs generated per instance
- No external dependencies beyond Angular
- CSS-only positioning and animations

## Best Practices

1. **Keep text short**: Tooltips are for brief, contextual help
2. **Use on interactive elements**: Info icons, help buttons, disabled inputs
3. **Place logically**: Use placement to avoid content overlap
4. **Don't rely on hover alone**: Ensure keyboard focus also shows tooltip
5. **Avoid dense content**: Tooltips should be supplementary, not primary documentation

## Browser Support

Works in all modern browsers supporting:
- CSS `position: absolute`
- CSS `transform` and `animation`
- Angular 15+
