import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
    },
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'outline', 'ghost', 'link', 'destructive'],
      description: 'Visual variant of the button',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'active', 'focus', 'disabled'],
      description: 'Current state of the button',
    },
    shape: {
      control: 'select',
      options: ['rectangular', 'pill', 'icon', 'icon-text', 'icon-only'],
      description: 'Shape of the button',
    },
    iconName: {
      control: 'select',
      options: ['check', 'chevron-left', 'chevron-right', 'chevron-up', 'chevron-down', 'none'],
      description: 'Icon name for icon-only buttons',
    },
    icon: {
      control: 'boolean',
      description: 'Show icon',
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Icon position',
    },
    label: {
      control: 'text',
      description: 'Button label text',
    },
  },
  args: { onClick: () => console.log('Button clicked') },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Size variants
export const SmallDefault: Story = {
  args: {
    size: 'sm',
    variant: 'default',
    label: 'Boton',
  },
};

export const MediumDefault: Story = {
  args: {
    size: 'md',
    variant: 'default',
    label: 'Boton',
  },
};

export const LargeDefault: Story = {
  args: {
    size: 'lg',
    variant: 'default',
    label: 'Boton',
  },
};

// Variant examples
export const DefaultButton: Story = {
  args: {
    variant: 'default',
    label: 'Boton',
  },
};

export const SecondaryButton: Story = {
  args: {
    variant: 'secondary',
    label: 'Boton',
  },
};

export const OutlineButton: Story = {
  args: {
    variant: 'outline',
    label: 'Boton',
  },
};

export const GhostButton: Story = {
  args: {
    variant: 'ghost',
    label: 'Boton',
  },
};

export const LinkButton: Story = {
  args: {
    variant: 'link',
    label: 'Boton',
  },
};

export const DestructiveButton: Story = {
  args: {
    variant: 'destructive',
    label: 'Boton',
  },
};

// State examples
export const HoverState: Story = {
  args: {
    variant: 'default',
    state: 'hover',
    label: 'Boton',
  },
};

export const ActiveState: Story = {
  args: {
    variant: 'default',
    state: 'active',
    label: 'Boton',
  },
};

export const FocusState: Story = {
  args: {
    variant: 'default',
    state: 'focus',
    label: 'Boton',
  },
};

export const DisabledState: Story = {
  args: {
    variant: 'default',
    state: 'disabled',
    label: 'Boton',
  },
};

// Shape variants
export const RectangularShape: Story = {
  args: {
    shape: 'rectangular',
    label: 'Boton',
  },
};

export const PillShape: Story = {
  args: {
    shape: 'pill',
    label: 'Boton',
  },
};

export const IconOnly: Story = {
  args: {
    shape: 'icon',
    icon: true,
    label: 'Download',
  },
};

export const IconWithTextLeft: Story = {
  args: {
    shape: 'icon-text',
    icon: true,
    iconPosition: 'left',
    label: 'Boton',
  },
};

export const IconWithTextRight: Story = {
  args: {
    shape: 'icon-text',
    icon: true,
    iconPosition: 'right',
    label: 'Boton',
  },
};

// Combined examples
export const LargePillSecondary: Story = {
  args: {
    size: 'lg',
    shape: 'pill',
    variant: 'secondary',
    label: 'Boton',
  },
};

export const SmallOutlineWithIcon: Story = {
  args: {
    size: 'sm',
    variant: 'outline',
    icon: true,
    shape: 'icon-text',
    label: 'Boton',
  },
};

export const MediumDestructiveHover: Story = {
  args: {
    size: 'md',
    variant: 'destructive',
    state: 'hover',
    icon: true,
    iconPosition: 'left',
    label: 'Boton',
  },
};

// Icon-only circular button - Outline variant (default)
export const IconOnlyOutline: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'outline',
    state: 'default',
    iconName: 'chevron-left',
    label: 'Previous',
  },
};

// Icon-only circular button - Default variant (filled purple)
export const IconOnlyDefault: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'default',
    state: 'default',
    iconName: 'chevron-left',
    label: 'Previous',
  },
};

// Icon-only circular button - Secondary variant (filled blue)
export const IconOnlySecondary: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'secondary',
    state: 'default',
    iconName: 'chevron-left',
    label: 'Previous',
  },
};

// Icon-only circular button - Ghost variant (light purple)
export const IconOnlyGhost: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'ghost',
    state: 'default',
    iconName: 'chevron-left',
    label: 'Previous',
  },
};

// Icon-only circular button - Link variant
export const IconOnlyLink: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'link',
    state: 'default',
    iconName: 'chevron-left',
    label: 'Previous',
  },
};

// Icon-only circular button - Destructive variant (red)
export const IconOnlyDestructive: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'destructive',
    state: 'default',
    iconName: 'chevron-left',
    label: 'Delete',
  },
};

// Icon-only circular button variants
export const IconOnlySmallDefault: Story = {
  args: {
    shape: 'icon-only',
    size: 'sm',
    variant: 'outline',
    state: 'default',
    iconName: 'chevron-left',
    label: 'Previous',
  },
};

