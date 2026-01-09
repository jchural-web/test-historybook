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
    },
    totalPages: {
      control: 'number',
      description: 'Total number of pages',
    },
    pageSize: {
      control: 'number',
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
      description: 'Range label text (e.g., "1 - 5 de 5 ítems")',
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
// Interactive Playground
// ===========================

export const InteractivePlayground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;">
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Pagination Component</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Fully functional pagination component with configurable props
        </p>

        <div style="display: flex; justify-content: flex-start; min-height: 60px; padding: 24px; background: #F8FAFC; border-radius: 8px;">
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
          <strong>Component Features:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>Editable page input field</li>
            <li>Page size selector (dropdown)</li>
            <li>Navigation buttons (first, previous, next, last)</li>
            <li>Range label showing current items</li>
            <li>Refresh button</li>
            <li>Auto-disabled buttons at boundaries</li>
            <li>Empty state support (totalPages = 0)</li>
          </ul>
        </div>

        <div style="margin-top: 24px; padding: 16px; background: #F0FDF4; border-radius: 8px; font-size: 13px; color: #166534; line-height: 1.6;">
          <strong>Props:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li><code>currentPage</code>: {{ currentPage }}</li>
            <li><code>totalPages</code>: {{ totalPages }}</li>
            <li><code>pageSize</code>: {{ pageSize }}</li>
            <li><code>totalItems</code>: {{ totalItems }}</li>
          </ul>
        </div>
      </div>
    `,
    component: {
      onPageChange: (page: number) => console.log('Page changed:', page),
      onPageSizeChange: (size: number) => console.log('Page size changed:', size),
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

// ===========================
// Default Story
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
// States
// ===========================

export const SinglePage: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    totalItems: 5,
    rangeLabel: '1 - 5 de 5 ítems',
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 50,
    rangeLabel: '1 - 5 de 50 ítems',
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 50,
    rangeLabel: '21 - 25 de 50 ítems',
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 50,
    rangeLabel: '46 - 50 de 50 ítems',
  },
};

export const EmptyState: Story = {
  args: {
    currentPage: 1,
    totalPages: 0,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    totalItems: 0,
    rangeLabel: '0 - 0 de 0 ítems',
  },
};

export const LargeDataset: Story = {
  args: {
    currentPage: 50,
    totalPages: 100,
    pageSize: 10,
    pageSizeOptions: [10, 25, 50, 100],
    totalItems: 1000,
    rangeLabel: '491 - 500 de 1000 ítems',
  },
};
