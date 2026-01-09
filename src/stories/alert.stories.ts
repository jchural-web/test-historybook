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
    content: 'Alert message',
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

// ============================================================
// API CATEGORY STORIES (One per category)
// ============================================================

/**
 * All available alert variants: default, info, success, warning, and destructive.
 * Each variant has its own visual styling with specific colors and icons.
 */
export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 500; color: #666;">Default</h4>
          <bsg-alert variant="default" [dismissible]="false" content="Default alert message"></bsg-alert>
        </div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 500; color: #666;">Info</h4>
          <bsg-alert variant="info" [dismissible]="false" content="This is an informational alert"></bsg-alert>
        </div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 500; color: #666;">Success</h4>
          <bsg-alert variant="success" [dismissible]="false" content="Operation completed successfully"></bsg-alert>
        </div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 500; color: #666;">Warning</h4>
          <bsg-alert variant="warning" [dismissible]="false" content="Please review this warning message"></bsg-alert>
        </div>
        <div>
          <h4 style="margin: 0 0 8px 0; font-size: 13px; font-weight: 500; color: #666;">Destructive</h4>
          <bsg-alert variant="destructive" [dismissible]="false" content="An error has occurred"></bsg-alert>
        </div>
      </div>
    `,
  }),
};

/**
 * Alert states: default (persistent) and dismissible (closable by user).
 * Demonstrates how alerts behave with and without dismissible functionality.
 */
export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Default State (Persistent)</h4>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <bsg-alert variant="info" [dismissible]="false" content="This alert will remain until the page reloads"></bsg-alert>
            <bsg-alert variant="success" [dismissible]="false" content="Persistent success message"></bsg-alert>
          </div>
        </div>

        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Dismissible State (Closable)</h4>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <bsg-alert variant="info" [dismissible]="true" content="Click the X button to dismiss this alert"></bsg-alert>
            <bsg-alert variant="warning" [dismissible]="true" content="This alert can be closed by the user"></bsg-alert>
            <bsg-alert variant="destructive" [dismissible]="true" content="Dismissible error message"></bsg-alert>
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
 * Basic usage examples showing practical alert scenarios.
 * Demonstrates different variants with appropriate content for common use cases.
 */
export const BasicUsage: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 12px 0;">
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Success Notification</h4>
          <bsg-alert 
            variant="success" 
            [dismissible]="true" 
            content="Your changes have been saved successfully!">
          </bsg-alert>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Error Alert</h4>
          <bsg-alert 
            variant="destructive" 
            [dismissible]="true" 
            content="Error: Unable to complete your request. Please try again.">
          </bsg-alert>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Warning Message</h4>
          <bsg-alert 
            variant="warning" 
            [dismissible]="false" 
            content="Your session will expire in 5 minutes. Please save your work.">
          </bsg-alert>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Information</h4>
          <bsg-alert 
            variant="info" 
            [dismissible]="false" 
            content="New features are now available. Check out the documentation.">
          </bsg-alert>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">System Status</h4>
          <bsg-alert 
            variant="default" 
            [dismissible]="false" 
            content="All systems operational. No issues detected.">
          </bsg-alert>
        </div>
      </div>
    `,
  }),
};

/**
 * Multiple alerts stacked vertically.
 * Common pattern for displaying multiple notifications or messages to the user.
 */
export const NotificationStack: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 12px; max-width: 600px;">
        <h4 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #202020;">Multiple Notifications</h4>
        
        <bsg-alert 
          variant="success" 
          [dismissible]="true" 
          content="Profile updated successfully">
        </bsg-alert>
        
        <bsg-alert 
          variant="info" 
          [dismissible]="true" 
          content="3 new messages in your inbox">
        </bsg-alert>
        
        <bsg-alert 
          variant="warning" 
          [dismissible]="true" 
          content="Your password will expire in 7 days">
        </bsg-alert>
        
        <bsg-alert 
          variant="default" 
          [dismissible]="true" 
          content="System maintenance scheduled for tonight">
        </bsg-alert>
      </div>
    `,
  }),
};

// ============================================================
// SHOWCASE (Comprehensive reference)
// ============================================================

/**
 * Complete design system showcase featuring all alert variants,
 * states, and design specifications for reference and documentation.
 */
export const Showcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1200px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Alert Component Library</h2>
        
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">All Variants</h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Default</h4>
              <bsg-alert variant="default" [dismissible]="false" content="Componente de alerta Default"></bsg-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Info</h4>
              <bsg-alert variant="info" [dismissible]="false" content="Componente de alerta Info"></bsg-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Success</h4>
              <bsg-alert variant="success" [dismissible]="false" content="Componente de alerta Succes"></bsg-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Warning</h4>
              <bsg-alert variant="warning" [dismissible]="false" content="Componente de alerta Warning"></bsg-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Destructive</h4>
              <bsg-alert variant="destructive" [dismissible]="false" content="Componente de alerta Destructive"></bsg-alert>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Dismissible State</h3>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Default</h4>
              <bsg-alert variant="default" [dismissible]="true" content="Componente de alerta Default"></bsg-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Info</h4>
              <bsg-alert variant="info" [dismissible]="true" content="Componente de alerta Info"></bsg-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Success</h4>
              <bsg-alert variant="success" [dismissible]="true" content="Componente de alerta Succes"></bsg-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Warning</h4>
              <bsg-alert variant="warning" [dismissible]="true" content="Componente de alerta Warning"></bsg-alert>
            </div>
            <div>
              <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600; color: #202020;">Destructive</h4>
              <bsg-alert variant="destructive" [dismissible]="true" content="Componente de alerta Destructive"></bsg-alert>
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
