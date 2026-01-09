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
      description: 'Badge semantic variant',
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

// ============================================================
// API CATEGORY STORIES (One per axis)
// ============================================================

/**
 * All available badge variants: default, secondary, success, destructive, and outline.
 * Each variant represents a semantic color from the design system.
 */
export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
        <div style="text-align: center;">
          <bsg-badge variant="default" size="default" layout="text" value="Default"></bsg-badge>
          <div style="font-size: 12px; color: #64748B; margin-top: 8px;">Default</div>
        </div>
        <div style="text-align: center;">
          <bsg-badge variant="secondary" size="default" layout="text" value="Secondary"></bsg-badge>
          <div style="font-size: 12px; color: #64748B; margin-top: 8px;">Secondary</div>
        </div>
        <div style="text-align: center;">
          <bsg-badge variant="success" size="default" layout="text" value="Success"></bsg-badge>
          <div style="font-size: 12px; color: #64748B; margin-top: 8px;">Success</div>
        </div>
        <div style="text-align: center;">
          <bsg-badge variant="destructive" size="default" layout="text" value="Destructive"></bsg-badge>
          <div style="font-size: 12px; color: #64748B; margin-top: 8px;">Destructive</div>
        </div>
        <div style="text-align: center;">
          <bsg-badge variant="outline" size="default" layout="text" value="Outline"></bsg-badge>
          <div style="font-size: 12px; color: #64748B; margin-top: 8px;">Outline</div>
        </div>
      </div>
    `,
  }),
};

/**
 * Badge sizes: default and large.
 * Demonstrates the two available size options with consistent default variant.
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">
        <div style="text-align: center;">
          <bsg-badge variant="default" size="default" layout="text" value="Default"></bsg-badge>
          <div style="font-size: 12px; color: #64748B; margin-top: 8px;">Default Size</div>
        </div>
        <div style="text-align: center;">
          <bsg-badge variant="default" size="large" layout="text" value="Large"></bsg-badge>
          <div style="font-size: 12px; color: #64748B; margin-top: 8px;">Large Size</div>
        </div>
      </div>
    `,
  }),
};

/**
 * Badge content modes: dot (indicator), text (text-only), and text+icon.
 * Shows the different ways to display badge content.
 */
export const Modes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; align-items: center; gap: 32px; flex-wrap: wrap;">
        <div style="text-align: center;">
          <bsg-badge variant="default" size="dot"></bsg-badge>
          <div style="font-size: 12px; color: #64748B; margin-top: 8px;">Dot</div>
        </div>
        <div style="text-align: center;">
          <bsg-badge variant="default" size="default" layout="text" value="10"></bsg-badge>
          <div style="font-size: 12px; color: #64748B; margin-top: 8px;">Text</div>
        </div>
        <div style="text-align: center;">
          <bsg-badge variant="default" size="default" layout="text-icon" value="Etiqueta"></bsg-badge>
          <div style="font-size: 12px; color: #64748B; margin-top: 8px;">Text + Icon</div>
        </div>
      </div>
    `,
  }),
};

// ============================================================
// EXAMPLES SECTION
// ============================================================

/**
 * Common usage patterns and real-world examples of the Badge component.
 */
export const UsageExamples: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 48px; padding: 12px 0; font-family: Roboto, sans-serif;">
        
        <!-- Notification Badge on Button -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Notification Badge on Button</h4>
          <button style="position: relative; padding: 12px 24px; background: #7C3AED; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500;">
            Messages
            <span style="position: absolute; top: -6px; right: -6px;">
              <bsg-badge variant="destructive" size="default" value="5"></bsg-badge>
            </span>
          </button>
        </div>
        
        <!-- Status Indicator -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Online Status Indicator</h4>
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: #E2E8F0; position: relative;">
              <span style="position: absolute; bottom: 0; right: 0;">
                <bsg-badge variant="success" size="dot"></bsg-badge>
              </span>
            </div>
            <span style="font-size: 14px;">User is online</span>
          </div>
        </div>
        
        <!-- Category Tags -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Category Tags</h4>
          <div style="display: flex; gap: 8px; flex-wrap: wrap;">
            <bsg-badge variant="default" size="large" value="New"></bsg-badge>
            <bsg-badge variant="secondary" size="large" value="Featured"></bsg-badge>
            <bsg-badge variant="success" size="large" value="Active"></bsg-badge>
            <bsg-badge variant="outline" size="large" value="Draft"></bsg-badge>
          </div>
        </div>
        
        <!-- Counter Badge -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Notification Counter</h4>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 14px;">Inbox</span>
              <bsg-badge variant="default" size="default" value="12"></bsg-badge>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 14px;">Alerts</span>
              <bsg-badge variant="destructive" size="large" value="99+"></bsg-badge>
            </div>
          </div>
        </div>
        
        <!-- Menu Items with Badges -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Menu Items</h4>
          <div style="display: flex; flex-direction: column; gap: 8px; max-width: 250px;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-radius: 6px; background: #F8FAFC;">
              <span style="font-size: 14px;">Notifications</span>
              <bsg-badge variant="destructive" size="default" value="3"></bsg-badge>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-radius: 6px; background: #F8FAFC;">
              <span style="font-size: 14px;">Messages</span>
              <bsg-badge variant="secondary" size="default" value="8"></bsg-badge>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px; border-radius: 6px; background: #F8FAFC;">
              <span style="font-size: 14px;">Tasks</span>
              <bsg-badge variant="success" size="default" value="24"></bsg-badge>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

// ============================================================
// PLAYGROUND (Interactive)
// ============================================================

/**
 * Interactive playground for testing all badge configurations.
 * Use the controls to experiment with different variants, sizes, layouts, and content.
 */
export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive Badge Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use the controls panel to adjust variant, size, layout, and value
        </p>

        <div style="display: flex; align-items: center; justify-content: center; min-height: 200px; padding: 40px; background: #F8FAFC; border-radius: 8px;">
          <bsg-badge
            [variant]="variant"
            [size]="size"
            [layout]="layout"
            [value]="value">
          </bsg-badge>
        </div>

        <div style="margin-top: 32px; padding: 16px; background: #EFF6FF; border-radius: 8px; font-size: 13px; color: #1E40AF; line-height: 1.6;">
          <strong>Tips:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>Use <code>size="dot"</code> for status indicators</li>
            <li>Use <code>layout="text"</code> for counters (default and large)</li>
            <li>Use <code>layout="text-icon"</code> for tags with icons (Figma design)</li>
            <li>Pick a variant to match your semantic meaning (e.g., destructive for errors)</li>
          </ul>
        </div>
      </div>
    `,
  }),
  args: {
    variant: 'default',
    size: 'default',
    layout: 'text-icon',
    value: 'Etiqueta',
  },
};

