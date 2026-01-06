# InfoContainer Component

The InfoContainer is a **composite component** that displays information in three different formats: table, list, or tabs. It reuses existing components from the design system (TabNavigation, Pagination, Separator, Label) and provides a consistent container with collapsible functionality.

## Features

- **3 display variants**: table, list, tabs
- **Composable architecture**: Reuses existing components
- **Collapsible header**: Optional expand/collapse functionality
- **Table variant**: Data grid with pagination
- **List variant**: Bullet-point list with intro text
- **Tabs variant**: Tabbed interface with tables and pagination per tab
- **Label support**: Can render labels/tags in table cells
- **Event-driven**: Emits events for all interactions
- **Pixel-perfect**: Matches Figma design specifications
- **Accessible**: ARIA attributes and semantic HTML
- **Angular 20 standalone component**
- **Builder.io compatible**

## Import

```typescript
import { InfoContainerComponent } from './info-container.component';
```

## Component Composition

This component **reuses** the following existing components:
- **TabNavigationComponent** - For tabs variant
- **PaginationComponent** - For table and tabs pagination
- **SeparatorComponent** - For dividers
- **LabelComponent** - For tags and badges in cells

**Important**: This component does NOT redefine styles from child components. It relies on their existing implementations.

## Basic Usage

### Table Variant

```html
<storybook-info-container
  title="Tarifario de Trámites y Servicios"
  variant="table"
  [collapsible]="true"
  [collapsed]="false"
  [tableColumns]="[
    { key: 'number', label: 'N°', width: '50px' },
    { key: 'concept', label: 'Concepto', width: '210px' },
    { key: 'description', label: 'Descripción', width: '600px' },
    { key: 'amount', label: 'Monto (PEN)', width: '100px' }
  ]"
  [tableRows]="[
    {
      number: '1',
      concept: 'Costos Gestión de Cobranza',
      description: 'Descripción del concepto...',
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
  (tablePageChange)="onPageChange($event)">
</storybook-info-container>
```

### List Variant

```html
<storybook-info-container
  title="Metodología Online de este Programa"
  variant="list"
  [collapsible]="true"
  [collapsed]="false"
  listIntro="La metodología consta de los siguientes componentes:"
  [listItems]="[
    { text: 'Sesiones de clases grabadas publicadas en el Aula Virtual.' },
    { text: 'Auto-evaluaciones semanales.' },
    { text: 'Interacción con el profesor a través del foro virtual.' }
  ]">
</storybook-info-container>
```

### Tabs Variant

```html
<storybook-info-container
  title="Solicitud de cambios"
  variant="tabs"
  [collapsible]="true"
  [collapsed]="false"
  [activeTabIndex]="0"
  [tabs]="[
    {
      label: 'Solicitudes Pendientes',
      count: 1,
      tableData: {
        columns: [
          { key: 'type', label: 'Tipo de Solicitud', width: '150px' },
          { key: 'value', label: 'Valor', width: '200px' }
        ],
        rows: [
          { type: 'Subestado', value: 'Pendiente' }
        ]
      }
    },
    {
      label: 'Solicitudes Realizadas',
      count: 3,
      tableData: { columns: [], rows: [] }
    }
  ]"
  [tabsPagination]="[
    {
      currentPage: 1,
      totalPages: 1,
      pageSize: 5,
      pageSizeOptions: [5, 10, 20],
      totalItems: 1,
      rangeLabel: '1 - 1 de 1 ítems'
    },
    {
      currentPage: 1,
      totalPages: 1,
      pageSize: 5,
      pageSizeOptions: [5, 10, 20],
      totalItems: 3,
      rangeLabel: '1 - 3 de 3 ítems'
    }
  ]"
  (tabChange)="onTabChange($event)"
  (tabPageChange)="onTabPageChange($event)">
</storybook-info-container>
```

## Props

### Common Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Título del Contenedor'` | Container title shown in header |
| `variant` | `'table' \| 'list' \| 'tabs'` | `'table'` | Display variant |
| `collapsible` | `boolean` | `true` | Whether the container can be collapsed |
| `collapsed` | `boolean` | `false` | Initial collapsed state |

### Table Variant Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tableColumns` | `TableColumn[]` | `[]` | Column definitions |
| `tableRows` | `TableRow[]` | `[]` | Table data rows |
| `tablePagination` | `object` | See below | Pagination configuration |

**TableColumn Interface:**
```typescript
interface TableColumn {
  key: string;        // Row property key
  label: string;      // Column header label
  width?: string;     // Optional column width (e.g., '200px')
}
```

**TableRow Interface:**
```typescript
interface TableRow {
  [key: string]: any;  // Dynamic properties based on columns
  
  // Optional label rendering:
  // Add '_label' suffix to render as Label component
  // Add '_label_variant' suffix to specify label variant
}
```

