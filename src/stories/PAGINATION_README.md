# Pagination Component

The Pagination component is a table-oriented navigation control that allows users to browse through paginated data. It features editable page input, page size selector, range display, and navigation controls (first, previous, next, last, refresh).

## Features

- Editable current page input field
- Page size selector with customizable options
- Range label showing visible items (e.g., "1 - 5 de 50 ítems")
- 5 navigation controls: First, Previous, Next, Last, Refresh
- Auto-disabled navigation buttons at boundaries
- Horizontal responsive layout
- Event-driven architecture (stateless)
- Pixel-perfect replication from Figma design
- Accessible with ARIA attributes
- Angular 20 standalone component
- Builder.io compatible

## Import

```typescript
import { PaginationComponent } from './pagination.component';
```

## Basic Usage

```html
<!-- Basic pagination -->
<storybook-pagination
  [currentPage]="1"
  [totalPages]="10"
  [pageSize]="5"
  [pageSizeOptions]="[5, 10, 20, 50]"
  [totalItems]="50"
  [rangeLabel]="'1 - 5 de 50 ítems'"
  (pageChange)="onPageChange($event)"
  (pageSizeChange)="onPageSizeChange($event)"
>
</storybook-pagination>
```

## Props

| Prop               | Type                                  | Default              | Description                                  |
| ------------------ | ------------------------------------- | -------------------- | -------------------------------------------- |
| `currentPage`      | `number`                              | `1`                  | Current active page (1-based)                |
| `totalPages`       | `number`                              | `1`                  | Total number of pages                        |
| `pageSize`         | `number`                              | `5`                  | Number of items per page                     |
| `pageSizeOptions`  | `number[]`                            | `[5, 10, 20]`        | Available page size options                  |
| `totalItems`       | `number`                              | `5`                  | Total number of items in dataset             |
| `rangeLabel`       | `string`                              | `'1 - 5 de 5 ítems'` | Range label text showing visible items       |
| `pageChange`       | `EventEmitter<number>`                | -                    | Emits when page changes (new page number)    |
| `pageSizeChange`   | `EventEmitter<number>`                | -                    | Emits when page size changes (new page size) |
| `paginationChange` | `EventEmitter<PaginationChangeEvent>` | -                    | Emits when any pagination parameter changes  |
| `refresh`          | `EventEmitter<void>`                  | -                    | Emits when refresh button is clicked         |

### PaginationChangeEvent Interface

```typescript
interface PaginationChangeEvent {
  currentPage: number;
  pageSize: number;
}
```

## Component Layout

The component consists of three main sections:

### Left Section: Current Page

Displays and allows editing of the current page:

- "Página" label
- Editable input field (42px width)
- "de X" label showing total pages

```html
<storybook-pagination
  [currentPage]="currentPage"
  [totalPages]="totalPages"
  [rangeLabel]="rangeLabel"
>
</storybook-pagination>
```

**Features:**

- Direct page number entry
- Validates input on blur
- Clamps to valid range [1, totalPages]
- Disabled when `totalPages === 0`

### Middle Section: Page Size Selector

Allows users to change the number of items per page:

- Dropdown select (47px width)
- "ítems por página" label
- Custom chevron-down icon

```html
<storybook-pagination
  [pageSize]="10"
  [pageSizeOptions]="[5, 10, 20, 50, 100]"
  (pageSizeChange)="onPageSizeChange($event)"
>
</storybook-pagination>
```

**Features:**

- Displays current page size
- Emits event on change
- Customizable options array

### Right Section: Range & Navigation

Displays visible items range and navigation controls:

- Range label (e.g., "1 - 5 de 50 ítems")
- First page button (double chevron left)
- Previous page button (chevron left)
- Next page button (chevron right)
- Last page button (double chevron right)
- Refresh button (circular arrows)

```html
<storybook-pagination
  [currentPage]="5"
  [totalPages]="10"
  [rangeLabel]="'21 - 25 de 50 ítems'"
  (pageChange)="onPageChange($event)"
  (refresh)="onRefresh()"
>
</storybook-pagination>
```

**Features:**

- Auto-disables First/Previous on first page
- Auto-disables Next/Last on last page
- Auto-disables all when `totalPages === 0`
- 7px gap between buttons
- Refresh button always enabled

