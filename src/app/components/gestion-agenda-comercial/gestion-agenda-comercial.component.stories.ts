import type { Meta, StoryObj } from '@storybook/angular';
import { GestionAgendaComercialComponent } from './gestion-agenda-comercial.component';

const meta: Meta<GestionAgendaComercialComponent> = {
  title: 'Pages/Gestión de Agenda Comercial',
  component: GestionAgendaComercialComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<GestionAgendaComercialComponent>;

export const Default: Story = {
  args: {},
};

export const WithExpandedSidebar: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const menuButton = canvasElement.querySelector('.menu-button') as HTMLButtonElement;
    if (menuButton) {
      setTimeout(() => {
        menuButton.click();
      }, 100);
    }
  },
};
