import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Example/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'focus', 'disabled', 'error'],
      description: 'Current state of the input',
    },
    icon: {
      control: 'select',
      options: ['none', 'leading'],
      description: 'Icon position (none or leading)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
  },
  args: { 
    placeholder: 'Ingresa información',
    value: '',
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

// Default state examples (no icon)
export const SmallDefault: Story = {
  args: {
    size: 'sm',
    state: 'default',
    icon: 'none',
  },
};

export const MediumDefault: Story = {
  args: {
    size: 'md',
    state: 'default',
    icon: 'none',
  },
};

export const LargeDefault: Story = {
  args: {
    size: 'lg',
    state: 'default',
    icon: 'none',
  },
};

// Hover state examples
export const SmallHover: Story = {
  args: {
    size: 'sm',
    state: 'hover',
    icon: 'none',
  },
};

export const MediumHover: Story = {
  args: {
    size: 'md',
    state: 'hover',
    icon: 'none',
  },
};

export const LargeHover: Story = {
  args: {
    size: 'lg',
    state: 'hover',
    icon: 'none',
  },
};

// Focus state examples
export const SmallFocus: Story = {
  args: {
    size: 'sm',
    state: 'focus',
    icon: 'none',
  },
};

export const MediumFocus: Story = {
  args: {
    size: 'md',
    state: 'focus',
    icon: 'none',
  },
};

export const LargeFocus: Story = {
  args: {
    size: 'lg',
    state: 'focus',
    icon: 'none',
  },
};

// Disabled state examples
export const SmallDisabled: Story = {
  args: {
    size: 'sm',
    state: 'disabled',
    icon: 'none',
  },
};

export const MediumDisabled: Story = {
  args: {
    size: 'md',
    state: 'disabled',
    icon: 'none',
  },
};

export const LargeDisabled: Story = {
  args: {
    size: 'lg',
    state: 'disabled',
    icon: 'none',
  },
};

// Error state examples
export const SmallError: Story = {
  args: {
    size: 'sm',
    state: 'error',
    icon: 'none',
  },
};

export const MediumError: Story = {
  args: {
    size: 'md',
    state: 'error',
    icon: 'none',
  },
};

export const LargeError: Story = {
  args: {
    size: 'lg',
    state: 'error',
    icon: 'none',
  },
};

// With icon - Default state
export const SmallWithIconDefault: Story = {
  args: {
    size: 'sm',
    state: 'default',
    icon: 'leading',
  },
};

export const MediumWithIconDefault: Story = {
  args: {
    size: 'md',
    state: 'default',
    icon: 'leading',
  },
};

export const LargeWithIconDefault: Story = {
  args: {
    size: 'lg',
    state: 'default',
    icon: 'leading',
  },
};

// With icon - Hover state
export const SmallWithIconHover: Story = {
  args: {
    size: 'sm',
    state: 'hover',
    icon: 'leading',
  },
};

export const MediumWithIconHover: Story = {
  args: {
    size: 'md',
    state: 'hover',
    icon: 'leading',
  },
};

export const LargeWithIconHover: Story = {
  args: {
    size: 'lg',
    state: 'hover',
    icon: 'leading',
  },
};

// With icon - Focus state
export const SmallWithIconFocus: Story = {
  args: {
    size: 'sm',
    state: 'focus',
    icon: 'leading',
  },
};

export const MediumWithIconFocus: Story = {
  args: {
    size: 'md',
    state: 'focus',
    icon: 'leading',
  },
};

export const LargeWithIconFocus: Story = {
  args: {
    size: 'lg',
    state: 'focus',
    icon: 'leading',
  },
};

// With icon - Disabled state
export const SmallWithIconDisabled: Story = {
  args: {
    size: 'sm',
    state: 'disabled',
    icon: 'leading',
  },
};

export const MediumWithIconDisabled: Story = {
  args: {
    size: 'md',
    state: 'disabled',
    icon: 'leading',
  },
};

export const LargeWithIconDisabled: Story = {
  args: {
    size: 'lg',
    state: 'disabled',
    icon: 'leading',
  },
};

// With icon - Error state
export const SmallWithIconError: Story = {
  args: {
    size: 'sm',
    state: 'error',
    icon: 'leading',
  },
};

export const MediumWithIconError: Story = {
  args: {
    size: 'md',
    state: 'error',
    icon: 'leading',
  },
};

export const LargeWithIconError: Story = {
  args: {
    size: 'lg',
    state: 'error',
    icon: 'leading',
  },
};

// Showcase stories
export const AllSizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Sizes - Default State</h3>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 60px; font-size: 14px; color: #666;">Small:</span>
          <storybook-input size="sm" state="default" icon="none"></storybook-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 60px; font-size: 14px; color: #666;">Medium:</span>
          <storybook-input size="md" state="default" icon="none"></storybook-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 60px; font-size: 14px; color: #666;">Large:</span>
          <storybook-input size="lg" state="default" icon="none"></storybook-input>
        </div>
      </div>
    `,
  }),
};

export const AllStates: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">All States - Medium Size</h3>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Default:</span>
          <storybook-input size="md" state="default" icon="none"></storybook-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Hover:</span>
          <storybook-input size="md" state="hover" icon="none"></storybook-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Focus:</span>
          <storybook-input size="md" state="focus" icon="none"></storybook-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Disabled:</span>
          <storybook-input size="md" state="disabled" icon="none"></storybook-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Error:</span>
          <storybook-input size="md" state="error" icon="none"></storybook-input>
        </div>
      </div>
    `,
  }),
};