// ============================================================
// SHOWCASE (Comprehensive reference)
// ============================================================

/**
 * Complete design system showcase featuring all badge variants, sizes,
 * modes, and design specifications for reference and documentation.
 */
export const Showcase: Story = {
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

          <!-- Dot Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Dot</div>
          <div><bsg-badge variant="default" size="dot"></bsg-badge></div>
          <div><bsg-badge variant="secondary" size="dot"></bsg-badge></div>
          <div><bsg-badge variant="destructive" size="dot"></bsg-badge></div>
          <div><bsg-badge variant="outline" size="dot"></bsg-badge></div>
          <div><bsg-badge variant="success" size="dot"></bsg-badge></div>

          <!-- Text Row (Default Size) -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Text</div>
          <div><bsg-badge variant="default" size="default" layout="text" value="10"></bsg-badge></div>
          <div><bsg-badge variant="secondary" size="default" layout="text" value="10"></bsg-badge></div>
          <div><bsg-badge variant="destructive" size="default" layout="text" value="10"></bsg-badge></div>
          <div><bsg-badge variant="outline" size="default" layout="text" value="10"></bsg-badge></div>
          <div><bsg-badge variant="success" size="default" layout="text" value="10"></bsg-badge></div>

          <!-- Text Icon Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Text Icon</div>
          <div><bsg-badge variant="default" size="default" layout="text-icon" value="Etiqueta"></bsg-badge></div>
          <div><bsg-badge variant="secondary" size="default" layout="text-icon" value="Etiqueta"></bsg-badge></div>
          <div><bsg-badge variant="destructive" size="default" layout="text-icon" value="Etiqueta"></bsg-badge></div>
          <div><bsg-badge variant="outline" size="default" layout="text-icon" value="Etiqueta"></bsg-badge></div>
          <div><bsg-badge variant="success" size="default" layout="text-icon" value="Etiqueta"></bsg-badge></div>

          <!-- Large Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Large</div>
          <div><bsg-badge variant="default" size="large" layout="text" value="99+"></bsg-badge></div>
          <div><bsg-badge variant="secondary" size="large" layout="text" value="99+"></bsg-badge></div>
          <div><bsg-badge variant="destructive" size="large" layout="text" value="99+"></bsg-badge></div>
          <div><bsg-badge variant="outline" size="large" layout="text" value="99+"></bsg-badge></div>
          <div><bsg-badge variant="success" size="large" layout="text" value="99+"></bsg-badge></div>
        </div>

        <!-- Design Specifications -->
        <section style="margin-top: 64px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          
          <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
            <p style="margin: 16px 0 8px 0;"><strong>Sizes:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Dot:</strong> 12×12px circular indicator</li>
              <li><strong>Default:</strong> Padding 2px 8px, font-size 12px (legacy small)</li>
              <li><strong>Large:</strong> Padding 8px 20px, font-size 14px (Figma design)</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Content Modes:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Dot:</strong> Status indicator (12×12px circle)</li>
              <li><strong>Text:</strong> Text-only badge (uses default/large size)</li>
              <li><strong>Text + Icon:</strong> Badge with search icon and text</li>
            </ul>

            <p style="margin: 16px 0 8px 0;"><strong>Semantic Variants (Design System Tokens):</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Default:</strong> #7C3AED (Violet-600 primary), White text</li>
              <li><strong>Secondary:</strong> #2563EB (Blue-600), White text</li>
              <li><strong>Success:</strong> #16A34A (Green-600), White text</li>
              <li><strong>Destructive:</strong> #DC2626 (Red-600), White text</li>
              <li><strong>Outline:</strong> White background, #CBD5E1 border, #1E293B text</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Layout Details:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Font Family: Inter</li>
              <li>Font Weight: 400</li>
              <li>Letter Spacing: 0.05px</li>
              <li>Text-Icon Gap: 10px</li>
              <li>Icon Size: 16×16px</li>
              <li>Border Radius: 9999px (fully rounded pill)</li>
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
