import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { NavigationTabsComponent } from './navigation-tabs.component';

const meta: Meta<NavigationTabsComponent> = {
  title: 'Components/NavigationTabs',
  component: NavigationTabsComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text label for the tab',
    },
    count: {
      control: 'number',
      description: 'Number displayed in the badge',
    },
    color: {
      control: 'select',
      options: ['blue', 'green', 'orange', 'gray'],
      description: 'Color palette for the tab',
    },
    variant: {
      control: 'select',
      options: ['solid', 'soft'],
      description: 'Visual variant - solid (selected) or soft (not selected)',
    },
    isActive: {
      control: 'boolean',
      description: 'Indicates if the tab is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the tab interaction',
    },
  },
  args: { clicked: fn() },
};

export default meta;
type Story = StoryObj<NavigationTabsComponent>;

export const Default: Story = {
  args: {
    label: 'Tab navegación',
    count: 1,
    color: 'blue',
    variant: 'solid',
    isActive: true,
    disabled: false,
  },
};

export const Solid: Story = {
  args: {
    label: 'Tab navegación',
    count: 5,
    color: 'blue',
    variant: 'solid',
    isActive: true,
    disabled: false,
  },
};

export const Soft: Story = {
  args: {
    label: 'Tab navegación',
    count: 3,
    color: 'blue',
    variant: 'soft',
    isActive: false,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Tab navegación',
    count: 1,
    color: 'gray',
    variant: 'soft',
    isActive: false,
    disabled: true,
  },
};

export const Blue: Story = {
  args: {
    label: 'Tab navegación',
    count: 1,
    color: 'blue',
    variant: 'solid',
    isActive: true,
    disabled: false,
  },
};

export const BlueSoft: Story = {
  args: {
    label: 'Tab navegación',
    count: 1,
    color: 'blue',
    variant: 'soft',
    isActive: false,
    disabled: false,
  },
};

export const Green: Story = {
  args: {
    label: 'Tab navegación',
    count: 1,
    color: 'green',
    variant: 'solid',
    isActive: true,
    disabled: false,
  },
};

export const GreenSoft: Story = {
  args: {
    label: 'Tab navegación',
    count: 1,
    color: 'green',
    variant: 'soft',
    isActive: false,
    disabled: false,
  },
};

export const Orange: Story = {
  args: {
    label: 'Tab navegación',
    count: 1,
    color: 'orange',
    variant: 'solid',
    isActive: true,
    disabled: false,
  },
};

export const OrangeSoft: Story = {
  args: {
    label: 'Tab navegación',
    count: 1,
    color: 'orange',
    variant: 'soft',
    isActive: false,
    disabled: false,
  },
};

export const Gray: Story = {
  args: {
    label: 'Tab navegación',
    count: 1,
    color: 'gray',
    variant: 'soft',
    isActive: false,
    disabled: false,
  },
};

export const WithLargeCount: Story = {
  args: {
    label: 'Notificaciones',
    count: 99,
    color: 'blue',
    variant: 'solid',
    isActive: true,
    disabled: false,
  },
};

export const CustomLabel: Story = {
  args: {
    label: 'Contacto entrante',
    count: 12,
    color: 'green',
    variant: 'solid',
    isActive: true,
    disabled: false,
  },
};
