import type { Meta, StoryObj } from '@storybook/angular';
import { SideNavbarComponent, NavItem } from './side-navbar.component';

const meta: Meta<SideNavbarComponent> = {
  title: 'Example/SideNavbar',
  component: SideNavbarComponent,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'radio',
      options: ['collapsed', 'expanded'],
      description: 'Navigation state: collapsed (icons only) or expanded (icons + labels)',
    },
    items: {
      control: 'object',
      description: 'Hierarchical navigation items',
    },
    activePath: {
      control: 'text',
      description: 'Current active path identifier',
    },
    itemClick: {
      action: 'itemClick',
      description: 'Event emitted when a navigation item is clicked',
    },
    stateChange: {
      action: 'stateChange',
      description: 'Event emitted when navigation state changes',
    },
  },
};

export default meta;
type Story = StoryObj<SideNavbarComponent>;

// Sample navigation data matching the Figma design
const sampleNavigationItems: NavItem[] = [
  {
    id: 'comercial',
    label: 'Comercial',
    icon: 'folder',
    children: [
      {
        id: 'gestion-comercial',
        label: 'Gestión Comercial',
        icon: 'folder',
        children: [
          {
            id: 'chats',
            label: 'Chats',
            icon: 'message-square',
            count: 3,
            path: 'comercial/gestion-comercial/chats',
          },
          {
            id: 'creacion-oportunidades',
            label: 'Creación de Oportunidades',
            icon: 'target',
            count: 5,
            path: 'comercial/gestion-comercial/creacion-oportunidades',
          },
          {
            id: 'agenda',
            label: 'Agenda',
            icon: 'calendar-days',
            count: 8,
            path: 'comercial/gestion-comercial/agenda',
          },
        ],
      },
      {
        id: 'control-operativo',
        label: 'Control Operativo',
        icon: 'folder',
        path: 'comercial/control-operativo',
      },
      {
        id: 'analitica-ventas',
        label: 'Analítica de Ventas',
        icon: 'folder',
        path: 'comercial/analitica-ventas',
      },
    ],
  },
  {
    id: 'gestion-desempeno',
    label: 'Gestión Del Desempeño',
    icon: 'award',
    path: 'gestion-desempeno',
  },
  {
    id: 'atencion-cliente',
    label: 'Atención al Cliente',
    icon: 'headset',
    path: 'atencion-cliente',
  },
  {
    id: 'clientes',
    label: 'Clientes',
    icon: 'users',
    count: 12,
    path: 'clientes',
  },
  {
    id: 'cursos',
    label: 'Cursos',
    icon: 'book-open',
    count: 8,
    path: 'cursos',
  },
  {
    id: 'configuracion',
    label: 'Configuración',
    icon: 'settings',
    count: 2,
    path: 'configuracion',
  },
];

/**
 * Expanded state showing all navigation items with labels, icons, and counts.
 * This is the default state with full navigation visibility.
 */
export const Expanded: Story = {
  args: {
    state: 'expanded',
    items: sampleNavigationItems,
    activePath: '',
  },
};

/**
 * Collapsed state showing only icons in a narrow sidebar.
 * Ideal for maximizing content area while maintaining navigation accessibility.
 */
export const Collapsed: Story = {
  args: {
    state: 'collapsed',
    items: sampleNavigationItems,
    activePath: '',
  },
};

/**
 * Expanded state with an active item highlighted.
 * Shows how the active path indicator works with visual feedback.
 */
export const WithActiveItem: Story = {
  args: {
    state: 'expanded',
    items: sampleNavigationItems,
    activePath: 'comercial/gestion-comercial/chats',
  },
};

/**
 * Expanded state with a parent-level active item.
 * Demonstrates active state on items without children.
 */
export const WithActiveParentItem: Story = {
  args: {
    state: 'expanded',
    items: sampleNavigationItems,
    activePath: 'clientes',
  },
};

/**
 * Simple navigation structure without nested items.
 * Useful for applications with flat navigation hierarchy.
 */
export const FlatNavigation: Story = {
  args: {
    state: 'expanded',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: 'house',
        path: 'dashboard',
      },
      {
        id: 'clientes',
        label: 'Clientes',
        icon: 'users',
        count: 24,
        path: 'clientes',
      },
      {
        id: 'cursos',
        label: 'Cursos',
        icon: 'book-open',
        count: 15,
        path: 'cursos',
      },
      {
        id: 'configuracion',
        label: 'Configuración',
        icon: 'settings',
        path: 'configuracion',
      },
    ],
    activePath: 'dashboard',
  },
};

/**
 * Deeply nested navigation structure.
 * Shows how the component handles multiple levels of hierarchy.
 */
export const DeepHierarchy: Story = {
  args: {
    state: 'expanded',
    items: [
      {
        id: 'empresa',
        label: 'Empresa',
        icon: 'folder',
        children: [
          {
            id: 'departamentos',
            label: 'Departamentos',
            icon: 'folder',
            children: [
              {
                id: 'ventas',
                label: 'Ventas',
                icon: 'users',
                count: 8,
                path: 'empresa/departamentos/ventas',
              },
              {
                id: 'marketing',
                label: 'Marketing',
                icon: 'users',
                count: 5,
                path: 'empresa/departamentos/marketing',
              },
            ],
          },
          {
            id: 'reportes',
            label: 'Reportes',
            icon: 'folder',
            path: 'empresa/reportes',
          },
        ],
      },
    ],
    activePath: 'empresa/departamentos/ventas',
  },
};

/**
 * Navigation with count badges.
 * Demonstrates how numeric indicators appear next to navigation items.
 */
export const WithCounts: Story = {
  args: {
    state: 'expanded',
    items: [
      {
        id: 'mensajes',
        label: 'Mensajes',
        icon: 'message-square',
        count: 3,
        path: 'mensajes',
      },
      {
        id: 'notificaciones',
        label: 'Notificaciones',
        icon: 'target',
        count: 12,
        path: 'notificaciones',
      },
      {
        id: 'tareas-pendientes',
        label: 'Tareas Pendientes',
        icon: 'calendar-days',
        count: 8,
        path: 'tareas-pendientes',
      },
    ],
    activePath: 'mensajes',
  },
};

/**
 * Empty navigation state.
 * Useful for testing and demonstration purposes.
 */
export const Empty: Story = {
  args: {
    state: 'expanded',
    items: [],
    activePath: '',
  },
};

/**
 * Collapsed state with active item.
 * Shows how active state appears in icon-only mode.
 */
export const CollapsedWithActiveItem: Story = {
  args: {
    state: 'collapsed',
    items: sampleNavigationItems,
    activePath: 'clientes',
  },
};
