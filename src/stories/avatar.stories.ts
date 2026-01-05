import type { Meta, StoryObj } from '@storybook/angular';
import { AvatarComponent } from './avatar.component';

const meta: Meta<AvatarComponent> = {
  title: 'Example/Avatar',
  component: AvatarComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size',
    },
    type: {
      control: 'select',
      options: ['default', 'fallback'],
      description: 'Avatar type (default: icon/image, fallback: initials)',
    },
    initials: {
      control: 'text',
      description: 'Initials text (only for fallback type)',
    },
    image: {
      control: 'text',
      description: 'Image URL (only for default type)',
    },
  },
  args: {
    size: 'md',
    type: 'default',
    initials: 'JC',
    image: '',
  },
};

export default meta;
type Story = StoryObj<AvatarComponent>;

// ===========================
// Default Type - Icon (all sizes)
// ===========================

export const DefaultXS: Story = {
  args: {
    size: 'xs',
    type: 'default',
    image: '',
  },
};

export const DefaultSM: Story = {
  args: {
    size: 'sm',
    type: 'default',
    image: '',
  },
};

export const DefaultMD: Story = {
  args: {
    size: 'md',
    type: 'default',
    image: '',
  },
};

export const DefaultLG: Story = {
  args: {
    size: 'lg',
    type: 'default',
    image: '',
  },
};

export const DefaultXL: Story = {
  args: {
    size: 'xl',
    type: 'default',
    image: '',
  },
};

// ===========================
// Fallback Type - Initials (all sizes)
// ===========================

export const FallbackXS: Story = {
  args: {
    size: 'xs',
    type: 'fallback',
    initials: 'JC',
  },
};

export const FallbackSM: Story = {
  args: {
    size: 'sm',
    type: 'fallback',
    initials: 'JC',
  },
};

export const FallbackMD: Story = {
  args: {
    size: 'md',
    type: 'fallback',
    initials: 'JC',
  },
};

export const FallbackLG: Story = {
  args: {
    size: 'lg',
    type: 'fallback',
    initials: 'JC',
  },
};

export const FallbackXL: Story = {
  args: {
    size: 'xl',
    type: 'fallback',
    initials: 'JC',
  },
};

// ===========================
// Default Type - Image (all sizes)
// ===========================

const sampleImage = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop';

export const ImageXS: Story = {
  args: {
    size: 'xs',
    type: 'default',
    image: sampleImage,
  },
};

export const ImageSM: Story = {
  args: {
    size: 'sm',
    type: 'default',
    image: sampleImage,
  },
};

export const ImageMD: Story = {
  args: {
    size: 'md',
    type: 'default',
    image: sampleImage,
  },
};

export const ImageLG: Story = {
  args: {
    size: 'lg',
    type: 'default',
    image: sampleImage,
  },
};

export const ImageXL: Story = {
  args: {
    size: 'xl',
    type: 'default',
    image: sampleImage,
  },
};

// ===========================
// Design System Showcase
// ===========================

