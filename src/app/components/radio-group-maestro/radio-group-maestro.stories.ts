import type { Meta, StoryObj } from '@storybook/angular';
import { RadioGroupMaestroComponent, RadioOption } from './radio-group-maestro.component';

const meta: Meta<RadioGroupMaestroComponent> = {
  title: 'Components/RadioGroupMaestro',
  component: RadioGroupMaestroComponent,
  tags: ['autodocs'],
  argTypes: {
    options: {
      description: 'Array de opciones para el grupo de radio buttons',
    },
    selectedValue: {
      control: 'text',
      description: 'Valor de la opción actualmente seleccionada',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# RadioGroupMaestro Component

Un componente de grupo de radio buttons con dos estados visuales simples.

## Estados:

### Sin seleccionar
- Círculo con borde gris (#8A8F9A)
- Interior blanco transparente
- Tamaño: 24px

### Seleccionado
- Círculo con borde azul (#0044DA)
- Interior blanco con círculo azul sólido centrado (12px)
- Tamaño: 24px

## Características:

- **Simple y directo**: Solo dos estados, sin hover especiales
- **Accesible**: Usa role="radio" y aria-checked para accesibilidad
- **Funcional**: Emite cambios mediante selectedValueChange
- **Flexible**: Valores pueden ser string o number
- **Columna layout**: Las opciones se muestran en vertical con espaciado constante

## Comportamiento:

- Clic en una opción la marca como seleccionada
- Las demás opciones se desmarcan automáticamente
- Emite \`selectedValueChange\` con el valor de la opción
- Actualiza \`selectedValue\` internamente
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<RadioGroupMaestroComponent>;

const simpleOptions: RadioOption[] = [
  { value: 'option1', label: 'Opción 1' },
  { value: 'option2', label: 'Opción 2' },
  { value: 'option3', label: 'Opción 3' },
];

const sizeOptions: RadioOption[] = [
  { value: 'small', label: 'Pequeño' },
  { value: 'medium', label: 'Mediano' },
  { value: 'large', label: 'Grande' },
];

const numberOptions: RadioOption[] = [
  { value: 1, label: 'Opción Uno' },
  { value: 2, label: 'Opción Dos' },
  { value: 3, label: 'Opción Tres' },
];

export const SimpleGroup: Story = {
  args: {
    options: simpleOptions,
  },
  parameters: {
    docs: {
      storyDescription: `
Grupo simple de 3 opciones sin selección inicial.

Visual: Tres radio buttons sin seleccionar (borde gris).
Cuando hagas clic en una opción, su radio se marcará (borde y círculo azules)
y las demás se desmarcará automáticamente.
      `,
    },
  },
};

export const WithPreselected: Story = {
  args: {
    options: sizeOptions,
    selectedValue: 'medium',
  },
  parameters: {
    docs: {
      storyDescription: `
Grupo con una opción preseleccionada.

En este caso, "Mediano" está preseleccionado (muestra el radio con borde y círculo azul).
El usuario puede hacer clic en otras opciones para cambiar la selección.
      `,
    },
  },
};

export const NumericValues: Story = {
  args: {
    options: numberOptions,
  },
  parameters: {
    docs: {
      storyDescription: `
Grupo con valores numéricos.

Este ejemplo demuestra que el componente RadioGroupMaestro es flexible:
el atributo \`value\` puede ser string o number. 
Aquí usamos números (1, 2, 3) en lugar de strings.

El evento \`selectedValueChange\` emitirá el número, no un string.
      `,
    },
  },
};

export const Interactive: Story = {
  args: {
    options: [
      { value: 'yes', label: '¿Aceptas términos y condiciones?' },
      { value: 'no', label: 'No acepto' },
    ],
    selectedValue: 'yes',
  },
  parameters: {
    docs: {
      storyDescription: `
Modo interactivo: Puedes hacer clic en cualquier opción para cambiar la selección.

El componente RadioGroupMaestro emite \`selectedValueChange\` cada vez que
cambias la selección, permitiendo que el componente padre maneje el cambio.

**Características importantes:**
- El componente solo tiene dos estados por radio: seleccionado y sin seleccionar
- No hay estados hover especiales más allá del cambio visual básico
- No hay estados disabled en esta versión
- El borde y círculo son azul (#0044DA) cuando se selecciona
- El borde es gris (#8A8F9A) cuando no está seleccionado
      `,
    },
  },
};

export const ManyOptions: Story = {
  args: {
    options: [
      { value: 'red', label: 'Rojo' },
      { value: 'green', label: 'Verde' },
      { value: 'blue', label: 'Azul' },
      { value: 'yellow', label: 'Amarillo' },
      { value: 'purple', label: 'Púrpura' },
    ],
    selectedValue: 'blue',
  },
  parameters: {
    docs: {
      storyDescription: `
Grupo con más opciones.

El componente se adapta bien a listas más largas,
manteniendo el espaciado consistente entre opciones.
      `,
    },
  },
};
