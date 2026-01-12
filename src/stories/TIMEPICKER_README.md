# TimePicker Component

A time selection component with a dropdown interface showing hours and minutes in scrollable lists, featuring validation and accessibility.

## Overview

The TimePicker component provides an intuitive interface for selecting time values. It mimics the Input component's visual design while adding a dropdown with hour/minute selection, time constraints, and convenient action buttons.

## Features

- **Time Format**: HH:mm format with 24-hour clock
- **Scrollable Lists**: Hours (00-23) and Minutes (00-59) in separate columns
- **Step Control**: Customizable minute steps (1, 5, 10, 15, 30, etc.)
- **Time Constraints**: minTime and maxTime to disable out-of-range selections
- **Action Buttons**: "Ahora" (Now) and "Limpiar" (Clear)
- **Input States**: default, hover, focus, disabled, error
- **Accessible**: ARIA labels, error messages, keyboard support
- **Design Consistent**: Reuses Input's visual tokens and styling

## Usage

### Basic Example

```typescript
import { TimePickerComponent } from './timepicker.component';

@Component({
  selector: 'app-example',
  template: `
    <bsg-timepicker
      size="md"
      state="default"
      label="Select Time"
      placeholder="HH:mm"
      (valueChange)="onTimeChange($event)"
      (selectionChange)="onSelectionChange($event)"
    ></bsg-timepicker>
  `,
  imports: [TimePickerComponent],
})
export class ExampleComponent {
  onTimeChange(time: string): void {
    console.log('Selected time:', time);
  }

  onSelectionChange(selection: { hour: number; minute: number }): void {
    console.log('Hour:', selection.hour, 'Minute:', selection.minute);
  }
}
```

### With Constraints

```typescript
<bsg-timepicker
  size="md"
  label="Appointment Time"
  minTime="09:00"
  maxTime="18:00"
  [stepMinutes]="30"
></bsg-timepicker>
```

## Props

| Prop           | Type                                                       | Default     | Description                                    |
| -------------- | ---------------------------------------------------------- | ----------- | ---------------------------------------------- |
| `size`         | `'sm' \| 'md' \| 'lg'`                                     | `'md'`      | Size of the component                          |
| `state`        | `'default' \| 'hover' \| 'focus' \| 'disabled' \| 'error'` | `'default'` | Current state                                  |
| `value`        | `string`                                                   | `''`        | Selected time in HH:mm format                  |
| `placeholder`  | `string`                                                   | `'HH:mm'`   | Placeholder text                               |
| `label`        | `string`                                                   | `''`        | Optional label above input                     |
| `errorMessage` | `string`                                                   | `''`        | Error message when state is 'error'            |
| `minTime`      | `string`                                                   | `''`        | Minimum time in HH:mm (disables earlier times) |
| `maxTime`      | `string`                                                   | `''`        | Maximum time in HH:mm (disables later times)   |
| `stepMinutes`  | `number`                                                   | `1`         | Step size for minutes list                     |
| `open`         | `boolean`                                                  | `false`     | Dropdown open state                            |

## Events

| Event             | Type                                             | Description                                  |
| ----------------- | ------------------------------------------------ | -------------------------------------------- |
| `valueChange`     | `EventEmitter<string>`                           | Emitted when time is selected (HH:mm format) |
| `selectionChange` | `EventEmitter<{ hour: number; minute: number }>` | Emitted with numeric hour and minute         |
| `openChange`      | `EventEmitter<boolean>`                          | Emitted when dropdown state changes          |

## Behavior

### Selection

- Click the input field or clock icon to open the dropdown
- Select an hour from the left column
- Select a minute from the right column (respects stepMinutes)
- Selection updates the input field immediately
- Dropdown closes when clicking outside

### Time Constraints

- **minTime**: Hours/minutes before this time appear disabled
- **maxTime**: Hours/minutes after this time appear disabled
- Example: With minTime="09:00" and maxTime="18:00", only 09:00-18:00 is selectable

### Actions

- **Ahora (Now)**: Sets the current time, snapped to the nearest minute step
- **Limpiar (Clear)**: Clears the selected time and empties the input

### States

- **default**: Standard appearance
- **hover**: Slight opacity change
- **focus**: Violet border with ring effect
- **disabled**: Opacity 40%, all interactions disabled
- **error**: Red border and text, shows error message below

## Styles

The TimePicker reuses Input's design tokens:

### Sizes

- **sm**: 32px height
- **md**: 40px height
- **lg**: 48px height

### Colors

- **Default**: #CBD5E1 border, #1E293B text
- **Focus**: #64748B border, #7C3AED ring
- **Error**: #DC2626 text and border
- **Disabled**: opacity 40%
- **Selected**: #7C3AED background (Violet), white text

### Dropdown

- Max height: 160px with scrollbar
- Border: #CBD5E1 (neutral-300)
- Selected item: Violet background
- Hover: Light gray background
- Disabled: 40% opacity

## Accessibility

### ARIA Attributes

- `aria-invalid="true"` when state is 'error'
- `aria-describedby` pointing to error message ID
- `aria-label` on clock icon button
- `aria-pressed` on button toggle state
- `role="dialog"` on dropdown container

### Keyboard Support

- **Escape**: Closes the dropdown from the input

### Focus Management

- Clock icon button is focusable
- Input field receives focus on click
- Options in dropdown are selectable via click

## CSS Classes

- `.timepicker-field-container`: Root container
- `.timepicker-wrapper`: Input wrapper
- `.timepicker-input-field`: Time input field
- `.timepicker-dropdown`: Dropdown menu
- `.timepicker-column`: Hours or minutes column
- `.timepicker-option`: Individual time option
- `.timepicker-action-btn`: Action button

## Example: Form Integration

```typescript
<form>
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <div>
      <label>Appointment Date *</label>
      <input type="date" required />
    </div>

    <div>
      <label>Time *</label>
      <bsg-timepicker
        size="md"
        label="Select appointment time"
        minTime="09:00"
        maxTime="18:00"
        [stepMinutes]="30"
        (valueChange)="time = $event"
      ></bsg-timepicker>
    </div>

    <button type="submit">Book Appointment</button>
  </div>
</form>
```

## Related Components

- [Input Component](./INPUT_README.md) - Base input styling and states

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The component uses 24-hour time format
- Step minutes only affects the minutes list display (not hour validation)
- Min/max time validation is case-sensitive and requires HH:mm format
- The "Now" button respects the stepMinutes setting
