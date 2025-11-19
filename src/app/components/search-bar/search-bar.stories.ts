import type { Meta, StoryObj } from '@storybook/angular';

import { SearchBarComponent } from './search-bar.component';

const meta: Meta<SearchBarComponent> = {
  title: 'Components/SearchBar',
  component: SearchBarComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input',
    },
    value: {
      control: 'text',
      description: 'Current value of the search input',
    },
  },
};

export default meta;
type Story = StoryObj<SearchBarComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Buscar contacto...',
    value: '',
  },
};

export const PlaceholderPersonalizado: Story = {
  args: {
    placeholder: 'Buscar usuario...',
    value: '',
  },
};

export const ConValorInicial: Story = {
  args: {
    placeholder: 'Buscar contacto...',
    value: 'Carlos Mendoza',
  },
};

export const PlaceholderBusquedaProducto: Story = {
  args: {
    placeholder: 'Buscar producto...',
    value: '',
  },
};

export const EnContenedorAncho: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 600px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <app-search-bar [placeholder]="placeholder" [value]="value"></app-search-bar>
      </div>
    `,
  }),
  args: {
    placeholder: 'Buscar contacto...',
    value: '',
  },
};

export const EnContenedorEstrecho: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 200px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <app-search-bar [placeholder]="placeholder" [value]="value"></app-search-bar>
      </div>
    `,
  }),
  args: {
    placeholder: 'Buscar...',
    value: '',
  },
};

export const VariosAnchos: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px;">
        <div style="width: 100%;">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Ancho completo (100%)</p>
          <app-search-bar placeholder="Buscar contacto..."></app-search-bar>
        </div>
        
        <div style="width: 400px;">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Ancho 400px</p>
          <app-search-bar placeholder="Buscar contacto..."></app-search-bar>
        </div>
        
        <div style="width: 240px;">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Ancho 240px (diseño original)</p>
          <app-search-bar placeholder="Buscar contacto..."></app-search-bar>
        </div>
        
        <div style="width: 180px;">
          <p style="margin-bottom: 8px; font-size: 12px; color: #666;">Ancho 180px</p>
          <app-search-bar placeholder="Buscar..."></app-search-bar>
        </div>
      </div>
    `,
  }),
};
