import type { Meta, StoryObj } from '@storybook/angular';
import { AccordionComponent } from './accordion.component';

const meta: Meta<AccordionComponent> = {
  title: 'Example/Accordion',
  component: AccordionComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Accordion size',
    },
    mode: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Accordion mode - single (one item open) or multiple (multiple items open)',
    },
    items: {
      control: 'object',
      description: 'Array of accordion items',
    },
    expandedItems: {
      control: 'object',
      description: 'Array of initially expanded item IDs',
    },
  },
  args: {
    size: 'md',
    mode: 'single',
    items: [
      {
        id: 'item-1',
        title: 'Sección 1: Introducción',
        content:
          'Esta es la primera sección del acordeón. Contiene información introductoria que el usuario puede expandir o contraer según sea necesario.',
      },
      {
        id: 'item-2',
        title: 'Sección 2: Contenido Principal',
        content:
          'Esta es la segunda sección. Aquí se presenta el contenido principal que complementa la introducción con detalles más específicos.',
      },
      {
        id: 'item-3',
        title: 'Sección 3: Información Adicional',
        content:
          'Esta es la tercera sección que contiene información adicional útil para el usuario que desea profundizar en el tema.',
      },
    ],
    expandedItems: [],
  },
};

export default meta;
type Story = StoryObj<AccordionComponent>;

// ===========================
// Default - Interactive Accordion
// ===========================

export const Default: Story = {
  args: {
    size: 'md',
    mode: 'single',
  },
};

// ===========================
// Modes
// ===========================

export const SingleMode: Story = {
  args: {
    ...Default.args,
    mode: 'single',
    expandedItems: ['item-1'],
  },
};

export const MultipleMode: Story = {
  args: {
    ...Default.args,
    mode: 'multiple',
    expandedItems: ['item-1', 'item-2'],
  },
};

// ===========================
// Sizes
// ===========================

export const SizeSmall: Story = {
  args: {
    ...Default.args,
    size: 'sm',
  },
};

export const SizeMedium: Story = {
  args: {
    ...Default.args,
    size: 'md',
  },
};

export const SizeLarge: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
};

// ===========================
// Content Examples
// ===========================

export const FAQExample: Story = {
  args: {
    size: 'md',
    mode: 'single',
    items: [
      {
        id: 'faq-1',
        title: '¿Cuál es el proceso de registro?',
        content:
          'El proceso de registro es simple y rápido. Debes proporcionar tu correo electrónico, crear una contraseña segura y verificar tu dirección de correo. En menos de 5 minutos, tu cuenta estará lista para usar.',
      },
      {
        id: 'faq-2',
        title: '¿Cómo recupero mi contraseña?',
        content:
          'Si olvidaste tu contraseña, haz clic en "Olvidé mi contraseña" en la página de inicio de sesión. Recibirás un correo electrónico con un enlace para restablecer tu contraseña. El enlace es válido por 24 horas.',
      },
      {
        id: 'faq-3',
        title: '¿Cuáles son los métodos de pago disponibles?',
        content:
          'Aceptamos tarjetas de crédito (Visa, Mastercard, American Express), transferencia bancaria y billeteras digitales como PayPal y Apple Pay. Todos los pagos son seguros y encriptados.',
      },
      {
        id: 'faq-4',
        title: '¿Cuál es la política de reembolso?',
        content:
          'Ofrecemos una garantía de satisfacción de 30 días. Si no estás satisfecho con nuestro servicio, puedes solicitar un reembolso completo sin hacer preguntas. El reembolso se procesará dentro de 5 a 7 días hábiles.',
      },
    ],
  },
};

