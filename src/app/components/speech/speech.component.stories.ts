import type { Meta, StoryObj } from '@storybook/angular';
import { SpeechComponent } from './speech.component';

const meta: Meta<SpeechComponent> = {
  title: 'Pages/Speech',
  component: SpeechComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<SpeechComponent>;

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
