# Table Component

The Table is a **composite component** that displays information in four different formats: table-basic, table-actions, table-tabs, and list-content. It reuses existing components from the design system (Button, Badge, TabNavigation, Pagination, Separator, Label) and provides a consistent container with collapsible functionality.

## Features

- **4 display variants**: table-basic, table-actions, table-tabs, list-content
- **Composable architecture**: Reuses existing components
- **Collapsible/non-collapsible**: Optional expand/collapse functionality
- **Table variants**: Data grids with pagination and optional actions
- **Tabs variant**: Tabbed interface with tables
- **List variant**: Numbered sequential list
- **Badge & label support**: Can render badges/labels in table cells
- **Event-driven**: Emits events for all interactions
- **Pixel-perfect**: Matches Figma design specifications exactly
- **Accessible**: ARIA attributes and semantic HTML
- **Angular 20 standalone component**
- **Builder.io compatible**

## Import

```typescript
import { UITableComponent } from './ui-table.component';
```

## Component Composition

This component **reuses** the following existing components:

- **ButtonComponent** - For action buttons in table-actions variant
- **BadgeComponent** - For badges/tags in cells
- **LabelComponent** - For labels in cells
- **TabNavigationComponent** - For tabs variant
- **PaginationComponent** - For table pagination
- **SeparatorComponent** - For dividers

**Important**: This component does NOT redefine styles from child components. It relies on their existing implementations.

## Variants

### 1. table-basic

Standard table with columns, rows, and pagination. Perfect for displaying structured data.

**Use Cases:**

- Price lists
- Service catalogs
- Data grids
- Reports

**Example:**

```html
<storybook-ui-table
  title="Tarifario de Trámites y Servicios"
  variant="table-basic"
  [collapsible]="true"
  [collapsed]="false"
  [tableColumns]="[
    { key: 'number', label: 'N°', width: '50px' },
    { key: 'concept', label: 'Concepto', width: '218px' },
    { key: 'description', label: 'Descripción', width: '622px' },
    { key: 'amount', label: 'Monto (PEN)', width: '89px' }
  ]"
  [tableRows]="[
    {
      number: '1',
      concept: 'Costos Gestión de Cobranza',
      description: 'Aplica cuando se realicen...',
      amount: '30.00'
    }
  ]"
  [tablePagination]="{
    currentPage: 1,
    totalPages: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    totalItems: 1,
    rangeLabel: '1 - 1 de 1 ítems'
  }"
>
</storybook-ui-table>
```

### 2. table-actions

Table with action buttons (Aprobar/Rechazar) and badges in cells. Perfect for approval workflows and administrative actions.

**Use Cases:**

- Approval workflows
- Request management
- Administrative actions
- Status tracking

**Example:**

```html
<storybook-ui-table
  title="Beneficios Solicitados (Coordinador)"
  variant="table-actions"
  [collapsible]="true"
  [collapsed]="false"
  [showActionsColumn]="true"
  actionsColumnLabel="Aprobar solicitud"
  actionsColumnWidth="120px"
  [tableColumns]="[
    { key: 'benefit', label: 'Beneficio solicitado', width: '210px' },
    { key: 'coordinator', label: 'Coordinador', width: '107px' }
  ]"
  [tableRows]="[
    {
      benefit: 'Acceso al material oficial...',
      coordinator: 'Bianca Mamani',
      actions: [
        { label: 'Aprobar', variant: 'approve' },
        { label: 'Rechazar', variant: 'reject' }
      ]
    }
  ]"
  [tablePagination]="..."
  (rowAction)="onRowAction($event)"
>
</storybook-ui-table>
```

### 3. table-tabs

Tabbed interface with tables. Each tab contains its own table with pagination.

**Use Cases:**

- Message history
- Categorized data
- Multi-view tables
- Filtered datasets

**Example:**

```html
<storybook-ui-table
  title="Historial de mensajes"
  variant="table-tabs"
  [collapsible]="true"
  [collapsed]="false"
  [activeTabIndex]="0"
  [headerAction]="{
    label: 'Nuevo mensaje',
    variant: 'default',
    size: 'md'
  }"
  [tabs]="[
    {
      label: 'Correos recibidos',
      count: 3,
      tableData: {
        columns: [
          { key: 'date', label: 'Fecha', width: '158px' },
          { key: 'subject', label: 'Asunto', width: '280px' }
        ],
        rows: [
          {
            date: '15/04/2024 | 10:15 AM',
            subject: 'Confirmación de inscripción'
          }
        ]
      }
    }
  ]"
  [tabsPagination]="[...]"
  (tabChange)="onTabChange($event)"
  (headerActionClick)="onNewMessage()"
>
</storybook-ui-table>
```

