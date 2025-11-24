import type { Meta, StoryObj } from '@storybook/angular';
import { ContextHeaderComponent } from './context-header.component';

const meta: Meta<ContextHeaderComponent> = {
  title: 'Components/ContextHeader',
  component: ContextHeaderComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título o descripción del contexto',
    },
    backgroundColor: {
      control: 'color',
      description: 'Color de fondo dinámico (puede ser cualquier color)',
    },
    iconName: {
      control: 'select',
      options: ['phone', 'thumbs-down', 'info'],
      description: 'Nombre del icono Lucide a mostrar',
    },
    textColor: {
      control: 'color',
      description: 'Color del texto e iconos',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# ContextHeader Component

Una barra de contexto flexible que se adapta a cualquier fondo y contenido.

## Características principales:

### Color dinámico
- El color del fondo NO es fijo
- Puede ser verde, rojo, morado, azul, amarillo o cualquier color que el sistema requiera
- El color depende completamente del contexto y del flujo del usuario

### Elementos
- **Chevron** (izquierda): Botón clickeable para volver/cerrar
- **Icono**: Icono Lucide que representa la acción o estado
- **Título**: Texto descriptivo del contexto actual

### Uso
- Funciona tanto como barra independiente como dentro de modales/paneles
- Se adapta al ancho disponible
- Altura fija: 66px
- Bordes redondeados (9px)

## Comportamiento:

1. Al hacer clic en el chevron, emite el evento \`backClick\`
2. El color y los iconos son completamente personalizables
3. El componente hereda automáticamente el color del texto desde \`textColor\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ContextHeaderComponent>;

export const PositiveGreen: Story = {
  args: {
    title: 'Respuesta telefónica positiva',
    backgroundColor: '#22C55E',
    iconName: 'phone',
    textColor: '#FFFFFF',
  },
  parameters: {
    docs: {
      storyDescription: `
ContextHeader con fondo verde (#22C55E) e icono de teléfono.

Representa un estado positivo o una respuesta exitosa.

**Nota importante:**
El color del ContextHeader es totalmente variable.
En este caso es verde, pero puede ser rojo, morado, azul, amarillo o cualquier otro.
No existe una paleta fija: el color depende del contexto.
      `,
    },
  },
};

export const NegativeRed: Story = {
  args: {
    title: 'Respuesta telefónica negativa',
    backgroundColor: '#EF4444',
    iconName: 'thumbs-down',
    textColor: '#FFFFFF',
  },
  parameters: {
    docs: {
      storyDescription: `
ContextHeader con fondo rojo (#EF4444) e icono de pulgar hacia abajo.

Representa un estado negativo o un rechazo.

**Nota importante:**
El color del ContextHeader es totalmente variable.
En este caso es rojo, pero puede ser verde, morado, azul, amarillo o cualquier otro.
No existe una paleta fija: el color depende del contexto.
      `,
    },
  },
};

export const InformationPurple: Story = {
  args: {
    title: 'Información general',
    backgroundColor: '#6D28D9',
    iconName: 'info',
    textColor: '#FFFFFF',
  },
  parameters: {
    docs: {
      storyDescription: `
ContextHeader con fondo morado (#6D28D9) e icono de información.

Representa un estado informativo o una sección general.

**Nota importante:**
El color del ContextHeader es totalmente variable.
En este caso es morado, pero puede ser verde, rojo, azul, amarillo o cualquier otro.
No existe una paleta fija: el color depende del contexto.
      `,
    },
  },
};

export const CustomColors: Story = {
  args: {
    title: 'Contexto personalizado',
    backgroundColor: '#3B82F6',
    iconName: 'info',
    textColor: '#FFFFFF',
  },
  parameters: {
    docs: {
      storyDescription: `
ContextHeader con color azul personalizado (#3B82F6).

Este ejemplo demuestra la flexibilidad total del componente:
puedes usar cualquier color RGB hexadecimal para el fondo.

**Nota importante:**
El color del ContextHeader es totalmente variable.
No existe una paleta fija: el color depende del contexto y el flujo del usuario.
      `,
    },
  },
};

export const Interactive: Story = {
  args: {
    title: 'Haz clic en el chevron',
    backgroundColor: '#F59E0B',
    iconName: 'info',
    textColor: '#FFFFFF',
  },
  parameters: {
    docs: {
      storyDescription: `
ContextHeader interactivo.

Prueba a hacer clic en el chevron (flecha) de la izquierda.
El evento \`backClick\` se emitirá y podrá ser manejado por el componente padre.

Este ejemplo usa un color naranja (#F59E0B) para demostrar más variabilidad.
      `,
    },
  },
};
