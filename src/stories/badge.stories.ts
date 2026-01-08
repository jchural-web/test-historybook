import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

const meta: Meta<BadgeComponent> = {
  title: 'Example/Badge',
  component: BadgeComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'success'],
      description: 'Badge variant type',
    },
    size: {
      control: 'select',
      options: ['dot', 'default', 'large'],
      description: 'Badge size',
    },
    layout: {
      control: 'select',
      options: ['text', 'text-icon'],
      description: 'Badge layout (text-only or with icon)',
    },
    value: {
      control: 'text',
      description: 'Badge value (for default and large sizes)',
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    layout: 'text',
    value: '10',
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

// ===========================
// Dot Size (all variants)
// ===========================

export const DotDefault: Story = {
  args: {
    variant: 'default',
    size: 'dot',
  },
};

export const DotSecondary: Story = {
  args: {
    variant: 'secondary',
    size: 'dot',
  },
};

export const DotDestructive: Story = {
  args: {
    variant: 'destructive',
    size: 'dot',
  },
};

export const DotOutline: Story = {
  args: {
    variant: 'outline',
    size: 'dot',
  },
};

export const DotSuccess: Story = {
  args: {
    variant: 'success',
    size: 'dot',
  },
};

// ===========================
// Default Size (all variants)
// ===========================

export const DefaultSize: Story = {
  args: {
    variant: 'default',
    size: 'default',
    value: '10',
  },
};

export const DefaultSecondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    value: '10',
  },
};

export const DefaultDestructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    value: '10',
  },
};

export const DefaultOutline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    value: '10',
  },
};

export const DefaultSuccess: Story = {
  args: {
    variant: 'success',
    size: 'default',
    value: '10',
  },
};

// ===========================
// Large Size (all variants)
// ===========================

export const LargeDefault: Story = {
  args: {
    variant: 'default',
    size: 'large',
    value: '99+',
  },
};

export const LargeSecondary: Story = {
  args: {
    variant: 'secondary',
    size: 'large',
    value: '99+',
  },
};

export const LargeDestructive: Story = {
  args: {
    variant: 'destructive',
    size: 'large',
    value: '99+',
  },
};

export const LargeOutline: Story = {
  args: {
    variant: 'outline',
    size: 'large',
    value: '99+',
  },
};

export const LargeSuccess: Story = {
  args: {
    variant: 'success',
    size: 'large',
    value: '99+',
  },
};

// ===========================
// Text Icon Layout (all variants)
// ===========================

export const TextIconDefault: Story = {
  args: {
    variant: 'default',
    size: 'default',
    layout: 'text-icon',
    value: 'Etiqueta 2',
  },
};

export const TextIconSecondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
    layout: 'text-icon',
    value: 'Etiqueta 2',
  },
};

export const TextIconDestructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
    layout: 'text-icon',
    value: 'Etiqueta 2',
  },
};

export const TextIconOutline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
    layout: 'text-icon',
    value: 'Etiqueta 2',
  },
};

export const TextIconSuccess: Story = {
  args: {
    variant: 'success',
    size: 'default',
    layout: 'text-icon',
    value: 'Etiqueta 2',
  },
};

// ===========================
// Design System Showcase
// ===========================