**Example with Labels:**
```typescript
{
  status: 'Activo',
  status_label: true,                    // Render as Label
  status_label_variant: 'success',       // Label variant
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

### List Variant Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `listIntro` | `string` | `''` | Introduction text before list |
| `listItems` | `ListItem[]` | `[]` | List items |

**ListItem Interface:**
```typescript
interface ListItem {
  text: string;  // Item text content
}
```

### Tabs Variant Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabConfig[]` | `[]` | Tab configurations |
| `activeTabIndex` | `number` | `0` | Currently active tab index |
| `tabsPagination` | `object[]` | `[]` | Pagination per tab (array) |

**TabConfig Interface:**
```typescript
interface TabConfig {
  label: string;               // Tab label
  count?: number;              // Optional counter badge
  icon?: boolean;              // Whether to show icon
  tableData?: {
    columns: TableColumn[];    // Table columns
    rows: TableRow[];          // Table rows
  };
}
```

## Events

### Common Events

| Event | Type | Description |
|-------|------|-------------|
| `collapseChange` | `EventEmitter<boolean>` | Emitted when collapse state changes |

### Table Variant Events

| Event | Type | Description |
|-------|------|-------------|
| `tablePageChange` | `EventEmitter<number>` | Emitted when page changes |
| `tablePageSizeChange` | `EventEmitter<number>` | Emitted when page size changes |
| `tableRefresh` | `EventEmitter<void>` | Emitted when refresh button clicked |

### Tabs Variant Events

| Event | Type | Description |
|-------|------|-------------|
| `tabChange` | `EventEmitter<number>` | Emitted when active tab changes |
| `tabPageChange` | `EventEmitter<{tabIndex: number, page: number}>` | Emitted when tab page changes |
| `tabPageSizeChange` | `EventEmitter<{tabIndex: number, pageSize: number}>` | Emitted when tab page size changes |
| `tabRefresh` | `EventEmitter<number>` | Emitted when tab refresh clicked (sends tab index) |

## Variants

### Table Variant

Displays data in a table format with column headers, rows, and pagination at the bottom.

**Features:**
- Customizable columns with width
- Label support for cell content
- Separator between header and body
- Pagination with refresh

**Use Cases:**
- Price lists
- Service catalogs
- Data grids
- Reports

### List Variant

Displays content as a bullet-point list with optional introduction text.

**Features:**
- Introduction paragraph
- Bullet-point items
- Clean, simple layout
- No pagination

**Use Cases:**
- Methodology descriptions
- Feature lists
- Instructions
- Requirements

### Tabs Variant

Displays multiple tables organized in tabs with individual pagination per tab.

**Features:**
- Tab navigation with counters
- Table per tab
- Independent pagination per tab
- Label support in tables

**Use Cases:**
- Request management
- Status tracking
- Historical records
- Multi-category data

## Usage Examples

### Complete Table Example

```typescript
export class MyComponent {
  tableColumns = [
    { key: 'id', label: 'ID', width: '80px' },
    { key: 'name', label: 'Nombre', width: '200px' },
    { key: 'status', label: 'Estado', width: '150px' },
    { key: 'date', label: 'Fecha', width: '180px' },
  ];

  tableRows = [
    {
      id: '001',
      name: 'Proyecto Alpha',
      status: 'Activo',
      status_label: true,
      status_label_variant: 'success',
      date: '10/12/2025',
    },
    {
      id: '002',
      name: 'Proyecto Beta',
      status: 'Pendiente',
      status_label: true,
      status_label_variant: 'success-light',
      date: '09/12/2025',
    },
  ];

  pagination = {
    currentPage: 1,
    totalPages: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    totalItems: 2,
    rangeLabel: '1 - 2 de 2 ítems',
  };

  onPageChange(page: number) {
    console.log('Page changed to:', page);
    // Load new data
  }

  onPageSizeChange(size: number) {
    console.log('Page size changed to:', size);
    // Update pagination
  }

  onRefresh() {
    console.log('Refreshing table data');
    // Reload data
  }
}
```

```html
<storybook-info-container
  title="Listado de Proyectos"
  variant="table"
  [tableColumns]="tableColumns"
  [tableRows]="tableRows"
  [tablePagination]="pagination"
  (tablePageChange)="onPageChange($event)"
  (tablePageSizeChange)="onPageSizeChange($event)"
  (tableRefresh)="onRefresh()">
</storybook-info-container>
```

### Complete Tabs Example

