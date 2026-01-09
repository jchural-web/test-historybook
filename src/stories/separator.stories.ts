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

// =====================
// AXES
// =====================

/**
 * Separator orientation axis
 * Shows all orientation options: horizontal and vertical
 */
export const Orientations: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 48px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Orientations</h3>
        
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Horizontal</h4>
          <div style="width: 100%; max-width: 600px;">
            <bsg-separator orientation="horizontal" [thickness]="1"></bsg-separator>
          </div>
        </div>
        
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Vertical</h4>
          <div style="height: 400px; display: flex;">
            <bsg-separator orientation="vertical" [thickness]="1"></bsg-separator>
          </div>
        </div>
      </div>
    `,
  }),
};

// =====================
// EXAMPLES
// =====================

/**
 * Real-world usage examples of Separator
 */
export const UsageExamples: Story = {
  tags: ['!dev'],
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 48px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Separator Usage Examples</h3>
        
        <!-- Content List with Separators -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Content List</h4>
          <div style="max-width: 400px;">
            <div style="padding: 16px 0;">Item 1</div>
            <bsg-separator orientation="horizontal"></bsg-separator>
            <div style="padding: 16px 0;">Item 2</div>
            <bsg-separator orientation="horizontal"></bsg-separator>
            <div style="padding: 16px 0;">Item 3</div>
            <bsg-separator orientation="horizontal"></bsg-separator>
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
            <bsg-separator orientation="vertical"></bsg-separator>
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
            <div style="padding: 12px 0;"><bsg-separator orientation="horizontal"></bsg-separator></div>
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
            <bsg-separator orientation="vertical" style="height: 24px;"></bsg-separator>
            <button style="padding: 8px 12px; border: 1px solid #E2E8F0; background: white; border-radius: 4px; cursor: pointer;">Action 2</button>
            <bsg-separator orientation="vertical" style="height: 24px;"></bsg-separator>
            <button style="padding: 8px 12px; border: 1px solid #E2E8F0; background: white; border-radius: 4px; cursor: pointer;">Action 3</button>
          </div>
        </div>
      </div>
    `,
  }),
};

// =====================
// PLAYGROUND (Optional)
// =====================

/**
 * Interactive playground for Separator
 */
export const Playground: Story = {
  tags: ['!dev'],
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
            <bsg-separator 
              [orientation]="orientation"
              [thickness]="thickness">
            </bsg-separator>
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

// =====================
// SHOWCASE (Optional)
// =====================

/**
 * Complete showcase of Separator component library
 */
export const Showcase: Story = {
  tags: ['!dev'],
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 800px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Separator Component Library</h2>
        
        <!-- Horizontal Separators -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Horizontal</h3>
          
          <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px;">
            <bsg-separator orientation="horizontal" [thickness]="1"></bsg-separator>
            <bsg-separator orientation="horizontal" [thickness]="1"></bsg-separator>
            <bsg-separator orientation="horizontal" [thickness]="1"></bsg-separator>
          </div>
        </section>

        <!-- Vertical Separators -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600; color: #202020;">Vertical</h3>
          
          <div style="display: flex; gap: 16px; height: 400px;">
            <bsg-separator orientation="vertical" [thickness]="1"></bsg-separator>
            <bsg-separator orientation="vertical" [thickness]="1"></bsg-separator>
            <bsg-separator orientation="vertical" [thickness]="1"></bsg-separator>
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
