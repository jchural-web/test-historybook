import type { Meta, StoryObj } from '@storybook/angular';

import { BotonEjecutarComponent } from './boton-ejecutar.component';

const meta: Meta<BotonEjecutarComponent> = {
  title: 'Components/BotonEjecutar',
  component: BotonEjecutarComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    color: {
      control: 'select',
      options: ['green', 'yellow', 'red'],
      description: 'Button color variant',
    },
  },
};

export default meta;
type Story = StoryObj<BotonEjecutarComponent>;

export const Verde: Story = {
  args: {
    label: 'Ejecutar',
    color: 'green',
  },
};

export const Amarillo: Story = {
  args: {
    label: 'Ejecutar',
    color: 'yellow',
  },
};

export const Rojo: Story = {
  args: {
    label: 'Ejecutar',
    color: 'red',
  },
};

export const Iniciar: Story = {
  args: {
    label: 'Iniciar',
    color: 'green',
  },
};

export const Reproducir: Story = {
  args: {
    label: 'Reproducir',
    color: 'yellow',
  },
};

export const Comenzar: Story = {
  args: {
    label: 'Comenzar',
    color: 'red',
  },
};

export const TodosLosBotones: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px;">
        <div style="display: flex; gap: 15px; align-items: center;">
          <app-boton-ejecutar label="Ejecutar" color="green"></app-boton-ejecutar>
          <span style="color: #666; font-size: 12px;">Verde - Normal</span>
        </div>
        
        <div style="display: flex; gap: 15px; align-items: center;">
          <app-boton-ejecutar label="Ejecutar" color="yellow"></app-boton-ejecutar>
          <span style="color: #666; font-size: 12px;">Amarillo - Normal</span>
        </div>
        
        <div style="display: flex; gap: 15px; align-items: center;">
          <app-boton-ejecutar label="Ejecutar" color="red"></app-boton-ejecutar>
          <span style="color: #666; font-size: 12px;">Rojo - Normal</span>
        </div>
        
        <hr style="border: 1px solid #eee; margin: 10px 0;">
        
        <div style="display: flex; gap: 15px; align-items: center;">
          <app-boton-ejecutar label="Iniciar" color="green"></app-boton-ejecutar>
          <app-boton-ejecutar label="Reproducir" color="yellow"></app-boton-ejecutar>
          <app-boton-ejecutar label="Comenzar" color="red"></app-boton-ejecutar>
        </div>
      </div>
    `,
  }),
};
