import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchComponent } from './switch.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

const meta: Meta<SwitchComponent> = {
  title: 'Example/Switch',
  component: SwitchComponent,
  decorators: [
    moduleMetadata({
      imports: [SwitchComponent, CommonModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Whether the switch is in the checked (on) state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the switch is disabled and non-interactive',
    },
    onChange: {
      action: 'onChange',
      description: 'Event emitted when the switch state changes',
    },
  },
  args: {
    checked: false,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: 'A toggle control for on/off states, commonly used in settings and forms. Activates via click or keyboard (Space/Enter). Fully accessible with role="switch" and keyboard navigation support.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<SwitchComponent>;

/**
 * Default interactive switch.
 * Toggle between checked and unchecked states using the controls below.
 * Try clicking or using keyboard (Tab + Space/Enter) to toggle.
 */
export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 40px;">
        <!-- Interactive Switch (controlled by story controls) -->
        <div style="display: flex; align-items: center; gap: 12px;">
          <bsg-switch 
            [checked]="checked" 
            [disabled]="disabled"
            (onChange)="checked = $event">
          </bsg-switch>
          <span style="font-family: Roboto, sans-serif; font-size: 16px; font-weight: 600; color: #202020;">
            Interactive Switch (use controls to test)
          </span>
        </div>

        <!-- Active Switch Example -->
        <div style="display: flex; align-items: center; gap: 12px;">
          <bsg-switch [checked]="true"></bsg-switch>
          <span style="font-family: Roboto, sans-serif; font-size: 16px; font-weight: 600; color: #202020;">
            Active
          </span>
        </div>

        <!-- Disabled Switch Example -->
        <div style="display: flex; align-items: center; gap: 12px;">
          <bsg-switch [checked]="false" [disabled]="true"></bsg-switch>
          <span style="font-family: Roboto, sans-serif; font-size: 16px; font-weight: 600; color: #202020;">
            Disabled
          </span>
        </div>
      </div>
    `,
  }),
};
