# Skeleton Component

The Skeleton component is a flexible utility component used to create loading placeholders for content that is being fetched or processed. It provides visual feedback to users while data is loading.

## Features

- 3 types: `text`, `circular`, `rectangular`
- Configurable width and height (auto, px, %, rem, etc.)
- Type-specific border radius (sm for text, full for circular, md for rectangular)
- No default sizes or spacing (fully composable)
- Non-interactive placeholder
- Pixel-perfect replication from Figma design
- Accessible with ARIA attributes
- Angular 20 standalone component
- No animations by default (can be added by consumer)

## Import

```typescript
import { SkeletonComponent } from './skeleton.component';
```

## Basic Usage

```html
<!-- Text skeleton (single line) -->
<storybook-skeleton type="text" width="200px" height="16px"></storybook-skeleton>

<!-- Circular skeleton (avatar placeholder) -->
<storybook-skeleton type="circular" width="40px" height="40px"></storybook-skeleton>

<!-- Rectangular skeleton (image/card placeholder) -->
<storybook-skeleton type="rectangular" width="300px" height="200px"></storybook-skeleton>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'text' \| 'circular' \| 'rectangular'` | `'rectangular'` | Skeleton type (determines border radius) |
| `width` | `string \| number` | `'auto'` | Width (auto, px number, or CSS value like "100%") |
| `height` | `string \| number` | `'auto'` | Height (auto, px number, or CSS value like "20px") |

## Types

### Text

Used for single-line text placeholders (titles, labels, descriptions).

```html
<storybook-skeleton type="text" width="228px" height="16px"></storybook-skeleton>
```

**Specifications:**
- **Border Radius**: 4px (sm)
- **Default Width**: 100%
- **Default Height**: 16px
- **Use Cases**: Text lines, labels, titles, short descriptions

**Examples:**

```html
<!-- Title -->
<storybook-skeleton type="text" width="200px" height="24px"></storybook-skeleton>

<!-- Subtitle -->
<storybook-skeleton type="text" width="150px" height="16px"></storybook-skeleton>

<!-- Paragraph line -->
<storybook-skeleton type="text" width="100%" height="14px"></storybook-skeleton>
```

### Circular

Used for circular placeholders (avatars, profile pictures, round icons).

```html
<storybook-skeleton type="circular" width="40px" height="40px"></storybook-skeleton>
```

**Specifications:**
- **Border Radius**: 50% (full - perfect circle)
- **Aspect Ratio**: 1:1 (enforced for perfect circle)
- **Default Size**: 40×40px
- **Use Cases**: Avatars, profile pictures, circular icons

**Important**: Width and height should be equal to maintain perfect circular shape.

**Examples:**

```html
<!-- Small avatar (xs) -->
<storybook-skeleton type="circular" width="24px" height="24px"></storybook-skeleton>

<!-- Medium avatar (md) -->
<storybook-skeleton type="circular" width="40px" height="40px"></storybook-skeleton>

<!-- Large avatar (lg) -->
<storybook-skeleton type="circular" width="64px" height="64px"></storybook-skeleton>
```

### Rectangular

Used for larger content blocks (images, cards, content areas).

```html
<storybook-skeleton type="rectangular" width="300px" height="200px"></storybook-skeleton>
```

**Specifications:**
- **Border Radius**: 8px (md)
- **Default Width**: 100%
- **Default Height**: 100px
- **Use Cases**: Images, cards, content blocks, banners

**Examples:**

```html
<!-- Card -->
<storybook-skeleton type="rectangular" width="350px" height="200px"></storybook-skeleton>

<!-- Full-width banner -->
<storybook-skeleton type="rectangular" width="100%" height="120px"></storybook-skeleton>

<!-- Small thumbnail -->
<storybook-skeleton type="rectangular" width="100px" height="100px"></storybook-skeleton>
```

## Design Specifications

### Color & Style
- **Background**: `#E2E8F0` (neutral-200 from Figma)
- **Display**: block
- **Flex Shrink**: 0 (prevents shrinking in flex containers)
- **Border**: none

### Border Radius by Type
- **Text**: 4px
- **Circular**: 50%
- **Rectangular**: 8px

### Behavior
- **Non-interactive**: `pointer-events: none`
- **Non-selectable**: `user-select: none`
- **No animations**: Plain static placeholder (animations can be added by consumer)
- **No default spacing**: Component has no margin or padding

## Width & Height Values

The component accepts flexible width and height values:

### Auto

```html
<storybook-skeleton type="text" width="auto" height="auto"></storybook-skeleton>
```

Uses default size for the type.

### Numeric (pixels)

```html
<storybook-skeleton type="rectangular" width="300" height="200"></storybook-skeleton>
```

