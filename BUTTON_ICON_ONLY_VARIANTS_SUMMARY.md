# 🎉 Icon-Only Circular Buttons - Variants Update

**Status:** ✅ COMPLETADO  
**Features:** 6 variantes + todos los estados  
**Documentación:** Completa en Storybook

---

## 📋 Lo Que Se Agregó

### 6 Nuevos Variants para Icon-Only Buttons

```typescript
// 1️⃣ OUTLINE (Recomendado para navegación)
<storybook-button shape="icon-only" variant="outline" iconName="chevron-left" />
// → Borde #CBD5E1, icono #9333EA (púrpura)

// 2️⃣ DEFAULT (Acción primaria)
<storybook-button shape="icon-only" variant="default" iconName="check" />
// → Fondo #7C3AED (púrpura), icono blanco

// 3️⃣ SECONDARY (Acción alternativa)
<storybook-button shape="icon-only" variant="secondary" iconName="chevron-right" />
// → Fondo #2563EB (azul), icono blanco

// 4️⃣ GHOST (Acción sutil)
<storybook-button shape="icon-only" variant="ghost" iconName="chevron-up" />
// → Fondo #EDE9FE (púrpura claro), icono #1E293B

// 5️⃣ LINK (Estilo link)
<storybook-button shape="icon-only" variant="link" iconName="chevron-down" />
// → Transparente, icono #2563EB (azul)

// 6️⃣ DESTRUCTIVE (Acción peligrosa - Eliminar)
<storybook-button shape="icon-only" variant="destructive" iconName="check" />
// → Fondo #DC2626 (rojo), icono blanco
```

---

## 🎨 Tabla Visual Rápida

| Variant | Visual | Uso | Estados |
|---------|--------|-----|---------|
| **Outline** | 🔷 | Navegación | ✓ hover, active, focus, disabled |
| **Default** | 🟣 | Primario | ✓ hover, active, focus, disabled |
| **Secondary** | 🔵 | Alternativo | ✓ hover, active, focus, disabled |
| **Ghost** | 💜 | Sutil | ✓ hover, active, focus, disabled |
| **Link** | 🔗 | Links | ✓ hover, active, focus, disabled |
| **Destructive** | 🔴 | Eliminar | ✓ hover, active, focus, disabled |

---

## 📱 Combinaciones Soportadas

### Por Tamaño
```typescript
// sm (27px)
<storybook-button shape="icon-only" size="sm" variant="outline" />

// md (35px) - Default
<storybook-button shape="icon-only" size="md" variant="outline" />

// lg (43px)
<storybook-button shape="icon-only" size="lg" variant="outline" />
```

### Por Estado
```typescript
// Todos estos funcionan con CUALQUIER variant
<storybook-button shape="icon-only" variant="outline" state="default" />
<storybook-button shape="icon-only" variant="outline" state="hover" />
<storybook-button shape="icon-only" variant="outline" state="active" />
<storybook-button shape="icon-only" variant="outline" state="focus" />
<storybook-button shape="icon-only" variant="outline" state="disabled" />
```

### Por Icono
```typescript
// Todos estos funcionan con CUALQUIER variant
<storybook-button shape="icon-only" variant="outline" iconName="chevron-left" />
<storybook-button shape="icon-only" variant="outline" iconName="chevron-right" />
<storybook-button shape="icon-only" variant="outline" iconName="chevron-up" />
<storybook-button shape="icon-only" variant="outline" iconName="chevron-down" />
<storybook-button shape="icon-only" variant="outline" iconName="check" />
```

---

## 🎯 Casos de Uso Recomendados

### 🔷 Outline - Para Navegación
```typescript
<!-- Paginación -->
<div class="pagination">
  <storybook-button shape="icon-only" variant="outline" 
    iconName="chevron-left" label="Previous" />
  <storybook-button shape="icon-only" variant="outline" 
    iconName="chevron-right" label="Next" />
</div>

<!-- Carrusel -->
<div class="carousel">
  <storybook-button shape="icon-only" size="lg" variant="outline" 
    iconName="chevron-left" label="Prev item" />
  <!-- slider aquí -->
  <storybook-button shape="icon-only" size="lg" variant="outline" 
    iconName="chevron-right" label="Next item" />
</div>
```