### 4. list-content

Numbered list format for sequential content. No table structure.

**Use Cases:**

- Feature lists
- Benefits descriptions
- Sequential instructions
- Version features

**Example:**

```html
<storybook-ui-table
  title="Versión Profesional"
  variant="list-content"
  [collapsible]="true"
  [collapsed]="false"
  [listItems]="[
    {
      text: 'Aplicarás técnicas avanzadas en el diseño de arquitecturas seguras.'
    },
    {
      text: 'Obtendrás acceso al simulador en español BSG AWS - CSA Tento®.'
    }
  ]"
>
</storybook-ui-table>
```

## Props

### Common Props

| Prop           | Type                                                                 | Default                   | Description                            |
| -------------- | -------------------------------------------------------------------- | ------------------------- | -------------------------------------- |
| `title`        | `string`                                                             | `'Título del Contenedor'` | Container title shown in header        |
| `variant`      | `'table-basic' \| 'table-actions' \| 'table-tabs' \| 'list-content'` | `'table-basic'`           | Display variant                        |
| `collapsible`  | `boolean`                                                            | `true`                    | Whether the container can be collapsed |
| `collapsed`    | `boolean`                                                            | `false`                   | Initial collapsed state                |
| `headerAction` | `{ label: string; variant?: string; size?: string }`                 | `undefined`               | Optional header action button          |

### Table Variants Props (table-basic, table-actions)

| Prop              | Type            | Default   | Description              |
| ----------------- | --------------- | --------- | ------------------------ |
| `tableColumns`    | `TableColumn[]` | `[]`      | Column definitions       |
| `tableRows`       | `TableRow[]`    | `[]`      | Table data rows          |
| `tablePagination` | `object`        | See below | Pagination configuration |

**TableColumn Interface:**

```typescript
interface TableColumn {
  key: string; // Row property key
  label: string; // Column header label
  width?: string; // Optional column width (e.g., '200px')
}
```

**TableRow Interface:**

```typescript
interface TableRow {
  [key: string]: any; // Dynamic properties based on columns

  // Optional badge rendering:
  // Add '_badge' suffix to render as Badge component
  // Add '_badge_variant' suffix to specify badge variant
  // Add '_badge_size' suffix to specify badge size

  // Optional label rendering:
  // Add '_label' suffix to render as Label component
}
```

**Example with Badges:**

```typescript
{
  status: 'Activo',
  status_badge: true,                    // Render as Badge
  status_badge_variant: 'success',       // Badge variant
  status_badge_size: 'default',          // Badge size
}
```

**tablePagination Object:**

```typescript
{
  currentPage: number;         // Current page (1-based)
  totalPages: number;          // Total number of pages
  pageSize: number;            // Items per page
  pageSizeOptions: number[];   // Available page sizes
  totalItems: number;          // Total items count
  rangeLabel: string;          // Range text (e.g., "1 - 5 de 10 ítems")
}
```

### Table-Actions Specific Props

| Prop                 | Type      | Default      | Description                 |
| -------------------- | --------- | ------------ | --------------------------- |
| `showActionsColumn`  | `boolean` | `true`       | Show actions column         |
| `actionsColumnLabel` | `string`  | `'Acciones'` | Actions column header label |
| `actionsColumnWidth` | `string`  | `'200px'`    | Actions column width        |

**Actions in Rows:**

```typescript
{
  // ... other row data ...
  actions: [
    { label: 'Aprobar', variant: 'approve' }, // Green button
    { label: 'Rechazar', variant: 'reject' }, // Red button
    { label: 'Ver', variant: 'view' }, // Light blue button
  ];
}
```

### List Variant Props

| Prop        | Type         | Default | Description |
| ----------- | ------------ | ------- | ----------- |
| `listItems` | `ListItem[]` | `[]`    | List items  |

**ListItem Interface:**

```typescript
interface ListItem {
  text: string; // Item text content
}
```

### Tabs Variant Props