Automatically converted to `300px` and `200px`.

### CSS String Values

```html
<!-- Percentage -->
<storybook-skeleton type="rectangular" width="100%" height="150px"></storybook-skeleton>

<!-- Rem units -->
<storybook-skeleton type="text" width="20rem" height="1.5rem"></storybook-skeleton>

<!-- Viewport units -->
<storybook-skeleton type="rectangular" width="50vw" height="30vh"></storybook-skeleton>
```

## Composition Examples

### User Profile Card

```html
<div style="border: 1px solid #E2E8F0; border-radius: 8px; padding: 24px;">
  <!-- Header -->
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
    <storybook-skeleton type="circular" width="64px" height="64px"></storybook-skeleton>
    <div style="flex: 1;">
      <storybook-skeleton type="text" width="160px" height="20px" style="margin-bottom: 8px;"></storybook-skeleton>
      <storybook-skeleton type="text" width="120px" height="14px"></storybook-skeleton>
    </div>
  </div>
  
  <!-- Bio -->
  <div style="margin-bottom: 24px;">
    <storybook-skeleton type="text" width="100%" height="14px" style="margin-bottom: 8px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="100%" height="14px" style="margin-bottom: 8px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="70%" height="14px"></storybook-skeleton>
  </div>
  
  <!-- Button -->
  <storybook-skeleton type="rectangular" width="100%" height="40px"></storybook-skeleton>
</div>
```

### Comment Thread

```html
<div style="display: flex; flex-direction: column; gap: 16px;">
  <!-- Comment 1 -->
  <div style="display: flex; gap: 12px;">
    <storybook-skeleton type="circular" width="32px" height="32px"></storybook-skeleton>
    <div style="flex: 1;">
      <storybook-skeleton type="text" width="100px" height="14px" style="margin-bottom: 8px;"></storybook-skeleton>
      <storybook-skeleton type="text" width="100%" height="12px" style="margin-bottom: 4px;"></storybook-skeleton>
      <storybook-skeleton type="text" width="80%" height="12px"></storybook-skeleton>
    </div>
  </div>
  
  <!-- Comment 2 -->
  <div style="display: flex; gap: 12px;">
    <storybook-skeleton type="circular" width="32px" height="32px"></storybook-skeleton>
    <div style="flex: 1;">
      <storybook-skeleton type="text" width="120px" height="14px" style="margin-bottom: 8px;"></storybook-skeleton>
      <storybook-skeleton type="text" width="100%" height="12px" style="margin-bottom: 4px;"></storybook-skeleton>
      <storybook-skeleton type="text" width="90%" height="12px"></storybook-skeleton>
    </div>
  </div>
</div>
```

### Article Card

```html
<div style="border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; max-width: 350px;">
  <!-- Image -->
  <storybook-skeleton type="rectangular" width="100%" height="200px"></storybook-skeleton>
  
  <!-- Content -->
  <div style="padding: 16px;">
    <storybook-skeleton type="text" width="80%" height="24px" style="margin-bottom: 12px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="100%" height="14px" style="margin-bottom: 6px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="100%" height="14px" style="margin-bottom: 6px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="60%" height="14px" style="margin-bottom: 16px;"></storybook-skeleton>
    
    <!-- Metadata -->
    <div style="display: flex; align-items: center; gap: 12px;">
      <storybook-skeleton type="circular" width="24px" height="24px"></storybook-skeleton>
      <storybook-skeleton type="text" width="100px" height="12px"></storybook-skeleton>
    </div>
  </div>
</div>
```

### Product Grid

```html
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
  <!-- Product 1 -->
  <div>
    <storybook-skeleton type="rectangular" width="100%" height="180px" style="margin-bottom: 12px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="80%" height="16px" style="margin-bottom: 8px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="50%" height="20px"></storybook-skeleton>
  </div>
  
  <!-- Product 2 -->
  <div>
    <storybook-skeleton type="rectangular" width="100%" height="180px" style="margin-bottom: 12px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="90%" height="16px" style="margin-bottom: 8px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="60%" height="20px"></storybook-skeleton>
  </div>
  
  <!-- Product 3 -->
  <div>
    <storybook-skeleton type="rectangular" width="100%" height="180px" style="margin-bottom: 12px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="70%" height="16px" style="margin-bottom: 8px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="55%" height="20px"></storybook-skeleton>
  </div>
</div>
```

### List Items