export const WithIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">With Leading Icon</h3>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Small:</span>
          <storybook-input size="sm" state="default" icon="leading"></storybook-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Medium:</span>
          <storybook-input size="md" state="default" icon="leading"></storybook-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Large:</span>
          <storybook-input size="lg" state="default" icon="leading"></storybook-input>
        </div>
      </div>
    `,
  }),
};

export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1200px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Input Component Library</h2>
        
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Without Icon</h3>
          
          <div style="margin-bottom: 32px;">
            <h4 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; color: #202020;">Sizes</h4>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666;">sm:</span>
              <storybook-input size="sm" state="default" icon="none"></storybook-input>
              <storybook-input size="sm" state="hover" icon="none"></storybook-input>
              <storybook-input size="sm" state="focus" icon="none"></storybook-input>
              <storybook-input size="sm" state="disabled" icon="none"></storybook-input>
              <storybook-input size="sm" state="error" icon="none"></storybook-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666;">md:</span>
              <storybook-input size="md" state="default" icon="none"></storybook-input>
              <storybook-input size="md" state="hover" icon="none"></storybook-input>
              <storybook-input size="md" state="focus" icon="none"></storybook-input>
              <storybook-input size="md" state="disabled" icon="none"></storybook-input>
              <storybook-input size="md" state="error" icon="none"></storybook-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 80px; font-size: 14px; color: #666;">lg:</span>
              <storybook-input size="lg" state="default" icon="none"></storybook-input>
              <storybook-input size="lg" state="hover" icon="none"></storybook-input>
              <storybook-input size="lg" state="focus" icon="none"></storybook-input>
              <storybook-input size="lg" state="disabled" icon="none"></storybook-input>
              <storybook-input size="lg" state="error" icon="none"></storybook-input>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">With Leading Icon</h3>
          
          <div style="margin-bottom: 32px;">
            <h4 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; color: #202020;">Sizes</h4>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666;">sm:</span>
              <storybook-input size="sm" state="default" icon="leading"></storybook-input>
              <storybook-input size="sm" state="hover" icon="leading"></storybook-input>
              <storybook-input size="sm" state="focus" icon="leading"></storybook-input>
              <storybook-input size="sm" state="disabled" icon="leading"></storybook-input>
              <storybook-input size="sm" state="error" icon="leading"></storybook-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666;">md:</span>
              <storybook-input size="md" state="default" icon="leading"></storybook-input>
              <storybook-input size="md" state="hover" icon="leading"></storybook-input>
              <storybook-input size="md" state="focus" icon="leading"></storybook-input>
              <storybook-input size="md" state="disabled" icon="leading"></storybook-input>
              <storybook-input size="md" state="error" icon="leading"></storybook-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 80px; font-size: 14px; color: #666;">lg:</span>
              <storybook-input size="lg" state="default" icon="leading"></storybook-input>
              <storybook-input size="lg" state="hover" icon="leading"></storybook-input>
              <storybook-input size="lg" state="focus" icon="leading"></storybook-input>
              <storybook-input size="lg" state="disabled" icon="leading"></storybook-input>
              <storybook-input size="lg" state="error" icon="leading"></storybook-input>
            </div>
          </div>
        </section>

        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">State Reference</h3>
          <div style="display: flex; gap: 24px; font-size: 14px;">
            <span style="color: #666;">Default</span>
            <span style="color: #666;">Hover</span>
            <span style="color: #666;">Focus</span>
            <span style="color: #666;">Disabled</span>
            <span style="color: #666;">Error</span>
          </div>
        </section>
      </div>
    `,
  }),
};
