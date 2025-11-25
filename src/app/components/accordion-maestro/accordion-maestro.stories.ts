import type { Meta, StoryObj } from '@storybook/angular';
import { AccordionMaestroComponent } from './accordion-maestro.component';

const meta: Meta<AccordionMaestroComponent> = {
  title: 'Components/AccordionMaestro',
  component: AccordionMaestroComponent,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Lista de items del acordeón con id y title',
    },
    activeItemId: {
      control: 'text',
      description: 'ID del item abierto inicialmente (null = todos cerrados)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# AccordionMaestro Component

Un componente acordeón reutilizable y flexible que permite expandir y contraer secciones.
Solo una sección puede estar abierta a la vez.

## Características:

- **Single Open**: Solo una sección puede estar expandida simultáneamente
- **Flexible Content**: El contenido de cada sección se inyecta mediante ng-content
- **Responsive**: Se adapta automáticamente al ancho del contenedor
- **Accessible**: Usa semántica HTML correcta con botones y transiciones suaves
- **Diseño Limpio**: Bordes sutiles, esquinas redondeadas y sombra discreta

## Uso:

\`\`\`html
<app-accordion-maestro
  [items]="accordionItems"
  [activeItemId]="activeId"
  (activeItemChange)="onActiveChange($event)">
  
  <div [accordion-item-1]="true">
    Contenido del item 1 (checkboxes, texto, etc.)
  </div>
  
  <div [accordion-item-2]="true">
    Contenido del item 2
  </div>
</app-accordion-maestro>
\`\`\`

## API:

- \`@Input() items: AccordionItem[]\` - Lista de secciones con id y title
- \`@Input() activeItemId\` - ID del item abierto inicialmente (opcional)
- \`@Output() activeItemChange\` - Emite el ID del item abierto o null cuando se cierra

## Notas:

- El contenido debe usar atributos \`[accordion-item-{id}]\` para la proyección correcta
- Es completamente standalone y puede usarse en cualquier contenedor
- Las animaciones de apertura y cierre son suaves y responsivas
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<AccordionMaestroComponent>;

const defaultItems = [
  { id: 1, title: 'El programa es muy caro / No estoy seguro de que realmente valga la pena la inversión.' },
  { id: 2, title: 'No estoy seguro de tener tiempo suficiente para dedicarle al programa.' },
  { id: 3, title: 'No estoy seguro de que el contenido sea lo que busco.' },
  { id: 4, title: 'No estoy seguro de la calidad/confiabilidad del programa' },
  { id: 5, title: 'No estoy seguro de que las clases online sean tan efectivas como las clases presenciales.' },
  { id: 6, title: 'No estoy seguro de que realmente necesito este programa ahora mismo.' },
];

export const AccordionCerrado: Story = {
  args: {
    items: defaultItems,
    activeItemId: null,
  },
  parameters: {
    docs: {
      storyDescription: `
Acordeón completamente cerrado.

Todos los items muestran solo su título con un chevron hacia abajo.
Al hacer clic en cualquier título, ese item se expande.

El componente maneja internamente que solo una sección esté abierta a la vez.
      `,
    },
  },
};

export const AccordionConItemAbierto: Story = {
  args: {
    items: defaultItems,
    activeItemId: 4,
  },
  render: (args) => ({
    props: args,
    template: `
      <app-accordion-maestro
        [items]="items"
        [activeItemId]="activeItemId"
        (activeItemChange)="activeItemChange.emit($event)">
        
        <div [accordion-item-1]="true">
          <p style="margin: 0; color: #161616;">
            Contenido de respuesta para el item 1
          </p>
        </div>
        
        <div [accordion-item-2]="true">
          <p style="margin: 0; color: #161616;">
            Contenido de respuesta para el item 2
          </p>
        </div>
        
        <div [accordion-item-3]="true">
          <p style="margin: 0; color: #161616;">
            Contenido de respuesta para el item 3
          </p>
        </div>
        
        <div [accordion-item-4]="true">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" />
              <span style="color: #2A67EB; font-size: 15px; font-weight: 500;">Nivel de satisfacción</span>
            </label>
            <p style="margin: 0; color: #161616; font-size: 15px;">
              El nivel de satisfacción de los alumnos que participaron en el programa en los últimos 5 años es de 4.5 en una escala del 1 al 5.
            </p>
          </div>
        </div>
        
        <div [accordion-item-5]="true">
          <p style="margin: 0; color: #161616;">
            Contenido de respuesta para el item 5
          </p>
        </div>
        
        <div [accordion-item-6]="true">
          <p style="margin: 0; color: #161616;">
            Contenido de respuesta para el item 6
          </p>
        </div>
      </app-accordion-maestro>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: `
Acordeón con un item abierto (item 4).

Muestra cómo se ve cuando una sección está expandida.
El contenido se despliega con una animación suave.

Contiene checkboxes y texto como ejemplo del tipo de contenido flexible que soporta.
Al hacer clic en otro título, el item 4 se cierra y el nuevo se abre.
      `,
    },
  },
};

