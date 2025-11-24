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
 * - Footer de paginación (componente TablePaginationFooter integrado)
 */
export const ConTabla: Story = {
  args: {
    variant: 'tabla',
    title: 'Contenedor con tabla',
    iconName: 'circle-check-big',
    headerBgColor: '#E3F2FD',
    headerTextColor: '#6B26E8',
    currentPage: 1,
    totalPages: 3,
    pageSize: 10,
    totalItems: 22,
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
        [currentPage]="currentPage"
        [totalPages]="totalPages"
        [pageSize]="pageSize"
        [totalItems]="totalItems"
        style="width: 1200px; margin: auto;"
      >
        <div tabla-body style="padding: 0;">
          <div style="padding: 12px 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; border-bottom: 1px solid #E4E4E7;">
            <div><strong>Columna 1</strong></div>
            <div><strong>Columna 2</strong></div>
          </div>
          <div style="padding: 12px 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px; border-bottom: 1px solid #E4E4E7;">
            <div>Fila 1 - Dato 1</div>
            <div>Fila 1 - Dato 2</div>
          </div>
          <div style="padding: 12px 24px; display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div>Fila 2 - Dato 1</div>
            <div>Fila 2 - Dato 2</div>
          </div>
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
        style="width: 1200px; margin: auto;"
      >
        <div contenido style="padding: 24px; color: #4B5563; text-align: center; min-height: 200px;">
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
 * - Footer paginación integrado
 */
export const ConTablaItems: Story = {
  args: {
    variant: 'tabla-items',
    title: 'Contenedor con tabla e items',
    iconName: 'circle-check-big',
    headerBgColor: '#E3F2FD',
    headerTextColor: '#6B26E8',
    currentPage: 1,
    totalPages: 3,
    pageSize: 10,
    totalItems: 22,
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
        [currentPage]="currentPage"
        [totalPages]="totalPages"
        [pageSize]="pageSize"
        [totalItems]="totalItems"
        style="width: 1200px; margin: auto;"
      >
        <div tabla-header style="padding: 12px 24px; background: #E3F2FD; border-bottom: 1px solid #B1D3EC; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; font-weight: 600; color: #6B26E8;">
          <div>ITEM 1</div>
          <div>ITEM 2</div>
          <div>ITEM 3</div>
          <div>ITEM 4</div>
        </div>
        <div tabla-body style="padding: 0;">
          <div style="padding: 12px 24px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; border-bottom: 1px solid #E4E4E7;">
            <div>Dato 1.1</div>
            <div>Dato 1.2</div>
            <div>Dato 1.3</div>
            <div>Dato 1.4</div>
          </div>
          <div style="padding: 12px 24px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
            <div>Dato 2.1</div>
            <div>Dato 2.2</div>
            <div>Dato 2.3</div>
            <div>Dato 2.4</div>
          </div>
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
 * - Footer paginación integrado
 */
export const ConTablaItemsLeyenda: Story = {
  args: {
    variant: 'tabla-items-leyenda',
    title: 'Contenedor con tabla, items y leyenda',
    iconName: 'circle-check-big',
    headerBgColor: '#E3F2FD',
    headerTextColor: '#6B26E8',
    currentPage: 1,
    totalPages: 3,
    pageSize: 10,
    totalItems: 22,
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
        [currentPage]="currentPage"
        [totalPages]="totalPages"
        [pageSize]="pageSize"
        [totalItems]="totalItems"
        style="width: 1200px; margin: auto;"
      >
        <div leyenda style="padding: 12px 24px; display: flex; gap: 12px; flex-wrap: wrap; border-bottom: 1px solid #E4E4E7;">
          <div style="padding: 4px 12px; border-radius: 10px; border: 1px solid #EB5C11; background: #FFEDD5; font-size: 11px; font-weight: 600; color: #EB5C11;">
            Prb
          </div>
          <div style="padding: 4px 12px; border-radius: 10px; border: 1px solid #2B88A0; background: #CFFAFE; font-size: 11px; font-weight: 600; color: #2B88A0; display: flex; align-items: center; gap: 6px;">
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
                <path d="M3.375 7.875V1.125C3.375 0.917893 3.54289 0.75 3.75 0.75C3.95711 0.75 4.125 0.917893 4.125 1.125V7.875C4.125 8.08211 3.95711 8.25 3.75 8.25C3.54289 8.25 3.375 8.08211 3.375 7.875ZM6.375 6.75V1.875C6.375 1.66789 6.54289 1.5 6.75 1.5C6.95711 1.5 7.125 1.66789 7.125 1.875V6.75C7.125 6.95711 6.95711 7.125 6.75 7.125C6.54289 7.125 6.375 6.95711 6.375 6.75ZM1.875 6.375V2.25C1.875 2.04289 2.04289 1.875 2.25 1.875C2.45711 1.875 2.625 2.04289 2.625 2.25V6.375C2.625 6.58211 2.45711 6.75 2.25 6.75C2.04289 6.75 1.875 6.58211 1.875 6.375ZM4.875 5.625V3C4.875 2.79289 5.04289 2.625 5.25 2.625C5.45711 2.625 5.625 2.79289 5.625 3V5.625C5.625 5.83211 5.45711 6 5.25 6C5.04289 6 4.875 5.83211 4.875 5.625ZM0.375 4.875V3.75C0.375 3.54289 0.542893 3.375 0.75 3.375C0.957107 3.375 1.125 3.54289 1.125 3.75V4.875C1.125 5.08211 0.957107 5.25 0.75 5.25C0.542893 5.25 0.375 5.08211 0.375 4.875ZM7.875 4.875V3.75C7.875 3.54289 8.04289 3.375 8.25 3.375C8.45711 3.375 8.625 3.54289 8.625 3.75V4.875C8.625 5.08211 8.45711 5.25 8.25 5.25C8.04289 5.25 7.875 5.08211 7.875 4.875Z" fill="#2B88A0"/>
              </g>
            </svg>
            Wavix
          </div>
        </div>
        <div tabla-header style="padding: 12px 24px; background: #E3F2FD; border-bottom: 1px solid #B1D3EC; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; font-weight: 600; color: #6B26E8;">
          <div>ITEM 1</div>
          <div>ITEM 2</div>
          <div>ITEM 3</div>
          <div>ITEM 4</div>
        </div>
        <div tabla-body style="padding: 0;">
          <div style="padding: 12px 24px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; border-bottom: 1px solid #E4E4E7;">
            <div>Dato 1.1</div>
            <div>Dato 1.2</div>
            <div>Dato 1.3</div>
            <div>Dato 1.4</div>
          </div>
          <div style="padding: 12px 24px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
            <div>Dato 2.1</div>
            <div>Dato 2.2</div>
            <div>Dato 2.3</div>
            <div>Dato 2.4</div>
          </div>
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
    width: '1200px',
    height: 'auto',
    currentPage: 1,
    totalPages: 2,
    pageSize: 10,
    totalItems: 15,
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
        [currentPage]="currentPage"
        [totalPages]="totalPages"
        [pageSize]="pageSize"
        [totalItems]="totalItems"
        style="margin: auto;"
      >
        <div tabla-header style="padding: 12px 24px; background: #F3E8FF; border-bottom: 1px solid #E9D5FF; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; font-weight: 600; color: #7C3AED;">
          <div>Producto</div>
          <div>Cantidad</div>
          <div>Precio</div>
        </div>
        <div tabla-body style="padding: 0;">
          <div style="padding: 12px 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; border-bottom: 1px solid #E4E4E7;">
            <div>Producto A</div>
            <div>5</div>
            <div>$100</div>
          </div>
          <div style="padding: 12px 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
            <div>Producto B</div>
            <div>3</div>
            <div>$150</div>
          </div>
        </div>
      </app-contenedor-maestro>
    `,
  }),
};