export const FeaturesList: Story = {
  args: {
    size: 'md',
    mode: 'multiple',
    items: [
      {
        id: 'feat-1',
        title: 'Autenticación Segura',
        content:
          'Implementamos autenticación de dos factores (2FA) para proteger tu cuenta. Puedes usar aplicaciones autenticadoras o recibir códigos por SMS.',
      },
      {
        id: 'feat-2',
        title: 'Sincronización en Tiempo Real',
        content:
          'Todos tus datos se sincronizan instantáneamente en todos tus dispositivos. Accede a tu información desde donde quieras, cuando quieras.',
      },
      {
        id: 'feat-3',
        title: 'Analítica Avanzada',
        content:
          'Obtén insights profundos con nuestros dashboards interactivos. Visualiza tendencias, identifica patrones y toma decisiones basadas en datos.',
      },
      {
        id: 'feat-4',
        title: 'Integración con Terceros',
        content:
          'Conecta fácilmente con más de 1000 aplicaciones populares. Automatiza tu flujo de trabajo sin escribir código.',
      },
    ],
  },
};

export const DisabledItems: Story = {
  args: {
    size: 'md',
    mode: 'single',
    items: [
      {
        id: 'disabled-1',
        title: 'Opción Disponible',
        content: 'Esta opción está habilitada y puede ser expandida o contraída.',
      },
      {
        id: 'disabled-2',
        title: 'Opción Deshabilitada',
        content: 'Este contenido no es accesible',
        disabled: true,
      },
      {
        id: 'disabled-3',
        title: 'Otra Opción Disponible',
        content: 'Esta es otra opción que funciona normalmente.',
      },
    ],
  },
};

// ===========================
// Design System Showcase
// ===========================