export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 900px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Avatar Component Library</h2>
        
        <!-- Grid Layout matching Figma -->
        <div style="display: grid; grid-template-columns: 80px repeat(2, 150px); gap: 32px 48px; align-items: center; margin-bottom: 48px;">
          
          <!-- Headers -->
          <div></div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Default</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Fallback</div>
          
          <!-- XS Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">xs</div>
          <div><storybook-avatar size="xs" type="default" image=""></storybook-avatar></div>
          <div><storybook-avatar size="xs" type="fallback" initials="JC"></storybook-avatar></div>
          
          <!-- SM Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">sm</div>
          <div><storybook-avatar size="sm" type="default" image=""></storybook-avatar></div>
          <div><storybook-avatar size="sm" type="fallback" initials="JC"></storybook-avatar></div>
          
          <!-- MD Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">md</div>
          <div><storybook-avatar size="md" type="default" image=""></storybook-avatar></div>
          <div><storybook-avatar size="md" type="fallback" initials="JC"></storybook-avatar></div>
          
          <!-- LG Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">lg</div>
          <div><storybook-avatar size="lg" type="default" image=""></storybook-avatar></div>
          <div><storybook-avatar size="lg" type="fallback" initials="JC"></storybook-avatar></div>
          
          <!-- XL Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">xl</div>
          <div><storybook-avatar size="xl" type="default" image=""></storybook-avatar></div>
          <div><storybook-avatar size="xl" type="fallback" initials="JC"></storybook-avatar></div>
        </div>

        <!-- Design Specifications -->
        <section style="margin-top: 64px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          
          <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
            <p style="margin: 16px 0 8px 0;"><strong>Sizes & Dimensions:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>xs:</strong> 24×24px</li>
              <li><strong>sm:</strong> 32×32px</li>
              <li><strong>md:</strong> 40×40px (default)</li>
              <li><strong>lg:</strong> 48×48px</li>
              <li><strong>xl:</strong> 64×64px</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Type: Default (Icon/Image)</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Background: White</li>
              <li>Icon Color: #EAB308 (Yellow-500)</li>
              <li>When <code>image</code> prop is provided, renders image centered and clipped in circle</li>
              <li>Image object-fit: cover</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Type: Fallback (Initials)</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Background: #EAB308 (Yellow-500)</li>
              <li>Text Color: White (#FFFFFF)</li>
              <li>Font Family: Inter</li>
              <li>Font Weight: 400</li>
              <li>Letter Spacing: 0.05px</li>
              <li>Font Sizes by size:
                <ul style="margin: 4px 0 4px 20px;">
                  <li>xs: 12px / line-height: 17px</li>
                  <li>sm: 14px / line-height: 21px</li>
                  <li>md: 18px / line-height: 27px</li>
                  <li>lg: 24px / line-height: 27px</li>
                  <li>xl: 36px / line-height: 27px</li>
                </ul>
              </li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Shape & Structure:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Perfect circular shape (border-radius: 50%)</li>
              <li>Content centered vertically and horizontally</li>
              <li>Overflow hidden for image clipping</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Behavior:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Non-interactive (pointer-events: none)</li>
              <li>Non-selectable (user-select: none)</li>
              <li>No hover or focus states</li>
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
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Avatar Usage Examples</h3>
        
        <!-- User Profile Header -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">User Profile Header</h4>
          <div style="display: flex; align-items: center; gap: 16px;">
            <storybook-avatar size="lg" type="fallback" initials="AB"></storybook-avatar>
            <div>
              <div style="font-size: 16px; font-weight: 600; color: #202020;">Alice Brown</div>
              <div style="font-size: 14px; color: #64748B;">alice.brown@example.com</div>
            </div>
          </div>
        </div>
        
        <!-- Comment Thread -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Comment Thread</h4>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; gap: 12px;">
              <storybook-avatar size="sm" type="fallback" initials="MJ"></storybook-avatar>
              <div style="flex: 1;">
                <div style="font-size: 14px; font-weight: 600; color: #202020; margin-bottom: 4px;">Michael Johnson</div>
                <div style="font-size: 14px; color: #475569; line-height: 1.6;">
                  This looks great! I really like the new design direction.
                </div>
                <div style="font-size: 12px; color: #94A3B8; margin-top: 4px;">2 hours ago</div>
              </div>
            </div>
            
            <div style="display: flex; gap: 12px;">
              <storybook-avatar size="sm" type="fallback" initials="SK"></storybook-avatar>
              <div style="flex: 1;">
                <div style="font-size: 14px; font-weight: 600; color: #202020; margin-bottom: 4px;">Sarah Kim</div>
                <div style="font-size: 14px; color: #475569; line-height: 1.6;">
                  Agreed! The spacing feels much better now.
                </div>
                <div style="font-size: 12px; color: #94A3B8; margin-top: 4px;">1 hour ago</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- User List -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">User List</h4>
          <div style="display: flex; flex-direction: column; gap: 12px; max-width: 350px;">
            <div style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 8px; background: #F8FAFC;">
              <storybook-avatar size="md" type="fallback" initials="JD"></storybook-avatar>
              <div style="flex: 1;">
                <div style="font-size: 14px; font-weight: 500; color: #202020;">John Doe</div>
                <div style="font-size: 12px; color: #64748B;">Product Manager</div>
              </div>
            </div>
            
            <div style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 8px; background: #F8FAFC;">
              <storybook-avatar size="md" type="fallback" initials="EW"></storybook-avatar>
              <div style="flex: 1;">
                <div style="font-size: 14px; font-weight: 500; color: #202020;">Emma Wilson</div>
                <div style="font-size: 12px; color: #64748B;">Senior Designer</div>
              </div>
            </div>
            
            <div style="display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 8px; background: #F8FAFC;">
              <storybook-avatar size="md" type="fallback" initials="RT"></storybook-avatar>
              <div style="flex: 1;">
                <div style="font-size: 14px; font-weight: 500; color: #202020;">Robert Taylor</div>
                <div style="font-size: 12px; color: #64748B;">Lead Engineer</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Avatar Group -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Avatar Group (Overlapping)</h4>
          <div style="display: flex; align-items: center;">
            <div style="position: relative; display: flex;">
              <div style="position: relative; z-index: 4; border: 2px solid white; border-radius: 50%;">
                <storybook-avatar size="sm" type="fallback" initials="AM"></storybook-avatar>
              </div>
              <div style="position: relative; z-index: 3; margin-left: -12px; border: 2px solid white; border-radius: 50%;">
                <storybook-avatar size="sm" type="fallback" initials="BT"></storybook-avatar>
              </div>
              <div style="position: relative; z-index: 2; margin-left: -12px; border: 2px solid white; border-radius: 50%;">
                <storybook-avatar size="sm" type="fallback" initials="CW"></storybook-avatar>
              </div>
              <div style="position: relative; z-index: 1; margin-left: -12px; border: 2px solid white; border-radius: 50%;">
                <storybook-avatar size="sm" type="fallback" initials="DL"></storybook-avatar>
              </div>
            </div>
            <span style="margin-left: 12px; font-size: 14px; color: #64748B;">+5 more</span>
          </div>
        </div>
        
        <!-- Different Sizes Comparison -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Size Comparison</h4>
          <div style="display: flex; align-items: center; gap: 16px;">
            <div style="text-align: center;">
              <storybook-avatar size="xs" type="fallback" initials="XS"></storybook-avatar>
              <div style="font-size: 12px; color: #64748B; margin-top: 8px;">XS (24px)</div>
            </div>
            <div style="text-align: center;">
              <storybook-avatar size="sm" type="fallback" initials="SM"></storybook-avatar>
              <div style="font-size: 12px; color: #64748B; margin-top: 8px;">SM (32px)</div>
            </div>
            <div style="text-align: center;">
              <storybook-avatar size="md" type="fallback" initials="MD"></storybook-avatar>
              <div style="font-size: 12px; color: #64748B; margin-top: 8px;">MD (40px)</div>
            </div>
            <div style="text-align: center;">
              <storybook-avatar size="lg" type="fallback" initials="LG"></storybook-avatar>
              <div style="font-size: 12px; color: #64748B; margin-top: 8px;">LG (48px)</div>
            </div>
            <div style="text-align: center;">
              <storybook-avatar size="xl" type="fallback" initials="XL"></storybook-avatar>
              <div style="font-size: 12px; color: #64748B; margin-top: 8px;">XL (64px)</div>
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
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive Avatar Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use the controls panel to adjust size, type, initials, and image
        </p>
        
        <div style="display: flex; align-items: center; justify-content: center; min-height: 200px; padding: 40px; background: #F8FAFC; border-radius: 8px;">
          <storybook-avatar 
            [size]="size"
            [type]="type"
            [initials]="initials"
            [image]="image">
          </storybook-avatar>
        </div>
        
        <div style="margin-top: 32px; padding: 16px; background: #FEF3C7; border-radius: 8px; font-size: 13px; color: #78350F; line-height: 1.6;">
          <strong>Tips:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>Set <code>type</code> to "fallback" to show initials</li>
            <li>Set <code>type</code> to "default" and provide an <code>image</code> URL to show an image</li>
            <li>Leave <code>image</code> empty with type "default" to show the user icon</li>
          </ul>
        </div>
      </div>
    `,
  }),
  args: {
    size: 'md',
    type: 'fallback',
    initials: 'JC',
    image: '',
  },
};
