# Dialog Component

## Overview

The **Dialog** component is a single, unified modal system that handles all modal use cases in the project. It provides a flexible, structural container with internal slots for projecting content, rather than creating multiple specialized modal variants.

The Dialog component can handle:

- **Simple confirmations** (question + action buttons)
- **Forms** (short and long forms with various inputs)
- **Complex views** (tabs, tables, cards, and multi-section content)

## Key Principles

### ⚠️ Single Component Architecture

- **DO NOT** create multiple modal components (e.g., `ConfirmationModal`, `FormModal`, `TableModal`)
- **DO NOT** create Dialog variants based on content types
- The Dialog is a **structural container**, not a closed UI
- All content lives **inside** the Dialog via content projection

### Content Projection (Slots)

The Dialog uses Angular's content projection with attribute selectors to organize content into semantic sections:

| Slot Attribute  | Purpose                                      | Required |
| --------------- | -------------------------------------------- | -------- |
| `dialog-header` | Header area with title and semantic styling  | Yes      |
| `dialog-body`   | Main content area (forms, text, tables, etc) | Yes      |
| `dialog-footer` | Action buttons area                          | Optional |

## Props

| Prop          | Type                               | Default   | Description                                                 |
| ------------- | ---------------------------------- | --------- | ----------------------------------------------------------- |
| `open`        | `boolean`                          | `false`   | Controls dialog visibility                                  |
| `size`        | `'sm' \| 'md' \| 'lg'`             | `'md'`    | Dialog width (sm: ~460px, md: ~670px, lg: ~1150px)          |
| `headerTone`  | `'brand' \| 'info' \| 'secondary'` | `'brand'` | Header semantic theme (brand=orange, info/secondary=purple) |
| `scrollable`  | `boolean`                          | `false`   | Enable internal scroll in dialog body                       |
| `dismissible` | `boolean`                          | `true`    | Allow closing via ESC key or backdrop click                 |
| `hasFooter`   | `boolean`                          | `true`    | Show/hide footer section                                    |
| `closeDialog` | `EventEmitter<void>`               | -         | Event emitted when dialog should close                      |

### ⚠️ Props NOT to Use

Do **NOT** create these props (they violate the single-component principle):

- ❌ `isConfirmation`
- ❌ `isForm`
- ❌ `isTable`
- ❌ `variant`

## Header Tone Variations

The Dialog header supports semantic tone-based styling to communicate context:

### `headerTone="brand"` (Orange)

Use for:

- Primary actions
- Standard modals
- Payment/financial confirmations
- Default system operations