export const DesignSystemShowcase: Story = {
  render: () => ({
    template: `
      <div style="font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif; padding: 24px; max-width: 1200px;">
        <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Accordion Component Library</h2>
        
        <!-- Sizes -->
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600;">Sizes</h3>
          
          <div style="display: flex; flex-direction: column; gap: 32px;">
            <!-- Small -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">Small (sm)</h4>
              <bsg-accordion 
                size="sm" 
                mode="single"
                [items]="[
                  { id: 'sm-1', title: 'Elemento 1', content: 'Contenido para tamaño pequeño' },
                  { id: 'sm-2', title: 'Elemento 2', content: 'Otro contenido de ejemplo' }
                ]">
              </bsg-accordion>
            </div>
            
            <!-- Medium -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">Medium (md) - Default</h4>
              <bsg-accordion 
                size="md" 
                mode="single"
                [items]="[
                  { id: 'md-1', title: 'Elemento 1', content: 'Contenido para tamaño mediano' },
                  { id: 'md-2', title: 'Elemento 2', content: 'Otro contenido de ejemplo' }
                ]">
              </bsg-accordion>
            </div>
            
            <!-- Large -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">Large (lg)</h4>
              <bsg-accordion 
                size="lg" 
                mode="single"
                [items]="[
                  { id: 'lg-1', title: 'Elemento 1', content: 'Contenido para tamaño grande' },
                  { id: 'lg-2', title: 'Elemento 2', content: 'Otro contenido de ejemplo' }
                ]">
              </bsg-accordion>
            </div>
          </div>
        </section>

        <!-- Modes -->
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600;">Modes</h3>

          <div style="display: flex; flex-direction: column; gap: 32px;">
            <!-- Single Mode -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">Single Mode (solo un elemento abierto)</h4>
              <bsg-accordion
                size="md"
                mode="single"
                [items]="[
                  { id: 'single-1', title: 'Opción 1', content: 'Solo una sección puede estar abierta a la vez' },
                  { id: 'single-2', title: 'Opción 2', content: 'Al abrir esta, la anterior se cerrará' },
                  { id: 'single-3', title: 'Opción 3', content: 'Útil para FAQs y guías paso a paso' }
                ]">
              </bsg-accordion>
            </div>

            <!-- Multiple Mode -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">Multiple Mode (múltiples elementos abiertos)</h4>
              <bsg-accordion
                size="md"
                mode="multiple"
                [items]="[
                  { id: 'multi-1', title: 'Opción 1', content: 'Múltiples secciones pueden estar abiertas simultáneamente' },
                  { id: 'multi-2', title: 'Opción 2', content: 'Perfecto para ver múltiples secciones a la vez' },
                  { id: 'multi-3', title: 'Opción 3', content: 'Ideal para comparar información' }
                ]">
              </bsg-accordion>
            </div>
          </div>
        </section>

        <!-- Accordion Variants (like Table) -->
        <section style="margin-bottom: 48px;">
          <h3 style="margin-bottom: 24px; font-size: 18px; font-weight: 600;">Accordion Variants (Table-like)</h3>
          <p style="margin-bottom: 16px; color: #64748B; font-size: 14px;">Accordion items with Table-like content structures</p>

          <div style="display: flex; flex-direction: column; gap: 32px;">
            <!-- Actions Variant -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">With Actions (like table-actions)</h4>
              <bsg-accordion
                size="md"
                mode="single"
                [items]="[
                  {
                    id: 'var-action-1',
                    title: 'Acceso al material oficial del PMI - Bianca Mamani',
                    content: 'Programa: Curso Oficial de Preparación | Centro Costo: PREP EXAMPMP ONLINE 2024 XIV LIMA | Fecha: 28/02/2025 | Estado: Pendiente | Acciones: Aprobar / Rechazar'
                  },
                  {
                    id: 'var-action-2',
                    title: 'Beca Completa AWS - Carlos López',
                    content: 'Programa: AWS Solutions Architect | Centro Costo: AWS TRAINING 2024 I LIMA | Fecha: 25/02/2025 | Estado: En revisión | Acciones: Aprobar / Rechazar'
                  }
                ]">
              </bsg-accordion>
            </div>

            <!-- Basic Variant -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">Basic Content (like table-basic)</h4>
              <bsg-accordion
                size="md"
                mode="multiple"
                [items]="[
                  {
                    id: 'var-basic-1',
                    title: 'Costos Gestión de Cobranza - $30.00 (PEN)',
                    content: 'Aplica cuando se realicen cualquiera de las siguientes formas de cobranza: efectivo, transferencia, tarjeta de crédito. Válido para todos los cursos y programas.'
                  },
                  {
                    id: 'var-basic-2',
                    title: 'Emisión de duplicado de certificado - $50.00 (PEN)',
                    content: 'Cuando el alumno solicita una segunda copia del certificado de participación. Incluye envío digital y una copia física si lo requiere.'
                  }
                ]">
              </bsg-accordion>
            </div>

            <!-- List Content Variant -->
            <div>
              <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 500; color: #64748B;">List Content (like list-content)</h4>
              <bsg-accordion
                size="md"
                mode="multiple"
                [items]="[
                  {
                    id: 'var-list-1',
                    title: 'Plan Profesional',
                    content: 'Acceso a material oficial completamente actualizado\n\nSimulador con 195 preguntas del examen de certificación\n\nCertificación oficial de participación en el curso\n\nAcceso a laboratorios oficiales de AWS\n\nSoporte técnico dedicado 24/7'
                  },
                  {
                    id: 'var-list-2',
                    title: 'Plan Empresarial',
                    content: 'Todos los beneficios del Plan Profesional\n\nFormación personalizada para equipos (mínimo 5 personas)\n\nIntegración con sistemas empresariales\n\nReportes de progreso detallados\n\nSoporte prioritario con SLA garantizado\n\nLicencias ilimitadas para usuarios corporativos'
                  }
                ]">
              </bsg-accordion>
            </div>
          </div>
        </section>

        <!-- Design Specifications -->
        <section>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Design Specifications</h3>
          <div style="font-size: 14px; color: #64748B; line-height: 1.6;">
            <p style="margin: 12px 0;"><strong>Sizes:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>sm: 12px padding, 14px font size</li>
              <li>md: 16px padding, 16px font size (default)</li>
              <li>lg: 20px padding, 18px font size</li>
            </ul>
            
            <p style="margin: 12px 0;"><strong>Modes:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>single: Solo un elemento puede estar abierto a la vez</li>
              <li>multiple: Múltiples elementos pueden estar abiertos simultáneamente</li>
            </ul>
            
            <p style="margin: 12px 0;"><strong>Features:</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>Animación suave al expandir/contraer</li>
              <li>Soporte para elementos deshabilitados</li>
              <li>Iconos de chevron rotativos</li>
              <li>Estados hover y focus accesibles</li>
              <li>ARIA labels para accesibilidad</li>
            </ul>

            <p style="margin: 12px 0;"><strong>Content Variants (like Table):</strong></p>
            <ul style="margin: 8px 0 8px 20px;">
              <li>With Actions: Items with action buttons and detailed information</li>
              <li>Basic: Simple content items with key details and descriptions</li>
              <li>List Content: Multiple features or benefits listed in each item</li>
              <li>Compatible with embedded Table components for complex data</li>
            </ul>
          </div>
        </section>
      </div>
    `,
  }),
};

