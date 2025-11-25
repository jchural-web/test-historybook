import { Meta, StoryObj } from '@storybook/angular';
import { SidebarMenuMaestroComponent, SidebarMenuItem } from './sidebar-menu-maestro.component';

const meta: Meta<SidebarMenuMaestroComponent> = {
  title: 'Components/SidebarMenuMaestro',
  component: SidebarMenuMaestroComponent,
  tags: ['autodocs'],
  argTypes: {
    collapsed: {
      control: 'boolean',
      description: 'Controls the collapsed/expanded state of the sidebar width',
    },
    activeItemId: {
      control: 'text',
      description: 'ID of the currently active item',
    },
    expandedIds: {
      description: 'Array of item IDs that are currently expanded (showing children)',
    },
    items: {
      description: 'Array of menu items to display',
    },
  },
};

export default meta;
type Story = StoryObj<SidebarMenuMaestroComponent>;

const menuItems: SidebarMenuItem[] = [
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
          { id: 'chats', label: 'Chats', icon: 'folder', badgeCount: 3 },
          {
            id: 'creacion-oportunidades',
            label: 'Creación de Oportunidades',
            icon: 'folder',
            badgeCount: 5,
          },
          { id: 'agenda', label: 'Agenda', icon: 'folder', badgeCount: 8 },
        ],
      },
      {
        id: 'control-operativo',
        label: 'Control Operativo',
        icon: 'folder',
      },
      {
        id: 'analitica-ventas',
        label: 'Analítica de Ventas',
        icon: 'folder',
      },
    ],
  },
  {
    id: 'desempenio',
    label: 'Gestión Del Desempeño',
    icon: 'award',
    children: [],
  },
  {
    id: 'atencion-cliente',
    label: 'Atención al Cliente',
    icon: 'headset',
    children: [],
  },
  {
    id: 'clientes',
    label: 'Clientes',
    icon: 'users',
    badgeCount: 12,
  },
  {
    id: 'cursos',
    label: 'Cursos',
    icon: 'book-open',
    badgeCount: 8,
  },
  {
    id: 'configuracion',
    label: 'Configuración',
    icon: 'settings',
    badgeCount: 2,
  },
];

/**
 * **Collapsed State**
 *
 * The sidebar is collapsed to show only icons. The lateral expansion is controlled from outside
 * via the `collapsed` input property. This component does NOT contain internal controls to toggle
 * the collapsed state—that responsibility belongs to the parent component.
 *
 * In the collapsed state:
 * - Only icons are visible
 * - Text labels, badges, and chevrons are hidden
 * - Width is reduced to 64px
 */
export const Collapsed: Story = {
  args: {
    items: menuItems,
    collapsed: true,
    activeItemId: 'comercial',
    expandedIds: [],
  },
};

/**
 * **Expanded Level 1**
 *
 * The sidebar is expanded with no menu items showing their children. Only the top-level modules
 * are visible. The lateral expansion is controlled externally via the `collapsed` input.
 *
 * This demonstrates:
 * - Full width sidebar (252px)
 * - Icon + text + optional badge display
 * - No nested items visible
 * - Chevron icons for items with children
 */
export const ExpandedLevel1: Story = {
  args: {
    items: menuItems,
    collapsed: false,
    activeItemId: 'clientes',
    expandedIds: [],
  },
};

/**
 * **Expanded Level 2**
 *
 * The "Comercial" module is expanded to show its immediate children (submodules).
 * The lateral expansion is controlled externally. Navigation by levels is handled internally
 * by the component via the `expandedIds` input.
 *
 * This demonstrates:
 * - Level 2 indentation (padding-left increased)
 * - Nested items under the expanded "Comercial" module
 * - Chevron icons showing expanded/collapsed state
 */
export const ExpandedLevel2: Story = {
  args: {
    items: menuItems,
    collapsed: false,
    activeItemId: undefined,
    expandedIds: ['comercial'],
  },
};

/**
 * **Expanded Level 3**
 *
 * The "Comercial" module is expanded, and within it, "Gestión Comercial" is also expanded
 * to show its children (Chats, Creación de Oportunidades, Agenda). Each of these level-3
 * items shows a numeric badge.
 *
 * The lateral expansion is controlled externally via the `collapsed` input.
 * The vertical navigation through levels is managed internally via `expandedIds`.
 *
 * This demonstrates:
 * - Level 3 indentation (maximum nesting depth shown)
 * - Badges on level-3 items
 * - Multiple expanded groups
 * - Chevron indicators for expanded/collapsed items
 */
export const ExpandedLevel3: Story = {
  args: {
    items: menuItems,
    collapsed: false,
    activeItemId: 'chats',
    expandedIds: ['comercial', 'gestion-comercial'],
  },
};
