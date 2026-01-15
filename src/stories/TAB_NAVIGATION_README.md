# TabNavigation Component

The TabNavigation component is a compound navigation element that displays multiple tabs allowing users to switch between different views or sections. It supports two variants (text-only and icon-text) with multiple sizes and states.

## Features

- 2 variants: `text` (label with optional counter), `icon-text` (icon + label)
- 3 sizes: `sm`, `md`, `lg`
- 5 states: `default`, `hover`, `active`, `focus`, `disabled`
- Configurable tabs array with labels, counters, and icons
- Active tab indicator via `activeIndex`
- Event emission on tab change
- Pixel-perfect replication from Figma design
- Accessible with ARIA attributes
- Angular 20 standalone component

## Import

```typescript
import { TabNavigationComponent } from './tab-navigation.component';
```

## Basic Usage

```html
<!-- Text variant with counters -->
<storybook-tab-navigation
  variant="text"
  size="md"
  [tabs]="[
    { label: 'Solicitudes Realizadas', count: 3 },
    { label: 'Información del cliente' },
    { label: 'Documentos', count: 5 }
  ]"
  [activeIndex]="0"
  (onTabChange)="handleTabChange($event)"
>
</storybook-tab-navigation>

<!-- Icon-text variant -->
<storybook-tab-navigation
  variant="icon-text"
  size="lg"
  [tabs]="[
    { label: 'Información del cliente', icon: true },
    { label: 'Detalles de pago', icon: true }
  ]"
  [activeIndex]="0"
>
</storybook-tab-navigation>
```

## Props

| Prop          | Type                                                        | Default     | Description                                         |
| ------------- | ----------------------------------------------------------- | ----------- | --------------------------------------------------- |
| `variant`     | `'text' \| 'icon-text'`                                     | `'text'`    | Tab display variant                                 |
| `size`        | `'sm' \| 'md' \| 'lg'`                                      | `'md'`      | Tab size                                            |
| `color`       | `'blue' \| 'green' \| 'yellow'`                             | `'blue'`    | Tab color variant                                   |
| `state`       | `'default' \| 'hover' \| 'active' \| 'focus' \| 'disabled'` | `'default'` | Tab state (applied to inactive tabs)                |
| `tabs`        | `TabItem[]`                                                 | `[]`        | Array of tab items                                  |
| `activeIndex` | `number`                                                    | `0`         | Index of the currently active tab                   |
| `onTabChange` | `EventEmitter<number>`                                      | -           | Event emitted when tab is clicked (emits new index) |

### TabItem Interface

```typescript
interface TabItem {
  label: string; // Tab label text
  count?: number; // Optional counter (text variant only)
  icon?: boolean; // Whether to show icon (icon-text variant)
}
```

## Variants

### Text

Displays tabs with text labels and optional counters in parentheses.

```html
<storybook-tab-navigation
  variant="text"
  size="md"
  [tabs]="[
    { label: 'Solicitudes Realizadas', count: 3 },
    { label: 'En Proceso', count: 12 },
    { label: 'Completadas', count: 45 }
  ]"
  [activeIndex]="0"
>
</storybook-tab-navigation>
```

**Specifications:**

- Layout: Horizontal inline
- Content: Label + optional counter
- Counter Format: " (n)" appended to label
- Font: Inter, 14px, 500 weight
- Border Radius: 8px

### Icon-Text

Displays tabs with an icon above the label in a vertical layout.

```html
<storybook-tab-navigation
  variant="icon-text"
  size="lg"
  [tabs]="[
    { label: 'Información del cliente', icon: true },
    { label: 'Detalles de pago', icon: true },
    { label: 'Historial', icon: true }
  ]"
  [activeIndex]="1"
>
</storybook-tab-navigation>
```

**Specifications:**

- Layout: Vertical (column)
- Icon: 32px circle with user icon SVG
- Icon Background: #DBEAFE (Blue-100) default, #3B82F6 (Blue-500) active
- Icon Stroke: #2563EB default, white active
- Label: 12px, 600 weight, centered
- Fixed width per size

## Color Variants

### Blue (Default)

Classic blue color scheme using Tailwind Blue palette.

```html
<storybook-tab-navigation
  variant="text"
  size="md"
  color="blue"
  [tabs]="[{ label: 'Tab 1' }, { label: 'Tab 2' }]"
  [activeIndex]="0"
>
</storybook-tab-navigation>
```

**Colors:**

