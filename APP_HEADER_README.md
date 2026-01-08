# AppHeader Component

**Status:** ✅ Componente Compuesto de Layout  
**Framework:** Angular 20 Standalone  
**Tipo:** Composite Component (Layout)  
**Última actualización:** 2025

---

## 📋 Descripción General

`AppHeader` es un componente de layout que estructura la barra de navegación superior de la aplicación. Este componente sigue el patrón de **composición**, reutilizando los componentes atómicos `Button` y `Avatar` del sistema de diseño.

### Características Principales

✅ **Composite Component**: Construido mediante composición de componentes existentes  
✅ **Flexbox Layout**: Diseño flexible con secciones Left-Right perfectamente alineadas  
✅ **Responsive Design**: Se adapta automáticamente a mobile, tablet y desktop  
✅ **SVG Icons**: Usa `DomSanitizer` para renderizar iconos de forma segura  
✅ **Builder.io Ready**: Props editables y registrables en Builder.io  
✅ **No Logic**: No maneja autenticación ni estado global (solo layout)

---

## 🏗️ Estructura del Componente

### Left Section (Sección Izquierda)

| Elemento | Descripción | Prop Asociado |
|----------|-------------|---------------|
| **Menu Button** | Icono hamburger para navegación lateral | `showMenuButton` |
| **Title** | Título o logo de la aplicación | `title` |

### Right Section (Sección Derecha)

| Elemento | Descripción | Prop Asociado |
|----------|-------------|---------------|
| **Notifications** | Icono de campana para notificaciones | - |
| **Action Button** | Botón con icono y texto (ej. "Actualizar") | `actionLabel` |
| **User Profile** | Avatar + nombre del usuario | `user` |

---

## 🎨 Diseño y Tokens

### Design Tokens

```css
/* Colores */
--header-background: #7B3FF7;     /* Fondo del header */
--header-text: #FFFFFF;           /* Texto y iconos */

/* Dimensiones */
--header-height: 64px;            /* Altura fija */
--header-padding-x: 24px;         /* Padding horizontal */

/* Tipografía */
--header-title-size: 20px;        /* Tamaño del título */
--header-title-weight: 600;       /* Peso del título */
--header-label-size: 14px;        /* Tamaño de labels */
--header-label-weight: 600;       /* Peso de labels */

/* Espaciado */
--header-left-gap: 16px;          /* Gap en sección izquierda */
--header-right-gap: 20px;         /* Gap en sección derecha */
--header-button-gap: 8px;         /* Gap dentro de botones */
```

### Medidas desde Figma

- **Altura Total**: 64px
- **Padding Horizontal**: 24px (desktop), 16px (tablet), 12px (mobile)
- **Gap Left Section**: 16px
- **Gap Right Section**: 20px
- **Tamaño Avatar**: 32px (size="sm")
- **Iconos Menu/Bell**: 19px x 19px, 20px x 20px
- **Icono Refresh**: 16px x 16px

---

## 📦 Archivos del Componente

```
src/stories/
├── app-header.component.ts    # Componente principal con lógica
├── app-header.css             # Estilos con flexbox y responsive
└── app-header.stories.ts      # Stories para Storybook
```

---

## 🔧 Props (Inputs)

### `title`
- **Tipo:** `string`
- **Default:** `'Integra CRM'`
- **Descripción:** Texto del título o logo mostrado en el header

```typescript
<storybook-app-header [title]="'Mi Aplicación'"></storybook-app-header>
```

### `showMenuButton`
- **Tipo:** `boolean`
- **Default:** `true`
- **Descripción:** Muestra u oculta el botón de menú hamburger

```typescript
<storybook-app-header [showMenuButton]="false"></storybook-app-header>
```

### `user`
- **Tipo:** `AppHeaderUser | undefined`
- **Default:** `undefined`
- **Descripción:** Objeto con información del usuario (name, avatarImage opcional)

```typescript
interface AppHeaderUser {
  name: string;
  avatarImage?: string;
}

<storybook-app-header 
  [user]="{ name: 'Yesica Palomino', avatarImage: 'https://...' }"
></storybook-app-header>
```

### `actionLabel`
- **Tipo:** `string`
- **Default:** `'Actualizar'`
- **Descripción:** Texto del botón de acción principal

```typescript
<storybook-app-header [actionLabel]="'Guardar'"></storybook-app-header>
```

---

## 🎯 Eventos (Outputs)

### `menuClick`
- **Tipo:** `EventEmitter<void>`
- **Descripción:** Emitido al hacer click en el botón de menú

```typescript
<storybook-app-header 
  (menuClick)="onMenuClick()"
></storybook-app-header>
```

### `notificationsClick`
- **Tipo:** `EventEmitter<void>`
- **Descripción:** Emitido al hacer click en el botón de notificaciones

```typescript
<storybook-app-header 
  (notificationsClick)="onNotificationsClick()"
></storybook-app-header>
```

### `actionClick`
- **Tipo:** `EventEmitter<void>`
- **Descripción:** Emitido al hacer click en el botón de acción

```typescript
<storybook-app-header 
  (actionClick)="onActionClick()"
></storybook-app-header>
```

---

## 💻 Uso en Código

### Ejemplo Básico

