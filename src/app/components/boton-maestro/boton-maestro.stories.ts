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

const lucideCirclePlaySmall = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_66_109)">
<path d="M15.75 9C15.75 5.27208 12.7279 2.25 9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9ZM11.25 8.99927L7.5022 6.75146L7.5 6.75V11.25L7.5022 11.2485L11.25 9.00073L11.2515 9L11.25 8.99927ZM12.7485 9.09741C12.7338 9.32331 12.6682 9.54365 12.5559 9.74121C12.4279 9.96653 12.243 10.1539 12.0205 10.2869L12.0212 10.2876L8.27344 12.5354L8.27271 12.5347C8.04529 12.6715 7.78589 12.7463 7.52051 12.75C7.25432 12.7536 6.99185 12.6864 6.76025 12.5552C6.52857 12.4238 6.33576 12.2326 6.20215 12.0022C6.0687 11.7719 5.99896 11.5103 6 11.2441V6.7522C5.99961 6.4868 6.06955 6.22585 6.20288 5.99634C6.33659 5.7662 6.52938 5.57597 6.76099 5.44482C6.99262 5.31367 7.25508 5.24626 7.52124 5.25C7.78632 5.25375 8.04553 5.32803 8.27271 5.4646H8.27344L12.0198 7.71167L12.1011 7.76367C12.2878 7.89197 12.4436 8.0611 12.5559 8.25879C12.6842 8.48466 12.7515 8.74023 12.7515 9L12.7485 9.09741ZM17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_66_109">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>`;

const lucideCirclePlayMini = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_66_102)">
<path d="M14 8.00001C14 4.6863 11.3137 2.00001 7.99996 2.00001C4.68625 2.00001 1.99996 4.6863 1.99996 8.00001C1.99996 11.3137 4.68625 14 7.99996 14C11.3137 14 14 11.3137 14 8.00001ZM9.99996 7.99935L6.66858 6.00131L6.66663 6.00001V10L6.66858 9.9987L9.99996 8.00066L10.0013 8.00001L9.99996 7.99935ZM11.332 8.08659C11.3189 8.28739 11.2605 8.48325 11.1608 8.65886C11.047 8.85914 10.8826 9.02573 10.6849 9.14389L10.6855 9.14454L7.35413 11.1426L7.35348 11.1419C7.15133 11.2635 6.92075 11.3301 6.68486 11.3333C6.44825 11.3366 6.21494 11.2768 6.00907 11.1602C5.80313 11.0434 5.63174 10.8734 5.51298 10.6686C5.39436 10.4639 5.33237 10.2314 5.33329 9.9948V6.00196C5.33295 5.76605 5.39512 5.53409 5.51363 5.33008C5.63249 5.12552 5.80385 4.95643 6.00973 4.83985C6.21562 4.72327 6.44892 4.66335 6.68551 4.66667C6.92113 4.67001 7.15154 4.73603 7.35348 4.85743H7.35413L10.6842 6.85482L10.7565 6.90105C10.9224 7.01509 11.0609 7.16542 11.1608 7.34115C11.2748 7.54192 11.3346 7.7691 11.3346 8.00001L11.332 8.08659ZM15.3333 8.00001C15.3333 12.0501 12.05 15.3333 7.99996 15.3333C3.94987 15.3333 0.666626 12.0501 0.666626 8.00001C0.666626 3.94992 3.94987 0.666672 7.99996 0.666672C12.05 0.666672 15.3333 3.94992 15.3333 8.00001Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_66_102">
<rect width="16" height="16" fill="white"/>
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
        'icono-circular',
        'icono-cuadrado',
        'ovalado',
        'pagination',
      ],
      description: 'Variante visual del botón',
    },
    label: {
      control: 'text',
      description: 'Texto del botón',
    },
    iconName: {
      control: 'text',
      description: 'SVG del icono (Lucide)',
    },
    showIcon: {
      control: 'boolean',
      description: 'Mostrar icono',
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
    label: 'Default',
  },
};

export const DefaultHover: Story = {
  args: {
    variant: 'default',
    label: 'Default',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Outline',
  },
};

export const OutlineHover: Story = {
  args: {
    variant: 'outline',
    label: 'Outline',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary',
  },
};

export const SecondaryHover: Story = {
  args: {
    variant: 'secondary',
    label: 'Secondary',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost',
  },
};

export const GhostHover: Story = {
  args: {
    variant: 'ghost',
    label: 'Ghost',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    label: 'Destructive',
  },
};

export const DestructiveHover: Story = {
  args: {
    variant: 'destructive',
    label: 'Destructive',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    label: 'Link',
  },
};

export const LinkHover: Story = {
  args: {
    variant: 'link',
    label: 'Link',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const IconoCuadrado: Story = {
  args: {
    variant: 'icono-cuadrado',
    iconName: lucideCirclePlay,
    showIcon: true,
  },
};

export const IconoCuadradoHover: Story = {
  args: {
    variant: 'icono-cuadrado',
    iconName: lucideCirclePlay,
    showIcon: true,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const IconoCircular: Story = {
  args: {
    variant: 'icono-circular',
    iconName: lucideCirclePlaySmall,
    showIcon: true,
  },
};

export const IconoCircularHover: Story = {
  args: {
    variant: 'icono-circular',
    iconName: lucideCirclePlaySmall,
    showIcon: true,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const IconoConTexto: Story = {
  args: {
    variant: 'default',
    label: 'Icono con texto',
    iconName: lucideCirclePlayMini,
    showIcon: true,
  },
};

export const IconoConTextoHover: Story = {
  args: {
    variant: 'default',
    label: 'Icono con texto',
    iconName: lucideCirclePlayMini,
    showIcon: true,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Ovalado: Story = {
  args: {
    variant: 'ovalado',
    label: 'Ovalado',
  },
};

export const OvaladoHover: Story = {
  args: {
    variant: 'ovalado',
    label: 'Ovalado',
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const OvaladoConIcono: Story = {
  args: {
    variant: 'ovalado',
    label: 'Ovalado',
    iconName: lucideCirclePlaySmall,
    showIcon: true,
  },
};

export const PaginationButton: Story = {
  args: {
    variant: 'pagination',
    label: 'Button',
  },
};

export const PaginationGroup: Story = {
  args: {
    variant: 'pagination',
    label: 'Group',
  },
};

export const TodosLosBotones: Story = {
  render: () => ({
    template: `
      <div style="padding: 32px; background: #FFF;">
        <h2 style="font-size: 20px; font-weight: bold; margin-bottom: 24px; font-family: Inter, sans-serif;">
          Componente Botón Maestro - Todas las Variantes
        </h2>
        
        <div style="display: flex; flex-direction: column; gap: 32px;">
          <!-- Default -->
          <div style="display: flex; gap: 16px; align-items: center;">
            <app-boton-maestro variant="default" label="Default"></app-boton-maestro>
            <app-boton-maestro variant="default" label="Default"></app-boton-maestro>
          </div>

          <!-- Outline -->
          <div style="display: flex; gap: 16px; align-items: center;">
            <app-boton-maestro variant="outline" label="Outline"></app-boton-maestro>
            <app-boton-maestro variant="outline" label="Outline"></app-boton-maestro>
          </div>

          <!-- Secondary -->
          <div style="display: flex; gap: 16px; align-items: center;">
            <app-boton-maestro variant="secondary" label="Secondary"></app-boton-maestro>
            <app-boton-maestro variant="secondary" label="Secondary"></app-boton-maestro>
          </div>

          <!-- Ghost -->
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="font-size: 13px; font-family: Inter, sans-serif;">Ghost</span>
            <app-boton-maestro variant="ghost" label="Ghost"></app-boton-maestro>
          </div>

          <!-- Destructive -->
          <div style="display: flex; gap: 16px; align-items: center;">
            <app-boton-maestro variant="destructive" label="Destructive"></app-boton-maestro>
            <app-boton-maestro variant="destructive" label="Destructive"></app-boton-maestro>
          </div>

          <!-- Link -->
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="font-size: 13px; font-family: Inter, sans-serif;">Link</span>
            <app-boton-maestro variant="link" label="Link"></app-boton-maestro>
          </div>

          <!-- Icono Cuadrado -->
          <div style="display: flex; gap: 16px; align-items: center;">
            <app-boton-maestro 
              variant="icono-cuadrado" 
              [iconName]="circlePlayIcon" 
              [showIcon]="true">
            </app-boton-maestro>
            <app-boton-maestro 
              variant="icono-cuadrado" 
              [iconName]="circlePlayIcon" 
              [showIcon]="true">
            </app-boton-maestro>
          </div>

          <!-- Icon con texto -->
          <div style="display: flex; gap: 16px; align-items: center;">
            <app-boton-maestro 
              variant="default" 
              label="Icono con texto" 
              [iconName]="circlePlayMiniIcon" 
              [showIcon]="true">
            </app-boton-maestro>
            <app-boton-maestro 
              variant="default" 
              label="Icono con texto" 
              [iconName]="circlePlayMiniIcon" 
              [showIcon]="true">
            </app-boton-maestro>
          </div>

          <!-- Ovalado -->
          <div style="display: flex; gap: 16px; align-items: center;">
            <app-boton-maestro variant="ovalado" label="Ovalado"></app-boton-maestro>
            <app-boton-maestro variant="ovalado" label="Ovalado"></app-boton-maestro>
          </div>

          <!-- Icono Circular -->
          <div style="display: flex; gap: 16px; align-items: center;">
            <app-boton-maestro 
              variant="icono-circular" 
              [iconName]="circlePlaySmallIcon" 
              [showIcon]="true">
            </app-boton-maestro>
            <app-boton-maestro 
              variant="icono-circular" 
              [iconName]="circlePlaySmallIcon" 
              [showIcon]="true">
            </app-boton-maestro>
          </div>

          <!-- Pagination Group -->
          <div style="display: flex; gap: 0; align-items: center;">
            <app-boton-maestro 
              variant="pagination" 
              [iconName]="arrowLeftIcon" 
              [showIcon]="true"
              style="border-radius: 5px 0 0 5px;">
            </app-boton-maestro>
            <app-boton-maestro variant="pagination" label="Button"></app-boton-maestro>
            <app-boton-maestro variant="pagination" label="Group"></app-boton-maestro>
            <app-boton-maestro variant="pagination" label="Group"></app-boton-maestro>
            <app-boton-maestro 
              variant="pagination" 
              [iconName]="ellipsisIcon" 
              [showIcon]="true">
            </app-boton-maestro>
          </div>

          <!-- Pagination Group con selección -->
          <div style="display: flex; gap: 0; align-items: center;">
            <app-boton-maestro 
              variant="pagination" 
              [iconName]="arrowLeftIcon" 
              [showIcon]="true"
              style="border-radius: 5px 0 0 5px;">
            </app-boton-maestro>
            <div style="background: #E5E7EB; border: 1px solid #E5E7EB; border-radius: 5px 0 0 5px; padding: 9px 14px; font-size: 13px; font-weight: 500; font-family: Inter, sans-serif; color: #161616;">
              Button
            </div>
            <app-boton-maestro variant="pagination" label="Group"></app-boton-maestro>
            <app-boton-maestro variant="pagination" label="Group"></app-boton-maestro>
            <app-boton-maestro 
              variant="pagination" 
              [iconName]="ellipsisIcon" 
              [showIcon]="true">
            </app-boton-maestro>
          </div>
        </div>
      </div>
    `,
    props: {
      circlePlayIcon: lucideCirclePlay,
      circlePlaySmallIcon: lucideCirclePlaySmall,
      circlePlayMiniIcon: lucideCirclePlayMini,
      arrowLeftIcon: lucideArrowLeft,
      ellipsisIcon: lucideEllipsis,
    },
  }),
};