**Visual**: Orange background (#EA580C) with white text

### `headerTone="info"` or `headerTone="secondary"` (Purple)

Use for:

- Informational views
- History/reports
- Risk assessment displays
- Secondary operations

**Visual**: Light purple background (#F3E8FF) with purple text (#9333EA)

> **Important**: Tone changes affect ONLY the header styling, NOT the Dialog structure or behavior.

## Basic Usage

```html
<bsg-dialog [open]="isOpen" size="md" headerTone="brand" (closeDialog)="handleClose()">
  <!-- Header Slot -->
  <div dialog-header>Dialog Title</div>

  <!-- Body Slot -->
  <div dialog-body>
    <p>Your content goes here...</p>
  </div>

  <!-- Footer Slot (optional) -->
  <div dialog-footer>
    <bsg-button variant="outline" label="Cancel"></bsg-button>
    <bsg-button variant="default" label="Confirm"></bsg-button>
  </div>
</bsg-dialog>
```

## Common Use Cases

### 1. Confirmation Dialog

Simple confirmation with a question and two action buttons:

```html
<bsg-dialog
  [open]="showConfirm"
  size="sm"
  headerTone="brand"
  [dismissible]="true"
  (closeDialog)="onCancel()"
>
  <div dialog-header>Confirmar solicitud</div>

  <div dialog-body>
    <p>¿Estás seguro de solicitar el beneficio para implementar y gestionar sistemas integrados?</p>
  </div>

  <div dialog-footer>
    <bsg-button variant="destructive" label="Cancelar" (click)="onCancel()"></bsg-button>
    <bsg-button variant="default" label="Aceptar" (click)="onConfirm()"></bsg-button>
  </div>
</bsg-dialog>
```

### 2. Form Dialog

Dialog containing form inputs:

```html
<bsg-dialog [open]="showForm" size="md" headerTone="brand" (closeDialog)="onCloseForm()">
  <div dialog-header>Registrar Nueva Solicitud</div>

  <div dialog-body>
    <form>
      <bsg-input label="Nombre" placeholder="Ingrese nombre"></bsg-input>
      <bsg-select label="Tipo de beneficio" placeholder="Seleccione"></bsg-select>
      <bsg-textarea label="Descripción" placeholder="Describa..."></bsg-textarea>
    </form>
  </div>

  <div dialog-footer>
    <bsg-button variant="outline" label="Cancelar" (click)="onCancel()"></bsg-button>
    <bsg-button variant="default" label="Guardar" (click)="onSave()"></bsg-button>
  </div>
</bsg-dialog>
```

### 3. Complex Detail View

Dialog with tabs, sections, tables, and cards:

```html
<bsg-dialog
  [open]="showDetails"
  size="lg"
  headerTone="secondary"
  [scrollable]="true"
  (closeDialog)="onCloseDetails()"
>
  <div dialog-header>
    <div style="display: flex; align-items: center; gap: 12px;">
      <svg><!-- Icon --></svg>
      <span>Historial de mensajes</span>
    </div>
  </div>

  <div dialog-body>
    <!-- Tabs -->
    <bsg-tab-navigation></bsg-tab-navigation>

    <!-- Summary Cards -->
    <div class="summary-cards">
      <bsg-card>...</bsg-card>
      <bsg-card>...</bsg-card>
    </div>

    <!-- Data Table -->
    <bsg-table>...</bsg-table>
  </div>

  <div dialog-footer>
    <bsg-button variant="destructive" label="Cerrar" (click)="onClose()"></bsg-button>
  </div>
</bsg-dialog>
```

### 4. Scrollable Long Content

For dialogs with extensive content:

```html
<bsg-dialog [open]="showLongContent" size="md" headerTone="brand" [scrollable]="true">
  <div dialog-header>Términos y Condiciones</div>

  <div dialog-body>
    <!-- Long content that will scroll -->
    <section>...</section>
    <section>...</section>
    <section>...</section>
  </div>

  <div dialog-footer>
    <bsg-button variant="default" label="Aceptar"></bsg-button>
  </div>
</bsg-dialog>
```

## Behavior

### Focus Trapping

When a Dialog is open:

- Focus is trapped within the Dialog
- Tab key cycles only through interactive elements inside the Dialog
- Focus returns to trigger element when closed

### Dismissible Modes

When `dismissible="true"`:

- **ESC key**: Closes the dialog
- **Backdrop click**: Closes the dialog when clicking outside the content area

When `dismissible="false"`:

- User must interact with action buttons to close
- Use for critical confirmations or required forms

### Scrolling

- **Default**: Body height adjusts to content, dialog can grow to ~90vh
- **Scrollable mode** (`scrollable="true"`): Body has max-height and internal scroll
- Dialog content never scrolls the page background

## Accessibility

The Dialog component implements WAI-ARIA dialog pattern:

- `role="dialog"` on content container
- `aria-modal="true"` to indicate modal behavior
- `aria-labelledby` references the header title
- Focus management and keyboard navigation
- ESC key support for dismissible dialogs

## Styling Tokens

The Dialog uses Design System tokens:

| Token                | Value     | Usage                        |
| -------------------- | --------- | ---------------------------- |
| `--Orange-600`       | `#EA580C` | Brand header background      |
| `--Purple-100`       | `#F3E8FF` | Info/Secondary header bg     |
| `--Purple-600`       | `#9333EA` | Info/Secondary header text   |
| `--Border-Radius-xl` | `12px`    | Dialog content border radius |
| `--Border-Radius-lg` | `8px`     | Header top corners           |

## Responsive Behavior

- **Desktop**: Full size based on `size` prop
- **Tablet**: Constrained to viewport with padding
- **Mobile**:
  - Full width with 12px side padding
  - Max-height 95vh
  - Reduced header/body padding

## Best Practices

### ✅ DO

- Use semantic `headerTone` based on context
- Project content into appropriate slots
- Enable `scrollable` for long content
- Use `size="sm"` for confirmations
- Use `size="lg"` for complex views with tables
- Disable dismiss for critical actions

### ❌ DON'T

- Don't create new modal component variants
- Don't hardcode content types into props
- Don't use Dialog for tooltips or popovers
- Don't nest Dialogs inside each other
- Don't forget to handle `closeDialog` event

## Migration from Multiple Modals

If you have existing specialized modals:

**Before:**

```typescript
<ConfirmationModal>
<FormModal>
<TableModal>
```

**After (unified):**

```typescript
<!-- All use the same Dialog component -->
<bsg-dialog size="sm"><!-- Confirmation --></bsg-dialog>
<bsg-dialog size="md"><!-- Form --></bsg-dialog>
<bsg-dialog size="lg"><!-- Table --></bsg-dialog>
```

The **content** differentiates the use case, not the component itself.

## Component Exports

```typescript
import { DialogComponent } from './dialog.component';

// Types
export type DialogSize = 'sm' | 'md' | 'lg';
export type DialogHeaderTone = 'brand' | 'info' | 'secondary';
```

---

**Remember**: The Dialog component is a flexible structural container. Its power comes from content projection, not from having multiple variants or specialized props.
