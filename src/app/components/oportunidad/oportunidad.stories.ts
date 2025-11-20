import type { Meta, StoryObj } from '@storybook/angular';

import { OportunidadComponent } from './oportunidad.component';

const meta: Meta<OportunidadComponent> = {
  title: 'Components/Oportunidad',
  component: OportunidadComponent,
  tags: ['autodocs'],
  argTypes: {
    etiqueta: {
      control: 'text',
      description: 'Priority label (Alta, Media, Baja)',
    },
    nombre: {
      control: 'text',
      description: 'Prospect name',
    },
    programa: {
      control: 'text',
      description: 'Program or course name',
    },
    fase: {
      control: 'text',
      description: 'Current phase',
    },
    categoria: {
      control: 'text',
      description: 'Category',
    },
    categoriaColor: {
      control: 'color',
      description: 'Category text color',
    },
  },
};

export default meta;
type Story = StoryObj<OportunidadComponent>;

export const CarlosMendoza: Story = {
  args: {
    etiqueta: 'Alta',
    nombre: 'Carlos Mendoza',
    programa: 'LEAN SSSB ONLINE 2024 II LIMA',
    fase: 'BNC',
    categoria: 'Facebook Chat',
    categoriaColor: '#2563EB',
  },
};

export const RobertoSanchez: Story = {
  args: {
    etiqueta: 'Media',
    nombre: 'Roberto Sánchez',
    programa: 'LEAN SSSB AONLINE 2025 I BOGOTA',
    fase: 'BNC',
    categoria: 'Whatsapp Chat Bases Propias',
    categoriaColor: '#5AA34A',
  },
};

export const AnaMaria: Story = {
  args: {
    etiqueta: 'Alta',
    nombre: 'Ana María Gutiérrez',
    programa: 'D SIG ONLINE 2025 II LIMA',
    fase: 'BNC',
    categoria: 'Whatsapp Rpta - Mailing',
    categoriaColor: '#E32626',
  },
};

export const PatriciaFlores: Story = {
  args: {
    etiqueta: 'Baja',
    nombre: 'Patricia Flores',
    programa: 'D SIG ONLINE 2025 II LIMA',
    fase: 'BNC',
    categoria: 'Whatsapp Rpta - Mailing',
    categoriaColor: '#9336EB',
  },
};

export const ProspectoNuevo: Story = {
  args: {
    etiqueta: 'Media',
    nombre: 'Juan Pérez',
    programa: 'MBA EXECUTIVE 2025 I MADRID',
    fase: 'Contactado',
    categoria: 'LinkedIn',
    categoriaColor: '#0A66C2',
  },
};

export const TodasLasOportunidades: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 30px; padding: 20px;">
        <app-oportunidad 
          etiqueta="Alta" 
          nombre="Carlos Mendoza" 
          programa="LEAN SSSB ONLINE 2024 II LIMA"
          fase="BNC"
          categoria="Facebook Chat"
          categoriaColor="#2563EB">
        </app-oportunidad>
        
        <app-oportunidad 
          etiqueta="Media" 
          nombre="Roberto Sánchez" 
          programa="LEAN SSSB AONLINE 2025 I BOGOTA"
          fase="BNC"
          categoria="Whatsapp Chat Bases Propias"
          categoriaColor="#5AA34A">
        </app-oportunidad>
        
        <app-oportunidad 
          etiqueta="Alta" 
          nombre="Ana María Gutiérrez" 
          programa="D SIG ONLINE 2025 II LIMA"
          fase="BNC"
          categoria="Whatsapp Rpta - Mailing"
          categoriaColor="#E32626">
        </app-oportunidad>
        
        <app-oportunidad 
          etiqueta="Baja" 
          nombre="Patricia Flores" 
          programa="D SIG ONLINE 2025 II LIMA"
          fase="BNC"
          categoria="Whatsapp Rpta - Mailing"
          categoriaColor="#9336EB">
        </app-oportunidad>
      </div>
    `,
  }),
};