```typescript
export class MyComponent {
  activeTab = 0;
  
  tabs: TabConfig[] = [
    {
      label: 'Solicitudes Pendientes',
      count: 1,
      tableData: {
        columns: [
          { key: 'type', label: 'Tipo', width: '150px' },
          { key: 'requester', label: 'Solicitante', width: '150px' },
          { key: 'date', label: 'Fecha', width: '180px' },
        ],
        rows: [
          {
            type: 'Cambio de estado',
            type_label: true,
            type_label_variant: 'success-light',
            requester: 'Juan Pérez',
            date: '08/12/2025',
          },
        ],
      },
    },
    {
      label: 'Solicitudes Realizadas',
      count: 5,
      tableData: {
        columns: [
          { key: 'type', label: 'Tipo', width: '150px' },
          { key: 'requester', label: 'Solicitante', width: '150px' },
          { key: 'date', label: 'Fecha', width: '180px' },
        ],
        rows: [
          {
            type: 'Cambio de asignación',
            type_label: true,
            type_label_variant: 'success',
            requester: 'María García',
            date: '07/12/2025',
          },
        ],
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
      totalItems: 5,
      rangeLabel: '1 - 5 de 5 ítems',
    },
  ];

  onTabChange(index: number) {
    this.activeTab = index;
    console.log('Tab changed to:', index);
  }

  onTabPageChange(event: { tabIndex: number; page: number }) {
    console.log(`Tab ${event.tabIndex} page changed to ${event.page}`);
  }
}
```

```html
<storybook-info-container
  title="Gestión de Solicitudes"
  variant="tabs"
  [tabs]="tabs"
  [activeTabIndex]="activeTab"
  [tabsPagination]="tabsPagination"
  (tabChange)="onTabChange($event)"
  (tabPageChange)="onTabPageChange($event)">
</storybook-info-container>
```

## Design Specifications

### Header

**Layout:**
- Display: flex
- Align items: center
- Gap: 14px
- Padding: 20px
- Background: #DBEAFE (Blue-100)
- Border radius: 12px (top only)

**Icon:**
- Size: 28×28px
- Blue circle: #2563EB (Blue-600)
- White checkmark inside

**Title:**
- Color: #2563EB (Blue-600)
- Font size: 16px
- Font weight: 600
- Flex: 1 (takes remaining space)

**Collapse Button:**
- Size: 24×24px
- Background: transparent
- Icon: chevron-up (Blue-600)
- Rotates 180° when collapsed
- Only shown if `collapsible="true"`

### Body - Table Variant

**Table Header:**
- Background: #EFF6FF (Blue-50)
- Color: #2563EB (Blue-600)
- Font size: 14px
- Font weight: 500
- Padding: 12px 0

**Table Rows:**
- Color: #334155 (neutral-700)
- Font size: 14px
- Font weight: 500
- Padding: 20px 0
- Border bottom: 1px solid #CBD5E1