export const IconOnlyMediumDefault: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'outline',
    state: 'default',
    iconName: 'chevron-left',
    label: 'Previous',
  },
};

export const IconOnlyLargeDefault: Story = {
  args: {
    shape: 'icon-only',
    size: 'lg',
    variant: 'outline',
    state: 'default',
    iconName: 'chevron-left',
    label: 'Previous',
  },
};

export const IconOnlyHover: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'outline',
    state: 'hover',
    iconName: 'chevron-left',
    label: 'Previous',
  },
};

export const IconOnlyActive: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'outline',
    state: 'active',
    iconName: 'chevron-left',
    label: 'Previous',
  },
};

export const IconOnlyFocus: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'outline',
    state: 'focus',
    iconName: 'chevron-left',
    label: 'Previous',
  },
};

export const IconOnlyDisabled: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'outline',
    state: 'disabled',
    iconName: 'chevron-left',
    label: 'Previous',
  },
};

// Icon-only with different icons
export const IconOnlyChevronRight: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'outline',
    iconName: 'chevron-right',
    label: 'Next',
  },
};

export const IconOnlyChevronUp: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'outline',
    iconName: 'chevron-up',
    label: 'Scroll up',
  },
};

export const IconOnlyChevronDown: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'outline',
    iconName: 'chevron-down',
    label: 'Scroll down',
  },
};

export const IconOnlyCheck: Story = {
  args: {
    shape: 'icon-only',
    size: 'md',
    variant: 'outline',
    iconName: 'check',
    label: 'Confirm',
  },
};

// Icon-only showcase with all variants
export const IconOnlyAllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; padding: 24px;">
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Outline</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="chevron-left"
            label="Outline button"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Default</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="default"
            iconName="chevron-left"
            label="Default button"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Secondary</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="secondary"
            iconName="chevron-left"
            label="Secondary button"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Ghost</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="ghost"
            iconName="chevron-left"
            label="Ghost button"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Link</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="link"
            iconName="chevron-left"
            label="Link button"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Destructive</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="destructive"
            iconName="chevron-left"
            label="Destructive button"
          ></storybook-button>
        </div>
      </div>
    `,
  }),
};

// Icon-only showcase by size
export const IconOnlyAllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; padding: 24px;">
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Small (27px)</span>
          <storybook-button
            shape="icon-only"
            size="sm"
            variant="outline"
            iconName="chevron-left"
            label="Small icon button"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Medium (35px)</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="chevron-left"
            label="Medium icon button"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Large (43px)</span>
          <storybook-button
            shape="icon-only"
            size="lg"
            variant="outline"
            iconName="chevron-left"
            label="Large icon button"
          ></storybook-button>
        </div>
      </div>
    `,
  }),
};

// Icon-only showcase by state
export const IconOnlyAllStates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; padding: 24px;">
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Default</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="outline"
            state="default"
            iconName="chevron-left"
            label="Default state"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Hover</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="outline"
            state="hover"
            iconName="chevron-left"
            label="Hover state"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Active</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="outline"
            state="active"
            iconName="chevron-left"
            label="Active state"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Focus</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="outline"
            state="focus"
            iconName="chevron-left"
            label="Focus state"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Disabled</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="outline"
            state="disabled"
            iconName="chevron-left"
            label="Disabled state"
          ></storybook-button>
        </div>
      </div>
    `,
  }),
};

// Icon-only showcase with all icon types
export const IconOnlyAllIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; padding: 24px;">
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Chevron Left</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="chevron-left"
            label="Previous"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Chevron Right</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="chevron-right"
            label="Next"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Chevron Up</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="chevron-up"
            label="Scroll up"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Chevron Down</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="chevron-down"
            label="Scroll down"
          ></storybook-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Check</span>
          <storybook-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="check"
            label="Confirm"
          ></storybook-button>
        </div>
      </div>
    `,
  }),
};

// Complete showcase
export const AllSizesDefault: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <storybook-button size="sm" variant="default" label="Small"></storybook-button>
        <storybook-button size="md" variant="default" label="Medium"></storybook-button>
        <storybook-button size="lg" variant="default" label="Large"></storybook-button>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <storybook-button variant="default" label="Default"></storybook-button>
        <storybook-button variant="secondary" label="Secondary"></storybook-button>
        <storybook-button variant="outline" label="Outline"></storybook-button>
        <storybook-button variant="ghost" label="Ghost"></storybook-button>
        <storybook-button variant="link" label="Link"></storybook-button>
        <storybook-button variant="destructive" label="Destructive"></storybook-button>
      </div>
    `,
  }),
};

export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <storybook-button state="default" label="Default"></storybook-button>
        <storybook-button state="hover" label="Hover"></storybook-button>
        <storybook-button state="active" label="Active"></storybook-button>
        <storybook-button state="focus" label="Focus"></storybook-button>
        <storybook-button state="disabled" label="Disabled"></storybook-button>
      </div>
    `,
  }),
};

