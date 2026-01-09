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
          <bsg-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="chevron-left"
            label="Outline button"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Default</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="default"
            iconName="chevron-left"
            label="Default button"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Secondary</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="secondary"
            iconName="chevron-left"
            label="Secondary button"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Ghost</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="ghost"
            iconName="chevron-left"
            label="Ghost button"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Link</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="link"
            iconName="chevron-left"
            label="Link button"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Destructive</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="destructive"
            iconName="chevron-left"
            label="Destructive button"
          ></bsg-button>
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
          <bsg-button
            shape="icon-only"
            size="sm"
            variant="outline"
            iconName="chevron-left"
            label="Small icon button"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Medium (35px)</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="chevron-left"
            label="Medium icon button"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Large (43px)</span>
          <bsg-button
            shape="icon-only"
            size="lg"
            variant="outline"
            iconName="chevron-left"
            label="Large icon button"
          ></bsg-button>
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
          <bsg-button
            shape="icon-only"
            size="md"
            variant="outline"
            state="default"
            iconName="chevron-left"
            label="Default state"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Hover</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="outline"
            state="hover"
            iconName="chevron-left"
            label="Hover state"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Active</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="outline"
            state="active"
            iconName="chevron-left"
            label="Active state"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Focus</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="outline"
            state="focus"
            iconName="chevron-left"
            label="Focus state"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Disabled</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="outline"
            state="disabled"
            iconName="chevron-left"
            label="Disabled state"
          ></bsg-button>
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
          <bsg-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="chevron-left"
            label="Previous"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Chevron Right</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="chevron-right"
            label="Next"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Chevron Up</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="chevron-up"
            label="Scroll up"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Chevron Down</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="chevron-down"
            label="Scroll down"
          ></bsg-button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-size: 12px; color: #666; font-family: Roboto, sans-serif;">Check</span>
          <bsg-button
            shape="icon-only"
            size="md"
            variant="outline"
            iconName="check"
            label="Confirm"
          ></bsg-button>
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
        <bsg-button size="sm" variant="default" label="Small"></bsg-button>
        <bsg-button size="md" variant="default" label="Medium"></bsg-button>
        <bsg-button size="lg" variant="default" label="Large"></bsg-button>
      </div>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bsg-button variant="default" label="Default"></bsg-button>
        <bsg-button variant="secondary" label="Secondary"></bsg-button>
        <bsg-button variant="outline" label="Outline"></bsg-button>
        <bsg-button variant="ghost" label="Ghost"></bsg-button>
        <bsg-button variant="link" label="Link"></bsg-button>
        <bsg-button variant="destructive" label="Destructive"></bsg-button>
      </div>
    `,
  }),
};

export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bsg-button state="default" label="Default"></bsg-button>
        <bsg-button state="hover" label="Hover"></bsg-button>
        <bsg-button state="active" label="Active"></bsg-button>
        <bsg-button state="focus" label="Focus"></bsg-button>
        <bsg-button state="disabled" label="Disabled"></bsg-button>
      </div>
    `,
  }),
};