export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1100px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Badge Component Library</h2>

        <!-- Grid Layout matching Figma -->
        <div style="display: grid; grid-template-columns: 100px repeat(5, 150px); gap: 20px; align-items: center; margin-bottom: 48px;">

          <!-- Headers -->
          <div></div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Default</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Secondary</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Destructive</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Outline</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Success</div>

          <!-- Text Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Text</div>
          <div><storybook-badge variant="default" size="default" layout="text-icon" value="Etiqueta 2"></storybook-badge></div>
          <div><storybook-badge variant="secondary" size="default" layout="text-icon" value="Etiqueta 2"></storybook-badge></div>
          <div><storybook-badge variant="destructive" size="default" layout="text-icon" value="Etiqueta 2"></storybook-badge></div>
          <div><storybook-badge variant="outline" size="default" layout="text-icon" value="Etiqueta 3"></storybook-badge></div>
          <div><storybook-badge variant="success" size="default" layout="text-icon" value="Etiqueta 2"></storybook-badge></div>

          <!-- Text Icon Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Text Icon</div>
          <div><storybook-badge variant="default" size="default" layout="text-icon" value="Etiqueta 2"></storybook-badge></div>
          <div><storybook-badge variant="secondary" size="default" layout="text-icon" value="Etiqueta 2"></storybook-badge></div>
          <div><storybook-badge variant="destructive" size="default" layout="text-icon" value="Etiqueta 2"></storybook-badge></div>
          <div><storybook-badge variant="outline" size="default" layout="text-icon" value="Etiqueta 2"></storybook-badge></div>
          <div><storybook-badge variant="success" size="default" layout="text-icon" value="Etiqueta 2"></storybook-badge></div>
        </div>

        <!-- Legacy Small Badges -->
        <h3 style="margin: 48px 0 24px 0; font-size: 20px; font-weight: 600;">Legacy Badge Sizes</h3>
        <div style="display: grid; grid-template-columns: 100px repeat(5, 150px); gap: 20px; align-items: center; margin-bottom: 48px;">

          <!-- Headers -->
          <div></div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Default</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Secondary</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Destructive</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Outline</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Success</div>

          <!-- Dot Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Dot</div>
          <div><storybook-badge variant="default" size="dot"></storybook-badge></div>
          <div><storybook-badge variant="secondary" size="dot"></storybook-badge></div>
          <div><storybook-badge variant="destructive" size="dot"></storybook-badge></div>
          <div><storybook-badge variant="outline" size="dot"></storybook-badge></div>
          <div><storybook-badge variant="success" size="dot"></storybook-badge></div>

          <!-- Small Text Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Small</div>
          <div><storybook-badge variant="default" size="default" layout="text" value="10"></storybook-badge></div>
          <div><storybook-badge variant="secondary" size="default" layout="text" value="10"></storybook-badge></div>
          <div><storybook-badge variant="destructive" size="default" layout="text" value="10"></storybook-badge></div>
          <div><storybook-badge variant="outline" size="default" layout="text" value="10"></storybook-badge></div>
          <div><storybook-badge variant="success" size="default" layout="text" value="10"></storybook-badge></div>

          <!-- Large Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Large</div>
          <div><storybook-badge variant="default" size="large" layout="text" value="99+"></storybook-badge></div>
          <div><storybook-badge variant="secondary" size="large" layout="text" value="99+"></storybook-badge></div>
          <div><storybook-badge variant="destructive" size="large" layout="text" value="99+"></storybook-badge></div>
          <div><storybook-badge variant="outline" size="large" layout="text" value="99+"></storybook-badge></div>
          <div><storybook-badge variant="success" size="large" layout="text" value="99+"></storybook-badge></div>
        </div>

        <!-- Design Specifications -->
        <section style="margin-top: 64px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          
          <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
            <p style="margin: 16px 0 8px 0;"><strong>Size: Dot</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Dimensions: 12×12px</li>
              <li>Shape: Circle (border-radius: 50%)</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Size: Default & Large</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Padding: 2px 8px</li>
              <li>Min Height: 15px</li>
              <li>Border Radius: 12.5px (pill shape)</li>
              <li>Font: Inter, 12px, 400 weight</li>
              <li>Line Height: 17px</li>
              <li>Letter Spacing: 0.05px</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Variant Colors:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Default:</strong> Background #7C3AED (Violet-600), Text White</li>
              <li><strong>Secondary:</strong> Background #2563EB (Blue-600), Text White</li>
              <li><strong>Destructive:</strong> Background #DC2626 (Red-600), Text White</li>
              <li><strong>Outline:</strong> Border #CBD5E1, Text #1E293B (neutral-800)</li>
              <li><strong>Success:</strong> Background #16A34A (Green-600), Text White</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Behavior:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Non-interactive (pointer-events: none)</li>
              <li>Non-selectable (user-select: none)</li>
              <li>Centered content (vertical and horizontal)</li>
            </ul>
          </div>
        </section>
      </div>
    `,
  }),
};

// ===========================
// Usage Examples
// ===========================

export const UsageExamples: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 48px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Badge Usage Examples</h3>
        
        <!-- Notification Badge on Button -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Notification Badge on Button</h4>
          <button style="position: relative; padding: 12px 24px; background: #7C3AED; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500;">
            Messages
            <span style="position: absolute; top: -6px; right: -6px;">
              <storybook-badge variant="destructive" size="default" value="5"></storybook-badge>
            </span>
          </button>
        </div>
        
        <!-- Status Indicator -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Online Status Indicator</h4>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: #E2E8F0; position: relative;">
              <span style="position: absolute; bottom: 0; right: 0;">
                <storybook-badge variant="success" size="dot"></storybook-badge>
              </span>
            </div>
            <span style="font-size: 14px;">User is online</span>
          </div>
        </div>
        
        <!-- Category Tags -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Category Tags</h4>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <storybook-badge variant="default" size="large" value="New"></storybook-badge>
            <storybook-badge variant="secondary" size="large" value="Featured"></storybook-badge>
            <storybook-badge variant="success" size="large" value="Active"></storybook-badge>
            <storybook-badge variant="outline" size="large" value="Draft"></storybook-badge>
          </div>
        </div>
        
        <!-- Counter Badge -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Notification Counter</h4>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 14px;">Inbox</span>
              <storybook-badge variant="default" size="default" value="12"></storybook-badge>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 14px;">Alerts</span>
              <storybook-badge variant="destructive" size="large" value="99+"></storybook-badge>
            </div>
          </div>
        </div>
        
        <!-- Menu Items with Badges -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Menu Items</h4>
          <div style="display: flex; flex-direction: column; gap: 8px; max-width: 250px;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-radius: 6px; background: #F8FAFC;">
              <span style="font-size: 14px;">Notifications</span>
              <storybook-badge variant="destructive" size="default" value="3"></storybook-badge>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-radius: 6px; background: #F8FAFC;">
              <span style="font-size: 14px;">Messages</span>
              <storybook-badge variant="secondary" size="default" value="8"></storybook-badge>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-radius: 6px; background: #F8FAFC;">
              <span style="font-size: 14px;">Tasks</span>
              <storybook-badge variant="success" size="default" value="24"></storybook-badge>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

// ===========================
// Interactive Playground
// ===========================

export const InteractivePlayground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive Badge Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use the controls panel to adjust variant, size, and value
        </p>
        
        <div style="display: flex; align-items: center; justify-content: center; min-height: 200px; padding: 40px; background: #F8FAFC; border-radius: 8px;">
          <storybook-badge 
            [variant]="variant"
            [size]="size"
            [value]="value">
          </storybook-badge>
        </div>
      </div>
    `,
  }),
  args: {
    variant: 'default',
    size: 'default',
    value: '10',
  },
};