- Default: Background #EFF6FF (Blue-50), Text #2563EB (Blue-600)
- Icon Circle: #DBEAFE (Blue-100)
- Active: Background #2563EB (Blue-600), Icon Circle #3B82F6 (Blue-500)
- Focus Border: #7C3AED (Violet-600)

### Green

Fresh green color scheme using Tailwind Green palette.

```html
<storybook-tab-navigation
  variant="text"
  size="md"
  color="green"
  [tabs]="[{ label: 'Tab 1' }, { label: 'Tab 2' }]"
  [activeIndex]="0"
>
</storybook-tab-navigation>
```

**Colors:**

- Default: Background #F0FDF4 (Green-50), Text #16A34A (Green-600)
- Icon Circle: #DCFCE7 (Green-100)
- Active: Background #16A34A (Green-600), Icon Circle #22C55E (Green-500)
- Focus Border: #16A34A (Green-600)

### Yellow

Warm yellow color scheme using Tailwind Yellow palette.

```html
<storybook-tab-navigation
  variant="text"
  size="md"
  color="yellow"
  [tabs]="[{ label: 'Tab 1' }, { label: 'Tab 2' }]"
  [activeIndex]="0"
>
</storybook-tab-navigation>
```

**Colors:**

- Default: Background #FEFCE8 (Yellow-50), Text #CA8A04 (Yellow-600)
- Icon Circle: #FEF3C7 (Yellow-100)
- Active: Background #CA8A04 (Yellow-600), Icon Circle #EAB308 (Yellow-500)
- Focus Border: #CA8A04 (Yellow-600)

## Sizes

### Small (sm)

**Text Variant:**

- Padding: 8px 16px
- Min Height: 29px

**Icon-Text Variant:**

- Padding: 8px 18px
- Dimensions: 168×80px

```html
<storybook-tab-navigation
  variant="text"
  size="sm"
  [tabs]="[{ label: 'Tab 1' }, { label: 'Tab 2' }]"
  [activeIndex]="0"
>
</storybook-tab-navigation>
```

### Medium (md) - Default

**Text Variant:**

- Padding: 12px 24px
- Min Height: 35px

**Icon-Text Variant:**

- Padding: 13px 26px
- Dimensions: 184×88px

```html
<storybook-tab-navigation
  variant="text"
  size="md"
  [tabs]="[{ label: 'Tab 1' }, { label: 'Tab 2' }]"
  [activeIndex]="0"
>
</storybook-tab-navigation>
```

### Large (lg)

**Text Variant:**

- Padding: 16px 32px
- Min Height: 43px

**Icon-Text Variant:**

- Padding: 17px 34px
- Dimensions: 200×96px

```html
<storybook-tab-navigation
  variant="text"
  size="lg"
  [tabs]="[{ label: 'Tab 1' }, { label: 'Tab 2' }]"
  [activeIndex]="0"
>
</storybook-tab-navigation>
```

## States

### Default

Normal appearance for inactive tabs.

```html
<storybook-tab-navigation
  variant="text"
  size="md"
  state="default"
  [tabs]="[{ label: 'Tab 1' }, { label: 'Tab 2' }]"
  [activeIndex]="0"
>
</storybook-tab-navigation>
```

**Specifications:**

- Background: #EFF6FF (Blue-50)
- Text Color: #2563EB (Blue-600)
- Opacity: 100%

### Hover

Applied when user hovers over an inactive tab.

**Specifications:**

- Background: #EFF6FF (Blue-50)
- Text Color: #2563EB (Blue-600)
- Opacity: 90%

### Active

Applied to the tab specified by `activeIndex`.

```html
<storybook-tab-navigation
  variant="text"
  size="md"
  [tabs]="[{ label: 'Tab 1' }, { label: 'Tab 2' }]"
  [activeIndex]="1"
>
</storybook-tab-navigation>
```

**Specifications:**

- Background: #2563EB (Blue-600)
- Text Color: #FFFFFF (White)
- Icon Circle Background: #3B82F6 (Blue-500)
- Icon Stroke: White
- Opacity: 100%

### Focus

Applied when user navigates via keyboard.

**Specifications:**

- Background: #EFF6FF (Blue-50)
- Text Color: #2563EB (Blue-600)
- Border: 1px solid #7C3AED (Violet-600)
- Opacity: 100%

**Note:** Padding is reduced by 1px to accommodate the border width.

### Disabled

Prevents all user interactions.

```html
<storybook-tab-navigation
  variant="text"
  size="md"
  state="disabled"
  [tabs]="[{ label: 'Tab 1' }, { label: 'Tab 2' }]"
  [activeIndex]="0"
>
</storybook-tab-navigation>
```

