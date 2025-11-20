import type { Meta, StoryObj } from '@storybook/angular';
import { BotonMaestroComponent } from './boton-maestro.component';

// Lucide icons como SVG strings
const lucideCirclePlay = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_66_96)">
<path d="M17.5 10C17.5 5.85787 14.1422 2.50001 10 2.50001C5.85791 2.50001 2.50004 5.85787 2.50004 10C2.50004 14.1421 5.85791 17.5 10 17.5C14.1422 17.5 17.5 14.1421 17.5 10ZM12.5 9.9992L8.33582 7.50164L8.33337 7.50001V12.5L8.33582 12.4984L12.5 10.0008L12.5017 10L12.5 9.9992ZM14.1651 10.1082C14.1487 10.3592 14.0758 10.6041 13.9511 10.8236C13.8088 11.0739 13.6033 11.2822 13.3562 11.4299L13.357 11.4307L9.19275 13.9282L9.19194 13.9274C8.93926 14.0794 8.65103 14.1626 8.35616 14.1667C8.0604 14.1707 7.76877 14.0961 7.51143 13.9502C7.254 13.8043 7.03977 13.5918 6.89132 13.3358C6.74304 13.0799 6.66555 12.7892 6.66671 12.4935V7.50245C6.66627 7.20756 6.74399 6.91762 6.89213 6.66261C7.0407 6.4069 7.2549 6.19554 7.51225 6.04982C7.76962 5.90409 8.06124 5.82919 8.35697 5.83334C8.65151 5.83751 8.93952 5.92005 9.19194 6.07179H9.19275L13.3553 8.56853L13.4457 8.62631C13.6531 8.76887 13.8262 8.95678 13.9511 9.17644C14.0936 9.42741 14.1683 9.71137 14.1683 10L14.1651 10.1082ZM19.1667 10C19.1667 15.0626 15.0627 19.1667 10 19.1667C4.93743 19.1667 0.833374 15.0626 0.833374 10C0.833374 4.9374 4.93743 0.833344 10 0.833344C15.0627 0.833344 19.1667 4.9374 19.1667 10Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_66_96">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>`;

const lucideArrowLeft = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.41079 3.57747C9.73622 3.25204 10.2637 3.25204 10.5892 3.57747C10.9146 3.90291 10.9146 4.43042 10.5892 4.75586L6.17836 9.16667H15.8333C16.2935 9.16667 16.6666 9.53976 16.6666 10C16.6666 10.4602 16.2935 10.8333 15.8333 10.8333H6.17836L10.5892 15.2441C10.9146 15.5696 10.9146 16.0971 10.5892 16.4225C10.2637 16.748 9.73622 16.748 9.41079 16.4225L3.57745 10.5892C3.25201 10.2638 3.25201 9.73625 3.57745 9.41081L9.41079 3.57747Z" fill="black"/>
</svg>`;

