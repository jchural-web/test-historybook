# Accordion Component with Table Integration

The `bsg-accordion` component provides collapsible/expandable tables and content with a clean, modern interface. It integrates seamlessly with the `bsg-table` component to create compact, space-efficient data displays.

## Component Selector

- **Selector**: `bsg-accordion`
- **Prefix**: `bsg-` (Builder System Grid)

## Usage

```html
<bsg-accordion
  [items]="accordionItems"
  size="md"
  variant="table-basic"
  (itemToggle)="onItemToggle($event)"
>
</bsg-accordion>
```

## Inputs

### `items: AccordionItem[]`

Array of accordion items to display. Each item can contain a table component.

**Interface**:

```typescript
interface AccordionItem {
  id: string;
  title: string;
  headerAction?: { label: string; variant?: string; size?: string };
  expanded?: boolean;
  // Table variant inputs
  tableVariant?: 'table-actions' | 'table-basic' | 'table-tabs' | 'list-content';
  tableColumns?: Array<{ key: string; label: string; width?: string }>;
  tableRows?: Array<any>;
  tablePagination?: any;
  showActionsColumn?: boolean;
  listItems?: Array<{ text: string }>;
  tabs?: Array<any>;
  activeTabIndex?: number;
  tabsPagination?: Array<any>;
}
```

**Example**:

```typescript
items = [
  {
    id: 'benefits',
    title: 'Beneficios Solicitados',
    tableVariant: 'table-actions',
    showActionsColumn: true,
    tableColumns: [
      { key: 'benefit', label: 'Beneficio', width: '200px' },
      { key: 'requester', label: 'Solicitante', width: '150px' }
    ],
    tableRows: [
      {
        benefit: 'Material PMI',
        requester: 'Bianca Mamani',
        actions: [
          { label: 'Aprobar', variant: 'approve' },
          { label: 'Rechazar', variant: 'reject' }
        ]
      }
    ],
    tablePagination: { ... }
  }
];
```

### `size: 'sm' | 'md' | 'lg'`

Controls the size of the accordion headers.

- `'sm'`: Small (12px padding, 14px font)
- `'md'`: Medium (16px padding, 16px font) - Default
- `'lg'`: Large (20px padding, 18px font)

**Default**: `'md'`

### `variant: 'default' | 'table-actions' | 'table-basic' | 'table-tabs' | 'list-content'`

Determines the accordion variant/styling based on table type.

**Default**: `'default'`

## Outputs

### `itemToggle`

Emitted when an accordion item is toggled.

**Event Data**:

```typescript
{
  itemIndex: number;
  expanded: boolean;
}
```

**Example**:

```html
<bsg-accordion (itemToggle)="onToggle($event)"></bsg-accordion>
```

```typescript
onToggle(event: { itemIndex: number; expanded: boolean }) {
  console.log(`Item ${event.itemIndex} is now ${event.expanded ? 'expanded' : 'collapsed'}`);
}
```

## Features

### Chevron Icon Positioning

