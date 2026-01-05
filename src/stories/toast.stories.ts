import type { Meta, StoryObj } from '@storybook/angular';
import { ToastComponent } from './toast.component';

const meta: Meta<ToastComponent> = {
  title: 'Example/Toast',
  component: ToastComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'destructive'],
      description: 'Toast variant type',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the toast can be dismissed',
    },
    content: {
      control: 'text',
      description: 'Toast message content',
    },
  },
  args: {
    variant: 'default',
    dismissible: false,
    content: 'Componente de toast Default',
  },
};

export default meta;
type Story = StoryObj<ToastComponent>;

// Default variant
export const Default: Story = {
  args: {
    variant: 'default',
    dismissible: false,
    content: 'Componente de toast Default',
  },
};

export const DefaultDismissible: Story = {
  args: {
    variant: 'default',
    dismissible: true,
    content: 'Componente de toast Default',
  },
};

// Info variant
export const Info: Story = {
  args: {
    variant: 'info',
    dismissible: false,
    content: 'Componente de toast Info',
  },
};

export const InfoDismissible: Story = {
  args: {
    variant: 'info',
    dismissible: true,
    content: 'Componente de toast Info',
  },
};

// Success variant
export const Success: Story = {
  args: {
    variant: 'success',
    dismissible: false,
    content: 'Componente de toast Succes',
  },
};

export const SuccessDismissible: Story = {
  args: {
    variant: 'success',
    dismissible: true,
    content: 'Componente de toast Succes',
  },
};

// Warning variant
export const Warning: Story = {
  args: {
    variant: 'warning',
    dismissible: false,
    content: 'Componente de toast Warning',
  },
};

export const WarningDismissible: Story = {
  args: {
    variant: 'warning',
    dismissible: true,
    content: 'Componente de toast Warning',
  },
};

// Destructive variant
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    dismissible: false,
    content: 'Componente de toast Destructive',
  },
};

export const DestructiveDismissible: Story = {
  args: {
    variant: 'destructive',
    dismissible: true,
    content: 'Componente de toast Destructive',
  },
};

