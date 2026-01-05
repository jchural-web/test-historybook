import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';

const meta: Meta<AlertComponent> = {
  title: 'Example/Alert',
  component: AlertComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'destructive'],
      description: 'Alert variant type',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
    content: {
      control: 'text',
      description: 'Alert message content',
    },
  },
  args: {
    variant: 'default',
    dismissible: false,
    content: 'Componente de alerta Default',
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

// Default variant
export const Default: Story = {
  args: {
    variant: 'default',
    dismissible: false,
    content: 'Componente de alerta Default',
  },
};

export const DefaultDismissible: Story = {
  args: {
    variant: 'default',
    dismissible: true,
    content: 'Componente de alerta Default',
  },
};

// Info variant
export const Info: Story = {
  args: {
    variant: 'info',
    dismissible: false,
    content: 'Componente de alerta Info',
  },
};

export const InfoDismissible: Story = {
  args: {
    variant: 'info',
    dismissible: true,
    content: 'Componente de alerta Info',
  },
};

// Success variant
export const Success: Story = {
  args: {
    variant: 'success',
    dismissible: false,
    content: 'Componente de alerta Succes',
  },
};

export const SuccessDismissible: Story = {
  args: {
    variant: 'success',
    dismissible: true,
    content: 'Componente de alerta Succes',
  },
};

// Warning variant
export const Warning: Story = {
  args: {
    variant: 'warning',
    dismissible: false,
    content: 'Componente de alerta Warning',
  },
};

export const WarningDismissible: Story = {
  args: {
    variant: 'warning',
    dismissible: true,
    content: 'Componente de alerta Warning',
  },
};

// Destructive variant
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    dismissible: false,
    content: 'Componente de alerta Destructive',
  },
};

export const DestructiveDismissible: Story = {
  args: {
    variant: 'destructive',
    dismissible: true,
    content: 'Componente de alerta Destructive',
  },
};

// Design System Showcase
export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1200px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Alert Component Library</h2>
        
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Default Alerts</h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Default</h4>
              <storybook-alert variant="default" [dismissible]="false" content="Componente de alerta Default"></storybook-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Info</h4>
              <storybook-alert variant="info" [dismissible]="false" content="Componente de alerta Info"></storybook-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Success</h4>
              <storybook-alert variant="success" [dismissible]="false" content="Componente de alerta Succes"></storybook-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Warning</h4>
              <storybook-alert variant="warning" [dismissible]="false" content="Componente de alerta Warning"></storybook-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Destructive</h4>
              <storybook-alert variant="destructive" [dismissible]="false" content="Componente de alerta Destructive"></storybook-alert>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Dismissible Alerts</h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Default</h4>
              <storybook-alert variant="default" [dismissible]="true" content="Componente de alerta Default"></storybook-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Info</h4>
              <storybook-alert variant="info" [dismissible]="true" content="Componente de alerta Info"></storybook-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Success</h4>
              <storybook-alert variant="success" [dismissible]="true" content="Componente de alerta Succes"></storybook-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Warning</h4>
              <storybook-alert variant="warning" [dismissible]="true" content="Componente de alerta Warning"></storybook-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Destructive</h4>
              <storybook-alert variant="destructive" [dismissible]="true" content="Componente de alerta Destructive"></storybook-alert>
            </div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          <div style="font-size: 14px; color: #64748B; line-height: 1.6;">
            <p style="margin: 8px 0;"><strong>Height:</strong> 39px</p>
            <p style="margin: 8px 0;"><strong>Padding:</strong> 12px 16px</p>
            <p style="margin: 8px 0;"><strong>Gap:</strong> 10px (between icon, text, and close button)</p>
            <p style="margin: 8px 0;"><strong>Border Radius:</strong> 4px</p>
            <p style="margin: 8px 0;"><strong>Typography:</strong> Inter, 14px, 500 weight, letter-spacing -0.28px</p>
            <p style="margin: 8px 0;"><strong>Icon Size:</strong> 24×24px</p>
            <p style="margin: 8px 0;"><strong>Close Icon Size:</strong> 8×8px (when dismissible)</p>
            <p style="margin: 8px 0;"><strong>Variant Colors:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Default:</strong> Background #BAE6FD (Sky-200), Text/Icon #0284C7 (Sky-600)</li>
              <li><strong>Info:</strong> Background #BFDBFE (Blue-200), Text/Icon #2563EB (Blue-600)</li>
              <li><strong>Success:</strong> Background #BBF7D0 (Green-200), Text/Icon #16A34A (Green-600)</li>
              <li><strong>Warning:</strong> Background #FEF08A (Yellow-200), Text/Icon #CA8A04 (Yellow-600)</li>
              <li><strong>Destructive:</strong> Background #FECACA (Red-200), Text/Icon #DC2626 (Red-600)</li>
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
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Alert Usage Examples</h3>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Success Notification</h4>
          <storybook-alert 
            variant="success" 
            [dismissible]="true" 
            content="Your changes have been saved successfully!">
          </storybook-alert>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Error Alert</h4>
          <storybook-alert 
            variant="destructive" 
            [dismissible]="true" 
            content="Error: Unable to complete your request. Please try again.">
          </storybook-alert>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Warning Message</h4>
          <storybook-alert 
            variant="warning" 
            [dismissible]="false" 
            content="Your session will expire in 5 minutes. Please save your work.">
          </storybook-alert>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Information</h4>
          <storybook-alert 
            variant="info" 
            [dismissible]="false" 
            content="New features are now available. Check out the documentation.">
          </storybook-alert>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">System Status</h4>
          <storybook-alert 
            variant="default" 
            [dismissible]="false" 
            content="All systems operational. No issues detected.">
          </storybook-alert>
        </div>
      </div>
    `,
  }),
};

// In-page notifications example
export const NotificationStack: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Notification Stack</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Multiple alerts stacked vertically with consistent spacing
        </p>
        
        <div style="display: flex; flex-direction: column; gap: 12px; max-width: 600px;">
          <storybook-alert 
            variant="success" 
            [dismissible]="true" 
            content="Profile updated successfully">
          </storybook-alert>
          
          <storybook-alert 
            variant="info" 
            [dismissible]="true" 
            content="3 new messages in your inbox">
          </storybook-alert>
          
          <storybook-alert 
            variant="warning" 
            [dismissible]="true" 
            content="Your password will expire in 7 days">
          </storybook-alert>
        </div>
      </div>
    `,
  }),
};
