import type { Meta, StoryObj } from '@storybook/angular';
import { LabelComponent } from './label.component';

const meta: Meta<LabelComponent> = {
  title: 'Example/Label',
  component: LabelComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'success-light', 'neutral'],
      description: 'Visual variant of the label',
    },
    icon: {
      control: 'select',
      options: ['none', 'leading'],
      description: 'Icon configuration',
    },
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

// Success variant
export const Success: Story = {
  args: {
    variant: 'success',
    icon: 'none',
    text: 'Etiqueta 2',
  },
};

export const SuccessWithIcon: Story = {
  args: {
    variant: 'success',
    icon: 'leading',
    text: 'Etiqueta 2',
  },
};

// Success-light variant
export const SuccessLight: Story = {
  args: {
    variant: 'success-light',
    icon: 'none',
    text: 'Etiqueta 1',
  },
};

export const SuccessLightWithIcon: Story = {
  args: {
    variant: 'success-light',
    icon: 'leading',
    text: 'Etiqueta 1',
  },
};

// Neutral variant
export const Neutral: Story = {
  args: {
    variant: 'neutral',
    icon: 'none',
    text: 'Etiqueta 3',
  },
};

export const NeutralWithIcon: Story = {
  args: {
    variant: 'neutral',
    icon: 'leading',
    text: 'Etiqueta 3',
  },
};

// Showcase - All variants
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Label Variants Comparison</h3>
        
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="min-width: 120px; font-size: 14px; color: #666;">Success:</span>
            <storybook-label variant="success" icon="none" text="Etiqueta 2"></storybook-label>
            <storybook-label variant="success" icon="leading" text="Etiqueta 2"></storybook-label>
          </div>
          
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="min-width: 120px; font-size: 14px; color: #666;">Success Light:</span>
            <storybook-label variant="success-light" icon="none" text="Etiqueta 1"></storybook-label>
            <storybook-label variant="success-light" icon="leading" text="Etiqueta 1"></storybook-label>
          </div>
          
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="min-width: 120px; font-size: 14px; color: #666;">Neutral:</span>
            <storybook-label variant="neutral" icon="none" text="Etiqueta 3"></storybook-label>
            <storybook-label variant="neutral" icon="leading" text="Etiqueta 3"></storybook-label>
          </div>
        </div>
      </div>
    `,
  }),
};

// Design System Showcase
export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 900px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Label Component Library</h2>
        
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Success (Solid Green)</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Without Icon</span>
              <storybook-label variant="success" icon="none" text="Etiqueta 2"></storybook-label>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">With Leading Icon</span>
              <storybook-label variant="success" icon="leading" text="Etiqueta 2"></storybook-label>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Success Light (Light Green with Border)</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Without Icon</span>
              <storybook-label variant="success-light" icon="none" text="Etiqueta 1"></storybook-label>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">With Leading Icon</span>
              <storybook-label variant="success-light" icon="leading" text="Etiqueta 1"></storybook-label>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Neutral (White with Border)</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Without Icon</span>
              <storybook-label variant="neutral" icon="none" text="Etiqueta 3"></storybook-label>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">With Leading Icon</span>
              <storybook-label variant="neutral" icon="leading" text="Etiqueta 3"></storybook-label>
            </div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          <div style="font-size: 14px; color: #64748B; line-height: 1.6;">
            <p style="margin: 8px 0;"><strong>Size:</strong> Height 28px, padding 8px 20px</p>
            <p style="margin: 8px 0;"><strong>Shape:</strong> Pill (border-radius: 15.5px)</p>
            <p style="margin: 8px 0;"><strong>Typography:</strong> Inter, 14px, 400 weight, 21px line-height</p>
            <p style="margin: 8px 0;"><strong>Icon:</strong> 16x16px search icon (optional leading)</p>
            <p style="margin: 8px 0;"><strong>Gap:</strong> 10px between icon and text</p>
            <p style="margin: 8px 0;"><strong>Colors:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Success:</strong> Background #22C55E (Green-500), Text #FFF</li>
              <li><strong>Success Light:</strong> Background #BBF7D0 (Green-200), Border #16A34A (Green-600), Text #166534 (Green-800)</li>
              <li><strong>Neutral:</strong> Background #FFF, Border rgba(241, 245, 249, 1), Text #166534 (Green-800), Shadow 0 1px 2px 0 rgba(0, 0, 0, 0.08)</li>
            </ul>
          </div>
        </section>
      </div>
    `,
  }),
};

// Usage examples
export const UsageExamples: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Label Usage Examples</h3>
        
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #202020;">Status Tags</h4>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <storybook-label variant="success" icon="none" text="Activo"></storybook-label>
              <storybook-label variant="success-light" icon="none" text="Pendiente"></storybook-label>
              <storybook-label variant="neutral" icon="none" text="Inactivo"></storybook-label>
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #202020;">Filter Tags with Icons</h4>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <storybook-label variant="success" icon="leading" text="Buscar"></storybook-label>
              <storybook-label variant="success-light" icon="leading" text="Categoría A"></storybook-label>
              <storybook-label variant="neutral" icon="leading" text="Filtro"></storybook-label>
            </div>
          </div>
          
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #202020;">Product Tags</h4>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <storybook-label variant="success" icon="none" text="Nuevo"></storybook-label>
              <storybook-label variant="success" icon="none" text="Popular"></storybook-label>
              <storybook-label variant="success-light" icon="none" text="Oferta"></storybook-label>
              <storybook-label variant="neutral" icon="none" text="Stock limitado"></storybook-label>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};
