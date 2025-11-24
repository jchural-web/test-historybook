import { Meta, StoryObj } from '@storybook/angular';
import { ContenedorMaestroComponent } from './contenedor-maestro.component';

const meta: Meta<ContenedorMaestroComponent> = {
  title: 'Components/ContenedorMaestro',
  component: ContenedorMaestroComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['simple', 'tabla', 'blanco', 'tabla-items', 'tabla-items-leyenda'],
      description: 'Tipo de contenedor maestro',
    },
    title: {
      control: 'text',
      description: 'Título del contenedor (usado en todas excepto en "blanco")',
    },
    iconName: {
      control: 'text',
      description: 'Nombre del icono lucide para el icon slot',
    },
    headerBgColor: {
      control: 'color',
      description: 'Color de fondo de la cabecera',
    },
    headerTextColor: {
      control: 'color',
      description: 'Color del texto de la cabecera',
    },
    width: {
      control: 'text',
      description: 'Ancho del contenedor (ej: 100%, 600px)',
    },
    height: {
      control: 'text',
      description: 'Alto del contenedor (ej: auto, 400px)',
    },
  },
};

export default meta;
type Story = StoryObj<ContenedorMaestroComponent>;

/**
 * **Contenedor Simple**
 *
 * Muestra un contenedor con cabecera (icono + título) y un área de contenido.
 * Ideal para mostrar información de texto, formularios u otro contenido libre.
 *
 * - Icono circular a la izquierda
 * - Título configurable
 * - Área de contenido flexible (slot [contenido])
 */
export const Simple: Story = {
  args: {
    variant: 'simple',
    title: 'Contenedor simple',
    iconName: 'circle-check-big',
    headerBgColor: '#E3F2FD',
    headerTextColor: '#6B26E8',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-contenedor-maestro
        [variant]="variant"
        [title]="title"
        [iconName]="iconName"
        [headerBgColor]="headerBgColor"
        [headerTextColor]="headerTextColor"
        style="width: 1200px; margin: auto;"
      >
        <div contenido style="padding: 24px; color: #4B5563; line-height: 1.6; min-height: 200px;">
          <p>Este es un contenedor simple con contenido libre. Puedes colocar texto, formularios, imágenes o cualquier otro elemento aquí.</p>
        </div>
      </app-contenedor-maestro>
    `,
  }),
};

/**
 * **Contenedor con Tabla**
 *
 * Muestra un contenedor con cabecera y una tabla simulada dentro,
 * más un footer de paginación.
 *
 * - Cabecera con icono y título
 * - Tabla (injected via [tabla-body])
 * - Footer de paginación (injected via [tabla-footer])
 */
export const ConTabla: Story = {
  args: {
    variant: 'tabla',
    title: 'Contenedor con tabla',
    iconName: 'circle-check-big',
    headerBgColor: '#E3F2FD',
    headerTextColor: '#111827',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-contenedor-maestro
        [variant]="variant"
        [title]="title"
        [iconName]="iconName"
        [headerBgColor]="headerBgColor"
        [headerTextColor]="headerTextColor"
        style="width: 600px; margin: auto;"
      >
        <div tabla-body style="padding: 16px 0; border-top: 1px solid #E4E4E7;">
          <div style="padding: 12px 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; border-bottom: 1px solid #E4E4E7;">
            <div><strong>Columna 1</strong></div>
            <div><strong>Columna 2</strong></div>
          </div>
          <div style="padding: 12px 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; border-bottom: 1px solid #E4E4E7;">
            <div>Fila 1 - Dato 1</div>
            <div>Fila 1 - Dato 2</div>
          </div>
          <div style="padding: 12px 16px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div>Fila 2 - Dato 1</div>
            <div>Fila 2 - Dato 2</div>
          </div>
        </div>
        <div tabla-footer style="padding: 12px 16px; border-top: 1px solid #E4E4E7; color: #4B5563; font-size: 12px;">
          Página 1 de 3 | 1 - 10 de 22 ítems
        </div>
      </app-contenedor-maestro>
    `,
  }),
};

