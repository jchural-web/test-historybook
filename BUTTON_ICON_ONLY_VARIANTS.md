# Icon-Only Circular Button Variants

**Update:** ✅ Agregados variants a Icon-Only Buttons  
**Status:** Listo para usar en Builder.io y Storybook  
**Fecha:** 2025

---

## 📋 Variantes Disponibles

Los botones icon-only ahora soportan **6 variantes** diferentes, siguiendo la misma lógica de diseño que los botones rectangulares:

| Variant      | Descripción                    | Uso Recomendado                 |
| ------------ | ------------------------------ | ------------------------------- |
| `outline`    | Borde transparente, icono púrpura | Navegación, acciones secundarias |
| `default`    | Fondo púrpura sólido           | Acciones primarias              |
| `secondary`  | Fondo azul sólido              | Acciones alternativas           |
| `ghost`      | Fondo púrpura claro            | Acciones sutiles                |
| `link`       | Sin fondo, azul                | Links que parecen botones       |
| `destructive`| Fondo rojo sólido              | Eliminar, cancelar, acciones destructivas |

---

## 🎨 Especificaciones de Cada Variante

### 1. Outline (Recomendado para navegación)

```typescript
<storybook-button
  shape="icon-only"
  size="md"
  variant="outline"
  iconName="chevron-left"
  label="Previous"
></storybook-button>
```

**Colores:**
- **Default**: Border `#CBD5E1`, Icon `#9333EA`
- **Hover**: Opacidad 0.9
- **Active**: Border y icon intacto
- **Focus**: Border `#64748B`, Icon `#6B21A8`, Ring `#581C87`
- **Disabled**: Opacidad 0.4

**Use Case**: Botones de navegación, acciones secundarias, paginación

---

### 2. Default (Púrpura lleno)

```typescript
<storybook-button
  shape="icon-only"
  size="md"
  variant="default"
  iconName="check"
  label="Confirm"
></storybook-button>
```

**Colores:**
- **Default**: Background `#7C3AED`, Color `white`
- **Hover**: Opacidad 0.9
- **Active**: Opacidad sin cambio
- **Focus**: Background `#4C1D95`, Ring `#2E1065`
- **Disabled**: Opacidad 0.4

**Use Case**: Acciones primarias, confirmaciones, submit

---

### 3. Secondary (Azul lleno)

```typescript
<storybook-button
  shape="icon-only"
  size="md"
  variant="secondary"
  iconName="chevron-right"
  label="Next"
></storybook-button>
```

**Colores:**
- **Default**: Background `#2563EB`, Color `white`
- **Hover**: Opacidad 0.9
- **Active**: Opacidad sin cambio
- **Focus**: Background `#1D4ED8`, Ring `#2E1065`
- **Disabled**: Opacidad 0.4

**Use Case**: Acciones alternativas, next/skip, opciones secundarias

---

### 4. Ghost (Púrpura claro)

```typescript
<storybook-button
  shape="icon-only"
  size="md"
  variant="ghost"
  iconName="chevron-up"
  label="Scroll up"
></storybook-button>
```

**Colores:**
- **Default**: Background `#EDE9FE`, Color `#1E293B`
- **Hover**: Opacidad 0.9
- **Active**: Opacidad sin cambio
- **Focus**: Background `#DDD6FE`, Ring `#2E1065`
- **Disabled**: Opacidad 0.4

**Use Case**: Acciones sutiles, hover effects, background claro

---

### 5. Link (Azul sin fondo)

```typescript
<storybook-button
  shape="icon-only"
  size="md"
  variant="link"
  iconName="chevron-down"
  label="Expand"
></storybook-button>
```

**Colores:**
- **Default**: Background `transparent`, Color `#2563EB`, Border `transparent`
- **Hover**: Opacidad 0.9
- **Active**: Opacidad sin cambio
- **Focus**: Border `#1D4ED8`, Ring `#2E1065`
- **Disabled**: Opacidad 0.4

**Use Case**: Links, acciones no-prominent, minimal impact

---

### 6. Destructive (Rojo - Eliminar)

```typescript
<storybook-button
  shape="icon-only"
  size="md"
  variant="destructive"
  iconName="check"
  label="Delete"
></storybook-button>
```

