import type { Meta, StoryObj } from '@storybook/angular';
import { IconSlotComponent } from './icon-slot.component';

const meta: Meta<IconSlotComponent> = {
  title: 'Components/IconSlot',
  component: IconSlotComponent,
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'select',
      options: ['check-circle', 'phone', 'user', 'map-pin', 'percent'],
      description: 'Nombre del icono Lucide a mostrar',
    },
    backgroundColor: {
      control: 'color',
      description: 'Color de fondo del círculo (puede ser cualquier color, incluso transparent)',
    },
    iconColor: {
      control: 'color',
      description: 'Color del icono (puede ser cualquier color)',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del contenedor circular',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# IconSlot Component

Un contenedor circular configurable para mostrar iconos Lucide.

**Nota importante:** Los colores mostrados en los ejemplos son solo demostrativos. 
El componente acepta cualquier combinación de colores a través de los inputs \`backgroundColor\` e \`iconColor\`.

## Características:
- Contenedor circular (border-radius: 50%)
- Tamaños: sm (~32px), md (~40px), lg (~48px)
- Colores completamente personalizables
- Iconos Lucide centrados automáticamente
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<IconSlotComponent>;

export const BlueBackgroundWhiteIcon: Story = {
  args: {
    iconName: 'check-circle',
    backgroundColor: '#004FFF',
    iconColor: '#FFFFFF',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con fondo azul sólido e icono blanco',
      },
    },
  },
};

export const LightBlueBackgroundBlueIcon: Story = {
  args: {
    iconName: 'phone',
    backgroundColor: '#E3F2FD',
    iconColor: '#004FFF',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con fondo azul claro e icono azul',
      },
    },
  },
};

export const NoBackgroundGreenIcon: Story = {
  args: {
    iconName: 'user',
    backgroundColor: 'transparent',
    iconColor: '#00BC3A',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo sin fondo (transparente) con icono verde',
      },
    },
  },
};

export const WhiteBackgroundGreenIcon: Story = {
  args: {
    iconName: 'user',
    backgroundColor: '#FFFFFF',
    iconColor: '#00BC3A',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con fondo blanco e icono verde',
      },
    },
  },
};

export const LightRedBackgroundRedIcon: Story = {
  args: {
    iconName: 'map-pin',
    backgroundColor: '#FEE2E2',
    iconColor: '#FF0000',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con fondo rojo claro e icono rojo',
      },
    },
  },
};

export const LightYellowBackgroundYellowIcon: Story = {
  args: {
    iconName: 'percent',
    backgroundColor: '#FEF9C3',
    iconColor: '#D6A22F',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con fondo amarillo claro e icono mostaza',
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    iconName: 'check-circle',
    backgroundColor: '#004FFF',
    iconColor: '#FFFFFF',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de tamaño pequeño (32px)',
      },
    },
  },
};

export const MediumSize: Story = {
  args: {
    iconName: 'phone',
    backgroundColor: '#E3F2FD',
    iconColor: '#004FFF',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de tamaño mediano (40px)',
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    iconName: 'user',
    backgroundColor: '#FFFFFF',
    iconColor: '#00BC3A',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo de tamaño grande (48px)',
      },
    },
  },
};

export const CustomColors: Story = {
  args: {
    iconName: 'map-pin',
    backgroundColor: '#E0F2F1',
    iconColor: '#00897B',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ejemplo con colores personalizados (verde agua)',
      },
    },
  },
};

export const AllIconsShowcase: Story = {
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <app-icon-slot 
          iconName="check-circle" 
          backgroundColor="#004FFF" 
          iconColor="#FFFFFF" 
          size="md">
        </app-icon-slot>
        <app-icon-slot 
          iconName="phone" 
          backgroundColor="#E3F2FD" 
          iconColor="#004FFF" 
          size="md">
        </app-icon-slot>
        <app-icon-slot 
          iconName="user" 
          backgroundColor="#FFFFFF" 
          iconColor="#00BC3A" 
          size="md">
        </app-icon-slot>
        <app-icon-slot 
          iconName="map-pin" 
          backgroundColor="#FEE2E2" 
          iconColor="#FF0000" 
          size="md">
        </app-icon-slot>
        <app-icon-slot 
          iconName="percent" 
          backgroundColor="#FEF9C3" 
          iconColor="#D6A22F" 
          size="md">
        </app-icon-slot>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Muestra todos los iconos disponibles con diferentes combinaciones de colores',
      },
    },
  },
};
