import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Example/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'disabled', 'error'],
      description: 'Current state of the input',
    },
    icon: {
      control: 'select',
      options: ['none', 'leading'],
      description: 'Icon position (none or leading)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
  },
  args: {
    placeholder: 'Ingresa información',
    value: '',
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

// ============================================================
// API CATEGORY STORIES (One per axis)
// ============================================================

/**
 * Input sizes: small, medium, and large.
 * Demonstrates all available sizes in default state.
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; font-family: Roboto, sans-serif;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Small (sm)</span>
          <bsg-input size="sm" state="default" icon="none" placeholder="Small input"></bsg-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Medium (md)</span>
          <bsg-input size="md" state="default" icon="none" placeholder="Medium input"></bsg-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Large (lg)</span>
          <bsg-input size="lg" state="default" icon="none" placeholder="Large input"></bsg-input>
        </div>
      </div>
    `,
  }),
};

/**
 * All input states: default, hover, focus, disabled, and error.
 * Shows visual appearance of the input in different interaction states.
 * Also demonstrates label support and error message display.
 */
export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px; font-family: Roboto, sans-serif;">
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Basic States</h4>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Default</span>
              <bsg-input size="md" state="default" icon="none"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Hover</span>
              <bsg-input size="md" state="hover" icon="none"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <bsg-input size="md" state="focus" icon="none"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <bsg-input size="md" state="disabled" icon="none"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Error</span>
              <bsg-input size="md" state="error" icon="none"></bsg-input>
            </div>
          </div>
        </div>

        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">With Label</h4>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; gap: 32px;">
              <bsg-input size="md" state="default" icon="none" label="Email" placeholder="tu@email.com"></bsg-input>
            </div>
            <div style="display: flex; gap: 32px;">
              <bsg-input size="md" state="focus" icon="none" label="Nombre completo" placeholder="Juan Pérez"></bsg-input>
            </div>
          </div>
        </div>

        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">With Error Message</h4>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; gap: 32px;">
              <bsg-input size="md" state="error" icon="none" label="Email" value="usuario@" errorMessage="Email inválido. Incluye @ y dominio."></bsg-input>
            </div>
            <div style="display: flex; gap: 32px;">
              <bsg-input size="md" state="error" icon="none" label="Contraseña" type="password" value="1234" errorMessage="Mínimo 8 caracteres requeridos"></bsg-input>
            </div>
            <div style="display: flex; gap: 32px;">
              <bsg-input size="md" state="error" icon="none" label="Teléfono" value="123" errorMessage="Teléfono incompleto"></bsg-input>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

// ============================================================
// EXAMPLES SECTION
// ============================================================

/**
 * Input with icons (leading and password toggle).
 * Demonstrates leading icon and password variant with toggle functionality.
 */
export const WithIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; font-family: Roboto, sans-serif;">
        <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #202020;">With Leading Icon - All Sizes</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Small</span>
            <bsg-input size="sm" state="default" icon="leading"></bsg-input>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Medium</span>
            <bsg-input size="md" state="default" icon="leading"></bsg-input>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Large</span>
            <bsg-input size="lg" state="default" icon="leading"></bsg-input>
          </div>
        </div>

        <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #202020;">With Leading Icon - All States</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Default</span>
            <bsg-input size="md" state="default" icon="leading"></bsg-input>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Hover</span>
            <bsg-input size="md" state="hover" icon="leading"></bsg-input>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Focus</span>
            <bsg-input size="md" state="focus" icon="leading"></bsg-input>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Disabled</span>
            <bsg-input size="md" state="disabled" icon="leading"></bsg-input>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Error</span>
            <bsg-input size="md" state="error" icon="leading"></bsg-input>
          </div>
        </div>

        <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #202020; margin-top: 16px;">Password Input - All Sizes</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Small</span>
            <bsg-input size="sm" state="default" type="password" placeholder="Contraseña" value="SecurePass123"></bsg-input>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Medium</span>
            <bsg-input size="md" state="default" type="password" placeholder="Contraseña" value="SecurePass123"></bsg-input>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Large</span>
            <bsg-input size="lg" state="default" type="password" placeholder="Contraseña" value="SecurePass123"></bsg-input>
          </div>
        </div>

        <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #202020; margin-top: 16px;">Password Input - All States</h4>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Default</span>
            <bsg-input size="md" state="default" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Hover</span>
            <bsg-input size="md" state="hover" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Focus</span>
            <bsg-input size="md" state="focus" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Disabled</span>
            <bsg-input size="md" state="disabled" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 100px; font-size: 14px; color: #666;">Error</span>
            <bsg-input size="md" state="error" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
          </div>
        </div>
      </div>
    `,
  }),
};

// ============================================================
// PLAYGROUND (Interactive)
// ============================================================

/**
 * Interactive playground for testing all input configurations.
 * Use the controls to experiment with different sizes, states, icon modes, and password variant.
 */
export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive Input Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use the controls panel to adjust size, state, type, icon, and placeholder
        </p>

        <div style="display: flex; align-items: center; justify-content: center; min-height: 120px; padding: 40px; background: #F8FAFC; border-radius: 8px;">
          <bsg-input
            [size]="size"
            [state]="state"
            [type]="type"
            [icon]="icon"
            [placeholder]="placeholder"
            [value]="value">
          </bsg-input>
        </div>

        <div style="margin-top: 32px; padding: 16px; background: #EFF6FF; border-radius: 8px; font-size: 13px; color: #1E40AF; line-height: 1.6;">
          <strong>Tips:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>Set <code>type="password"</code> to enable password mode with show/hide toggle</li>
            <li>Set <code>icon="leading"</code> to display a search icon on the left</li>
            <li>Try different states to see visual feedback (hover, focus, error, disabled)</li>
            <li>Adjust size to see how the input scales (sm, md, lg)</li>
            <li>When <code>state="disabled"</code>, the password toggle is also disabled</li>
          </ul>
        </div>
      </div>
    `,
  }),
  args: {
    size: 'md',
    state: 'default',
    type: 'text',
    icon: 'none',
    placeholder: 'Ingresa información',
    value: '',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password'],
      description: 'Input type (text or password with toggle)',
    },
  },
};