**Specifications:**

- Background: #EFF6FF (Blue-50)
- Text Color: #2563EB (Blue-600)
- Opacity: 40%
- Cursor: not-allowed
- Pointer Events: none

## Design Specifications

### Typography

**Text Variant:**

- Font Family: Inter, -apple-system, Roboto, Helvetica, sans-serif
- Font Size: 14px
- Font Weight: 500
- Line Height: normal
- White Space: nowrap

**Icon-Text Variant Label:**

- Font Family: Inter, -apple-system, Roboto, Helvetica, sans-serif
- Font Size: 12px
- Font Weight: 600
- Line Height: normal
- Text Align: center

### Layout

**Text Variant:**

- Display: flex
- Justify Content: center
- Align Items: center
- Gap: 10px (between tabs)

**Icon-Text Variant:**

- Display: flex (column)
- Align Items: center
- Icon-Label Gap: 4px

### Colors

**Blue Color:**

- Default/Inactive: Background #EFF6FF (Blue-50), Text #2563EB (Blue-600)
- Icon Circle BG: #DBEAFE (Blue-100)
- Icon Stroke: #2563EB (Blue-600)
- Active: Background #2563EB (Blue-600), Icon Circle #3B82F6 (Blue-500)
- Focus Border: #7C3AED (Violet-600)

**Green Color:**

- Default/Inactive: Background #F0FDF4 (Green-50), Text #16A34A (Green-600)
- Icon Circle BG: #DCFCE7 (Green-100)
- Icon Stroke: #16A34A (Green-600)
- Active: Background #16A34A (Green-600), Icon Circle #22C55E (Green-500)
- Focus Border: #16A34A (Green-600)

**Yellow Color:**

- Default/Inactive: Background #FEFCE8 (Yellow-50), Text #CA8A04 (Yellow-600)
- Icon Circle BG: #FEF3C7 (Yellow-100)
- Icon Stroke: #CA8A04 (Yellow-600)
- Active: Background #CA8A04 (Yellow-600), Icon Circle #EAB308 (Yellow-500)
- Focus Border: #CA8A04 (Yellow-600)

### Behavior

- Only one tab can be active at a time
- Clicking an inactive tab emits `onTabChange` event with the new index
- Clicking the active tab does nothing
- Disabled state prevents all interactions
- Hover state applies automatically via CSS
- Focus state shows on keyboard navigation

## Examples

### Dashboard Navigation (Green)

```html
<storybook-tab-navigation
  variant="icon-text"
  size="md"
  color="green"
  [tabs]="[
    { label: 'Resumen', icon: true },
    { label: 'Análisis', icon: true },
    { label: 'Reportes', icon: true }
  ]"
  [activeIndex]="dashboardActiveTab"
  (onTabChange)="dashboardActiveTab = $event"
>
</storybook-tab-navigation>
```

### Request Management

```html
<storybook-tab-navigation
  variant="text"
  size="md"
  [tabs]="[
    { label: 'Solicitudes Realizadas', count: requestCounts.done },
    { label: 'En Proceso', count: requestCounts.inProgress },
    { label: 'Pendientes', count: requestCounts.pending }
  ]"
  [activeIndex]="activeRequestTab"
  (onTabChange)="onRequestTabChange($event)"
>
</storybook-tab-navigation>

<div [ngSwitch]="activeRequestTab">
  <div *ngSwitchCase="0"><!-- Done requests --></div>
  <div *ngSwitchCase="1"><!-- In progress --></div>
  <div *ngSwitchCase="2"><!-- Pending --></div>
</div>
```

### Settings Sections

```html
<storybook-tab-navigation
  variant="text"
  size="sm"
  [tabs]="[
    { label: 'General' },
    { label: 'Seguridad' },
    { label: 'Notificaciones' },
    { label: 'Privacidad' }
  ]"
  [activeIndex]="settingsTab"
  (onTabChange)="settingsTab = $event"
>
</storybook-tab-navigation>
```

### Profile Tabs

```html
<storybook-tab-navigation
  variant="icon-text"
  size="lg"
  [tabs]="[
    { label: 'Información del cliente', icon: true },
    { label: 'Detalles de pago', icon: true },
    { label: 'Historial de pedidos', icon: true }
  ]"
  [activeIndex]="profileTab"
  (onTabChange)="loadProfileSection($event)"
>
</storybook-tab-navigation>
```

## Use Cases

### When to Use Text Variant

