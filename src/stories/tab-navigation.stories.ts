import type { Meta, StoryObj } from '@storybook/angular';
import { TabNavigationComponent } from './tab-navigation.component';

const meta: Meta<TabNavigationComponent> = {
  title: 'Example/TabNavigation',
  component: TabNavigationComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tab size',
    },
    variant: {
      control: 'select',
      options: ['text', 'icon-text'],
      description: 'Tab variant (text only or icon + text)',
    },
    state: {
      control: 'select',
      options: ['default', 'hover', 'active', 'focus', 'disabled'],
      description: 'Tab state',
    },
    activeIndex: {
      control: 'number',
      description: 'Index of the active tab',
    },
    color: {
      control: 'select',
      options: ['blue', 'green', 'yellow'],
      description: 'Tab color variant',
    },
    tabs: {
      control: 'object',
      description: 'Array of tab items',
    },
    scrollable: {
      control: 'boolean',
      description: 'Enable horizontal scrolling with chevron navigation when tabs overflow',
    },
    alwaysShowChevrons: {
      control: 'boolean',
      description:
        'When scrollable=true, always show chevrons (enabled/disabled) instead of hiding them',
    },
  },
  args: {
    size: 'md',
    variant: 'text',
    state: 'default',
    activeIndex: 0,
    scrollable: false,
    alwaysShowChevrons: false,
    tabs: [
      { label: 'Solicitudes Realizadas', count: 3 },
      { label: 'Información del cliente' },
      { label: 'Documentos', count: 5 },
    ],
  },
};

export default meta;
type Story = StoryObj<TabNavigationComponent>;

// ===========================
// Default - Interactive TabNavigation
// ===========================

export const Default: Story = {
  args: {
    size: 'md',
    variant: 'text',
    state: 'default',
    activeIndex: 0,
    tabs: [
      { label: 'Solicitudes Realizadas', count: 3 },
      { label: 'Información del cliente' },
      { label: 'Documentos', count: 5 },
    ],
  },
};

// ===========================
// Design System Showcase
// ===========================

