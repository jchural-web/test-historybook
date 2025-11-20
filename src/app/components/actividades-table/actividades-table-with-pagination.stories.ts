import type { Meta, StoryObj } from '@storybook/angular';
import { ActividadesTableWithPaginationComponent } from './actividades-table-with-pagination.component';
import { ActividadRow } from './actividades-table.component';

const meta: Meta<ActividadesTableWithPaginationComponent> = {
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
      description: 'Available options for items per page',
    },
  },
};

export default meta;
type Story = StoryObj<ActividadesTableWithPaginationComponent>;

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
  {
    actividad: 'Seguimiento de campaña',
    oportunidad: {
      etiqueta: 'Media',
      nombre: 'Juan Pérez',
      programa: 'LEAN SSSB ONLINE 2024 III MEXICO',
      fase: 'BNC',
      categoria: 'Email Marketing',
      categoriaColor: '#F59E0B',
    },
    mensajeEtiqueta: 'Correos',
    mensajeTexto: 'Envío de propuesta comercial actualizada',
    fecha: '14/04/2025',
    hora: '3:15 PM',
    indicadorColor: 'yellow',
    botonEjecutar: {
      label: 'Ejecutar',
      color: 'yellow',
    },
  },
  {
    actividad: 'Confirmación de reunión',
    oportunidad: {
      etiqueta: 'Baja',
      nombre: 'María López',
      programa: 'D SIG ONLINE 2025 I BOGOTA',
      fase: 'BNC',
      categoria: 'WhatsApp Bases Propias',
      categoriaColor: '#8B5CF6',
    },
    mensajeEtiqueta: 'WhatsApp',
    mensajeTexto: 'Confirmación de asistencia a reunión el viernes',
    fecha: '13/04/2025',
    indicadorColor: 'red',
    botonEjecutar: {
      label: 'Ejecutar',
      color: 'red',
    },
  },
  {
    actividad: 'Envío de documentación',
    oportunidad: {
      etiqueta: 'Alta',
      nombre: 'Diego García',
      programa: 'LEAN SSSB ONLINE 2024 II LIMA',
      fase: 'BNC',
      categoria: 'Portal Web',
      categoriaColor: '#06B6D4',
    },
    mensajeEtiqueta: 'Portal Web',
    mensajeTexto: 'Envío de documentos requeridos para inscripción',
    fecha: '12/04/2025',
    hora: '10:00 AM',
    indicadorColor: 'green',
    botonEjecutar: {
      label: 'Ejecutar',
      color: 'green',
    },
  },
  {
    actividad: 'Consulta de disponibilidad',
    oportunidad: {
      etiqueta: 'Alta',
      nombre: 'Sophia Martínez',
      programa: 'D SIG ONLINE 2025 II LIMA',
      fase: 'BNC',
      categoria: 'Facebook Chat',
      categoriaColor: '#3B82F6',
    },
    mensajeEtiqueta: 'Correos',
    mensajeTexto: 'Pregunta sobre horarios disponibles para el curso',
    fecha: '11/04/2025',
    hora: '4:45 PM',
    indicadorColor: 'green',
    botonEjecutar: {
      label: 'Ejecutar',
      color: 'green',
    },
  },
  {
    actividad: 'Seguimiento post-venta',
    oportunidad: {
      etiqueta: 'Media',
      nombre: 'Alejandro Ruiz',
      programa: 'LEAN SSSB AONLINE 2025 I BOGOTA',
      fase: 'BNC',
      categoria: 'Whatsapp Rpta - Mailing',
      categoriaColor: '#10B981',
    },
    mensajeEtiqueta: 'WhatsApp',
    mensajeTexto: 'Seguimiento de satisfacción con el curso',
    fecha: '10/04/2025',
    hora: '2:00 PM',
    indicadorColor: 'yellow',
    botonEjecutar: {
      label: 'Ejecutar',
      color: 'yellow',
    },
  },
];

export const TablaConPaginacion: Story = {
  args: {
    headerColor: '#E3F2FD',
    allRows: exampleRows,
    pageSizeOptions: [5, 10, 20, 50],
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabla completa integrada con el componente TablePaginationFooter. Permite navegar entre páginas y cambiar la cantidad de elementos mostrados por página. Los datos se filtran automáticamente según la página y el tamaño seleccionado.',
      },
    },
  },
};

export const TablaConPaginacionDatos2: Story = {
  args: {
    headerColor: '#CDEBFF',
    allRows: exampleRows.slice(0, 3),
    pageSizeOptions: [3, 5, 10],
  },
};

export const TablaConPaginacionGrande: Story = {
  args: {
    headerColor: '#E3F2FD',
    allRows: exampleRows,
    pageSizeOptions: [5, 10, 20, 50],
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con múltiples páginas. Se pueden usar los controles de paginación para navegación.',
      },
    },
  },
};
