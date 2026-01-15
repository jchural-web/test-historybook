import type { Meta, StoryObj } from '@storybook/angular';
import { TimePickerComponent } from './timepicker.component';

const meta: Meta<TimePickerComponent> = {
  title: 'Example/TimePicker',
  component: TimePickerComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the time picker',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'disabled', 'error'],
      description: 'Current state of the time picker',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Selected time in HH:mm format',
    },
    label: {
      control: 'text',
      description: 'Optional label above the input',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message (shown when state is "error")',
    },
    minTime: {
      control: 'text',
      description: 'Minimum time in HH:mm format (disables earlier times)',
    },
    maxTime: {
      control: 'text',
      description: 'Maximum time in HH:mm format (disables later times)',
    },
    stepMinutes: {
      control: 'number',
      description: 'Step size for minutes (1, 5, 10, 15, etc.)',
    },
    open: {
      control: 'boolean',
      description: 'Dropdown open state',
    },
  },
  args: {
    size: 'md',
    state: 'default',
    placeholder: 'HH:mm',
    value: '',
    label: '',
    errorMessage: '',
    minTime: '',
    maxTime: '',
    stepMinutes: 1,
    open: false,
  },
};

export default meta;
type Story = StoryObj<TimePickerComponent>;

// =====================
// AXES
// =====================

/**
 * TimePicker sizes: small, medium, and large.
 * Demonstrates all available sizes in default state.
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; font-family: Roboto, sans-serif;">
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Small (sm)</span>
          <bsg-timepicker size="sm" state="default"></bsg-timepicker>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Medium (md)</span>
          <bsg-timepicker size="md" state="default"></bsg-timepicker>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Large (lg)</span>
          <bsg-timepicker size="lg" state="default"></bsg-timepicker>
        </div>
      </div>
    `,
  }),
};

/**
 * TimePicker states: default, hover, focus, disabled, and error.
 * Shows visual appearance in different interaction states.
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
              <bsg-timepicker size="md" state="default"></bsg-timepicker>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Hover</span>
              <bsg-timepicker size="md" state="hover"></bsg-timepicker>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <bsg-timepicker size="md" state="focus"></bsg-timepicker>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <bsg-timepicker size="md" state="disabled"></bsg-timepicker>
            </div>
            <div style="display: flex; gap: 16px; align-items: flex-start;">
              <span style="width: 100px; font-size: 14px; font-weight: 600; color: #202020;">Error</span>
              <bsg-timepicker size="md" state="error" errorMessage="Hora inválida"></bsg-timepicker>
            </div>
          </div>
        </div>

        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">With Label and Error</h4>
          <bsg-timepicker 
            size="md" 
            state="error" 
            label="Hora de cita"
            errorMessage="La hora es requerida"
          ></bsg-timepicker>
        </div>
      </div>
    `,
  }),
};

// =====================
// EXAMPLES
// =====================

/**
 * Real-world usage examples of TimePicker
 */
export const UsageExamples: Story = {
  tags: ['!dev'],
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">TimePicker Usage Examples</h3>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Basic Time Selection</h4>
          <bsg-timepicker 
            size="md" 
            state="default"
            label="Hora de inicio"
            placeholder="HH:mm">
          </bsg-timepicker>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">With Min/Max Time (09:00 - 18:00)</h4>
          <bsg-timepicker 
            size="md" 
            state="default"
            label="Hora de atención"
            minTime="09:00"
            maxTime="18:00">
          </bsg-timepicker>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">With 15-minute Steps</h4>
          <bsg-timepicker 
            size="md" 
            state="default"
            label="Horario de cita"
            [stepMinutes]="15">
          </bsg-timepicker>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">With 30-minute Steps</h4>
          <bsg-timepicker 
            size="md" 
            state="default"
            label="Ventana de tiempo"
            [stepMinutes]="30">
          </bsg-timepicker>
        </div>

        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">With Pre-selected Value</h4>
          <bsg-timepicker 
            size="md" 
            state="default"
            label="Hora guardada"
            value="14:30">
          </bsg-timepicker>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Error State Example</h4>
          <bsg-timepicker
            size="md"
            state="error"
            label="Hora de llegada *"
            errorMessage="Este campo es requerido">
          </bsg-timepicker>
        </div>

        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Disabled State Example</h4>
          <bsg-timepicker 
            size="md" 
            state="disabled"
            label="No disponible"
            value="10:30">
          </bsg-timepicker>
        </div>
      </div>
    `,
  }),
};

/**
 * Form integration example with TimePicker
 */
export const FormExample: Story = {
  tags: ['!dev'],
  render: () => ({
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; max-width: 500px;">
        <h3 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600;">Appointment Booking Form</h3>
        
        <form style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #202020;">
              Service Date *
            </label>
            <input type="date" style="padding: 8px 12px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; width: 100%; box-sizing: border-box;" />
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #202020;">
              Appointment Time *
            </label>
            <bsg-timepicker 
              size="md" 
              state="default"
              minTime="09:00"
              maxTime="18:00"
              [stepMinutes]="30">
            </bsg-timepicker>
          </div>

          <div>
            <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #202020;">
              Backup Time
            </label>
            <bsg-timepicker 
              size="md" 
              state="default"
              minTime="09:00"
              maxTime="18:00"
              [stepMinutes]="15">
            </bsg-timepicker>
          </div>

          <div>
            <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #202020;">
              Duration
            </label>
            <bsg-timepicker 
              size="md" 
              state="default"
              [stepMinutes]="15">
            </bsg-timepicker>
          </div>
          
          <button style="padding: 10px 16px; background: #7C3AED; color: white; border: none; border-radius: 6px; font-weight: 500; cursor: pointer; margin-top: 16px;">
            Book Appointment
          </button>
        </form>
      </div>
    `,
  }),
};

