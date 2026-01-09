import type { Meta, StoryObj } from '@storybook/angular';
import { SkeletonComponent } from './skeleton.component';

const meta: Meta<SkeletonComponent> = {
  title: 'Example/Skeleton',
  component: SkeletonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'circular', 'rectangular'],
      description: 'Skeleton type',
    },
    width: {
      control: 'text',
      description: 'Width (auto, px, %, rem, etc.)',
    },
    height: {
      control: 'text',
      description: 'Height (auto, px, %, rem, etc.)',
    },
  },
  args: {
    type: 'rectangular',
    width: 'auto',
    height: 'auto',
  },
};

export default meta;
type Story = StoryObj<SkeletonComponent>;

// ===========================
// Basic Types
// ===========================

export const Text: Story = {
  args: {
    type: 'text',
    width: '228px',
    height: '16px',
  },
};

export const Circular: Story = {
  args: {
    type: 'circular',
    width: '29px',
    height: '29px',
  },
};

export const Rectangular: Story = {
  args: {
    type: 'rectangular',
    width: '101px',
    height: '84px',
  },
};

// ===========================
// Size Variations
// ===========================

export const TextSmall: Story = {
  args: {
    type: 'text',
    width: '120px',
    height: '12px',
  },
};

export const TextMedium: Story = {
  args: {
    type: 'text',
    width: '200px',
    height: '16px',
  },
};

export const TextLarge: Story = {
  args: {
    type: 'text',
    width: '300px',
    height: '20px',
  },
};

export const CircularSmall: Story = {
  args: {
    type: 'circular',
    width: '24px',
    height: '24px',
  },
};

export const CircularMedium: Story = {
  args: {
    type: 'circular',
    width: '40px',
    height: '40px',
  },
};

export const CircularLarge: Story = {
  args: {
    type: 'circular',
    width: '64px',
    height: '64px',
  },
};

export const RectangularSmall: Story = {
  args: {
    type: 'rectangular',
    width: '100px',
    height: '60px',
  },
};

export const RectangularMedium: Story = {
  args: {
    type: 'rectangular',
    width: '200px',
    height: '120px',
  },
};

export const RectangularLarge: Story = {
  args: {
    type: 'rectangular',
    width: '400px',
    height: '200px',
  },
};

// ===========================
// Design System Showcase
// ===========================

