import type { Meta, StoryObj } from '@storybook/angular';

import { ActivityItemComponent } from './activity-item.component';

const meta: Meta<ActivityItemComponent> = {
  title: 'Components/ActivityItem',
  component: ActivityItemComponent,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text label for the activity',
    },
    color: {
      control: 'select',
      options: ['green', 'yellow', 'red'],
      description: 'Color of the vertical bar',
    },
  },
};

export default meta;
type Story = StoryObj<ActivityItemComponent>;

export const ActividadVerde: Story = {
  args: {
    text: 'Texto ejemplo de actividad 1',
    color: 'green',
  },
};

export const ActividadAmarilla: Story = {
  args: {
    text: 'Texto ejemplo de actividad 2',
    color: 'yellow',
  },
};

export const ActividadRoja: Story = {
  args: {
    text: 'Texto ejemplo de actividad 3',
    color: 'red',
  },
};

export const TextoLargo: Story = {
  args: {
    text: 'Este es un ejemplo de actividad con un texto considerablemente más largo para verificar el comportamiento del componente',
    color: 'green',
  },
};

export const TodasLasActividades: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; max-width: 400px;">
        <app-activity-item text="Texto ejemplo de actividad 1" color="green"></app-activity-item>
        <app-activity-item text="Texto ejemplo de actividad 2" color="yellow"></app-activity-item>
        <app-activity-item text="Texto ejemplo de actividad 3" color="red"></app-activity-item>
      </div>
    `,
  }),
};

export const ConDiferentesLongitudes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 8px; padding: 20px; max-width: 500px;">
        <app-activity-item text="Texto corto" color="green"></app-activity-item>
        <app-activity-item text="Este es un texto de longitud media para la actividad" color="yellow"></app-activity-item>
        <app-activity-item text="Este es un ejemplo de actividad con un texto considerablemente más largo para verificar el comportamiento del componente cuando tiene mucho contenido" color="red"></app-activity-item>
      </div>
    `,
  }),
};
