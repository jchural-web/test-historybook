import type { Meta, StoryObj } from '@storybook/angular';
import { SeparatorComponent } from './separator.component';

const meta: Meta<SeparatorComponent> = {
  title: 'Example/Separator',
  component: SeparatorComponent,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Separator orientation',
    },
    thickness: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: 'Line thickness in pixels',
    },
  },
  args: {
    orientation: 'horizontal',
    thickness: 1,
  },
};

export default meta;
type Story = StoryObj<SeparatorComponent>;

// ===========================
// Horizontal Separator
// ===========================

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    thickness: 1,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="width: 100%; max-width: 600px;">
        <storybook-separator 
          [orientation]="orientation"
          [thickness]="thickness">
        </storybook-separator>
      </div>
    `,
  }),
};

// ===========================
// Vertical Separator
// ===========================

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    thickness: 1,
  },
  render: (args) => ({
    props: args,
    template: `
      <div style="height: 400px; display: flex;">
        <storybook-separator 
          [orientation]="orientation"
          [thickness]="thickness">
        </storybook-separator>
      </div>
    `,
  }),
};

// ===========================
// Design System Showcase
// ===========================

export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 800px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Separator Component Library</h2>
        
        <!-- Horizontal Separators -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Horizontal</h3>
          
          <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px;">
            <storybook-separator orientation="horizontal" [thickness]="1"></storybook-separator>
            <storybook-separator orientation="horizontal" [thickness]="1"></storybook-separator>
            <storybook-separator orientation="horizontal" [thickness]="1"></storybook-separator>
          </div>
        </section>

        <!-- Vertical Separators -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Vertical</h3>
          
          <div style="display: flex; gap: 16px; height: 400px;">
            <storybook-separator orientation="vertical" [thickness]="1"></storybook-separator>
            <storybook-separator orientation="vertical" [thickness]="1"></storybook-separator>
            <storybook-separator orientation="vertical" [thickness]="1"></storybook-separator>
          </div>
        </section>

        <!-- Design Specifications -->
        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          
          <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
            <p style="margin: 4px 0;"><strong>Default Thickness:</strong> 1px</p>
            <p style="margin: 4px 0;"><strong>Color:</strong> #CBD5E1 (neutral-300)</p>
            <p style="margin: 4px 0;"><strong>Length:</strong> 100% (adapts to container)</p>
            <p style="margin: 4px 0;"><strong>Spacing:</strong> Managed by parent container (not the separator)</p>
            <p style="margin: 16px 0 8px 0;"><strong>Orientations:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Horizontal:</strong> width: 100%, height: thickness</li>
              <li><strong>Vertical:</strong> width: thickness, height: 100%</li>
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
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Separator Usage Examples</h3>
        
        <!-- Content List with Separators -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Content List</h4>
          <div style="max-width: 400px;">
            <div style="padding: 16px 0;">Item 1</div>
            <storybook-separator orientation="horizontal"></storybook-separator>
            <div style="padding: 16px 0;">Item 2</div>
            <storybook-separator orientation="horizontal"></storybook-separator>
            <div style="padding: 16px 0;">Item 3</div>
            <storybook-separator orientation="horizontal"></storybook-separator>
            <div style="padding: 16px 0;">Item 4</div>
          </div>
        </div>
        
        <!-- Vertical Layout -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Sidebar Layout</h4>
          <div style="display: flex; gap: 24px; height: 200px;">
            <div style="flex: 1; background: #F8FAFC; padding: 16px; border-radius: 4px;">
              Sidebar Content
            </div>
            <storybook-separator orientation="vertical"></storybook-separator>
            <div style="flex: 3; background: #F8FAFC; padding: 16px; border-radius: 4px;">
              Main Content
            </div>
          </div>
        </div>
        
        <!-- Menu Items -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Menu Sections</h4>
          <div style="max-width: 300px;">
            <div style="padding: 12px 0; font-weight: 500;">Section 1</div>
            <div style="padding: 8px 0 8px 16px;">Menu Item 1.1</div>
            <div style="padding: 8px 0 8px 16px;">Menu Item 1.2</div>
            <div style="padding: 12px 0;"><storybook-separator orientation="horizontal"></storybook-separator></div>
            <div style="padding: 12px 0; font-weight: 500;">Section 2</div>
            <div style="padding: 8px 0 8px 16px;">Menu Item 2.1</div>
            <div style="padding: 8px 0 8px 16px;">Menu Item 2.2</div>
          </div>
        </div>
        
        <!-- Toolbar -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Toolbar</h4>
          <div style="display: flex; align-items: center; gap: 16px; padding: 12px; background: #F8FAFC; border-radius: 4px; max-width: 500px;">
            <button style="padding: 8px 12px; border: 1px solid #E2E8F0; background: white; border-radius: 4px; cursor: pointer;">Action 1</button>
            <storybook-separator orientation="vertical" style="height: 24px;"></storybook-separator>
            <button style="padding: 8px 12px; border: 1px solid #E2E8F0; background: white; border-radius: 4px; cursor: pointer;">Action 2</button>
            <storybook-separator orientation="vertical" style="height: 24px;"></storybook-separator>
            <button style="padding: 8px 12px; border: 1px solid #E2E8F0; background: white; border-radius: 4px; cursor: pointer;">Action 3</button>
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
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive Separator Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use the controls panel to adjust orientation and thickness
        </p>
        
        <div style="display: flex; align-items: center; justify-content: center; min-height: 300px; padding: 40px; background: #F8FAFC; border-radius: 8px;">
          <div [ngStyle]="orientation === 'horizontal' ? { width: '100%', maxWidth: '600px' } : { height: '400px' }">
            <storybook-separator 
              [orientation]="orientation"
              [thickness]="thickness">
            </storybook-separator>
          </div>
        </div>
      </div>
    `,
  }),
  args: {
    orientation: 'horizontal',
    thickness: 1,
  },
};