**Pagination:**
- Separator above (1px solid #CBD5E1)
- Padding: 20px
- Uses Pagination component

### Body - List Variant

**Introduction:**
- Color: #1E293B (neutral-800)
- Font size: 14px
- Font weight: 500
- Margin bottom: 16px

**List Items:**
- Color: #1E293B (neutral-800)
- Font size: 14px
- Font weight: 500
- Padding: 10px 0 10px 24px (for bullet)
- Bullet: 6px circle, #1E293B

### Body - Tabs Variant

**Tab Navigation:**
- Uses TabNavigation component
- Margin bottom: 24px

**Tab Content:**
- Each tab contains a table
- Table structure same as table variant
- Independent pagination per tab
- Labels rendered using Label component

## Accessibility

- **Header**: Uses `<h2>` for title (semantic heading)
- **Collapse button**: Has `aria-expanded` and `aria-label` attributes
- **Tables**: Proper table structure with headers
- **Lists**: Uses semantic `<ul>` and `<li>` elements
- **Keyboard navigation**: All interactive elements are keyboard accessible

## Component Architecture

```typescript
@Component({
  selector: 'storybook-info-container',
  standalone: true,
  imports: [
    CommonModule,
    TabNavigationComponent,    // Reused
    PaginationComponent,       // Reused
    SeparatorComponent,        // Reused
    LabelComponent,            // Reused
  ],
  // ...
})
export class InfoContainerComponent {
  @Input() title: string;
  @Input() variant: InfoContainerVariant;
  @Input() collapsible: boolean;
  @Input() collapsed: boolean;
  
  // Table variant
  @Input() tableColumns: TableColumn[];
  @Input() tableRows: TableRow[];
  @Input() tablePagination: object;
  
  // List variant
  @Input() listIntro: string;
  @Input() listItems: ListItem[];
  
  // Tabs variant
  @Input() tabs: TabConfig[];
  @Input() activeTabIndex: number;
  @Input() tabsPagination: object[];
  
  // Events
  @Output() collapseChange = new EventEmitter<boolean>();
  @Output() tabChange = new EventEmitter<number>();
  @Output() tablePageChange = new EventEmitter<number>();
  // ... more events
}
```

## Best Practices

### DO ✓

- **Reuse child components**: Use TabNavigation, Pagination, Separator, Label
- **Provide complete data**: Set all required props for chosen variant
- **Calculate pagination**: Ensure rangeLabel matches currentPage and pageSize
- **Use labels consistently**: Add `_label` suffix for label rendering
- **Handle events**: Listen to events and update state accordingly
- **Set column widths**: Specify widths for better table layout

### DON'T ✗

- **Don't modify child component styles**: Let them use their own styles
- **Don't mix variants**: Choose one variant and provide appropriate props
- **Don't hardcode pagination**: Calculate rangeLabel dynamically
- **Don't forget events**: Always handle page changes and refreshes
- **Don't use absolute positioning**: Component is responsive by design
- **Don't duplicate logic**: Rely on child components for their functionality

## Builder.io Compatibility

This component is designed to be compatible with Builder.io:

1. **Standalone Component**: No module dependencies
2. **Props System**: Simple @Input decorators
3. **Event Emitters**: Standard @Output for interactions
4. **Composable**: Reuses existing design system components
5. **Self-contained**: Styles and logic encapsulated

### Builder.io Registration Example

```typescript
import { Builder } from '@builder.io/sdk';
import { InfoContainerComponent } from './info-container.component';

Builder.registerComponent(InfoContainerComponent, {
  name: 'InfoContainer',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Título del Contenedor',
    },
    {
      name: 'variant',
      type: 'string',
      enum: ['table', 'list', 'tabs'],
      defaultValue: 'table',
    },
    {
      name: 'collapsible',
      type: 'boolean',
      defaultValue: true,
    },
    {
      name: 'collapsed',
      type: 'boolean',
      defaultValue: false,
    },
    {
      name: 'tableColumns',
      type: 'list',
      subFields: [
        { name: 'key', type: 'string', required: true },
        { name: 'label', type: 'string', required: true },
        { name: 'width', type: 'string' },
      ],
      showIf: 'options.get("variant") === "table"',
    },
    {
      name: 'tableRows',
      type: 'list',
      subFields: [
        { name: 'data', type: 'object' },
      ],
      showIf: 'options.get("variant") === "table"',
    },
    // ... more inputs
  ],
});
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - CSS Flexbox
  - CSS Grid
  - SVG
  - CSS Transitions
  - Angular 20+

## Performance

- Lightweight composite component
- Delegates rendering to child components
- Minimal DOM operations
- CSS transitions for smooth interactions
- Event-based architecture

## Related Components

- **TabNavigation**: Used for tabs variant
- **Pagination**: Used for table and tabs variants
- **Separator**: Used for dividers
- **Label**: Used for tags and badges in cells

## Version History

- **v1.0.0** - Initial release
  - 3 variants: table, list, tabs
  - Collapsible header
  - Reuses existing components
  - Event-driven architecture
  - Builder.io compatible

## Troubleshooting

### Table not showing

**Problem**: Table variant shows empty.

**Solution**: Ensure both `tableColumns` and `tableRows` are provided with matching keys.

```typescript
// Correct
tableColumns = [{ key: 'name', label: 'Nombre' }];
tableRows = [{ name: 'Value' }];  // 'name' key matches

// Wrong
tableColumns = [{ key: 'name', label: 'Nombre' }];
tableRows = [{ title: 'Value' }];  // 'title' doesn't match 'name'
```

### Labels not rendering

**Problem**: Labels don't show in table cells.

**Solution**: Add `_label` suffix to enable label rendering.

```typescript
// Correct
{
  status: 'Activo',
  status_label: true,
  status_label_variant: 'success',
}

// Wrong (renders as plain text)
{
  status: 'Activo',
}
```

### Pagination not updating

**Problem**: Pagination shows stale data.

**Solution**: Calculate `rangeLabel` dynamically and update `tablePagination` object.

```typescript
get rangeLabel(): string {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);
  return `${start} - ${end} de ${totalItems} ítems`;
}
```

### Tabs not switching

**Problem**: Clicking tabs doesn't change content.

**Solution**: Handle `tabChange` event and update `activeTabIndex`.

```html
<storybook-info-container
  [activeTabIndex]="currentTab"
  (tabChange)="currentTab = $event">
</storybook-info-container>
```

## Future Enhancements

Potential features not included in current version:
- Custom header icons
- Sortable table columns
- Filterable lists
- Exportable data
- Print-friendly layout
- Dark mode support
