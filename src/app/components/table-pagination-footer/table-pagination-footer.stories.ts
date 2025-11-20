import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { TablePaginationFooterComponent } from './table-pagination-footer.component';

const meta: Meta<TablePaginationFooterComponent> = {
  title: 'Components/TablePaginationFooter',
  component: TablePaginationFooterComponent,
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: 'number',
      description: 'Current page number',
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
  },
  args: {
    pageChange: fn(),
    pageSizeChange: fn(),
  },
};

export default meta;
type Story = StoryObj<TablePaginationFooterComponent>;

export const PaginacionBasica: Story = {
  args: {
    currentPage: 1,
    totalPages: 3,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 22,
  },
};

export const MuchasPaginas: Story = {
  args: {
    currentPage: 5,
    totalPages: 50,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 500,
  },
};

export const PageSizeDiferente: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    pageSize: 20,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 94,
  },
};

export const PaginaActualEnMedio: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 22,
  },
};

export const UltimaPagina: Story = {
  args: {
    currentPage: 3,
    totalPages: 3,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 22,
  },
};

export const PocosItems: Story = {
  args: {
    currentPage: 1,
    totalPages: 1,
    pageSize: 50,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 7,
  },
};

export const MuchosItems: Story = {
  args: {
    currentPage: 10,
    totalPages: 100,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 1000,
  },
};
