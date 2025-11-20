import type { Meta, StoryObj } from '@storybook/angular';
import { PruebaDeUsoComponent } from './prueba-de-uso.component';

const circlePlayIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_66_96)">
<path d="M17.5 10C17.5 5.85787 14.1422 2.50001 10 2.50001C5.85791 2.50001 2.50004 5.85787 2.50004 10C2.50004 14.1421 5.85791 17.5 10 17.5C14.1422 17.5 17.5 14.1421 17.5 10ZM12.5 9.9992L8.33582 7.50164L8.33337 7.50001V12.5L8.33582 12.4984L12.5 10.0008L12.5017 10L12.5 9.9992ZM14.1651 10.1082C14.1487 10.3592 14.0758 10.6041 13.9511 10.8236C13.8088 11.0739 13.6033 11.2822 13.3562 11.4299L13.357 11.4307L9.19275 13.9282L9.19194 13.9274C8.93926 14.0794 8.65103 14.1626 8.35616 14.1667C8.0604 14.1707 7.76877 14.0961 7.51143 13.9502C7.254 13.8043 7.03977 13.5918 6.89132 13.3358C6.74304 13.0799 6.66555 12.7892 6.66671 12.4935V7.50245C6.66627 7.20756 6.74399 6.91762 6.89213 6.66261C7.0407 6.4069 7.2549 6.19554 7.51225 6.04982C7.76962 5.90409 8.06124 5.82919 8.35697 5.83334C8.65151 5.83751 8.93952 5.92005 9.19194 6.07179H9.19275L13.3553 8.56853L13.4457 8.62631C13.6531 8.76887 13.8262 8.95678 13.9511 9.17644C14.0936 9.42741 14.1683 9.71137 14.1683 10L14.1651 10.1082ZM19.1667 10C19.1667 15.0626 15.0627 19.1667 10 19.1667C4.93743 19.1667 0.833374 15.0626 0.833374 10C0.833374 4.9374 4.93743 0.833344 10 0.833344C15.0627 0.833344 19.1667 4.9374 19.1667 10Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_66_96">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const arrowLeftIcon = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.41079 3.57747C9.73622 3.25204 10.2637 3.25204 10.5892 3.57747C10.9146 3.90291 10.9146 4.43042 10.5892 4.75586L6.17836 9.16667H15.8333C16.2935 9.16667 16.6666 9.53976 16.6666 10C16.6666 10.4602 16.2935 10.8333 15.8333 10.8333H6.17836L10.5892 15.2441C10.9146 15.5696 10.9146 16.0971 10.5892 16.4225C10.2637 16.748 9.73622 16.748 9.41079 16.4225L3.57745 10.5892C3.25201 10.2638 3.25201 9.73625 3.57745 9.41081L9.41079 3.57747Z" fill="currentColor"/>
</svg>
`;

const ellipsisIcon = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12Z" fill="currentColor"/>
</svg>
`;

const meta: Meta<PruebaDeUsoComponent> = {
  title: 'Components/PruebaDeUso',
  component: PruebaDeUsoComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
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
    },
    iconName: { control: 'text' },
    showIcon: { control: 'boolean' },
    disabled: { control: 'boolean' },
    clicked: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<PruebaDeUsoComponent>;

export const Default: Story = {
  args: {
    label: 'Default',
    variant: 'default',
    showIcon: false,
    disabled: false,
  },
};

export const DefaultHover: Story = {
  args: {
    label: 'Default',
    variant: 'default',
    showIcon: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline',
    variant: 'outline',
    showIcon: false,
    disabled: false,
  },
};

export const OutlineHover: Story = {
  args: {
    label: 'Outline',
    variant: 'outline',
    showIcon: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
    showIcon: false,
    disabled: false,
  },
};

export const SecondaryHover: Story = {
  args: {
    label: 'Secondary',
    variant: 'secondary',
    showIcon: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost',
    variant: 'ghost',
    showIcon: false,
    disabled: false,
  },
};

export const GhostHover: Story = {
  args: {
    label: 'Ghost',
    variant: 'ghost',
    showIcon: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Destructive: Story = {
  args: {
    label: 'Destructive',
    variant: 'destructive',
    showIcon: false,
    disabled: false,
  },
};

export const DestructiveHover: Story = {
  args: {
    label: 'Destructive',
    variant: 'destructive',
    showIcon: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Link: Story = {
  args: {
    label: 'Link',
    variant: 'link',
    showIcon: false,
    disabled: false,
  },
};

export const LinkHover: Story = {
  args: {
    label: 'Link',
    variant: 'link',
    showIcon: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const IconoCircular: Story = {
  args: {
    label: '',
    variant: 'icono-circular',
    iconName: circlePlayIcon,
    showIcon: true,
    disabled: false,
  },
};

export const IconoCircularHover: Story = {
  args: {
    label: '',
    variant: 'icono-circular',
    iconName: circlePlayIcon,
    showIcon: true,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const IconoCuadrado: Story = {
  args: {
    label: '',
    variant: 'icono-cuadrado',
    iconName: circlePlayIcon,
    showIcon: true,
    disabled: false,
  },
};

export const IconoCuadradoHover: Story = {
  args: {
    label: '',
    variant: 'icono-cuadrado',
    iconName: circlePlayIcon,
    showIcon: true,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const IconoConTexto: Story = {
  args: {
    label: 'Icono con texto',
    variant: 'icono-cuadrado',
    iconName: circlePlayIcon,
    showIcon: true,
    disabled: false,
  },
};

export const IconoConTextoHover: Story = {
  args: {
    label: 'Icono con texto',
    variant: 'icono-cuadrado',
    iconName: circlePlayIcon,
    showIcon: true,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const Ovalado: Story = {
  args: {
    label: 'Ovalado',
    variant: 'ovalado',
    showIcon: false,
    disabled: false,
  },
};

export const OvaladoHover: Story = {
  args: {
    label: 'Ovalado',
    variant: 'ovalado',
    showIcon: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const OvaladoIcono: Story = {
  args: {
    label: '',
    variant: 'ovalado',
    iconName: circlePlayIcon,
    showIcon: true,
    disabled: false,
  },
};

export const OvaladoIconoHover: Story = {
  args: {
    label: '',
    variant: 'ovalado',
    iconName: circlePlayIcon,
    showIcon: true,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};

export const PaginationArrow: Story = {
  args: {
    label: '',
    variant: 'pagination',
    iconName: arrowLeftIcon,
    showIcon: true,
    disabled: false,
  },
};

export const PaginationButton: Story = {
  args: {
    label: 'Button',
    variant: 'pagination',
    showIcon: false,
    disabled: false,
  },
};

export const PaginationGroup: Story = {
  args: {
    label: 'Group',
    variant: 'pagination',
    showIcon: false,
    disabled: false,
  },
};

export const PaginationEllipsis: Story = {
  args: {
    label: '',
    variant: 'pagination',
    iconName: ellipsisIcon,
    showIcon: true,
    disabled: false,
  },
};

export const PaginationGroupHover: Story = {
  args: {
    label: 'Group',
    variant: 'pagination',
    showIcon: false,
    disabled: false,
  },
  parameters: {
    pseudo: { hover: true },
  },
};
