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
    totalPages: 1,
    pageSize: 5,
    pageSizeOptions: [5, 10, 20],
    totalItems: 5,
    rangeLabel: '1 - 5 de 5 ítems',
  },
};

export default meta;
type Story = StoryObj<PaginationComponent>;

// ===========================
// Basic Examples
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

// ===========================
// Different Page Sizes
// ===========================

export const PageSize10: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    pageSize: 10,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 50,
    rangeLabel: '1 - 10 de 50 ítems',
  },
};

export const PageSize20: Story = {
  args: {
    currentPage: 1,
    totalPages: 3,
    pageSize: 20,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 50,
    rangeLabel: '1 - 20 de 50 ítems',
  },
};

export const PageSize50: Story = {
  args: {
    currentPage: 1,
    totalPages: 2,
    pageSize: 50,
    pageSizeOptions: [5, 10, 20, 50],
    totalItems: 75,
    rangeLabel: '1 - 50 de 75 ítems',
  },
};

// ===========================
// Large Datasets
// ===========================

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

export const VeryLargeDataset: Story = {
  args: {
    currentPage: 250,
    totalPages: 500,
    pageSize: 20,
    pageSizeOptions: [10, 20, 50, 100],
    totalItems: 10000,
    rangeLabel: '4981 - 5000 de 10000 ítems',
  },
};

// ===========================
// Empty State
// ===========================

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

// ===========================
// Design System Showcase
// ===========================

