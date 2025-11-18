import type { Meta, StoryObj } from '@storybook/angular';

import { TagPillComponent } from './tag-pill.component';

const audioLinesIcon = `<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_24_17)">
<path d="M3.375 7.875V1.125C3.375 0.917893 3.54289 0.75 3.75 0.75C3.95711 0.75 4.125 0.917893 4.125 1.125V7.875C4.125 8.08211 3.95711 8.25 3.75 8.25C3.54289 8.25 3.375 8.08211 3.375 7.875ZM6.375 6.75V1.875C6.375 1.66789 6.54289 1.5 6.75 1.5C6.95711 1.5 7.125 1.66789 7.125 1.875V6.75C7.125 6.95711 6.95711 7.125 6.75 7.125C6.54289 7.125 6.375 6.95711 6.375 6.75ZM1.875 6.375V2.25C1.875 2.04289 2.04289 1.875 2.25 1.875C2.45711 1.875 2.625 2.04289 2.625 2.25V6.375C2.625 6.58211 2.45711 6.75 2.25 6.75C2.04289 6.75 1.875 6.58211 1.875 6.375ZM4.875 5.625V3C4.875 2.79289 5.04289 2.625 5.25 2.625C5.45711 2.625 5.625 2.79289 5.625 3V5.625C5.625 5.83211 5.45711 6 5.25 6C5.04289 6 4.875 5.83211 4.875 5.625ZM0.375 4.875V3.75C0.375 3.54289 0.542893 3.375 0.75 3.375C0.957107 3.375 1.125 3.54289 1.125 3.75V4.875C1.125 5.08211 0.957107 5.25 0.75 5.25C0.542893 5.25 0.375 5.08211 0.375 4.875ZM7.875 4.875V3.75C7.875 3.54289 8.04289 3.375 8.25 3.375C8.45711 3.375 8.625 3.54289 8.625 3.75V4.875C8.625 5.08211 8.45711 5.25 8.25 5.25C8.04289 5.25 7.875 5.08211 7.875 4.875Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_24_17">
<rect width="9" height="9" fill="white"/>
</clipPath>
</defs>
</svg>`;

const meta: Meta<TagPillComponent> = {
  title: 'Components/TagPill',
  component: TagPillComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text label for the tag',
    },
    color: {
      control: 'select',
      options: ['green', 'orange', 'red', 'blue', 'teal', 'purple'],
      description: 'Color palette for the tag',
    },
    icon: {
      control: 'text',
      description: 'Optional SVG icon (inline HTML)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the tag - sm for short labels, md for longer labels',
    },
  },
};

export default meta;
type Story = StoryObj<TagPillComponent>;

// Priority Tags
export const Alta: Story = {
  args: {
    label: 'Alta',
    color: 'green',
    size: 'sm',
  },
};

export const Media: Story = {
  args: {
    label: 'Media',
    color: 'orange',
    size: 'sm',
  },
};

export const Baja: Story = {
  args: {
    label: 'Baja',
    color: 'red',
    size: 'sm',
  },
};

export const Prb: Story = {
  args: {
    label: 'Prb',
    color: 'orange',
    size: 'sm',
  },
};

// With Icon
export const Wavix: Story = {
  args: {
    label: 'Wavix',
    color: 'teal',
    size: 'sm',
    icon: audioLinesIcon,
  },
};

// Communication Tags
export const Correos: Story = {
  args: {
    label: 'Correos',
    color: 'blue',
    size: 'md',
  },
};

export const SeguimientoWhatsApp: Story = {
  args: {
    label: 'Seguimiento de WhatsApp',
    color: 'purple',
    size: 'md',
  },
};

// All Colors Showcase
export const AllColorsSmall: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 12px; padding: 20px;">
        <app-tag-pill label="Alta" color="green" size="sm"></app-tag-pill>
        <app-tag-pill label="Media" color="orange" size="sm"></app-tag-pill>
        <app-tag-pill label="Baja" color="red" size="sm"></app-tag-pill>
        <app-tag-pill label="Correos" color="blue" size="sm"></app-tag-pill>
        <app-tag-pill label="Wavix" color="teal" size="sm" icon='${audioLinesIcon}'></app-tag-pill>
        <app-tag-pill label="WhatsApp" color="purple" size="sm"></app-tag-pill>
      </div>
    `,
  }),
};

export const AllColorsMedium: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; padding: 20px;">
        <app-tag-pill label="Prioridad Alta" color="green" size="md"></app-tag-pill>
        <app-tag-pill label="Prioridad Media" color="orange" size="md"></app-tag-pill>
        <app-tag-pill label="Prioridad Baja" color="red" size="md"></app-tag-pill>
        <app-tag-pill label="Correos" color="blue" size="md"></app-tag-pill>
        <app-tag-pill label="Wavix Audio" color="teal" size="md" icon='${audioLinesIcon}'></app-tag-pill>
        <app-tag-pill label="Seguimiento de WhatsApp" color="purple" size="md"></app-tag-pill>
      </div>
    `,
  }),
};