export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1000px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Skeleton Component Library</h2>
        
        <!-- Grid Layout matching Figma -->
        <div style="display: grid; grid-template-columns: 120px 300px 400px; gap: 32px 48px; align-items: start; margin-bottom: 48px;">
          
          <!-- Headers -->
          <div></div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Default</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Composition Example</div>
          
          <!-- Text Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Text</div>
          <div>
            <storybook-skeleton type="text" width="228px" height="16px"></storybook-skeleton>
          </div>
          <div style="grid-row: span 3;">
            <!-- Card Composition Example from Figma -->
            <div style="
              border: 1px solid #E2E8F0;
              border-radius: 8px;
              padding: 16px;
              width: 367px;
            ">
              <!-- Avatar + Title -->
              <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 16px;">
                <storybook-skeleton type="circular" width="29px" height="29px"></storybook-skeleton>
                <storybook-skeleton type="text" width="228px" height="16px"></storybook-skeleton>
              </div>

              <!-- Large content block -->
              <storybook-skeleton type="rectangular" width="100%" height="87px"></storybook-skeleton>

              <!-- Subtitle -->
              <storybook-skeleton type="text" width="131px" height="16px" style="margin-bottom: 16px;"></storybook-skeleton>
              
              <!-- Three cards grid -->
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
                <storybook-skeleton type="rectangular" width="101px" height="84px"></storybook-skeleton>
                <storybook-skeleton type="rectangular" width="101px" height="84px"></storybook-skeleton>
                <storybook-skeleton type="rectangular" width="101px" height="84px"></storybook-skeleton>
              </div>
            </div>
          </div>
          
          <!-- Circular Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Circular</div>
          <div>
            <storybook-skeleton type="circular" width="29px" height="29px"></storybook-skeleton>
          </div>
          
          <!-- Rectangular Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Rectangular</div>
          <div>
            <storybook-skeleton type="rectangular" width="101px" height="84px"></storybook-skeleton>
          </div>
        </div>

        <!-- Design Specifications -->
        <section style="margin-top: 64px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          
          <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
            <p style="margin: 16px 0 8px 0;"><strong>Type: Text</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Border Radius: 4px (sm)</li>
              <li>Default Width: 100%</li>
              <li>Default Height: 16px</li>
              <li>Use Case: Text lines, labels, titles</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Type: Circular</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Border Radius: 50% (full)</li>
              <li>Aspect Ratio: 1:1 (perfect circle)</li>
              <li>Default Size: 40×40px</li>
              <li>Use Case: Avatars, profile pictures, icons</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Type: Rectangular</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Border Radius: 8px (md)</li>
              <li>Default Width: 100%</li>
              <li>Default Height: 100px</li>
              <li>Use Case: Images, cards, content blocks</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Color & Style:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Background: #E2E8F0 (neutral-200)</li>
              <li>Display: block</li>
              <li>Flex Shrink: 0</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Spacing & Layout:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Text:</strong> 8px bottom margin (auto-removed on last child)</li>
              <li><strong>Circular:</strong> No default margin (flex-shrink: 0 for flex layouts)</li>
              <li><strong>Rectangular:</strong> 12px bottom margin (auto-removed on last child)</li>
              <li>Use <code>gap</code> property in flex/grid containers for consistent spacing</li>
              <li>Stack text elements vertically without additional spacing (margins are built-in)</li>
            </ul>

            <p style="margin: 16px 0 8px 0;"><strong>Behavior:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Non-interactive (pointer-events: none)</li>
              <li>Non-selectable (user-select: none)</li>
              <li>No animations (unless added by consumer)</li>
              <li>Composable - multiple skeletons work together seamlessly</li>
              <li>No overlapping or collision between elements</li>
            </ul>
          </div>
        </section>
      </div>
    `,
  }),
};

// ===========================
// Composition Examples
// ===========================

export const CompositionExamples: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 48px; padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Skeleton Composition Examples</h3>
        
        <!-- User Profile Card Loading -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">User Profile Card</h4>
          <div style="
            border: 1px solid #E2E8F0;
            border-radius: 8px;
            padding: 24px;
            max-width: 400px;
          ">
            <!-- Profile Header -->
            <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 24px;">
              <storybook-skeleton type="circular" width="64px" height="64px"></storybook-skeleton>
              <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
                <storybook-skeleton type="text" width="160px" height="20px"></storybook-skeleton>
                <storybook-skeleton type="text" width="120px" height="14px"></storybook-skeleton>
              </div>
            </div>

            <!-- Bio -->
            <div style="margin-bottom: 24px;">
              <storybook-skeleton type="text" width="100%" height="14px"></storybook-skeleton>
              <storybook-skeleton type="text" width="100%" height="14px"></storybook-skeleton>
              <storybook-skeleton type="text" width="70%" height="14px"></storybook-skeleton>
            </div>

            <!-- Action Button -->
            <storybook-skeleton type="rectangular" width="100%" height="40px"></storybook-skeleton>
          </div>
        </div>
        
        <!-- Comment Thread Loading -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Comment Thread</h4>
          <div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
            <!-- Comment 1 -->
            <div style="display: flex; gap: 12px; align-items: flex-start;">
              <storybook-skeleton type="circular" width="32px" height="32px"></storybook-skeleton>
              <div style="flex: 1; display: flex; flex-direction: column;">
                <storybook-skeleton type="text" width="100px" height="14px"></storybook-skeleton>
                <storybook-skeleton type="text" width="100%" height="12px"></storybook-skeleton>
                <storybook-skeleton type="text" width="80%" height="12px"></storybook-skeleton>
              </div>
            </div>

            <!-- Comment 2 -->
            <div style="display: flex; gap: 12px; align-items: flex-start;">
              <storybook-skeleton type="circular" width="32px" height="32px"></storybook-skeleton>
              <div style="flex: 1; display: flex; flex-direction: column;">
                <storybook-skeleton type="text" width="120px" height="14px"></storybook-skeleton>
                <storybook-skeleton type="text" width="100%" height="12px"></storybook-skeleton>
                <storybook-skeleton type="text" width="90%" height="12px"></storybook-skeleton>
              </div>
            </div>

            <!-- Comment 3 -->
            <div style="display: flex; gap: 12px; align-items: flex-start;">
              <storybook-skeleton type="circular" width="32px" height="32px"></storybook-skeleton>
              <div style="flex: 1; display: flex; flex-direction: column;">
                <storybook-skeleton type="text" width="90px" height="14px"></storybook-skeleton>
                <storybook-skeleton type="text" width="100%" height="12px"></storybook-skeleton>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Article Card Loading -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Article Card</h4>
          <div style="
            border: 1px solid #E2E8F0;
            border-radius: 8px;
            overflow: hidden;
            max-width: 350px;
          ">
            <!-- Image -->
            <storybook-skeleton type="rectangular" width="100%" height="200px"></storybook-skeleton>

            <!-- Content -->
            <div style="padding: 16px; display: flex; flex-direction: column;">
              <storybook-skeleton type="text" width="80%" height="20px"></storybook-skeleton>
              <storybook-skeleton type="text" width="100%" height="14px"></storybook-skeleton>
              <storybook-skeleton type="text" width="100%" height="14px"></storybook-skeleton>
              <storybook-skeleton type="text" width="60%" height="14px" style="margin-bottom: 16px;"></storybook-skeleton>

              <!-- Metadata -->
              <div style="display: flex; align-items: center; gap: 12px;">
                <storybook-skeleton type="circular" width="24px" height="24px"></storybook-skeleton>
                <storybook-skeleton type="text" width="100px" height="12px"></storybook-skeleton>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Grid Layout Loading -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Product Grid</h4>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; max-width: 600px;">
            <div style="display: flex; flex-direction: column;">
              <storybook-skeleton type="rectangular" width="100%" height="180px"></storybook-skeleton>
              <storybook-skeleton type="text" width="80%" height="16px"></storybook-skeleton>
              <storybook-skeleton type="text" width="50%" height="16px"></storybook-skeleton>
            </div>

            <div style="display: flex; flex-direction: column;">
              <storybook-skeleton type="rectangular" width="100%" height="180px"></storybook-skeleton>
              <storybook-skeleton type="text" width="90%" height="16px"></storybook-skeleton>
              <storybook-skeleton type="text" width="60%" height="16px"></storybook-skeleton>
            </div>

            <div style="display: flex; flex-direction: column;">
              <storybook-skeleton type="rectangular" width="100%" height="180px"></storybook-skeleton>
              <storybook-skeleton type="text" width="70%" height="16px"></storybook-skeleton>
              <storybook-skeleton type="text" width="55%" height="16px"></storybook-skeleton>
            </div>
          </div>
        </div>
        
        <!-- List Items Loading -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">List Items</h4>
          <div style="display: flex; flex-direction: column; gap: 12px; max-width: 400px;">
            <div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px; background: #F8FAFC; border-radius: 8px;">
              <storybook-skeleton type="circular" width="40px" height="40px"></storybook-skeleton>
              <div style="flex: 1; display: flex; flex-direction: column;">
                <storybook-skeleton type="text" width="150px" height="16px"></storybook-skeleton>
                <storybook-skeleton type="text" width="100px" height="12px"></storybook-skeleton>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px; background: #F8FAFC; border-radius: 8px;">
              <storybook-skeleton type="circular" width="40px" height="40px"></storybook-skeleton>
              <div style="flex: 1; display: flex; flex-direction: column;">
                <storybook-skeleton type="text" width="130px" height="16px"></storybook-skeleton>
                <storybook-skeleton type="text" width="90px" height="12px"></storybook-skeleton>
              </div>
            </div>

            <div style="display: flex; align-items: flex-start; gap: 12px; padding: 12px; background: #F8FAFC; border-radius: 8px;">
              <storybook-skeleton type="circular" width="40px" height="40px"></storybook-skeleton>
              <div style="flex: 1; display: flex; flex-direction: column;">
                <storybook-skeleton type="text" width="170px" height="16px"></storybook-skeleton>
                <storybook-skeleton type="text" width="110px" height="12px"></storybook-skeleton>
              </div>
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
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive Skeleton Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use the controls panel to adjust type, width, and height
        </p>
        
        <div style="display: flex; align-items: center; justify-content: center; min-height: 200px; padding: 40px; background: #F8FAFC; border-radius: 8px;">
          <storybook-skeleton 
            [type]="type"
            [width]="width"
            [height]="height">
          </storybook-skeleton>
        </div>
        
        <div style="margin-top: 32px; padding: 16px; background: #FEF3C7; border-radius: 8px; font-size: 13px; color: #78350F; line-height: 1.6;">
          <strong>Tips:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>Use <code>type="text"</code> for single-line text placeholders</li>
            <li>Use <code>type="circular"</code> for avatar or icon placeholders (ensure width = height)</li>
            <li>Use <code>type="rectangular"</code> for images, cards, or content blocks</li>
            <li>Width and height accept: auto, px values (100), or CSS units ("100%", "10rem")</li>
            <li>Combine multiple skeletons to build complex loading states</li>
          </ul>
        </div>
      </div>
    `,
  }),
  args: {
    type: 'rectangular',
    width: '200px',
    height: '100px',
  },
};