## Events

### pageChange

Emitted when the user navigates to a different page via buttons or direct input.

```typescript
export class MyComponent {
  handlePageChange(newPage: number) {
    console.log(`Navigating to page ${newPage}`);
    this.loadData(newPage, this.pageSize);
  }
}
```

```html
<storybook-pagination
  [currentPage]="currentPage"
  [totalPages]="totalPages"
  (pageChange)="handlePageChange($event)"
>
</storybook-pagination>
```

### pageSizeChange

Emitted when the user changes the page size via the dropdown.

```typescript
export class MyComponent {
  handlePageSizeChange(newSize: number) {
    console.log(`Changing page size to ${newSize}`);
    this.pageSize = newSize;
    this.currentPage = 1; // Reset to first page
    this.loadData(1, newSize);
  }
}
```

```html
<storybook-pagination
  [pageSize]="pageSize"
  [pageSizeOptions]="[5, 10, 20, 50]"
  (pageSizeChange)="handlePageSizeChange($event)"
>
</storybook-pagination>
```

### paginationChange

Emitted when either page or page size changes, providing both values.

```typescript
export class MyComponent {
  handlePaginationChange(event: PaginationChangeEvent) {
    console.log(`Page: ${event.currentPage}, Size: ${event.pageSize}`);
    this.loadData(event.currentPage, event.pageSize);
  }
}
```

```html
<storybook-pagination
  [currentPage]="currentPage"
  [pageSize]="pageSize"
  (paginationChange)="handlePaginationChange($event)"
>
</storybook-pagination>
```

### refresh

Emitted when the refresh button is clicked.

```typescript
export class MyComponent {
  handleRefresh() {
    console.log('Refreshing data...');
    this.loadData(this.currentPage, this.pageSize);
  }
}
```

```html
<storybook-pagination (refresh)="handleRefresh()"> </storybook-pagination>
```

## Usage Examples

### Basic Table Pagination

```typescript
export class ProductsTableComponent {
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;
  totalItems = 0;
  products: Product[] = [];

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProducts(this.currentPage, this.pageSize).subscribe((response) => {
      this.products = response.data;
      this.totalItems = response.total;
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadProducts();
  }

  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.currentPage = 1; // Reset to first page
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.loadProducts();
  }

  getRangeLabel(): string {
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.totalItems);
    return `${start} - ${end} de ${this.totalItems} ítems`;
  }
}
```

```html
<table>
  <!-- Table headers and rows -->
  <tr *ngFor="let product of products">
    <td>{{ product.name }}</td>
    <td>{{ product.price }}</td>
  </tr>
</table>

<storybook-pagination
  [currentPage]="currentPage"
  [totalPages]="totalPages"
  [pageSize]="pageSize"
  [pageSizeOptions]="[5, 10, 20, 50]"
  [totalItems]="totalItems"
  [rangeLabel]="getRangeLabel()"
  (pageChange)="onPageChange($event)"
  (pageSizeChange)="onPageSizeChange($event)"
  (refresh)="loadProducts()"
>
</storybook-pagination>
```

### Server-Side Pagination

```typescript
export class UsersComponent {
  currentPage = 1;
  pageSize = 25;
  totalPages = 0;
  totalItems = 0;
  users: User[] = [];
  loading = false;

  loadUsers(page: number, size: number) {
    this.loading = true;

    this.userService.getUsers({ page, pageSize: size, sort: 'name' }).subscribe({
      next: (response) => {
        this.users = response.data;
        this.totalItems = response.pagination.total;
        this.totalPages = response.pagination.totalPages;
        this.currentPage = page;
        this.pageSize = size;
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load users', err);
        this.loading = false;
      },
    });
  }

  handlePaginationChange(event: PaginationChangeEvent) {
    this.loadUsers(event.currentPage, event.pageSize);
  }

  get rangeLabel(): string {
    if (this.totalItems === 0) return '0 - 0 de 0 ítems';
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.totalItems);
    return `${start} - ${end} de ${this.totalItems} ítems`;
  }
}
```