export const AllShapes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <storybook-button shape="rectangular" label="Rectangular"></storybook-button>
        <storybook-button shape="pill" label="Pill"></storybook-button>
        <storybook-button shape="icon" [icon]="true" label="Icon"></storybook-button>
        <storybook-button shape="icon-text" [icon]="true" label="Icon+Text"></storybook-button>
        <storybook-button shape="icon-only" iconName="chevron-left" label="Icon Only"></storybook-button>
      </div>
    `,
  }),
};

// Complete design system showcase
export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px;">
        <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Button Component Library</h2>
        
        <section style="margin-bottom: 40px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Sizes (Rectangular)</h3>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Small:</span>
            <storybook-button size="sm" variant="default" label="Boton"></storybook-button>
            <storybook-button size="sm" variant="secondary" label="Boton"></storybook-button>
            <storybook-button size="sm" variant="outline" label="Boton"></storybook-button>
            <storybook-button size="sm" variant="ghost" label="Boton"></storybook-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Medium:</span>
            <storybook-button size="md" variant="default" label="Boton"></storybook-button>
            <storybook-button size="md" variant="secondary" label="Boton"></storybook-button>
            <storybook-button size="md" variant="outline" label="Boton"></storybook-button>
            <storybook-button size="md" variant="ghost" label="Boton"></storybook-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; font-size: 14px; color: #666;">Large:</span>
            <storybook-button size="lg" variant="default" label="Boton"></storybook-button>
            <storybook-button size="lg" variant="secondary" label="Boton"></storybook-button>
            <storybook-button size="lg" variant="outline" label="Boton"></storybook-button>
            <storybook-button size="lg" variant="ghost" label="Boton"></storybook-button>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">States</h3>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Default:</span>
            <storybook-button state="default" label="Boton"></storybook-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Hover:</span>
            <storybook-button state="hover" label="Boton"></storybook-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Active:</span>
            <storybook-button state="active" label="Boton"></storybook-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Focus:</span>
            <storybook-button state="focus" label="Boton"></storybook-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; font-size: 14px; color: #666;">Disabled:</span>
            <storybook-button state="disabled" label="Boton"></storybook-button>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Pill Shape</h3>
          <div style="display: flex; gap: 16px; align-items: center;">
            <storybook-button shape="pill" variant="default" label="Boton"></storybook-button>
            <storybook-button shape="pill" variant="secondary" label="Boton"></storybook-button>
            <storybook-button shape="pill" variant="outline" label="Boton"></storybook-button>
            <storybook-button shape="pill" variant="ghost" label="Boton"></storybook-button>
            <storybook-button shape="pill" variant="destructive" label="Boton"></storybook-button>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">With Icons</h3>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Icon Only:</span>
            <storybook-button size="sm" shape="icon" [icon]="true" variant="default"></storybook-button>
            <storybook-button size="md" shape="icon" [icon]="true" variant="default"></storybook-button>
            <storybook-button size="lg" shape="icon" [icon]="true" variant="default"></storybook-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; font-size: 14px; color: #666;">With Text:</span>
            <storybook-button [icon]="true" iconPosition="left" label="Boton"></storybook-button>
            <storybook-button [icon]="true" iconPosition="right" variant="secondary" label="Boton"></storybook-button>
            <storybook-button [icon]="true" iconPosition="left" variant="outline" label="Boton"></storybook-button>
            <storybook-button [icon]="true" iconPosition="left" variant="ghost" label="Boton"></storybook-button>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Icon-Only Circular Buttons</h3>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Variants:</span>
            <storybook-button shape="icon-only" size="md" variant="outline" iconName="chevron-left" label="Outline"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="default" iconName="chevron-left" label="Default"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="secondary" iconName="chevron-left" label="Secondary"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="ghost" iconName="chevron-left" label="Ghost"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="link" iconName="chevron-left" label="Link"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="destructive" iconName="chevron-left" label="Destructive"></storybook-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Sizes:</span>
            <storybook-button shape="icon-only" size="sm" variant="outline" iconName="chevron-left" label="Small"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="outline" iconName="chevron-left" label="Medium"></storybook-button>
            <storybook-button shape="icon-only" size="lg" variant="outline" iconName="chevron-left" label="Large"></storybook-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
            <span style="width: 80px; font-size: 14px; color: #666;">States:</span>
            <storybook-button shape="icon-only" size="md" variant="outline" state="default" iconName="chevron-left" label="Default"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="outline" state="hover" iconName="chevron-left" label="Hover"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="outline" state="active" iconName="chevron-left" label="Active"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="outline" state="focus" iconName="chevron-left" label="Focus"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="outline" state="disabled" iconName="chevron-left" label="Disabled"></storybook-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; font-size: 14px; color: #666;">Icons:</span>
            <storybook-button shape="icon-only" size="md" variant="outline" iconName="chevron-left" label="Left"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="outline" iconName="chevron-right" label="Right"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="outline" iconName="chevron-up" label="Up"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="outline" iconName="chevron-down" label="Down"></storybook-button>
            <storybook-button shape="icon-only" size="md" variant="outline" iconName="check" label="Check"></storybook-button>
          </div>
        </section>
      </div>
    `,
  }),
};
