import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from './table.component';

const meta: Meta<TableComponent> = {
  title: 'Example/Table',
  component: TableComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Container title',
    },
    variant: {
      control: 'select',
      options: ['table-basic', 'table-actions', 'table-tabs', 'list-content'],
      description: 'Display variant',
    },
    collapsible: {
      control: 'boolean',
      description: 'Whether the container is collapsible',
    },
    collapsed: {
      control: 'boolean',
      description: 'Initial collapsed state',
    },
  },
};

export default meta;
type Story = StoryObj<TableComponent>;

// ===========================
// Table Actions Variant
// ===========================

export const TableActions: Story = {
  args: {
    title: 'Beneficios Solicitados (Coordinador)',
    variant: 'table-actions',
    collapsible: true,
    collapsed: false,
    showActionsColumn: true,
    actionsColumnLabel: 'Aprobar solicitud',
    actionsColumnWidth: '120px',
    tableColumns: [
      { key: 'benefit', label: 'Beneficio solicitado', width: '210px' },
      { key: 'program', label: 'Programa', width: '141px' },
      { key: 'centerCost', label: 'Centro costo', width: '112px' },
      { key: 'date', label: 'Fecha', width: '88px' },
      { key: 'coordinator', label: 'Coordinador', width: '107px' },
    ],
    tableRows: [
      {
        benefit:
          'Acceso al material oficial del PMI elaborado a partir del Esquema de Contenido del Examen PMP® (ECO) vigente para el desarrollo del Curso...',
        benefit_label: false,
        program: 'Curso Oficial de Preparación para el Examen Project Management...',
        program_label: false,
        centerCost: 'PREP EXAMPMP ONLINE 2024 XIV LIMA',
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
};

// ===========================
// Table Basic Variant
// ===========================

export const TableBasic: Story = {
  args: {
    title: 'Tarifario de Trámites y Servicios',
    variant: 'table-basic',
    collapsible: true,
    collapsed: false,
    tableColumns: [
      { key: 'number', label: 'N°', width: '50px' },
      { key: 'concept', label: 'Concepto', width: '218px' },
      { key: 'description', label: 'Descripción', width: '622px' },
      { key: 'amount', label: 'Monto (PEN)', width: '89px' },
    ],
    tableRows: [
      {
        number: '1',
        concept: 'Costos Gestión de Cobranza',
        description:
          'Aplica cuando se realicen cualquiera de las siguientes formas de cobranza de una cuota con más de 5 días de vencimiento: llamadas telefónica, visitas, envió de cartas notariales u otros.',
        amount: '30.00',
      },
      {
        number: '2',
        concept: 'Emisión de duplicado de certificado de estudios BSG Institute.',
        description:
          'Cuando el alumno solicita una segunda copia del certificado de estudios emitido por BSG Insitute.',
        amount: '50.00',
      },
      {
        number: '3',
        concept: 'Emisión de duplicado de certificado de estudios partner.',
        description:
          'Cuando el alumno solicita una segunda copia del certificado de estudios emitido por el partner.',
        amount: '30.00',
      },
      {
        number: '4',
        concept: 'Calificación de trabajos fuera de plazo.',
        description:
          'Cuando se haya superado el plazo para calificación y requiera una revisión en fecha posterior a la establecida.',
        amount: '30.00',
      },
    ],
    tablePagination: {
      currentPage: 1,
      totalPages: 1,
      pageSize: 5,
      pageSizeOptions: [5, 10, 20],
      totalItems: 4,
      rangeLabel: '1 - 4 de 4 ítems',
    },
  },
};

// ===========================
// Table Tabs Variant
// ===========================

export const TableTabs: Story = {
  args: {
    title: 'Historial de mensajes',
    variant: 'table-tabs',
    collapsible: true,
    collapsed: false,
    activeTabIndex: 0,
    headerAction: {
      label: 'Nuevo mensaje',
      variant: 'default',
      size: 'md',
    },
    tabs: [
      {
        label: 'Correos recibidos',
        count: 3,
        tableData: {
          columns: [
            { key: 'date', label: 'Fecha', width: '158px' },
            { key: 'subject', label: 'Asunto', width: '280px' },
            { key: 'sender', label: 'Remitente', width: '207px' },
            { key: 'actions', label: 'Acciones', width: '67px' },
          ],
          rows: [
            {
              date: '15/04/2024  | 10:15 AM',
              date_badge: false,
              subject: 'Confirmación de inscripción al programa',
              sender: 'admisiones@bsginstitute.com',
              actions: 'Ver',
              actions_badge: false,
            },
            {
              date: '16/04/2024  | 09:15 AM',
              date_badge: false,
              subject: 'Bienvenida al programa PREP EXAMPMP',
              sender: 'admisiones@bsginstitute.com',
              actions: 'Ver',
              actions_badge: false,
            },
          ],
        },
      },
      {
        label: 'Correos enviados',
        count: 2,
        tableData: {
          columns: [
            { key: 'date', label: 'Fecha', width: '158px' },
            { key: 'subject', label: 'Asunto', width: '280px' },
            { key: 'sender', label: 'Remitente', width: '207px' },
            { key: 'actions', label: 'Acciones', width: '67px' },
          ],
          rows: [],
        },
      },
      {
        label: 'Correos Masivos',
        count: 2,
        tableData: {
          columns: [
            { key: 'date', label: 'Fecha', width: '158px' },
            { key: 'subject', label: 'Asunto', width: '280px' },
            { key: 'sender', label: 'Remitente', width: '207px' },
            { key: 'actions', label: 'Acciones', width: '67px' },
          ],
          rows: [],
        },
      },
      {
        label: 'WhatsApp Comercial',
        count: 1,
        tableData: {
          columns: [
            { key: 'date', label: 'Fecha', width: '158px' },
            { key: 'subject', label: 'Asunto', width: '280px' },
            { key: 'sender', label: 'Remitente', width: '207px' },
            { key: 'actions', label: 'Acciones', width: '67px' },
          ],
          rows: [],
        },
      },
    ],
    tabsPagination: [
      {
        currentPage: 1,
        totalPages: 1,
        pageSize: 5,
        pageSizeOptions: [5, 10, 20],
        totalItems: 2,
        rangeLabel: '1 - 2 de 2 ítems',
      },
      {
        currentPage: 1,
        totalPages: 1,
        pageSize: 5,
        pageSizeOptions: [5, 10, 20],
        totalItems: 0,
        rangeLabel: '0 - 0 de 0 ítems',
      },
      {
        currentPage: 1,
        totalPages: 1,
        pageSize: 5,
        pageSizeOptions: [5, 10, 20],
        totalItems: 0,
        rangeLabel: '0 - 0 de 0 ítems',
      },
      {
        currentPage: 1,
        totalPages: 1,
        pageSize: 5,
        pageSizeOptions: [5, 10, 20],
        totalItems: 0,
        rangeLabel: '0 - 0 de 0 ítems',
      },
    ],
  },
};

// ===========================
// List Content Variant
// ===========================

export const ListContent: Story = {
  args: {
    title: 'Versión Profesional',
    variant: 'list-content',
    collapsible: true,
    collapsed: false,
    listItems: [
      {
        text: 'Aplicarás técnicas avanzadas en el diseño de arquitecturas seguras, escalables y optimizadas en AWS, aplicables directamente a tu entorno laboral para resolver problemas complejos.',
      },
      {
        text: 'Obtendrás acceso al simulador en español BSG AWS - CSA Tento® con 195 preguntas del examen de certificación AWS Certified Solutions Architect - Associate.',
      },
      {
        text: 'Obtendrás la Certificación Oficial de AWS de participación en el curso.',
      },
      {
        text: 'Obtendrás acceso al Laboratorio oficial de Architecting on AWS',
      },
      {
        text: 'Obtendrás acceso al Laboratorio oficial Technical Essentials',
      },
    ],
  },
};

// ===========================
// Collapsed States
// ===========================

export const CollapsedTableBasic: Story = {
  args: {
    ...TableBasic.args,
    collapsed: true,
  },
};

export const CollapsedTableActions: Story = {
  args: {
    ...TableActions.args,
    collapsed: true,
  },
};

export const CollapsedTableTabs: Story = {
  args: {
    ...TableTabs.args,
    collapsed: true,
  },
};

export const CollapsedListContent: Story = {
  args: {
    ...ListContent.args,
    collapsed: true,
  },
};

// ===========================
// Non-Collapsible
// ===========================

export const NonCollapsible: Story = {
  args: {
    title: 'Información Permanente',
    variant: 'list-content',
    collapsible: false,
    collapsed: false,
    listItems: [
      { text: 'Esta información siempre está visible.' },
      { text: 'No puede ser colapsada por el usuario.' },
      { text: 'Útil para contenido crítico o importante.' },
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
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Table Component Library</h2>
        
        <!-- Table Actions Variant -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Table Actions Variant</h3>
          <p style="margin-bottom: 16px; color: #64748B; font-size: 14px;">
            Table with action buttons (Aprobar/Rechazar) and badges in cells. Perfect for approval workflows.
          </p>
          
          <bsg-table
            title="Beneficios Solicitados (Coordinador)"
            variant="table-actions"
            [collapsible]="true"
            [collapsed]="false"
            [showActionsColumn]="true"
            actionsColumnLabel="Aprobar solicitud"
            actionsColumnWidth="120px"
            [tableColumns]="[
              { key: 'benefit', label: 'Beneficio solicitado', width: '210px' },
              { key: 'program', label: 'Programa', width: '141px' },
              { key: 'date', label: 'Fecha', width: '88px' },
              { key: 'coordinator', label: 'Coordinador', width: '107px' }
            ]"
            [tableRows]="[
              {
                benefit: 'Acceso al material oficial del PMI...',
                program: 'Curso Oficial de Preparación...',
                date: '28/02/2025',
                date_badge: true,
                date_badge_variant: 'secondary',
                coordinator: 'Bianca Mamani',
                actions: [
                  { label: 'Aprobar', variant: 'approve' },
                  { label: 'Rechazar', variant: 'reject' }
                ]
              }
            ]"
            [tablePagination]="{
              currentPage: 1,
              totalPages: 1,
              pageSize: 5,
              pageSizeOptions: [5, 10, 20],
              totalItems: 1,
              rangeLabel: '1 - 1 de 1 ítems'
            }">
          </bsg-table>
        </section>

        <!-- Table Basic Variant -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Table Basic Variant</h3>
          <p style="margin-bottom: 16px; color: #64748B; font-size: 14px;">
            Standard table with columns, rows, and pagination. Ideal for displaying structured data.
          </p>
          
          <bsg-table
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
                description: 'Aplica cuando se realicen cualquiera de las siguientes formas de cobranza...',
                amount: '30.00'
              },
              {
                number: '2',
                concept: 'Emisión de duplicado de certificado',
                description: 'Cuando el alumno solicita una segunda copia del certificado...',
                amount: '50.00'
              }
            ]"
            [tablePagination]="{
              currentPage: 1,
              totalPages: 1,
              pageSize: 5,
              pageSizeOptions: [5, 10, 20],
              totalItems: 2,
              rangeLabel: '1 - 2 de 2 ítems'
            }">
          </bsg-table>
        </section>

        <!-- Table Tabs Variant -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Table Tabs Variant</h3>
          <p style="margin-bottom: 16px; color: #64748B; font-size: 14px;">
            Tabbed interface with tables. Each tab contains its own table with pagination.
          </p>
          
          <bsg-table
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
                count: 2,
                tableData: {
                  columns: [
                    { key: 'date', label: 'Fecha', width: '158px' },
                    { key: 'subject', label: 'Asunto', width: '280px' },
                    { key: 'sender', label: 'Remitente', width: '207px' }
                  ],
                  rows: [
                    {
                      date: '15/04/2024 | 10:15 AM',
                      subject: 'Confirmación de inscripción',
                      sender: 'admisiones@bsginstitute.com'
                    }
                  ]
                }
              },
              {
                label: 'Correos enviados',
                count: 0,
                tableData: {
                  columns: [
                    { key: 'date', label: 'Fecha', width: '158px' },
                    { key: 'subject', label: 'Asunto', width: '280px' }
                  ],
                  rows: []
                }
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
                totalItems: 0,
                rangeLabel: '0 - 0 de 0 ítems'
              }
            ]">
          </bsg-table>
        </section>

        <!-- List Content Variant -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">List Content Variant</h3>
          <p style="margin-bottom: 16px; color: #64748B; font-size: 14px;">
            Numbered list format for sequential content or features. No table structure.
          </p>
          
          <bsg-table
            title="Versión Profesional"
            variant="list-content"
            [collapsible]="true"
            [collapsed]="false"
            [listItems]="[
              {
                text: 'Aplicarás técnicas avanzadas en el diseño de arquitecturas seguras, escalables y optimizadas en AWS.'
              },
              {
                text: 'Obtendrás acceso al simulador en español BSG AWS - CSA Tento® con 195 preguntas.'
              },
              {
                text: 'Obtendrás la Certificación Oficial de AWS de participación en el curso.'
              }
            ]">
          </bsg-table>
        </section>

        <!-- Design Specifications -->
        <section style="margin-top: 64px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          
          <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
            <p style="margin: 16px 0 8px 0;"><strong>Variants:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>table-actions:</strong> Table with action buttons/badges in cells</li>
              <li><strong>table-basic:</strong> Standard table with columns and rows</li>
              <li><strong>table-tabs:</strong> Tabbed interface with tables</li>
              <li><strong>list-content:</strong> Numbered list without table grid</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Component Reuse:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Button component for action buttons</li>
              <li>Badge/Label component for tags and badges</li>
              <li>TabNavigation for tabs variant</li>
              <li>Pagination for table footer</li>
              <li>Separator for dividers</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Border System:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>External container: 1px solid #CBD5E1, 12px radius</li>
              <li>Table wrapper: 1px solid #CBD5E1, 6px radius (inner border)</li>
              <li>Row separators: 1px solid #CBD5E1</li>
              <li>No extra shadows or borders</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Colors:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Header background: #DBEAFE (Blue-100)</li>
              <li>Title: #2563EB (Blue-600), 16px, 600 weight</li>
              <li>Table header background: #EFF6FF (Blue-50)</li>
              <li>Column headers: #2563EB, 14px, 500 weight</li>
              <li>Row cells: #334155 (neutral-700), 14px, 500 weight</li>
              <li>Borders: #CBD5E1 (neutral-300)</li>
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
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive Table Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use the controls panel to test all variants and options
        </p>

        <bsg-table
          [title]="title"
          [variant]="variant"
          [collapsible]="collapsible"
          [collapsed]="collapsed"
          [tableColumns]="tableColumns"
          [tableRows]="tableRows"
          [tablePagination]="tablePagination"
          [listItems]="listItems"
          [tabs]="tabs"
          [activeTabIndex]="activeTabIndex"
          [tabsPagination]="tabsPagination"
          [headerAction]="headerAction"
          [showActionsColumn]="showActionsColumn"
          (collapseChange)="handleCollapseChange($event)"
          (tabChange)="handleTabChange($event)">
        </bsg-table>

        <div style="margin-top: 32px; padding: 16px; background: #DBEAFE; border-radius: 8px; font-size: 13px; color: #1E3A8A; line-height: 1.6;">
          <strong>Table Features:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>4 variants: table-actions, table-basic, table-tabs, list-content</li>
            <li>Collapsible/non-collapsible options</li>
            <li>Reuses Button, Badge, TabNavigation, Pagination, Separator components</li>
            <li>Pixel-perfect borders and spacing from Figma</li>
            <li>Responsive design with mobile support</li>
          </ul>
        </div>
      </div>
    `,
  }),
  args: {
    title: 'Table Demo',
    variant: 'table-basic',
    collapsible: true,
    collapsed: false,
    showActionsColumn: false,
    tableColumns: [
      { key: 'id', label: 'ID', width: '80px' },
      { key: 'name', label: 'Nombre', width: '200px' },
      { key: 'status', label: 'Estado', width: '150px' },
    ],
    tableRows: [
      {
        id: '001',
        name: 'Proyecto Alpha',
        status: 'Activo',
        status_badge: true,
        status_badge_variant: 'success',
      },
      {
        id: '002',
        name: 'Proyecto Beta',
        status: 'Pendiente',
        status_badge: true,
        status_badge_variant: 'secondary',
      },
    ],
    tablePagination: {
      currentPage: 1,
      totalPages: 1,
      pageSize: 5,
      pageSizeOptions: [5, 10, 20],
      totalItems: 2,
      rangeLabel: '1 - 2 de 2 ítems',
    },
    listItems: [],
    tabs: [],
    activeTabIndex: 0,
    tabsPagination: [],
    headerAction: undefined,
  },
};
