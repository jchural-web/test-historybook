import type { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

const meta: Meta<AccordionComponent> = {
  title: 'Example/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Accordion size',
    },
    variant: {
      control: 'select',
      options: ['default', 'table-actions', 'table-basic', 'table-tabs', 'list-content'],
      description: 'Accordion variant type',
    },
    items: {
      control: 'object',
      description: 'Array of accordion items with table data',
    },
  },
  args: {
    size: 'md',
    variant: 'table-basic',
    items: [],
  },
};

export default meta;
type Story = StoryObj<AccordionComponent>;

// ===========================
// Default - Table Actions Variant
// ===========================

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'table-actions',
    items: [
      {
        id: 'benefits-1',
        title: 'Beneficios Solicitados (Coordinador)',
        tableVariant: 'table-actions',
        showActionsColumn: true,
        tableColumns: [
          { key: 'benefit', label: 'Beneficio solicitado', width: '210px' },
          { key: 'program', label: 'Programa', width: '141px' },
          { key: 'date', label: 'Fecha', width: '88px' },
          { key: 'coordinator', label: 'Coordinador', width: '107px' },
        ],
        tableRows: [
          {
            benefit: 'Acceso al material oficial del PMI...',
            program: 'Curso Oficial de Preparación...',
            date: '28/02/2025',
            date_badge: true,
            date_badge_variant: 'secondary',
            coordinator: 'Bianca Mamani',
            actions: [
              { label: 'Aprobar', variant: 'approve' },
              { label: 'Rechazar', variant: 'reject' },
            ],
          },
        ],
        tablePagination: {
          currentPage: 1,
          totalPages: 1,
          pageSize: 5,
          pageSizeOptions: [5, 10, 20],
          totalItems: 1,
          rangeLabel: '1 - 1 de 1 ítems',
        },
      },
    ],
  },
};

// ===========================
// Table Actions Variant
// ===========================

export const TableActionsVariant: Story = {
  args: {
    size: 'md',
    variant: 'table-actions',
    items: [
      {
        id: 'benefits-1',
        title: 'Beneficios Solicitados Q1 2024',
        tableVariant: 'table-actions',
        showActionsColumn: true,
        tableColumns: [
          { key: 'benefit', label: 'Beneficio solicitado', width: '210px' },
          { key: 'program', label: 'Programa', width: '141px' },
          { key: 'date', label: 'Fecha', width: '88px' },
          { key: 'coordinator', label: 'Coordinador', width: '107px' },
        ],
        tableRows: [
          {
            benefit: 'Acceso al material oficial del PMI',
            program: 'Curso Oficial PMP',
            date: '28/02/2025',
            date_badge: true,
            date_badge_variant: 'secondary',
            coordinator: 'Bianca Mamani',
            actions: [
              { label: 'Aprobar', variant: 'approve' },
              { label: 'Rechazar', variant: 'reject' },
            ],
          },
        ],
        tablePagination: {
          currentPage: 1,
          totalPages: 1,
          pageSize: 5,
          pageSizeOptions: [5, 10, 20],
          totalItems: 1,
          rangeLabel: '1 - 1 de 1 ítems',
        },
      },
      {
        id: 'benefits-2',
        title: 'Beneficios Solicitados Q2 2024',
        tableVariant: 'table-actions',
        showActionsColumn: true,
        tableColumns: [
          { key: 'benefit', label: 'Beneficio solicitado', width: '210px' },
          { key: 'program', label: 'Programa', width: '141px' },
          { key: 'date', label: 'Fecha', width: '88px' },
          { key: 'coordinator', label: 'Coordinador', width: '107px' },
        ],
        tableRows: [
          {
            benefit: 'Beca Completa AWS',
            program: 'AWS Solutions Architect',
            date: '25/02/2025',
            date_badge: true,
            date_badge_variant: 'secondary',
            coordinator: 'Carlos López',
            actions: [
              { label: 'Aprobar', variant: 'approve' },
              { label: 'Rechazar', variant: 'reject' },
            ],
          },
        ],
        tablePagination: {
          currentPage: 1,
          totalPages: 1,
          pageSize: 5,
          pageSizeOptions: [5, 10, 20],
          totalItems: 1,
          rangeLabel: '1 - 1 de 1 ítems',
        },
      },
    ],
  },
};

