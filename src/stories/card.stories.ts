import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Example/Card',
  component: CardComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outlined'],
      description: 'Card variant type',
    },
    state: {
      control: 'select',
      options: ['default', 'hover'],
      description: 'Card state (visual only)',
    },
    header: {
      control: 'text',
      description: 'Header text',
    },
    value: {
      control: 'text',
      description: 'Main value to display',
    },
    helper: {
      control: 'text',
      description: 'Helper text (e.g., percentage change)',
    },
    icon: {
      control: 'text',
      description: 'Icon name (currently only "phone" supported)',
    },
  },
  args: {
    variant: 'default',
    state: 'default',
    header: 'Actividades Totales',
    value: '21',
    helper: '+15.2%',
    icon: 'phone',
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

// ===========================
// Default Variant
// ===========================

export const Default: Story = {
  args: {
    variant: 'default',
    state: 'default',
    header: 'Actividades Totales',
    value: '21',
    helper: '+15.2%',
    icon: 'phone',
  },
};

export const DefaultHover: Story = {
  args: {
    variant: 'default',
    state: 'hover',
    header: 'Actividades Totales',
    value: '21',
    helper: '+15.2%',
    icon: 'phone',
  },
};

// ===========================
// Elevated Variant
// ===========================

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    state: 'default',
    header: 'Actividades Totales',
    value: '21',
    helper: '+15.2%',
    icon: 'phone',
  },
};

export const ElevatedHover: Story = {
  args: {
    variant: 'elevated',
    state: 'hover',
    header: 'Actividades Totales',
    value: '21',
    helper: '+15.2%',
    icon: 'phone',
  },
};

// ===========================
// Outlined Variant
// ===========================

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    state: 'default',
    header: 'Actividades Totales',
    value: '21',
    helper: '+15.2%',
    icon: 'phone',
  },
};

export const OutlinedHover: Story = {
  args: {
    variant: 'outlined',
    state: 'hover',
    header: 'Actividades Totales',
    value: '21',
    helper: '+15.2%',
    icon: 'phone',
  },
};

// ===========================
// Design System Showcase
// ===========================

