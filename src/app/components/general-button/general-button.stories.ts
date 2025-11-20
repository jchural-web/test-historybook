import type { Meta, StoryObj } from '@storybook/angular';

import { GeneralButtonComponent } from './general-button.component';

const meta: Meta<GeneralButtonComponent> = {
  title: 'Components/GeneralButton',
  component: GeneralButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Button label text',
    },
    color: {
      control: 'select',
      options: ['white', 'green', 'purple', 'orange', 'blue'],
      description: 'Button color variant',
    },
  },
};

export default meta;
type Story = StoryObj<GeneralButtonComponent>;

export const Blanco: Story = {
  args: {
    label: 'Filtrar',
    color: 'white',
  },
};

export const Morado: Story = {
  args: {
    label: 'Buscar',
    color: 'purple',
  },
};

export const Naranja: Story = {
  args: {
    label: 'Guardar datos',
    color: 'orange',
  },
};

export const Verde: Story = {
  args: {
    label: 'Confirmar',
    color: 'green',
  },
};

export const Azul: Story = {
  args: {
    label: 'Ver más',
    color: 'blue',
  },
};

export const TodosLosBotones: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px;">
        <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
          <app-general-button label="Filtrar" color="white"></app-general-button>
          <app-general-button label="Buscar" color="purple"></app-general-button>
          <app-general-button label="Guardar datos" color="orange"></app-general-button>
        </div>
        
        <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
          <app-general-button label="Confirmar" color="green"></app-general-button>
          <app-general-button label="Ver más" color="blue"></app-general-button>
          <app-general-button label="Cancelar" color="white"></app-general-button>
        </div>
        
        <hr style="border: 1px solid #eee; margin: 10px 0;">
        
        <div>
          <p style="margin-bottom: 12px; font-size: 12px; color: #666; font-weight: 600;">
            Estados de hover (pasa el mouse sobre cada botón):
          </p>
          <div style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap;">
            <app-general-button label="Filtrar" color="white"></app-general-button>
            <app-general-button label="Buscar" color="purple"></app-general-button>
            <app-general-button label="Guardar datos" color="orange"></app-general-button>
            <app-general-button label="Confirmar" color="green"></app-general-button>
            <app-general-button label="Ver más" color="blue"></app-general-button>
          </div>
        </div>
      </div>
    `,
  }),
};

export const TextosLargos: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 15px; padding: 20px;">
        <app-general-button label="Texto corto" color="purple"></app-general-button>
        <app-general-button label="Texto un poco más largo" color="orange"></app-general-button>
        <app-general-button label="Este es un texto considerablemente más extenso para el botón" color="blue"></app-general-button>
      </div>
    `,
  }),
};
