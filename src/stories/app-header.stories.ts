import type { Meta, StoryObj } from '@storybook/angular';
import { AppHeaderComponent, AppHeaderUser } from './app-header.component';

const meta: Meta<AppHeaderComponent> = {
  title: 'Layout/AppHeader',
  component: AppHeaderComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# AppHeader

AppHeader es un componente de layout compuesto que estructura la barra de navegación superior de la aplicación.

## Características

- **Composite Component**: Reutiliza los componentes Button y Avatar del sistema
- **Flexbox Layout**: Usa diseño flexible con secciones Left y Right
- **Responsive**: Se adapta a diferentes tamaños de pantalla (mobile, tablet, desktop)
- **Icons Visible**: Usa DomSanitizer para renderizar iconos SVG de forma segura
- **Props Editables**: Permite editar title, showMenuButton y user en Builder.io

## Estructura

### Left Section
- **Menu Button**: Icono hamburger para abrir/cerrar navegación lateral (configurable)
- **Title**: Título o logo editable de la aplicación

### Right Section
- **Notifications**: Icono de campana para notificaciones
- **Action Button**: Botón con icono y texto (ej. "Actualizar")
- **User Profile**: Avatar de usuario con nombre (opcional)

## Uso

\`\`\`typescript
<bsg-app-header
  [title]="'Mi Aplicación'"
  [showMenuButton]="true"
  [user]="{ name: 'Usuario', avatarImage: 'url' }"
  [actionLabel]="'Actualizar'"
  (menuClick)="onMenuClick()"
  (notificationsClick)="onNotificationsClick()"
  (actionClick)="onActionClick()"
></bsg-app-header>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Título o nombre de la aplicación mostrado en el header',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Integra CRM' },
      },
    },
    showMenuButton: {
      control: 'boolean',
      description: 'Muestra u oculta el botón de menú hamburger',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    user: {
      control: 'object',
      description: 'Objeto con información del usuario (name, avatarImage opcional)',
      table: {
        type: { summary: 'AppHeaderUser' },
        defaultValue: { summary: 'undefined' },
      },
    },
    actionLabel: {
      control: 'text',
      description: 'Texto del botón de acción principal',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Actualizar' },
      },
    },
    menuClick: {
      action: 'menuClick',
      description: 'Evento emitido al hacer click en el botón de menú',
      table: {
        type: { summary: '() => void' },
      },
    },
    notificationsClick: {
      action: 'notificationsClick',
      description: 'Evento emitido al hacer click en el botón de notificaciones',
      table: {
        type: { summary: '() => void' },
      },
    },
    actionClick: {
      action: 'actionClick',
      description: 'Evento emitido al hacer click en el botón de acción',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<AppHeaderComponent>;

// =====================
// STRUCTURE
// =====================

/**
 * AppHeader base structure
 * Shows the core layout with all sections: title, action button, notifications, and user profile
 */
export const Structure: Story = {
  args: {
    title: 'Integra CRM',
    showMenuButton: true,
    actionLabel: 'Actualizar',
    user: {
      name: 'Yesica Palomino',
      avatarImage: '',
    },
  },
};

// =====================
// BEHAVIOR
// =====================

/**
 * AppHeader behavior with menu button
 * Shows the AppHeader with menu button visible (toggles side navigation)
 */
export const WithMenuButton: Story = {
  args: {
    title: 'Dashboard Central',
    showMenuButton: true,
    actionLabel: 'Sincronizar',
    user: {
      name: 'Carlos Méndez',
      avatarImage: '',
    },
  },
};

/**
 * AppHeader behavior without menu button
 * Shows the AppHeader without menu button (no side navigation toggle)
 */
export const WithoutMenuButton: Story = {
  args: {
    title: 'Portal Público',
    showMenuButton: false,
    actionLabel: 'Recargar',
    user: {
      name: 'Ana García',
      avatarImage: 'https://i.pravatar.cc/150?img=30',
    },
  },
};

// =====================
// EXAMPLES
// =====================

/**
 * AppHeader with user profile
 * Shows the complete header with user name and avatar
 */
export const WithUser: Story = {
  tags: ['!dev'],
  args: {
    title: 'Integra CRM',
    showMenuButton: true,
    actionLabel: 'Actualizar',
    user: {
      name: 'Yesica Palomino',
      avatarImage: '',
    },
  },
};

/**
 * AppHeader without user profile
 * Shows the header without user section
 */
export const WithoutUser: Story = {
  tags: ['!dev'],
  args: {
    title: 'Portal Público',
    showMenuButton: true,
    actionLabel: 'Recargar',
    user: undefined,
  },
};

/**
 * AppHeader with avatar image
 * Shows the header with a custom avatar image
 */
export const WithAvatarImage: Story = {
  tags: ['!dev'],
  args: {
    title: 'Integra CRM',
    showMenuButton: true,
    actionLabel: 'Actualizar',
    user: {
      name: 'Yesica Palomino',
      avatarImage: 'https://i.pravatar.cc/150?img=47',
    },
  },
};

/**
 * AppHeader with custom action label
 * Shows the header with different action button label
 */
export const CustomActionLabel: Story = {
  tags: ['!dev'],
  args: {
    title: 'Sistema de Ventas',
    showMenuButton: true,
    actionLabel: 'Guardar',
    user: {
      name: 'Ana García',
      avatarImage: 'https://i.pravatar.cc/150?img=30',
    },
  },
};

/**
 * AppHeader with long texts
 * Tests layout with long title and user names
 */
export const LongTexts: Story = {
  tags: ['!dev'],
  args: {
    title: 'Sistema Integrado de Gestión Empresarial',
    showMenuButton: true,
    actionLabel: 'Actualizar Datos',
    user: {
      name: 'María Fernanda Rodríguez López',
      avatarImage: '',
    },
  },
};

/**
 * AppHeader minimal configuration
 * Shows the header with minimal content (no user, simple title)
 */
export const Minimal: Story = {
  tags: ['!dev'],
  args: {
    title: 'App',
    showMenuButton: false,
    actionLabel: 'Acción',
    user: undefined,
  },
};

/**
 * AppHeader interactive example
 * Full featured header for interactive testing
 */
export const Interactive: Story = {
  tags: ['!dev'],
  args: {
    title: 'Integra CRM',
    showMenuButton: true,
    actionLabel: 'Actualizar',
    user: {
      name: 'Yesica Palomino',
      avatarImage: '',
    },
  },
  play: async ({ canvasElement }) => {
    // This story is for interactive testing in Storybook
    console.log('AppHeader Interactive Story loaded');
  },
};
