import type { Meta, StoryObj } from '@storybook/angular';
import { RadioGroupComponent } from './radio-group.component';

const meta: Meta<RadioGroupComponent> = {
  title: 'Example/RadioGroup',
  component: RadioGroupComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: 'Size of the radio buttons',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Layout orientation of the group',
    },
    options: {
      control: 'object',
      description: 'Array of radio options',
    },
    selectedValue: {
      control: 'text',
      description: 'Currently selected value',
    },
  },
  args: {
    size: 'md',
    orientation: 'horizontal',
    options: [
      { value: '1', label: 'Uno' },
      { value: '2', label: 'Dos' },
      { value: '3', label: 'Tres' },
    ],
    selectedValue: '',
  },
};

export default meta;
type Story = StoryObj<RadioGroupComponent>;

// =====================
// AXES
// =====================

/**
 * RadioGroup orientation axis
 * Shows all orientation options: horizontal and vertical
 */
export const Orientations: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px; font-family: Roboto, sans-serif;">
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Horizontal</h3>
          <bsg-radio-group 
            size="md" 
            orientation="horizontal"
            [options]="[
              { value: '1', label: 'Uno' },
              { value: '2', label: 'Dos' },
              { value: '3', label: 'Tres' }
            ]">
          </bsg-radio-group>
        </div>
        
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Vertical</h3>
          <bsg-radio-group 
            size="md" 
            orientation="vertical"
            [options]="[
              { value: '1', label: 'Uno' },
              { value: '2', label: 'Dos' },
              { value: '3', label: 'Tres' }
            ]">
          </bsg-radio-group>
        </div>
      </div>
    `,
  }),
};

/**
 * RadioGroup size axis
 * Shows all size options: small and medium
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px; font-family: Roboto, sans-serif;">
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Small (sm)</h3>
          <bsg-radio-group 
            size="sm" 
            orientation="horizontal"
            [options]="[
              { value: '1', label: 'Uno' },
              { value: '2', label: 'Dos' },
              { value: '3', label: 'Tres' }
            ]">
          </bsg-radio-group>
        </div>
        
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Medium (md)</h3>
          <bsg-radio-group 
            size="md" 
            orientation="horizontal"
            [options]="[
              { value: '1', label: 'Uno' },
              { value: '2', label: 'Dos' },
              { value: '3', label: 'Tres' }
            ]">
          </bsg-radio-group>
        </div>
      </div>
    `,
  }),
};

/**
 * RadioGroup states axis
 * Shows all state combinations: default, selected, and disabled
 */
export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px; font-family: Roboto, sans-serif;">
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Default</h3>
          <bsg-radio-group 
            size="md" 
            orientation="horizontal"
            [options]="[
              { value: '1', label: 'Uno' },
              { value: '2', label: 'Dos' },
              { value: '3', label: 'Tres' }
            ]">
          </bsg-radio-group>
        </div>
        
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Selected</h3>
          <bsg-radio-group 
            size="md" 
            orientation="horizontal"
            selectedValue="2"
            [options]="[
              { value: '1', label: 'Uno' },
              { value: '2', label: 'Dos' },
              { value: '3', label: 'Tres' }
            ]">
          </bsg-radio-group>
        </div>
        
        <div>
          <h3 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Disabled</h3>
          <bsg-radio-group 
            size="md" 
            orientation="vertical"
            selectedValue="1"
            [options]="[
              { value: '1', label: 'Uno' },
              { value: '2', label: 'Dos', disabled: true },
              { value: '3', label: 'Tres' }
            ]">
          </bsg-radio-group>
        </div>
      </div>
    `,
  }),
};

// =====================
// EXAMPLES
// =====================

/**
 * Real-world usage examples of RadioGroup
 */
export const UsageExamples: Story = {
  tags: ['!dev'],
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">RadioGroup Usage Examples</h3>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Select Payment Method</h4>
          <bsg-radio-group 
            size="md" 
            orientation="vertical"
            selectedValue="credit"
            [options]="[
              { value: 'credit', label: 'Credit Card' },
              { value: 'debit', label: 'Debit Card' },
              { value: 'paypal', label: 'PayPal' }
            ]">
          </bsg-radio-group>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Choose Subscription Plan</h4>
          <bsg-radio-group 
            size="sm" 
            orientation="horizontal"
            [options]="[
              { value: 'monthly', label: 'Monthly' },
              { value: 'yearly', label: 'Yearly' },
              { value: 'lifetime', label: 'Lifetime' }
            ]">
          </bsg-radio-group>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Select Shipping Speed</h4>
          <bsg-radio-group 
            size="md" 
            orientation="vertical"
            selectedValue="standard"
            [options]="[
              { value: 'express', label: 'Express (1-2 days)' },
              { value: 'standard', label: 'Standard (3-5 days)' },
              { value: 'economy', label: 'Economy (7-10 days)' }
            ]">
          </bsg-radio-group>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">With Disabled Option</h4>
          <bsg-radio-group 
            size="md" 
            orientation="vertical"
            selectedValue="email"
            [options]="[
              { value: 'email', label: 'Email Notification' },
              { value: 'sms', label: 'SMS Notification', disabled: true },
              { value: 'push', label: 'Push Notification' }
            ]">
          </bsg-radio-group>
        </div>
      </div>
    `,
  }),
};

