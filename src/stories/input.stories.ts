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

// Default size variants (default state)
export const Small: Story = {
  args: {
    size: 'sm',
    state: 'default',
    icon: 'none',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    state: 'default',
    icon: 'none',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    state: 'default',
    icon: 'none',
  },
};

// With leading icon
export const SmallWithIcon: Story = {
  args: {
    size: 'sm',
    state: 'default',
    icon: 'leading',
  },
};

export const MediumWithIcon: Story = {
  args: {
    size: 'md',
    state: 'default',
    icon: 'leading',
  },
};

export const LargeWithIcon: Story = {
  args: {
    size: 'lg',
    state: 'default',
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
          <bsg-input size="sm" state="default" icon="none"></bsg-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 60px; font-size: 14px; color: #666;">Medium:</span>
          <bsg-input size="md" state="default" icon="none"></bsg-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 60px; font-size: 14px; color: #666;">Large:</span>
          <bsg-input size="lg" state="default" icon="none"></bsg-input>
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
          <bsg-input size="md" state="default" icon="none"></bsg-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Hover:</span>
          <bsg-input size="md" state="hover" icon="none"></bsg-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Focus:</span>
          <bsg-input size="md" state="focus" icon="none"></bsg-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Disabled:</span>
          <bsg-input size="md" state="disabled" icon="none"></bsg-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Error:</span>
          <bsg-input size="md" state="error" icon="none"></bsg-input>
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
          <bsg-input size="sm" state="default" icon="leading"></bsg-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Medium:</span>
          <bsg-input size="md" state="default" icon="leading"></bsg-input>
        </div>
        <div style="display: flex; gap: 16px; align-items: center;">
          <span style="width: 80px; font-size: 14px; color: #666;">Large:</span>
          <bsg-input size="lg" state="default" icon="leading"></bsg-input>
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
              <bsg-input size="sm" state="default" icon="none"></bsg-input>
              <bsg-input size="sm" state="hover" icon="none"></bsg-input>
              <bsg-input size="sm" state="focus" icon="none"></bsg-input>
              <bsg-input size="sm" state="disabled" icon="none"></bsg-input>
              <bsg-input size="sm" state="error" icon="none"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666;">md:</span>
              <bsg-input size="md" state="default" icon="none"></bsg-input>
              <bsg-input size="md" state="hover" icon="none"></bsg-input>
              <bsg-input size="md" state="focus" icon="none"></bsg-input>
              <bsg-input size="md" state="disabled" icon="none"></bsg-input>
              <bsg-input size="md" state="error" icon="none"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 80px; font-size: 14px; color: #666;">lg:</span>
              <bsg-input size="lg" state="default" icon="none"></bsg-input>
              <bsg-input size="lg" state="hover" icon="none"></bsg-input>
              <bsg-input size="lg" state="focus" icon="none"></bsg-input>
              <bsg-input size="lg" state="disabled" icon="none"></bsg-input>
              <bsg-input size="lg" state="error" icon="none"></bsg-input>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">With Leading Icon</h3>
          
          <div style="margin-bottom: 32px;">
            <h4 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; color: #202020;">Sizes</h4>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666;">sm:</span>
              <bsg-input size="sm" state="default" icon="leading"></bsg-input>
              <bsg-input size="sm" state="hover" icon="leading"></bsg-input>
              <bsg-input size="sm" state="focus" icon="leading"></bsg-input>
              <bsg-input size="sm" state="disabled" icon="leading"></bsg-input>
              <bsg-input size="sm" state="error" icon="leading"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 12px;">
              <span style="width: 80px; font-size: 14px; color: #666;">md:</span>
              <bsg-input size="md" state="default" icon="leading"></bsg-input>
              <bsg-input size="md" state="hover" icon="leading"></bsg-input>
              <bsg-input size="md" state="focus" icon="leading"></bsg-input>
              <bsg-input size="md" state="disabled" icon="leading"></bsg-input>
              <bsg-input size="md" state="error" icon="leading"></bsg-input>
            </div>
            <div style="display: flex; gap: 16px; align-items: center;">
              <span style="width: 80px; font-size: 14px; color: #666;">lg:</span>
              <bsg-input size="lg" state="default" icon="leading"></bsg-input>
              <bsg-input size="lg" state="hover" icon="leading"></bsg-input>
              <bsg-input size="lg" state="focus" icon="leading"></bsg-input>
              <bsg-input size="lg" state="disabled" icon="leading"></bsg-input>
              <bsg-input size="lg" state="error" icon="leading"></bsg-input>
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
