import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxMaestroComponent } from './checkbox-maestro.component';

const meta: Meta<CheckboxMaestroComponent> = {
  title: 'Components/CheckboxMaestro',
  component: CheckboxMaestroComponent,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Estado del checkbox (seleccionado o no)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# CheckboxMaestro Component

Un componente de checkbox personalizado con dos estados visuales distintos.

## Estados:

### Sin seleccionar
- Cuadrado con borde gris (#8A8F9A)
- Fondo blanco
- Esquinas levemente redondeadas

### Seleccionado
- Cuadrado con fondo verde (#16A34A)
- Borde verde claro (#64C287)
- Icono de check blanco centrado

## Características:

- **Simple y enfocado**: Solo dos estados, sin estados intermedios
- **Accesible**: Usa role="checkbox" y aria-checked para accesibilidad
- **Funcional**: Emite cambios de estado mediante checkedChange
- **Tamaño fijo**: 24x24 px (estándar)
- **Sin etiqueta**: Solo el checkbox visual, la etiqueta va fuera si se necesita

## Comportamiento:

- Click alterna entre true y false
- Emite \`checkedChange\` con el nuevo valor
- Transiciones suaves entre estados
- Focus outline visible para accesibilidad
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<CheckboxMaestroComponent>;

export const Unchecked: Story = {
  args: {
    checked: false,
  },
  parameters: {
    docs: {
      storyDescription: `
Estado por defecto: checkbox sin seleccionar.

Visual: Cuadrado blanco con borde gris y esquinas levemente redondeadas.

Al hacer clic, alternará al estado seleccionado.
      `,
    },
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
  parameters: {
    docs: {
      storyDescription: `
Estado seleccionado: checkbox marcado.

Visual: Cuadrado verde (#16A34A) con borde verde claro (#64C287) 
y un icono de check blanco centrado.

Al hacer clic, alternará al estado sin seleccionar.
      `,
    },
  },
};

export const Interactive: Story = {
  args: {
    checked: false,
  },
  parameters: {
    docs: {
      storyDescription: `
Modo interactivo: puedes hacer clic en el checkbox para alternar entre estados.

El componente emite \`checkedChange\` cada vez que cambias el estado,
permitiendo que el componente padre se entere del cambio.

**Nota importante:**
- El componente solo tiene dos estados: seleccionado y no seleccionado
- No hay estados de hover especiales más allá del ligero cambio visual
- No hay estados deshabilitados, solo estos dos
      `,
    },
  },
};

export const Group: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; padding: 20px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <app-checkbox-maestro [checked]="false"></app-checkbox-maestro>
          <span>Opción 1</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <app-checkbox-maestro [checked]="true"></app-checkbox-maestro>
          <span>Opción 2</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <app-checkbox-maestro [checked]="false"></app-checkbox-maestro>
          <span>Opción 3</span>
        </div>
      </div>
    `,
    components: { CheckboxMaestroComponent },
  }),
  parameters: {
    docs: {
      storyDescription: `
Ejemplo de múltiples checkboxes en un grupo con etiquetas.

El componente CheckboxMaestro es pequeño y simple, diseñado 
para usarse junto con etiquetas de texto u otros elementos.
      `,
    },
  },
};