| Prop             | Type          | Default | Description                |
| ---------------- | ------------- | ------- | -------------------------- |
| `tabs`           | `TabConfig[]` | `[]`    | Tab configurations         |
| `activeTabIndex` | `number`      | `0`     | Currently active tab index |
| `tabsPagination` | `object[]`    | `[]`    | Pagination per tab (array) |

**TabConfig Interface:**

```typescript
interface TabConfig {
  label: string; // Tab label
  count?: number; // Optional counter badge
  icon?: boolean; // Whether to show icon
  tableData?: {
    columns: TableColumn[]; // Table columns
    rows: TableRow[]; // Table rows
  };
}
```

## Events

### Common Events

| Event               | Type                    | Description                         |
| ------------------- | ----------------------- | ----------------------------------- |
| `collapseChange`    | `EventEmitter<boolean>` | Emitted when collapse state changes |
| `headerActionClick` | `EventEmitter<void>`    | Emitted when header action clicked  |

### Table Variant Events

| Event                 | Type                   | Description                         |
| --------------------- | ---------------------- | ----------------------------------- |
| `tablePageChange`     | `EventEmitter<number>` | Emitted when page changes           |
| `tablePageSizeChange` | `EventEmitter<number>` | Emitted when page size changes      |
| `tableRefresh`        | `EventEmitter<void>`   | Emitted when refresh button clicked |

### Table-Actions Events

| Event       | Type                                                    | Description                     |
| ----------- | ------------------------------------------------------- | ------------------------------- |
| `rowAction` | `EventEmitter<{rowIndex: number, action: TableAction}>` | Emitted when row action clicked |

### Tabs Variant Events

| Event               | Type                                                 | Description                                        |
| ------------------- | ---------------------------------------------------- | -------------------------------------------------- |
| `tabChange`         | `EventEmitter<number>`                               | Emitted when active tab changes                    |
| `tabPageChange`     | `EventEmitter<{tabIndex: number, page: number}>`     | Emitted when tab page changes                      |
| `tabPageSizeChange` | `EventEmitter<{tabIndex: number, pageSize: number}>` | Emitted when tab page size changes                 |
| `tabRefresh`        | `EventEmitter<number>`                               | Emitted when tab refresh clicked (sends tab index) |

## Design Specifications

### Border System (STRICT - DO NOT MODIFY)

The border system follows Figma exactly:

1. **External Container Border**
   - Border: 1px solid #CBD5E1 (neutral-300)
   - Border radius: 12px
   - Wraps entire component

2. **Table Content Wrapper Border** (Inner gray frame)
   - Border: 1px solid #CBD5E1 (neutral-300)
   - Border radius: 6px
   - Margin: 20px from container edge
   - Wraps table header + body + pagination

3. **Row Separators**
   - Border-bottom: 1px solid #CBD5E1
   - Between rows only (not after last row)

**NO additional borders, shadows, or separators are allowed.**

### Colors

- **Header background**: #DBEAFE (Blue-100)
- **Header title**: #2563EB (Blue-600), 16px, 600 weight
- **Icon**: #2563EB circle with white checkmark
- **Table header background**: #EFF6FF (Blue-50)
- **Column headers**: #2563EB, 14px, 500 weight
- **Row cells**: #334155 (neutral-700), 14px, 500 weight
- **Borders**: #CBD5E1 (neutral-300)

### Spacing

- **Header padding**: 20px
- **Header gap**: 14px between icon and title
- **Table header padding**: 12px vertical, 20px horizontal
- **Table body padding**: 0px vertical, 20px horizontal
- **Row padding**: 20px vertical, 0px horizontal
- **Column gap**: 16px
- **Pagination padding**: 20px all sides
- **List item gap**: 24px between items
- **Tabs content top margin**: 24px

### Typography

All text uses **Inter** font family with fallbacks:

- Header title: 16px, 600 weight
- Column headers: 14px, 500 weight
- Cell content: 14px, 500 weight
- List items: 14px, 500 weight

## Examples

