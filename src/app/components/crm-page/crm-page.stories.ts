import type { Meta, StoryObj } from '@storybook/angular';
import { CrmPageComponent } from './crm-page.component';

const meta: Meta<CrmPageComponent> = {
  title: 'Pages/CRM Page',
  component: CrmPageComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<CrmPageComponent>;

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
