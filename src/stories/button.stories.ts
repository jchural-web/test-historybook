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

// ============================================================
// API CATEGORY STORIES (One per category)
// ============================================================

/**
 * All available button variants: default, secondary, outline, ghost, link, and destructive.
 * These are the core visual styles available for the button component.
 */
export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
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

/**
 * Button sizes: small (sm), medium (md), and large (lg).
 * Demonstrates all available sizes using the default variant.
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <bsg-button size="sm" variant="default" label="Small"></bsg-button>
        <bsg-button size="md" variant="default" label="Medium"></bsg-button>
        <bsg-button size="lg" variant="default" label="Large"></bsg-button>
      </div>
    `,
  }),
};

/**
 * Button states: default, hover, active, focus, and disabled.
 * Shows the visual appearance of buttons in different interaction states.
 */
export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <bsg-button state="default" label="Default"></bsg-button>
        <bsg-button state="hover" label="Hover"></bsg-button>
        <bsg-button state="active" label="Active"></bsg-button>
        <bsg-button state="focus" label="Focus"></bsg-button>
        <bsg-button state="disabled" label="Disabled"></bsg-button>
      </div>
    `,
  }),
};

/**
 * Button shapes: rectangular and pill.
 * Demonstrates the available shape options for buttons.
 */
export const Shapes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
        <bsg-button shape="rectangular" label="Rectangular"></bsg-button>
        <bsg-button shape="pill" label="Pill"></bsg-button>
      </div>
    `,
  }),
};

// ============================================================
// EXAMPLES SECTION
// ============================================================

/**
 * Icon-only buttons for focused actions.
 * Useful for navigation, controls, and compact UI elements.
 * Shows different icons and variants.
 */
export const IconOnly: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px;">
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #666;">Different Icons</h4>
          <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #999;">Chevron Left</span>
              <bsg-button shape="icon-only" variant="outline" iconName="chevron-left" label="Previous"></bsg-button>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #999;">Chevron Right</span>
              <bsg-button shape="icon-only" variant="outline" iconName="chevron-right" label="Next"></bsg-button>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #999;">Chevron Up</span>
              <bsg-button shape="icon-only" variant="outline" iconName="chevron-up" label="Up"></bsg-button>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #999;">Chevron Down</span>
              <bsg-button shape="icon-only" variant="outline" iconName="chevron-down" label="Down"></bsg-button>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
              <span style="font-size: 12px; color: #999;">Check</span>
              <bsg-button shape="icon-only" variant="outline" iconName="check" label="Confirm"></bsg-button>
            </div>
          </div>
        </div>

        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #666;">Sizes</h4>
          <div style="display: flex; gap: 16px; align-items: center;">
            <bsg-button shape="icon-only" size="sm" variant="outline" iconName="chevron-left" label="Small"></bsg-button>
            <bsg-button shape="icon-only" size="md" variant="outline" iconName="chevron-left" label="Medium"></bsg-button>
            <bsg-button shape="icon-only" size="lg" variant="outline" iconName="chevron-left" label="Large"></bsg-button>
          </div>
        </div>

        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #666;">Variants</h4>
          <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
            <bsg-button shape="icon-only" variant="default" iconName="chevron-left" label="Default"></bsg-button>
            <bsg-button shape="icon-only" variant="secondary" iconName="chevron-left" label="Secondary"></bsg-button>
            <bsg-button shape="icon-only" variant="outline" iconName="chevron-left" label="Outline"></bsg-button>
            <bsg-button shape="icon-only" variant="ghost" iconName="chevron-left" label="Ghost"></bsg-button>
            <bsg-button shape="icon-only" variant="link" iconName="chevron-left" label="Link"></bsg-button>
            <bsg-button shape="icon-only" variant="destructive" iconName="chevron-left" label="Delete"></bsg-button>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Button with icon positioned on the left side of the text.
 * Common use case for action buttons with visual indicators.
 */
export const WithLeftIcon: Story = {
  args: {
    shape: 'icon-text',
    icon: true,
    iconPosition: 'left',
    label: 'Boton',
    variant: 'default',
  },
};

/**
 * Button with icon positioned on the right side of the text.
 * Useful for buttons indicating navigation or expansion.
 */
export const WithRightIcon: Story = {
  args: {
    shape: 'icon-text',
    icon: true,
    iconPosition: 'right',
    label: 'Boton',
    variant: 'default',
  },
};

/**
 * Link-style button that appears as a hyperlink.
 * Used for secondary actions or navigation without emphasis.
 */
export const LinkButton: Story = {
  args: {
    variant: 'link',
    label: 'Link Button',
  },
};

// ============================================================
// DESIGN SYSTEM SHOWCASE (Comprehensive overview)
// ============================================================

/**
 * Complete design system showcase featuring all button variants,
 * sizes, states, shapes, and icon configurations.
 * Use this for documentation and design system reference.
 */
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
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Shapes</h3>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; font-size: 14px; color: #666;">Rectangular:</span>
            <bsg-button shape="rectangular" label="Rectangular"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-top: 8px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Pill:</span>
            <bsg-button shape="pill" label="Pill"></bsg-button>
          </div>
        </section>

        <section style="margin-bottom: 40px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">With Icons</h3>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Left Icon:</span>
            <bsg-button [icon]="true" iconPosition="left" label="Boton"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
            <span style="width: 80px; font-size: 14px; color: #666;">Right Icon:</span>
            <bsg-button [icon]="true" iconPosition="right" label="Boton"></bsg-button>
          </div>
          <div style="display: flex; gap: 16px; align-items: center;">
            <span style="width: 80px; font-size: 14px; color: #666;">Icon Only:</span>
            <bsg-button size="sm" shape="icon" [icon]="true"></bsg-button>
            <bsg-button size="md" shape="icon" [icon]="true"></bsg-button>
            <bsg-button size="lg" shape="icon" [icon]="true"></bsg-button>
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
