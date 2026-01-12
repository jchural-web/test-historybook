# Combobox Component

A searchable dropdown component that combines the visual design of the Select component with real-time filtering capability.

## Overview

The Combobox component is a variation of the Select component that includes a built-in search input inside the dropdown. It allows users to quickly find and select options by typing to filter the list.

## Features

- **Searchable**: Real-time filtering of options as the user types
- **Visual Consistency**: Identical design and styling to the Select component
- **Same States**: Supports all Select states: default, focus, open, error, and disabled
- **Size Variants**: Available in three sizes (sm, md, lg)
- **Empty State**: Displays "Sin resultados" when no matches are found
- **Accessible**: Proper ARIA attributes for accessibility

## Usage

### Basic Example

```typescript
import { ComboboxComponent } from './combobox.component';

@Component({
  selector: 'app-example',
  template: `
    <bsg-combobox
      size="md"
      state="default"
      placeholder="Search country..."
      [options]="countries"
      (selectionChange)="onSelect($event)"
    ></bsg-combobox>
  `,
  imports: [ComboboxComponent],
})
export class ExampleComponent {
  countries = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ];

  onSelect(option: ComboboxOption): void {
    console.log('Selected:', option);
  }
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'sm' \| 'md' \| 'lg'` | `'sm'` | Size of the combobox |
| `state` | `'default' \| 'hover' \| 'focus' \| 'disabled' \| 'error'` | `'default'` | Current state of the combobox |
| `options` | `ComboboxOption[]` | `[]` | Array of selectable options |
| `selectedValue` | `string` | `''` | Currently selected option value |
| `placeholder` | `string` | `'Selecciona'` | Placeholder text when no option is selected |
| `open` | `boolean` | `false` | Controls whether the dropdown is open |
| `errorMessage` | `string` | `''` | Error message displayed when state is 'error' |

## Events

| Event | Type | Description |
|-------|------|-------------|
| `valueChange` | `EventEmitter<string>` | Emitted when a value is selected |
| `selectionChange` | `EventEmitter<ComboboxOption>` | Emitted when an option is selected |
| `openChange` | `EventEmitter<boolean>` | Emitted when dropdown open state changes |

## Styles

The Combobox component reuses the Select component's CSS tokens and visual design, with minimal additions for the search input:

### Size Variants

- **sm**: 32px height, 133px width
- **md**: 40px height, 132px width
- **lg**: 48px height, 133px width

### Colors (Design Tokens)

- **Default**: #CBD5E1 border, #334155 text
- **Focus**: #7C3AED border (Violet-600)
- **Error**: #DC2626 text and border (Red-600)
- **Disabled**: Opacity 40%
- **Hover**: Opacity 90%

### Search Input Styles

- Border radius: 4px
- Font size: 14px
- Padding: 6px 10px
- Focus color: #7C3AED (Violet-600)

## Behavior

### Search Filtering

- When the dropdown is open and the user types in the search input, the options list filters in real-time
- The filter searches case-insensitively through option labels
- If no text is entered, all options are displayed
- If no matches are found, an empty state message appears

### State Handling

- **disabled**: Both the combobox button and search input are disabled
- **error**: Shows an error message below the component
- **focus**: Border color changes to violet
- **open**: Displays the dropdown with search input and options

### Closing

- The dropdown closes when an option is selected
- The dropdown closes when pressing Escape in the search input
- The dropdown closes when clicking outside the component

## Related Components

- [Select Component](./SELECT_README.md) - The base component that Combobox extends

## Accessibility

The Combobox component implements WAI-ARIA attributes:

- `aria-expanded`: Indicates whether the dropdown is open
- `aria-haspopup="listbox"`: Indicates the button triggers a listbox
- `aria-disabled`: Indicates when the component is disabled
- `aria-selected`: Marks selected options
- `aria-label`: Labels the search input

## CSS Classes

The component uses semantic class names following the pattern `.combobox-[element]-[state]`:

- `.combobox-wrapper`: Root container
- `.combobox-trigger`: Button that opens the dropdown
- `.combobox-dropdown`: Dropdown menu container
- `.combobox-search-wrapper`: Search input wrapper
- `.combobox-search-input`: Search input field
- `.combobox-option`: Individual option item
- `.combobox-error-message`: Error message container
