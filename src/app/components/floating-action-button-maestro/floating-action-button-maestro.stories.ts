import type { Meta, StoryObj } from '@storybook/angular';
import { FloatingActionButtonMaestroComponent } from './floating-action-button-maestro.component';

const meta: Meta<FloatingActionButtonMaestroComponent> = {
  title: 'Components/FloatingActionButtonMaestro',
  component: FloatingActionButtonMaestroComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['circular', 'extendido', 'circular-con-badge'],
      description: 'Tipo de FAB: circular, extendido o circular con badge',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'success'],
      description: 'Color del FAB',
    },
    label: {
      control: 'text',
      description: 'Etiqueta del FAB (visible en variante extendida)',
    },
    iconName: {
      control: 'select',
      options: ['file-text', 'message-square', 'plus'],
      description: 'Nombre del icono a mostrar',
    },
    floating: {
      control: 'boolean',
      description: 'Si es true, el FAB se posiciona flotante (fixed)',
    },
    showBadge: {
      control: 'boolean',
      description: 'Mostrar badge de notificaciones (solo en circular-con-badge)',
    },
    badgeCount: {
      control: 'number',
      description: 'Número de notificaciones en el badge',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# FloatingActionButtonMaestro Component

Un componente de Floating Action Button (FAB) heredando la lógica y diseño de BotonMaestro.

## Variantes:

### Circular
- Botón perfectamente circular (~64px)
- Icono centrado en blanco
- Fondo de color configurable
- Elevación y sombra para efecto flotante

### Extendido
- Botón tipo píldora (rectangular con esquinas redondeadas)
- Icono a la izquierda + texto a la derecha
- Altura: 56px, ancho variable según el contenido
- Fondo de color configurable

### Circular con Badge
- Igual que circular, pero con un badge de notificaciones
- Badge: círculo rojo en la esquina superior derecha
- Muestra un número configurable de notificaciones

## Colores disponibles:

- **primary**: Púrpura (#6419E6) - por defecto
- **secondary**: Blanco con borde gris
- **warning**: Naranja (#FB923C)
- **success**: Verde (#16A34A)

## Características:

- **Hereda diseño de BotonMaestro**: Misma tipografía, curvatura e iconos
- **Floating**: Si \`floating = true\`, se posiciona con \`position: fixed\`
- **Posicionable**: Control de posición con bottom/right/top/left
- **Elevación**: Sombra suave que aumenta al hover
- **Interactivo**: Emite evento \`clicked\` al hacer clic
- **Badge configurable**: Número de notificaciones variable

## Comportamiento:

- Al hacer clic, emite \`clicked\`
- Transiciones suaves entre estados
- Elevación y transform al hover para efecto 3D
- El badge solo se muestra si \`showBadge = true\` y \`badgeCount > 0\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<FloatingActionButtonMaestroComponent>;

export const CircularBasic: Story = {
  args: {
    variant: 'circular',
    floating: true,
    color: 'primary',
    label: 'Mensaje',
    iconName: 'message-square',
    position: { bottom: '20px', right: '20px' },
  },
  parameters: {
    docs: {
      storyDescription: `
FAB circular básico en la esquina inferior derecha.

Visual: Círculo púrpura (#6419E6) con icono de mensaje blanco.
Efecto flotante con sombra suave.

Al pasar el mouse, la sombra aumenta y se desplaza ligeramente hacia arriba.
Al hacer clic, emite el evento \`clicked\`.
      `,
    },
  },
};

export const ExtendedReport: Story = {
  args: {
    variant: 'extendido',
    floating: true,
    color: 'warning',
    label: 'Reporte de incidencia',
    iconName: 'file-text',
    position: { bottom: '20px', right: '20px' },
  },
  parameters: {
    docs: {
      storyDescription: `
FAB extendido "Reporte de incidencia".

Visual: Píldora naranja (#FB923C) con icono de documento y texto blanco.
Altura constante (56px), ancho variable según el texto.

Este es el patrón ideal para acciones principales que necesitan identificación textual.
      `,
    },
  },
};

export const CircularWithBadge: Story = {
  args: {
    variant: 'circular-con-badge',
    floating: true,
    color: 'primary',
    label: 'Mensajes',
    iconName: 'message-square',
    showBadge: true,
    badgeCount: 9,
    position: { bottom: '20px', right: '20px' },
  },
  parameters: {
    docs: {
      storyDescription: `
FAB circular con badge de notificaciones.

Visual: Círculo púrpura con icono de mensaje + badge rojo en esquina superior derecha.
El badge muestra el número de notificaciones (en este caso: 9).

El badge tiene fondo rojo (#EF4444), borde blanco y número blanco.
Se posiciona en la esquina superior derecha del FAB.

El badge solo se muestra si \`showBadge = true\` y \`badgeCount > 0\`.
      `,
    },
  },
};

export const NonFloating: Story = {
  args: {
    variant: 'circular',
    floating: false,
    color: 'success',
    label: 'Guardar',
    iconName: 'plus',
  },
  parameters: {
    docs: {
      storyDescription: `
FAB no flotante dentro del flujo del layout.

Cuando \`floating = false\`, el FAB se comporta como un botón normal
sin posicionamiento fixed, permitiendo su uso dentro de contenedores.

Este ejemplo muestra un FAB verde (#16A34A) sin efecto flotante.
      `,
    },
  },
};

export const Colors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 24px; padding: 40px; flex-wrap: wrap;">
        <app-floating-action-button-maestro
          variant="circular"
          color="primary"
          iconName="message-square"
          floating="false"
        ></app-floating-action-button-maestro>
        <app-floating-action-button-maestro
          variant="circular"
          color="warning"
          iconName="file-text"
          floating="false"
        ></app-floating-action-button-maestro>
        <app-floating-action-button-maestro
          variant="circular"
          color="success"
          iconName="plus"
          floating="false"
        ></app-floating-action-button-maestro>
        <app-floating-action-button-maestro
          variant="circular"
          color="secondary"
          iconName="message-square"
          floating="false"
        ></app-floating-action-button-maestro>
      </div>
    `,
    components: { FloatingActionButtonMaestroComponent },
  }),
  parameters: {
    docs: {
      storyDescription: `
Paleta de colores disponibles.

De izquierda a derecha:
1. Primary (Púrpura #6419E6)
2. Warning (Naranja #FB923C)
3. Success (Verde #16A34A)
4. Secondary (Blanco con borde)

Todos comparten la misma estructura y comportamiento.
      `,
    },
  },
};

export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 40px; padding: 40px; align-items: flex-start; flex-wrap: wrap;">
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <span style="font-weight: 600;">Circular</span>
          <app-floating-action-button-maestro
            variant="circular"
            color="primary"
            iconName="message-square"
            floating="false"
          ></app-floating-action-button-maestro>
        </div>
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <span style="font-weight: 600;">Extendido</span>
          <app-floating-action-button-maestro
            variant="extendido"
            color="warning"
            label="Reporte"
            iconName="file-text"
            floating="false"
          ></app-floating-action-button-maestro>
        </div>
        <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
          <span style="font-weight: 600;">Con Badge</span>
          <app-floating-action-button-maestro
            variant="circular-con-badge"
            color="primary"
            iconName="message-square"
            [showBadge]="true"
            [badgeCount]="9"
            floating="false"
          ></app-floating-action-button-maestro>
        </div>
      </div>
    `,
    components: { FloatingActionButtonMaestroComponent },
  }),
  parameters: {
    docs: {
      storyDescription: `
Las 3 variantes del FAB lado a lado.

El componente FloatingActionButtonMaestro hereda completamente la lógica
y diseño del BotonMaestro, adaptándose al patrón de Floating Action Button.
      `,
    },
  },
};
