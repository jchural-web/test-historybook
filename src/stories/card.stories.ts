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
      options: ['default'],
      description: 'Card state',
    },
    contentVariant: {
      control: 'select',
      options: ['default', 'metric', 'infoDate', 'infoCurrency', 'placeholder'],
      description: 'Content variant type (NEW)',
    },
    header: {
      control: 'text',
      description: 'Header text (for default contentVariant)',
    },
    value: {
      control: 'text',
      description: 'Main value to display (for default contentVariant)',
    },
    helper: {
      control: 'text',
      description: 'Helper text (e.g., percentage change) (for default contentVariant)',
    },
    helperDescription: {
      control: 'text',
      description:
        'Helper description text (e.g., "respecto al mes anterior") (for default contentVariant)',
    },
    icon: {
      control: 'text',
      description: 'Icon name (currently only "phone" supported) (for default contentVariant)',
    },
    metricTitle: {
      control: 'text',
      description: 'Title for metric contentVariant',
    },
    metricValue: {
      control: 'text',
      description: 'Value for metric contentVariant',
    },
    dateLabel: {
      control: 'text',
      description: 'Label for infoDate contentVariant',
    },
    dateText: {
      control: 'text',
      description: 'Date text for infoDate contentVariant',
    },
    currencyLabel: {
      control: 'text',
      description: 'Label for infoCurrency contentVariant',
    },
    currencyText: {
      control: 'text',
      description: 'Currency text for infoCurrency contentVariant',
    },
  },
  args: {
    variant: 'default',
    state: 'default',
    header: 'Actividades Totales',
    value: '21',
    helper: '+15.2%',
    helperDescription: 'respecto al mes anterior',
    icon: 'phone',
  },
};

export default meta;
type Story = StoryObj<CardComponent>;

// ===========================
// Default - Interactive Card
// ===========================

export const Default: Story = {
  args: {
    variant: 'default',
    state: 'default',
    header: 'Actividades Totales',
    value: '21',
    helper: '+15.2%',
    helperDescription: 'respecto al mes anterior',
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
            <bsg-card 
              variant="default" 
              state="default"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              helperDescription="respecto al mes anterior"
              icon="phone">
            </bsg-card>
          </div>
          <div>
            <bsg-card 
              variant="default" 
              state="hover"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              helperDescription="respecto al mes anterior"
              icon="phone">
            </bsg-card>
          </div>
          
          <!-- Elevated Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Elevated</div>
          <div>
            <bsg-card 
              variant="elevated" 
              state="default"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              helperDescription="respecto al mes anterior"
              icon="phone">
            </bsg-card>
          </div>
          <div>
            <bsg-card 
              variant="elevated" 
              state="hover"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              helperDescription="respecto al mes anterior"
              icon="phone">
            </bsg-card>
          </div>
          
          <!-- Outlined Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Outlined</div>
          <div>
            <bsg-card 
              variant="outlined" 
              state="default"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              helperDescription="respecto al mes anterior"
              icon="phone">
            </bsg-card>
          </div>
          <div>
            <bsg-card 
              variant="outlined" 
              state="hover"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              helperDescription="respecto al mes anterior"
              icon="phone">
            </bsg-card>
          </div>
        </div>

        <!-- Design Specifications -->
        <section style="margin-top: 64px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          
          <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
            <p style="margin: 4px 0;"><strong>Width:</strong> 393px (responsive)</p>
            <p style="margin: 4px 0;"><strong>Padding:</strong> 24px 20px</p>
            <p style="margin: 4px 0;"><strong>Border Radius:</strong> 8px</p>
            <p style="margin: 4px 0;"><strong>Gap:</strong> 16px (between rows)</p>
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
              <li><strong>Value:</strong> Inter 32px, 800 weight, #2D2929</li>
              <li><strong>Helper:</strong> Inter 14px, 500 weight, #16A34A (green)</li>
              <li><strong>Description:</strong> Inter 13px, 400 weight, #707688</li>
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
            <bsg-card 
              variant="elevated"
              header="Actividades Totales"
              value="21"
              helper="+15.2%"
              helperDescription="respecto al mes anterior"
              icon="phone">
            </bsg-card>
            
            <bsg-card 
              variant="elevated"
              header="Usuarios Activos"
              value="1,247"
              helper="+8.4%"
              helperDescription="respecto al mes anterior"
              icon="phone">
            </bsg-card>
            
            <bsg-card 
              variant="elevated"
              header="Tasa de Conversión"
              value="3.2%"
              helper="-2.1%"
              helperDescription="respecto al mes anterior"
              icon="phone">
            </bsg-card>
          </div>
        </div>
        
        <!-- Outlined Cards -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Outlined Cards (Secondary Info)</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 393px)); gap: 24px;">
            <bsg-card 
              variant="outlined"
              header="Ingresos Mensuales"
              value="$45,230"
              helper="+12.5%"
              helperDescription="respecto al mes anterior"
              icon="phone">
            </bsg-card>
            
            <bsg-card 
              variant="outlined"
              header="Nuevos Registros"
              value="156"
              helper="+23.8%"
              helperDescription="respecto al mes anterior"
              icon="phone">
            </bsg-card>
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
          <bsg-card 
            [variant]="variant"
            [state]="state"
            [header]="header"
            [value]="value"
            [helper]="helper"
            [helperDescription]="helperDescription"
            [icon]="icon">
          </bsg-card>
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
    helperDescription: 'respecto al mes anterior',
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
        <bsg-card
          variant="elevated"
          header="Actividades Totales"
          value="21"
          helper="+15.2%"
          helperDescription="respecto al mes anterior"
          icon="phone">
        </bsg-card>

        <bsg-card
          variant="elevated"
          header="Ventas Completadas"
          value="4,892"
          helper="+28.4%"
          helperDescription="respecto al mes anterior"
          icon="phone">
        </bsg-card>

        <bsg-card
          variant="elevated"
          header="Tiempo Promedio"
          value="2.4h"
          helper="-5.2%"
          helperDescription="respecto al mes anterior"
          icon="phone">
        </bsg-card>

        <bsg-card
          variant="outlined"
          header="Tasa de Éxito"
          value="94.7%"
          helper="+1.3%"
          helperDescription="respecto al mes anterior"
          icon="phone">
        </bsg-card>

        <bsg-card
          variant="outlined"
          header="Satisfacción Cliente"
          value="4.8/5"
          helper="+0.2"
          helperDescription="respecto al mes anterior"
          icon="phone">
        </bsg-card>

        <bsg-card
          variant="default"
          header="Proyectos Activos"
          value="12"
          helper="+3"
          helperDescription="respecto al mes anterior"
          icon="phone">
        </bsg-card>
      </div>
    `,
  }),
};

// ===========================
// Showcase Stories
// ===========================

// All Content Variants Showcase
export const AllContentVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 48px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 20px; font-weight: 600;">Card Content Variants</h3>

        <!-- Default -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #202020;">Default (Original Card)</h4>
          <bsg-card
            contentVariant="default"
            variant="elevated"
            header="Actividades Totales"
            value="21"
            helper="+15.2%"
            helperDescription="respecto al mes anterior"
            icon="phone">
          </bsg-card>
        </div>

        <!-- Metric -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #202020;">Metric (Compromisos)</h4>
          <bsg-card
            contentVariant="metric"
            metricTitle="Compromisos Incumplidos"
            metricValue="0">
          </bsg-card>
        </div>

        <!-- InfoDate -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #202020;">InfoDate (Fecha)</h4>
          <bsg-card
            contentVariant="infoDate"
            dateLabel="Fecha"
            dateText="28/06/2024">
          </bsg-card>
        </div>

        <!-- InfoCurrency -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #202020;">InfoCurrency (Moneda)</h4>
          <bsg-card
            contentVariant="infoCurrency"
            currencyLabel="Tipo de moneda:"
            currencyText="PEN">
          </bsg-card>
        </div>

        <!-- Placeholder -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600; color: #202020;">Placeholder (Vacío)</h4>
          <bsg-card
            contentVariant="placeholder">
          </bsg-card>
        </div>
      </div>
    `,
  }),
};

