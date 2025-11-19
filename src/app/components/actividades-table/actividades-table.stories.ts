import type { Meta, StoryObj } from '@storybook/angular';
import { ActividadesTableComponent, ActividadRow } from './actividades-table.component';
import { ActividadesTableWithPaginationComponent } from './actividades-table-with-pagination.component';

const meta: Meta<ActividadesTableComponent> = {
  title: 'Components/ActividadesTable',
  component: ActividadesTableComponent,
  tags: ['autodocs'],
  argTypes: {
    headerColor: {
      control: 'color',
      description: 'Background color for the table header',
    },
    rows: {
      control: 'object',
      description: 'Array of activity data to display in the table',
    },
  },
};

export default meta;
type Story = StoryObj<ActividadesTableComponent>;

export const TablaVacia: Story = {
  args: {
    headerColor: '#E3F2FD',
    rows: [],
  },
};

const exampleRows: ActividadRow[] = [
  {
    actividad: 'Consulta inicial',
    oportunidad: {
      etiqueta: 'Alta',
      nombre: 'Carlos Mendoza',
      programa: 'LEAN SSSB ONLINE 2024 II LIMA',
      fase: 'BNC',
      categoria: 'Facebook Chat',
      categoriaColor: '#2563EB',
    },
    mensajeEtiqueta: 'Correos',
    mensajeTexto: 'Solicita información sobre costos y modalidades disponibles',
    fecha: '17/04/2025',
    hora: '2:30 PM',
    indicadorColor: 'green',
    botonEjecutar: {
      label: 'Ejecutar',
      color: 'green',
    },
  },
  {
    actividad: 'Solicitud de información',
    oportunidad: {
      etiqueta: 'Alta',
      nombre: 'Ana María Gutiérrez',
      programa: 'D SIG ONLINE 2025 II LIMA',
      fase: 'BNC',
      categoria: 'Whatsapp Rpta - Mailing',
      categoriaColor: '#E32626',
    },
    mensajeEtiqueta: 'Portal Web',
    mensajeTexto: 'Interesada en conocer fechas de inicio y requisitos de admisión',
    fecha: '17/04/2025',
    hora: '11:45 AM',
    indicadorColor: 'yellow',
    botonEjecutar: {
      label: 'Ejecutar',
      color: 'yellow',
    },
  },
  {
    actividad: 'Consulta de precios',
    oportunidad: {
      etiqueta: 'Alta',
      nombre: 'Roberto Sánchez',
      programa: 'LEAN SSSB AONLINE 2025 I BOGOTA',
      fase: 'BNC',
      categoria: 'Whatsapp Chat Bases Propias',
      categoriaColor: '#5AA34A',
    },
    mensajeEtiqueta: 'WhatsApp',
    mensajeTexto: 'Pregunta por descuentos corporativos para grupo de 5 personas',
    fecha: '16/04/2025',
    hora: '6:20 PM',
    indicadorColor: 'red',
    botonEjecutar: {
      label: 'Ejecutar',
      color: 'red',
    },
  },
  {
    actividad: 'Solicitud de entrevista',
    oportunidad: {
      etiqueta: 'Alta',
      nombre: 'Patricia Flores',
      programa: 'D SIG ONLINE 2025 II LIMA',
      fase: 'BNC',
      categoria: 'Whatsapp Rpta - Mailing',
      categoriaColor: '#9336EB',
    },
    mensajeEtiqueta: 'Seguimiento de WhatsApp',
    mensajeTexto: 'Respuesta a campaña de email, solicita reunión con asesor académico',
    fecha: '15/04/2025',
    hora: '9:00 AM',
    indicadorColor: 'green',
    botonEjecutar: {
      label: 'Ejecutar',
      color: 'green',
    },
  },
];

export const TablaConDatos: Story = {
  args: {
    headerColor: '#E3F2FD',
    rows: exampleRows,
  },
};

export const TablaConHeaderPersonalizado: Story = {
  args: {
    headerColor: '#CDEBFF',
    rows: exampleRows.slice(0, 2),
  },
};

export const TablaConPaginacion: StoryObj<ActividadesTableWithPaginationComponent> = {
  render: (args) => ({
    props: args,
  }),
  args: {
    headerColor: '#E3F2FD',
    allRows: exampleRows,
    pageSizeOptions: [5, 10, 20, 50],
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla completa con componente de paginación integrado. La tabla muestra los datos paginados y el footer permite navegar entre páginas y cambiar la cantidad de elementos por página.',
      },
    },
  },
};

const tableWithPaginationMeta: Meta<ActividadesTableWithPaginationComponent> = {
  title: 'Components/ActividadesTable',
  component: ActividadesTableWithPaginationComponent,
  tags: ['autodocs'],
  argTypes: {
    headerColor: {
      control: 'color',
      description: 'Background color for the table header',
    },
    allRows: {
      control: 'object',
      description: 'Complete array of activity data to paginate',
    },
    pageSizeOptions: {
      control: 'object',
      description: 'Available options for page size',
    },
  },
};

export { tableWithPaginationMeta as ActividadesTableWithPaginationMeta };