// ===========================
// Accordion with Actions (like Table Actions Variant)
// ===========================

export const AccordionWithActions: Story = {
  args: {
    size: 'md',
    mode: 'single',
    items: [
      {
        id: 'action-1',
        title: 'Acceso al material oficial del PMI - Bianca Mamani',
        content: 'Programa: Curso Oficial de Preparación | Centro Costo: PREP EXAMPMP ONLINE 2024 XIV LIMA | Fecha: 28/02/2025 | Estado: Pendiente de aprobación | Acciones: Aprobar / Rechazar',
      },
      {
        id: 'action-2',
        title: 'Beca Completa AWS - Carlos López',
        content: 'Programa: AWS Solutions Architect Training | Centro Costo: AWS TRAINING 2024 I LIMA | Fecha: 25/02/2025 | Estado: En revisión | Acciones: Aprobar / Rechazar',
      },
      {
        id: 'action-3',
        title: 'Material Digital Curso PMP - María García',
        content: 'Programa: Certificación de Gestión de Proyectos | Centro Costo: CURSO PMP 2024 II BOGOTA | Fecha: 20/02/2025 | Estado: Pendiente | Acciones: Aprobar / Rechazar',
      },
    ],
  },
};

// ===========================
// Accordion with Basic Content (like Table Basic Variant)
// ===========================

export const AccordionBasic: Story = {
  args: {
    size: 'md',
    mode: 'multiple',
    items: [
      {
        id: 'basic-1',
        title: 'Costos Gestión de Cobranza - $30.00 (PEN)',
        content: 'Aplica cuando se realicen cualquiera de las siguientes formas de cobranza: efectivo, transferencia, tarjeta de crédito. Válido para todos los cursos y programas.',
      },
      {
        id: 'basic-2',
        title: 'Emisión de duplicado de certificado - $50.00 (PEN)',
        content: 'Cuando el alumno solicita una segunda copia del certificado de participación. Incluye envío digital y una copia física si lo requiere.',
      },
      {
        id: 'basic-3',
        title: 'Cambio de horario de clase - $25.00 (PEN)',
        content: 'Cambio de horario después de la inscripción inicial. Se puede realizar hasta 2 cambios por semestre académico.',
      },
      {
        id: 'basic-4',
        title: 'Certificación adicional - $75.00 (PEN)',
        content: 'Solicitud de certificación adicional en un programa diferente. Incluye evaluación y emisión de nuevo certificado.',
      },
    ],
  },
};

// ===========================
// Accordion with List Content (like Table List Variant)
// ===========================

export const AccordionListContent: Story = {
  args: {
    size: 'md',
    mode: 'multiple',
    items: [
      {
        id: 'list-1',
        title: 'Plan Básico',
        content: 'Acceso a cursos fundamentales\nMaterial de estudio en PDF\nForos de discusión comunitarios\nSoporte por correo (48 horas respuesta)\nCertificado de participación',
      },
      {
        id: 'list-2',
        title: 'Plan Profesional',
        content: 'Acceso a material oficial completamente actualizado\nSimulador con 195 preguntas del examen de certificación\nCertificación oficial de participación en el curso\nAcceso a laboratorios oficiales de AWS\nSoporte técnico dedicado 24/7\nMentoría individual mensual',
      },
      {
        id: 'list-3',
        title: 'Plan Empresarial',
        content: 'Todos los beneficios del Plan Profesional\nAcceso a cursos avanzados y especializados\nFormación personalizada para equipos (mínimo 5 personas)\nIntegración con sistemas empresariales\nReportes de progreso detallados\nSoporte prioritario con SLA garantizado\nLicencias ilimitadas para usuarios corporativos',
      },
    ],
  },
};

