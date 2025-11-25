import type { Meta, StoryObj } from '@storybook/angular';
import { ModalLlamadaComponent } from './modal-llamada.component';
import { IconSlotComponent } from '../icon-slot/icon-slot.component';
import { BotonMaestroComponent } from '../boton-maestro/boton-maestro.component';

const meta: Meta<ModalLlamadaComponent> = {
  title: 'Components/ModalLlamada',
  component: ModalLlamadaComponent,
  tags: ['autodocs'],
  argTypes: {
    contactName: {
      control: 'text',
      description: 'Nombre del contacto',
    },
    oportunidadTitulo: {
      control: 'text',
      description: 'Título o nombre de la oportunidad',
    },
    fase: {
      control: 'text',
      description: 'Fase de la oportunidad',
    },
    categoria: {
      control: 'text',
      description: 'Categoría de la oportunidad',
    },
    probabilidadActual: {
      control: 'text',
      description: 'Probabilidad actual de la oportunidad',
    },
    headerTitle: {
      control: 'text',
      description: 'Texto que aparece en la cabecera del modal',
    },
    headerColor: {
      control: 'color',
      description: 'Color de fondo de la cabecera (hex o rgb)',
    },
    descripcionLlamada: {
      control: 'text',
      description: 'Texto descriptivo de la llamada automática',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
# ModalLlamada Component

Un modal que muestra información de una llamada automática en curso a un contacto.

## Características principales:

- **Reutiliza componentes**: Usa explícitamente BotonMaestro para el botón de "Ejecutar" e IconSlot para los iconos.
- **Animación de timbrado**: El ícono central tiene una animación de ondas circulares que simulan el timbrado de una llamada.
- **Información flexible**: Todos los textos y colores son configurables mediante inputs.
- **Responsive**: Se adapta a diferentes tamaños de pantalla.

## Estructura del modal:

1. **Cabecera** (color configurable):
   - IconSlot con ícono de teléfono (izquierda)
   - Título "Llamada en curso" (configurable)
   - Botón de cierre X (derecha)

2. **Cuerpo**:
   - Información del contacto (nombre)
   - Información de la oportunidad (título, fase, categoría, probabilidad)
   - IconSlot circular grande con animación de timbrado
   - Texto descriptivo
   - BotonMaestro con estilo verde

## Inputs:

- \`contactName\`: Nombre del contacto (default: 'Carlos Mendoza')
- \`oportunidadTitulo\`: Título de la oportunidad
- \`fase\`: Fase de la oportunidad
- \`categoria\`: Categoría de la oportunidad
- \`probabilidadActual\`: Probabilidad actual
- \`headerTitle\`: Título del header (default: 'Llamada en curso')
- \`headerColor\`: Color hex de la cabecera (default: '#9333EA')
- \`descripcionLlamada\`: Descripción de la llamada

## Outputs:

- \`cerrar\`: Se emite cuando se hace clic en el botón X
- \`ejecutar\`: Se emite cuando se hace clic en el botón "Ejecutar"
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<ModalLlamadaComponent>;

export const ModalLlamadaBasico: Story = {
  args: {
    contactName: 'Carlos Mendoza',
    oportunidadTitulo: 'LEAN SSSB ONLINE 2024 II LIMA',
    fase: 'BNC',
    categoria: 'Facebook Chat',
    probabilidadActual: 'Alta',
    headerTitle: 'Llamada en curso',
    headerColor: '#9333EA',
    descripcionLlamada: 'El sistema está realizando una llamada automática a este contacto',
  },
  parameters: {
    docs: {
      storyDescription: `
Visualización básica del ModalLlamada con datos de ejemplo.

El modal muestra:
- Contacto: Carlos Mendoza
- Oportunidad: LEAN SSSB ONLINE 2024 II LIMA
- Información adicional: Fase (BNC), Categoría (Facebook Chat), Probabilidad (Alta)
- Animación activa en el ícono central (ondas circulares infinitas)
- Botón verde "Ejecutar" funcional

Los eventos cerrar y ejecutar se pueden capturar en el componente padre.
      `,
    },
  },
};

export const ModalLlamadaConOtrosDatos: Story = {
  args: {
    contactName: 'María García López',
    oportunidadTitulo: 'PROGRAMA AVANZADO DE MARKETING 2024',
    fase: 'Negociación',
    categoria: 'Correo Electrónico',
    probabilidadActual: 'Media',
    headerTitle: 'Llamada en curso',
    headerColor: '#7C3AED',
    descripcionLlamada: 'El sistema está realizando una llamada automática a este contacto',
  },
  parameters: {
    docs: {
      storyDescription: `
ModalLlamada con datos de oportunidad diferentes.

Este ejemplo muestra:
- Contacto: María García López
- Oportunidad: PROGRAMA AVANZADO DE MARKETING 2024
- Información adicional: Fase (Negociación), Categoría (Correo Electrónico), Probabilidad (Media)
- Color de cabecera: #7C3AED (morado)

Demuestra la flexibilidad del componente para adaptarse a diferentes casos de uso.
      `,
    },
  },
};

export const ModalLlamadaResponsivo: Story = {
  args: {
    contactName: 'Juan Pérez',
    oportunidadTitulo: 'ESPECIALIZACIÓN EN DATOS',
    fase: 'Calificación',
    categoria: 'Llamada Telefónica',
    probabilidadActual: 'Baja',
    headerTitle: 'Llamada en curso',
    headerColor: '#059669',
    descripcionLlamada: 'El sistema está realizando una llamada automática a este contacto',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
    docs: {
      storyDescription: `
Visualización del ModalLlamada en un tamaño mobile.

El componente es completamente responsive y se adapta a:
- Pantallas pequeñas (mobile)
- Pantallas medianas (tablet)
- Pantallas grandes (desktop)

En dispositivos pequeños, el modal mantiene una experiencia óptima con:
- Tamaños de letra legibles
- Espacios adecuados
- Animaciones suaves
      `,
    },
  },
};

export const ModalLlamadaSinMetadatos: Story = {
  args: {
    contactName: 'Sofia Rodríguez',
    oportunidadTitulo: 'CAPACITACIÓN GENERAL',
    fase: '',
    categoria: '',
    probabilidadActual: '',
    headerTitle: 'Llamada entrante',
    headerColor: '#DC2626',
    descripcionLlamada: 'El sistema está conectando con el contacto',
  },
  parameters: {
    docs: {
      storyDescription: `
ModalLlamada sin metadatos adicionales.

Este ejemplo muestra que el componente funciona correctamente incluso cuando:
- Los campos de fase, categoría y probabilidad están vacíos
- El título del header es personalizado
- El color de la cabecera es diferente (rojo en este caso)

Los campos vacíos simplemente no se renderizan, manteniendo un diseño limpio.
      `,
    },
  },
};

export const ModalLlamadaConEventos: Story = {
  args: {
    contactName: 'Roberto Silva',
    oportunidadTitulo: 'MASTER EN GESTIÓN EMPRESARIAL',
    fase: 'Prospección',
    categoria: 'Whatsapp',
    probabilidadActual: 'Alta',
    headerTitle: 'Llamada en curso',
    headerColor: '#9333EA',
    descripcionLlamada: 'El sistema está realizando una llamada automática a este contacto',
  },
  render: (args) => ({
    props: {
      ...args,
      onCerrar: () => {
        console.log('Modal cerrado');
        alert('Modal cerrado');
      },
      onEjecutar: () => {
        console.log('Botón Ejecutar clickeado');
        alert('Botón Ejecutar clickeado');
      },
    },
    template: `
      <app-modal-llamada
        [contactName]="contactName"
        [oportunidadTitulo]="oportunidadTitulo"
        [fase]="fase"
        [categoria]="categoria"
        [probabilidadActual]="probabilidadActual"
        [headerTitle]="headerTitle"
        [headerColor]="headerColor"
        [descripcionLlamada]="descripcionLlamada"
        (cerrar)="onCerrar()"
        (ejecutar)="onEjecutar()"
      ></app-modal-llamada>
    `,
    imports: [ModalLlamadaComponent, IconSlotComponent, BotonMaestroComponent],
  }),
  parameters: {
    docs: {
      storyDescription: `
ModalLlamada con manejo de eventos.

Este ejemplo demuestra cómo capturar los eventos emitidos por el componente:
- \`(cerrar)\`: Se dispara al hacer clic en el botón X
- \`(ejecutar)\`: Se dispara al hacer clic en el botón verde "Ejecutar"

Abre la consola del navegador para ver los logs de los eventos.
      `,
    },
  },
};