export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Roboto, sans-serif; padding: 24px; max-width: 1400px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tab Navigation Component Library</h2>
        
        <!-- Text Variant Grid -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Text Variant</h3>
          
          <div style="display: grid; grid-template-columns: 100px repeat(5, 1fr); gap: 24px 32px; align-items: center;">
            <!-- Headers -->
            <div></div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Default</div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Hover</div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Active</div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Focus</div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Disabled</div>
            
            <!-- SM Row -->
            <div style="font-size: 16px; font-weight: 600; color: #202020;">sm</div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="sm" 
                state="default" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="sm" 
                state="hover" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="sm" 
                state="default" 
                [activeIndex]="0"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="sm" 
                state="focus" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="sm" 
                state="disabled" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            
            <!-- MD Row -->
            <div style="font-size: 16px; font-weight: 600; color: #202020;">md</div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="md" 
                state="default" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="md" 
                state="hover" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="md" 
                state="default" 
                [activeIndex]="0"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="md" 
                state="focus" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="md" 
                state="disabled" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            
            <!-- LG Row -->
            <div style="font-size: 16px; font-weight: 600; color: #202020;">lg</div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="lg" 
                state="default" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="lg" 
                state="hover" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="lg" 
                state="default" 
                [activeIndex]="0"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="lg" 
                state="focus" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="text" 
                size="lg" 
                state="disabled" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Solicitudes Realizadas', count: 3 }]">
              </bsg-tab-navigation>
            </div>
          </div>
        </section>

        <!-- Icon-Text Variant Grid -->
        <section style="margin-bottom: 64px;">
          <h3 style="margin-bottom: 24px; font-size: 20px; font-weight: 600;">Icon-Text Variant</h3>
          
          <div style="display: grid; grid-template-columns: 100px repeat(5, 1fr); gap: 24px 32px; align-items: center;">
            <!-- Headers -->
            <div></div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Default</div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Hover</div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Active</div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Focus</div>
            <div style="font-size: 16px; font-weight: 600; color: #202020;">Disabled</div>
            
            <!-- SM Row -->
            <div style="font-size: 16px; font-weight: 600; color: #202020;">sm</div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="sm" 
                state="default" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="sm" 
                state="hover" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="sm" 
                state="default" 
                [activeIndex]="0"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="sm" 
                state="focus" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="sm" 
                state="disabled" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            
            <!-- MD Row -->
            <div style="font-size: 16px; font-weight: 600; color: #202020;">md</div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="md" 
                state="default" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="md" 
                state="hover" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="md" 
                state="default" 
                [activeIndex]="0"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="md" 
                state="focus" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="md" 
                state="disabled" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            
            <!-- LG Row -->
            <div style="font-size: 16px; font-weight: 600; color: #202020;">lg</div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="lg" 
                state="default" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="lg" 
                state="hover" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="lg" 
                state="default" 
                [activeIndex]="0"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="lg" 
                state="focus" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
            <div>
              <bsg-tab-navigation 
                variant="icon-text" 
                size="lg" 
                state="disabled" 
                [activeIndex]="-1"
                [tabs]="[{ label: 'Información del cliente', icon: true }]">
              </bsg-tab-navigation>
            </div>
          </div>
        </section>

        <!-- Design Specifications -->
        <section style="margin-top: 64px;">
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600; color: #202020;">Design Specifications</h3>
          
          <div style="font-size: 14px; color: #64748B; line-height: 1.8;">
            <p style="margin: 16px 0 8px 0;"><strong>Variant: Text</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Displays label with optional counter in parentheses</li>
              <li>Horizontal layout with centered text</li>
              <li>Border Radius: 8px</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Variant: Icon-Text</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Displays icon (32px circle) above label</li>
              <li>Vertical layout (column)</li>
              <li>Icon Background: #DBEAFE (Blue-100) default, #3B82F6 (Blue-500) active</li>
              <li>Icon Stroke: #2563EB default, white active</li>
              <li>Label: 12px, 600 weight</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>States:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li><strong>Default:</strong> Background #EFF6FF, Text #2563EB</li>
              <li><strong>Hover:</strong> Opacity 90%, Text underlined</li>
              <li><strong>Active:</strong> Background #2563EB, Text white</li>
              <li><strong>Focus:</strong> Border 1px solid #7C3AED (Violet-600)</li>
              <li><strong>Disabled:</strong> Opacity 40%, no interactions</li>
            </ul>
            
            <p style="margin: 16px 0 8px 0;"><strong>Behavior:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Only one tab can be active at a time</li>
              <li>Clicking inactive tab emits onTabChange event</li>
              <li>Disabled state prevents all interactions</li>
              <li>Use controls panel to change state, size, variant, and color</li>
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
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">TabNavigation Usage Examples</h3>

        <!-- Example 1: Blue Color Variant -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Blue Tabs with Counters</h4>
          <bsg-tab-navigation
            variant="text"
            size="md"
            color="blue"
            [tabs]="[
              { label: 'Solicitudes Realizadas', count: 3 },
              { label: 'En Proceso', count: 12 },
              { label: 'Completadas', count: 45 }
            ]"
            [activeIndex]="0">
          </bsg-tab-navigation>
        </div>

        <!-- Example 2: Green Color Variant -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Green Icon-Text Tabs</h4>
          <bsg-tab-navigation
            variant="icon-text"
            size="lg"
            color="green"
            [tabs]="[
              { label: 'Información del cliente', icon: true },
              { label: 'Detalles de pago', icon: true },
              { label: 'Historial de pedidos', icon: true }
            ]"
            [activeIndex]="1">
          </bsg-tab-navigation>
        </div>

        <!-- Example 3: Yellow Color Variant -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Yellow Settings Navigation</h4>
          <bsg-tab-navigation
            variant="text"
            size="sm"
            color="yellow"
            [tabs]="[
              { label: 'General' },
              { label: 'Seguridad' },
              { label: 'Notificaciones' },
              { label: 'Privacidad' }
            ]"
            [activeIndex]="2">
          </bsg-tab-navigation>
        </div>

        <!-- Example 4: Green Dashboard Sections -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Green Dashboard Views</h4>
          <bsg-tab-navigation
            variant="icon-text"
            size="md"
            color="green"
            [tabs]="[
              { label: 'Resumen', icon: true },
              { label: 'Análisis', icon: true },
              { label: 'Reportes', icon: true },
              { label: 'Configuración', icon: true }
            ]"
            [activeIndex]="0">
          </bsg-tab-navigation>
        </div>

        <!-- Example 5: Yellow Tabs with Counters -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Yellow Request Tabs</h4>
          <bsg-tab-navigation
            variant="text"
            size="md"
            color="yellow"
            [tabs]="[
              { label: 'Pendientes', count: 8 },
              { label: 'En Revisión', count: 5 },
              { label: 'Completadas', count: 32 }
            ]"
            [activeIndex]="0">
          </bsg-tab-navigation>
        </div>

        <!-- Example 6: Scrollable Tabs with Carousel Navigation -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Scrollable Tabs - Many Benefits (Blue)</h4>
          <p style="margin: 0 0 12px 0; font-size: 12px; color: #64748B;">Navigation buttons always visible: enabled when scrollable, disabled when at boundaries (icon + text variant)</p>
          <bsg-tab-navigation
            variant="icon-text"
            size="md"
            color="blue"
            [scrollable]="true"
            [alwaysShowChevrons]="true"
            [tabs]="[
              { label: 'Mensajes Recibidos', icon: true },
              { label: 'Beneficios Pendientes', icon: true },
              { label: 'Beneficios Pendientes', icon: true },
              { label: 'Beneficios Pendientes', icon: true },
              { label: 'Beneficios Pendientes', icon: true },
              { label: 'Beneficios Pendientes', icon: true },
              { label: 'Beneficios Pendientes', icon: true },
              { label: 'Beneficios Pendientes', icon: true },
              { label: 'Beneficios Pendientes', icon: true },
              { label: 'Beneficios Pendientes', icon: true }
            ]"
            [activeIndex]="0">
          </bsg-tab-navigation>
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
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Interactive TabNavigation Playground</h3>
        <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B;">
          Use the controls panel to adjust variant, size, color, state, and tabs
        </p>

        <div style="display: flex; justify-content: center; min-height: 200px; padding: 40px; background: #F8FAFC; border-radius: 8px;">
          <bsg-tab-navigation
            [variant]="variant"
            [size]="size"
            [color]="color"
            [state]="state"
            [tabs]="tabs"
            [activeIndex]="activeIndex"
            (onTabChange)="handleTabChange($event)">
          </bsg-tab-navigation>
        </div>

        <div style="margin-top: 32px; padding: 16px; background: #FEF3C7; border-radius: 8px; font-size: 13px; color: #78350F; line-height: 1.6;">
          <strong>Tips:</strong>
          <ul style="margin: 8px 0 0 20px;">
            <li>Set <code>variant</code> to "text" for simple tabs or "icon-text" for icon-based tabs</li>
            <li>Choose <code>color</code> from "blue", "green", or "yellow" variants</li>
            <li>Use <code>count</code> property in tabs array to show counters (text variant only)</li>
            <li>Set <code>activeIndex</code> to control which tab is selected (0-based)</li>
            <li>Change <code>state</code> to see different states (default, hover, active, focus, disabled)</li>
            <li>Hover state shows with text underline decoration</li>
          </ul>
        </div>
      </div>
    `,
    component: {
      handleTabChange: (index: number) => console.log('Tab changed to:', index),
    },
  }),
  args: {
    variant: 'text',
    size: 'md',
    color: 'blue',
    state: 'default',
    tabs: [
      { label: 'Solicitudes Realizadas', count: 3 },
      { label: 'Información del cliente' },
      { label: 'Documentos', count: 5 },
    ],
    activeIndex: 0,
  },
};