export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1400px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Card Component Library</h2>
        
        <!-- Grid Layout matching Figma -->
        <div style="display: grid; grid-template-columns: 100px 450px 450px; gap: 24px; align-items: start; margin-bottom: 48px;">
          
          <!-- Headers -->
          <div></div>
          <div style="font-size: 16px; font-weight: 600; color: #202020; margin-bottom: 8px;">Default</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020; margin-bottom: 8px;">Hover</div>
          
          <!-- Default Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Default</div>
          <div>
            <storybook-card 
              variant="default" 
              state="default"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              icon="phone">
            </storybook-card>
          </div>
          <div>
            <storybook-card 
              variant="default" 
              state="hover"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              icon="phone">
            </storybook-card>
          </div>
          
          <!-- Elevated Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Elevated</div>
          <div>
            <storybook-card 
              variant="elevated" 
              state="default"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              icon="phone">
            </storybook-card>
          </div>
          <div>
            <storybook-card 
              variant="elevated" 
              state="hover"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              icon="phone">
            </storybook-card>
          </div>
          
          <!-- Outlined Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Outlined</div>
          <div>
            <storybook-card 
              variant="outlined" 
              state="default"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              icon="phone">
            </storybook-card>
          </div>
          <div>
            <storybook-card 
              variant="outlined" 
              state="hover"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              icon="phone">
            </storybook-card>
          </div>
        </div>

        <!-- Design Specifications -->
        <section style="margin-top: 64px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          
          <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
            <p style="margin: 4px 0;"><strong>Width:</strong> 393px (responsive)</p>
            <p style="margin: 4px 0;"><strong>Padding:</strong> 25px 19px</p>
            <p style="margin: 4px 0;"><strong>Border Radius:</strong> 8px</p>
            <p style="margin: 4px 0;"><strong>Grid Layout:</strong> 3 rows × 3 columns</p>
            <p style="margin: 4px 0;"><strong>Row Gap:</strong> 24px</p>
            <p style="margin: 4px 0;"><strong>Column Gap:</strong> 58px</p>
            <p style="margin: 16px 0 8px 0;"><strong>Variant Styles:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Default:</strong> Border #E4E4E7, White background</li>
              <li><strong>Elevated:</strong> Border #E4E4E7, Box shadow 0 1px 2px rgba(0,0,0,0.08)</li>
              <li><strong>Outlined:</strong> Border #E4E4E7, White background</li>
            </ul>
            <p style="margin: 16px 0 8px 0;"><strong>State Styles:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Default:</strong> Opacity 1</li>
              <li><strong>Hover:</strong> Opacity 0.9</li>
            </ul>
            <p style="margin: 16px 0 8px 0;"><strong>Typography:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Header:</strong> Inter 14px, 400 weight, #434C57</li>
              <li><strong>Value:</strong> Inter 29px, 800 weight, #2D2929</li>
              <li><strong>Helper:</strong> Inter 14px, 400 weight, #16A34A (green)</li>
              <li><strong>Description:</strong> Inter 12px, 400 weight, #707688</li>
            </ul>
          </div>
        </section>
      </div>
    `,
  }),
};

// ===========================
// Usage Examples
// ===========================

export const UsageExamples: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 48px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Card Usage Examples</h3>
        
        <!-- Dashboard Stats -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Dashboard Statistics</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 393px)); gap: 24px;">
            <storybook-card 
              variant="elevated"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              icon="phone">
            </storybook-card>
            
            <storybook-card 
              variant="elevated"
              header="Usuarios Activos"
              value="1,247"
              helper="+8.4%"
              icon="phone">
            </storybook-card>
            
            <storybook-card 
              variant="elevated"
              header="Tasa de Conversión"
              value="3.2%"
              helper="-2.1%"
              icon="phone">
            </storybook-card>
          </div>
        </div>
        
        <!-- Outlined Cards -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Outlined Cards (Secondary Info)</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 393px)); gap: 24px;">
            <storybook-card 
              variant="outlined"
              header="Ingresos Mensuales"
              value="$45,230"
              helper="+12.5%"
              icon="phone">
            </storybook-card>
            
            <storybook-card 
              variant="outlined"
              header="Nuevos Registros"
              value="156"
              helper="+23.8%"
              icon="phone">
            </storybook-card>
          </div>
        </div>
      </div>
    `,
  }),
};

// ===========================
// Interactive Playground
// ===========================

export const InteractivePlayground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive Card Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use the controls panel to adjust variant, state, header, value, helper, and icon
        </p>
        
        <div style="display: flex; align-items: center; justify-content: center; min-height: 250px; padding: 40px; background: #F8FAFC; border-radius: 8px;">
          <storybook-card 
            [variant]="variant"
            [state]="state"
            [header]="header"
            [value]="value"
            [helper]="helper"
            [icon]="icon">
          </storybook-card>
        </div>
      </div>
    `,
  }),
  args: {
    variant: 'default',
    state: 'default',
    header: 'Actividades Totales',
    value: '21',
    helper: '+15.2%',
    icon: 'phone',
  },
};

// ===========================
// Different Data Examples
// ===========================

export const DifferentDataExamples: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 393px)); gap: 24px; padding: 24px;">
        <storybook-card 
          variant="elevated"
          header="Actividades Totales"
          value="21"
          helper="+15.2%"
          icon="phone">
        </storybook-card>
        
        <storybook-card 
          variant="elevated"
          header="Ventas Completadas"
          value="4,892"
          helper="+28.4%"
          icon="phone">
        </storybook-card>
        
        <storybook-card 
          variant="elevated"
          header="Tiempo Promedio"
          value="2.4h"
          helper="-5.2%"
          icon="phone">
        </storybook-card>
        
        <storybook-card 
          variant="outlined"
          header="Tasa de Éxito"
          value="94.7%"
          helper="+1.3%"
          icon="phone">
        </storybook-card>
        
        <storybook-card 
          variant="outlined"
          header="Satisfacción Cliente"
          value="4.8/5"
          helper="+0.2"
          icon="phone">
        </storybook-card>
        
        <storybook-card 
          variant="default"
          header="Proyectos Activos"
          value="12"
          helper="+3"
          icon="phone">
        </storybook-card>
      </div>
    `,
  }),
};
