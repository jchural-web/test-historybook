# Avatar Component

The Avatar component is a circular visual element used to represent a user or entity. It supports multiple sizes and can display either a user icon, an image, or initials as a fallback.

## Features

- 5 sizes: `xs`, `sm`, `md`, `lg`, `xl`
- 2 types: `default` (icon/image), `fallback` (initials)
- Configurable initials text for fallback type
- Optional image URL for default type
- Perfect circular shape maintained across all sizes
- Responsive typography scaling for initials
- Non-interactive (no hover, click states)
- Pixel-perfect replication from Figma design
- Accessible with ARIA attributes
- Angular 20 standalone component

## Import

```typescript
import { AvatarComponent } from './avatar.component';
```

## Basic Usage

```html
<!-- Default type with user icon -->
<storybook-avatar size="md" type="default"></storybook-avatar>

<!-- Fallback type with initials -->
<storybook-avatar size="md" type="fallback" initials="JC"></storybook-avatar>

<!-- Default type with custom image -->
<storybook-avatar 
  size="lg" 
  type="default" 
  image="https://example.com/avatar.jpg">
</storybook-avatar>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Avatar size |
| `type` | `'default' \| 'fallback'` | `'default'` | Avatar type (icon/image or initials) |
| `initials` | `string` | `'JC'` | Initials text (only for fallback type) |
| `image` | `string` | `''` | Image URL (only for default type) |

## Sizes

### Size Specifications

| Size | Dimensions | Initials Font Size | Use Case |
|------|------------|-------------------|----------|
| `xs` | 24×24px | 12px | Compact lists, inline mentions |
| `sm` | 32×32px | 14px | Comments, compact UI elements |
| `md` | 40×40px | 18px | Default user profiles, lists |
| `lg` | 48×48px | 24px | User cards, profile headers |
| `xl` | 64×64px | 36px | Hero sections, large profiles |

### XS (24px)

```html
<storybook-avatar size="xs" type="fallback" initials="AB"></storybook-avatar>
```

**Use Cases:**
- Inline user mentions
- Very compact user lists
- Small UI spaces (mobile navbars)

### SM (32px)

```html
<storybook-avatar size="sm" type="fallback" initials="CD"></storybook-avatar>
```

**Use Cases:**
- Comment threads
- Chat messages
- Compact user lists
- Sidebar navigation

### MD (40px) - Default

```html
<storybook-avatar size="md" type="fallback" initials="EF"></storybook-avatar>
```

**Use Cases:**
- Standard user profiles
- List items
- Cards
- Default size for most UIs

### LG (48px)

```html
<storybook-avatar size="lg" type="fallback" initials="GH"></storybook-avatar>
```

**Use Cases:**
- User profile headers
- Settings pages
- Larger cards
- Featured users

### XL (64px)

```html
<storybook-avatar size="xl" type="fallback" initials="IJ"></storybook-avatar>
```

**Use Cases:**
- Hero sections
- Profile pages
- Large user cards
- Onboarding flows

## Types

### Default (Icon/Image)

The default type displays either:
- **User Icon**: Yellow (#EAB308) user silhouette on white background (when no image provided)
- **Custom Image**: Centered and clipped image (when image URL provided)

#### Default - Icon

```html
<storybook-avatar size="md" type="default" image=""></storybook-avatar>
```

**Specifications:**
- Background: White
- Icon Color: `#EAB308` (Yellow-500)
- Icon: User silhouette (head + shoulders)
- SVG geometry scaled per size

#### Default - Image

```html
<storybook-avatar 
  size="md" 
  type="default" 
  image="https://example.com/photo.jpg">
</storybook-avatar>
```

**Specifications:**
- Image: object-fit: cover
- Image: object-position: center
- Fallback background: `#F3F4F6` (neutral-100)
- Border-radius: 50% (perfect circle)
- Overflow: hidden (clips image to circle)

### Fallback (Initials)

The fallback type displays user initials on a colored background.

```html
<storybook-avatar size="md" type="fallback" initials="JC"></storybook-avatar>
```