/**
 * **Contenedor en Blanco**
 *
 * Un contenedor sin cabecera, solo un área blanca con bordes redondeados.
 * Perfecto como wrapper simple para cualquier contenido.
 *
 * - Sin icono ni título
 * - Solo el área de contenido (slot [contenido])
 * - Bordes redondeados y sombra
 */
export const Blanco: Story = {
  args: {
    variant: 'blanco',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-contenedor-maestro
        [variant]="variant"
        style="width: 600px; margin: auto;"
      >
        <div contenido style="padding: 24px; color: #4B5563; text-align: center;">
          <h3 style="margin: 0 0 12px 0; color: #111827;">Contenedor en Blanco</h3>
          <p style="margin: 0;">Este es un contenedor sin cabecera. Úsalo como wrapper flexible para cualquier tipo de contenido.</p>
        </div>
      </app-contenedor-maestro>
    `,
  }),
};

/**
 * **Contenedor con Tabla e Ítems**
 *
 * Muestra un contenedor con cabecera, seguido de una fila de encabezados
 * de tabla (ej: ITEM 1, ITEM 2, ...), la tabla y el footer.
 *
 * - Cabecera con icono y título
 * - Fila de encabezados (slot [tabla-header])
 * - Tabla (slot [tabla-body])
 * - Footer (slot [tabla-footer])
 */
export const ConTablaItems: Story = {
  args: {
    variant: 'tabla-items',
    title: 'Contenedor con tabla e items',
    iconName: 'circle-check-big',
    headerBgColor: '#E3F2FD',
    headerTextColor: '#111827',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-contenedor-maestro
        [variant]="variant"
        [title]="title"
        [iconName]="iconName"
        [headerBgColor]="headerBgColor"
        [headerTextColor]="headerTextColor"
        style="width: 700px; margin: auto;"
      >
        <div tabla-header style="padding: 12px 16px; background: #E3F2FD; border-bottom: 1px solid #B1D3EC; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; font-weight: 600; color: #6B26E8;">
          <div>ITEM 1</div>
          <div>ITEM 2</div>
          <div>ITEM 3</div>
          <div>ITEM 4</div>
        </div>
        <div tabla-body style="padding: 16px 0; border-top: 1px solid #E4E4E7;">
          <div style="padding: 12px 16px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; border-bottom: 1px solid #E4E4E7;">
            <div>Dato 1.1</div>
            <div>Dato 1.2</div>
            <div>Dato 1.3</div>
            <div>Dato 1.4</div>
          </div>
          <div style="padding: 12px 16px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
            <div>Dato 2.1</div>
            <div>Dato 2.2</div>
            <div>Dato 2.3</div>
            <div>Dato 2.4</div>
          </div>
        </div>
        <div tabla-footer style="padding: 12px 16px; border-top: 1px solid #E4E4E7; color: #4B5563; font-size: 12px;">
          Página 1 de 3 | 1 - 10 de 22 ítems
        </div>
      </app-contenedor-maestro>
    `,
  }),
};

/**
 * **Contenedor con Tabla, Ítems y Leyenda**
 *
 * La variante más completa. Incluye cabecera, un área de leyenda con chips,
 * encabezados de tabla, la tabla y el footer.
 *
 * - Cabecera con icono y título
 * - Leyenda (slot [leyenda]): área para chips/etiquetas explicativas
 * - Fila de encabezados (slot [tabla-header])
 * - Tabla (slot [tabla-body])
 * - Footer (slot [tabla-footer])
 */
