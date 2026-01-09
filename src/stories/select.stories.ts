import type { Meta, StoryObj } from '@storybook/angular';
import { SelectComponent } from './select.component';

const meta: Meta<SelectComponent> = {
  title: 'Example/Select',
  component: SelectComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the select',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'disabled', 'error'],
      description: 'Current state of the select',
    },
    options: {
      control: 'object',
      description: 'Array of select options',
    },
    selectedValue: {
      control: 'text',
      description: 'Currently selected value',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no option is selected',
    },
    open: {
      control: 'boolean',
      description: 'Dropdown open state',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message (shown when state is "error")',
    },
  },
  args: {
    size: 'sm',
    state: 'default',
    options: [
      { value: '1', label: 'Opcion 1' },
      { value: '2', label: 'Opcion 2' },
      { value: '3', label: 'Opcion 3' },
      { value: '4', label: 'Opcion 4' },
    ],
    selectedValue: '',
    placeholder: 'Selecciona',
    open: false,
    errorMessage: '',
  },
};

export default meta;
type Story = StoryObj<SelectComponent>;

// ===========================
// Default - Interactive Select
// ===========================

export const Default: Story = {
  args: {
    size: 'md',
    state: 'default',
    open: false,
  },
};

// ===========================
// Showcase Stories
// ===========================

// Design System Showcase
export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1200px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Select Component Library</h2>
        
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Small (sm) - 32px height</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Default</span>
              <bsg-select size="sm" state="default"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Hover</span>
              <bsg-select size="sm" state="hover"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <bsg-select size="sm" state="focus"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <bsg-select size="sm" state="disabled"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Error</span>
              <bsg-select size="sm" state="error" errorMessage="Este campo es requerido"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Dropdown</span>
              <bsg-select size="sm" state="default" [open]="true" selectedValue="3"></bsg-select>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Medium (md) - 40px height</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Default</span>
              <bsg-select size="md" state="default"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Hover</span>
              <bsg-select size="md" state="hover"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <bsg-select size="md" state="focus"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <bsg-select size="md" state="disabled"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Error</span>
              <bsg-select size="md" state="error" errorMessage="Este campo es requerido"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Dropdown</span>
              <bsg-select size="md" state="default" [open]="true" selectedValue="3"></bsg-select>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Large (lg) - 48px height</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Default</span>
              <bsg-select size="lg" state="default"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Hover</span>
              <bsg-select size="lg" state="hover"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <bsg-select size="lg" state="focus"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <bsg-select size="lg" state="disabled"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Error</span>
              <bsg-select size="lg" state="error"></bsg-select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Dropdown</span>
              <bsg-select size="lg" state="default" [open]="true" selectedValue="3"></bsg-select>
            </div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          <div style="font-size: 14px; color: #64748B; line-height: 1.6;">
            <p style="margin: 8px 0;"><strong>Sizes:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>sm:</strong> 32px height, padding 4px 12px, width 133px</li>
              <li><strong>md:</strong> 40px height, padding 4px 12px, width 132px</li>
              <li><strong>lg:</strong> 48px height, padding 4px 12px, width 133px</li>
            </ul>
            <p style="margin: 8px 0;"><strong>Border Radius:</strong> 6px</p>
            <p style="margin: 8px 0;"><strong>Gap:</strong> 12px between text and icon</p>
            <p style="margin: 8px 0;"><strong>Typography:</strong> Inter, 16px, 400 weight, 24px line-height</p>
            <p style="margin: 8px 0;"><strong>Colors:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Default border: #CBD5E1 (neutral-300)</li>
              <li>Default text: #64748B (neutral-500)</li>
              <li>Focus border: #7C3AED (Violet-600)</li>
              <li>Error border & text: #DC2626 (Red-600)</li>
              <li>Disabled: opacity 40%</li>
              <li>Hover: opacity 90%</li>
              <li>Selected option background: #CBD5E1 (neutral-300)</li>
            </ul>
            <p style="margin: 8px 0;"><strong>Chevron Icon:</strong> 14×8px</p>
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
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Select Usage Examples</h3>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Country Selection</h4>
          <bsg-select 
            size="md" 
            state="default"
            placeholder="Select country"
            [options]="[
              { value: 'us', label: 'United States' },
              { value: 'uk', label: 'United Kingdom' },
              { value: 'ca', label: 'Canada' },
              { value: 'au', label: 'Australia' }
            ]">
          </bsg-select>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Size Selection</h4>
          <bsg-select 
            size="sm" 
            state="default"
            placeholder="Choose size"
            [options]="[
              { value: 's', label: 'Small' },
              { value: 'm', label: 'Medium' },
              { value: 'l', label: 'Large' },
              { value: 'xl', label: 'Extra Large' }
            ]">
          </bsg-select>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Error State Example</h4>
          <bsg-select 
            size="md" 
            state="error"
            placeholder="Required field"
            [options]="[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' },
              { value: '3', label: 'Option 3' }
            ]">
          </bsg-select>
          <p style="margin: 4px 0 0 0; font-size: 12px; color: #DC2626;">This field is required</p>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Disabled State Example</h4>
          <bsg-select 
            size="md" 
            state="disabled"
            placeholder="Not available"
            [options]="[
              { value: '1', label: 'Option 1' },
              { value: '2', label: 'Option 2' }
            ]">
          </bsg-select>
        </div>
      </div>
    `,
  }),
};

// Form integration example
export const FormExample: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; max-width: 500px;">
        <h3 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600;">User Registration Form</h3>
        
        <form style="display: flex; flex-direction: column; gap: 20px;">
          <div>
            <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #202020;">
              Country *
            </label>
            <bsg-select 
              size="md" 
              state="default"
              placeholder="Select your country"
              [options]="[
                { value: 'us', label: 'United States' },
                { value: 'uk', label: 'United Kingdom' },
                { value: 'ca', label: 'Canada' },
                { value: 'mx', label: 'Mexico' }
              ]">
            </bsg-select>
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #202020;">
              Language
            </label>
            <bsg-select 
              size="md" 
              state="default"
              placeholder="Select language"
              selectedValue="en"
              [options]="[
                { value: 'en', label: 'English' },
                { value: 'es', label: 'Spanish' },
                { value: 'fr', label: 'French' },
                { value: 'de', label: 'German' }
              ]">
            </bsg-select>
          </div>
          
          <div>
            <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #202020;">
              Account Type
            </label>
            <bsg-select 
              size="lg" 
              state="default"
              placeholder="Choose account type"
              [options]="[
                { value: 'personal', label: 'Personal' },
                { value: 'business', label: 'Business' },
                { value: 'enterprise', label: 'Enterprise' }
              ]">
            </bsg-select>
          </div>
        </form>
      </div>
    `,
  }),
};
