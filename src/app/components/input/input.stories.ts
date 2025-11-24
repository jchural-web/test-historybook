import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent, InputButton } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['simple', 'one-button', 'two-buttons', 'two-buttons-checkbox'],
      description: 'Variación visual del input',
    },
    type: {
      control: 'select',
      options: ['text', 'number', 'password', 'tel', 'email', 'search'],
      description: 'Tipo de input HTML',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder del input',
    },
    value: {
      control: 'text',
      description: 'Valor del input',
    },
    checkboxLabel: {
      control: 'text',
      description: 'Etiqueta del checkbox (solo para variant two-buttons-checkbox)',
    },
    checkboxChecked: {
      control: 'boolean',
      description: 'Estado del checkbox',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# Input Component

Un componente de entrada de texto flexible con soporte para múltiples variantes y botones de acción.

## Variantes:

### Simple
Solo el campo de texto sin botones laterales.

### One Button
Campo de texto con un botón de acción al lado derecho (ej: copiar).

### Two Buttons
Campo de texto con dos botones de acción separados por una línea vertical.

### Two Buttons Checkbox
Campo de texto con dos botones de acción y un checkbox al extremo derecho.

## Características:
- Altura consistente (34px)
- Bordes suaves (border-radius: 5px)
- Borde gris claro (#E5E7EB)
- Botones con iconos Lucide
- Separadores verticales entre botones
- Checkbox con color personalizado
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Simple: Story = {
  args: {
    variant: 'simple',
    placeholder: 'Escribe aquí…',
    type: 'text',
  },
};

export const OneButton: Story = {
  args: {
    variant: 'one-button',
    placeholder: 'Copiar enlace',
    type: 'text',
    button1: {
      iconName: 'copy',
      ariaLabel: 'Copiar al portapapeles',
    } as InputButton,
  },
};

export const TwoButtons: Story = {
  args: {
    variant: 'two-buttons',
    placeholder: 'Llamar o copiar',
    type: 'text',
    button1: {
      iconName: 'copy',
      ariaLabel: 'Copiar al portapapeles',
    } as InputButton,
    button2: {
      iconName: 'phone',
      ariaLabel: 'Llamar',
    } as InputButton,
  },
};

export const TwoButtonsCheckbox: Story = {
  args: {
    variant: 'two-buttons-checkbox',
    placeholder: 'Escribe aquí…',
    type: 'text',
    button1: {
      iconName: 'copy',
      ariaLabel: 'Copiar al portapapeles',
    } as InputButton,
    button2: {
      iconName: 'phone',
      ariaLabel: 'Llamar',
    } as InputButton,
    checkboxLabel: 'Seleccionar',
    checkboxChecked: false,
  },
};

export const SimpleWithValue: Story = {
  args: {
    variant: 'simple',
    placeholder: 'Escribe aquí…',
    type: 'text',
    value: 'Valor inicial',
  },
};

export const EmailInput: Story = {
  args: {
    variant: 'one-button',
    type: 'email',
    placeholder: 'correo@ejemplo.com',
    button1: {
      iconName: 'copy',
      ariaLabel: 'Copiar email',
    } as InputButton,
  },
};

export const PhoneInput: Story = {
  args: {
    variant: 'two-buttons',
    type: 'tel',
    placeholder: '+1 (555) 000-0000',
    button1: {
      iconName: 'copy',
      ariaLabel: 'Copiar teléfono',
    } as InputButton,
    button2: {
      iconName: 'phone',
      ariaLabel: 'Llamar',
    } as InputButton,
  },
};

export const PasswordInput: Story = {
  args: {
    variant: 'simple',
    type: 'password',
    placeholder: 'Ingresa tu contraseña',
  },
};

export const NumberInput: Story = {
  args: {
    variant: 'simple',
    type: 'number',
    placeholder: 'Ingresa un número',
    value: 42,
  },
};
