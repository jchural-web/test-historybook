# Carousel Component

Un componente de carrusel reutilizable y accesible para Angular que gestiona navegación, paginación y transiciones horizontales.

## Características

- ✅ **Content Projection**: Acepta cualquier contenido mediante slots (ng-content)
- ✅ **Responsive**: Configuración de items visibles por breakpoint
- ✅ **Navegación**: Botones Previous/Next y dots de paginación
- ✅ **Loop infinito**: Opcional mediante prop
- ✅ **Transiciones suaves**: Animaciones CSS nativas
- ✅ **Accesible**: Atributos ARIA y navegación por teclado
- ✅ **Desacoplado**: El componente NO controla el contenido, solo la navegación

## Instalación

El componente está disponible en `src/stories/carousel.component.ts` como standalone component.

## Uso Básico

```typescript
import { CarouselComponent, CarouselItemComponent } from './carousel.component';

@Component({
  standalone: true,
  imports: [CarouselComponent, CarouselItemComponent],
  template: `
    <bsg-carousel [itemsPerView]="2" [showArrows]="true" [showIndicators]="true">
      <bsg-carousel-item>
        <div class="my-card">Slide 1</div>
      </bsg-carousel-item>
      <bsg-carousel-item>
        <div class="my-card">Slide 2</div>
      </bsg-carousel-item>
      <bsg-carousel-item>
        <div class="my-card">Slide 3</div>
      </bsg-carousel-item>
    </bsg-carousel>
  `
})
export class MyComponent {}
```

## Props

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `itemsPerView` | `number` | `2` | Número de items visibles simultáneamente |
| `showArrows` | `boolean` | `true` | Mostrar botones de navegación (Previous/Next) |
| `showIndicators` | `boolean` | `true` | Mostrar dots de paginación |
| `loop` | `boolean` | `false` | Habilitar navegación infinita (loop) |

## Estructura

### Componentes

- **`bsg-carousel`**: Contenedor principal del carrusel
- **`bsg-carousel-item`**: Wrapper para cada slide individual

### Elementos visuales

1. **Viewport**: Área visible del carrusel con overflow hidden
2. **Track**: Contenedor flex que se desplaza horizontalmente
3. **Navigation Arrows**: Botones circulares con iconos de chevron
4. **Pagination Dots**: Indicadores centrados debajo del carrusel

## Ejemplos

### Carrusel de 2 items (Desktop)

```html
<bsg-carousel [itemsPerView]="2" [showArrows]="true" [showIndicators]="true">
  <bsg-carousel-item>
    <div class="instructor-card">
      <!-- Contenido de la card -->
    </div>
  </bsg-carousel-item>
  <bsg-carousel-item>
    <div class="instructor-card">
      <!-- Contenido de la card -->
    </div>
  </bsg-carousel-item>
</bsg-carousel>
```

### Carrusel de 1 item (Mobile)

```html
<bsg-carousel [itemsPerView]="1" [showArrows]="true" [showIndicators]="true">
  <bsg-carousel-item>
    <div class="instructor-card">Card 1</div>
  </bsg-carousel-item>
  <bsg-carousel-item>
    <div class="instructor-card">Card 2</div>
  </bsg-carousel-item>
</bsg-carousel>
```

### Con Loop Infinito

```html
<bsg-carousel [itemsPerView]="2" [loop]="true">
  <bsg-carousel-item>Slide 1</bsg-carousel-item>
  <bsg-carousel-item>Slide 2</bsg-carousel-item>
  <bsg-carousel-item>Slide 3</bsg-carousel-item>
</bsg-carousel>
```

### Sin controles de navegación

```html
<bsg-carousel [itemsPerView]="2" [showArrows]="false" [showIndicators]="false">
  <bsg-carousel-item>Slide 1</bsg-carousel-item>
  <bsg-carousel-item>Slide 2</bsg-carousel-item>
</bsg-carousel>
```

## Comportamiento

### Navegación

- **Botones Previous/Next**: Click para avanzar/retroceder una página
- **Dots de paginación**: Click directo a una página específica
- **Disabled state**: Los botones se deshabilitan en los extremos (si `loop=false`)

### Paginación

El carrusel calcula automáticamente el número de páginas basado en:
- Total de items
- Items visibles por página (`itemsPerView`)

Ejemplo: 4 items con `itemsPerView="2"` = 2 páginas

### Transiciones

- Animación CSS `transform: translateX()` con `ease-in-out`
- Duración: 300ms
- No utiliza fade, solo desplazamiento horizontal

## Accesibilidad

- ✅ Botones con `aria-label` descriptivos
- ✅ Atributo `disabled` en botones cuando no aplica navegación
- ✅ Focus visible personalizado (outline)
- ✅ Navegación por teclado (focus trap)

## Responsive

El componente incluye breakpoints CSS para:

- **Desktop** (>1024px): Controles completos
- **Tablet** (768px - 1024px): Controles ajustados
- **Mobile** (<768px): Controles más compactos

Recomendación: Cambiar `itemsPerView` mediante lógica del componente padre basado en window.innerWidth.

## Personalización

### Estilos del contenido

El componente **NO aplica estilos** al contenido de las cards. Todo el styling visual de las cards debe venir del código externo.

```html
<!-- ✅ Correcto -->
<bsg-carousel-item>
  <div class="my-custom-card">
    <!-- Tu contenido con tus estilos -->
  </div>
</bsg-carousel-item>

<!-- ❌ Incorrecto: El carrusel NO estiliza esto -->
<bsg-carousel-item>
  Texto sin wrapper
</bsg-carousel-item>
```

### Colores del sistema

Los controles utilizan el color primario definido en la paleta del design system:
- Color principal: `#9333EA` (Purple-600)
- Color de borde: `#E2E8F0` (Neutral-200)

## Notas Técnicas

### Cálculo de páginas

```typescript
const pageCount = Math.ceil(totalItems / itemsPerView);
```

### Cálculo de translateX

```typescript
const translateX = -currentIndex * 100; // Porcentaje
```

### Width por item

```typescript
const widthPercentage = 100 / itemsPerView;
```

## Prevención de cortes y deriva

✅ **Sin clipping garantizado**:
- Items calculan ancho: `flex: 0 0 calc((100% - (N-1) * gap) / N)`
- Viewport con `overflow: hidden` aísla visibilidad
- Flechas posicionadas absolutamente FUERA del viewport

✅ **Sin deriva (determinístico)**:
- `step = itemWidth + gap` (medido en pixels del DOM)
- `offset = -currentIndex * step` (cálculo desde cero, no acumulativo)
- Cada navegación recalcula la posición sin memoria de estados anteriores
- Múltiples navegaciones siempre aterrizan perfectamente alineado

## Limitaciones conocidas

1. **No soporta responsive automático**: Debes cambiar `itemsPerView` manualmente según breakpoint
2. **No soporta drag/swipe**: Solo navegación por botones y dots
3. **No soporta autoplay**: Debe implementarse externamente si se requiere

## Futuras mejoras

- [ ] Soporte para touch/swipe gestures
- [ ] Autoplay configurable
- [ ] Lazy loading de items
- [ ] Keyboard navigation (arrow keys)
- [ ] Responsive automático vía HostListener

## Soporte de navegadores

- ✅ Chrome/Edge (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Mobile Safari
- ✅ Chrome Android
