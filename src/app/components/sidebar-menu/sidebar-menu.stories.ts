import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarMenuComponent, SidebarModule } from './sidebar-menu.component';

const meta: Meta<SidebarMenuComponent> = {
  title: 'Components/SidebarMenu',
  component: SidebarMenuComponent,
  tags: ['autodocs'],
  argTypes: {
    isExpanded: {
      control: 'boolean',
      description: 'Controls whether the sidebar is expanded or collapsed',
    },
    modules: {
      control: 'object',
      description: 'Array of sidebar modules to display',
    },
  },
};

export default meta;
type Story = StoryObj<SidebarMenuComponent>;

const defaultModules: SidebarModule[] = [
  {
    icon: 'folder',
    label: 'Comercial',
    hasChildren: true,
  },
  {
    icon: 'award',
    label: 'Gestión Del Desempeño',
    hasChildren: true,
  },
  {
    icon: 'headset',
    label: 'Atención al Cliente',
    hasChildren: true,
  },
  {
    icon: 'users',
    label: 'Clientes',
    badgeCount: 12,
  },
  {
    icon: 'book-open',
    label: 'Cursos',
    badgeCount: 8,
  },
  {
    icon: 'settings',
    label: 'Configuración',
    badgeCount: 2,
  },
];

export const Expanded: Story = {
  args: {
    isExpanded: true,
    modules: defaultModules,
  },
};

export const Collapsed: Story = {
  args: {
    isExpanded: false,
    modules: defaultModules,
  },
};

export const MinimalModules: Story = {
  args: {
    isExpanded: true,
    modules: [
      {
        icon: 'folder',
        label: 'Comercial',
        hasChildren: true,
      },
      {
        icon: 'users',
        label: 'Clientes',
        badgeCount: 5,
      },
      {
        icon: 'settings',
        label: 'Configuración',
      },
    ],
  },
};

export const WithActiveModule: Story = {
  args: {
    isExpanded: true,
    modules: [
      {
        icon: 'folder',
        label: 'Comercial',
        hasChildren: true,
        active: true,
      },
      {
        icon: 'award',
        label: 'Gestión Del Desempeño',
        hasChildren: true,
      },
      {
        icon: 'users',
        label: 'Clientes',
        badgeCount: 12,
      },
    ],
  },
};