// ===========================
// Table Basic Variant
// ===========================

export const TableBasicVariant: Story = {
  args: {
    size: 'md',
    variant: 'table-basic',
    items: [
      {
        id: 'tariffs-1',
        title: 'Tarifario de Trámites y Servicios',
        tableVariant: 'table-basic',
        tableColumns: [
          { key: 'number', label: 'N°', width: '50px' },
          { key: 'concept', label: 'Concepto', width: '218px' },
          { key: 'description', label: 'Descripción', width: '400px' },
          { key: 'amount', label: 'Monto (PEN)', width: '89px' },
        ],
        tableRows: [
          {
            number: '1',
            concept: 'Costos Gestión de Cobranza',
            description: 'Aplica cuando se realicen cualquiera de las siguientes formas de cobranza...',
            amount: '30.00',
          },
          {
            number: '2',
            concept: 'Emisión de duplicado de certificado',
            description: 'Cuando el alumno solicita una segunda copia del certificado...',
            amount: '50.00',
          },
        ],
      },
    ],
  },
};

// ===========================
// List Content Variant
// ===========================

export const ListContentVariant: Story = {
  args: {
    size: 'md',
    variant: 'list-content',
    items: [
      {
        id: 'plans-1',
        title: 'Versión Profesional',
        tableVariant: 'list-content',
        listItems: [
          { text: 'Acceso a material oficial completamente actualizado' },
          { text: 'Simulador con 195 preguntas del examen de certificación' },
          { text: 'Certificación oficial de participación en el curso' },
          { text: 'Acceso a laboratorios oficiales de AWS' },
          { text: 'Soporte técnico dedicado 24/7' },
        ],
      },
      {
        id: 'plans-2',
        title: 'Versión Empresarial',
        tableVariant: 'list-content',
        listItems: [
          { text: 'Todos los beneficios de la versión profesional' },
          { text: 'Formación personalizada para equipos (mínimo 5 personas)' },
          { text: 'Integración con sistemas empresariales' },
          { text: 'Reportes de progreso detallados' },
          { text: 'Soporte prioritario con SLA garantizado' },
        ],
      },
    ],
  },
};

// ===========================
// Multiple Tables in Accordion
// ===========================

export const MultipleTablesExample: Story = {
  args: {
    size: 'md',
    variant: 'table-actions',
    items: [
      {
        id: 'pending-benefits',
        title: 'Beneficios Pendientes de Aprobación (5 solicitudes)',
        tableVariant: 'table-actions',
        showActionsColumn: true,
        tableColumns: [
          { key: 'benefit', label: 'Beneficio', width: '200px' },
          { key: 'requestor', label: 'Solicitante', width: '150px' },
          { key: 'date', label: 'Fecha', width: '100px' },
        ],
        tableRows: [
          {
            benefit: 'Acceso Material PMI',
            requestor: 'Bianca Mamani',
            date: '28/02/2025',
            date_badge: true,
            date_badge_variant: 'secondary',
            actions: [
              { label: 'Aprobar', variant: 'approve' },
              { label: 'Rechazar', variant: 'reject' },
            ],
          },
          {
            benefit: 'Beca AWS',
            requestor: 'Carlos López',
            date: '25/02/2025',
            date_badge: true,
            date_badge_variant: 'secondary',
            actions: [
              { label: 'Aprobar', variant: 'approve' },
              { label: 'Rechazar', variant: 'reject' },
            ],
          },
        ],
        tablePagination: {
          currentPage: 1,
          totalPages: 1,
          pageSize: 10,
          pageSizeOptions: [5, 10, 20],
          totalItems: 5,
          rangeLabel: '1 - 2 de 5 ítems',
        },
      },
      {
        id: 'approved-benefits',
        title: 'Beneficios Aprobados (12 solicitudes)',
        tableVariant: 'table-actions',
        showActionsColumn: true,
        tableColumns: [
          { key: 'benefit', label: 'Beneficio', width: '200px' },
          { key: 'requestor', label: 'Solicitante', width: '150px' },
          { key: 'approvalDate', label: 'Fecha Aprobación', width: '100px' },
        ],
        tableRows: [
          {
            benefit: 'Material Curso PMP',
            requestor: 'María García',
            approvalDate: '20/02/2025',
            date_badge: true,
            date_badge_variant: 'success',
            actions: [{ label: 'Ver', variant: 'view' }],
          },
        ],
        tablePagination: {
          currentPage: 1,
          totalPages: 2,
          pageSize: 10,
          pageSizeOptions: [5, 10, 20],
          totalItems: 12,
          rangeLabel: '1 - 1 de 12 ítems',
        },
      },
      {
        id: 'rejected-benefits',
        title: 'Beneficios Rechazados (3 solicitudes)',
        tableVariant: 'table-actions',
        showActionsColumn: true,
        tableColumns: [
          { key: 'benefit', label: 'Beneficio', width: '200px' },
          { key: 'requestor', label: 'Solicitante', width: '150px' },
          { key: 'rejectionDate', label: 'Fecha Rechazo', width: '100px' },
        ],
        tableRows: [
          {
            benefit: 'Curso Especializado',
            requestor: 'Juan Rodríguez',
            rejectionDate: '15/02/2025',
            date_badge: true,
            date_badge_variant: 'destructive',
            actions: [{ label: 'Ver Razón', variant: 'view' }],
          },
        ],
        tablePagination: {
          currentPage: 1,
          totalPages: 1,
          pageSize: 10,
          pageSizeOptions: [5, 10, 20],
          totalItems: 3,
          rangeLabel: '1 - 1 de 3 ítems',
        },
      },
    ],
  },
};