// Content Variants with Different Variants (default, elevated, outlined)
export const ContentVariantsWithCardVariants: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: 150px auto auto auto; gap: 24px; padding: 24px; align-items: start;">
        <!-- Headers -->
        <div></div>
        <div style="font-size: 14px; font-weight: 600;">Default Variant</div>
        <div style="font-size: 14px; font-weight: 600;">Elevated Variant</div>
        <div style="font-size: 14px; font-weight: 600;">Outlined Variant</div>

        <!-- Metric Row -->
        <div style="font-size: 14px; font-weight: 600;">Metric</div>
        <bsg-card contentVariant="metric" variant="default" metricTitle="Compromisos Incumplidos" metricValue="0"></bsg-card>
        <bsg-card contentVariant="metric" variant="elevated" metricTitle="Compromisos Incumplidos" metricValue="0"></bsg-card>
        <bsg-card contentVariant="metric" variant="outlined" metricTitle="Compromisos Incumplidos" metricValue="0"></bsg-card>

        <!-- InfoDate Row -->
        <div style="font-size: 14px; font-weight: 600;">InfoDate</div>
        <bsg-card contentVariant="infoDate" variant="default" dateLabel="Fecha" dateText="28/06/2024"></bsg-card>
        <bsg-card contentVariant="infoDate" variant="elevated" dateLabel="Fecha" dateText="28/06/2024"></bsg-card>
        <bsg-card contentVariant="infoDate" variant="outlined" dateLabel="Fecha" dateText="28/06/2024"></bsg-card>

        <!-- InfoCurrency Row -->
        <div style="font-size: 14px; font-weight: 600;">InfoCurrency</div>
        <bsg-card contentVariant="infoCurrency" variant="default" currencyLabel="Tipo de moneda:" currencyText="PEN"></bsg-card>
        <bsg-card contentVariant="infoCurrency" variant="elevated" currencyLabel="Tipo de moneda:" currencyText="PEN"></bsg-card>
        <bsg-card contentVariant="infoCurrency" variant="outlined" currencyLabel="Tipo de moneda:" currencyText="PEN"></bsg-card>
      </div>
    `,
  }),
};
