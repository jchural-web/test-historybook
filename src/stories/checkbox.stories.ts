import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Example/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the checkbox',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'checked', 'disabled', 'indeterminate', 'focus'],
      description: 'Current state of the checkbox',
    },
    checked: {
      control: 'boolean',
      description: 'Checked state',
    },
  },
  args: {
    checked: false,
  },
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

// ===========================
// Default - Interactive Checkbox
// ===========================

export const Default: Story = {
  args: {
    size: 'md',
    state: 'default',
  },
};

// ===========================
// Showcase Stories
// ===========================

export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Sizes Comparison</h3>
        <div style="display: flex; gap: 32px; align-items: center;">
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Small (16px)</span>
            <bsg-checkbox size="sm" state="default"></bsg-checkbox>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Medium (20px)</span>
            <bsg-checkbox size="md" state="default"></bsg-checkbox>
          </div>
        </div>
      </div>
    `,
  }),
};

export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">All States - Medium Size</h3>
        <div style="display: flex; gap: 16px; align-items: center;">
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Default</span>
            <bsg-checkbox size="md" state="default"></bsg-checkbox>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Hover</span>
            <bsg-checkbox size="md" state="hover"></bsg-checkbox>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Checked</span>
            <bsg-checkbox size="md" state="checked"></bsg-checkbox>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Disabled</span>
            <bsg-checkbox size="md" state="disabled"></bsg-checkbox>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Indeterminate</span>
            <bsg-checkbox size="md" state="indeterminate"></bsg-checkbox>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Focus</span>
            <bsg-checkbox size="md" state="focus"></bsg-checkbox>
          </div>
        </div>
      </div>
    `,
  }),
};

export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 900px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Checkbox Component Library</h2>
        
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Small (16x16px)</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Default</span>
              <bsg-checkbox size="sm" state="default"></bsg-checkbox>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Hover</span>
              <bsg-checkbox size="sm" state="hover"></bsg-checkbox>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Checked</span>
              <bsg-checkbox size="sm" state="checked"></bsg-checkbox>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <bsg-checkbox size="sm" state="disabled"></bsg-checkbox>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Indeterminate</span>
              <bsg-checkbox size="sm" state="indeterminate"></bsg-checkbox>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <bsg-checkbox size="sm" state="focus"></bsg-checkbox>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Medium (20x20px)</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Default</span>
              <bsg-checkbox size="md" state="default"></bsg-checkbox>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Hover</span>
              <bsg-checkbox size="md" state="hover"></bsg-checkbox>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Checked</span>
              <bsg-checkbox size="md" state="checked"></bsg-checkbox>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <bsg-checkbox size="md" state="disabled"></bsg-checkbox>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Indeterminate</span>
              <bsg-checkbox size="md" state="indeterminate"></bsg-checkbox>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <bsg-checkbox size="md" state="focus"></bsg-checkbox>
            </div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          <div style="font-size: 14px; color: #64748B; line-height: 1.6;">
            <p style="margin: 8px 0;"><strong>Small:</strong> 16x16px, border-radius: 2px</p>
            <p style="margin: 8px 0;"><strong>Medium:</strong> 20x20px, border-radius: 2px</p>
            <p style="margin: 8px 0;"><strong>Border:</strong> 1px solid</p>
            <p style="margin: 8px 0;"><strong>Colors:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Default border: #64748B (neutral-500)</li>
              <li>Hover border: #3B82F6 (Blue-500)</li>
              <li>Checked background: #2563EB (Blue-600)</li>
              <li>Focus outline: #4C1D95 (Violet-900)</li>
              <li>Disabled: opacity 40%</li>
            </ul>
          </div>
        </section>
      </div>
    `,
  }),
};

// Interactive examples
export const WithLabel: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Checkbox with Labels</h3>
        
        <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
          <bsg-checkbox size="md" state="default"></bsg-checkbox>
          <span style="font-size: 14px; color: #202020;">Accept terms and conditions</span>
        </label>

        <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
          <bsg-checkbox size="md" state="checked"></bsg-checkbox>
          <span style="font-size: 14px; color: #202020;">Subscribe to newsletter</span>
        </label>

        <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
          <bsg-checkbox size="md" state="indeterminate"></bsg-checkbox>
          <span style="font-size: 14px; color: #202020;">Select all (partial selection)</span>
        </label>

        <label style="display: flex; align-items: center; gap: 8px; cursor: not-allowed;">
          <bsg-checkbox size="md" state="disabled"></bsg-checkbox>
          <span style="font-size: 14px; color: #64748B;">Option disabled</span>
        </label>
      </div>
    `,
  }),
};