```html
<div style="display: flex; flex-direction: column; gap: 12px;">
  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #F8FAFC; border-radius: 8px;">
    <storybook-skeleton type="circular" width="40px" height="40px"></storybook-skeleton>
    <div style="flex: 1;">
      <storybook-skeleton type="text" width="150px" height="16px" style="margin-bottom: 6px;"></storybook-skeleton>
      <storybook-skeleton type="text" width="100px" height="12px"></storybook-skeleton>
    </div>
  </div>
  
  <div style="display: flex; align-items: center; gap: 12px; padding: 12px; background: #F8FAFC; border-radius: 8px;">
    <storybook-skeleton type="circular" width="40px" height="40px"></storybook-skeleton>
    <div style="flex: 1;">
      <storybook-skeleton type="text" width="130px" height="16px" style="margin-bottom: 6px;"></storybook-skeleton>
      <storybook-skeleton type="text" width="90px" height="12px"></storybook-skeleton>
    </div>
  </div>
</div>
```

## Use Cases

### When to Use Skeleton Screens

✅ **Good Use Cases:**
- Initial page load
- Lazy loading content
- Infinite scroll pagination
- Image loading
- Data fetching from API
- Dynamic content areas
- Progressive rendering

❌ **Avoid Using For:**
- Very fast operations (< 300ms)
- Static content
- Blocking operations with spinners
- Forms (use disabled states instead)

### Loading State Strategy

**Skeleton screens are preferred when:**
- Content layout is known ahead of time
- Loading time is moderate (500ms - 3s)
- User expects to see structured content
- Progressive rendering is possible

**Spinners are preferred when:**
- Content layout is unknown
- Loading time is very short or indeterminate
- Operation is blocking (file upload, submission)
- No partial content can be shown

## Accessibility