```html
<div class="users-table">
  <div *ngIf="loading" class="loading-spinner">Cargando...</div>

  <table *ngIf="!loading">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Email</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let user of users">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role }}</td>
      </tr>
    </tbody>
  </table>

  <storybook-pagination
    [currentPage]="currentPage"
    [totalPages]="totalPages"
    [pageSize]="pageSize"
    [pageSizeOptions]="[10, 25, 50, 100]"
    [totalItems]="totalItems"
    [rangeLabel]="rangeLabel"
    (paginationChange)="handlePaginationChange($event)"
    (refresh)="loadUsers(currentPage, pageSize)"
  >
  </storybook-pagination>
</div>
```

### Client-Side Pagination

```typescript
export class ClientSidePaginationComponent {
  allItems: Item[] = []; // All data loaded at once
  displayedItems: Item[] = [];
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;

  ngOnInit() {
    this.loadAllItems();
  }

  loadAllItems() {
    this.itemService.getAllItems().subscribe((items) => {
      this.allItems = items;
      this.totalPages = Math.ceil(this.allItems.length / this.pageSize);
      this.updateDisplayedItems();
    });
  }

  updateDisplayedItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedItems = this.allItems.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updateDisplayedItems();
  }

  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.allItems.length / this.pageSize);
    this.updateDisplayedItems();
  }

  get rangeLabel(): string {
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.allItems.length);
    return `${start} - ${end} de ${this.allItems.length} ítems`;
  }
}
```

```html
<div *ngFor="let item of displayedItems">{{ item.name }}</div>

<storybook-pagination
  [currentPage]="currentPage"
  [totalPages]="totalPages"
  [pageSize]="pageSize"
  [pageSizeOptions]="[5, 10, 20]"
  [totalItems]="allItems.length"
  [rangeLabel]="rangeLabel"
  (pageChange)="onPageChange($event)"
  (pageSizeChange)="onPageSizeChange($event)"
>
</storybook-pagination>
```

## Design Specifications

### Typography

- Font Family: Inter, -apple-system, Roboto, Helvetica, sans-serif
- Font Size: 13px
- Font Weight: 500
- Line Height: normal
- Letter Spacing: -0.26px
- Color: #4B5563 (gray-600)

### Layout

**Container:**

- Display: flex
- Align Items: center
- Gap: 16px
- Height: 29px

**Sections:**

- Left: flex with 8px gap
- Middle: flex with 10px gap
- Right: flex with 17px gap, margin-left auto

**Navigation Controls:**

- Display: flex
- Gap: 7px between buttons

### Inputs & Buttons

**Page Input:**

- Width: 42px
- Height: 29px
- Padding: 0 8px
- Border Radius: 6px
- Border: 1px solid #E4E4E7 (neutral-200)
- Background: #FFF
- Text Align: center

**Page Size Select:**

- Width: 47px
- Height: 29px
- Padding: 0 24px 0 8px (for icon space)
- Border Radius: 6px
- Border: 1px solid #E4E4E7
- Background: #FFF
- Appearance: none (custom dropdown)

**Navigation Buttons:**

- Width: 29px (30px for last button)
- Height: 29px
- Border Radius: 6px
- Border: 1px solid #E4E4E7
- Background: #FFF
- Display: flex (center content)

### Colors

**Default State:**

- Background: #FFF (white)
- Border: #E4E4E7 (neutral-200)
- Text: #4B5563 (gray-600)
- Icon Fill: #939394

**Hover State:**

- Background: #F9FAFB (neutral-50)
- Border: #D4D4D8 (neutral-300)

**Focus State:**

- Border: #2563EB (Blue-600)
- Shadow: 0 0 0 3px #FFF, 0 0 0 5px #DBEAFE (Blue-100)
- (3px white gap + 2px blue focus ring)

**Active State (buttons only):**

- Background: #F3F4F6 (neutral-100)

**Disabled State:**

- Opacity: 40%
- Cursor: not-allowed
- Icon Fill: #D1D5DB (neutral-300)

**Select Icon:**

- Fill: #848485 (neutral-500)

### Icons

All icons are SVG paths from Figma design:

1. **First** (double chevron left): 15×15px
2. **Previous** (chevron left): 14×14px
3. **Next** (chevron right): 16×16px
4. **Last** (double chevron right): 16×16px
5. **Refresh** (circular arrows): 14×14px
6. **Chevron Down** (select): 15×15px

