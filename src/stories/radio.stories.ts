import type { Meta, StoryObj } from '@storybook/angular';
import { RadioComponent } from './radio.component';

const meta: Meta<RadioComponent> = {
  title: 'Example/Radio',
  component: RadioComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the radio button',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'checked', 'disabled', 'focus'],
      description: 'Current state of the radio button',
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
type Story = StoryObj<RadioComponent>;

// ===========================
// Default - Interactive Radio
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
            <bsg-radio size="sm" state="default"></bsg-radio>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Medium (20px)</span>
            <bsg-radio size="md" state="default"></bsg-radio>
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
            <bsg-radio size="md" state="default"></bsg-radio>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Hover</span>
            <bsg-radio size="md" state="hover"></bsg-radio>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Checked</span>
            <bsg-radio size="md" state="checked"></bsg-radio>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Disabled</span>
            <bsg-radio size="md" state="disabled"></bsg-radio>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
            <span style="font-size: 14px; color: #666;">Focus</span>
            <bsg-radio size="md" state="focus"></bsg-radio>
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
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Radio Button Component Library</h2>
        
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Small (16px)</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Default</span>
              <bsg-radio size="sm" state="default"></bsg-radio>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Hover</span>
              <bsg-radio size="sm" state="hover"></bsg-radio>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Checked</span>
              <bsg-radio size="sm" state="checked"></bsg-radio>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <bsg-radio size="sm" state="disabled"></bsg-radio>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <bsg-radio size="sm" state="focus"></bsg-radio>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Medium (20px)</h3>
          <div style="display: flex; gap: 32px; align-items: flex-start;">
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Default</span>
              <bsg-radio size="md" state="default"></bsg-radio>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Hover</span>
              <bsg-radio size="md" state="hover"></bsg-radio>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Checked</span>
              <bsg-radio size="md" state="checked"></bsg-radio>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Disabled</span>
              <bsg-radio size="md" state="disabled"></bsg-radio>
            </div>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: center;">
              <span style="font-size: 14px; font-weight: 600; color: #202020;">Focus</span>
              <bsg-radio size="md" state="focus"></bsg-radio>
            </div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          <div style="font-size: 14px; color: #64748B; line-height: 1.6;">
            <p style="margin: 8px 0;"><strong>Small:</strong> Outer 16px, Inner dot 10px (when checked)</p>
            <p style="margin: 8px 0;"><strong>Medium:</strong> Outer 20px, Inner dot 14px (when checked)</p>
            <p style="margin: 8px 0;"><strong>Shape:</strong> Perfect circle</p>
            <p style="margin: 8px 0;"><strong>Border:</strong> 1px solid stroke</p>
            <p style="margin: 8px 0;"><strong>Colors:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Default border: #64748B (neutral-500)</li>
              <li>Hover border: #3B82F6 (Blue-500) with 90% opacity</li>
              <li>Checked border & dot: #2563EB (Blue-600)</li>
              <li>Focus ring: #7C3AED (Violet-600) for sm, #9333EA (Purple-600) for md</li>
              <li>Disabled: opacity 40%</li>
            </ul>
            <p style="margin: 8px 0;"><strong>Focus Ring:</strong> 3px gap from outer circle (22px for sm, 26px for md)</p>
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
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Radio Button with Labels</h3>
        
        <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
          <bsg-radio size="md" state="default"></bsg-radio>
          <span style="font-size: 14px; color: #202020;">Option A</span>
        </label>

        <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
          <bsg-radio size="md" state="checked"></bsg-radio>
          <span style="font-size: 14px; color: #202020;">Option B (Selected)</span>
        </label>

        <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
          <bsg-radio size="md" state="default"></bsg-radio>
          <span style="font-size: 14px; color: #202020;">Option C</span>
        </label>

        <label style="display: flex; align-items: center; gap: 8px; cursor: not-allowed;">
          <bsg-radio size="md" state="disabled"></bsg-radio>
          <span style="font-size: 14px; color: #64748B;">Option D (Disabled)</span>
        </label>
      </div>
    `,
  }),
};

// Radio group example
export const RadioGroup: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Radio Group Example</h3>
        
        <fieldset style="border: 1px solid #E5E7EB; border-radius: 8px; padding: 16px;">
          <legend style="font-size: 14px; font-weight: 600; color: #202020; padding: 0 8px;">Choose your plan</legend>
          
          <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 8px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <bsg-radio size="md" state="default"></bsg-radio>
              <div style="display: flex; flex-direction: column;">
                <span style="font-size: 14px; font-weight: 500; color: #202020;">Basic Plan</span>
                <span style="font-size: 12px; color: #64748B;">$9/month</span>
              </div>
            </label>

            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <bsg-radio size="md" state="checked"></bsg-radio>
              <div style="display: flex; flex-direction: column;">
                <span style="font-size: 14px; font-weight: 500; color: #202020;">Pro Plan</span>
                <span style="font-size: 12px; color: #64748B;">$29/month</span>
              </div>
            </label>

            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <bsg-radio size="md" state="default"></bsg-radio>
              <div style="display: flex; flex-direction: column;">
                <span style="font-size: 14px; font-weight: 500; color: #202020;">Enterprise Plan</span>
                <span style="font-size: 12px; color: #64748B;">Contact us</span>
              </div>
            </label>
          </div>
        </fieldset>
      </div>
    `,
  }),
};
