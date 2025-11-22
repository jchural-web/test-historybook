import type { Meta, StoryObj } from '@storybook/angular';
import { DialogMaestroComponent, DialogHeaderVariant } from './dialog-maestro.component';

const meta: Meta<DialogMaestroComponent> = {
  title: 'Components/DialogMaestro',
  component: DialogMaestroComponent,
  tags: ['autodocs'],
  argTypes: {
    headerVariant: {
      control: 'select',
      options: ['solid', 'soft', 'white'],
      description: 'Estilo de la cabecera del diálogo',
    },
    headerColor: {
      control: 'color',
      description: 'Color base para las variantes solid y soft',
    },
    showBorderRadius: {
      control: 'boolean',
      description: 'Si true, aplica border-radius redondeado',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# DialogMaestro Component

Un componente contenedor tipo card/diálogo para mostrar información.

## Características

- **Contenedor informativo**: Solo muestra contenido, sin lógica de apertura/cierre
- **Sin estados**: No tiene hover, seleccionado, ni desactivado
- **Tres estilos de cabecera**:
  - **solid**: Cabecera con color sólido
  - **soft**: Cabecera con una versión clara del color
  - **white**: Cabecera blanca con línea gris

## Estructura

- Cabecera superior (40px de altura)
- Cuerpo blanco flexible para contenido
- Bordes y sombra suave tipo card

El componente usa \`<ng-content></ng-content>\` para permitir cualquier contenido en el cuerpo.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<DialogMaestroComponent>;

export const SolidHeader: Story = {
  args: {
    headerVariant: 'solid',
    headerColor: '#7C3AED',
    showBorderRadius: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-dialog-maestro 
        [headerVariant]="headerVariant"
        [headerColor]="headerColor"
        [showBorderRadius]="showBorderRadius">
        <h2>Diálogo con cabecera sólida</h2>
        <p>Este es un ejemplo de diálogo con una cabecera de color sólido morado.</p>
        <p>El componente DialogMaestro es un contenedor informativo que solo muestra contenido. No tiene estados interactivos como hover, seleccionado, ni desactivado.</p>
        <p>Puedes colocar cualquier contenido dentro del diálogo usando &lt;ng-content&gt;.</p>
      </app-dialog-maestro>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Diálogo con cabecera sólida morada. La cabecera ocupa todo el ancho con un color base sólido.',
      },
    },
  },
};

export const SoftHeader: Story = {
  args: {
    headerVariant: 'soft',
    headerColor: '#7C3AED',
    showBorderRadius: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-dialog-maestro 
        [headerVariant]="headerVariant"
        [headerColor]="headerColor"
        [showBorderRadius]="showBorderRadius">
        <h2>Diálogo con cabecera suave</h2>
        <p>Este es un ejemplo de diálogo con una cabecera de color suave (light).</p>
        <p>La cabecera utiliza una versión más clara del color base morado.</p>
        <p>Es útil para destacar el diálogo de una forma más sutil que la cabecera sólida.</p>
      </app-dialog-maestro>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Diálogo con cabecera suave. La cabecera usa una versión clara del color base.',
      },
    },
  },
};

export const WhiteHeader: Story = {
  args: {
    headerVariant: 'white',
    headerColor: '#7C3AED',
    showBorderRadius: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-dialog-maestro 
        [headerVariant]="headerVariant"
        [headerColor]="headerColor"
        [showBorderRadius]="showBorderRadius">
        <h2>Diálogo con cabecera blanca</h2>
        <p>Este es un ejemplo de diálogo con una cabecera blanca.</p>
        <p>La cabecera blanca tiene solo una línea gris que la separa del cuerpo del diálogo.</p>
        <p>Este estilo es más minimalista y funciona bien en interfaces limpias.</p>
      </app-dialog-maestro>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Diálogo con cabecera blanca. La cabecera es blanca con una línea gris divisoria.',
      },
    },
  },
};

export const CustomColor: Story = {
  args: {
    headerVariant: 'solid',
    headerColor: '#0EA5E9',
    showBorderRadius: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-dialog-maestro 
        [headerVariant]="headerVariant"
        [headerColor]="headerColor"
        [showBorderRadius]="showBorderRadius">
        <h2>Diálogo con color personalizado</h2>
        <p>Este diálogo usa un color personalizado (azul) en la cabecera sólida.</p>
        <p>Puedes pasar cualquier color hexadecimal a través de la prop headerColor.</p>
        <p>El componente es flexible y permite cualquier combinación de variantes y colores.</p>
      </app-dialog-maestro>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Diálogo con color azul personalizado en la cabecera sólida.',
      },
    },
  },
};

export const NoRoundedCorners: Story = {
  args: {
    headerVariant: 'solid',
    headerColor: '#7C3AED',
    showBorderRadius: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-dialog-maestro 
        [headerVariant]="headerVariant"
        [headerColor]="headerColor"
        [showBorderRadius]="showBorderRadius">
        <h2>Diálogo sin esquinas redondeadas</h2>
        <p>Este diálogo tiene showBorderRadius establecido en false.</p>
        <p>Las esquinas permanecen cuadradas en lugar de redondeadas.</p>
        <p>Puedes controlar este comportamiento con la prop showBorderRadius.</p>
      </app-dialog-maestro>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Diálogo con esquinas cuadradas (sin border-radius).',
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    headerVariant: 'soft',
    headerColor: '#10B981',
    showBorderRadius: true,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-dialog-maestro 
        [headerVariant]="headerVariant"
        [headerColor]="headerColor"
        [showBorderRadius]="showBorderRadius">
        <h2>Diálogo con contenido largo</h2>
        <p>Este es un ejemplo con contenido más extenso para demostrar cómo el diálogo se adapta a diferentes cantidades de contenido.</p>
        <p>El cuerpo del diálogo tiene un min-height para garantizar un tamaño mínimo, pero puede crecer según el contenido que contenga.</p>
        <p>Puedes agregar párrafos, listas, formularios, o cualquier otro contenido HTML dentro del diálogo.</p>
        <p>El componente mantiene su estructura y estilos independientemente de la cantidad de contenido.</p>
        <p>La cabecera siempre permanece en la parte superior con su altura fija de 40px.</p>
      </app-dialog-maestro>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Diálogo con cabecera soft verde y contenido largo.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; padding: 20px;">
        <app-dialog-maestro 
          headerVariant="solid"
          headerColor="#7C3AED"
          [showBorderRadius]="true">
          <h3 style="margin-top: 0;">Cabecera Sólida</h3>
          <p>Color morado sólido en la cabecera.</p>
        </app-dialog-maestro>

        <app-dialog-maestro 
          headerVariant="soft"
          headerColor="#7C3AED"
          [showBorderRadius]="true">
          <h3 style="margin-top: 0;">Cabecera Suave</h3>
          <p>Color morado claro en la cabecera.</p>
        </app-dialog-maestro>

        <app-dialog-maestro 
          headerVariant="white"
          headerColor="#7C3AED"
          [showBorderRadius]="true">
          <h3 style="margin-top: 0;">Cabecera Blanca</h3>
          <p>Cabecera blanca con línea gris.</p>
        </app-dialog-maestro>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Comparativa de las tres variantes de cabecera: sólida, suave y blanca.',
      },
    },
  },
};
