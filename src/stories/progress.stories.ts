import type { Meta, StoryObj } from '@storybook/angular';
import { ProgressComponent } from './progress.component';

const meta: Meta<ProgressComponent> = {
  title: 'Example/Progress',
  component: ProgressComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Progress size (from Figma: sm=40px, md=64px, lg=124px for circular)',
    },
    type: {
      control: 'select',
      options: ['circular', 'linear'],
      description: 'Progress type',
    },
    mode: {
      control: 'select',
      options: ['determinate', 'indeterminate'],
      description: 'Progress mode',
    },
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Progress value (0-100, only for determinate mode)',
    },
    label: {
      control: 'text',
      description: 'Label text (for linear determinate or circular lg)',
    },
  },
  args: {
    size: 'md',
    type: 'circular',
    mode: 'determinate',
    value: 73,
    label: 'Tasa de asistencia',
  },
};

export default meta;
type Story = StoryObj<ProgressComponent>;

// ============================================================
// API CATEGORY STORIES (One per axis)
// ============================================================

/**
 * Progress types: circular and linear.
 * Demonstrates the two available progress display formats.
 */
export const Types: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px; font-family: Roboto, sans-serif;">
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Circular Progress</h4>
          <div style="display: flex; justify-content: center;">
            <bsg-progress size="md" type="circular" mode="determinate" [value]="73"></bsg-progress>
          </div>
        </div>
        
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Linear Progress</h4>
          <bsg-progress size="md" type="linear" mode="determinate" [value]="51" label="Progreso general"></bsg-progress>
        </div>
      </div>
    `,
  }),
};

/**
 * Progress states: determinate and indeterminate.
 * Shows how progress behaves when the value is known vs. unknown.
 */
export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px; font-family: Roboto, sans-serif;">
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Determinate (Linear)</h4>
          <p style="margin: 0 0 12px 0; font-size: 12px; color: #64748B;">Known progress value</p>
          <bsg-progress size="md" type="linear" mode="determinate" [value]="51" label="Progreso general"></bsg-progress>
        </div>
        
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Indeterminate (Linear)</h4>
          <p style="margin: 0 0 12px 0; font-size: 12px; color: #64748B;">Unknown progress value</p>
          <bsg-progress size="md" type="linear" mode="indeterminate"></bsg-progress>
        </div>

        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Determinate (Circular)</h4>
          <p style="margin: 0 0 12px 0; font-size: 12px; color: #64748B;">Known progress value</p>
          <div style="display: flex; justify-content: center;">
            <bsg-progress size="md" type="circular" mode="determinate" [value]="73"></bsg-progress>
          </div>
        </div>

        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Indeterminate (Circular)</h4>
          <p style="margin: 0 0 12px 0; font-size: 12px; color: #64748B;">Unknown progress value</p>
          <div style="display: flex; justify-content: center;">
            <bsg-progress size="md" type="circular" mode="indeterminate"></bsg-progress>
          </div>
        </div>
      </div>
    `,
  }),
};

/**
 * Progress sizes: small, medium, and large.
 * Demonstrates all available sizes with circular progress.
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; padding: 24px; font-family: Roboto, sans-serif;">
        <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #202020;">Circular Progress - All Sizes</h4>
        <div style="display: flex; align-items: flex-end; gap: 32px;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bsg-progress size="sm" type="circular" mode="determinate" [value]="73"></bsg-progress>
            <span style="font-size: 12px; color: #64748B;">Small (40px)</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bsg-progress size="md" type="circular" mode="determinate" [value]="73"></bsg-progress>
            <span style="font-size: 12px; color: #64748B;">Medium (64px)</span>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <bsg-progress size="lg" type="circular" mode="determinate" [value]="73" label="Tasa de asistencia"></bsg-progress>
            <span style="font-size: 12px; color: #64748B;">Large (124px)</span>
          </div>
        </div>

        <h4 style="margin: 0; font-size: 14px; font-weight: 600; color: #202020;">Linear Progress - All Sizes</h4>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <bsg-progress size="sm" type="linear" mode="determinate" [value]="51" label="Small"></bsg-progress>
          <bsg-progress size="md" type="linear" mode="determinate" [value]="51" label="Medium"></bsg-progress>
          <bsg-progress size="lg" type="linear" mode="determinate" [value]="51" label="Large"></bsg-progress>
        </div>
      </div>
    `,
  }),
};

// ============================================================
// EXAMPLES SECTION
// ============================================================

/**
 * Common usage patterns and real-world examples of the Progress component.
 */