export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; padding: 24px; max-width: 1400px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Component Library</h2>
        
        <!-- States Grid -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Different States</h3>
          
          <div style="display: flex; flex-direction: column; gap: 32px;">
            <!-- Single Page (All disabled) -->
            <div>
              <div style="font-size: 14px; font-weight: 600; color: #202020; margin-bottom: 12px;">Single Page (All navigation disabled)</div>
              <storybook-pagination
                [currentPage]="1"
                [totalPages]="1"
                [pageSize]="5"
                [pageSizeOptions]="[5, 10, 20]"
                [totalItems]="5"
                [rangeLabel]="'1 - 5 de 5 ítems'">
              </storybook-pagination>
            </div>

            <!-- First Page (Prev/First disabled) -->
            <div>
              <div style="font-size: 14px; font-weight: 600; color: #202020; margin-bottom: 12px;">First Page (Previous & First disabled)</div>
              <storybook-pagination
                [currentPage]="1"
                [totalPages]="10"
                [pageSize]="5"
                [pageSizeOptions]="[5, 10, 20, 50]"
                [totalItems]="50"
                [rangeLabel]="'1 - 5 de 50 ítems'">
              </storybook-pagination>
            </div>

            <!-- Middle Page (All enabled) -->
            <div>
              <div style="font-size: 14px; font-weight: 600; color: #202020; margin-bottom: 12px;">Middle Page (All controls enabled)</div>
              <storybook-pagination
                [currentPage]="5"
                [totalPages]="10"
                [pageSize]="5"
                [pageSizeOptions]="[5, 10, 20, 50]"
                [totalItems]="50"
                [rangeLabel]="'21 - 25 de 50 ítems'">
              </storybook-pagination>
            </div>

            <!-- Last Page (Next/Last disabled) -->
            <div>
              <div style="font-size: 14px; font-weight: 600; color: #202020; margin-bottom: 12px;">Last Page (Next & Last disabled)</div>
              <storybook-pagination
                [currentPage]="10"
                [totalPages]="10"
                [pageSize]="5"
                [pageSizeOptions]="[5, 10, 20, 50]"
                [totalItems]="50"
                [rangeLabel]="'46 - 50 de 50 ítems'">
              </storybook-pagination>
            </div>

            <!-- Empty State -->
            <div>
              <div style="font-size: 14px; font-weight: 600; color: #202020; margin-bottom: 12px;">Empty State (No data)</div>
              <storybook-pagination
                [currentPage]="1"
                [totalPages]="0"
                [pageSize]="5"
                [pageSizeOptions]="[5, 10, 20]"
                [totalItems]="0"
                [rangeLabel]="'0 - 0 de 0 ítems'">
              </storybook-pagination>
            </div>
          </div>
        </section>

        <!-- Page Size Variations -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Page Size Variations</h3>
          
          <div style="display: flex; flex-direction: column; gap: 32px;">
            <!-- 5 items per page -->
            <div>
              <div style="font-size: 14px; font-weight: 600; color: #202020; margin-bottom: 12px;">5 items per page</div>
              <storybook-pagination
                [currentPage]="1"
                [totalPages]="20"
                [pageSize]="5"
                [pageSizeOptions]="[5, 10, 20, 50]"
                [totalItems]="100"
                [rangeLabel]="'1 - 5 de 100 ítems'">
              </storybook-pagination>
            </div>

            <!-- 10 items per page -->
            <div>
              <div style="font-size: 14px; font-weight: 600; color: #202020; margin-bottom: 12px;">10 items per page</div>
              <storybook-pagination
                [currentPage]="1"
                [totalPages]="10"
                [pageSize]="10"
                [pageSizeOptions]="[5, 10, 20, 50]"
                [totalItems]="100"
                [rangeLabel]="'1 - 10 de 100 ítems'">
              </storybook-pagination>
            </div>

            <!-- 20 items per page -->
            <div>
              <div style="font-size: 14px; font-weight: 600; color: #202020; margin-bottom: 12px;">20 items per page</div>
              <storybook-pagination
                [currentPage]="1"
                [totalPages]="5"
                [pageSize]="20"
                [pageSizeOptions]="[5, 10, 20, 50]"
                [totalItems]="100"
                [rangeLabel]="'1 - 20 de 100 ítems'">
              </storybook-pagination>
            </div>

            <!-- 50 items per page -->
            <div>
              <div style="font-size: 14px; font-weight: 600; color: #202020; margin-bottom: 12px;">50 items per page</div>
              <storybook-pagination
                [currentPage]="1"
                [totalPages]="2"
                [pageSize]="50"
                [pageSizeOptions]="[5, 10, 20, 50]"
                [totalItems]="100"
                [rangeLabel]="'1 - 50 de 100 ítems'">
              </storybook-pagination>
            </div>
          </div>
        </section>

        <!-- Design Specifications -->
        <section style="margin-top: 64px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          
          <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
            <p style="margin: 16px 0 8px 0;"><strong>Component Layout:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Horizontal flexbox layout with 16px gap between sections</li>
              <li>Total height: 29px</li>
              <li>Font family: Inter, -apple-system, Roboto, Helvetica, sans-serif</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Left Section: Current Page</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>"Página" label</li>
              <li>Editable input field (42px width, centered text)</li>
              <li>"de X" label showing total pages</li>
              <li>Input supports direct page number entry</li>
              <li>Input validates and clamps to valid range [1, totalPages]</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Middle Section: Page Size Selector</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Dropdown select (47px width)</li>
              <li>Displays current page size value</li>
              <li>"ítems por página" label</li>
              <li>Custom dropdown icon (chevron-down)</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Right Section: Range & Navigation</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Range label: "X - Y de Z ítems" format</li>
              <li>5 navigation buttons (29px × 29px each, last button 30px width):</li>
              <li style="list-style: none;">
                <ul style="margin: 4px 0 4px 20px;">
                  <li>First page (double chevron left)</li>
                  <li>Previous page (single chevron left)</li>
                  <li>Next page (single chevron right)</li>
                  <li>Last page (double chevron right)</li>
                  <li>Refresh (circular arrows)</li>
                </ul>
              </li>
              <li>7px gap between navigation buttons</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Inputs & Buttons:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Border radius: 6px</li>
              <li>Border: 1px solid #E4E4E7 (neutral-200)</li>
              <li>Background: #FFF</li>
              <li>Font size: 13px</li>
              <li>Font weight: 500</li>
              <li>Color: #4B5563 (gray-600)</li>
              <li>Letter spacing: -0.26px</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>States:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Hover:</strong> Background #F9FAFB, Border #D4D4D8</li>
              <li><strong>Focus:</strong> Border #2563EB (Blue-600), Shadow: 0 0 0 3px #FFF, 0 0 0 5px #DBEAFE (3px white gap + 2px blue ring)</li>
              <li><strong>Active:</strong> Background #F3F4F6</li>
              <li><strong>Disabled:</strong> Opacity 40%, cursor not-allowed, icon fill #D1D5DB</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Icons:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>SVG icons from Figma design</li>
              <li>Default fill: #939394</li>
              <li>Disabled fill: #D1D5DB</li>
              <li>Chevron-down (select): #848485</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Events:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><code>pageChange</code>: Emits new page number (number)</li>
              <li><code>pageSizeChange</code>: Emits new page size (number)</li>
              <li><code>paginationChange</code>: Emits { currentPage, pageSize }</li>
              <li><code>refresh</code>: Emits when refresh button clicked (void)</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Behavior:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Component is stateless - relies on inputs for display</li>
              <li>All state changes emit events for parent to handle</li>
              <li>Navigation buttons auto-disable at boundaries</li>
              <li>Page input validates on blur</li>
              <li>Compatible with Builder.io as a standalone component</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Responsive Behavior:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>On mobile (< 768px): Component wraps to multiple rows</li>
              <li>Right section takes full width on mobile</li>
              <li>Navigation controls maintain spacing and layout</li>
            </ul>
          </div>
        </section>
      </div>
    `,
  }),
};

// ===========================
// Usage Examples
// ===========================

export const UsageExamples: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 48px; padding: 24px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Pagination Usage Examples</h3>

        <!-- Example 1: Table with 5 items per page -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Small Table (5 items/page)</h4>
          <div style="background: #F9FAFB; padding: 16px; border-radius: 8px;">
            <div style="margin-bottom: 16px; font-size: 13px; color: #6B7280;">Table content would go here...</div>
            <storybook-pagination
              [currentPage]="1"
              [totalPages]="4"
              [pageSize]="5"
              [pageSizeOptions]="[5, 10, 20]"
              [totalItems]="18"
              [rangeLabel]="'1 - 5 de 18 ítems'">
            </storybook-pagination>
          </div>
        </div>

        <!-- Example 2: Medium table with 10 items per page -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Medium Table (10 items/page)</h4>
          <div style="background: #F9FAFB; padding: 16px; border-radius: 8px;">
            <div style="margin-bottom: 16px; font-size: 13px; color: #6B7280;">Table content would go here...</div>
            <storybook-pagination
              [currentPage]="3"
              [totalPages]="15"
              [pageSize]="10"
              [pageSizeOptions]="[10, 25, 50, 100]"
              [totalItems]="142"
              [rangeLabel]="'21 - 30 de 142 ítems'">
            </storybook-pagination>
          </div>
        </div>

        <!-- Example 3: Large dataset with 50 items per page -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Large Dataset (50 items/page)</h4>
          <div style="background: #F9FAFB; padding: 16px; border-radius: 8px;">
            <div style="margin-bottom: 16px; font-size: 13px; color: #6B7280;">Table content would go here...</div>
            <storybook-pagination
              [currentPage]="12"
              [totalPages]="40"
              [pageSize]="50"
              [pageSizeOptions]="[25, 50, 100, 200]"
              [totalItems]="1984"
              [rangeLabel]="'551 - 600 de 1984 ítems'">
            </storybook-pagination>
          </div>
        </div>

        <!-- Example 4: Dashboard with variable page sizes -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Dashboard View (Variable sizes)</h4>
          <div style="background: #F9FAFB; padding: 16px; border-radius: 8px;">
            <div style="margin-bottom: 16px; font-size: 13px; color: #6B7280;">Dashboard cards would go here...</div>
            <storybook-pagination
              [currentPage]="1"
              [totalPages]="8"
              [pageSize]="20"
              [pageSizeOptions]="[10, 20, 30, 50]"
              [totalItems]="152"
              [rangeLabel]="'1 - 20 de 152 ítems'">
            </storybook-pagination>
          </div>
        </div>
      </div>
    `,
  }),
};