```typescript
import { Component } from '@angular/core';
import { AppHeaderComponent, AppHeaderUser } from './app-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppHeaderComponent],
  template: `
    <storybook-app-header
      [title]="'Dashboard'"
      [showMenuButton]="true"
      [user]="currentUser"
      [actionLabel]="'Actualizar'"
      (menuClick)="toggleSidebar()"
      (notificationsClick)="openNotifications()"
      (actionClick)="refresh()"
    ></storybook-app-header>
  `
})
export class AppComponent {
  currentUser: AppHeaderUser = {
    name: 'Yesica Palomino',
    avatarImage: ''
  };

  toggleSidebar() {
    console.log('Toggle sidebar');
  }

  openNotifications() {
    console.log('Open notifications');
  }

  refresh() {
    console.log('Refresh data');
  }
}
```

### Sin Usuario (Público)

```typescript
<storybook-app-header
  [title]="'Portal Público'"
  [showMenuButton]="false"
  [user]="undefined"
  [actionLabel]="'Iniciar Sesión'"
></storybook-app-header>
```

### Con Avatar Personalizado

```typescript
currentUser: AppHeaderUser = {
  name: 'Carlos Méndez',
  avatarImage: 'https://i.pravatar.cc/150?img=12'
};
```

---

## 🧩 Componentes Reutilizados

### Avatar Component
- **Ubicación:** `src/stories/avatar.component.ts`
- **Uso:** Mostrar el perfil del usuario
- **Config:** `size="sm"`, `type="default"`, `image` opcional

### Iconos SVG
- **Menu Icon** (lucide/text-align-justify): 19x19px
- **Bell Icon** (lucide/bell): 20x20px
- **Refresh Icon** (lucide/refresh-cw): 16x16px

Todos los iconos son renderizados mediante `DomSanitizer.bypassSecurityTrustHtml()` para evitar que Angular los bloquee por seguridad.

---

## 📱 Comportamiento Responsive

### Desktop (> 768px)
- Todos los elementos visibles
- Gaps completos (16px, 20px)
- Texto de botón de acción visible
- Nombre de usuario visible

### Tablet (≤ 768px)
- Gap reducido a 12px
- Título a 18px
- **Texto del botón de acción oculto** (solo icono)
- **Nombre de usuario oculto** (solo avatar)

### Mobile (≤ 480px)
- Padding reducido a 12px
- Título a 16px
- Gap mínimo (8px)
- Solo iconos en right section

---

## 🎭 Stories Disponibles

| Story | Descripción |
|-------|-------------|
| **Default** | Configuración completa con usuario |
| **WithAvatarImage** | Con imagen personalizada de avatar |
| **WithoutMenuButton** | Sin botón de menú |
| **WithoutUser** | Sin perfil de usuario (modo público) |
| **CustomActionLabel** | Con texto de acción personalizado |
| **LongTexts** | Stress test con textos largos |
| **Minimal** | Configuración mínima |
| **Interactive** | Para testing manual |

---

## 🔒 Restricciones Técnicas

### ✅ Compatible con Builder.io
- Todas las props son editables en Builder.io
- No usa lógica de estado compleja
- No depende de servicios externos

### ✅ No Maneja
- ❌ Autenticación de usuarios
- ❌ Estado global de la aplicación
- ❌ Navegación real (solo emite eventos)
- ❌ Peticiones HTTP

### ✅ Responsabilidades
- ✅ Layout y alineación
- ✅ Composición de componentes existentes
- ✅ Emisión de eventos de interacción
- ✅ Renderizado de iconos

---

## 🚀 Registro en Builder.io

### Ejemplo de Registro

```typescript
import { Builder } from '@builder.io/sdk';
import { AppHeaderComponent } from './app-header.component';

Builder.registerComponent(AppHeaderComponent, {
  name: 'AppHeader',
  inputs: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'Integra CRM',
      helperText: 'Título o logo de la aplicación'
    },
    {
      name: 'showMenuButton',
      type: 'boolean',
      defaultValue: true,
      helperText: 'Mostrar botón de menú hamburger'
    },
    {
      name: 'user',
      type: 'object',
      subFields: [
        {
          name: 'name',
          type: 'string',
          required: true
        },
        {
          name: 'avatarImage',
          type: 'file',
          allowedFileTypes: ['jpeg', 'png', 'svg', 'webp']
        }
      ],
      helperText: 'Información del usuario actual'
    },
    {
      name: 'actionLabel',
      type: 'string',
      defaultValue: 'Actualizar',
      helperText: 'Texto del botón de acción'
    }
  ]
});
```

---

## 🐛 Solución de Problemas

### Los iconos no se muestran
- ✅ **Solución**: Se usa `DomSanitizer.bypassSecurityTrustHtml()` en el método `getIconSvg()`
- Verificar que `DomSanitizer` está inyectado en el constructor

### El avatar no aparece
- ✅ **Solución**: Verificar que `AvatarComponent` está importado en el array `imports`
- Verificar que el prop `user` tiene la estructura correcta

### El layout no se alinea correctamente
- ✅ **Solución**: El componente usa `display: flex` con `justify-content: space-between`
- Verificar que no hay CSS externo sobrescribiendo los estilos

---

## 📚 Referencias

- [Componente SideNavbar](./SIDE_NAVBAR_SUMMARY.md) - Patrón de DomSanitizer
- [Componente Avatar](./AVATAR_README.md) - Reutilización de Avatar
- [Componente Button](./src/stories/button.component.ts) - Referencia de Button (no usado directamente pero parte del sistema)

---

## ✨ Mejoras Futuras

- [ ] Agregar badge de notificaciones con contador
- [ ] Soporte para múltiples acciones en right section
- [ ] Modo dark/light theme
- [ ] Animaciones de entrada/salida para dropdown de usuario
- [ ] Breadcrumbs integrados bajo el título

---

**Componente completado** ✅  
**Listo para uso en Builder.io** 🚀