// ===========================
// Tables in Accordion
// ===========================

export const TablesInAccordion: Story = {
  render: () => ({
    template: `
      <div style="padding: 24px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;">
        <h3 style="margin: 0 0 24px 0; font-size: 16px; font-weight: 600;">Accordion with Embedded Tables</h3>
        <p style="margin: 0 0 24px 0; color: #64748B; font-size: 14px;">Accordion items with complete table components inside, allowing collapsible table sections.</p>

        <!-- Collapsible Table Example 1: Table Actions -->
        <div style="margin-bottom: 24px;">
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Beneficios Solicitados</h4>
          <bsg-accordion
            mode="single"
            size="md"
            [items]="[
              {
                id: 'benefits-table',
                title: 'Ver Beneficios Solicitados (Coordinador)',
                content: 'Contenido de beneficios'
              }
            ]">
          </bsg-accordion>
          <div style="margin-top: -1px; border: 1px solid #cbd5e1; border-radius: 0 0 8px 8px; padding: 16px;">
            <bsg-table
              title="Beneficios"
              variant="table-actions"
              [showActionsColumn]="true"
              [tableColumns]="[
                { key: 'benefit', label: 'Beneficio solicitado', width: '210px' },
                { key: 'program', label: 'Programa', width: '141px' },
                { key: 'date', label: 'Fecha', width: '88px' },
                { key: 'coordinator', label: 'Coordinador', width: '107px' }
              ]"
              [tableRows]="[
                {
                  benefit: 'Acceso al material oficial del PMI...',
                  program: 'Curso Oficial de Preparación...',
                  date: '28/02/2025',
                  date_badge: true,
                  date_badge_variant: 'secondary',
                  coordinator: 'Bianca Mamani',
                  actions: [
                    { label: 'Aprobar', variant: 'approve' },
                    { label: 'Rechazar', variant: 'reject' }
                  ]
                }
              ]"
              [tablePagination]="{
                currentPage: 1,
                totalPages: 1,
                pageSize: 5,
                pageSizeOptions: [5, 10, 20],
                totalItems: 1,
                rangeLabel: '1 - 1 de 1 ítems'
              }">
            </bsg-table>
          </div>
        </div>

        <!-- Collapsible Table Example 2: Table Basic -->
        <div style="margin-bottom: 24px;">
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Tarifario de Trámites</h4>
          <bsg-accordion
            mode="single"
            size="md"
            [items]="[
              {
                id: 'tariffs-table',
                title: 'Ver Tarifario de Trámites y Servicios',
                content: 'Contenido de tarifarios'
              }
            ]">
          </bsg-accordion>
          <div style="margin-top: -1px; border: 1px solid #cbd5e1; border-radius: 0 0 8px 8px; padding: 16px;">
            <bsg-table
              title="Tarifario"
              variant="table-basic"
              [tableColumns]="[
                { key: 'number', label: 'N°', width: '50px' },
                { key: 'concept', label: 'Concepto', width: '218px' },
                { key: 'description', label: 'Descripción', width: '400px' },
                { key: 'amount', label: 'Monto (PEN)', width: '89px' }
              ]"
              [tableRows]="[
                {
                  number: '1',
                  concept: 'Costos Gestión de Cobranza',
                  description: 'Aplica cuando se realicen cualquiera de las siguientes...',
                  amount: '30.00'
                },
                {
                  number: '2',
                  concept: 'Emisión de duplicado de certificado',
                  description: 'Cuando el alumno solicita una segunda copia del certificado...',
                  amount: '50.00'
                }
              ]">
            </bsg-table>
          </div>
        </div>

        <!-- Collapsible Table Example 3: List Content -->
        <div style="margin-bottom: 24px;">
          <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Características Profesional</h4>
          <bsg-accordion
            mode="single"
            size="md"
            [items]="[
              {
                id: 'features-table',
                title: 'Ver Características de la Versión Profesional',
                content: 'Contenido de características'
              }
            ]">
          </bsg-accordion>
          <div style="margin-top: -1px; border: 1px solid #cbd5e1; border-radius: 0 0 8px 8px; padding: 16px;">
            <bsg-table
              title="Características"
              variant="list-content"
              [listItems]="[
                { text: 'Acceso a material oficial completamente actualizado' },
                { text: 'Simulador con 195 preguntas del examen de certificación' },
                { text: 'Certificación oficial de participación en el curso' },
                { text: 'Acceso a laboratorios oficiales de AWS' },
                { text: 'Soporte técnico dedicado 24/7' }
              ]">
            </bsg-table>
          </div>
        </div>
      </div>
    `,
  }),
};

