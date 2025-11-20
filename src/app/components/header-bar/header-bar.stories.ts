import type { Meta, StoryObj } from '@storybook/angular';
import { HeaderBarComponent, HeaderAction } from './header-bar.component';

const meta: Meta<HeaderBarComponent> = {
  title: 'Components/HeaderBar',
  component: HeaderBarComponent,
  tags: ['autodocs'],
  argTypes: {
    username: {
      control: 'text',
      description: 'Nombre del usuario mostrado en el header',
    },
    appName: {
      control: 'text',
      description: 'Nombre de la aplicación',
    },
    actions: {
      control: 'object',
      description: 'Array de acciones/botones en el header',
    },
  },
};

export default meta;
type Story = StoryObj<HeaderBarComponent>;

const defaultActions: HeaderAction[] = [
  {
    label: 'Wavix',
    icon: 'phone',
    onClick: () => console.log('Wavix clicked'),
  },
  {
    label: 'Actualizar',
    icon: 'refresh-cw',
    onClick: () => console.log('Actualizar clicked'),
  },
];

export const HeaderBasico: Story = {
  args: {
    username: 'Yesica Palomino',
    appName: 'Integra CRM',
    actions: defaultActions,
  },
  parameters: {
    docs: {
      description: {
        story: 'Header básico con usuario "Yesica Palomino" y acciones estándar (Wavix, Actualizar).',
      },
    },
  },
};

export const HeaderConMasAcciones: Story = {
  args: {
    username: 'Yesica Palomino',
    appName: 'Integra CRM',
    actions: [
      {
        label: 'Wavix',
        icon: 'phone',
        onClick: () => console.log('Wavix clicked'),
      },
      {
        label: 'Notificaciones',
        icon: 'bell',
        onClick: () => console.log('Notificaciones clicked'),
      },
      {
        label: 'Actualizar',
        icon: 'refresh-cw',
        onClick: () => console.log('Actualizar clicked'),
      },
      {
        label: 'Perfil',
        onClick: () => console.log('Perfil clicked'),
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Header con acciones adicionales: Wavix, Notificaciones, Actualizar y Perfil.',
      },
    },
  },
};

export const HeaderSinIconos: Story = {
  args: {
    username: 'Yesica Palomino',
    appName: 'Integra CRM',
    actions: [
      {
        label: 'Wavix',
        onClick: () => console.log('Wavix clicked'),
      },
      {
        label: 'Notificaciones',
        onClick: () => console.log('Notificaciones clicked'),
      },
      {
        label: 'Actualizar',
        onClick: () => console.log('Actualizar clicked'),
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Header con acciones de solo texto, sin iconos.',
      },
    },
  },
};

export const HeaderMinimo: Story = {
  args: {
    username: 'Yesica Palomino',
    appName: 'Integra CRM',
    actions: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Header con solo menú, nombre de la aplicación e identificación de usuario. Sin acciones adicionales.',
      },
    },
  },
};

export const HeaderCompleto: Story = {
  args: {
    username: 'Yesica Palomino',
    appName: 'Integra CRM',
    actions: [
      {
        label: 'Wavix',
        icon: 'phone',
        onClick: () => console.log('Wavix clicked'),
      },
      {
        label: 'Notificaciones',
        icon: 'bell',
        onClick: () => console.log('Notificaciones clicked'),
      },
      {
        label: 'Actualizar',
        icon: 'refresh-cw',
        onClick: () => console.log('Actualizar clicked'),
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Header completo con todas las acciones principales: Wavix, Notificaciones y Actualizar con sus respectivos iconos.',
      },
    },
  },
};