const lucideEllipsis = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z" fill="black"/>
</svg>`;

const meta: Meta<BotonMaestroComponent> = {
  title: 'Components/BotonMaestro',
  component: BotonMaestroComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'outline',
        'secondary',
        'ghost',
        'destructive',
        'link',
        'icon-text',
        'ovalado',
        'button',
        'group',
        'rectangular-icon',
        'circular-icon',
      ],
      description: 'Variante visual del botón',
    },
    text: {
      control: 'text',
      description: 'Texto del botón',
    },
    icon: {
      control: 'text',
      description: 'SVG del icono (Lucide)',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
    },
  },
};

export default meta;
type Story = StoryObj<BotonMaestroComponent>;

export const Default: Story = {
  args: {
    variant: 'default',
    text: 'Default',
  },
};

export const DefaultHover: Story = {
  args: {
    variant: 'default',
    text: 'Default',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    text: 'Outline',
  },
};

export const OutlineHover: Story = {
  args: {
    variant: 'outline',
    text: 'Outline',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    text: 'Secondary',
  },
};

export const SecondaryHover: Story = {
  args: {
    variant: 'secondary',
    text: 'Secondary',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    text: 'Ghost',
  },
};

export const GhostHover: Story = {
  args: {
    variant: 'ghost',
    text: 'Ghost',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    text: 'Destructive',
  },
};

export const DestructiveHover: Story = {
  args: {
    variant: 'destructive',
    text: 'Destructive',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    text: 'Link',
  },
};

export const LinkHover: Story = {
  args: {
    variant: 'link',
    text: 'Link',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const RectangularIcon: Story = {
  args: {
    variant: 'rectangular-icon',
    icon: lucideCirclePlay,
  },
};

export const RectangularIconHover: Story = {
  args: {
    variant: 'rectangular-icon',
    icon: lucideCirclePlay,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const CircularIcon: Story = {
  args: {
    variant: 'circular-icon',
    icon: lucideCirclePlay,
  },
};

export const CircularIconHover: Story = {
  args: {
    variant: 'circular-icon',
    icon: lucideCirclePlay,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const IconConTexto: Story = {
  args: {
    variant: 'icon-text',
    text: 'Icono con texto',
    icon: lucideCirclePlay,
  },
};

export const IconConTextoHover: Story = {
  args: {
    variant: 'icon-text',
    text: 'Icono con texto',
    icon: lucideCirclePlay,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Ovalado: Story = {
  args: {
    variant: 'ovalado',
    text: 'Ovalado',
  },
};

export const OvaladoHover: Story = {
  args: {
    variant: 'ovalado',
    text: 'Ovalado',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const ButtonGroup: Story = {
  args: {
    variant: 'button',
    text: 'Button',
  },
};

export const Group: Story = {
  args: {
    variant: 'group',
    text: 'Group',
  },
};

export const ArrowButton: Story = {
  args: {
    variant: 'rectangular-icon',
    icon: lucideArrowLeft,
  },
};

export const MenuButton: Story = {
  args: {
    variant: 'group',
    icon: lucideEllipsis,
  },
};

export const TodosLosBotones: Story = {
  render: () => ({
    template: `
      <div class="p-8 bg-white">
        <h2 class="text-xl font-bold mb-6">Componente Botón Maestro - Todas las Variantes</h2>
        
        <div class="space-y-8">
          <!-- Default -->
          <div class="flex gap-4 items-center">
            <app-boton-maestro variant="default" text="Default"></app-boton-maestro>
            <app-boton-maestro variant="default" text="Default"></app-boton-maestro>
          </div>

          <!-- Outline -->
          <div class="flex gap-4 items-center">
            <app-boton-maestro variant="outline" text="Outline"></app-boton-maestro>
            <app-boton-maestro variant="outline" text="Outline"></app-boton-maestro>
          </div>

          <!-- Secondary -->
          <div class="flex gap-4 items-center">
            <app-boton-maestro variant="secondary" text="Secondary"></app-boton-maestro>
            <app-boton-maestro variant="secondary" text="Secondary"></app-boton-maestro>
          </div>

          <!-- Ghost -->
          <div class="flex gap-4 items-center">
            <span class="text-sm">Ghost</span>
            <app-boton-maestro variant="ghost" text="Ghost"></app-boton-maestro>
          </div>

          <!-- Destructive -->
          <div class="flex gap-4 items-center">
            <app-boton-maestro variant="destructive" text="Destructive"></app-boton-maestro>
            <app-boton-maestro variant="destructive" text="Destructive"></app-boton-maestro>
          </div>

          <!-- Link -->
          <div class="flex gap-4 items-center">
            <app-boton-maestro variant="link" text="Link"></app-boton-maestro>
            <app-boton-maestro variant="link" text="Link"></app-boton-maestro>
          </div>

          <!-- Rectangular Icon -->
          <div class="flex gap-4 items-center">
            <app-boton-maestro variant="rectangular-icon" [icon]="circlePlayIcon"></app-boton-maestro>
            <app-boton-maestro variant="rectangular-icon" [icon]="circlePlayIcon"></app-boton-maestro>
          </div>

          <!-- Icon con texto -->
          <div class="flex gap-4 items-center">
            <app-boton-maestro variant="icon-text" text="Icono con texto" [icon]="circlePlayIcon"></app-boton-maestro>
            <app-boton-maestro variant="icon-text" text="Icono con texto" [icon]="circlePlayIcon"></app-boton-maestro>
          </div>

          <!-- Ovalado -->
          <div class="flex gap-4 items-center">
            <app-boton-maestro variant="ovalado" text="Ovalado"></app-boton-maestro>
            <app-boton-maestro variant="ovalado" text="Ovalado"></app-boton-maestro>
          </div>

          <!-- Circular Icon -->
          <div class="flex gap-4 items-center">
            <app-boton-maestro variant="circular-icon" [icon]="circlePlayIcon"></app-boton-maestro>
            <app-boton-maestro variant="circular-icon" [icon]="circlePlayIcon"></app-boton-maestro>
          </div>

          <!-- Button Groups -->
          <div class="flex gap-4 items-center">
            <app-boton-maestro variant="rectangular-icon" [icon]="arrowLeftIcon"></app-boton-maestro>
            <app-boton-maestro variant="button" text="Button"></app-boton-maestro>
            <app-boton-maestro variant="group" text="Group"></app-boton-maestro>
            <app-boton-maestro variant="group" text="Group"></app-boton-maestro>
            <app-boton-maestro variant="group" [icon]="ellipsisIcon"></app-boton-maestro>
          </div>
        </div>
      </div>
    `,
    props: {
      circlePlayIcon: lucideCirclePlay,
      arrowLeftIcon: lucideArrowLeft,
      ellipsisIcon: lucideEllipsis,
    },
  }),
};
