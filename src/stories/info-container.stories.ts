import type { Meta, StoryObj } from '@storybook/angular';
import { InfoContainerComponent } from './info-container.component';

const meta: Meta<InfoContainerComponent> = {
  title: 'Example/InfoContainer',
  component: InfoContainerComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Container title',
    },
    variant: {
      control: 'select',
      options: ['table', 'list', 'tabs'],
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
type Story = StoryObj<InfoContainerComponent>;

// ===========================
// Table Variant
// ===========================

export const TableVariant: Story = {
  args: {
    title: 'Tarifario de Trámites y Servicios',
    variant: 'table',
    collapsible: true,
    collapsed: false,
    tableColumns: [
      { key: 'number', label: 'N°', width: '50px' },
      { key: 'concept', label: 'Concepto', width: '210px' },
      { key: 'description', label: 'Descripción', width: '600px' },
      { key: 'amount', label: 'Monto (PEN)', width: '100px' },
    ],
    tableRows: [
      {
        number: '1',
        concept: 'Costos Gestión de Cobranza',
        description: 'Aplica cuando se realicen cualquiera de las siguientes formas de cobranza de una cuota con más de 5 días de vencimiento: llamadas telefónica, visitas, envió de cartas notariales u otros.',
        amount: '30.00',
      },
      {
        number: '2',
        concept: 'Emisión de duplicado de certificado de estudios BSG Institute.',
        description: 'Cuando el alumno solicita una segunda copia del certificado de estudios emitido por BSG Insitute.',
        amount: '50.00',
      },
      {
        number: '3',
        concept: 'Emisión de duplicado de certificado de estudios partner.',
        description: 'Cuando el alumno solicita una segunda copia del certificado de estudios emitido por el partner.',
        amount: '30.00',
      },
      {
        number: '4',
        concept: 'Calificación de trabajos fuera de plazo.',
        description: 'Cuando se haya superado el plazo para calificación y requiera una revisión en fecha posterior a la establecida.',
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
// List Variant
// ===========================

export const ListVariant: Story = {
  args: {
    title: 'Metodología Online de este Programa',
    variant: 'list',
    collapsible: true,
    collapsed: false,
    listIntro: 'La metodología consta de los siguientes componentes:',
    listItems: [
      { text: 'Sesiones de clases grabadas publicadas en el Aula Virtual de BSG Institute y accesibles en línea 24 horas 7 días a la semana.' },
      { text: 'Auto-evaluaciones semanales.' },
      { text: 'Interacción de los alumnos con el profesor a través del foro virtual de preguntas.' },
      { text: 'Desarrollo de un trabajo de aplicación práctica a ser revisado por el expositor/tutor del programa.' },
      { text: 'Aplicación de una evaluación final.' },
      { text: 'Interacción de los alumnos con el profesor mediante Q&A webinars en vivo, donde los alumnos podrán plantear sus dudas a los expositores y/o tutores.' },
    ],
  },
};

// ===========================
// Tabs Variant
// ===========================

export const TabsVariant: Story = {
  args: {
    title: 'Solicitud de cambios: Centro de costo, fecha finalización, estado, sub estado y asistente asignado',
    variant: 'tabs',
    collapsible: true,
    collapsed: false,
    activeTabIndex: 0,
    tabs: [
      {
        label: 'Solicitudes Pendientes',
        count: 1,
        tableData: {
          columns: [
            { key: 'type', label: 'Tipo de Solicitud', width: '150px' },
            { key: 'previousValue', label: 'Valor Anterior', width: '200px' },
            { key: 'newValue', label: 'Valor Nuevo', width: '200px' },
            { key: 'requester', label: 'Solicitante', width: '150px' },
            { key: 'date', label: 'Fecha Solicitud', width: '180px' },
          ],
          rows: [
            {
              type: 'Subestado',
              type_label: true,
              type_label_variant: 'success-light',
              previousValue: 'Por emitir certificado aprobado',
              newValue: 'Certificado emitido',
              requester: 'Bianca Mamani',
              date: '08/12/2025 | 4:09 p.m',
            },
          ],
        },
      },
      {
        label: 'Solicitudes Realizadas',
        count: 3,
        tableData: {
          columns: [
            { key: 'type', label: 'Tipo de Solicitud', width: '150px' },
            { key: 'previousValue', label: 'Valor Anterior', width: '200px' },
            { key: 'newValue', label: 'Valor Nuevo', width: '200px' },
            { key: 'requester', label: 'Solicitante', width: '150px' },
            { key: 'date', label: 'Fecha Solicitud', width: '180px' },
          ],
          rows: [
            {
              type: 'Estado',
              type_label: true,
              type_label_variant: 'success',
              previousValue: 'En proceso',
              newValue: 'Completado',
              requester: 'Juan Pérez',
              date: '07/12/2025 | 2:30 p.m',
            },
            {
              type: 'Centro de costo',
              type_label: true,
              type_label_variant: 'neutral',
              previousValue: 'CC-001',
              newValue: 'CC-002',
              requester: 'María García',
              date: '06/12/2025 | 10:15 a.m',
            },
            {
              type: 'Asistente',
              type_label: true,
              type_label_variant: 'success-light',
              previousValue: 'Carlos López',
              newValue: 'Ana Martínez',
              requester: 'Pedro Sánchez',
              date: '05/12/2025 | 4:45 p.m',
            },
          ],
        },
      },
      {
        label: 'Historial de Cambios de Asistente',
        count: 5,
        tableData: {
          columns: [
            { key: 'type', label: 'Tipo de Solicitud', width: '150px' },
            { key: 'previousValue', label: 'Valor Anterior', width: '200px' },
            { key: 'newValue', label: 'Valor Nuevo', width: '200px' },
            { key: 'requester', label: 'Solicitante', width: '150px' },
            { key: 'date', label: 'Fecha Solicitud', width: '180px' },
          ],
          rows: [
            {
              type: 'Asistente',
              type_label: true,
              type_label_variant: 'success',
              previousValue: 'Roberto Torres',
              newValue: 'Laura Díaz',
              requester: 'Admin Sistema',
              date: '04/12/2025 | 9:00 a.m',
            },
            {
              type: 'Asistente',
              type_label: true,
              type_label_variant: 'success',
              previousValue: 'Carmen Ruiz',
              newValue: 'Roberto Torres',
              requester: 'Admin Sistema',
              date: '01/12/2025 | 3:20 p.m',
            },
          ],
        },
      },
    ],
    tabsPagination: [
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
        totalItems: 3,
        rangeLabel: '1 - 3 de 3 ítems',
      },
      {
        currentPage: 1,
        totalPages: 1,
        pageSize: 5,
        pageSizeOptions: [5, 10, 20],
        totalItems: 2,
        rangeLabel: '1 - 2 de 2 ítems',
      },
    ],
  },
};

// ===========================
// Collapsed State
// ===========================

export const CollapsedTable: Story = {
  args: {
    title: 'Tarifario de Trámites y Servicios',
    variant: 'table',
    collapsible: true,
    collapsed: true,
    tableColumns: [
      { key: 'number', label: 'N°', width: '50px' },
      { key: 'concept', label: 'Concepto', width: '210px' },
      { key: 'description', label: 'Descripción', width: '600px' },
      { key: 'amount', label: 'Monto (PEN)', width: '100px' },
    ],
    tableRows: [
      {
        number: '1',
        concept: 'Costos Gestión de Cobranza',
        description: 'Aplica cuando se realicen cualquiera de las siguientes formas de cobranza.',
        amount: '30.00',
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

export const CollapsedList: Story = {
  args: {
    title: 'Metodología Online de este Programa',
    variant: 'list',
    collapsible: true,
    collapsed: true,
    listIntro: 'La metodología consta de los siguientes componentes:',
    listItems: [
      { text: 'Sesiones de clases grabadas publicadas en el Aula Virtual.' },
      { text: 'Auto-evaluaciones semanales.' },
    ],
  },
};

export const CollapsedTabs: Story = {
  args: {
    ...TabsVariant.args,
    collapsed: true,
  },
};

// ===========================
// Non-Collapsible
// ===========================

export const NonCollapsible: Story = {
  args: {
    title: 'Información Permanente',
    variant: 'list',
    collapsible: false,
    collapsed: false,
    listIntro: 'Esta información siempre está visible:',
    listItems: [
      { text: 'Información importante que no puede ser ocultada.' },
      { text: 'Detalles críticos del sistema.' },
      { text: 'Datos de contacto de emergencia.' },
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
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">InfoContainer Component Library</h2>
        
        <!-- Table Variant -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Table Variant</h3>
          <p style="margin-bottom: 16px; color: #64748B; font-size: 14px;">
            Displays data in table format with pagination. Reuses TabNavigation, Pagination, Separator, and Label components.
          </p>
          
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
                description: 'Aplica cuando se realicen cualquiera de las siguientes formas de cobranza de una cuota con más de 5 días de vencimiento: llamadas telefónica, visitas, envió de cartas notariales u otros.',
                amount: '30.00'
              },
              {
                number: '2',
                concept: 'Emisión de duplicado de certificado de estudios BSG Institute.',
                description: 'Cuando el alumno solicita una segunda copia del certificado de estudios emitido por BSG Insitute.',
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
          </storybook-info-container>
        </section>

        <!-- List Variant -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">List Variant</h3>
          <p style="margin-bottom: 16px; color: #64748B; font-size: 14px;">
            Displays content as a bullet-point list with optional introduction text. Uses Separator component.
          </p>
          
          <storybook-info-container
            title="Metodología Online de este Programa"
            variant="list"
            [collapsible]="true"
            [collapsed]="false"
            listIntro="La metodología consta de los siguientes componentes:"
            [listItems]="[
              { text: 'Sesiones de clases grabadas publicadas en el Aula Virtual de BSG Institute y accesibles en línea 24 horas 7 días a la semana.' },
              { text: 'Auto-evaluaciones semanales.' },
              { text: 'Interacción de los alumnos con el profesor a través del foro virtual de preguntas.' },
              { text: 'Desarrollo de un trabajo de aplicación práctica a ser revisado por el expositor/tutor del programa.' }
            ]">
          </storybook-info-container>
        </section>

        <!-- Tabs Variant -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Tabs Variant</h3>
          <p style="margin-bottom: 16px; color: #64748B; font-size: 14px;">
            Displays tabbed content with tables inside each tab. Reuses TabNavigation, Pagination, Separator, and Label components.
          </p>
          
          <storybook-info-container
            title="Solicitud de cambios: Centro de costo, fecha finalización, estado, sub estado y asistente asignado"
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
                    { key: 'previousValue', label: 'Valor Anterior', width: '200px' },
                    { key: 'newValue', label: 'Valor Nuevo', width: '200px' }
                  ],
                  rows: [
                    {
                      type: 'Subestado',
                      type_label: true,
                      type_label_variant: 'success-light',
                      previousValue: 'Por emitir certificado',
                      newValue: 'Certificado emitido'
                    }
                  ]
                }
              },
              {
                label: 'Solicitudes Realizadas',
                count: 3,
                tableData: {
                  columns: [
                    { key: 'type', label: 'Tipo de Solicitud', width: '150px' },
                    { key: 'previousValue', label: 'Valor Anterior', width: '200px' },
                    { key: 'newValue', label: 'Valor Nuevo', width: '200px' }
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
                totalItems: 3,
                rangeLabel: '1 - 3 de 3 ítems'
              }
            ]">
          </storybook-info-container>
        </section>

        <!-- Design Specifications -->
        <section style="margin-top: 64px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          
          <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
            <p style="margin: 16px 0 8px 0;"><strong>Component Composition:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Reuses <strong>TabNavigation</strong> component for tabs variant</li>
              <li>Reuses <strong>Pagination</strong> component for table navigation</li>
              <li>Reuses <strong>Separator</strong> component for dividers</li>
              <li>Reuses <strong>Label</strong> component for tags and badges</li>
              <li>Does not redefine styles from child components</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Header:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Blue background: #DBEAFE (Blue-100)</li>
              <li>Icon: 28×28px blue circle with white checkmark</li>
              <li>Title: 16px, 600 weight, #2563EB (Blue-600)</li>
              <li>Collapse button: Optional, chevron-up icon</li>
              <li>Padding: 20px</li>
              <li>Border radius: 12px (top only)</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Body - Table Variant:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Table header: Light blue background #EFF6FF (Blue-50)</li>
              <li>Column headers: 14px, 500 weight, #2563EB</li>
              <li>Row cells: 14px, 500 weight, #334155 (neutral-700)</li>
              <li>Row separator: 1px solid #CBD5E1 (neutral-300)</li>
              <li>Pagination at bottom with separator above</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Body - List Variant:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Intro text: 14px, 500 weight, #1E293B (neutral-800)</li>
              <li>List items: 14px, 500 weight, #1E293B</li>
              <li>Bullet: 6px circle, #1E293B</li>
              <li>Item spacing: 10px vertical padding</li>
              <li>Left indent: 24px for bullets</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Body - Tabs Variant:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>TabNavigation component at top</li>
              <li>Tab content: 24px margin-top</li>
              <li>Each tab contains a table with pagination</li>
              <li>Table structure same as table variant</li>
              <li>Labels rendered using Label component</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>States:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Expanded:</strong> Body visible, chevron pointing up</li>
              <li><strong>Collapsed:</strong> Body hidden, chevron pointing down (rotated 180°)</li>
              <li><strong>Non-collapsible:</strong> No collapse button shown</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Events:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><code>collapseChange</code>: Emits boolean when collapse state changes</li>
              <li><code>tabChange</code>: Emits tab index when tab is clicked</li>
              <li><code>tablePageChange</code>: Emits page number for table variant</li>
              <li><code>tablePageSizeChange</code>: Emits page size for table variant</li>
              <li><code>tableRefresh</code>: Emits when refresh is clicked (table variant)</li>
              <li><code>tabPageChange</code>: Emits { tabIndex, page } for tabs variant</li>
              <li><code>tabPageSizeChange</code>: Emits { tabIndex, pageSize } for tabs variant</li>
              <li><code>tabRefresh</code>: Emits tab index when refresh is clicked</li>
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
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive InfoContainer Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use the controls panel to adjust variant, title, collapsible state, and content
        </p>

        <storybook-info-container
          [title]="title"
          [variant]="variant"
          [collapsible]="collapsible"
          [collapsed]="collapsed"
          [tableColumns]="tableColumns"
          [tableRows]="tableRows"
          [tablePagination]="tablePagination"
          [listIntro]="listIntro"
          [listItems]="listItems"
          [tabs]="tabs"
          [activeTabIndex]="activeTabIndex"
          [tabsPagination]="tabsPagination"
          (collapseChange)="handleCollapseChange($event)"
          (tabChange)="handleTabChange($event)">
        </storybook-info-container>

        <div style="margin-top: 32px; padding: 16px; background: #DBEAFE; border-radius: 8px; font-size: 13px; color: #1E3A8A; line-height: 1.6;">
          <strong>Component Composition:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>This component <strong>reuses</strong> existing components: TabNavigation, Pagination, Separator, Label</li>
            <li>Set <code>variant</code> to "table", "list", or "tabs"</li>
            <li>Table variant shows data with pagination</li>
            <li>List variant shows bullet points with intro text</li>
            <li>Tabs variant shows tabbed tables with pagination per tab</li>
            <li>All variants support collapse/expand functionality</li>
            <li>Labels can be added to table cells using <code>_label</code> suffix</li>
          </ul>
        </div>
      </div>
    `,
  }),
  args: {
    title: 'Información del Sistema',
    variant: 'table',
    collapsible: true,
    collapsed: false,
    tableColumns: [
      { key: 'id', label: 'ID', width: '80px' },
      { key: 'name', label: 'Nombre', width: '200px' },
      { key: 'status', label: 'Estado', width: '150px' },
      { key: 'date', label: 'Fecha', width: '180px' },
    ],
    tableRows: [
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
    ],
    tablePagination: {
      currentPage: 1,
      totalPages: 1,
      pageSize: 5,
      pageSizeOptions: [5, 10, 20],
      totalItems: 2,
      rangeLabel: '1 - 2 de 2 ítems',
    },
    listIntro: '',
    listItems: [],
    tabs: [],
    activeTabIndex: 0,
    tabsPagination: [],
  },
};