### 🟣 Default - Para Acciones Primarias
```typescript
<!-- Confirmar -->
<storybook-button shape="icon-only" variant="default" 
  iconName="check" label="Confirm" (onClick)="confirm()" />

<!-- Guardar -->
<storybook-button shape="icon-only" variant="default" 
  iconName="check" label="Save" (onClick)="save()" />
```

### 🔵 Secondary - Para Acciones Alternativas
```typescript
<!-- Skip/Siguiente -->
<storybook-button shape="icon-only" variant="secondary" 
  iconName="chevron-right" label="Skip" />

<!-- Siguiente página -->
<storybook-button shape="icon-only" variant="secondary" 
  iconName="chevron-down" label="Load more" />
```

### 💜 Ghost - Para Acciones Sutiles
```typescript
<!-- Expandir/Contraer -->
<storybook-button shape="icon-only" variant="ghost" 
  [iconName]="expanded ? 'chevron-up' : 'chevron-down'" />

<!-- Scroll to top -->
<storybook-button shape="icon-only" variant="ghost" 
  iconName="chevron-up" label="Top" />
```

### 🔗 Link - Para Links
```typescript
<!-- Links que parecen botones -->
<storybook-button shape="icon-only" variant="link" 
  iconName="chevron-right" label="More info" />

<!-- Cerrar modal (sutil) -->
<storybook-button shape="icon-only" variant="link" 
  iconName="chevron-down" label="Close" />
```

### 🔴 Destructive - Para Acciones Peligrosas
```typescript
<!-- Eliminar -->
<storybook-button shape="icon-only" variant="destructive" 
  iconName="check" label="Delete" (onClick)="delete()" />

<!-- Cancelar (riesgo) -->
<storybook-button shape="icon-only" variant="destructive" 
  iconName="chevron-down" label="Cancel" />
```

---

## 🎭 Nuevas Stories en Storybook

### Stories por Variant
- `IconOnlyOutline` ← Nuevo
- `IconOnlyDefault` ← Nuevo
- `IconOnlySecondary` ← Nuevo
- `IconOnlyGhost` ← Nuevo
- `IconOnlyLink` ← Nuevo
- `IconOnlyDestructive` ← Nuevo

### Showcase Stories
- `IconOnlyAllVariants` ← Nuevo (comparar 6 variants lado a lado)
- `IconOnlyAllSizes` (ya existía, ahora con variant)
- `IconOnlyAllStates` (ya existía, ahora con variant)
- `IconOnlyAllIcons` (ya existía, ahora con variant)

### En Design System
- `DesignSystemShowcase` ← Actualizado con nueva sección

---

## ✨ Colores por Variant

### Outline
```
Default:  Border #CBD5E1, Icon #9333EA
Focus:    Border #64748B, Icon #6B21A8, Ring #581C87
Hover:    Opacidad 0.9
Disabled: Opacidad 0.4
```

### Default (Púrpura)
```
Default:  Background #7C3AED, Icon white
Focus:    Background #4C1D95, Ring #2E1065
Hover:    Opacidad 0.9
Disabled: Opacidad 0.4
```

### Secondary (Azul)
```
Default:  Background #2563EB, Icon white
Focus:    Background #1D4ED8, Ring #2E1065
Hover:    Opacidad 0.9
Disabled: Opacidad 0.4
```

### Ghost (Púrpura Claro)
```
Default:  Background #EDE9FE, Icon #1E293B
Focus:    Background #DDD6FE, Ring #2E1065
Hover:    Opacidad 0.9
Disabled: Opacidad 0.4
```

