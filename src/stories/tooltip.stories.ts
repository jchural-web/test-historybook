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
      description: 'Position of the tooltip relative to the trigger. Arrow points toward the trigger.',
    },
    disabled: {
      control: 'boolean',
      description: 'When true, the tooltip will not appear on hover or focus',
    },
  },
  args: {
    content: 'Helpful information',
    placement: 'top',
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        component: `
The Tooltip component displays helpful information when a user hovers over or focuses on a trigger element (typically an info icon).

## Behavior
- **Show**: Tooltip appears on mouse hover (mouseenter) or keyboard focus
- **Hide**: Tooltip disappears on mouse leave (mouseleave) or blur
- **Note**: Clicking the trigger will NOT open the tooltip; only hover and keyboard focus activate it
- **Accessibility**: Uses aria-describedby to link the tooltip to its trigger for screen readers

## Positioning
The tooltip automatically positions itself relative to the trigger with an 8px offset. The arrow always points toward the trigger's center.
- **top** (default): Tooltip appears above the trigger
- **bottom**: Tooltip appears below the trigger
- **left**: Tooltip appears to the left of the trigger
- **right**: Tooltip appears to the right of the trigger

## Placement Examples
Each placement position can be tested using the "placement" control in the interactive story above.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TooltipComponent>;

/**
 * Default interactive tooltip.
 * Use the controls to test different placements and states.
 * Try hovering or using Tab to focus the info icon.
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