// ===========================
// Usage Examples
// ===========================

export const UsageExamples: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 48px; padding: 24px; font-family: Inter, -apple-system, Roboto, Helvetica, sans-serif;">
        <h3 style="margin: 0; font-size: 16px; font-weight: 600;">Accordion Usage Examples</h3>
        
        <!-- FAQ Section -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">FAQ (Preguntas Frecuentes)</h4>
          <bsg-accordion 
            size="md" 
            mode="single"
            [items]="[
              {
                id: 'faq-plan-1',
                title: '¿Cuáles son los planes disponibles?',
                content: 'Ofrecemos tres planes: Básico, Profesional y Empresarial. Cada plan incluye características específicas adaptadas a diferentes necesidades.'
              },
              {
                id: 'faq-plan-2',
                title: '¿Puedo cambiar de plan en cualquier momento?',
                content: 'Sí, puedes cambiar tu plan en cualquier momento desde tu panel de control. Los cambios entran en vigor en tu próximo ciclo de facturación.'
              },
              {
                id: 'faq-plan-3',
                title: '¿Hay descuentos por pago anual?',
                content: 'Sí, ofrecemos un 20% de descuento si pagas anualmente en lugar de mensualmente.'
              }
            ]">
          </bsg-accordion>
        </div>
        
        <!-- Product Features -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Características del Producto</h4>
          <bsg-accordion 
            size="md" 
            mode="multiple"
            [items]="[
              {
                id: 'feature-1',
                title: '📊 Analytics en Tiempo Real',
                content: 'Obtén reportes detallados y métricas en tiempo real. Monitorea el rendimiento de tu negocio con dashboards personalizables.'
              },
              {
                id: 'feature-2',
                title: '🔒 Seguridad de Nivel Empresarial',
                content: 'Protección avanzada con encriptación end-to-end, autenticación de dos factores y cumplimiento de normativas internacionales.'
              },
              {
                id: 'feature-3',
                title: '⚙️ API Flexible',
                content: 'Integra nuestros servicios con tus aplicaciones existentes usando nuestra API REST completamente documentada.'
              },
              {
                id: 'feature-4',
                title: '👥 Soporte Dedicado',
                content: 'Acceso a especialistas dedicados disponibles 24/7 para ayudarte con cualquier pregunta o problema.'
              }
            ]">
          </bsg-accordion>
        </div>
        
        <!-- Course Modules -->
        <div>
          <h4 style="margin: 0 0 16px 0; font-size: 14px; font-weight: 600; color: #202020;">Módulos del Curso</h4>
          <bsg-accordion 
            size="md" 
            mode="multiple"
            [items]="[
              {
                id: 'module-1',
                title: 'Módulo 1: Fundamentos',
                content: 'Aprende los conceptos básicos necesarios para comenzar. Este módulo cubre definiciones, principios fundamentales y mejores prácticas.'
              },
              {
                id: 'module-2',
                title: 'Módulo 2: Técnicas Avanzadas',
                content: 'Domina técnicas avanzadas para optimizar tu trabajo. Incluye casos de uso reales y ejemplos prácticos.'
              },
              {
                id: 'module-3',
                title: 'Módulo 3: Implementación Práctica',
                content: 'Implementa lo aprendido en proyectos reales. Recibe retroalimentación personalizada de instructores expertos.'
              }
            ]">
          </bsg-accordion>
        </div>
      </div>
    `,
  }),
};