export const UsageExamples: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 48px; padding: 24px; font-family: Roboto, sans-serif;">
        
        <!-- File Upload Progress -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">File Upload Progress</h4>
          <bsg-progress 
            type="linear" 
            mode="determinate" 
            [value]="67" 
            label="Uploading files">
          </bsg-progress>
        </div>
        
        <!-- Loading Spinner -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Loading Spinner</h4>
          <div style="display: flex; justify-content: center;">
            <bsg-progress 
              size="md"
              type="circular" 
              mode="indeterminate">
            </bsg-progress>
          </div>
        </div>
        
        <!-- Attendance Rate -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Attendance Rate Dashboard</h4>
          <div style="display: flex; justify-content: center;">
            <bsg-progress 
              size="lg"
              type="circular" 
              mode="determinate" 
              [value]="73"
              label="Tasa de asistencia">
            </bsg-progress>
          </div>
        </div>
        
        <!-- Course Progress -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Course Completion</h4>
          <bsg-progress 
            type="linear" 
            mode="determinate" 
            [value]="51" 
            label="Progreso general">
          </bsg-progress>
        </div>
        
        <!-- Processing Data -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Processing Data</h4>
          <bsg-progress 
            type="linear" 
            mode="indeterminate">
          </bsg-progress>
        </div>
      </div>
    `,
  }),
};

// ============================================================
// PLAYGROUND (Interactive)
// ============================================================

/**
 * Interactive playground for testing all progress configurations.
 * Use the controls to experiment with different types, sizes, modes, and values.
 */
export const Playground: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="padding: 24px; font-family: Roboto, sans-serif;">
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive Progress Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use the controls panel to adjust size, type, mode, value, and label
        </p>
        
        <div style="display: flex; align-items: center; justify-content: center; min-height: 200px; padding: 40px; background: #F8FAFC; border-radius: 8px;">
          <bsg-progress 
            [size]="size"
            [type]="type" 
            [mode]="mode" 
            [value]="value"
            [label]="label">
          </bsg-progress>
        </div>

        <div style="margin-top: 32px; padding: 16px; background: #EFF6FF; border-radius: 8px; font-size: 13px; color: #1E40AF; line-height: 1.6;">
          <strong>Tips:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>Use <code>mode="determinate"</code> when you know the exact progress value</li>
            <li>Use <code>mode="indeterminate"</code> for loading states without a known value</li>
            <li>Circular progress displays the percentage in the center (size lg shows a label)</li>
            <li>Linear progress shows the label above the bar</li>
          </ul>
        </div>
      </div>
    `,
  }),
  args: {
    size: 'md',
    type: 'circular',
    mode: 'determinate',
    value: 73,
    label: 'Tasa de asistencia',
  },
};

// ============================================================
// SHOWCASE (Comprehensive reference)
// ============================================================

/**
 * Complete design system showcase featuring all progress types, sizes,
 * and states with design specifications.
 */