// Design System Showcase
export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1800px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Toast Component Library</h2>
        
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Toast Grid: Variants × Dismissible State</h3>
          
          <!-- Headers -->
          <div style="display: grid; grid-template-columns: 100px repeat(5, 1fr); gap: 16px; margin-bottom: 16px; padding: 0 16px;">
            <div></div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Default</div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Info</div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Succes</div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Warning</div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Destructive</div>
          </div>
          
          <!-- Default Row (non-dismissible) -->
          <div style="display: grid; grid-template-columns: 100px repeat(5, 1fr); gap: 16px; margin-bottom: 16px; align-items: center;">
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Default</div>
            <div><storybook-toast variant="default" [dismissible]="false" content="Componente de toast Default"></storybook-toast></div>
            <div><storybook-toast variant="info" [dismissible]="false" content="Componente de toast Info"></storybook-toast></div>
            <div><storybook-toast variant="success" [dismissible]="false" content="Componente de toast Succes"></storybook-toast></div>
            <div><storybook-toast variant="warning" [dismissible]="false" content="Componente de toast Warning"></storybook-toast></div>
            <div><storybook-toast variant="destructive" [dismissible]="false" content="Componente de toast Destructive"></storybook-toast></div>
          </div>
          
          <!-- Dismissible Row -->
          <div style="display: grid; grid-template-columns: 100px repeat(5, 1fr); gap: 16px; align-items: center;">
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Dismissible</div>
            <div><storybook-toast variant="default" [dismissible]="true" content="Componente de toast Default"></storybook-toast></div>
            <div><storybook-toast variant="info" [dismissible]="true" content="Componente de toast Info"></storybook-toast></div>
            <div><storybook-toast variant="success" [dismissible]="true" content="Componente de toast Succes"></storybook-toast></div>
            <div><storybook-toast variant="warning" [dismissible]="true" content="Componente de toast Warning"></storybook-toast></div>
            <div><storybook-toast variant="destructive" [dismissible]="true" content="Componente de toast Destructive"></storybook-toast></div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          <div style="font-size: 14px; color: #64748B; line-height: 1.6;">
            <p style="margin: 8px 0;"><strong>Height:</strong> 39px</p>
            <p style="margin: 8px 0;"><strong>Padding:</strong> 12px 16px (with 9px left border accent)</p>
            <p style="margin: 8px 0;"><strong>Gap:</strong> 10px (between icon, text, and close button)</p>
            <p style="margin: 8px 0;"><strong>Border:</strong> 1px solid #E2E8F0 (neutral-200)</p>
            <p style="margin: 8px 0;"><strong>Border Radius:</strong> 4px</p>
            <p style="margin: 8px 0;"><strong>Background:</strong> White (#FFF)</p>
            <p style="margin: 8px 0;"><strong>Left Accent:</strong> 9px wide, rounded on left side</p>
            <p style="margin: 8px 0;"><strong>Typography:</strong> Inter, 14px, 500 weight, letter-spacing -0.28px</p>
            <p style="margin: 8px 0;"><strong>Icon Size:</strong> 24×24px</p>
            <p style="margin: 8px 0;"><strong>Close Icon Size:</strong> 8×8px (when dismissible)</p>
            <p style="margin: 8px 0;"><strong>Width:</strong> Content-based (inline-flex), not full width</p>
            <p style="margin: 8px 0;"><strong>Variant Colors:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Default:</strong> Accent #BAE6FD (Sky-200), Text/Icon #0284C7 (Sky-600)</li>
              <li><strong>Info:</strong> Accent #BFDBFE (Blue-200), Text/Icon #2563EB (Blue-600)</li>
              <li><strong>Success:</strong> Accent #BBF7D0 (Green-200), Text/Icon #16A34A (Green-600)</li>
              <li><strong>Warning:</strong> Accent #FEF08A (Yellow-200), Text/Icon #CA8A04 (Yellow-600)</li>
              <li><strong>Destructive:</strong> Accent #FECACA (Red-200), Text/Icon #DC2626 (Red-600)</li>
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
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Toast Usage Examples</h3>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Success Notification</h4>
          <storybook-toast 
            variant="success" 
            [dismissible]="true" 
            content="Your changes have been saved successfully!">
          </storybook-toast>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Error Toast</h4>
          <storybook-toast 
            variant="destructive" 
            [dismissible]="true" 
            content="Error: Unable to complete your request. Please try again.">
          </storybook-toast>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Warning Message</h4>
          <storybook-toast 
            variant="warning" 
            [dismissible]="false" 
            content="Your session will expire in 5 minutes.">
          </storybook-toast>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Information</h4>
          <storybook-toast 
            variant="info" 
            [dismissible]="false" 
            content="New features are now available.">
          </storybook-toast>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">System Status</h4>
          <storybook-toast 
            variant="default" 
            [dismissible]="false" 
            content="All systems operational.">
          </storybook-toast>
        </div>
      </div>
    `,
  }),
};

// Toast Stack Example (typical toast positioning pattern)
export const ToastStack: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Toast Notification Stack</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Multiple toasts stacked vertically (typical notification pattern)
        </p>
        
        <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
          <storybook-toast 
            variant="success" 
            [dismissible]="true" 
            content="File uploaded successfully">
          </storybook-toast>
          
          <storybook-toast 
            variant="info" 
            [dismissible]="true" 
            content="3 new messages">
          </storybook-toast>
          
          <storybook-toast 
            variant="warning" 
            [dismissible]="true" 
            content="Password expires in 7 days">
          </storybook-toast>
        </div>
      </div>
    `,
  }),
};

// Comparison with Alert
export const ComparisonWithAlert: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif; max-width: 800px;">
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Toast vs Alert Comparison</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Toast uses white background with colored left accent border, while Alert uses colored background. 
          Toast maintains fixed content width, Alert expands to full width.
        </p>
        
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Toast (Fixed Width, White Background)</h4>
            <storybook-toast 
              variant="success" 
              [dismissible]="true" 
              content="Componente de toast Succes">
            </storybook-toast>
          </div>
          
          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Toast Info</h4>
            <storybook-toast 
              variant="info" 
              [dismissible]="true" 
              content="Componente de toast Info">
            </storybook-toast>
          </div>
          
          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Toast Warning</h4>
            <storybook-toast 
              variant="warning" 
              [dismissible]="true" 
              content="Componente de toast Warning">
            </storybook-toast>
          </div>
        </div>
      </div>
    `,
  }),
};
