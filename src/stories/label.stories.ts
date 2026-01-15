import type { Meta, StoryObj } from '@storybook/angular';
import { LabelComponent } from './label.component';

const meta: Meta<LabelComponent> = {
  title: 'Example/Label',
  component: LabelComponent,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Label text content',
    },
  },
  args: {
    text: 'Etiqueta',
  },
};

export default meta;
type Story = StoryObj<LabelComponent>;

export const Default: Story = {
  args: {
    text: 'Etiqueta',
  },
};

export const Example: Story = {
  args: {
    text: 'Ejemplo de Etiqueta',
  },
};

export const LongText: Story = {
  args: {
    text: 'Esta es una etiqueta con texto más largo',
  },
};
