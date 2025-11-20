import type { Meta, StoryObj } from '@storybook/angular';

import { PerformanceCardComponent } from './performance-card.component';

const phoneIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_phone)">
<path d="M6 3C6 2.80109 5.92093 2.61038 5.78027 2.46973C5.65717 2.34662 5.49572 2.27068 5.32397 2.25366L5.25 2.25H3C2.80109 2.25 2.61038 2.32907 2.46973 2.46973C2.32907 2.61038 2.25 2.80109 2.25 3C2.25 6.38151 3.59353 9.62429 5.98462 12.0154C8.37571 14.4065 11.6185 15.75 15 15.75C15.1989 15.75 15.3896 15.6709 15.5303 15.5303C15.6709 15.3896 15.75 15.1989 15.75 15V12.75C15.75 12.5511 15.6709 12.3604 15.5303 12.2197C15.3896 12.0791 15.1989 12 15 12H12.75C12.6336 12 12.5187 12.027 12.4146 12.0791C12.3104 12.1312 12.22 12.2071 12.1501 12.3003L12.1465 12.3054L11.8799 12.6526C11.6734 12.9238 11.3814 13.1171 11.0508 13.1997C10.7201 13.2823 10.371 13.2496 10.0613 13.1074C10.0555 13.1048 10.0494 13.1022 10.0437 13.0994C7.81179 12.004 6.00546 10.2 4.90723 7.96948L4.90576 7.96655C4.75401 7.65521 4.71466 7.30091 4.79443 6.96387C4.87427 6.62675 5.06841 6.32745 5.34375 6.11719L5.34888 6.11353L5.69971 5.84985C5.79285 5.77999 5.86883 5.68959 5.9209 5.58545C5.97297 5.48131 6 5.36643 6 5.25V3ZM7.5 5.25C7.5 5.5993 7.41891 5.94392 7.2627 6.25635C7.10648 6.56877 6.87929 6.84071 6.59985 7.05029L6.25342 7.30884C7.20238 9.2352 8.76123 10.7938 10.6868 11.7437L10.9497 11.4001L11.0317 11.2976C11.2284 11.0649 11.4704 10.874 11.7437 10.7373C12.0561 10.5811 12.4007 10.5 12.75 10.5H15C15.5967 10.5 16.1689 10.7372 16.5908 11.1592C17.0128 11.5811 17.25 12.1533 17.25 12.75V15C17.25 15.5967 17.0128 16.1689 16.5908 16.5908C16.1689 17.0128 15.5967 17.25 15 17.25C11.2207 17.25 7.59647 15.7483 4.92407 13.0759C2.25168 10.4035 0.75 6.77934 0.75 3C0.75 2.40326 0.987223 1.83114 1.40918 1.40918C1.83114 0.987223 2.40326 0.75 3 0.75H5.25C5.84674 0.75 6.41886 0.987223 6.84082 1.40918C7.26278 1.83114 7.5 2.40326 7.5 3V5.25Z" fill="#9333EA"/>
</g>
<defs>
<clipPath id="clip0_phone">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>`;

const chartIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_chart)">
<path d="M15.75 2.25H2.25C1.83579 2.25 1.5 2.58579 1.5 3V15C1.5 15.4142 1.83579 15.75 2.25 15.75H15.75C16.1642 15.75 16.5 15.4142 16.5 15V3C16.5 2.58579 16.1642 2.25 15.75 2.25ZM4.5 12.75V9.75C4.5 9.33579 4.83579 9 5.25 9C5.66421 9 6 9.33579 6 9.75V12.75C6 13.1642 5.66421 13.5 5.25 13.5C4.83579 13.5 4.5 13.1642 4.5 12.75ZM8.25 12.75V5.25C8.25 4.83579 8.58579 4.5 9 4.5C9.41421 4.5 9.75 4.83579 9.75 5.25V12.75C9.75 13.1642 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.1642 8.25 12.75ZM12 12.75V7.5C12 7.08579 12.3358 6.75 12.75 6.75C13.1642 6.75 13.5 7.08579 13.5 7.5V12.75C13.5 13.1642 13.1642 13.5 12.75 13.5C12.3358 13.5 12 13.1642 12 12.75Z" fill="#3B82F6"/>
</g>
<defs>
<clipPath id="clip0_chart">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>`;

const usersIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_users)">
<path d="M6 7.5C7.65685 7.5 9 6.15685 9 4.5C9 2.84315 7.65685 1.5 6 1.5C4.34315 1.5 3 2.84315 3 4.5C3 6.15685 4.34315 7.5 6 7.5ZM12 7.5C13.2426 7.5 14.25 6.49264 14.25 5.25C14.25 4.00736 13.2426 3 12 3C10.7574 3 9.75 4.00736 9.75 5.25C9.75 6.49264 10.7574 7.5 12 7.5ZM13.5 9H10.5C10.0858 9 9.69818 9.10013 9.35175 9.27525C10.4895 10.1072 11.25 11.4217 11.25 12.9375V15.75H15.75C16.1642 15.75 16.5 15.4142 16.5 15V13.5C16.5 11.0147 14.4853 9 12 9H13.5ZM6 9C3.51472 9 1.5 11.0147 1.5 13.5V15C1.5 15.4142 1.83579 15.75 2.25 15.75H9.75C10.1642 15.75 10.5 15.4142 10.5 15V13.5C10.5 11.0147 8.48528 9 6 9Z" fill="#10B981"/>
</g>
<defs>
<clipPath id="clip0_users">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>`;

const checkCircleIcon = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_check)">
<path d="M9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5ZM12.5303 7.28033L8.78033 11.0303C8.48744 11.3232 8.01256 11.3232 7.71967 11.0303L5.46967 8.78033C5.17678 8.48744 5.17678 8.01256 5.46967 7.71967C5.76256 7.42678 6.23744 7.42678 6.53033 7.71967L8.25 9.43934L11.4697 6.21967C11.7626 5.92678 12.2374 5.92678 12.5303 6.21967C12.8232 6.51256 12.8232 6.98744 12.5303 7.28033Z" fill="#EF4444"/>
</g>
<defs>
<clipPath id="clip0_check">
<rect width="18" height="18" fill="white"/>
</clipPath>
</defs>
</svg>`;

const meta: Meta<PerformanceCardComponent> = {
  title: 'Components/PerformanceCard',
  component: PerformanceCardComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Card title',
    },
    value: {
      control: 'number',
      description: 'Main value to display',
    },
    percent: {
      control: 'number',
      description: 'Performance percentage',
    },
    icon: {
      control: 'text',
      description: 'SVG icon for top-right corner',
    },
    iconColor: {
      control: 'color',
      description: 'Color of the icon',
    },
  },
};

export default meta;
type Story = StoryObj<PerformanceCardComponent>;

export const VentasMensuales: Story = {
  args: {
    title: 'Ventas mensuales',
    value: 21,
    percent: 15.2,
    icon: phoneIcon,
    iconColor: '#9333EA',
  },
};

export const LlamadasAtendidas: Story = {
  args: {
    title: 'Llamadas atendidas',
    value: 134,
    percent: 8.5,
    icon: chartIcon,
    iconColor: '#3B82F6',
  },
};

export const NuevosClientes: Story = {
  args: {
    title: 'Nuevos clientes',
    value: 47,
    percent: 12.3,
    icon: usersIcon,
    iconColor: '#10B981',
  },
};

export const TicketsResueltos: Story = {
  args: {
    title: 'Tickets resueltos',
    value: 89,
    percent: 5.7,
    icon: checkCircleIcon,
    iconColor: '#EF4444',
  },
};

export const PerformanceNegativo: Story = {
  args: {
    title: 'Actividades completadas',
    value: 15,
    percent: -3.2,
    icon: phoneIcon,
    iconColor: '#9333EA',
  },
};

export const TodasLasCards: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; padding: 20px;">
        <app-performance-card 
          title="Ventas mensuales" 
          [value]="21" 
          [percent]="15.2" 
          icon='${phoneIcon}'
          iconColor="#9333EA">
        </app-performance-card>
        <app-performance-card 
          title="Llamadas atendidas" 
          [value]="134" 
          [percent]="8.5" 
          icon='${chartIcon}'
          iconColor="#3B82F6">
        </app-performance-card>
        <app-performance-card 
          title="Nuevos clientes" 
          [value]="47" 
          [percent]="12.3" 
          icon='${usersIcon}'
          iconColor="#10B981">
        </app-performance-card>
        <app-performance-card 
          title="Tickets resueltos" 
          [value]="89" 
          [percent]="5.7" 
          icon='${checkCircleIcon}'
          iconColor="#EF4444">
        </app-performance-card>
      </div>
    `,
  }),
};