**Colores:**
- **Default**: Background `#DC2626`, Color `white`
- **Hover**: Opacidad 0.9
- **Active**: Opacidad sin cambio
- **Focus**: Background `#B91C1C`, Ring `#2E1065`
- **Disabled**: Opacidad 0.4

**Use Case**: Eliminar, cancelar, acciones peligrosas, confirmaciones de riesgo

---

## 💻 Ejemplos de Uso

### Ejemplo 1: Paginación Completa

```typescript
<div class="pagination">
  <!-- Botón anterior (outline) -->
  <storybook-button
    shape="icon-only"
    size="md"
    variant="outline"
    iconName="chevron-left"
    label="Previous page"
    (onClick)="previousPage()"
  ></storybook-button>

  <span>Page {{ page }} of {{ total }}</span>

  <!-- Botón siguiente (outline) -->
  <storybook-button
    shape="icon-only"
    size="md"
    variant="outline"
    iconName="chevron-right"
    label="Next page"
    (onClick)="nextPage()"
  ></storybook-button>
</div>
```

### Ejemplo 2: Controles de Carrusel

```typescript
<div class="carousel-controls">
  <!-- Anterior en outline -->
  <storybook-button
    shape="icon-only"
    size="lg"
    variant="outline"
    iconName="chevron-left"
    label="Previous item"
  ></storybook-button>

  <!-- Slider aquí -->

  <!-- Siguiente en outline -->
  <storybook-button
    shape="icon-only"
    size="lg"
    variant="outline"
    iconName="chevron-right"
    label="Next item"
  ></storybook-button>
</div>
```

### Ejemplo 3: Acciones Mixtas

```typescript
<div class="item-actions">
  <!-- Confirmación en default (púrpura) -->
  <storybook-button
    shape="icon-only"
    size="md"
    variant="default"
    iconName="check"
    label="Approve"
    (onClick)="approve()"
  ></storybook-button>

  <!-- Cerrar/Cancelar en link (sutil) -->
  <storybook-button
    shape="icon-only"
    size="md"
    variant="link"
    iconName="chevron-down"
    label="Close"
    (onClick)="close()"
  ></storybook-button>

  <!-- Eliminar en destructive (rojo) -->
  <storybook-button
    shape="icon-only"
    size="md"
    variant="destructive"
    iconName="chevron-up"
    label="Delete"
    (onClick)="delete()"
  ></storybook-button>
</div>
```

### Ejemplo 4: Expand/Collapse

```typescript
<button (click)="toggleExpanded()">
  Section Header
  <storybook-button
    shape="icon-only"
    size="sm"
    variant="ghost"
    [iconName]="isExpanded ? 'chevron-up' : 'chevron-down'"
    [label]="isExpanded ? 'Collapse' : 'Expand'"
  ></storybook-button>
</button>
```

### Ejemplo 5: Confirmación Destructiva

```typescript
<div class="confirm-dialog">
  <h3>¿Eliminar este elemento?</h3>

  <!-- Cancelar en outline -->
  <storybook-button
    shape="icon-only"
    size="md"
    variant="outline"
    iconName="chevron-down"
    label="Cancel"
    (onClick)="cancel()"
  ></storybook-button>

  <!-- Confirmar eliminar en destructive -->
  <storybook-button
    shape="icon-only"
    size="md"
    variant="destructive"
    iconName="check"
    label="Confirm delete"
    (onClick)="confirmDelete()"
  ></storybook-button>
</div>
```

---

## 📊 Tabla Comparativa de Variantes

| Aspecto        | Outline  | Default  | Secondary | Ghost   | Link     | Destructive |
| -------------- | -------- | -------- | --------- | ------- | -------- | ----------- |
| **Background** | `transparent` | `#7C3AED` | `#2563EB` | `#EDE9FE` | `transparent` | `#DC2626` |
| **Icon Color** | `#9333EA` | `white`  | `white`   | `#1E293B` | `#2563EB` | `white`     |
| **Border**     | `#CBD5E1` | `#7C3AED` | `#2563EB` | `#EDE9FE` | `transparent` | `#DC2626` |
| **Prominence** | Media    | Alta     | Alta      | Baja    | Baja     | Crítica     |
| **Use Case**   | Nav.     | Primario | Alternativo | Sutil  | Links   | Destructivo |