// ============================================================
// SHOWCASE (Comprehensive reference)
// ============================================================

/**
 * Complete design system showcase featuring all input sizes, states,
 * content modes with and without icons, and password variant.
 */
export const Showcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1200px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Input Component Library</h2>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Text Input</h3>

          <div style="margin-bottom: 32px;">
            <h4 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; color: #202020;">Sizes</h4>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666; font-weight: 600;">sm:</span>
              <bsg-input size="sm" state="default" icon="none" type="text"></bsg-input>
              <bsg-input size="sm" state="hover" icon="none" type="text"></bsg-input>
              <bsg-input size="sm" state="focus" icon="none" type="text"></bsg-input>
              <bsg-input size="sm" state="disabled" icon="none" type="text"></bsg-input>
              <bsg-input size="sm" state="error" icon="none" type="text"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666; font-weight: 600;">md:</span>
              <bsg-input size="md" state="default" icon="none" type="text"></bsg-input>
              <bsg-input size="md" state="hover" icon="none" type="text"></bsg-input>
              <bsg-input size="md" state="focus" icon="none" type="text"></bsg-input>
              <bsg-input size="md" state="disabled" icon="none" type="text"></bsg-input>
              <bsg-input size="md" state="error" icon="none" type="text"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 80px; font-size: 14px; color: #666; font-weight: 600;">lg:</span>
              <bsg-input size="lg" state="default" icon="none" type="text"></bsg-input>
              <bsg-input size="lg" state="hover" icon="none" type="text"></bsg-input>
              <bsg-input size="lg" state="focus" icon="none" type="text"></bsg-input>
              <bsg-input size="lg" state="disabled" icon="none" type="text"></bsg-input>
              <bsg-input size="lg" state="error" icon="none" type="text"></bsg-input>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Text Input With Leading Icon</h3>

          <div style="margin-bottom: 32px;">
            <h4 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; color: #202020;">Sizes</h4>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666; font-weight: 600;">sm:</span>
              <bsg-input size="sm" state="default" icon="leading" type="text"></bsg-input>
              <bsg-input size="sm" state="hover" icon="leading" type="text"></bsg-input>
              <bsg-input size="sm" state="focus" icon="leading" type="text"></bsg-input>
              <bsg-input size="sm" state="disabled" icon="leading" type="text"></bsg-input>
              <bsg-input size="sm" state="error" icon="leading" type="text"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666; font-weight: 600;">md:</span>
              <bsg-input size="md" state="default" icon="leading" type="text"></bsg-input>
              <bsg-input size="md" state="hover" icon="leading" type="text"></bsg-input>
              <bsg-input size="md" state="focus" icon="leading" type="text"></bsg-input>
              <bsg-input size="md" state="disabled" icon="leading" type="text"></bsg-input>
              <bsg-input size="md" state="error" icon="leading" type="text"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 80px; font-size: 14px; color: #666; font-weight: 600;">lg:</span>
              <bsg-input size="lg" state="default" icon="leading" type="text"></bsg-input>
              <bsg-input size="lg" state="hover" icon="leading" type="text"></bsg-input>
              <bsg-input size="lg" state="focus" icon="leading" type="text"></bsg-input>
              <bsg-input size="lg" state="disabled" icon="leading" type="text"></bsg-input>
              <bsg-input size="lg" state="error" icon="leading" type="text"></bsg-input>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Password Input (With Show/Hide Toggle)</h3>

          <div style="margin-bottom: 32px;">
            <h4 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; color: #202020;">Sizes</h4>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666; font-weight: 600;">sm:</span>
              <bsg-input size="sm" state="default" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
              <bsg-input size="sm" state="hover" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
              <bsg-input size="sm" state="focus" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
              <bsg-input size="sm" state="disabled" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
              <bsg-input size="sm" state="error" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666; font-weight: 600;">md:</span>
              <bsg-input size="md" state="default" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
              <bsg-input size="md" state="hover" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
              <bsg-input size="md" state="focus" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
              <bsg-input size="md" state="disabled" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
              <bsg-input size="md" state="error" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 80px; font-size: 14px; color: #666; font-weight: 600;">lg:</span>
              <bsg-input size="lg" state="default" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
              <bsg-input size="lg" state="hover" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
              <bsg-input size="lg" state="focus" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
              <bsg-input size="lg" state="disabled" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
              <bsg-input size="lg" state="error" type="password" placeholder="Contraseña" value="Pass1234"></bsg-input>
            </div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">State Reference</h3>
          <div style="display: flex; gap: 24px; font-size: 14px; color: #64748B;">
            <span>Default</span>
            <span>Hover</span>
            <span>Focus</span>
            <span>Disabled</span>
            <span>Error</span>
          </div>
        </section>
      </div>
    `,
  }),
};