**Specifications:**
- Background: `#EAB308` (Yellow-500)
- Text Color: White (#FFFFFF)
- Font Family: Inter
- Font Weight: 400
- Letter Spacing: 0.05px
- Text: Centered vertically and horizontally

**Initials Font Sizes:**
- xs (24px): 12px / line-height: 17px
- sm (32px): 14px / line-height: 21px
- md (40px): 18px / line-height: 27px
- lg (48px): 24px / line-height: 27px
- xl (64px): 36px / line-height: 27px

## Design Specifications

### Shape & Structure
- **Border Radius**: 50% (perfect circle)
- **Display**: inline-flex
- **Alignment**: Center (both vertical and horizontal)
- **Overflow**: hidden (for image clipping)
- **Aspect Ratio**: 1:1 (equal width and height)

### Colors
- **Fallback Background**: `#EAB308` (Yellow-500)
- **Fallback Text**: `#FFFFFF` (White)
- **Default Icon Background**: White
- **Default Icon Color**: `#EAB308` (Yellow-500)
- **Image Fallback Background**: `#F3F4F6` (neutral-100)

### Typography (Initials)
- **Font Family**: Inter, -apple-system, Roboto, Helvetica, sans-serif
- **Font Weight**: 400 (regular)
- **Letter Spacing**: 0.05px
- **Text Alignment**: Center

### Behavior
- **Non-interactive**: `pointer-events: none`
- **Non-selectable**: `user-select: none`
- **No states**: No hover, active, or focus states

## Examples

### User Profile Header

```html
<div style="display: flex; align-items: center; gap: 16px;">
  <storybook-avatar size="lg" type="fallback" initials="AB"></storybook-avatar>
  <div>
    <div style="font-weight: 600;">Alice Brown</div>
    <div style="color: #64748B;">alice.brown@example.com</div>
  </div>
</div>
```

### Comment Thread

```html
<div style="display: flex; gap: 12px;">
  <storybook-avatar size="sm" type="fallback" initials="MJ"></storybook-avatar>
  <div style="flex: 1;">
    <div style="font-weight: 600; margin-bottom: 4px;">Michael Johnson</div>
    <div style="color: #475569;">This looks great! I really like it.</div>
    <div style="font-size: 12px; color: #94A3B8; margin-top: 4px;">2 hours ago</div>
  </div>
</div>
```

### User List

```html
<div style="display: flex; flex-direction: column; gap: 12px;">
  <div style="display: flex; align-items: center; gap: 12px;">
    <storybook-avatar size="md" type="fallback" initials="JD"></storybook-avatar>
    <div>
      <div style="font-weight: 500;">John Doe</div>
      <div style="font-size: 12px; color: #64748B;">Product Manager</div>
    </div>
  </div>
  
  <div style="display: flex; align-items: center; gap: 12px;">
    <storybook-avatar size="md" type="fallback" initials="EW"></storybook-avatar>
    <div>
      <div style="font-weight: 500;">Emma Wilson</div>
      <div style="font-size: 12px; color: #64748B;">Senior Designer</div>
    </div>
  </div>
</div>
```

### Avatar Group (Overlapping)

```html
<div style="display: flex; align-items: center;">
  <div style="display: flex;">
    <div style="border: 2px solid white; border-radius: 50%;">
      <storybook-avatar size="sm" type="fallback" initials="AM"></storybook-avatar>
    </div>
    <div style="margin-left: -12px; border: 2px solid white; border-radius: 50%;">
      <storybook-avatar size="sm" type="fallback" initials="BT"></storybook-avatar>
    </div>
    <div style="margin-left: -12px; border: 2px solid white; border-radius: 50%;">
      <storybook-avatar size="sm" type="fallback" initials="CW"></storybook-avatar>
    </div>
  </div>
  <span style="margin-left: 12px; color: #64748B;">+5 more</span>
</div>
```

### Avatar with Status Badge

```html
<div style="position: relative; display: inline-block;">
  <storybook-avatar size="lg" type="fallback" initials="SK"></storybook-avatar>
  <span style="position: absolute; bottom: 0; right: 0;">
    <storybook-badge variant="success" size="dot"></storybook-badge>
  </span>
</div>
```

### Avatar with Custom Image

```html
<storybook-avatar 
  size="lg" 
  type="default" 
  image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e">
</storybook-avatar>
```

## Use Cases

### When to Use Default Type (Icon)
- User has no profile picture
- Anonymous or guest users
- Placeholder for empty state
- Consistent icon-based UI

### When to Use Default Type (Image)
- User has uploaded a profile picture
- Real photos for user identification
- Personal branding
- Verified accounts

### When to Use Fallback Type (Initials)
- User has no profile picture but has a name
- Quick visual identification by initials
- Colorful, personalized placeholders
- First-time user onboarding

## Common Patterns

### Avatar with Online Status

```html
<div style="position: relative; display: inline-block;">
  <storybook-avatar size="md" type="fallback" initials="RT"></storybook-avatar>
  <span style="
    position: absolute; 
    bottom: 0; 
    right: 0; 
    width: 12px; 
    height: 12px; 
    background: #16A34A; 
    border: 2px solid white; 
    border-radius: 50%;">
  </span>
</div>
```

### Avatar in Navigation Bar

```html
<nav style="display: flex; justify-content: space-between; padding: 16px;">
  <div>Logo</div>
  <storybook-avatar size="sm" type="fallback" initials="ME"></storybook-avatar>
</nav>
```

### Avatar Grid (Team Members)

```html
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
  <div style="text-align: center;">
    <storybook-avatar size="lg" type="fallback" initials="AA"></storybook-avatar>
    <div style="margin-top: 8px; font-size: 14px;">Alice</div>
  </div>
  <div style="text-align: center;">
    <storybook-avatar size="lg" type="fallback" initials="BB"></storybook-avatar>
    <div style="margin-top: 8px; font-size: 14px;">Bob</div>
  </div>
  <div style="text-align: center;">
    <storybook-avatar size="lg" type="fallback" initials="CC"></storybook-avatar>
    <div style="margin-top: 8px; font-size: 14px;">Carol</div>
  </div>
  <div style="text-align: center;">
    <storybook-avatar size="lg" type="fallback" initials="DD"></storybook-avatar>
    <div style="margin-top: 8px; font-size: 14px;">David</div>
  </div>
</div>
```

## Accessibility

- Uses `role="img"` for semantic meaning
- Includes descriptive `aria-label` for screen readers
- Non-interactive (won't interfere with keyboard navigation)
- Sufficient color contrast for initials (white on #EAB308)

```html
<!-- Rendered output for fallback -->
<div 
  class="avatar avatar-fallback avatar-md" 
  role="img" 
  aria-label="Avatar with initials JC">
  <span class="avatar-initials">JC</span>
</div>

<!-- Rendered output for default with image -->
<div 
  class="avatar avatar-image avatar-md" 
  role="img" 
  aria-label="User avatar">
  <img src="..." alt="User avatar" class="avatar-img" />
</div>
```

## Component Architecture

```typescript
@Component({
  selector: 'storybook-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `...`,
  styleUrls: ['./avatar.css']
})
export class AvatarComponent {
  @Input() size: AvatarSize = 'md';
  @Input() type: AvatarType = 'default';
  @Input() initials: string = 'JC';
  @Input() image: string = '';
  
  get avatarClasses(): string[] { ... }
  get dimensions(): number { ... }
  get iconViewBox(): string { ... }
  // ... SVG geometry calculations
}
```

## Styling

The component uses external CSS (`avatar.css`) with:

- `.avatar` - Base avatar styles (circular shape)
- `.avatar-{size}` - Size-specific dimensions (xs, sm, md, lg, xl)
- `.avatar-fallback` - Fallback type (yellow background)
- `.avatar-default` - Default type (transparent background)
- `.avatar-image` - Image type (neutral background)
- `.avatar-initials` - Initials text styling
- `.avatar-icon` - SVG icon sizing
- `.avatar-img` - Image clipping and sizing

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires support for:
  - CSS Flexbox
  - Border-radius
  - SVG
  - Object-fit (for images)
  - Angular 20+

## Performance

- Lightweight component (~2KB gzipped)
- No JavaScript interactions
- Minimal DOM footprint
- CSS-only styling (except SVG rendering)
- Optimized SVG paths per size

## Builder.io Compatibility

This component is designed to be compatible with Builder.io:

1. **Standalone Component**: No module dependencies required
2. **Props System**: Simple @Input decorators map to Builder.io controls
3. **Self-contained**: All styles and logic encapsulated

### Builder.io Integration Example

When registering in Builder.io:

```typescript
Builder.registerComponent(AvatarComponent, {
  name: 'Avatar',
  inputs: [
    {
      name: 'size',
      type: 'string',
      enum: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'md'
    },
    {
      name: 'type',
      type: 'string',
      enum: ['default', 'fallback'],
      defaultValue: 'default'
    },
    {
      name: 'initials',
      type: 'string',
      defaultValue: 'JC',
      showIf: 'options.get("type") === "fallback"'
    },
    {
      name: 'image',
      type: 'file',
      allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
      showIf: 'options.get("type") === "default"'
    }
  ]
});
```

## Best Practices

### DO ✓

- Use fallback type when user has no image
- Keep initials to 1-3 characters (ideally 2)
- Use appropriate size for context
- Maintain circular shape
- Provide alt text for images
- Use white border for overlapping avatars

### DON'T ✗

- Don't make avatars interactive (wrap in button if needed)
- Don't use long text in initials
- Don't distort aspect ratio (must stay circular)
- Don't use low-resolution images
- Don't rely solely on color for user identification
- Don't mix avatar styles inconsistently

## Initials Recommendations

### Best Practices for Initials

| User Name | Good Initials | Bad Initials |
|-----------|---------------|--------------|
| John Doe | JD | J, John, JDoe |
| Alice Brown | AB | A, Al, ABrown |
| Maria Garcia Lopez | MG or ML | M, MGL, Maria |
| Chen Wei | CW | C, Chen |

**Rules:**
- Use first letter of first name + first letter of last name
- Maximum 2-3 characters
- Always uppercase
- For single names, use first 1-2 letters

## Troubleshooting

### Avatar not circular

**Problem**: Avatar appears distorted or not perfectly circular.

**Solution**: Ensure container doesn't override width/height. Avatar uses equal dimensions and border-radius: 50%.

### Image not displaying

**Problem**: Image URL provided but icon shows instead.

**Solution**: 
- Verify image URL is accessible
- Check CORS policy if loading from external domain
- Ensure `type="default"` is set
- Check browser console for errors

### Initials too large/small

**Problem**: Initials overflow or appear tiny.

**Solution**: Font sizes are pre-calculated per size. Use standard 1-3 character initials.

### Avatar blurry on high-DPI screens

**Problem**: Avatar looks pixelated on Retina displays.

**Solution**: Use high-resolution images (at least 2x the display size). For 64px avatar, use 128px+ image.

## Size Selection Guide

### By Context

| Context | Recommended Size | Rationale |
|---------|-----------------|-----------|
| Mobile navbar | xs, sm | Limited space |
| Comment threads | sm, md | Compact but readable |
| User profiles | md, lg | Clear identification |
| Profile pages | lg, xl | Prominent display |
| Hero sections | xl | Maximum impact |
| User lists | sm, md | Scannable |
| Overlapping groups | sm | Prevents clutter |

### By Information Density

- **High density** (many items): xs, sm
- **Medium density** (standard lists): sm, md
- **Low density** (featured items): lg, xl

## Related Components

- **Badge**: Often combined for online status indicators
- **Button**: May wrap avatar for clickable user menus
- **Card**: Commonly includes avatar in header
- **Dropdown**: Avatar can trigger user menu dropdown

## Version History

- **v1.0.0** - Initial release based on Figma design specifications
  - 5 sizes (xs, sm, md, lg, xl)
  - 2 types (default icon/image, fallback initials)
  - Perfect circular shape
  - Pixel-perfect color matching (#EAB308)
  - Responsive typography for initials
  - Image support with circular clipping

## Future Enhancements

Potential features not included in current Figma design:
- Multiple color variants for fallback backgrounds
- Custom icon support (beyond default user icon)
- Gradient backgrounds
- Border options
- Loading state for images
- Error handling UI for failed image loads
- Animated presence indicators
- Avatar upload/edit functionality
