import type { Meta, StoryObj } from '@storybook/angular';
import { PaginationComponent } from './pagination.component';

const meta: Meta<PaginationComponent> = {
  title: 'Example/Pagination',
  component: PaginationComponent,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'Current active page (1-based)',
      min: 1,
      max: 100,
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages',
      min: 0,
      max: 500,
    },
    pageSize: {
      control: 'select',
      options: [5, 10, 20, 50],
      description: 'Number of items per page',
    },
    pageSizeOptions: {
      control: 'object',
      description: 'Available page size options',
    },
    totalItems: {
      control: 'number',
      description: 'Total number of items',
    },
    rangeLabel: {
      control: 'text',
      description: 'Range label text (e.g., "1 - 5 de 50 ítems")',
    },
  },
  args: {
    currentPage: 1,
    totalPages: 10,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 50,
    rangeLabel: '1 - 5 de 50 ítems',
  },
};

export default meta;
type Story = StoryObj<PaginationComponent>;

// ===========================
// Default - Interactive Pagination
// ===========================

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 50,
    rangeLabel: '1 - 5 de 50 ítems',
  },
};

// ===========================
// Interactive Playground with Documentation
// ===========================

export const InteractivePlayground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;">
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Pagination Component</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Fully functional pagination component - adjust the controls on the right to see it in action
        </p>

        <div style="display: flex; justify-content: flex-start; min-height: 60px; padding: 24px; background: #F8FAFC; border-radius: 8px; border: 1px solid #E2E8F0;">
          <storybook-pagination
            [currentPage]="currentPage"
            [totalPages]="totalPages"
            [pageSize]="pageSize"
            [pageSizeOptions]="pageSizeOptions"
            [totalItems]="totalItems"
            [rangeLabel]="rangeLabel"
            (pageChange)="onPageChange($event)"
            (pageSizeChange)="onPageSizeChange($event)"
            (paginationChange)="onPaginationChange($event)"
            (refresh)="onRefresh()">
          </storybook-pagination>
        </div>

        <div style="margin-top: 32px; padding: 16px; background: #DBEAFE; border-radius: 8px; font-size: 13px; color: #1E3A8A; line-height: 1.6;">
          <strong>Features:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>Editable page input field - enter page number directly</li>
            <li>Page size selector - change items displayed per page</li>
            <li>Navigation buttons - first, previous, next, last</li>
            <li>Range label - shows current items range</li>
            <li>Refresh button - triggers refresh event</li>
            <li>Smart disabled states - buttons disable at boundaries</li>
          </ul>
        </div>

        <div style="margin-top: 24px; padding: 16px; background: #F0FDF4; border-radius: 8px; font-size: 13px; color: #166534; line-height: 1.6;">
          <strong>Current Configuration:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>Current Page: <strong>{{ currentPage }}</strong></li>
            <li>Total Pages: <strong>{{ totalPages }}</strong></li>
            <li>Page Size: <strong>{{ pageSize }}</strong></li>
            <li>Total Items: <strong>{{ totalItems }}</strong></li>
          </ul>
        </div>

        <div style="margin-top: 24px; padding: 16px; background: #FEF3C7; border-radius: 8px; font-size: 13px; color: #78350F; line-height: 1.6;">
          <strong>How to Use:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>Use the <strong>Controls</strong> panel on the right to change all props in real-time</li>
            <li>Set <code>totalPages</code> to 0 for empty state</li>
            <li>Set <code>totalPages</code> to 1 for single page (all buttons disabled)</li>
            <li>Change <code>currentPage</code> to see navigation button states update</li>
            <li>Select different <code>pageSize</code> values to see layout adjustments</li>
          </ul>
        </div>
      </div>
    `,
    component: {
      onPageChange: (page: number) => console.log('Page changed to:', page),
      onPageSizeChange: (size: number) => console.log('Page size changed to:', size),
      onPaginationChange: (event: any) => console.log('Pagination changed:', event),
      onRefresh: () => console.log('Refresh clicked'),
    },
  }),
  args: {
    currentPage: 1,
    totalPages: 10,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 50,
    rangeLabel: '1 - 5 de 50 ítems',
  },
};
