import type { Meta, StoryObj } from '@storybook/angular';
import { TooltipComponent } from './tooltip.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

const meta: Meta<TooltipComponent> = {
  title: 'Example/Tooltip',
  component: TooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [TooltipComponent, CommonModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Text content displayed in the tooltip',
    },
    placement: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the tooltip relative to the trigger',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the tooltip',
    },
  },
  args: {
    content: 'This is helpful information',
    placement: 'top',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<TooltipComponent>;

/**
 * Default tooltip example with an info icon trigger.
 * Hover or focus the icon to reveal the tooltip.
 */
export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 200px; padding: 40px;">
        <bsg-tooltip [content]="content" [placement]="placement" [disabled]="disabled">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="cursor: pointer; color: #9333ea;">
            <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <text x="10" y="14" text-anchor="middle" font-size="12" fill="currentColor" font-weight="bold">i</text>
          </svg>
        </bsg-tooltip>
      </div>
    `,
  }),
};

/**
 * Tooltip with different placement options.
 * Each example shows how the tooltip positions itself relative to the trigger.
 */
export const Placements: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 60px; padding: 80px 40px; justify-content: center; flex-wrap: wrap;">
        <!-- TOP placement -->
        <div style="text-align: center;">
          <p style="margin-bottom: 20px; font-size: 12px; color: #64748b; font-weight: 500;">TOP</p>
          <bsg-tooltip content="Tooltip on top" placement="top">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="cursor: pointer; color: #9333ea;">
              <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <text x="10" y="14" text-anchor="middle" font-size="12" fill="currentColor" font-weight="bold">i</text>
            </svg>
          </bsg-tooltip>
        </div>

        <!-- RIGHT placement -->
        <div style="text-align: center;">
          <p style="margin-bottom: 20px; font-size: 12px; color: #64748b; font-weight: 500;">RIGHT</p>
          <bsg-tooltip content="Tooltip on right" placement="right">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="cursor: pointer; color: #9333ea;">
              <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <text x="10" y="14" text-anchor="middle" font-size="12" fill="currentColor" font-weight="bold">i</text>
            </svg>
          </bsg-tooltip>
        </div>

        <!-- BOTTOM placement -->
        <div style="text-align: center;">
          <p style="margin-bottom: 20px; font-size: 12px; color: #64748b; font-weight: 500;">BOTTOM</p>
          <bsg-tooltip content="Tooltip on bottom" placement="bottom">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="cursor: pointer; color: #9333ea;">
              <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <text x="10" y="14" text-anchor="middle" font-size="12" fill="currentColor" font-weight="bold">i</text>
            </svg>
          </bsg-tooltip>
        </div>

        <!-- LEFT placement -->
        <div style="text-align: center;">
          <p style="margin-bottom: 20px; font-size: 12px; color: #64748b; font-weight: 500;">LEFT</p>
          <bsg-tooltip content="Tooltip on left" placement="left">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="cursor: pointer; color: #9333ea;">
              <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <text x="10" y="14" text-anchor="middle" font-size="12" fill="currentColor" font-weight="bold">i</text>
            </svg>
          </bsg-tooltip>
        </div>
      </div>
    `,
  }),
};

/**
 * Disabled tooltip - does not show on hover or focus.
 * Use this when tooltip functionality needs to be temporarily disabled.
 */
export const Disabled: Story = {
  args: {
    content: 'This tooltip is disabled',
    placement: 'top',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 200px; padding: 40px;">
        <div style="text-align: center;">
          <p style="margin-bottom: 20px; font-size: 12px; color: #64748b;">Hover the icon (it won't show)</p>
          <bsg-tooltip [content]="content" [placement]="placement" [disabled]="disabled">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style="cursor: not-allowed; color: #cbd5e1; opacity: 0.5;">
              <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <text x="10" y="14" text-anchor="middle" font-size="12" fill="currentColor" font-weight="bold">i</text>
            </svg>
          </bsg-tooltip>
        </div>
      </div>
    `,
  }),
};

/**
 * Tooltip with longer text content.
 * Shows how the tooltip handles more information.
 */
export const WithLongContent: Story = {
  args: {
    content: 'This is a longer tooltip message that provides more detailed information to the user',
    placement: 'top',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 200px; padding: 40px;">
        <bsg-tooltip [content]="content" [placement]="placement" [disabled]="disabled">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style="cursor: pointer; color: #9333ea;">
            <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5" fill="none"/>
            <text x="10" y="14" text-anchor="middle" font-size="12" fill="currentColor" font-weight="bold">i</text>
          </svg>
        </bsg-tooltip>
      </div>
    `,
  }),
};

/**
 * Tooltip with button trigger.
 * Demonstrates that the tooltip works with any interactive element, not just icons.
 */
export const WithButtonTrigger: Story = {
  args: {
    content: 'Click to save changes',
    placement: 'top',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; align-items: center; justify-content: center; min-height: 200px; padding: 40px;">
        <bsg-tooltip [content]="content" [placement]="placement" [disabled]="disabled">
          <button
            style="
              padding: 8px 16px;
              border: 1px solid #9333ea;
              background: #9333ea;
              color: white;
              border-radius: 6px;
              font-weight: 500;
              font-size: 14px;
              cursor: pointer;
              transition: opacity 0.2s ease;
            "
            onmouseover="this.style.opacity='0.9'"
            onmouseout="this.style.opacity='1'">
            Save
          </button>
        </bsg-tooltip>
      </div>
    `,
  }),
};
