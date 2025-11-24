import type { Meta, StoryObj } from '@storybook/angular';
import { ComboboxMaestroComponent, ComboOption } from './combobox-maestro.component';

const meta: Meta<ComboboxMaestroComponent> = {
  title: 'Components/ComboboxMaestro',
  component: ComboboxMaestroComponent,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Texto que se muestra cuando no hay opción seleccionada',
    },
    options: {
      description: 'Array de opciones disponibles en el combobox',
    },
    selectedValue: {
      control: 'text',
      description: 'Valor actualmente seleccionado',
    },
    width: {
      control: 'text',
      description: 'Ancho del combobox (ej: 100%, 260px, 300px)',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# ComboboxMaestro Component

Un componente de select desplegable altamente reutilizable con 3 estados visuales:

## Estados:

### 1. Contraído
- Solo se ve el campo con el texto (placeholder o etiqueta seleccionada)
- Icono de flecha hacia abajo

### 2. Expandido
- El campo arriba con la flecha hacia arriba
- Panel blanco debajo mostrando todas las opciones
- Animación de deslizamiento suave

### 3. Hover sobre opciones
- La fila se resalta con fondo gris claro (#ECEEF0)
- Solo afecta la opción específica bajo el cursor

## Características:

- **Completamente reutilizable**: Texto, opciones y ancho son configurables mediante inputs
- **Funcional**: 
  - Abre/cierra al hacer clic en el header
  - Selecciona opciones con un clic
  - Emite el valor seleccionado
  - Se cierra automáticamente al seleccionar
- **Accesible**: Botones semánticos y enfoque visible
- **Responsive**: Se adapta al ancho especificado
- **Diseño limpio**: Bordes suaves, colores coherentes con la paleta del proyecto

## API:

- \`placeholder\`: Texto por defecto
- \`options\`: Array de ComboOption (value + label)
- \`selectedValue\`: Valor seleccionado actualmente
- \`width\`: Ancho personalizable
- \`selectedValueChange\`: Emite el valor cuando se selecciona una opción
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ComboboxMaestroComponent>;

const discountOptions: ComboOption[] = [
  { value: 10, label: '10% de descuento' },
  { value: 15, label: '15% de descuento' },
  { value: 20, label: '20% de descuento' },
];

export const DiscountClosed: Story = {
  args: {
    placeholder: 'Selecciona el descuento',
    options: discountOptions,
    width: '287px',
  },
};

export const DiscountOpen: Story = {
  args: {
    placeholder: 'Selecciona el descuento',
    options: discountOptions,
    width: '287px',
  },
  parameters: {
    docs: {
      storyDescription: `
Estado expandido del combobox de descuentos.

En esta vista se pueden ver:
- El campo header arriba con la flecha hacia arriba
- El panel desplegable con todas las opciones
- El efecto hover cuando pasas el mouse por una opción (fondo gris claro)

El componente se contraerá automáticamente cuando selecciones una opción.
      `,
    },
  },
};

export const DiscountSelected: Story = {
  args: {
    placeholder: 'Selecciona el descuento',
    options: discountOptions,
    selectedValue: 10,
    width: '287px',
  },
  parameters: {
    docs: {
      storyDescription: `
Estado con una opción ya seleccionada (10% de descuento).

El header ahora muestra el label de la opción seleccionada en lugar del placeholder.
Si haces clic nuevamente en el header, el combobox se expande mostrando todas las opciones
y la opción seleccionada se resalta con el mismo fondo gris (#ECEEF0).
      `,
    },
  },
};

export const VersionSelector: Story = {
  args: {
    placeholder: 'Selecciona la versión',
    options: [
      { value: 'basic', label: 'Versión Básica' },
      { value: 'standard', label: 'Versión Estándar' },
      { value: 'premium', label: 'Versión Premium' },
    ],
    width: '280px',
  },
  parameters: {
    docs: {
      storyDescription: `
Ejemplo de un combobox con opciones diferentes.

Este ejemplo demuestra que el componente es completamente reutilizable:
puedes usar cualquier texto en el placeholder, cualquier conjunto de opciones,
y cualquier ancho que necesites.
      `,
    },
  },
};

export const CountrySelector: Story = {
  args: {
    placeholder: 'Selecciona un país',
    options: [
      { value: 'es', label: 'España' },
      { value: 'mx', label: 'México' },
      { value: 'ar', label: 'Argentina' },
      { value: 'co', label: 'Colombia' },
      { value: 'cl', label: 'Chile' },
    ],
    selectedValue: 'es',
    width: '300px',
  },
  parameters: {
    docs: {
      storyDescription: `
Otro ejemplo reutilizable: selector de países.

El componente maneja cualquier tipo de valor (string, number)
y funciona perfectamente con cualquier lista de opciones.
      `,
    },
  },
};

export const MinimalWidth: Story = {
  args: {
    placeholder: 'Selecciona',
    options: [
      { value: 'opt1', label: 'Opción 1' },
      { value: 'opt2', label: 'Opción 2' },
    ],
    width: '180px',
  },
  parameters: {
    docs: {
      storyDescription: `
Ejemplo con ancho reducido.

El texto se trunca automáticamente con ellipsis si es muy largo.
      `,
    },
  },
};
