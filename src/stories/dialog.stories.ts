import type { Meta, StoryObj } from '@storybook/angular';
import { Component, Injectable } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';

// ============================================================
// HELPER COMPONENT: Dialog Structure Story
// ============================================================

@Component({
  selector: 'app-dialog-structure',
  standalone: true,
  imports: [DialogComponent, ButtonComponent, CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Header</h4>
        <p style="margin: 0 0 16px 0; font-size: 13px; color: #64748B;">Contains the dialog title.</p>
        <button (click)="openHeader = !openHeader" style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
          Abrir dialog
        </button>
        <bsg-dialog [open]="openHeader" size="md" headerTone="brand" [dismissible]="false" [hasFooter]="false" (closeDialog)="openHeader = false">
          <div dialog-header>Título del Dialog</div>
          <div dialog-body><p style="margin: 0; color: #475569;">El header usa el atributo dialog-header para proyectar contenido.</p></div>
        </bsg-dialog>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Body</h4>
        <p style="margin: 0 0 16px 0; font-size: 13px; color: #64748B;">Main content area.</p>
        <button (click)="openBody = !openBody" style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
          Abrir dialog
        </button>
        <bsg-dialog [open]="openBody" size="md" headerTone="brand" [dismissible]="false" [hasFooter]="false" (closeDialog)="openBody = false">
          <div dialog-header>Contenido Principal</div>
          <div dialog-body>
            <p style="margin: 0 0 12px 0; color: #475569;">El body usa el atributo dialog-body y puede contener cualquier contenido.</p>
            <ul style="margin: 0; padding-left: 20px; color: #475569;">
              <li>Texto y párrafos</li>
              <li>Formularios</li>
              <li>Tablas</li>
            </ul>
          </div>
        </bsg-dialog>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Footer</h4>
        <p style="margin: 0 0 16px 0; font-size: 13px; color: #64748B;">Action buttons area.</p>
        <button (click)="openFooter = !openFooter" style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
          Abrir dialog
        </button>
        <bsg-dialog [open]="openFooter" size="md" headerTone="brand" [dismissible]="false" [hasFooter]="true" (closeDialog)="openFooter = false">
          <div dialog-header>Acciones del Dialog</div>
          <div dialog-body><p style="margin: 0; color: #475569;">El footer usa el atributo dialog-footer para proyectar botones de acción.</p></div>
          <div dialog-footer>
            <bsg-button variant="outline" size="md" label="Cancelar" (click)="openFooter = false"></bsg-button>
            <bsg-button variant="default" size="md" label="Aceptar" (click)="openFooter = false"></bsg-button>
          </div>
        </bsg-dialog>
      </div>
    </div>
  `,
})
export class DialogStructureComponent {
  openHeader = false;
  openBody = false;
  openFooter = false;
}

// ============================================================
// HELPER COMPONENT: Dialog States Story
// ============================================================

@Component({
  selector: 'app-dialog-states',
  standalone: true,
  imports: [DialogComponent, ButtonComponent, CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Default</h4>
        <button (click)="openDefault = !openDefault" style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
          Abrir dialog
        </button>
        <bsg-dialog [open]="openDefault" size="sm" headerTone="brand" [dismissible]="true" (closeDialog)="openDefault = false">
          <div dialog-header>Estado por Defecto</div>
          <div dialog-body><p style="margin: 0; color: #475569;">Estado normal del Dialog. Puede cerrarse con ESC o haciendo clic fuera.</p></div>
          <div dialog-footer>
            <bsg-button variant="destructive" size="md" label="Cerrar" (click)="openDefault = false"></bsg-button>
          </div>
        </bsg-dialog>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Scrollable</h4>
        <button (click)="openScrollable = !openScrollable" style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
          Abrir dialog
        </button>
        <bsg-dialog [open]="openScrollable" size="md" headerTone="info" [scrollable]="true" [dismissible]="true" (closeDialog)="openScrollable = false">
          <div dialog-header>Contenido Extenso con Scroll</div>
          <div dialog-body>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <p style="margin: 0; color: #475569;">Cuando el contenido es largo, usa scrollable="true".</p>
              <div style="padding: 16px; background: #F1F5F9; border-radius: 8px;">
                <h5 style="margin: 0 0 8px 0; color: #1E293B;">Sección 1</h5>
                <p style="margin: 0; color: #64748B; font-size: 13px;">Contenido...</p>
              </div>
              <div style="padding: 16px; background: #F1F5F9; border-radius: 8px;">
                <h5 style="margin: 0 0 8px 0; color: #1E293B;">Sección 2</h5>
                <p style="margin: 0; color: #64748B; font-size: 13px;">Más contenido...</p>
              </div>
              <div style="padding: 16px; background: #F1F5F9; border-radius: 8px;">
                <h5 style="margin: 0 0 8px 0; color: #1E293B;">Sección 3</h5>
                <p style="margin: 0; color: #64748B; font-size: 13px;">Más...</p>
              </div>
              <div style="padding: 16px; background: #F1F5F9; border-radius: 8px;">
                <h5 style="margin: 0 0 8px 0; color: #1E293B;">Sección 4</h5>
                <p style="margin: 0; color: #64748B; font-size: 13px;">Fin.</p>
              </div>
            </div>
          </div>
          <div dialog-footer>
            <bsg-button variant="destructive" size="md" label="Cerrar" (click)="openScrollable = false"></bsg-button>
          </div>
        </bsg-dialog>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Acciones Deshabilitadas</h4>
        <button (click)="openDisabledActions = !openDisabledActions" style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
          Abrir dialog
        </button>
        <bsg-dialog [open]="openDisabledActions" size="sm" headerTone="brand" [dismissible]="true" (closeDialog)="openDisabledActions = false">
          <div dialog-header>Formulario Incompleto</div>
          <div dialog-body><p style="margin: 0; color: #475569;">Los botones de acción pueden estar deshabilitados hasta que se cumplan ciertas condiciones.</p></div>
          <div dialog-footer>
            <bsg-button variant="outline" size="md" label="Cancelar" (click)="openDisabledActions = false"></bsg-button>
            <bsg-button variant="default" size="md" label="Guardar" state="disabled"></bsg-button>
          </div>
        </bsg-dialog>
      </div>
    </div>
  `,
})
export class DialogStatesComponent {
  openDefault = false;
  openScrollable = false;
  openDisabledActions = false;
}

// ============================================================
// HELPER COMPONENT: Dialog Examples Story
// ============================================================

@Component({
  selector: 'app-dialog-examples',
  standalone: true,
  imports: [DialogComponent, ButtonComponent, CommonModule],
  template: `
    <div style="display: flex; flex-direction: column; gap: 32px;">
      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Confirmación de Acción</h4>
        <button (click)="openConfirmation = !openConfirmation" style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
          Abrir dialog
        </button>
        <bsg-dialog [open]="openConfirmation" size="sm" headerTone="brand" [dismissible]="true" (closeDialog)="openConfirmation = false">
          <div dialog-header>Confirmar solicitud</div>
          <div dialog-body><p style="margin: 0; color: #475569; line-height: 1.5;">¿Estás seguro de solicitar el beneficio para implementar y gestionar sistemas integrados?</p></div>
          <div dialog-footer>
            <bsg-button variant="destructive" size="md" label="Cancelar" (click)="openConfirmation = false"></bsg-button>
            <bsg-button variant="default" size="md" label="Aceptar" state="disabled"></bsg-button>
          </div>
        </bsg-dialog>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Formulario de Datos</h4>
        <button (click)="openForm = !openForm" style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
          Abrir dialog
        </button>
        <bsg-dialog [open]="openForm" size="md" headerTone="brand" [dismissible]="true" [scrollable]="false" (closeDialog)="openForm = false">
          <div dialog-header>Registrar Nueva Solicitud</div>
          <div dialog-body>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <label style="display: block; margin-bottom: 6px; font-size: 14px; font-weight: 500; color: #202020;">Nombre</label>
                <input type="text" placeholder="Ingrese nombre" style="width: 100%; padding: 10px 14px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; box-sizing: border-box;" />
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; font-size: 14px; font-weight: 500; color: #202020;">Tipo</label>
                <select style="width: 100%; padding: 10px 14px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; box-sizing: border-box;">
                  <option>Seleccione una opción</option>
                  <option>Sistemas Integrados</option>
                  <option>Infraestructura</option>
                </select>
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; font-size: 14px; font-weight: 500; color: #202020;">Descripción</label>
                <textarea placeholder="Describa" rows="4" style="width: 100%; padding: 10px 14px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; box-sizing: border-box; resize: vertical;"></textarea>
              </div>
            </div>
          </div>
          <div dialog-footer>
            <bsg-button variant="outline" size="md" label="Cancelar" (click)="openForm = false"></bsg-button>
            <bsg-button variant="default" size="md" label="Guardar" (click)="openForm = false"></bsg-button>
          </div>
        </bsg-dialog>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">Vista de Detalle</h4>
        <button (click)="openDetail = !openDetail" style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">
          Abrir dialog
        </button>
        <bsg-dialog [open]="openDetail" size="lg" headerTone="secondary" [dismissible]="true" [scrollable]="true" (closeDialog)="openDetail = false">
          <div dialog-header>
            <div style="display: flex; align-items: center; gap: 12px;">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="14" r="14" fill="#9333EA"/>
                <path d="M14 8V14M14 18H14.01M22 14C22 18.4183 18.4183 22 14 22C9.58172 22 6 18.4183 6 14C6 9.58172 9.58172 6 14 6C18.4183 6 22 9.58172 22 14Z" stroke="white" stroke-width="2"/>
              </svg>
              <span>Historial de mensajes</span>
            </div>
          </div>
          <div dialog-body>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div style="display: flex; gap: 8px; border-bottom: 1px solid #E2E8F0; padding-bottom: 12px;">
                <div style="padding: 8px 16px; background: #9333EA; color: white; border-radius: 8px; font-size: 14px; font-weight: 500;">Resumen</div>
                <div style="padding: 8px 16px; background: #FAF5FF; color: #9333EA; border-radius: 8px; font-size: 14px; font-weight: 500;">Detalles</div>
              </div>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; padding: 16px; background: #F3E8FF; border-radius: 12px;">
                <div style="padding: 16px; background: #F1F5F9; border-radius: 8px;">
                  <div style="font-size: 12px; color: #64748B;">Calificación</div>
                  <div style="font-size: 20px; font-weight: 500; color: #16A34A;">Normal</div>
                </div>
                <div style="padding: 16px; background: #F1F5F9; border-radius: 8px;">
                  <div style="font-size: 12px; color: #64748B;">Deuda Total</div>
                  <div style="font-size: 20px; font-weight: 500; color: #16A34A;">S/. 3,609.21</div>
                </div>
              </div>
            </div>
          </div>
          <div dialog-footer>
            <bsg-button variant="destructive" size="md" label="Cerrar" (click)="openDetail = false"></bsg-button>
          </div>
        </bsg-dialog>
      </div>
    </div>
  `,
})
export class DialogExamplesComponent {
  openConfirmation = false;
  openForm = false;
  openDetail = false;
}

// ============================================================
// STORYBOOK META & STORIES
// ============================================================

const meta: Meta<DialogComponent> = {
  title: 'Example/Dialog',
  component: DialogComponent,
  decorators: [
    moduleMetadata({
      imports: [DialogComponent, ButtonComponent, CommonModule, DialogStructureComponent, DialogStatesComponent, DialogExamplesComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: 'Controls dialog visibility' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Dialog size' },
    headerTone: { control: 'select', options: ['brand', 'info', 'secondary'], description: 'Header color theme' },
    scrollable: { control: 'boolean', description: 'Enable scrollable body' },
    dismissible: { control: 'boolean', description: 'Allow dismissing via ESC or backdrop click' },
    hasFooter: { control: 'boolean', description: 'Show footer section' },
  },
  args: {
    open: false,
    size: 'md',
    headerTone: 'brand',
    scrollable: false,
    dismissible: true,
    hasFooter: true,
  },
};

export default meta;
type Story = StoryObj<DialogComponent>;

/**
 * Dialog structure showing all internal slots
 */
export const Structure: Story = {
  render: () => ({
    component: DialogStructureComponent,
    template: '<app-dialog-structure></app-dialog-structure>',
  }),
};

/**
 * Dialog states: default, scrollable, and disabled actions
 */
export const States: Story = {
  render: () => ({
    component: DialogStatesComponent,
    template: '<app-dialog-states></app-dialog-states>',
  }),
};

/**
 * Real-world Dialog examples
 */
export const Examples: Story = {
  render: () => ({
    component: DialogExamplesComponent,
    template: '<app-dialog-examples></app-dialog-examples>',
  }),
};