// =====================
// SHOWCASE
// =====================

/**
 * Complete showcase of TimePicker component library
 */
export const Showcase: Story = {
  tags: ['!dev'],
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1200px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">TimePicker Component Library</h2>
        
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Small (sm) - 32px height</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Default</span>
              <bsg-timepicker size="sm" state="default"></bsg-timepicker>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <bsg-timepicker size="sm" state="focus"></bsg-timepicker>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">With Value</span>
              <bsg-timepicker size="sm" state="default" value="14:30"></bsg-timepicker>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Error</span>
              <bsg-timepicker size="sm" state="error" errorMessage="Requerido"></bsg-timepicker>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <bsg-timepicker size="sm" state="disabled"></bsg-timepicker>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Medium (md) - 40px height</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Default</span>
              <bsg-timepicker size="md" state="default"></bsg-timepicker>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <bsg-timepicker size="md" state="focus"></bsg-timepicker>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">With Value</span>
              <bsg-timepicker size="md" state="default" value="09:45"></bsg-timepicker>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Error</span>
              <bsg-timepicker size="md" state="error" errorMessage="Hora inválida"></bsg-timepicker>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <bsg-timepicker size="md" state="disabled"></bsg-timepicker>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Large (lg) - 48px height</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Default</span>
              <bsg-timepicker size="lg" state="default"></bsg-timepicker>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <bsg-timepicker size="lg" state="focus"></bsg-timepicker>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">With Value</span>
              <bsg-timepicker size="lg" state="default" value="17:15"></bsg-timepicker>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Error</span>
              <bsg-timepicker size="lg" state="error" errorMessage="Campo requerido"></bsg-timepicker>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <bsg-timepicker size="lg" state="disabled"></bsg-timepicker>
            </div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          <div style="font-size: 14px; color: #64748B; line-height: 1.6;">
            <p style="margin: 8px 0;"><strong>Sizes:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>sm:</strong> 32px height, padding 4px 8px 4px 12px</li>
              <li><strong>md:</strong> 40px height, padding 4px 8px 4px 12px</li>
              <li><strong>lg:</strong> 48px height, padding 4px 8px 4px 12px</li>
            </ul>
            <p style="margin: 8px 0;"><strong>Border Radius:</strong> 6px</p>
            <p style="margin: 8px 0;"><strong>Typography:</strong> Inter, 16px, 400 weight, 24px line-height</p>
            <p style="margin: 8px 0;"><strong>Colors (Design Tokens):</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Default border: #CBD5E1 (neutral-300)</li>
              <li>Default text: #1E293B</li>
              <li>Focus border: #64748B (neutral-700)</li>
              <li>Focus ring: #7C3AED (Violet-600)</li>
              <li>Error border & text: #DC2626 (Red-600)</li>
              <li>Disabled: opacity 40%</li>
              <li>Hover: opacity 90%</li>
              <li>Selected time: #7C3AED background (Violet-600), white text</li>
            </ul>
            <p style="margin: 8px 0;"><strong>Clock Icon:</strong> 16×16px, colored by state</p>
            <p style="margin: 8px 0;"><strong>Dropdown Features:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Two scrollable columns: Horas (00-23) and Minutos (00-59)</li>
              <li>Separator: ":" between columns</li>
              <li>Step size customizable: 1, 5, 10, 15, 30 minutes</li>
              <li>Min/Max time validation disables out-of-range options</li>
              <li>Action buttons: "Ahora" (set current time), "Limpiar" (clear)</li>
              <li>Max height: 160px with scrollbar</li>
              <li>Close on selection or outside click</li>
            </ul>
            <p style="margin: 8px 0;"><strong>Accessibility:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>aria-invalid for error state</li>
              <li>aria-describedby for error message</li>
              <li>aria-label on clock icon button</li>
              <li>aria-pressed on button toggle state</li>
              <li>role="dialog" on dropdown</li>
              <li>Keyboard support: Escape to close</li>
            </ul>
          </div>
        </section>
      </div>
    `,
  }),
};