export const Showcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1400px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Progress Component Library</h2>
        
        <!-- Grid Layout matching Figma -->
        <div style="display: grid; grid-template-columns: 100px 180px 180px 320px 320px; gap: 24px; align-items: center;">
          
          <!-- Headers -->
          <div></div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Circular determinate</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Circular indeterminate</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Linear determinate</div>
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Linear indeterminate</div>
          
          <!-- SM Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">Sm</div>
          <div style="display: flex; justify-content: center;">
            <bsg-progress size="sm" type="circular" mode="determinate" [value]="73"></bsg-progress>
          </div>
          <div style="display: flex; justify-content: center;">
            <bsg-progress size="sm" type="circular" mode="indeterminate"></bsg-progress>
          </div>
          <div>
            <bsg-progress size="sm" type="linear" mode="determinate" [value]="51" label="Progreso general"></bsg-progress>
          </div>
          <div>
            <bsg-progress size="sm" type="linear" mode="indeterminate"></bsg-progress>
          </div>
          
          <!-- MD Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">md</div>
          <div style="display: flex; justify-content: center;">
            <bsg-progress size="md" type="circular" mode="determinate" [value]="73"></bsg-progress>
          </div>
          <div style="display: flex; justify-content: center;">
            <bsg-progress size="md" type="circular" mode="indeterminate"></bsg-progress>
          </div>
          <div>
            <bsg-progress size="md" type="linear" mode="determinate" [value]="51" label="Progreso general"></bsg-progress>
          </div>
          <div>
            <bsg-progress size="md" type="linear" mode="indeterminate"></bsg-progress>
          </div>
          
          <!-- LG Row -->
          <div style="font-size: 16px; font-weight: 600; color: #202020;">lg</div>
          <div style="display: flex; justify-content: center;">
            <bsg-progress size="lg" type="circular" mode="determinate" [value]="73" label="Tasa de asistencia"></bsg-progress>
          </div>
          <div style="display: flex; justify-content: center;">
            <bsg-progress size="lg" type="circular" mode="indeterminate"></bsg-progress>
          </div>
          <div>
            <bsg-progress size="lg" type="linear" mode="determinate" [value]="51" label="Progreso general"></bsg-progress>
          </div>
          <div>
            <bsg-progress size="lg" type="linear" mode="indeterminate"></bsg-progress>
          </div>
        </div>

        <!-- Design Specifications -->
        <section style="margin-top: 64px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 32px;">
            <!-- Circular Progress -->
            <div>
              <h4 style="margin-bottom: 12px; font-size: 16px; font-weight: 600; color: #202020;">Circular Progress</h4>
              <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
                <p style="margin: 4px 0;"><strong>Size SM:</strong> 40×40px, stroke 6px</p>
                <p style="margin: 4px 0;"><strong>Size MD:</strong> 64×64px, stroke 10px</p>
                <p style="margin: 4px 0;"><strong>Size LG:</strong> 124×124px, stroke 18px</p>
                <p style="margin: 4px 0;"><strong>Track Color:</strong> #E2E8F0 (neutral-200)</p>
                <p style="margin: 4px 0;"><strong>Fill Color:</strong> #2563EB (Blue-600)</p>
                <p style="margin: 4px 0;"><strong>Percentage Font:</strong> Inter, 700 weight</p>
                <p style="margin: 4px 0;"><strong>Percentage Size:</strong> 12px (sm), 20px (md), 25px (lg)</p>
                <p style="margin: 4px 0;"><strong>Label Font:</strong> Inter, 9px, 500 weight (lg only)</p>
                <p style="margin: 4px 0;"><strong>Label Color:</strong> #94A3B8 (neutral-400)</p>
              </div>
            </div>
            
            <!-- Linear Progress -->
            <div>
              <h4 style="margin-bottom: 12px; font-size: 16px; font-weight: 600; color: #202020;">Linear Progress</h4>
              <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
                <p style="margin: 4px 0;"><strong>Height:</strong> 8px (all sizes)</p>
                <p style="margin: 4px 0;"><strong>Max Width:</strong> 286px (responsive)</p>
                <p style="margin: 4px 0;"><strong>Border Radius:</strong> 9999px (fully rounded)</p>
                <p style="margin: 4px 0;"><strong>Track Color:</strong> #CBD5E1 (neutral-300)</p>
                <p style="margin: 4px 0;"><strong>Fill Color:</strong> #2563EB (Blue-600)</p>
                <p style="margin: 4px 0;"><strong>Label Font:</strong> Inter, 15px, 600 weight</p>
                <p style="margin: 4px 0;"><strong>Label Color:</strong> #1E40AF (Blue-800)</p>
                <p style="margin: 4px 0;"><strong>Label Position:</strong> Above bar with 8px gap</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    `,
  }),
};
