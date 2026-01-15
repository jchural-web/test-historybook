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
    <div>
      <button
        (click)="openStructure = !openStructure"
        style="padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;"
      >
        Abrir dialog
      </button>
      <bsg-dialog
        [open]="openStructure"
        size="md"
        headerTone="brand"
        [dismissible]="true"
        [hasFooter]="true"
        (closeDialog)="openStructure = false"
      >
        <div dialog-header>Título del Dialog</div>
        <div dialog-body>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <h5 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 600; color: #202020;">
                Estructura Completa
              </h5>
              <p style="margin: 0; color: #475569;">
                Este dialog muestra juntos el Header, Body y Footer.
              </p>
            </div>
            <ul style="margin: 0; padding-left: 20px; color: #475569;">
              <li>El header usa el atributo dialog-header para proyectar contenido</li>
              <li>El body usa el atributo dialog-body y puede contener cualquier contenido</li>
              <li>El footer usa el atributo dialog-footer para proyectar botones de acción</li>
            </ul>
          </div>
        </div>
        <div dialog-footer>
          <bsg-button
            variant="outline"
            size="md"
            label="Cancelar"
            (click)="openStructure = false"
          ></bsg-button>
          <bsg-button
            variant="default"
            size="md"
            label="Aceptar"
            (click)="openStructure = false"
          ></bsg-button>
        </div>
      </bsg-dialog>
    </div>
  `,
})
export class DialogStructureComponent {
  openStructure = false;
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
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">
          Default
        </h4>
        <button
          (click)="openDefault = !openDefault"
          style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;"
        >
          Abrir dialog
        </button>
        <bsg-dialog
          [open]="openDefault"
          size="sm"
          headerTone="brand"
          [dismissible]="true"
          (closeDialog)="openDefault = false"
        >
          <div dialog-header>Estado por Defecto</div>
          <div dialog-body>
            <p style="margin: 0; color: #475569;">
              Estado normal del Dialog. Puede cerrarse con ESC o haciendo clic fuera.
            </p>
          </div>
          <div dialog-footer>
            <bsg-button
              variant="destructive"
              size="md"
              label="Cerrar"
              (click)="openDefault = false"
            ></bsg-button>
          </div>
        </bsg-dialog>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">
          Scrollable
        </h4>
        <button
          (click)="openScrollable = !openScrollable"
          style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;"
        >
          Abrir dialog
        </button>
        <bsg-dialog
          [open]="openScrollable"
          size="md"
          headerTone="info"
          [scrollable]="true"
          [dismissible]="true"
          (closeDialog)="openScrollable = false"
        >
          <div dialog-header>Contenido Extenso con Scroll</div>
          <div dialog-body>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <p style="margin: 0; color: #475569;">
                Cuando el contenido es largo, usa scrollable="true".
              </p>
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
            <bsg-button
              variant="destructive"
              size="md"
              label="Cerrar"
              (click)="openScrollable = false"
            ></bsg-button>
          </div>
        </bsg-dialog>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">
          Acciones Deshabilitadas
        </h4>
        <button
          (click)="openDisabledActions = !openDisabledActions"
          style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;"
        >
          Abrir dialog
        </button>
        <bsg-dialog
          [open]="openDisabledActions"
          size="sm"
          headerTone="brand"
          [dismissible]="true"
          (closeDialog)="openDisabledActions = false"
        >
          <div dialog-header>Formulario Incompleto</div>
          <div dialog-body>
            <p style="margin: 0; color: #475569;">
              Los botones de acción pueden estar deshabilitados hasta que se cumplan ciertas
              condiciones.
            </p>
          </div>
          <div dialog-footer>
            <bsg-button
              variant="outline"
              size="md"
              label="Cancelar"
              (click)="openDisabledActions = false"
            ></bsg-button>
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
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">
          Confirmación de Acción
        </h4>
        <button
          (click)="openConfirmation = !openConfirmation"
          style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;"
        >
          Abrir dialog
        </button>
        <bsg-dialog
          [open]="openConfirmation"
          size="sm"
          headerTone="brand"
          [dismissible]="true"
          (closeDialog)="openConfirmation = false"
        >
          <div dialog-header>Confirmar solicitud</div>
          <div dialog-body>
            <p style="margin: 0; color: #475569; line-height: 1.5;">
              ¿Estás seguro de solicitar el beneficio para implementar y gestionar sistemas
              integrados?
            </p>
          </div>
          <div dialog-footer>
            <bsg-button
              variant="destructive"
              size="md"
              label="Cancelar"
              (click)="openConfirmation = false"
            ></bsg-button>
            <bsg-button variant="default" size="md" label="Aceptar" state="disabled"></bsg-button>
          </div>
        </bsg-dialog>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">
          Formulario de Datos
        </h4>
        <button
          (click)="openForm = !openForm"
          style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;"
        >
          Abrir dialog
        </button>
        <bsg-dialog
          [open]="openForm"
          size="md"
          headerTone="brand"
          [dismissible]="true"
          [scrollable]="false"
          (closeDialog)="openForm = false"
        >
          <div dialog-header>Registrar Nueva Solicitud</div>
          <div dialog-body>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <label
                  style="display: block; margin-bottom: 6px; font-size: 14px; font-weight: 500; color: #202020;"
                  >Nombre</label
                >
                <input
                  type="text"
                  placeholder="Ingrese nombre"
                  style="width: 100%; padding: 10px 14px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; box-sizing: border-box;"
                />
              </div>
              <div>
                <label
                  style="display: block; margin-bottom: 6px; font-size: 14px; font-weight: 500; color: #202020;"
                  >Tipo</label
                >
                <select
                  style="width: 100%; padding: 10px 14px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; box-sizing: border-box;"
                >
                  <option>Seleccione una opción</option>
                  <option>Sistemas Integrados</option>
                  <option>Infraestructura</option>
                </select>
              </div>
              <div>
                <label
                  style="display: block; margin-bottom: 6px; font-size: 14px; font-weight: 500; color: #202020;"
                  >Descripción</label
                >
                <textarea
                  placeholder="Describa"
                  rows="4"
                  style="width: 100%; padding: 10px 14px; border: 1px solid #CBD5E1; border-radius: 6px; font-size: 14px; box-sizing: border-box; resize: vertical;"
                ></textarea>
              </div>
            </div>
          </div>
          <div dialog-footer>
            <bsg-button
              variant="outline"
              size="md"
              label="Cancelar"
              (click)="openForm = false"
            ></bsg-button>
            <bsg-button
              variant="default"
              size="md"
              label="Guardar"
              (click)="openForm = false"
            ></bsg-button>
          </div>
        </bsg-dialog>
      </div>

      <div>
        <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: #202020;">
          Vista de Detalle
        </h4>
        <button
          (click)="openDetail = !openDetail"
          style="margin-bottom: 12px; padding: 8px 16px; background: #2563EB; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;"
        >
          Abrir dialog
        </button>
        <bsg-dialog
          [open]="openDetail"
          size="lg"
          headerTone="secondary"
          [dismissible]="true"
          [scrollable]="true"
          (closeDialog)="openDetail = false"
        >
          <div dialog-header>
            <div style="display: flex; align-items: center; gap: 12px;">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="14" cy="14" r="14" fill="#9333EA" />
                <g clip-path="url(#clip0_16_45)">
                  <path
                    d="M6.43155 0.706489C7.98492 0.461764 9.5751 0.757399 10.9372 1.54328C11.2361 1.71574 11.339 2.09761 11.1667 2.39655C10.9942 2.69553 10.6118 2.79794 10.3128 2.62543C9.19841 1.98247 7.89713 1.74105 6.62625 1.94123C5.35534 2.14146 4.19126 2.77145 3.32852 3.7259C2.4658 4.68039 1.95624 5.90196 1.88504 7.18659C1.81386 8.47126 2.18527 9.74185 2.93729 10.7858C3.6893 11.8297 4.77673 12.5845 6.01773 12.9239C7.25873 13.2633 8.57877 13.167 9.75736 12.6511C10.936 12.1351 11.9023 11.2303 12.4948 10.0882C13.0872 8.94616 13.2698 7.63549 13.013 6.37482C12.9441 6.03667 13.1625 5.70653 13.5006 5.63752C13.8389 5.5686 14.169 5.78699 14.2379 6.12519C14.5519 7.66608 14.328 9.26789 13.6038 10.6638C12.8796 12.0596 11.699 13.1655 10.2585 13.7961C8.818 14.4266 7.20487 14.5441 5.68814 14.1293C4.17132 13.7145 2.84201 12.7924 1.92288 11.5164C1.00377 10.2405 0.549897 8.68774 0.636872 7.11762C0.72387 5.54747 1.34693 4.05452 2.4014 2.88789C3.45585 1.72133 4.87821 0.951215 6.43155 0.706489ZM13.3084 2.05781C13.5525 1.81401 13.9482 1.81385 14.1922 2.05781C14.4362 2.30189 14.4362 2.69813 14.1922 2.94221L7.94217 9.19221C7.69818 9.43616 7.30247 9.436 7.05838 9.19221L5.18338 7.31721C4.9393 7.07313 4.9393 6.67689 5.18338 6.43281C5.42747 6.18901 5.82318 6.18885 6.06717 6.43281L7.50028 7.86591L13.3084 2.05781Z"
                    fill="white"
                    transform="translate(7, 7)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_16_45">
                    <rect width="15" height="15" fill="white" x="7" y="7" />
                  </clipPath>
                </defs>
              </svg>
              <span>Historial de mensajes</span>
            </div>
          </div>
          <div dialog-body style="padding: 0;">
            <!-- Tab Navigation -->
            <div style="display: flex; align-items: center; gap: 8px; padding: 20px 20px 0 20px;">
              <div
                style="padding: 11px 14px; background: #9333EA; color: #FFF; border-radius: 8px; font-size: 14px; font-weight: 500;"
              >
                Resumen
              </div>
              <div
                style="padding: 11px 14px; background: #FAF5FF; color: #9333EA; border-radius: 8px; font-size: 14px; font-weight: 500;"
              >
                Detalles
              </div>
              <div
                style="padding: 11px 14px; background: #FAF5FF; color: #9333EA; border-radius: 8px; font-size: 14px; font-weight: 500;"
              >
                Histórico
              </div>
              <div
                style="padding: 11px 14px; background: #FAF5FF; color: #9333EA; border-radius: 8px; font-size: 14px; font-weight: 500;"
              >
                Datos Personales
              </div>
            </div>

            <!-- Resumen Crediticio Section -->
            <div
              style="margin: 20px; padding: 18px; border: 1px solid #CBD5E1; border-radius: 12px; background: #FFF;"
            >
              <div
                style="padding: 20px 17px; background: #F3E8FF; border-radius: 12px 12px 0 0; margin: -18px -18px 0 -18px;"
              >
                <div style="font-size: 16px; font-weight: 600; color: #7C3AED;">
                  Resumen Crediticio
                </div>
              </div>
              <div
                style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 20px;"
              >
                <div
                  style="padding: 24px; background: #F1F5F9; border: 1px solid #F1F5F9; border-radius: 8px;"
                >
                  <div
                    style="font-size: 14px; font-weight: 500; color: #1E293B; margin-bottom: 16px;"
                  >
                    Calificación Actual
                  </div>
                  <div style="font-size: 24px; font-weight: 500; color: #16A34A;">Normal</div>
                </div>
                <div
                  style="padding: 24px; background: #F1F5F9; border: 1px solid #F1F5F9; border-radius: 8px;"
                >
                  <div
                    style="font-size: 14px; font-weight: 500; color: #1E293B; margin-bottom: 16px;"
                  >
                    Deuda Total
                  </div>
                  <div style="font-size: 24px; font-weight: 500; color: #16A34A;">S/. 3609.21</div>
                  <div style="font-size: 12px; font-weight: 500; color: #64748B; margin-top: 8px;">
                    Actualizado al 24/03/2025
                  </div>
                </div>
                <div
                  style="padding: 24px; background: #F1F5F9; border: 1px solid #F1F5F9; border-radius: 8px;"
                >
                  <div
                    style="font-size: 14px; font-weight: 500; color: #1E293B; margin-bottom: 16px;"
                  >
                    Entidades Financieras
                  </div>
                  <div style="font-size: 24px; font-weight: 500; color: #9333EA;">2</div>
                  <div style="font-size: 12px; font-weight: 500; color: #64748B; margin-top: 8px;">
                    Con deuda reportada
                  </div>
                </div>
              </div>
            </div>

            <!-- Semáforo Section -->
            <div
              style="margin: 20px; padding: 18px; border: 1px solid #CBD5E1; border-radius: 12px; background: #FFF;"
            >
              <div
                style="padding: 20px 17px; background: #F3E8FF; border-radius: 12px 12px 0 0; margin: -18px -18px 0 -18px;"
              >
                <div style="font-size: 16px; font-weight: 600; color: #7C3AED;">
                  Semáforo de los últimos 4 meses
                </div>
              </div>
              <div style="margin-top: 24px; text-align: center;">
                <div
                  style="display: flex; justify-content: center; gap: 24px; margin-bottom: 16px;"
                >
                  <svg
                    width="569"
                    height="17"
                    viewBox="0 0 569 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="32.9375" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="55.9375" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="79.9375" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="104.375" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="127.375" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="152.938" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="177.375" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="200.375" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="224.375" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="248.812" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="271.812" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="296.938" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="321.375" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="344.375" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="368.375" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="392.812" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="415.812" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="441.375" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="465.812" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="488.812" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="512.812" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="537.25" cy="8.5" r="8.5" fill="#16A34A" />
                    <circle cx="560.25" cy="8.5" r="8.5" fill="#16A34A" />
                  </svg>
                </div>
                <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;">
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#16A34A" />
                    </svg>
                    <span style="font-size: 14px; font-weight: 500; color: #1E293B;">Normal</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#2563EB" />
                    </svg>
                    <span style="font-size: 14px; font-weight: 500; color: #1E293B;">CPP</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#EAB308" />
                    </svg>
                    <span style="font-size: 14px; font-weight: 500; color: #1E293B;">Dudoso</span>
                  </div>
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#DC2626" />
                    </svg>
                    <span style="font-size: 14px; font-weight: 500; color: #1E293B;"
                      >Deficiente</span
                    >
                  </div>
                  <div style="display: flex; align-items: center; gap: 4px;">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#94A3B8" />
                    </svg>
                    <span style="font-size: 14px; font-weight: 500; color: #1E293B;"
                      >Sin información</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Detalle de la deuda Section -->
            <div
              style="margin: 20px; padding: 18px; border: 1px solid #CBD5E1; border-radius: 12px; background: #FFF;"
            >
              <div
                style="padding: 20px 17px; background: #F3E8FF; border-radius: 12px 12px 0 0; margin: -18px -18px 0 -18px;"
              >
                <div style="font-size: 16px; font-weight: 600; color: #7C3AED;">
                  Detalle de la deuda SBS/Microfinanzas
                </div>
              </div>
              <div style="margin-top: 20px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <thead>
                    <tr style="border-bottom: 1px solid #CBD5E1;">
                      <th
                        style="padding: 12px 18px; text-align: left; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        Entidad
                      </th>
                      <th
                        style="padding: 12px 18px; text-align: left; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        Calificación
                      </th>
                      <th
                        style="padding: 12px 18px; text-align: left; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        Monto
                      </th>
                      <th
                        style="padding: 12px 18px; text-align: left; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        Días Vencidos
                      </th>
                      <th
                        style="padding: 12px 18px; text-align: left; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        Fecha Reporte
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid #CBD5E1;">
                      <td
                        style="padding: 16px 18px; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        BCP
                      </td>
                      <td style="padding: 16px 18px;">
                        <span
                          style="display: inline-flex; padding: 10px 15px; background: #F0FDF4; color: #16A34A; border-radius: 9999px; font-size: 10px; font-weight: 600;"
                          >NOR</span
                        >
                      </td>
                      <td
                        style="padding: 16px 18px; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        S/ 2601.21
                      </td>
                      <td
                        style="padding: 16px 18px; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        0
                      </td>
                      <td
                        style="padding: 16px 18px; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        28/02/2025
                      </td>
                    </tr>
                    <tr>
                      <td
                        style="padding: 16px 18px; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        BCO FALABELLA PERÚ
                      </td>
                      <td style="padding: 16px 18px;">
                        <span
                          style="display: inline-flex; padding: 10px 15px; background: #F0FDF4; color: #16A34A; border-radius: 9999px; font-size: 10px; font-weight: 600;"
                          >NOR</span
                        >
                      </td>
                      <td
                        style="padding: 16px 18px; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        S/ 1000
                      </td>
                      <td
                        style="padding: 16px 18px; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        0
                      </td>
                      <td
                        style="padding: 16px 18px; font-size: 14px; font-weight: 500; color: #334155;"
                      >
                        28/02/2025
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Documento de Identidad Section -->
            <div
              style="margin: 20px; padding: 18px; border: 1px solid #CBD5E1; border-radius: 12px; background: #FFF;"
            >
              <div
                style="padding: 20px 17px; background: #F3E8FF; border-radius: 12px 12px 0 0; margin: -18px -18px 0 -18px;"
              >
                <div style="font-size: 16px; font-weight: 600; color: #7C3AED;">
                  Documento de Identidad Consultado
                </div>
              </div>
              <div
                style="margin-top: 20px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;"
              >
                <div style="font-size: 14px; font-weight: 500; color: #334155;">
                  <span style="color: #94A3B8;">Tipo de Documento:</span> D
                </div>
                <div style="font-size: 14px; font-weight: 500; color: #334155;">
                  <span style="color: #94A3B8;">Número de Documento:</span> 77137267
                </div>
                <div style="font-size: 14px; font-weight: 500; color: #334155;">
                  <span style="color: #94A3B8;">Nombre/Razón Social:</span> QUISPE MAMANI GILMER
                </div>
                <div style="font-size: 14px; font-weight: 500; color: #334155;">
                  <span style="color: #94A3B8;">Fecha de Consulta:</span> 24/03/2025
                </div>
              </div>
            </div>
          </div>
          <div dialog-footer>
            <bsg-button
              variant="destructive"
              size="md"
              label="Cerrar"
              (click)="openDetail = false"
            ></bsg-button>
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
      imports: [
        DialogComponent,
        ButtonComponent,
        CommonModule,
        DialogStructureComponent,
        DialogStatesComponent,
        DialogExamplesComponent,
      ],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean', description: 'Controls dialog visibility' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], description: 'Dialog size' },
    headerTone: {
      control: 'select',
      options: ['brand', 'info', 'secondary'],
      description: 'Header color theme',
    },
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
