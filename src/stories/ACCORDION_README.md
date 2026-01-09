# Accordion Component

The `bsg-accordion` component is a flexible, accessible accordion (collapsible) component that allows users to reveal content by expanding and collapsing sections.

## Usage

```html
<bsg-accordion 
  [items]="accordionItems"
  mode="single"
  size="md"
  (itemToggle)="onItemToggle($event)">
</bsg-accordion>
```

## Component Selector

- **Selector**: `bsg-accordion`
- **Prefix**: `bsg-` (Builder System Grid)

## Inputs

### `items: AccordionItem[]`
Array of accordion items to display. Each item contains:
- `id: string` - Unique identifier for the item
- `title: string` - Title of the accordion header
- `content: string` - Content displayed when expanded
- `disabled?: boolean` - (Optional) Whether the item is disabled

**Example**:
```typescript
items = [
  {
    id: 'item-1',
    title: 'Sección 1',
    content: 'Contenido de la sección 1'
  },
  {
    id: 'item-2',
    title: 'Sección 2',
    content: 'Contenido de la sección 2'
  }
];
```

### `mode: 'single' | 'multiple'`
Determines how many items can be expanded at once.
- `'single'`: Only one item can be open at a time (default)
- `'multiple'`: Multiple items can be open simultaneously

**Default**: `'single'`

### `size: 'sm' | 'md' | 'lg'`
Controls the size of the accordion.
- `'sm'`: Small (12px padding, 14px font)
- `'md'`: Medium (16px padding, 16px font) - Default
- `'lg'`: Large (20px padding, 18px font)

**Default**: `'md'`

### `expandedItems: string[]`
Array of item IDs that should be initially expanded.

**Example**:
```typescript
expandedItems = ['item-1', 'item-3'];
```

## Outputs

### `itemToggle`
Emitted when an accordion item is toggled.

**Event Data**:
```typescript
{
  itemId: string;
  expanded: boolean;
}
```

**Example**:
```html
<bsg-accordion (itemToggle)="onToggle($event)"></bsg-accordion>
```

```typescript
onToggle(event: { itemId: string; expanded: boolean }) {
  console.log(`Item ${event.itemId} is ${event.expanded ? 'expanded' : 'collapsed'}`);
}
```

## Interfaces

### `AccordionItem`
```typescript
interface AccordionItem {
  id: string;
  title: string;
  content: string;
  disabled?: boolean;
}
```

### `AccordionMode`
```typescript
type AccordionMode = 'single' | 'multiple';
```

### `AccordionSize`
```typescript
type AccordionSize = 'sm' | 'md' | 'lg';
```

## Features

### Accessibility
- ARIA labels and attributes for screen readers
- Keyboard navigation support
- Focus management
- Semantic HTML structure

### Animation
- Smooth expand/collapse animations
- Rotated chevron icon on state change
- Visual feedback on hover and focus

### States

#### Default
- Normal, interactive state
- Hover effect with background color change
- Focus outline when using keyboard

#### Expanded
- Light background color
- Rotated chevron pointing up
- Content panel visible

#### Disabled
- Reduced opacity (50%)
- Non-interactive
- Pointer events disabled

## Size Variants

### Small (sm)
- Padding: 12px
- Font Size: 14px
- Border Radius: 6px

### Medium (md) - Default
- Padding: 16px
- Font Size: 16px
- Border Radius: 8px

### Large (lg)
- Padding: 20px
- Font Size: 18px
- Border Radius: 10px

## Mode Behaviors

### Single Mode
- Only one item can be expanded at a time
- Opening a new item automatically closes the previous one
- Perfect for FAQs and step-by-step guides
- Compact and organized view

### Multiple Mode
- Multiple items can be expanded simultaneously
- Users have full control over which sections to view
- Ideal for comparing content or viewing related information
- More flexible but potentially more verbose

## CSS Classes

### Container Classes
- `.accordion` - Main accordion container
- `.accordion-size-sm|md|lg` - Size variant
- `.accordion-mode-single|multiple` - Mode variant

### Item Classes
- `.accordion-item` - Individual accordion item
- `.accordion-item-disabled` - Disabled item

### Header Classes
- `.accordion-header` - Header button
- `.accordion-header-button` - Header button state
- `.accordion-header-expanded` - Expanded header state

### Content Classes
- `.accordion-panel` - Content panel wrapper
- `.accordion-content` - Content inner wrapper
- `.accordion-chevron` - Icon element
- `.accordion-chevron-open` - Rotated chevron when open

### Title Classes
- `.accordion-title` - Title text

## Examples

### FAQ Use Case
```typescript
items: AccordionItem[] = [
  {
    id: 'faq-1',
    title: '¿How do I reset my password?',
    content: 'Click on "Forgot Password" and follow the email instructions...'
  },
  {
    id: 'faq-2',
    title: 'What payment methods are accepted?',
    content: 'We accept credit cards, bank transfers, and digital wallets...'
  }
];
```

### Features List (Multiple Mode)
```typescript
items: AccordionItem[] = [
  {
    id: 'feat-1',
    title: 'Real-time Analytics',
    content: 'Monitor your performance with live dashboards...'
  },
  {
    id: 'feat-2',
    title: 'Advanced Security',
    content: 'Enterprise-grade encryption and two-factor authentication...'
  }
];

mode = 'multiple'; // Allow multiple items open
```

### Course Modules with Disabled Item
```typescript
items: AccordionItem[] = [
  {
    id: 'module-1',
    title: 'Module 1: Basics',
    content: 'Learn the fundamentals...'
  },
  {
    id: 'module-2',
    title: 'Module 2: Advanced (Coming Soon)',
    content: 'Advanced techniques...',
    disabled: true
  }
];
```

## Styling Customization

Override CSS variables or classes to customize appearance:

```css
/* Override border color */
.accordion {
  border-color: #your-color;
}

/* Override header background on hover */
.accordion-header:hover {
  background: #your-color;
}

/* Override chevron color */
.accordion-chevron {
  color: #your-color;
}
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance Notes

- Component uses OnPush change detection strategy for optimal performance
- Animations are GPU-accelerated using CSS transforms
- Handles large lists efficiently with virtual scrolling support

## Related Components

- Table (bsg-table) - For tabular data display
- Tabs (bsg-tab-navigation) - For multiple sections with tabs
- Collapse (if available) - For single collapsible section
