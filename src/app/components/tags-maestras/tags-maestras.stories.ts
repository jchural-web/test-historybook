import type { Meta, StoryObj } from '@storybook/angular';
import { TagsMaestrasComponent, ColorVariant } from './tags-maestras.component';

const meta: Meta<TagsMaestrasComponent> = {
  title: 'Components/TagsMaestras',
  component: TagsMaestrasComponent,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto que se muestra en la etiqueta',
    },
    showIcon: {
      control: 'boolean',
      description: 'Si true, muestra un icono Lucide a la izquierda del texto',
    },
    iconName: {
      control: 'select',
      options: ['flag', 'check-circle', 'phone', 'user', 'speaker'],
      description: 'Nombre del icono Lucide a mostrar (si showIcon es true)',
    },
    colorVariant: {
      control: 'select',
      options: ['green', 'orange', 'red', 'blue', 'purple', 'gray', 'custom'],
      description: 'Variante de color predefinida',
    },
    solid: {
      control: 'boolean',
      description: 'Si true, usa fondo sólido. Si false, usa estilo outline',
    },
    customBackground: {
      control: 'color',
      description: 'Sobreescribe el color de fondo (solo si colorVariant es "custom")',
    },
    customBorder: {
      control: 'color',
      description: 'Sobreescribe el color del borde (solo si colorVariant es "custom")',
    },
    customTextColor: {
      control: 'color',
      description: 'Sobreescribe el color del texto (solo si colorVariant es "custom")',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# TagsMaestras Component

Un componente de etiqueta informativa (chip/pastilla) para mostrar información categórica.

## Características

- **Forma de pastilla**: Border-radius alto para apariencia redondeada
- **Dos estilos**: Outline (solo borde) y Solid (fondo lleno)
- **Colores predefinidos**: verde, naranja, rojo, azul, morado, gris
- **Icono opcional**: Soporta iconos Lucide alineados a la izquierda
- **Sin estados**: Las etiquetas son solo informativas, sin hover especial ni estados interactivos
- **Customizable**: Permite sobreescribir colores con props custom

## Variantes de color

- **green**: Para estados positivos, completado
- **orange**: Para estados de advertencia, en progreso
- **red**: Para estados críticos, error
- **blue**: Para canales, información general
- **purple**: Para estados especiales, seguimiento
- **gray**: Para información neutral, ubicación

El componente se adapta automáticamente al texto, sin ancho fijo.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<TagsMaestrasComponent>;

// Prioridades
export const AltaPriority: Story = {
  args: {
    label: 'Alta',
    colorVariant: 'green',
    solid: false,
    showIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Etiqueta de prioridad Alta en estilo outline con color verde.',
      },
    },
  },
};

export const MediaPriority: Story = {
  args: {
    label: 'Media',
    colorVariant: 'orange',
    solid: false,
    showIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Etiqueta de prioridad Media en estilo outline con color naranja.',
      },
    },
  },
};

export const BajaPriority: Story = {
  args: {
    label: 'Baja',
    colorVariant: 'red',
    solid: false,
    showIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Etiqueta de prioridad Baja en estilo outline con color rojo.',
      },
    },
  },
};

// Canales/Estados
export const CorreosChannel: Story = {
  args: {
    label: 'Correos',
    colorVariant: 'blue',
    solid: false,
    showIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Etiqueta de canal Correos en estilo outline con color azul.',
      },
    },
  },
};

export const AutomaticChannel: Story = {
  args: {
    label: 'Automático',
    colorVariant: 'blue',
    solid: true,
    showIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Etiqueta de estado Automático en estilo solid con color azul.',
      },
    },
  },
};

export const WhatsAppTracking: Story = {
  args: {
    label: 'Seguimiento de WhatsApp',
    colorVariant: 'purple',
    solid: false,
    showIcon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Etiqueta de seguimiento de WhatsApp en estilo outline con color morado.',
      },
    },
  },
};

// Tags sólidas con icono
export const CurrentPhase: Story = {
  args: {
    label: 'Fase Actual: IP',
    colorVariant: 'green',
    solid: true,
    showIcon: true,
    iconName: 'check-circle',
  },
  parameters: {
    docs: {
      description: {
        story: 'Etiqueta de estado actual (Fase Actual: IP) en estilo solid con icono de check-circle.',
      },
    },
  },
};

// Ubicación
export const LocationPeru: Story = {
  args: {
    label: 'Perú – Arequipa',
    colorVariant: 'gray',
    solid: false,
    showIcon: true,
    iconName: 'flag',
  },
  parameters: {
    docs: {
      description: {
        story: 'Etiqueta de ubicación (Perú – Arequipa) en estilo outline con icono de bandera.',
      },
    },
  },
};

// Ejemplo con icono de teléfono
export const PhoneContact: Story = {
  args: {
    label: 'Teléfono',
    colorVariant: 'blue',
    solid: false,
    showIcon: true,
    iconName: 'phone',
  },
  parameters: {
    docs: {
      description: {
        story: 'Etiqueta de contacto telefónico con icono de teléfono.',
      },
    },
  },
};

// Ejemplo con colores custom
export const CustomColors: Story = {
  args: {
    label: 'Tag Personalizada',
    colorVariant: 'custom',
    solid: false,
    showIcon: false,
    customBackground: '#FFF3CD',
    customBorder: '#FFD700',
    customTextColor: '#856404',
  },
  parameters: {
    docs: {
      description: {
        story: 'Etiqueta con colores personalizados usando props custom.',
      },
    },
  },
};

// Showcase de todas las variantes
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <app-tags-maestras label="Alta" colorVariant="green" [solid]="false"></app-tags-maestras>
        <app-tags-maestras label="Media" colorVariant="orange" [solid]="false"></app-tags-maestras>
        <app-tags-maestras label="Baja" colorVariant="red" [solid]="false"></app-tags-maestras>
        <app-tags-maestras label="Correos" colorVariant="blue" [solid]="false"></app-tags-maestras>
        <app-tags-maestras label="Automático" colorVariant="blue" [solid]="true"></app-tags-maestras>
        <app-tags-maestras label="Seguimiento de WhatsApp" colorVariant="purple" [solid]="false"></app-tags-maestras>
        <app-tags-maestras label="Fase Actual: IP" colorVariant="green" [solid]="true" showIcon="true" iconName="check-circle"></app-tags-maestras>
        <app-tags-maestras label="Perú – Arequipa" colorVariant="gray" [solid]="false" showIcon="true" iconName="flag"></app-tags-maestras>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Showcase de todas las variantes: prioridades, canales, estados y ubicación. Las etiquetas son completamente estáticas e informativas, sin estados interactivos.',
      },
    },
  },
};
