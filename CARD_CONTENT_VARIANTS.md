# Card Component - Content Variants

**Status:** ✅ Feature Completada  
**Fecha:** 2025  
**Tipo:** Enhancement (Extensión sin Breaking Changes)

---

## 📋 Resumen de Cambios

Se agregó una nueva prop `contentVariant` al componente Card existente, permitiendo 4 nuevas variaciones de contenido **sin romper la funcionalidad existente**.

### Nuevos Content Variants

| ContentVariant | Descripción                      | Caso de Uso                       |
| -------------- | -------------------------------- | --------------------------------- |
| `default`      | Card original (sin cambios)      | Dashboard metrics con helper text |
| `metric`       | Métrica destacada con valor rojo | Compromisos incumplidos, alertas  |
| `infoDate`     | Información de fecha             | Mostrar fechas importantes        |
| `infoCurrency` | Información de moneda con icono  | Tipo de moneda, indicadores       |
| `placeholder`  | Card vacío/placeholder           | Contenido pendiente, carga        |

---

## 🎨 Especificaciones por ContentVariant

### 1. Default (Original Card)

El comportamiento original del Card **se mantiene sin cambios**.

```typescript
<storybook-card
  contentVariant="default"
  variant="elevated"
  header="Actividades Totales"
  value="21"
  helper="+15.2%"
  helperDescription="respecto al mes anterior"
  icon="phone"
></storybook-card>
```

**Props necesarios:**

- `header`, `value`, `helper`, `helperDescription`, `icon`

---

### 2. Metric (Métrica con Alerta)

Card compacto para mostrar métricas críticas con fondo rojo suave.

```typescript
<storybook-card
  contentVariant="metric"
  metricTitle="Compromisos Incumplidos"
  metricValue="0"
></storybook-card>
```

**Props necesarios:**

- `metricTitle` (string): Título de la métrica
- `metricValue` (string | number): Valor de la métrica

**Colores (desde Figma):**

- Background: `#FEF2F2` (Red-50)
- Border: `#FECACA` (Red-200)
- Title: `rgba(71, 85, 105, 1)` (neutral-600)
- Value: `#DC2626` (Red-600)

**Dimensiones:**

- Padding: `16px 89px`
- Min Height: `87px`
- Gap: `16px`

---

### 3. InfoDate (Información de Fecha)

Card compacto para mostrar fechas con fondo azul suave.

```typescript
<storybook-card
  contentVariant="infoDate"
  dateLabel="Fecha"
  dateText="28/06/2024"
></storybook-card>
```

**Props necesarios:**

- `dateLabel` (string): Label superior (ej. "Fecha")
- `dateText` (string): Texto de la fecha

**Colores (desde Figma):**

- Background: `#EFF6FF` (Blue-50)
- Border: Ninguno
- Label: `rgba(71, 85, 105, 1)` (neutral-600)
- Text: `rgba(71, 85, 105, 1)` (neutral-700, bold)

**Dimensiones:**

- Padding: `17px 8px`
- Min Height: `84px`
- Max Width: `101px`
- Gap: `8px`

---

### 4. InfoCurrency (Información de Moneda)

Card para mostrar tipo de moneda con icono visible.

```typescript
<storybook-card
  contentVariant="infoCurrency"
  currencyLabel="Tipo de moneda:"
  currencyText="PEN"
></storybook-card>
```

**Props necesarios:**

- `currencyLabel` (string): Label superior
- `currencyText` (string): Código de moneda (PEN, USD, etc.)

**Colores (desde Figma):**

- Background: `#DBEAFE` (Blue-100)
- Border: Ninguno
- Label: `rgba(51, 65, 85, 1)` (neutral-700)
- Text: `#2563EB` (Blue-600)
- Icon: `#2563EB` (Blue-600)

**Icono:**

- Usa `circle-dollar-sign` de lucide-react
- Renderizado con `DomSanitizer` para seguridad
- Tamaño: 21x21px

**Dimensiones:**

- Padding: `16px`
- Min Height: `90px`
- Max Width: `273px`
- Gap: `16px` (vertical), `8px` (entre icono y texto)

---

### 5. Placeholder (Vacío)

Card placeholder vacío con borde gris.