// ===========================
// Interactive Playground
// ===========================

export const InteractivePlayground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;">
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive Pagination Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use the controls panel to adjust currentPage, totalPages, pageSize, and other properties
        </p>

        <div style="display: flex; justify-content: center; min-height: 120px; padding: 40px; background: #F8FAFC; border-radius: 8px;">
          <storybook-pagination
            [currentPage]="currentPage"
            [totalPages]="totalPages"
            [pageSize]="pageSize"
            [pageSizeOptions]="pageSizeOptions"
            [totalItems]="totalItems"
            [rangeLabel]="rangeLabel"
            (pageChange)="handlePageChange($event)"
            (pageSizeChange)="handlePageSizeChange($event)"
            (paginationChange)="handlePaginationChange($event)"
            (refresh)="handleRefresh()">
          </storybook-pagination>
        </div>

        <div style="margin-top: 32px; padding: 16px; background: #DBEAFE; border-radius: 8px; font-size: 13px; color: #1E3A8A; line-height: 1.6;">
          <strong>Tips:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>The page input field is editable - users can type page numbers directly</li>
            <li>Navigation buttons automatically disable at boundaries (first/last page)</li>
            <li>Page size selector allows users to change items per page</li>
            <li>The <code>rangeLabel</code> should be calculated by parent component based on currentPage, pageSize, and totalItems</li>
            <li>All events (<code>pageChange</code>, <code>pageSizeChange</code>, <code>paginationChange</code>, <code>refresh</code>) bubble up for parent handling</li>
            <li>Component is fully stateless - perfect for Builder.io integration</li>
            <li>When <code>totalPages</code> is 0, all navigation is disabled (empty state)</li>
          </ul>
        </div>

        <div style="margin-top: 24px; padding: 16px; background: #FEF3C7; border-radius: 8px; font-size: 13px; color: #78350F; line-height: 1.6;">
          <strong>Builder.io Integration:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>All <code>@Input</code> properties are editable in Builder.io's visual editor</li>
            <li>Use <code>pageSizeOptions</code> array to customize available page sizes</li>
            <li>The component only emits events - parent/container handles actual data fetching</li>
            <li>Responsive design works on mobile, tablet, and desktop</li>
          </ul>
        </div>
      </div>
    `,
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