### States

**Single Page (totalPages = 1):**

- All navigation buttons disabled
- Page input shows "1 de 1"
- Range shows all items

**First Page (currentPage = 1):**

- First & Previous buttons disabled
- Next & Last buttons enabled
- Refresh always enabled

**Middle Page:**

- All navigation buttons enabled

**Last Page (currentPage = totalPages):**

- Next & Last buttons disabled
- First & Previous buttons enabled

**Empty State (totalPages = 0):**

- All navigation buttons disabled
- Page input disabled
- Range shows "0 - 0 de 0 ítems"

### Responsive Behavior

**Desktop (> 768px):**

- Single row horizontal layout
- All sections visible
- Full spacing maintained

**Mobile (≤ 768px):**

- Component wraps to multiple rows
- Right section takes full width
- Maintains button spacing

```css
@media (max-width: 768px) {
  .pagination-container {
    flex-wrap: wrap;
    height: auto;
    gap: 12px;
  }

  .pagination-section-right {
    margin-left: 0;
    width: 100%;
    justify-content: space-between;
  }
}
```

## Accessibility

**ARIA Attributes:**

- Buttons have descriptive `aria-label` attributes
- Page input has `min` and `max` attributes
- Disabled buttons have `disabled` attribute

**Keyboard Navigation:**

- Tab: Navigate between controls
- Enter: Activate focused button
- Input field: Type page number, Enter or blur to apply

```html
<!-- Rendered output -->
<button type="button" class="pagination-nav-btn" disabled aria-label="Primera página">
  <!-- First page icon -->
</button>

<input
  type="number"
  class="pagination-input"
  min="1"
  max="10"
  value="1"
  aria-label="Página actual"
/>
```

## Component Architecture

```typescript
@Component({
  selector: 'storybook-pagination',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `...`,
  styleUrls: ['./pagination.css']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Input() pageSize: number = 5;
  @Input() pageSizeOptions: number[] = [5, 10, 20];
  @Input() totalItems: number = 5;
  @Input() rangeLabel: string = '1 - 5 de 5 ítems';

  @Output() pageChange = new EventEmitter<number>();
  @Output() pageSizeChange = new EventEmitter<number>();
  @Output() paginationChange = new EventEmitter<PaginationChangeEvent>();
  @Output() refresh = new EventEmitter<void>();

  private tempPageValue: string = '';

  goToFirstPage(): void { ... }
  goToPreviousPage(): void { ... }
  goToNextPage(): void { ... }
  goToLastPage(): void { ... }
  onPageInputChange(event: Event): void { ... }
  onPageInputBlur(): void { ... }
  onPageSizeChange(event: Event): void { ... }
  onRefresh(): void { ... }
  private updatePage(page: number): void { ... }
}
```

## Behavior

### Page Input Validation

- Accepts numeric input only
- Validates on blur (not on every keystroke)
- Clamps to valid range: `[1, totalPages]`
- Ignores invalid input (NaN, empty)
- Emits `pageChange` on valid change

```typescript
onPageInputBlur(): void {
  if (this.tempPageValue === '') return;

  let page = parseInt(this.tempPageValue, 10);
  if (isNaN(page)) {
    this.tempPageValue = '';
    return;
  }

  // Clamp to valid range
  page = Math.max(1, Math.min(page, this.totalPages));
  this.updatePage(page);
  this.tempPageValue = '';
}
```

### Navigation Button Logic

**First Button:**

```typescript
goToFirstPage(): void {
  if (this.currentPage !== 1 && this.totalPages > 0) {
    this.updatePage(1);
  }
}
```

**Previous Button:**

```typescript
goToPreviousPage(): void {
  if (this.currentPage > 1) {
    this.updatePage(this.currentPage - 1);
  }
}
```

**Next Button:**

```typescript
goToNextPage(): void {
  if (this.currentPage < this.totalPages) {
    this.updatePage(this.currentPage + 1);
  }
}
```

**Last Button:**

```typescript
goToLastPage(): void {
  if (this.currentPage !== this.totalPages && this.totalPages > 0) {
    this.updatePage(this.totalPages);
  }
}
```

### Page Size Change Logic