```typescript
<storybook-card
  contentVariant="placeholder"
></storybook-card>
```

**Props necesarios:**

- Ninguno

**Colores (desde Figma):**

- Background: Transparente
- Border: `rgba(226, 232, 240, 1)` (neutral-200)

**Dimensiones:**

- Width: `277px`
- Min Height: `225px`
- Border Radius: `8px`
- Padding: `0`

---

## 💻 Uso en Código

### Ejemplo Básico

```typescript
import { CardComponent } from './card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent],
  template: `
    <div class="dashboard-grid">
      <!-- Default Card -->
      <storybook-card
        contentVariant="default"
        variant="elevated"
        header="Ventas Totales"
        value="$12,450"
        helper="+18.3%"
        helperDescription="respecto al mes anterior"
      ></storybook-card>

      <!-- Metric Card -->
      <storybook-card
        contentVariant="metric"
        metricTitle="Compromisos Incumplidos"
        metricValue="0"
      ></storybook-card>

      <!-- InfoDate Card -->
      <storybook-card
        contentVariant="infoDate"
        dateLabel="Fecha"
        dateText="28/06/2024"
      ></storybook-card>

      <!-- InfoCurrency Card -->
      <storybook-card
        contentVariant="infoCurrency"
        currencyLabel="Tipo de moneda:"
        currencyText="PEN"
      ></storybook-card>

      <!-- Placeholder Card -->
      <storybook-card contentVariant="placeholder"></storybook-card>
    </div>
  `,
})
export class DashboardComponent {}
```

---

## 🔧 Props Reference

### Props Comunes (todos los contentVariants)

| Prop             | Type                                                                     | Default     | Descripción                        |
| ---------------- | ------------------------------------------------------------------------ | ----------- | ---------------------------------- |
| `variant`        | `'default' \| 'elevated' \| 'outlined'`                                  | `'default'` | Estilo visual del card (existente) |
| `state`          | `'default' \| 'hover'`                                                   | `'default'` | Estado visual (existente)          |
| `contentVariant` | `'default' \| 'metric' \| 'infoDate' \| 'infoCurrency' \| 'placeholder'` | `'default'` | **NUEVO**: Tipo de contenido       |

### Props específicos por contentVariant

**Para `contentVariant="default"`:**

- `header` (string)
- `value` (string | number)
- `helper` (string)
- `helperDescription` (string)
- `icon` (string)

**Para `contentVariant="metric"`:**

- `metricTitle` (string)
- `metricValue` (string | number)

**Para `contentVariant="infoDate"`:**

- `dateLabel` (string)
- `dateText` (string)

**Para `contentVariant="infoCurrency"`:**

- `currencyLabel` (string)
- `currencyText` (string)

**Para `contentVariant="placeholder"`:**

- Ninguno

---

## 🎭 Stories Disponibles en Storybook

### Stories Individuales

- `MetricContentVariant` - Ejemplo de metric
- `InfoDateContentVariant` - Ejemplo de infoDate
- `InfoCurrencyContentVariant` - Ejemplo de infoCurrency
- `PlaceholderContentVariant` - Ejemplo de placeholder

### Stories Showcase

- `AllContentVariants` - Muestra los 5 content variants lado a lado
- `ContentVariantsWithCardVariants` - Muestra cada contentVariant con las 3 variants del card (default, elevated, outlined)

### Stories Existentes (sin cambios)

- `Default`, `DefaultHover`
- `Elevated`, `ElevatedHover`
- `Outlined`, `OutlinedHover`
- `DesignSystemShowcase`
- `UsageExamples`
- `InteractivePlayground`
- `DifferentDataExamples`

---

## ✅ Compatibilidad y Retrocompatibilidad

### ✅ No se rompió nada

- Todos los Cards existentes siguen funcionando
- El prop `contentVariant` tiene default `'default'`
- Las variants (`default`, `elevated`, `outlined`) funcionan con todos los contentVariants
- Los estados (`default`, `hover`) funcionan con todos los contentVariants

### ✅ Combinaciones válidas

```typescript
// Metric con variant elevated
<storybook-card contentVariant="metric" variant="elevated"
  metricTitle="Alertas" metricValue="5" />

// InfoDate con variant outlined
<storybook-card contentVariant="infoDate" variant="outlined"
  dateLabel="Fecha" dateText="28/06/2024" />

// InfoCurrency con state hover
<storybook-card contentVariant="infoCurrency" state="hover"
  currencyLabel="Moneda" currencyText="USD" />
```

