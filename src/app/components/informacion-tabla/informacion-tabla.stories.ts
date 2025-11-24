import type { Meta, StoryObj } from '@storybook/angular';
import { InformacionTablaComponent } from './informacion-tabla.component';

const meta: Meta<InformacionTablaComponent> = {
  title: 'Components/InformacionTabla',
  component: InformacionTablaComponent,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Contenido de texto a mostrar',
    },
    backgroundColor: {
      control: 'color',
      description: 'Color de fondo claro del contenedor',
    },
    accentColor: {
      control: 'color',
      description: 'Color oscuro de la línea vertical izquierda',
    },
    width: {
      control: 'text',
      description: 'Ancho del componente (ej: 100%, 600px, auto)',
    },
    height: {
      control: 'text',
      description: 'Alto del componente (ej: auto, 60px)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# InformacionTabla Component

Un componente informativo simple y estático para mostrar información adicional sobre tablas o contenido.

## Características:

- **Componente informativo puro**: Sin estados interactivos, sin hover, sin selecciones
- **Línea de acento**: Una línea vertical a la izquierda que indica el tipo de información
- **Diseño flexible**: Los colores y tamaños son completamente personalizables
- **Responsive**: Se adapta al ancho disponible

## Estructura:

1. **Línea de acento** (4px ancho) - Color variable
2. **Contenido de texto** - Alineado a la izquierda con padding

## Uso:

- Mostrar información adicional sobre datos de una tabla
- Displays contextuales
- Notas o aclaraciones dentro de secciones de contenido
- Mensajes informativos o ejemplos

**Importante:**
InformacionTabla es un componente solo informativo, sin estados interactivos.
Lo único variable es el texto, los colores (claro y oscuro) y el tamaño (ancho/alto).
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<InformacionTablaComponent>;

const defaultText = `"Ahora que he comprendido mejor cuáles son tus objetivos profesionales y cómo nuestro programa puede ayudarte en ese sentido te comento [Nombre del cliente], me gustaría compartir contigo brevemente cómo hemos ayudado a otros profesionales con tu perfil a alcanzar sus metas con este programa"`;

export const GreenDefault: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#ECFDF3',
    accentColor: '#16A34A',
  },
  parameters: {
    docs: {
      storyDescription: `
Ejemplo tipo "speech" con colores verde (como en la referencia).

- Fondo: Verde muy claro (#ECFDF3)
- Línea: Verde oscuro (#16A34A)
- Texto: Largo (tipo comentario o cita)

Este es el estado por defecto del componente.
      `,
    },
  },
};

export const BlueColors: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#DBEAFE',
    accentColor: '#1E40AF',
  },
  parameters: {
    docs: {
      storyDescription: `
Ejemplo con colores azules para demostrar variabilidad.

- Fondo: Azul muy claro (#DBEAFE)
- Línea: Azul oscuro (#1E40AF)
- Texto: Mismo contenido que el ejemplo anterior

**Nota importante:**
InformacionTabla es un componente solo informativo, sin estados interactivos.
Lo único variable es el texto, los colores (claro y oscuro) y el tamaño (ancho/alto) según el diseño.
      `,
    },
  },
};

export const LimitedWidth: Story = {
  args: {
    text: defaultText,
    backgroundColor: '#ECFDF3',
    accentColor: '#16A34A',
    width: '600px',
  },
  parameters: {
    docs: {
      storyDescription: `
Ejemplo con ancho limitado para mostrar adaptabilidad.

- Ancho: 600px (limitado)
- Los colores se mantienen igual que el ejemplo por defecto
- El texto se adapta al ancho disponible

Demuestra cómo el componente se comporta dentro de layouts con restricciones de ancho.
      `,
    },
  },
};

export const PurpleSmall: Story = {
  args: {
    text: 'Este es un mensaje informativo más corto.',
    backgroundColor: '#F3E8FF',
    accentColor: '#7C3AED',
    width: '800px',
  },
  parameters: {
    docs: {
      storyDescription: `
Ejemplo con colores morados y texto más corto.

Demuestra que el componente es flexible con:
- Cualquier combinación de colores
- Textos de diferentes longitudes
- Distintos anchos

El componente siempre mantiene su estructura simple y informativa.
      `,
    },
  },
};

export const LongText: Story = {
  args: {
    text: `Este es un texto mucho más largo que demuestra cómo el componente maneja contenido extenso. 
    El texto se ajusta automáticamente dentro del contenedor, manteniendo legibilidad y proporción. 
    La línea de acento a la izquierda permanece visible en toda la altura del contenedor, 
    sin importar cuánto contenido haya dentro. El componente es completamente flexible y adaptable 
    a diferentes contextos y necesidades de diseño.`,
    backgroundColor: '#FEF2F2',
    accentColor: '#DC2626',
    width: '100%',
  },
  parameters: {
    docs: {
      storyDescription: `
Ejemplo con texto largo y ancho completo.

Demuestra el comportamiento del componente con:
- Texto extenso (múltiples líneas)
- Ancho 100% (adaptarse al contenedor)
- Color rojo claro/oscuro

El componente mantiene su estructura y legibilidad sin importar la cantidad de contenido.
      `,
    },
  },
};