---

## 🎯 Guía Rápida de Selección

Usa esta tabla para elegir el variant correcto:

**¿Es una acción primaria importante?**
- Sí → `variant="default"` (púrpura)

**¿Es navegación o acción secundaria?**
- Sí → `variant="outline"` (recomendado)

**¿Es una acción alternativa?**
- Sí → `variant="secondary"` (azul)

**¿Es una acción sutil o decorativa?**
- Sí → `variant="ghost"` (púrpura claro)

**¿Es un link que parece botón?**
- Sí → `variant="link"` (azul transparente)

**¿Es una acción peligrosa (eliminar)?**
- Sí → `variant="destructive"` (rojo)

---

## 🎭 Stories en Storybook

Todas las nuevas variantes están documentadas en Storybook:

**Stories individuales:**
- `IconOnlyOutline` - Variant outline
- `IconOnlyDefault` - Variant default (púrpura lleno)
- `IconOnlySecondary` - Variant secondary (azul lleno)
- `IconOnlyGhost` - Variant ghost (púrpura claro)
- `IconOnlyLink` - Variant link (azul sin fondo)
- `IconOnlyDestructive` - Variant destructive (rojo)

**Stories showcase:**
- `IconOnlyAllVariants` - Comparación lado a lado de todos los variants
- `DesignSystemShowcase` - Sección completa con variants, tamaños, estados e iconos

---

## ✅ Combinaciones Válidas

Todas estas combinaciones funcionan correctamente:

```typescript
// Cualquier variant + cualquier tamaño
<storybook-button shape="icon-only" size="sm" variant="outline" />
<storybook-button shape="icon-only" size="md" variant="default" />
<storybook-button shape="icon-only" size="lg" variant="secondary" />

// Cualquier variant + cualquier estado
<storybook-button shape="icon-only" variant="outline" state="hover" />
<storybook-button shape="icon-only" variant="default" state="focus" />
<storybook-button shape="icon-only" variant="destructive" state="disabled" />

// Cualquier variant + cualquier icono
<storybook-button shape="icon-only" variant="outline" iconName="chevron-left" />
<storybook-button shape="icon-only" variant="default" iconName="check" />
<storybook-button shape="icon-only" variant="destructive" iconName="chevron-down" />
```

---

## 🔄 Diferencia con Botones Regulares

Los icon-only buttons con variants mantienen la **forma circular** en todas las variantes:

```typescript
// Botón rectangular con outline
<storybook-button shape="rectangular" variant="outline" label="Boton" />
// Resultado: Rectangular con borde

// Botón icon-only con outline (NUEVO)
<storybook-button shape="icon-only" variant="outline" iconName="chevron-left" />
// Resultado: Circular con borde
```

---

## 🚀 Notas de Implementación

### ✅ Lo que cambió

- Los icon-only buttons ahora respetan el prop `variant`
- Se agregaron estilos CSS específicos para cada combinación `icon-only + variant`
- Todos los estados (hover, active, focus, disabled) funcionan para cada variant

### ✅ Lo que NO cambió

- El prop `shape="icon-only"` sigue siendo requerido
- El prop `iconName` sigue siendo obligatorio
- Los tamaños (sm, md, lg) funcionan igual
- Los estados (default, hover, active, focus, disabled) funcionan igual
- El prop `label` sigue siendo necesario para accesibilidad

### ✅ Retrocompatibilidad

Si no especificas un `variant` en un icon-only button, el CSS aplicará **automáticamente** `variant="outline"` (el comportamiento anterior).

---

## 📚 Referencias

- Antes: [BUTTON_ICON_ONLY_UPDATE.md](./BUTTON_ICON_ONLY_UPDATE.md)
- Quick Ref: [BUTTON_ICON_ONLY_QUICK_REFERENCE.md](./BUTTON_ICON_ONLY_QUICK_REFERENCE.md)
- Botón principal: `src/stories/button.component.ts`
- Estilos: `src/stories/button.css`
- Stories: `src/stories/button.stories.ts`

---

**✨ Variantes icon-only completamente funcionales**  
**🎯 Listos para Builder.io**  
**📚 100% documentados en Storybook**
