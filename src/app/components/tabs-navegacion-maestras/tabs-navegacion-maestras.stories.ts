import type { Meta, StoryObj } from '@storybook/angular';
import { TabsNavegacionMaestrasComponent, TabMaestra } from './tabs-navegacion-maestras.component';

const meta: Meta<TabsNavegacionMaestrasComponent> = {
  title: 'Components/TabsNavegacionMaestras',
  component: TabsNavegacionMaestrasComponent,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array de tabs maestras con configuración completa',
    },
    activeTabId: {
      control: 'text',
      description: 'ID de la tab actualmente seleccionada',
    },
    tabChange: {
      action: 'tabChange',
      description: 'Evento emitido cuando se hace clic en una tab (emite el id de la tab)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# TabsNavegacionMaestras Component

Componente maestro de navegación por tabs que soporta 3 tipos diferentes de presentación:

## Tipos de Tabs

### 1. Rectangular (filtros)
Tabs rectangulares con texto y badge opcional. Típicamente usadas como filtros de vista.

### 2. Cuadrada con icono
Bloques rectangulares con icono arriba y texto abajo. Usadas en navegación de secciones.

### 3. Barra superior
Fila continua de tabs que ocupa el ancho completo. Usadas en navegación de contenido.

## Estados Soportados

- **Seleccionada**: Fondo sólido del color principal, texto e icono en blanco
- **Sin seleccionar**: Fondo claro del color, texto e icono en color principal
- **Hover**: Subrayado del texto con transición suave (150-200ms)
- **Desactivada**: Fondo y texto en gris, sin interacción

## Paleta de Colores

- **Blue**: Color principal por defecto (#2563EB)
- **Green**: Verde (#06963D)
- **Orange**: Naranja/amarillo (#B44400)
- **Gray**: Gris para estados desactivados
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TabsNavegacionMaestrasComponent>;

// Tipo 1: Tabs rectangulares (filtros)
const tabsRectangulares: TabMaestra[] = [
  {
    id: 'contacto-entrante',
    label: 'Contacto Entrante',
    tipo: 'rectangular',
    color: 'blue',
    showCount: true,
    count: 21,
  },
  {
    id: 'prog-automaticas',
    label: 'Prog. Automáticas',
    tipo: 'rectangular',
    color: 'blue',
    showCount: true,
    count: 0,
  },
  {
    id: 'prog-manuales',
    label: 'Prog. Manuales',
    tipo: 'rectangular',
    color: 'blue',
    showCount: true,
    count: 5,
  },
  {
    id: 'pre-lanzamiento',
    label: 'Pre-Lanzamiento',
    tipo: 'rectangular',
    color: 'blue',
    showCount: true,
    count: 6,
  },
  {
    id: 'desactivada',
    label: 'Tab desactivada',
    tipo: 'rectangular',
    color: 'gray',
    showCount: true,
    count: 1,
    disabled: true,
  },
];

export const TabsRectangulares: Story = {
  args: {
    tabs: tabsRectangulares,
    activeTabId: 'contacto-entrante',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de tabs rectangulares tipo filtro, como las que aparecen en "Contacto Entrante". Incluye badges con números y una tab desactivada.',
      },
    },
  },
};

export const TabsRectangularesSinNumero: Story = {
  args: {
    tabs: [
      {
        id: 'tab1',
        label: 'Tab seleccionada sin numero',
        tipo: 'rectangular',
        color: 'blue',
      },
      {
        id: 'tab2',
        label: 'Tab sin seleccionar',
        tipo: 'rectangular',
        color: 'blue',
      },
      {
        id: 'tab3',
        label: 'Tab desactivada',
        tipo: 'rectangular',
        color: 'gray',
        disabled: true,
      },
    ],
    activeTabId: 'tab1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs rectangulares sin badges numéricos.',
      },
    },
  },
};

// Tipo 2: Tabs cuadradas con icono
const tabsCuadradas: TabMaestra[] = [
  {
    id: 'speech',
    label: 'Speech',
    tipo: 'cuadrada-icono',
    color: 'blue',
    iconName: 'speech',
  },
  {
    id: 'editar-datos',
    label: 'Editar Datos Personales',
    tipo: 'cuadrada-icono',
    color: 'blue',
    iconName: 'edit',
  },
  {
    id: 'cronograma',
    label: 'Cronograma de Pagos',
    tipo: 'cuadrada-icono',
    color: 'blue',
    iconName: 'calendar',
  },
  {
    id: 'informacion',
    label: 'Información del Programa',
    tipo: 'cuadrada-icono',
    color: 'blue',
    iconName: 'info',
  },
  {
    id: 'documentos',
    label: 'Documentos del Programa',
    tipo: 'cuadrada-icono',
    color: 'blue',
    iconName: 'file',
  },
];