---

## 📊 Archivos Modificados

| Archivo             | Cambios                                                                                  | Líneas      |
| ------------------- | ---------------------------------------------------------------------------------------- | ----------- |
| `card.component.ts` | Agregado `contentVariant` prop, props específicos, renderizado condicional, DomSanitizer | +100 líneas |
| `card.css`          | Agregados estilos para 4 nuevos contentVariants                                          | +180 líneas |
| `card.stories.ts`   | Agregados argTypes y 6 nuevas stories                                                    | +150 líneas |

---

## 🎨 Estilos CSS Agregados

### Clases Nuevas

```css
/* Para contentVariant="metric" */
.card-content-metric
.card-metric-title
.card-metric-value

/* Para contentVariant="infoDate" */
.card-content-infoDate
.card-info-label
.card-info-text

/* Para contentVariant="infoCurrency" */
.card-content-infoCurrency
.card-currency-label
.card-currency-content
.card-currency-icon
.card-currency-text

/* Para contentVariant="placeholder" */
.card-content-placeholder
```

---

## 🚀 Registro en Builder.io

```typescript
Builder.registerComponent(CardComponent, {
  name: 'Card',
  inputs: [
    // Existentes
    {
      name: 'variant',
      type: 'string',
      enum: ['default', 'elevated', 'outlined'],
      defaultValue: 'default',
    },
    { name: 'state', type: 'string', enum: ['default', 'hover'], defaultValue: 'default' },

    // NUEVO
    {
      name: 'contentVariant',
      type: 'string',
      enum: ['default', 'metric', 'infoDate', 'infoCurrency', 'placeholder'],
      defaultValue: 'default',
      helperText: 'Tipo de contenido del card',
    },

    // Props para metric
    {
      name: 'metricTitle',
      type: 'string',
      defaultValue: '',
      showIf: 'options.get("contentVariant") === "metric"',
    },
    {
      name: 'metricValue',
      type: 'string',
      defaultValue: '',
      showIf: 'options.get("contentVariant") === "metric"',
    },

    // Props para infoDate
    {
      name: 'dateLabel',
      type: 'string',
      defaultValue: '',
      showIf: 'options.get("contentVariant") === "infoDate"',
    },
    {
      name: 'dateText',
      type: 'string',
      defaultValue: '',
      showIf: 'options.get("contentVariant") === "infoDate"',
    },

    // Props para infoCurrency
    {
      name: 'currencyLabel',
      type: 'string',
      defaultValue: '',
      showIf: 'options.get("contentVariant") === "infoCurrency"',
    },
    {
      name: 'currencyText',
      type: 'string',
      defaultValue: '',
      showIf: 'options.get("contentVariant") === "infoCurrency"',
    },

    // Props para default (existentes)
    {
      name: 'header',
      type: 'string',
      defaultValue: 'Actividades Totales',
      showIf: 'options.get("contentVariant") === "default"',
    },
    // ... otros props existentes
  ],
});
```

---

## 🐛 Solución de Problemas

### El icono de moneda no aparece

**Problema**: El icono del contentVariant infoCurrency no es visible.

**Solución**: El icono usa `DomSanitizer.bypassSecurityTrustHtml()`. Verificar que:

1. `DomSanitizer` está inyectado en el constructor
2. El método `getCurrencyIcon()` está implementado
3. El binding `[innerHTML]` está correcto

### El contentVariant no cambia el contenido

**Problema**: El card sigue mostrando el contenido default.

**Solución**: Verificar que:

1. El prop `contentVariant` está configurado correctamente
2. Las clases CSS están aplicadas (`.card-content-{variant}`)
3. Los props específicos están configurados (ej. `metricTitle` para metric)

---

## 📚 Referencias

- Component: `src/stories/card.component.ts`
- Estilos: `src/stories/card.css`
- Stories: `src/stories/card.stories.ts`
- Diseño Figma: [Ver diseño adjunto]

---

**Feature completada** ✅  
**Listo para Builder.io** 🚀  
**Sin breaking changes** ✅