```typescript
onPageSizeChange(event: Event): void {
  const select = event.target as HTMLSelectElement;
  const newPageSize = parseInt(select.value, 10);

  if (!isNaN(newPageSize) && newPageSize !== this.pageSize) {
    this.pageSizeChange.emit(newPageSize);
    this.paginationChange.emit({
      currentPage: this.currentPage,
      pageSize: newPageSize,
    });
  }
}
```

## Helper Functions

### Calculate Range Label

```typescript
function getRangeLabel(currentPage: number, pageSize: number, totalItems: number): string {
  if (totalItems === 0) {
    return '0 - 0 de 0 ítems';
  }

  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalItems);

  return `${start} - ${end} de ${totalItems} ítems`;
}
```

### Calculate Total Pages

```typescript
function getTotalPages(totalItems: number, pageSize: number): number {
  if (totalItems === 0 || pageSize === 0) {
    return 0;
  }

  return Math.ceil(totalItems / pageSize);
}
```

## Use Cases

### When to Use

- Data tables with multiple pages
- Search results pagination
- Product listings
- User management interfaces
- Report viewers with large datasets
- Dashboard data grids
- Any paginated content display

### When NOT to Use

- Infinite scroll scenarios (use virtual scrolling instead)
- Very small datasets (< 10 items)
- Single page displays
- Real-time streaming data
- Continuous feeds (social media style)

## Best Practices

### DO ✓

- Calculate `rangeLabel` based on current page, page size, and total items
- Reset to page 1 when changing page size
- Recalculate `totalPages` when `totalItems` or `pageSize` changes
- Handle all events (`pageChange`, `pageSizeChange`, `refresh`)
- Show loading state during data fetch
- Validate page input
- Use appropriate page size options for your data
- Maintain state in parent component

### DON'T ✗

- Don't hardcode `rangeLabel` - calculate it dynamically
- Don't forget to update `currentPage` when handling events
- Don't allow invalid page numbers
- Don't use huge page size options (e.g., 1000)
- Don't fetch data without showing loading feedback
- Don't modify component inputs directly (emit events instead)
- Don't forget to handle edge cases (empty data, single page)

## Common Patterns

### Complete Pagination Implementation

```typescript
export class DataTableComponent implements OnInit {
  // Pagination state
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;
  totalItems = 0;

  // Data
  items: any[] = [];
  loading = false;

  // Available page sizes
  pageSizeOptions = [5, 10, 20, 50];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loading = true;

    this.dataService.getData(this.currentPage, this.pageSize).subscribe({
      next: (response) => {
        this.items = response.data;
        this.totalItems = response.total;
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
        this.loading = false;
      },
      error: (err) => {
        console.error('Failed to load data', err);
        this.loading = false;
      },
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadData();
  }

  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.currentPage = 1; // Reset to first page
    this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    this.loadData();
  }

  onRefresh() {
    this.loadData();
  }

  get rangeLabel(): string {
    if (this.totalItems === 0) {
      return '0 - 0 de 0 ítems';
    }

    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.totalItems);

    return `${start} - ${end} de ${this.totalItems} ítems`;
  }
}
```

```html
<div class="data-table-container">
  <!-- Loading state -->
  <div *ngIf="loading" class="loading-overlay">
    <div class="spinner">Cargando...</div>
  </div>

  <!-- Data table -->
  <table class="data-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let item of items">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.status }}</td>
        <td>
          <button (click)="editItem(item)">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Pagination -->
  <storybook-pagination
    [currentPage]="currentPage"
    [totalPages]="totalPages"
    [pageSize]="pageSize"
    [pageSizeOptions]="pageSizeOptions"
    [totalItems]="totalItems"
    [rangeLabel]="rangeLabel"
    (pageChange)="onPageChange($event)"
    (pageSizeChange)="onPageSizeChange($event)"
    (refresh)="onRefresh()"
  >
  </storybook-pagination>
</div>
```

## Builder.io Compatibility

This component is designed to be compatible with Builder.io:

1. **Standalone Component**: No module dependencies
2. **Props System**: Simple @Input decorators
3. **Event Emitters**: Standard @Output for interactions
4. **Stateless Design**: All state managed by parent
5. **Self-contained**: Styles and logic encapsulated