- Dashboard sections with counters
- Settings navigation
- Simple category filters
- Content type switchers
- Status filters (with counts)

### When to Use Icon-Text Variant

- User profile sections
- Dashboard main sections
- Form step indicators
- Feature categories
- Multi-section forms

## Accessibility

- Uses `role="tablist"` for the container
- Each tab has `role="tab"`
- Active tab has `aria-selected="true"`
- Each tab has `aria-controls` pointing to its panel
- Disabled tabs have `disabled` attribute
- Keyboard navigation supported (Tab, Arrow keys)

```html
<!-- Rendered output -->
<div class="tab-navigation" role="tablist">
  <button
    class="tab-item tab-item-active"
    role="tab"
    aria-selected="true"
    aria-controls="tabpanel-0"
  >
    Solicitudes Realizadas (3)
  </button>
  <button class="tab-item" role="tab" aria-selected="false" aria-controls="tabpanel-1">
    Información del cliente
  </button>
</div>
```

## Component Architecture

```typescript
@Component({
  selector: 'storybook-tab-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
  styleUrls: ['./tab-navigation.css']
})
export class TabNavigationComponent {
  @Input() size: TabSize = 'md';
  @Input() variant: TabVariant = 'text';
  @Input() state: TabState = 'default';
  @Input() tabs: TabItem[] = [];
  @Input() activeIndex: number = 0;
  @Output() onTabChange = new EventEmitter<number>();

  get navigationClasses(): string[] { ... }
  getTabClasses(index: number): string[] { ... }
  getIconStroke(index: number): string { ... }
  handleTabClick(index: number): void { ... }
}
```

## Event Handling

### onTabChange Event

Emitted when a user clicks on an inactive tab.

```typescript
// Component class
export class MyComponent {
  currentTab = 0;

  handleTabChange(newIndex: number) {
    console.log(`Switching from tab ${this.currentTab} to ${newIndex}`);
    this.currentTab = newIndex;

    // Load data for new tab
    this.loadTabData(newIndex);
  }
}
```

```html
<!-- Template -->
<storybook-tab-navigation
  [tabs]="tabs"
  [activeIndex]="currentTab"
  (onTabChange)="handleTabChange($event)"
>
</storybook-tab-navigation>
```

## Styling

The component uses external CSS (`tab-navigation.css`) with:

- `.tab-navigation` - Container flex layout
- `.tab-item` - Base tab button styles
- `.tab-item-{size}` - Size-specific dimensions
- `.tab-item-{variant}` - Variant-specific layout
- `.tab-item-{state}` - State-specific colors
- `.tab-item-active` - Active tab styles
- `.tab-icon-content` - Icon-text layout
- `.tab-icon-circle` - Icon background circle
- `.tab-label` - Icon-text label

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - CSS Flexbox
  - CSS Grid
  - SVG
  - CSS Transitions
  - Angular 20+

## Performance

- Lightweight component (~3KB gzipped)
- No heavy JavaScript operations
- CSS transitions for smooth state changes
- Minimal DOM footprint
- Event delegation for tab clicks

## Builder.io Compatibility

This component is designed to be compatible with Builder.io:

1. **Standalone Component**: No module dependencies required
2. **Props System**: Simple @Input decorators map to Builder.io controls
3. **Event Emitters**: Standard @Output for interactions
4. **Self-contained**: All styles and logic encapsulated

### Builder.io Integration Example

When registering in Builder.io:

```typescript
Builder.registerComponent(TabNavigationComponent, {
  name: 'TabNavigation',
  inputs: [
    {
      name: 'variant',
      type: 'string',
      enum: ['text', 'icon-text'],
      defaultValue: 'text',
    },
    {
      name: 'size',
      type: 'string',
      enum: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    {
      name: 'state',
      type: 'string',
      enum: ['default', 'hover', 'active', 'focus', 'disabled'],
      defaultValue: 'default',
    },
    {
      name: 'color',
      type: 'string',
      enum: ['blue', 'green', 'yellow'],
      defaultValue: 'blue',
    },
    {
      name: 'tabs',
      type: 'list',
      subFields: [
        {
          name: 'label',
          type: 'string',
          required: true,
        },
        {
          name: 'count',
          type: 'number',
        },
        {
          name: 'icon',
          type: 'boolean',
          defaultValue: false,
        },
      ],
      defaultValue: [{ label: 'Tab 1' }, { label: 'Tab 2' }, { label: 'Tab 3' }],
    },
    {
      name: 'activeIndex',
      type: 'number',
      defaultValue: 0,
    },
  ],
});
```