### Complete Table-Actions Example

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits-table',
  template: `
    <storybook-ui-table
      title="Beneficios Solicitados (Coordinador)"
      variant="table-actions"
      [collapsible]="true"
      [collapsed]="false"
      [showActionsColumn]="true"
      actionsColumnLabel="Aprobar solicitud"
      actionsColumnWidth="120px"
      [tableColumns]="columns"
      [tableRows]="rows"
      [tablePagination]="pagination"
      (rowAction)="handleRowAction($event)"
      (tablePageChange)="handlePageChange($event)"
    >
    </storybook-ui-table>
  `,
})
export class BenefitsTableComponent {
  columns = [
    { key: 'benefit', label: 'Beneficio solicitado', width: '210px' },
    { key: 'program', label: 'Programa', width: '141px' },
    { key: 'coordinator', label: 'Coordinador', width: '107px' },
  ];

  rows = [
    {
      benefit: 'Acceso al material oficial del PMI...',
      program: 'Curso Oficial de Preparación...',
      coordinator: 'Bianca Mamani',
      actions: [
        { label: 'Aprobar', variant: 'approve' },
        { label: 'Rechazar', variant: 'reject' },
      ],
    },
  ];

  pagination = {
    currentPage: 1,
    totalPages: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    totalItems: 1,
    rangeLabel: '1 - 1 de 1 ítems',
  };

  handleRowAction(event: { rowIndex: number; action: any }) {
    console.log('Action clicked:', event.action.label, 'for row', event.rowIndex);

    if (event.action.variant === 'approve') {
      // Handle approval logic
    } else if (event.action.variant === 'reject') {
      // Handle rejection logic
    }
  }

  handlePageChange(page: number) {
    console.log('Page changed to:', page);
    // Fetch new data
  }
}
```

### Complete Table-Tabs Example

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-messages-table',
  template: `
    <storybook-ui-table
      title="Historial de mensajes"
      variant="table-tabs"
      [collapsible]="true"
      [collapsed]="false"
      [activeTabIndex]="activeTab"
      [headerAction]="newMessageAction"
      [tabs]="tabs"
      [tabsPagination]="tabsPagination"
      (tabChange)="handleTabChange($event)"
      (headerActionClick)="handleNewMessage()"
    >
    </storybook-ui-table>
  `,
})
export class MessagesTableComponent {
  activeTab = 0;

  newMessageAction = {
    label: 'Nuevo mensaje',
    variant: 'default',
    size: 'md',
  };

  tabs = [
    {
      label: 'Correos recibidos',
      count: 2,
      tableData: {
        columns: [
          { key: 'date', label: 'Fecha', width: '158px' },
          { key: 'subject', label: 'Asunto', width: '280px' },
          { key: 'sender', label: 'Remitente', width: '207px' },
        ],
        rows: [
          {
            date: '15/04/2024 | 10:15 AM',
            subject: 'Confirmación de inscripción',
            sender: 'admisiones@bsginstitute.com',
          },
        ],
      },
    },
    {
      label: 'Correos enviados',
      count: 0,
      tableData: {
        columns: [
          { key: 'date', label: 'Fecha', width: '158px' },
          { key: 'subject', label: 'Asunto', width: '280px' },
        ],
        rows: [],
      },
    },
  ];

  tabsPagination = [
    {
      currentPage: 1,
      totalPages: 1,
      pageSize: 5,
      pageSizeOptions: [5, 10, 20],
      totalItems: 1,
      rangeLabel: '1 - 1 de 1 ítems',
    },
    {
      currentPage: 1,
      totalPages: 1,
      pageSize: 5,
      pageSizeOptions: [5, 10, 20],
      totalItems: 0,
      rangeLabel: '0 - 0 de 0 ítems',
    },
  ];

  handleTabChange(index: number) {
    this.activeTab = index;
    console.log('Tab changed to:', index);
    // Load data for new tab
  }

  handleNewMessage() {
    console.log('New message clicked');
    // Open new message dialog
  }
}
```

## Best Practices

1. **Always specify column widths** for consistent table layout
2. **Use badges/labels** for status indicators in cells
3. **Provide meaningful pagination labels** (e.g., "1 - 5 de 10 ítems")
4. **Handle all events** emitted by the component
5. **Match action variants** to their semantic meaning (approve=green, reject=red)
6. **Keep list items concise** but descriptive
7. **Use collapsible** when content can be hidden to save space
8. **Use non-collapsible** for critical information
9. **Test responsive behavior** on mobile devices
10. **Never modify border styles** - they match Figma exactly

## Accessibility

The component includes:

- ARIA attributes (`aria-expanded`, `aria-label`)
- Semantic HTML (`<table>` structure implied)
- Keyboard navigation support (through child components)
- Screen reader support
- Focus management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