// ===========================
// Design System Showcase
// ===========================

export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; padding: 24px; max-width: 1400px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Accordion Component Library</h2>
        
        <!-- Sizes -->
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600;">Sizes</h3>
          
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <!-- Small -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">Small (sm)</h4>
              <bsg-accordion 
                size="sm"
                variant="table-basic"
                [items]="[
                  {
                    id: 'sm-1',
                    title: 'Elemento de Acordeón Pequeño',
                    tableVariant: 'table-basic',
                    tableColumns: [
                      { key: 'name', label: 'Nombre', width: '150px' },
                      { key: 'value', label: 'Valor', width: '150px' }
                    ],
                    tableRows: [
                      { name: 'Item 1', value: 'Datos 1' }
                    ]
                  }
                ]">
              </bsg-accordion>
            </div>

            <!-- Medium -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">Medium (md) - Default</h4>
              <bsg-accordion 
                size="md"
                variant="table-basic"
                [items]="[
                  {
                    id: 'md-1',
                    title: 'Elemento de Acordeón Mediano',
                    tableVariant: 'table-basic',
                    tableColumns: [
                      { key: 'name', label: 'Nombre', width: '200px' },
                      { key: 'value', label: 'Valor', width: '200px' }
                    ],
                    tableRows: [
                      { name: 'Item 1', value: 'Datos 1' }
                    ]
                  }
                ]">
              </bsg-accordion>
            </div>

            <!-- Large -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">Large (lg)</h4>
              <bsg-accordion 
                size="lg"
                variant="table-basic"
                [items]="[
                  {
                    id: 'lg-1',
                    title: 'Elemento de Acordeón Grande',
                    tableVariant: 'table-basic',
                    tableColumns: [
                      { key: 'name', label: 'Nombre', width: '300px' },
                      { key: 'value', label: 'Valor', width: '300px' }
                    ],
                    tableRows: [
                      { name: 'Item 1', value: 'Datos 1' }
                    ]
                  }
                ]">
              </bsg-accordion>
            </div>
          </div>
        </section>

        <!-- Variants -->
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600;">Table Variants</h3>
          
          <div style="display: flex; flex-direction: column; gap: 32px;">
            <!-- Table Actions -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">Table Actions (with approval buttons)</h4>
              <bsg-accordion 
                size="md"
                variant="table-actions"
                [items]="[
                  {
                    id: 'showcase-actions',
                    title: 'Beneficios Solicitados',
                    tableVariant: 'table-actions',
                    showActionsColumn: true,
                    tableColumns: [
                      { key: 'benefit', label: 'Beneficio', width: '200px' },
                      { key: 'requester', label: 'Solicitante', width: '150px' }
                    ],
                    tableRows: [
                      {
                        benefit: 'Material Oficial PMI',
                        requester: 'Bianca Mamani',
                        actions: [
                          { label: 'Aprobar', variant: 'approve' },
                          { label: 'Rechazar', variant: 'reject' }
                        ]
                      }
                    ]
                  }
                ]">
              </bsg-accordion>
            </div>

            <!-- Table Basic -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">Table Basic (pricing/data)</h4>
              <bsg-accordion 
                size="md"
                variant="table-basic"
                [items]="[
                  {
                    id: 'showcase-basic',
                    title: 'Tarifario de Servicios',
                    tableVariant: 'table-basic',
                    tableColumns: [
                      { key: 'service', label: 'Servicio', width: '200px' },
                      { key: 'cost', label: 'Costo', width: '100px' }
                    ],
                    tableRows: [
                      { service: 'Gestión de Cobranza', cost: '30.00' }
                    ]
                  }
                ]">
              </bsg-accordion>
            </div>

            <!-- List Content -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">List Content (features/benefits)</h4>
              <bsg-accordion 
                size="md"
                variant="list-content"
                [items]="[
                  {
                    id: 'showcase-list',
                    title: 'Versión Profesional - Características',
                    tableVariant: 'list-content',
                    listItems: [
                      { text: 'Acceso a material oficial completamente actualizado' },
                      { text: 'Simulador con 195 preguntas de certificación' },
                      { text: 'Certificación oficial de participación' }
                    ]
                  }
                ]">
              </bsg-accordion>
            </div>
          </div>
        </section>

        <!-- Design Specifications -->
        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Design Specifications</h3>
          <div style="font-size: 14px; color: #64748B; line-height: 1.6;">
            <p style="margin: 12px 0;"><strong>Component:</strong> bsg-accordion</p>
            
            <p style="margin: 12px 0;"><strong>Sizes:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>sm: 12px padding, 14px font size</li>
              <li>md: 16px padding, 16px font size (default)</li>
              <li>lg: 20px padding, 18px font size</li>
            </ul>

            <p style="margin: 12px 0;"><strong>Variants (Table types):</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>table-actions: With action buttons (approve/reject)</li>
              <li>table-basic: For tabular data with pricing/details</li>
              <li>table-tabs: Multiple tabs with tables</li>
              <li>list-content: For lists of features/benefits</li>
            </ul>

            <p style="margin: 12px 0;"><strong>Features:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Integrates with bsg-table component</li>
              <li>Chevron icon on right side</li>
              <li>Smooth expand/collapse animation</li>
              <li>Supports all table variants</li>
              <li>Accessible (ARIA labels, keyboard navigation)</li>
              <li>Multiple items can be expanded independently</li>
            </ul>
          </div>
        </section>
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
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive Accordion Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use controls to adjust size, variant, and items
        </p>

        <bsg-accordion
          [size]="size"
          [variant]="variant"
          [items]="items">
        </bsg-accordion>

        <div style="margin-top: 32px; padding: 16px; background: #DBEAFE; border-radius: 8px; font-size: 13px; color: #1E3A8A; line-height: 1.6;">
          <strong>Tips:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>Click on accordion header to expand/collapse</li>
            <li>Chevron icon on right side indicates expand state</li>
            <li>Each accordion item renders a table component</li>
            <li>Multiple items can be expanded independently</li>
            <li>All table variants (actions, basic, tabs, list) are supported</li>
          </ul>
        </div>
      </div>
    `,
  }),
  args: {
    size: 'md',
    variant: 'table-basic',
    items: [
      {
        id: 'playground-1',
        title: 'Primer Acordeón con Tabla',
        tableVariant: 'table-basic',
        tableColumns: [
          { key: 'item', label: 'Elemento', width: '200px' },
          { key: 'description', label: 'Descripción', width: '300px' },
        ],
        tableRows: [
          {
            item: 'Ejemplo 1',
            description: 'Este es un acordeón con tabla integrada',
          },
        ],
      },
      {
        id: 'playground-2',
        title: 'Segundo Acordeón con Tabla',
        tableVariant: 'table-basic',
        tableColumns: [
          { key: 'item', label: 'Elemento', width: '200px' },
          { key: 'description', label: 'Descripción', width: '300px' },
        ],
        tableRows: [
          {
            item: 'Ejemplo 2',
            description: 'Haz clic para expandir y ver la tabla',
          },
        ],
      },
    ],
  },
};
