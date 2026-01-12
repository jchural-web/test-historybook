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
        component: `
The Switch component is a toggle control for on/off states, commonly used in settings and forms.

## Behavior
- **Activation**: Click or keyboard (Space/Enter) toggles the checked state when not disabled
- **Disabled state**: When disabled=true, the switch cannot be toggled and shows a non-interactive cursor
- **Accessibility**: Uses role="switch" and aria-checked for screen reader support, fully keyboard navigable

## Visual States
- **Active (checked)**: White track with purple thumb on the right
- **Disabled (unchecked)**: Purple track with white thumb on the left, reduced opacity, non-interactive

## Usage
The Switch is designed to be simple and consistent with the design system. Labels should be provided externally to the component.

**Example with label:**
\`\`\`html
<div style="display: flex; align-items: center; gap: 12px;">
  <bsg-switch [checked]="isEnabled" (onChange)="onToggle($event)"></bsg-switch>
  <label>Enable notifications</label>
</div>
\`\`\`
        `,
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