export const ConTablaItemsLeyenda: Story = {
  args: {
    variant: 'tabla-items-leyenda',
    title: 'Contenedor con tabla, items y leyenda',
    iconName: 'circle-check-big',
    headerBgColor: '#E3F2FD',
    headerTextColor: '#111827',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-contenedor-maestro
        [variant]="variant"
        [title]="title"
        [iconName]="iconName"
        [headerBgColor]="headerBgColor"
        [headerTextColor]="headerTextColor"
        style="width: 700px; margin: auto;"
      >
        <div leyenda style="padding: 12px 16px; display: flex; gap: 12px; flex-wrap: wrap;">
          <div style="padding: 4px 12px; border-radius: 10px; border: 1px solid #EB5C11; background: #FFEDD5; font-size: 11px; font-weight: 600; color: #EB5C11;">
            Leyenda 1
          </div>
          <div style="padding: 4px 12px; border-radius: 10px; border: 1px solid #2B88A0; background: #CFFAFE; font-size: 11px; font-weight: 600; color: #2B88A0;">
            Leyenda 2
          </div>
        </div>
        <div tabla-header style="padding: 12px 16px; background: #E3F2FD; border-bottom: 1px solid #B1D3EC; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; font-weight: 600; color: #6B26E8;">
          <div>ITEM 1</div>
          <div>ITEM 2</div>
          <div>ITEM 3</div>
          <div>ITEM 4</div>
        </div>
        <div tabla-body style="padding: 16px 0; border-top: 1px solid #E4E4E7;">
          <div style="padding: 12px 16px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; border-bottom: 1px solid #E4E4E7;">
            <div>Dato 1.1</div>
            <div>Dato 1.2</div>
            <div>Dato 1.3</div>
            <div>Dato 1.4</div>
          </div>
          <div style="padding: 12px 16px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
            <div>Dato 2.1</div>
            <div>Dato 2.2</div>
            <div>Dato 2.3</div>
            <div>Dato 2.4</div>
          </div>
        </div>
        <div tabla-footer style="padding: 12px 16px; border-top: 1px solid #E4E4E7; color: #4B5563; font-size: 12px;">
          Página 1 de 3 | 1 - 10 de 22 ítems
        </div>
      </app-contenedor-maestro>
    `,
  }),
};

/**
 * **Variante Personalizada**
 *
 * Ejemplo de cómo personalizar colores, tamaño y contenido.
 * El componente es completamente flexible: títulos, iconos, colores de cabecera,
 * ancho y alto son totalmente configurables.
 */
export const Personalizado: Story = {
  args: {
    variant: 'tabla-items',
    title: 'Contenedor Personalizado',
    iconName: 'check-circle',
    headerBgColor: '#F3E8FF',
    headerTextColor: '#7C3AED',
    width: '800px',
    height: 'auto',
  },
  render: (args) => ({
    props: args,
    template: `
      <app-contenedor-maestro
        [variant]="variant"
        [title]="title"
        [iconName]="iconName"
        [headerBgColor]="headerBgColor"
        [headerTextColor]="headerTextColor"
        [width]="width"
        [height]="height"
        style="margin: auto;"
      >
        <div tabla-header style="padding: 12px 16px; background: #F3E8FF; border-bottom: 1px solid #E9D5FF; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; font-weight: 600; color: #7C3AED;">
          <div>Producto</div>
          <div>Cantidad</div>
          <div>Precio</div>
        </div>
        <div tabla-body style="padding: 16px 0; border-top: 1px solid #E4E4E7;">
          <div style="padding: 12px 16px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; border-bottom: 1px solid #E4E4E7;">
            <div>Producto A</div>
            <div>5</div>
            <div>$100</div>
          </div>
          <div style="padding: 12px 16px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
            <div>Producto B</div>
            <div>3</div>
            <div>$150</div>
          </div>
        </div>
        <div tabla-footer style="padding: 12px 16px; border-top: 1px solid #E4E4E7; color: #4B5563; font-size: 12px;">
          Total: 2 productos
        </div>
      </app-contenedor-maestro>
    `,
  }),
};