/**
 * Interactive form example with RadioGroup
 */
export const FormExample: Story = {
  tags: ['!dev'],
  render: () => ({
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; max-width: 500px;">
        <h3 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600;">Survey Form</h3>
        
        <form style="display: flex; flex-direction: column; gap: 24px;">
          <fieldset style="border: 1px solid #E5E7EB; border-radius: 8px; padding: 16px;">
            <legend style="font-size: 14px; font-weight: 600; color: #202020; padding: 0 8px;">
              How often do you use our product?
            </legend>
            <bsg-radio-group 
              size="md" 
              orientation="vertical"
              [options]="[
                { value: 'daily', label: 'Daily' },
                { value: 'weekly', label: 'Weekly' },
                { value: 'monthly', label: 'Monthly' },
                { value: 'rarely', label: 'Rarely' }
              ]">
            </bsg-radio-group>
          </fieldset>
          
          <fieldset style="border: 1px solid #E5E7EB; border-radius: 8px; padding: 16px;">
            <legend style="font-size: 14px; font-weight: 600; color: #202020; padding: 0 8px;">
              Would you recommend us to a friend?
            </legend>
            <bsg-radio-group 
              size="md" 
              orientation="horizontal"
              [options]="[
                { value: 'yes', label: 'Yes' },
                { value: 'no', label: 'No' },
                { value: 'maybe', label: 'Maybe' }
              ]">
            </bsg-radio-group>
          </fieldset>
        </form>
      </div>
    `,
  }),
};

// =====================
// SHOWCASE (Optional)
// =====================

/**
 * Complete showcase of RadioGroup component library
 */
export const Showcase: Story = {
  tags: ['!dev'],
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 900px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">RadioGroup Component Library</h2>
        
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Horizontal Layout</h3>
          
          <div style="margin-bottom: 24px;">
            <h4 style="margin-bottom: 12px; font-size: 16px; font-weight: 600; color: #202020;">Small (sm)</h4>
            <bsg-radio-group 
              size="sm" 
              orientation="horizontal"
              [options]="[
                { value: '1', label: 'Uno' },
                { value: '2', label: 'Dos' },
                { value: '3', label: 'Tres' }
              ]">
            </bsg-radio-group>
          </div>
          
          <div>
            <h4 style="margin-bottom: 12px; font-size: 16px; font-weight: 600; color: #202020;">Medium (md)</h4>
            <bsg-radio-group 
              size="md" 
              orientation="horizontal"
              [options]="[
                { value: '1', label: 'Uno' },
                { value: '2', label: 'Dos' },
                { value: '3', label: 'Tres' }
              ]">
            </bsg-radio-group>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Vertical Layout</h3>
          
          <div style="display: flex; gap: 64px;">
            <div>
              <h4 style="margin-bottom: 12px; font-size: 16px; font-weight: 600; color: #202020;">Small (sm)</h4>
              <bsg-radio-group 
                size="sm" 
                orientation="vertical"
                [options]="[
                  { value: '1', label: 'Uno' },
                  { value: '2', label: 'Dos' },
                  { value: '3', label: 'Tres' }
                ]">
              </bsg-radio-group>
            </div>
            
            <div>
              <h4 style="margin-bottom: 12px; font-size: 16px; font-weight: 600; color: #202020;">Medium (md)</h4>
              <bsg-radio-group 
                size="md" 
                orientation="vertical"
                [options]="[
                  { value: '1', label: 'Uno' },
                  { value: '2', label: 'Dos' },
                  { value: '3', label: 'Tres' }
                ]">
              </bsg-radio-group>
            </div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          <div style="font-size: 14px; color: #64748B; line-height: 1.6;">
            <p style="margin: 8px 0;"><strong>Orientation:</strong> horizontal | vertical</p>
            <p style="margin: 8px 0;"><strong>Size:</strong> sm (14px text) | md (16px text)</p>
            <p style="margin: 8px 0;"><strong>Spacing:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>sm:</strong> 8px gap between radio and label</li>
              <li><strong>md:</strong> 12px gap between radio and label</li>
              <li><strong>Horizontal:</strong> 12px gap (sm), 15px gap (md) between options</li>
              <li><strong>Vertical:</strong> 12px gap between options (both sizes)</li>
            </ul>
            <p style="margin: 8px 0;"><strong>Typography:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>sm:</strong> Inter, 14px, 400 weight, 21px line-height</li>
              <li><strong>md:</strong> Inter, 16px, 400 weight, 24px line-height</li>
            </ul>
            <p style="margin: 8px 0;"><strong>Behavior:</strong> Single selection only (radio group pattern)</p>
          </div>
        </section>
      </div>
    `,
  }),
};
