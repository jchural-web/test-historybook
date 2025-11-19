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

export const WithLayout: Story = {
  args: {
    isExpanded: true,
    modules: defaultModules,
  },
  decorators: [
    (story) => ({
      template: `
        <div style="display: flex; width: 100%; height: 100vh;">
          ${story.template}
          <div style="flex: 1; padding: 20px; background: #f9fafb; overflow-y: auto;">
            <h2>Main Content Area</h2>
            <p>The sidebar transitions smoothly and pushes this content to the right.</p>
            <p style="margin-top: 10px;">Click the menu icon in the sidebar to toggle between collapsed and expanded states.</p>
          </div>
        </div>
      `,
      props: story.props,
    }),
  ],
};

export const CollapsedWithLayout: Story = {
  args: {
    isExpanded: false,
    modules: defaultModules,
  },
  decorators: [
    (story) => ({
      template: `
        <div style="display: flex; width: 100%; height: 100vh;">
          ${story.template}
          <div style="flex: 1; padding: 20px; background: #f9fafb; overflow-y: auto;">
            <h2>Main Content Area</h2>
            <p>The sidebar is collapsed, showing only icons.</p>
            <p style="margin-top: 10px;">Click the menu icon in the sidebar to toggle between collapsed and expanded states.</p>
          </div>
        </div>
      `,
      props: story.props,
    }),
  ],
};