## Best Practices

### DO ✓

- Use text variant for simple navigation with counters
- Use icon-text variant for visual categorization
- Provide meaningful tab labels
- Show counters when relevant (unread, pending items)
- Handle tab changes to update content
- Use appropriate size for the context
- Maintain consistent tab count (don't add/remove dynamically)

### DON'T ✗

- Don't use too many tabs (recommend max 5-7)
- Don't mix variants in the same navigation
- Don't change `activeIndex` without updating content
- Don't use for primary navigation (use proper nav menu)
- Don't omit labels in icon-text variant
- Don't use long labels that wrap
- Don't forget to handle `onTabChange` event

## Common Patterns

### Controlled Component

```typescript
export class MyComponent {
  activeTab = 0;

  tabs = [{ label: 'Overview', count: 5 }, { label: 'Details' }, { label: 'History', count: 12 }];

  handleTabChange(index: number) {
    this.activeTab = index;
  }
}
```

```html
<storybook-tab-navigation
  [tabs]="tabs"
  [activeIndex]="activeTab"
  (onTabChange)="handleTabChange($event)"
>
</storybook-tab-navigation>
```

### Tab Content Switching

```typescript
export class MyComponent {
  currentView = 0;

  switchView(index: number) {
    this.currentView = index;
    // Load data for new view
    this.loadData(index);
  }
}
```

```html
<storybook-tab-navigation
  variant="icon-text"
  size="md"
  [tabs]="viewTabs"
  [activeIndex]="currentView"
  (onTabChange)="switchView($event)"
>
</storybook-tab-navigation>

<div class="content">
  <div *ngIf="currentView === 0"><!-- View 1 --></div>
  <div *ngIf="currentView === 1"><!-- View 2 --></div>
  <div *ngIf="currentView === 2"><!-- View 3 --></div>
</div>
```

### Dynamic Counters

```typescript
export class MyComponent {
  requestCounts = {
    pending: 5,
    inProgress: 12,
    completed: 145,
  };

  get tabs() {
    return [
      { label: 'Pendientes', count: this.requestCounts.pending },
      { label: 'En Proceso', count: this.requestCounts.inProgress },
      { label: 'Completadas', count: this.requestCounts.completed },
    ];
  }
}
```

```html
<storybook-tab-navigation
  variant="text"
  [tabs]="tabs"
  [activeIndex]="activeRequestTab"
  (onTabChange)="activeRequestTab = $event"
>
</storybook-tab-navigation>
```

## Troubleshooting

### Tab not changing when clicked

**Problem**: `activeIndex` doesn't update when tab is clicked.

**Solution**: Make sure you're handling the `onTabChange` event and updating the `activeIndex` binding.

```html
<!-- Wrong -->
<storybook-tab-navigation [activeIndex]="0"></storybook-tab-navigation>

<!-- Correct -->
<storybook-tab-navigation [activeIndex]="currentTab" (onTabChange)="currentTab = $event">
</storybook-tab-navigation>
```

### Icon not showing in icon-text variant

**Problem**: Icon doesn't appear in icon-text tabs.

**Solution**: Ensure you set `icon: true` in the tab item.

```typescript
// Wrong
tabs = [{ label: 'Client Info' }];

// Correct
tabs = [{ label: 'Client Info', icon: true }];
```

### Tabs wrapping unexpectedly

**Problem**: Tabs wrap to multiple lines.

**Solution**: The component uses `flex-wrap: wrap` by default. Reduce tab count or use smaller size.

### Counter not showing

**Problem**: Counter doesn't display in text variant.

**Solution**: Ensure `count` is defined and not undefined.

```typescript
// Wrong
tabs = [{ label: 'Items', count: undefined }];

// Correct
tabs = [{ label: 'Items', count: 5 }];
```

## Related Components

- **Button**: Similar interactive element
- **Badge**: Can be combined with tabs for additional indicators
- **Card**: Often used as tab panel content container

## Version History

- **v1.0.0** - Initial release based on Figma design specifications
  - 2 variants (text, icon-text)
  - 3 sizes (sm, md, lg)
  - 5 states (default, hover, active, focus, disabled)
  - Tab array with labels, counters, and icons
  - Active index control
  - Event emission on tab change

## Future Enhancements

Potential features not included in current Figma design:

- Scrollable tabs for overflow
- Vertical tab orientation
- Custom icons per tab
- Badge indicators
- Loading states
- Animation transitions
- Lazy loading tab content
- URL-based routing integration