export const TabsCuadradasIcono: Story = {
  args: {
    tabs: tabsCuadradas,
    activeTabId: 'speech',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs cuadradas con iconos y texto. Típicamente usadas para navegar entre secciones de detalle como "Speech", "Editar Datos Personales", etc.',
      },
    },
  },
};

export const TabsCuadradasIconoHoverState: Story = {
  args: {
    tabs: tabsCuadradas,
    activeTabId: 'editar-datos',
  },
  parameters: {
    docs: {
      description: {
        story: 'Mismo ejemplo pero con una tab diferente seleccionada. Pasa el cursor sobre las tabs para ver el efecto hover (subrayado).',
      },
    },
  },
};

// Tipo 3: Barra superior
const tabsBarraSuperior: TabMaestra[] = [
  {
    id: 'presentacion-programa',
    label: 'Presentación del programa',
    tipo: 'barra-superior',
    color: 'blue',
    iconName: 'check-circle',
  },
  {
    id: 'presentacion-historias',
    label: 'Presentación de historias de éxito',
    tipo: 'barra-superior',
    color: 'blue',
    iconName: 'check-circle',
  },
  {
    id: 'presentacion-limitaciones',
    label: 'Presentación de limitaciones del programa',
    tipo: 'barra-superior',
    color: 'blue',
    iconName: 'check-circle',
  },
  {
    id: 'pre-validacion',
    label: 'Pre validación rápida de objeciones',
    tipo: 'barra-superior',
    color: 'blue',
    iconName: 'check-circle',
  },
];

export const TabsBarraSuperior: Story = {
  args: {
    tabs: tabsBarraSuperior,
    activeTabId: 'presentacion-programa',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tabs de barra superior que ocupan todo el ancho. Típicamente usadas en secciones de contenido como "Presentación del programa", "Presentación de historias de éxito", etc.',
      },
    },
  },
};

export const TabsBarraSuperiorMultiColor: Story = {
  args: {
    tabs: [
      {
        id: 'tab-blue',
        label: 'Tab seleccionada',
        tipo: 'barra-superior',
        color: 'blue',
        iconName: 'check-circle',
      },
      {
        id: 'tab-blue-2',
        label: 'Tab sin seleccionar',
        tipo: 'barra-superior',
        color: 'blue',
        iconName: 'check-circle',
      },
      {
        id: 'tab-green',
        label: 'Tab sin seleccionar',
        tipo: 'barra-superior',
        color: 'green',
        iconName: 'check-circle',
      },
      {
        id: 'tab-orange',
        label: 'Tab sin seleccionar',
        tipo: 'barra-superior',
        color: 'orange',
        iconName: 'check-circle',
      },
    ],
    activeTabId: 'tab-blue',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de barra superior con múltiples colores: azul, verde y naranja.',
      },
    },
  },
};

// Ejemplo mixto de colores (rectangular)
export const TabsRectangularesMultiColor: Story = {
  args: {
    tabs: [
      {
        id: 'blue-tab',
        label: 'Tab Azul',
        tipo: 'rectangular',
        color: 'blue',
        showCount: true,
        count: 3,
      },
      {
        id: 'green-tab',
        label: 'Tab Verde',
        tipo: 'rectangular',
        color: 'green',
        showCount: true,
        count: 7,
      },
      {
        id: 'orange-tab',
        label: 'Tab Naranja',
        tipo: 'rectangular',
        color: 'orange',
        showCount: true,
        count: 2,
      },
      {
        id: 'gray-tab',
        label: 'Tab Desactivada',
        tipo: 'rectangular',
        color: 'gray',
        showCount: true,
        count: 0,
        disabled: true,
      },
    ],
    activeTabId: 'blue-tab',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de tabs rectangulares con diferentes colores: azul, verde, naranja y gris (desactivada).',
      },
    },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    tabs: [
      {
        id: 'tab1',
        label: 'Primera Tab',
        tipo: 'rectangular',
        color: 'blue',
        showCount: true,
        count: 5,
      },
      {
        id: 'tab2',
        label: 'Segunda Tab',
        tipo: 'rectangular',
        color: 'blue',
        showCount: true,
        count: 3,
      },
      {
        id: 'tab3',
        label: 'Tercera Tab',
        tipo: 'rectangular',
        color: 'blue',
      },
    ],
    activeTabId: 'tab1',
  },
  parameters: {
    docs: {
      description: {
        story: 'Playground interactivo para experimentar con diferentes configuraciones de tabs.',
      },
    },
  },
};
