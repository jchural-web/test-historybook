import type { Meta, StoryObj } from '@storybook/angular';
import { NotasComponent } from './notas.component';

const meta: Meta<NotasComponent> = {
  title: 'Components/Notas',
  component: NotasComponent,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título del modal de notas',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder del textarea',
    },
    maxLength: {
      control: 'number',
      description: 'Máximo número de caracteres permitidos',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# Notas Component

Un modal flotante y draggable para escribir comentarios o notas persistentes.

## Características principales:

### Draggable
- Haz clic y arrastra la barra superior (cabecera) para mover el modal por la pantalla
- El icono "move" (cruz con flechas) indica que el modal es arrastrable
- El modal se mantiene dentro de los límites de la pantalla

### Minimizable
- Usa el botón "–" (icono minus) en la esquina superior derecha para minimizar
- Al minimizar, solo la cabecera permanece visible
- El contenido del textarea se mantiene (no se borra)
- Presiona nuevamente para restaurar el modal

### Persistencia de contenido
- El texto en el textarea se conserva aunque minimices el modal
- El evento \`commentChange\` emite el contenido cada vez que escribes

### Estilo responsive
- Modal con ancho fijo (520px) y altura variable
- Cabecera naranja (#FB923C) con título, icono de movimiento y botón minimizar
- Cuerpo con fondo claro (#FEFCE8) y textarea blanco
- Contador de caracteres en la esquina inferior izquierda

## Comportamiento:

1. **Escribir**: Escribe en el textarea - el evento \`commentChange\` emitirá el texto
2. **Arrastrar**: Haz clic en la cabecera y arrastra para mover el modal
3. **Minimizar**: Haz clic en el botón "–" para ocultar el cuerpo
4. **Restaurar**: Haz clic nuevamente en el botón "–" para mostrar el cuerpo
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<NotasComponent>;

export const Basic: Story = {
  args: {
    title: 'Comentario Actividad',
    placeholder: 'Ingrese un comentario',
    maxLength: 500,
  },
  parameters: {
    docs: {
      storyDescription: `
Modal de notas básico con textarea vacío.

Puedes:
- **Escribir** texto en el textarea
- **Arrastra la cabecera** para mover el modal por la pantalla
- **Minimizar** presionando el botón "–"
- El contador muestra cuántos caracteres has escrito

El evento \`commentChange\` emite el contenido cada vez que escribes.
      `,
    },
  },
};

export const WithInitialContent: Story = {
  render: (args) => ({
    props: {
      ...args,
    },
    template: `
      <app-notas
        [title]="title"
        [placeholder]="placeholder"
        [maxLength]="maxLength"
        (commentChange)="onCommentChange($event)"
      ></app-notas>
    `,
    component: NotasComponent,
  }),
  args: {
    title: 'Comentario Actividad',
    placeholder: 'Ingrese un comentario',
    maxLength: 500,
  },
  parameters: {
    docs: {
      storyDescription: `
Modal de notas con contenido inicial.

Este ejemplo demuestra que el componente puede recibir un contenido inicial
y mantenerlo mientras el usuario interactúa con el modal.

El contenido se conserva incluso al minimizar y restaurar.
      `,
    },
  },
};

export const Minimized: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 32px; padding: 40px; flex-wrap: wrap;">
        <div style="display: flex; flex-direction: column; gap: 8px; align-items: center;">
          <span style="font-weight: 600; font-size: 14px;">Expandido</span>
          <app-notas
            title="Comentario Actividad"
            placeholder="Ingrese un comentario"
            [maxLength]="500"
          ></app-notas>
        </div>
      </div>
    `,
    component: NotasComponent,
  }),
  parameters: {
    docs: {
      storyDescription: `
Usa el botón "–" en la esquina superior derecha para minimizar el modal.

Cuando está minimizado:
- Solo se muestra la cabecera (naranja)
- El textarea y el contador se ocultan
- El contenido se mantiene en memoria

Haz clic nuevamente en el botón "–" para restaurar el modal completo.
      `,
    },
  },
};

export const Draggable: Story = {
  args: {
    title: 'Comentario Actividad',
    placeholder: 'Ingrese un comentario',
    maxLength: 500,
  },
  parameters: {
    docs: {
      storyDescription: `
El componente Notas es completamente arrastrable.

**Cómo arrastrar:**
1. Haz clic en cualquier parte de la cabecera naranja
2. Mantén el botón del mouse presionado
3. Arrastra el modal a la posición deseada
4. Suelta el botón del mouse

El icono "move" (cruz con flechas) en la esquina izquierda indica que el modal puede moverse.

El modal se mantiene dentro de los límites de la pantalla (no se sale fuera).
      `,
    },
  },
};

export const CustomTitle: Story = {
  args: {
    title: 'Notas Personalizadas',
    placeholder: 'Escribe aquí...',
    maxLength: 1000,
  },
  parameters: {
    docs: {
      storyDescription: `
El componente es completamente reutilizable.

En este ejemplo:
- Título personalizado: "Notas Personalizadas"
- Placeholder personalizado: "Escribe aquí..."
- Límite de caracteres: 1000 (en lugar de 500)

Todos estos parámetros se controlan mediante los inputs del componente.
      `,
    },
  },
};

export const Interactive: Story = {
  render: () => ({
    template: `
      <div style="padding: 20px;">
        <app-notas
          title="Comentario Actividad"
          placeholder="Ingrese un comentario"
          [maxLength]="500"
          (commentChange)="onCommentChange($event)"
        ></app-notas>
        <div *ngIf="lastComment" style="margin-top: 40px; padding: 20px; background: #f0f0f0; border-radius: 8px;">
          <p style="margin: 0 0 8px 0; font-weight: 600;">Último comentario emitido:</p>
          <p style="margin: 0; word-break: break-word;">{{ lastComment }}</p>
        </div>
      </div>
    `,
    component: NotasComponent,
    props: {
      lastComment: '',
      onCommentChange(comment: string) {
        this.lastComment = comment;
      },
    },
  }),
  parameters: {
    docs: {
      storyDescription: `
Modo interactivo para demostrar el evento \`commentChange\`.

Escribe en el textarea y verás el contenido emitido en el panel inferior.
Cada cambio emite un evento con el contenido actual.
      `,
    },
  },
};