- Located on the **right side** of the header
- Rotates 180° when item is expanded
- Uses blue color (#2563eb) by default
- Smooth rotation animation

### Table Integration

- Full integration with `bsg-table` component
- Supports all table variants:
  - **table-actions**: Action buttons for approve/reject workflows
  - **table-basic**: Standard tabular data with columns
  - **table-tabs**: Tabbed interface with multiple tables
  - **list-content**: List of features or benefits

### Accessibility

- ARIA labels and attributes
- Keyboard navigation support
- Focus management
- Semantic HTML structure

### Animation

- Smooth expand/collapse animation
- Chevron rotation animation
- Slide down/up content animation

## Size Variants

### Small (sm)

- Padding: 12px
- Font Size: 14px
- Ideal for compact layouts

### Medium (md) - Default

- Padding: 16px
- Font Size: 16px
- Standard size for most use cases

### Large (lg)

- Padding: 20px
- Font Size: 18px
- Ideal for larger screens or important content

## Content Variants (Table Types)

### Table Actions Variant

Use for approval workflows with action buttons:

```typescript
{
  id: 'approvals',
  title: 'Requests Pending Approval',
  tableVariant: 'table-actions',
  showActionsColumn: true,
  tableColumns: [...],
  tableRows: [
    {
      benefit: '...',
      requester: '...',
      actions: [
        { label: 'Approve', variant: 'approve' },
        { label: 'Reject', variant: 'reject' }
      ]
    }
  ]
}
```

### Table Basic Variant

Use for pricing tables or structured data:

```typescript
{
  id: 'pricing',
  title: 'Service Pricing',
  tableVariant: 'table-basic',
  tableColumns: [
    { key: 'service', label: 'Service', width: '200px' },
    { key: 'price', label: 'Price', width: '100px' }
  ],
  tableRows: [
    { service: 'Consulting', price: '$100/hr' }
  ]
}
```

### List Content Variant

Use for features or benefits lists:

```typescript
{
  id: 'features',
  title: 'Professional Plan Features',
  tableVariant: 'list-content',
  listItems: [
    { text: 'Official updated materials' },
    { text: 'Practice exam with 195 questions' },
    { text: 'Official certification' }
  ]
}
```

## CSS Classes

### Container Classes

- `.accordion-container` - Main accordion wrapper
- `.accordion-size-sm|md|lg` - Size variant
- `.accordion-variant-*` - Variant type

### Item Classes

- `.accordion-item` - Individual accordion item
- `.accordion-header` - Item header button
- `.accordion-header-expanded` - Header when expanded
- `.accordion-chevron` - Chevron icon
- `.accordion-chevron-open` - Chevron when open (rotated)
- `.accordion-content` - Content panel
- `.accordion-body` - Inner content wrapper

## Examples

### Basic Table Actions

```typescript
items = [
  {
    id: 'benefits-q1',
    title: 'Q1 Benefits (5 pending)',
    tableVariant: 'table-actions',
    showActionsColumn: true,
    tableColumns: [
      { key: 'benefit', label: 'Benefit', width: '200px' },
      { key: 'requester', label: 'Requester', width: '150px' }
    ],
    tableRows: [...]
  }
];
```

### Multiple Sections with Different States

```typescript
items = [
  {
    id: 'pending',
    title: 'Pending Approvals (5)',
    expanded: false,  // Initially collapsed
    ...
  },
  {
    id: 'approved',
    title: 'Approved (12)',
    expanded: true,   // Initially expanded
    ...
  }
];
```

### With Header Action Button

```typescript
items = [
  {
    id: 'benefits',
    title: 'Beneficios Solicitados',
    headerAction: {
      label: 'Nuevo mensaje',
      variant: 'default',
      size: 'md'
    },
    ...
  }
];
```

## Styling Customization

Override CSS to customize appearance:

```css
/* Change header background */
.accordion-header {
  background: #your-color;
}

/* Change chevron color */
.accordion-chevron {
  color: #your-color;
}

/* Change expanded header background */
.accordion-header-expanded {
  background: #your-color;
}
```

## Mobile Considerations

- Accordion headers adapt to small screens
- Chevron provides clear expand/collapse indication
- Tables within accordion reflow responsively
- Smooth animations work on mobile devices

## Comparison with Table

| Feature               | Accordion       | Table                    |
| --------------------- | --------------- | ------------------------ |
| Collapsible Rows      | ✅ Yes (native) | ❌ No                    |
| Multiple Visible Rows | ⚠️ Configurable | ✅ Yes                   |
| Space Efficient       | ✅ Excellent    | ❌ No (all rows visible) |
| Mobile Friendly       | ✅ Excellent    | ⚠️ Requires scroll       |
| Sorting               | ❌ No           | ✅ Yes                   |
| Filtering             | ❌ No           | ✅ Yes                   |

## Related Components

- **Table (bsg-table)** - For fixed tabular data display
- **Tab Navigation (bsg-tab-navigation)** - For tab-based navigation
- **Button (bsg-button)** - For action buttons within tables

## Best Practices

1. **Use Accordion when:**
   - Space is limited and content needs to be hidden/shown
   - Users benefit from focusing on one section at a time
   - Mobile optimization is a priority
   - Data is naturally grouped or hierarchical

2. **Use Table when:**
   - Displaying large datasets that need to be compared
   - Sorting/filtering functionality is required
   - All rows should be visible simultaneously
   - Data is strictly tabular/columnar

3. **Header Clarity:**
   - Write descriptive titles that indicate what's in each section
   - Include counts when relevant: "Approvals (5 pending)"
   - Use consistent naming across accordion items

4. **Performance:**
   - Tables with large datasets will render all rows when expanded
   - Consider pagination within accordion items
   - Use `tablePagination` property for large datasets

## Accessibility

- Proper ARIA labels on headers and content areas
- Keyboard navigation with arrow keys
- Focus management on expand/collapse
- Screen reader friendly

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Release Notes

- **v1.0.0**: Initial release with Table integration
  - Support for all table variants
  - Chevron icon on right side
  - Smooth animations
  - Full accessibility support