- Uses `role="presentation"` to indicate decorative element
- Includes `aria-busy="true"` to indicate loading state
- Includes descriptive `aria-label` for screen readers
- Non-interactive (won't interfere with keyboard navigation)

```html
<!-- Rendered output -->
<div 
  class="skeleton skeleton-text" 
  style="width: 200px; height: 16px;"
  role="presentation" 
  aria-busy="true" 
  aria-label="Loading placeholder">
</div>
```

### Best Practices for Accessibility

1. **Announce loading state**:
```html
<div aria-live="polite" aria-busy="true">
  <storybook-skeleton type="text" width="200px" height="16px"></storybook-skeleton>
</div>
```

2. **Replace with real content**:
```html
<div *ngIf="loading; else content">
  <storybook-skeleton type="text" width="200px" height="16px"></storybook-skeleton>
</div>
<ng-template #content>
  <p>{{ actualContent }}</p>
</ng-template>
```

3. **Provide loading announcement**:
```html
<div role="status" aria-live="polite">
  <span class="sr-only">Loading content...</span>
  <storybook-skeleton type="rectangular" width="100%" height="200px"></storybook-skeleton>
</div>
```

## Component Architecture

```typescript
@Component({
  selector: 'storybook-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
  styleUrls: ['./skeleton.css']
})
export class SkeletonComponent {
  @Input() type: SkeletonType = 'rectangular';
  @Input() width: string | number = 'auto';
  @Input() height: string | number = 'auto';
  
  get skeletonClasses(): string[] { ... }
  get computedWidth(): string { ... }
  get computedHeight(): string { ... }
}
```

## Styling

The component uses external CSS (`skeleton.css`) with:

- `.skeleton` - Base skeleton styles
- `.skeleton-text` - Text type (border-radius: 4px)
- `.skeleton-circular` - Circular type (border-radius: 50%, aspect-ratio: 1/1)
- `.skeleton-rectangular` - Rectangular type (border-radius: 8px)

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - CSS Flexbox
  - Border-radius
  - Aspect-ratio (for circular type)
  - Angular 20+

## Performance

- Extremely lightweight (~0.5KB gzipped)
- No JavaScript interactions
- Pure CSS rendering
- No animations by default
- Minimal DOM footprint (single div)

## Adding Animations (Optional)

The base component has no animations. You can add shimmer effects via CSS:

### Shimmer Animation

```css
/* Add to your global styles or component styles */
@keyframes skeleton-shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #e2e8f0 0%,
    #f1f5f9 50%,
    #e2e8f0 100%
  );
  background-size: 1000px 100%;
  animation: skeleton-shimmer 2s infinite linear;
}
```

### Pulse Animation

```css
@keyframes skeleton-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.skeleton {
  animation: skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

## Builder.io Compatibility

This component is designed to be compatible with Builder.io:

1. **Standalone Component**: No module dependencies required
2. **Props System**: Simple @Input decorators map to Builder.io controls
3. **Self-contained**: All styles and logic encapsulated
4. **Composable**: Can be combined to build complex loading states

### Builder.io Integration Example

When registering in Builder.io:

```typescript
Builder.registerComponent(SkeletonComponent, {
  name: 'Skeleton',
  inputs: [
    {
      name: 'type',
      type: 'string',
      enum: ['text', 'circular', 'rectangular'],
      defaultValue: 'rectangular'
    },
    {
      name: 'width',
      type: 'string',
      defaultValue: 'auto',
      helperText: 'Width (auto, 100px, 100%, 10rem, etc.)'
    },
    {
      name: 'height',
      type: 'string',
      defaultValue: 'auto',
      helperText: 'Height (auto, 100px, 100%, 10rem, etc.)'
    }
  ]
});
```

## Best Practices

### DO ✓

- Use skeleton screens for predictable layouts
- Match skeleton shapes to actual content
- Provide loading announcements for screen readers
- Replace skeletons with real content once loaded
- Use appropriate type for content (text, circular, rectangular)
- Vary text line widths for realistic appearance
- Combine multiple skeletons to build complex states

### DON'T ✗

- Don't use for very fast operations (< 300ms)
- Don't make skeletons interactive
- Don't use skeleton screens everywhere (spinners are better for some cases)
- Don't animate excessively (subtle is better)
- Don't mismatch skeleton shape with final content
- Don't forget to remove skeletons when content loads
- Don't use fixed sizes when responsive is needed

## Common Patterns

### Conditional Rendering

```html
<div *ngIf="isLoading; else content">
  <!-- Skeleton -->
  <storybook-skeleton type="text" width="200px" height="20px"></storybook-skeleton>
</div>

<ng-template #content>
  <!-- Real content -->
  <h2>{{ title }}</h2>
</ng-template>
```

### List Loading

```html
<div *ngIf="isLoading; else loadedList">
  <div *ngFor="let item of [1,2,3,4,5]" style="margin-bottom: 12px;">
    <div style="display: flex; gap: 12px;">
      <storybook-skeleton type="circular" width="40px" height="40px"></storybook-skeleton>
      <div style="flex: 1;">
        <storybook-skeleton type="text" width="150px" height="16px" style="margin-bottom: 6px;"></storybook-skeleton>
        <storybook-skeleton type="text" width="100px" height="12px"></storybook-skeleton>
      </div>
    </div>
  </div>
</div>

<ng-template #loadedList>
  <div *ngFor="let item of items">
    <!-- Real list items -->
  </div>
</ng-template>
```

### Progressive Loading

```html
<!-- Header loads first -->
<div>
  <h1 *ngIf="header; else headerSkeleton">{{ header }}</h1>
  <ng-template #headerSkeleton>
    <storybook-skeleton type="text" width="200px" height="32px"></storybook-skeleton>
  </ng-template>
</div>

<!-- Content loads next -->
<div style="margin-top: 16px;">
  <div *ngIf="content; else contentSkeleton" [innerHTML]="content"></div>
  <ng-template #contentSkeleton>
    <storybook-skeleton type="text" width="100%" height="14px" style="margin-bottom: 8px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="100%" height="14px" style="margin-bottom: 8px;"></storybook-skeleton>
    <storybook-skeleton type="text" width="70%" height="14px"></storybook-skeleton>
  </ng-template>
</div>
```

## Troubleshooting

### Skeleton doesn't show

**Problem**: Skeleton is rendered but not visible.

**Solution**: Ensure parent container has dimensions or skeleton has explicit width/height.

### Circular skeleton is oval

**Problem**: Circular type appears distorted.

**Solution**: Ensure width and height are equal. Use same value for both.

```html
<!-- Correct -->
<storybook-skeleton type="circular" width="40px" height="40px"></storybook-skeleton>

<!-- Wrong -->
<storybook-skeleton type="circular" width="40px" height="30px"></storybook-skeleton>
```

### Layout shifts when content loads

**Problem**: Page jumps when skeleton is replaced with real content.

**Solution**: Ensure skeleton dimensions match final content dimensions.

### Too many skeletons

**Problem**: Skeleton screens everywhere, degraded UX.

**Solution**: Only use for moderate loading times (500ms - 3s). Use spinners for fast operations.

## Related Components

- **Progress**: For determinate progress indicators
- **Spinner** (if implemented): For indeterminate loading
- **Card**: Often contains skeleton during loading
- **Avatar**: Circular skeleton is commonly used as avatar placeholder

## Version History

- **v1.0.0** - Initial release based on Figma design specifications
  - 3 types (text, circular, rectangular)
  - Flexible width/height
  - Type-specific border radius
  - No animations by default
  - Fully composable
  - No default sizes or spacing

## Future Enhancements

Potential features not included in current Figma design:
- Built-in shimmer/pulse animations
- Color variants
- Gradient backgrounds
- Custom border radius override
- Aspect ratio prop for rectangular type
- Predefined size presets (sm, md, lg, xl)