### Builder.io Registration Example

```typescript
import { Builder } from '@builder.io/sdk';
import { PaginationComponent } from './pagination.component';

Builder.registerComponent(PaginationComponent, {
  name: 'Pagination',
  inputs: [
    {
      name: 'currentPage',
      type: 'number',
      defaultValue: 1,
      helperText: 'Current active page (1-based)',
    },
    {
      name: 'totalPages',
      type: 'number',
      defaultValue: 1,
      helperText: 'Total number of pages',
    },
    {
      name: 'pageSize',
      type: 'number',
      defaultValue: 10,
      helperText: 'Number of items per page',
    },
    {
      name: 'pageSizeOptions',
      type: 'list',
      subFields: [
        {
          name: 'size',
          type: 'number',
        },
      ],
      defaultValue: [5, 10, 20, 50],
      helperText: 'Available page size options',
    },
    {
      name: 'totalItems',
      type: 'number',
      defaultValue: 0,
      helperText: 'Total number of items',
    },
    {
      name: 'rangeLabel',
      type: 'string',
      defaultValue: '1 - 10 de 50 ítems',
      helperText: 'Range label text',
    },
  ],
});
```

## Troubleshooting

### Navigation buttons not enabling/disabling correctly

**Problem**: First/Previous buttons enabled on first page, or Next/Last enabled on last page.

**Solution**: Ensure `currentPage` and `totalPages` are correctly set.

```typescript
// Correct
this.currentPage = 1;
this.totalPages = Math.ceil(this.totalItems / this.pageSize);

// Wrong
this.currentPage = 0; // Should be 1-based
this.totalPages = this.totalItems / this.pageSize; // Should use Math.ceil
```

### Page input shows wrong value

**Problem**: Input doesn't reflect `currentPage` value.

**Solution**: Component uses `[value]` binding, not two-way binding. Ensure parent updates `currentPage` on `pageChange` event.

```html
<!-- Correct -->
<storybook-pagination [currentPage]="currentPage" (pageChange)="currentPage = $event">
</storybook-pagination>

<!-- Wrong (input won't update) -->
<storybook-pagination [currentPage]="1"></storybook-pagination>
```

### Range label not updating

**Problem**: Range label shows stale data.

**Solution**: Calculate `rangeLabel` dynamically in parent component using a getter.

```typescript
// Correct
get rangeLabel(): string {
  const start = (this.currentPage - 1) * this.pageSize + 1;
  const end = Math.min(this.currentPage * this.pageSize, this.totalItems);
  return `${start} - ${end} de ${this.totalItems} ítems`;
}

// Wrong (static value)
rangeLabel = '1 - 10 de 100 ítems'; // Won't update!
```

### Page size change breaks pagination

**Problem**: Changing page size leaves user on invalid page.

**Solution**: Reset to page 1 when page size changes.

```typescript
onPageSizeChange(size: number) {
  this.pageSize = size;
  this.currentPage = 1; // Reset!
  this.totalPages = Math.ceil(this.totalItems / this.pageSize);
  this.loadData();
}
```

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - CSS Flexbox
  - SVG
  - CSS Transitions
  - HTML5 number input
  - Angular 20+

## Performance

- Lightweight component (~4KB gzipped)
- No heavy computations
- Minimal DOM operations
- CSS transitions for smooth interactions
- Event-based architecture prevents unnecessary re-renders

## Related Components

- **Select**: Similar dropdown pattern
- **Input**: Similar input field styling
- **Button**: Similar button styling
- **Table**: Often used together

## Version History

- **v1.0.0** - Initial release based on Figma design specifications
  - Editable page input
  - Page size selector
  - Range label display
  - 5 navigation controls (First, Previous, Next, Last, Refresh)
  - Auto-disabled buttons at boundaries
  - Event-driven stateless architecture
  - Responsive layout
  - Builder.io compatible

## Future Enhancements

Potential features not included in current Figma design:

- Jump to page dropdown (e.g., "Go to page...")
- Configurable page number display format
- Loading states for buttons
- Custom icons
- Compact mode for mobile
- Page info tooltip
- Keyboard shortcuts (Ctrl+Left/Right)
- URL parameter synchronization
