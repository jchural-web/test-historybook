import type { Meta, StoryObj } from '@storybook/angular';
import { TextareaComponent } from './textarea.component';

const meta: Meta<TextareaComponent> = {
  title: 'Example/Textarea',
  component: TextareaComponent,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'disabled', 'error'],
      description: 'Current state of the textarea',
    },
    composition: {
      control: 'select',
      options: ['default', 'withLabel', 'withText', 'withButton'],
      description: 'Composition variant of the textarea',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Textarea value',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text rows',
    },
    labelText: {
      control: 'text',
      description: 'Label text for withLabel and withText variants',
    },
    helperText: {
      control: 'text',
      description: 'Helper text for withText variant',
    },
    buttonLabel: {
      control: 'text',
      description: 'Button label for withButton variant',
    },
  },
  args: {
    placeholder: 'Ingresa información',
    value: '',
    rows: 3,
    composition: 'default',
    labelText: 'Comentarios',
    helperText: 'Proporciona más contexto sobre tu pregunta',
    buttonLabel: 'Enviar',
  },
};

export default meta;
type Story = StoryObj<TextareaComponent>;

// ===========================
// Default - Interactive Textarea
// ===========================

export const Default: Story = {
  args: {
    state: 'default',
    composition: 'default',
    placeholder: 'Ingresa información',
    value: '',
    rows: 3,
  },
};

// ===========================
// Showcase Stories
// ===========================

export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">All States</h3>
        <div style="display: flex; gap: 24px; flex-wrap: wrap;">
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <span style="font-size: 14px; font-weight: 600; color: #202020;">Default</span>
            <storybook-textarea state="default"></storybook-textarea>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <span style="font-size: 14px; font-weight: 600; color: #202020;">Hover</span>
            <storybook-textarea state="hover"></storybook-textarea>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <span style="font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
            <storybook-textarea state="focus"></storybook-textarea>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <span style="font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
            <storybook-textarea state="disabled"></storybook-textarea>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <span style="font-size: 14px; font-weight: 600; color: #202020;">Error</span>
            <storybook-textarea state="error"></storybook-textarea>
          </div>
        </div>
      </div>
    `,
  }),
};

export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1200px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Textarea Component Library</h2>
        
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">States</h3>
          <div style="display: flex; gap: 32px; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Default</span>
              <storybook-textarea state="default"></storybook-textarea>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Hover</span>
              <storybook-textarea state="hover"></storybook-textarea>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <storybook-textarea state="focus"></storybook-textarea>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <storybook-textarea state="disabled"></storybox-textarea>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Error</span>
              <storybook-textarea state="error"></storybook-textarea>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">With Content</h3>
          <div style="display: flex; gap: 32px; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Default with text</span>
              <storybook-textarea 
                state="default" 
                value="Este es un ejemplo de texto en el textarea."
              ></storybook-textarea>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Error with text</span>
              <storybook-textarea 
                state="error" 
                value="Este texto contiene un error."
              ></storybook-textarea>
            </div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          <div style="font-size: 14px; color: #64748B; line-height: 1.6;">
            <p style="margin: 8px 0;"><strong>Dimensions:</strong> 203px width, 80px min-height</p>
            <p style="margin: 8px 0;"><strong>Padding:</strong> 8px 12px</p>
            <p style="margin: 8px 0;"><strong>Border:</strong> 1px solid, border-radius: 6px</p>
            <p style="margin: 8px 0;"><strong>Font:</strong> Inter, 16px, line-height: 24px</p>
            <p style="margin: 8px 0;"><strong>Resize:</strong> Disabled (resize: none)</p>
            <p style="margin: 8px 0;"><strong>Colors:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Default border: #CBD5E1 (neutral-300)</li>
              <li>Text/placeholder: #64748B (neutral-500)</li>
              <li>Error border & text: #DC2626 (Red-600)</li>
              <li>Focus outline: #7C3AED (Violet-600)</li>
              <li>Hover: opacity 90%</li>
              <li>Disabled: opacity 40%</li>
            </ul>
          </div>
        </section>
      </div>
    `,
  }),
};