export const AllShapes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bsg-button shape="rectangular" label="Rectangular"></bsg-button>
        <bsg-button shape="pill" label="Pill"></bsg-button>
        <bsg-button shape="icon" [icon]="true" label="Icon"></bsg-button>
        <bsg-button shape="icon-text" [icon]="true" label="Icon+Text"></bsg-button>
        <bsg-button shape="icon-only" iconName="chevron-left" label="Icon Only"></bsg-button>
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
            <bsg-button size="sm" variant="default" label="Boton"></bsg-button>
            <bsg-button size="sm" variant="secondary" label="Boton"></bsg-button>
            <bsg-button size="sm" variant="outline" label="Boton"></bsg-button>
            <bsg-button size="sm" variant="ghost" label="Boton"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Medium:</span>
            <bsg-button size="md" variant="default" label="Boton"></bsg-button>
            <bsg-button size="md" variant="secondary" label="Boton"></bsg-button>
            <bsg-button size="md" variant="outline" label="Boton"></bsg-button>
            <bsg-button size="md" variant="ghost" label="Boton"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; font-size: 14px; color: #666;">Large:</span>
            <bsg-button size="lg" variant="default" label="Boton"></bsg-button>
            <bsg-button size="lg" variant="secondary" label="Boton"></bsg-button>
            <bsg-button size="lg" variant="outline" label="Boton"></bsg-button>
            <bsg-button size="lg" variant="ghost" label="Boton"></bsg-button>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">States</h3>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Default:</span>
            <bsg-button state="default" label="Boton"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Hover:</span>
            <bsg-button state="hover" label="Boton"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Active:</span>
            <bsg-button state="active" label="Boton"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Focus:</span>
            <bsg-button state="focus" label="Boton"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; font-size: 14px; color: #666;">Disabled:</span>
            <bsg-button state="disabled" label="Boton"></bsg-button>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Pill Shape</h3>
          <div style="display: flex; gap: 16px; align-items: center;">
            <bsg-button shape="pill" variant="default" label="Boton"></bsg-button>
            <bsg-button shape="pill" variant="secondary" label="Boton"></bsg-button>
            <bsg-button shape="pill" variant="outline" label="Boton"></bsg-button>
            <bsg-button shape="pill" variant="ghost" label="Boton"></bsg-button>
            <bsg-button shape="pill" variant="destructive" label="Boton"></bsg-button>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">With Icons</h3>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Icon Only:</span>
            <bsg-button size="sm" shape="icon" [icon]="true" variant="default"></bsg-button>
            <bsg-button size="md" shape="icon" [icon]="true" variant="default"></bsg-button>
            <bsg-button size="lg" shape="icon" [icon]="true" variant="default"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; font-size: 14px; color: #666;">With Text:</span>
            <bsg-button [icon]="true" iconPosition="left" label="Boton"></bsg-button>
            <bsg-button [icon]="true" iconPosition="right" variant="secondary" label="Boton"></bsg-button>
            <bsg-button [icon]="true" iconPosition="left" variant="outline" label="Boton"></bsg-button>
            <bsg-button [icon]="true" iconPosition="left" variant="ghost" label="Boton"></bsg-button>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Icon-Only Circular Buttons</h3>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Variants:</span>
            <bsg-button shape="icon-only" size="md" variant="outline" iconName="chevron-left" label="Outline"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="default" iconName="chevron-left" label="Default"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="secondary" iconName="chevron-left" label="Secondary"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="ghost" iconName="chevron-left" label="Ghost"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="link" iconName="chevron-left" label="Link"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="destructive" iconName="chevron-left" label="Destructive"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Sizes:</span>
            <bsg-button shape="icon-only" size="sm" variant="outline" iconName="chevron-left" label="Small"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="outline" iconName="chevron-left" label="Medium"></bsg-button>
            <bsg-button shape="icon-only" size="lg" variant="outline" iconName="chevron-left" label="Large"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
            <span style="width: 80px; font-size: 14px; color: #666;">States:</span>
            <bsg-button shape="icon-only" size="md" variant="outline" state="default" iconName="chevron-left" label="Default"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="outline" state="hover" iconName="chevron-left" label="Hover"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="outline" state="active" iconName="chevron-left" label="Active"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="outline" state="focus" iconName="chevron-left" label="Focus"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="outline" state="disabled" iconName="chevron-left" label="Disabled"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; font-size: 14px; color: #666;">Icons:</span>
            <bsg-button shape="icon-only" size="md" variant="outline" iconName="chevron-left" label="Left"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="outline" iconName="chevron-right" label="Right"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="outline" iconName="chevron-up" label="Up"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="outline" iconName="chevron-down" label="Down"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="outline" iconName="check" label="Check"></bsg-button>
          </div>
        </section>
      </div>
    `,
  }),
};