### Link (Azul Transparente)
```
Default:  Background transparent, Icon #2563EB, Border transparent
Focus:    Border #1D4ED8, Ring #2E1065
Hover:    Opacidad 0.9
Disabled: Opacidad 0.4
```

### Destructive (Rojo)
```
Default:  Background #DC2626, Icon white
Focus:    Background #B91C1C, Ring #2E1065
Hover:    Opacidad 0.9
Disabled: Opacidad 0.4
```

---

## 📊 Archivos Modificados

| Archivo | Cambios |
|---------|---------|
| **button.css** | +150 líneas (estilos de variants para icon-only) |
| **button.stories.ts** | +6 nuevas stories, +1 showcase stories actualizado |
| **Documentación** | 3 archivos .md creados |

---

## 🚀 Cómo Usar

### Paso 1: Elegir el Variant Correcto
```
¿Es navegación? → outline
¿Es acción primaria? → default
¿Es acción alternativa? → secondary
¿Es sutil? → ghost
¿Es un link? → link
¿Es peligroso? → destructive
```

### Paso 2: Copiar el Código
```typescript
<storybook-button
  shape="icon-only"        <!-- Requerido -->
  size="md"                <!-- sm, md, lg -->
  variant="outline"        <!-- outline, default, secondary, ghost, link, destructive -->
  iconName="chevron-left"  <!-- chevron-left, chevron-right, chevron-up, chevron-down, check -->
  label="Previous page"    <!-- Para accesibilidad -->
  (onClick)="handler()"    <!-- Opcional -->
></storybook-button>
```

### Paso 3: Ver en Storybook
Navega a **Example/Button** y busca:
- `IconOnlyOutline` - Para ver la variante outline
- `IconOnlyDefault` - Para ver la variante default
- `IconOnlyAllVariants` - Para comparar todos

---

## ✅ Checklist

- ✅ 6 variants implementados (outline, default, secondary, ghost, link, destructive)
- ✅ Todos los estados funcionan (hover, active, focus, disabled)
- ✅ Todos los tamaños funcionan (sm, md, lg)
- ✅ Todos los iconos funcionan con cada variant
- ✅ Focus ring visible en estado focus
- ✅ Accesibilidad (aria-label automático)
- ✅ 6 nuevas stories + showcase actualizado
- ✅ Documentación completa
- ✅ No se rompió nada (retrocompatible)

---

## 🎓 Comparación: Antes vs Después

### Antes
```typescript
<!-- Solo había 1 estilo para icon-only (outline) -->
<storybook-button shape="icon-only" size="md" iconName="chevron-left" />
```

### Después
```typescript
<!-- Ahora tienes 6 estilos diferentes -->
<storybook-button shape="icon-only" size="md" variant="outline" iconName="chevron-left" />
<storybook-button shape="icon-only" size="md" variant="default" iconName="chevron-left" />
<storybook-button shape="icon-only" size="md" variant="secondary" iconName="chevron-left" />
<storybook-button shape="icon-only" size="md" variant="ghost" iconName="chevron-left" />
<storybook-button shape="icon-only" size="md" variant="link" iconName="chevron-left" />
<storybook-button shape="icon-only" size="md" variant="destructive" iconName="chevron-left" />
```

---

## 📚 Documentación

1. **BUTTON_ICON_ONLY_VARIANTS.md** - Documentación completa (429 líneas)
2. **BUTTON_ICON_ONLY_UPDATE.md** - Primera actualización icon-only
3. **BUTTON_ICON_ONLY_QUICK_REFERENCE.md** - Referencia rápida
4. **BUTTON_ICON_ONLY_VARIANTS_SUMMARY.md** - Este archivo

---

## 🎉 ¡Listo para Usar!

Los nuevos variants están listos para:
- ✅ Usar en tu código
- ✅ Ver en Storybook
- ✅ Registrar en Builder.io
- ✅ Producción

---

**Variantes de icon-only buttons completamente implementados** 🎨  
**Siguiendo la lógica de diseño de los botones regulares** 🎯  
**100% documentado y listo para Builder.io** 🚀