export const AccordionInteractivo: Story = {
  args: {
    items: defaultItems,
    activeItemId: null,
  },
  render: (args) => ({
    props: {
      ...args,
      activeItemId: null,
      onActiveChange: (id: any) => {
        args.activeItemId = id;
      },
    },
    template: `
      <app-accordion-maestro
        [items]="items"
        [activeItemId]="activeItemId"
        (activeItemChange)="onActiveChange($event)">
        
        <div [accordion-item-1]="true">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" />
              <span style="color: #2A67EB; font-size: 15px; font-weight: 500;">Opción 1</span>
            </label>
            <p style="margin: 0; color: #161616; font-size: 15px;">
              Descripción detallada del contenido del item 1.
            </p>
          </div>
        </div>
        
        <div [accordion-item-2]="true">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" />
              <span style="color: #2A67EB; font-size: 15px; font-weight: 500;">Opción 2</span>
            </label>
            <p style="margin: 0; color: #161616; font-size: 15px;">
              Descripción detallada del contenido del item 2.
            </p>
          </div>
        </div>
        
        <div [accordion-item-3]="true">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" />
              <span style="color: #2A67EB; font-size: 15px; font-weight: 500;">Opción 3</span>
            </label>
            <p style="margin: 0; color: #161616; font-size: 15px;">
              Descripción detallada del contenido del item 3.
            </p>
          </div>
        </div>
        
        <div [accordion-item-4]="true">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" />
              <span style="color: #2A67EB; font-size: 15px; font-weight: 500;">Opción 4</span>
            </label>
            <p style="margin: 0; color: #161616; font-size: 15px;">
              El nivel de satisfacción de los alumnos que participaron en el programa en los últimos 5 años es de 4.5 en una escala del 1 al 5.
            </p>
          </div>
        </div>
        
        <div [accordion-item-5]="true">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" />
              <span style="color: #2A67EB; font-size: 15px; font-weight: 500;">Opción 5</span>
            </label>
            <p style="margin: 0; color: #161616; font-size: 15px;">
              Descripción detallada del contenido del item 5.
            </p>
          </div>
        </div>
        
        <div [accordion-item-6]="true">
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
              <input type="checkbox" />
              <span style="color: #2A67EB; font-size: 15px; font-weight: 500;">Opción 6</span>
            </label>
            <p style="margin: 0; color: #161616; font-size: 15px;">
              Descripción detallada del contenido del item 6.
            </p>
          </div>
        </div>
      </app-accordion-maestro>
    `,
  }),
  parameters: {
    docs: {
      storyDescription: `
Acordeón totalmente interactivo.

Puedes hacer clic en cualquier título para expandir esa sección.
El componente garantiza que solo una sección esté abierta a la vez.

El contenido de cada secci��n se inyecta mediante ng-content usando atributos
\`[accordion-item-{id}]\`, lo que permite total flexibilidad en el contenido
(checkboxes, texto, listas, etc.).

Utiliza los controles de Storybook (activeItemId) para ver cómo el componente
responde a cambios externos del estado activo.
      `,
    },
  },
};
