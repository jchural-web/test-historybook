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
  },
};

export default meta;
type Story = StoryObj<TableComponent>;

// =====================
// BASIC STRUCTURE
// =====================

/**
 * Basic table structure without extra compositions
 * Shows the core table with header, body, and pagination
 */
export const Basic: Story = {
  args: {
    title: 'Tarifario de Trámites y Servicios',
    variant: 'table-basic',
    disableExpansion: true,
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

// =====================
// EXAMPLES
// =====================

/**
 * Table with action buttons and badges
 * Demonstrates composition with Button and Badge components
 */
export const WithActions: Story = {
  tags: ['!dev'],
  args: {
    title: 'Beneficios Solicitados (Coordinador)',
    variant: 'table-actions',
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

/**
 * Table with long content and expansion
 * Demonstrates "Ver más…" functionality for cells with long text
 * Short text rows do NOT show the button, only long text rows do
 */
export const WithLongContent: Story = {
  args: {
    title: 'Descripciones de Servicios',
    variant: 'table-basic',
    tableColumns: [
      { key: 'number', label: 'N°', width: '50px' },
      { key: 'service', label: 'Servicio', width: '200px' },
      { key: 'description', label: 'Descripción', width: '550px' },
      { key: 'price', label: 'Precio', width: '100px' },
    ],
    tableRows: [
      {
        number: '1',
        service: 'Asesoría Académica',
        description:
          'Nuestro equipo de asesores académicos altamente capacitados te proporcionará orientación integral sobre tu carrera profesional, desarrollo de habilidades, planificación educativa y oportunidades de crecimiento en el mercado laboral actual. Nos enfocamos en entender tus objetivos personales y profesionales para ofrecerte recomendaciones personalizadas que se alineen con tus aspiraciones y el contexto del mercado global.',
        price: '$80',
      },
      {
        number: '2',
        service: 'Tutoría Privada',
        description:
          'Sesiones personalizadas con especialistas.',
        price: '$50',
      },
      {
        number: '3',
        service: 'Certificación AWS',
        description:
          'Preparación completa para el examen AWS Solutions Architect. Incluye simuladores, laboratorios prácticos, materiales en español y acceso de por vida. Instructores certificados con experiencia en arquitecturas en AWS en producción. Cada sesión cubre teoría y práctica con casos reales. Garantizamos apoyo hasta que apruebes el examen de certificación oficial.',
        price: '$150',
      },
      {
        number: '4',
        service: 'Consultoría',
        description:
          'Asesoría profesional.',
        price: '$200',
      },
      {
        number: '5',
        service: 'Desarrollo Profesional',
        description:
          'Programas especializados que cubren liderazgo, gestión de proyectos, comunicación efectiva, negociación, pensamiento estratégico y competencias demandadas por empresas modernas. Facilitadores traen experiencia del mundo corporativo. Comparten casos reales y soluciones prácticas. Al completar, estarás equipado con herramientas aplicables inmediatamente en tu rol.',
        price: '$120',
      },
    ],
    tablePagination: {
      currentPage: 1,
      totalPages: 1,
      pageSize: 5,
      pageSizeOptions: [5, 10, 20],
      totalItems: 5,
      rangeLabel: '1 - 5 de 5 ítems',
    },
  },
};

/**
 * Table with tabbed interface
 * Demonstrates composition with TabNavigation component
 */
export const WithTabs: Story = {
  tags: ['!dev'],
  args: {
    title: 'Historial de mensajes',
    variant: 'table-tabs',
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

/**
 * Table with list content variant
 * Demonstrates composition with numbered list format
 */
export const ListContent: Story = {
  tags: ['!dev'],
  args: {
    title: 'Versión Profesional',
    variant: 'list-content',
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

// =====================
// PLAYGROUND (Optional)
// =====================

/**
 * Interactive playground for Table
 */
export const Playground: Story = {
  tags: ['!dev'],
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
          [tableColumns]="tableColumns"
          [tableRows]="tableRows"
          [tablePagination]="tablePagination"
          [listItems]="listItems"
          [tabs]="tabs"
          [activeTabIndex]="activeTabIndex"
          [tabsPagination]="tabsPagination"
          [headerAction]="headerAction"
          [showActionsColumn]="showActionsColumn"
          (tabChange)="handleTabChange($event)">
        </bsg-table>

        <div style="margin-top: 32px; padding: 16px; background: #DBEAFE; border-radius: 8px; font-size: 13px; color: #1E3A8A; line-height: 1.6;">
          <strong>Table Features:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>4 variants: table-actions, table-basic, table-tabs, list-content</li>
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

// =====================
// SHOWCASE (Optional)
// =====================

/**
 * Complete showcase of Table component library
 */
export const Showcase: Story = {
  tags: ['!dev'],
  render: () => ({
    template: `
      <div style="font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; padding: 24px; max-width: 1400px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Table Component Library</h2>
        
        <!-- Table Basic Structure -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Basic Table Structure</h3>
          <p style="margin-bottom: 16px; color: #64748B; font-size: 14px;">
            Core table with header, body, and pagination. Foundation for all table compositions.
          </p>
          
          <bsg-table
            title="Tarifario de Trámites y Servicios"
            variant="table-basic"
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

        <!-- Table with Actions -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Composition: With Actions</h3>
          <p style="margin-bottom: 16px; color: #64748B; font-size: 14px;">
            Table composed with Button and Badge components for action workflows.
          </p>
          
          <bsg-table
            title="Beneficios Solicitados (Coordinador)"
            variant="table-actions"
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

        <!-- Table with Tabs -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Composition: With Tabs</h3>
          <p style="margin-bottom: 16px; color: #64748B; font-size: 14px;">
            Table composed with TabNavigation component for organized content.
          </p>
          
          <bsg-table
            title="Historial de mensajes"
            variant="table-tabs"
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

        <!-- List Content -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Composition: List Content</h3>
          <p style="margin-bottom: 16px; color: #64748B; font-size: 14px;">
            Alternative structure for sequential or feature lists. No table grid.
          </p>
          
          <bsg-table
            title="Versión Profesional"
            variant="list-content"
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
            <p style="margin: 16px 0 8px 0;"><strong>Core Structure (Basic):</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Header: Title, optional action button</li>
              <li>Body: Columns with headers, data rows, pagination</li>
              <li>No extra separators or wrappers beyond design spec</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Compositions (Examples):</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>With Actions:</strong> Table + Button (approve/reject) + Badge</li>
              <li><strong>With Tabs:</strong> Table + TabNavigation + Button (header action)</li>
              <li><strong>List Content:</strong> Table with list variant (no grid)</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Component Reuse:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Button component for action buttons</li>
              <li>Badge component for tags and badges</li>
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
