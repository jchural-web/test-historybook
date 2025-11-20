import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderBarComponent, HeaderAction } from '../header-bar/header-bar.component';
import { SidebarMenuComponent, SidebarModule } from '../sidebar-menu/sidebar-menu.component';
import { PerformanceCardComponent } from '../performance-card/performance-card.component';
import { NavigationTabsComponent } from '../navigation-tabs/navigation-tabs.component';
import { ActividadesTableWithPaginationComponent } from '../actividades-table/actividades-table-with-pagination.component';
import { ActividadRow } from '../actividades-table/actividades-table.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { GeneralButtonComponent } from '../general-button/general-button.component';

@Component({
  selector: 'app-crm-page',
  standalone: true,
  imports: [
    CommonModule,
    HeaderBarComponent,
    SidebarMenuComponent,
    PerformanceCardComponent,
    NavigationTabsComponent,
    ActividadesTableWithPaginationComponent,
    SearchBarComponent,
    GeneralButtonComponent,
  ],
  templateUrl: './crm-page.component.html',
  styleUrls: ['./crm-page.component.css'],
})
export class CrmPageComponent {
  isSidebarExpanded: boolean = false;
  searchValue: string = '';

  headerActions: HeaderAction[] = [
    {
      label: 'Wavix',
      icon: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6_121)"><path d="M5 2.5C5 2.33424 4.9341 2.17532 4.81689 2.05811C4.7143 1.95552 4.57977 1.89223 4.43665 1.87805L4.375 1.875H2.5C2.33424 1.875 2.17532 1.9409 2.05811 2.05811C1.9409 2.17532 1.875 2.33424 1.875 2.5C1.875 5.31792 2.99461 8.02024 4.98718 10.0128C6.97976 12.0054 9.68207 13.125 12.5 13.125C12.6658 13.125 12.8247 13.0591 12.9419 12.9419C13.0591 12.8247 13.125 12.6658 13.125 12.5V10.625C13.125 10.4592 13.0591 10.3003 12.9419 10.1831C12.8247 10.0659 12.6658 10 12.5 10H10.625C10.528 10 10.4322 10.0225 10.3455 10.0659C10.2587 10.1093 10.1833 10.1726 10.1251 10.2502L10.1221 10.2545L9.8999 10.5438C9.72786 10.7698 9.48452 10.9309 9.20898 10.9998C8.93343 11.0686 8.64252 11.0414 8.3844 10.9229C8.37957 10.9206 8.37452 10.9185 8.36975 10.9161C6.50982 10.0033 5.00455 8.5 4.08936 6.64124L4.08813 6.63879C3.96168 6.37934 3.92889 6.0841 3.99536 5.80322C4.06189 5.52229 4.22368 5.27288 4.45312 5.09766L4.4574 5.0946L4.74976 4.87488C4.82738 4.81666 4.89069 4.74133 4.93408 4.65454C4.97747 4.56776 5 4.47203 5 4.375V2.5ZM6.25 4.375C6.25 4.66608 6.18242 4.95327 6.05225 5.21362C5.92207 5.47398 5.73275 5.70059 5.49988 5.87524L5.21118 6.0907C6.00198 7.696 7.30103 8.99479 8.90564 9.78638L9.12476 9.50012L9.19312 9.41467C9.357 9.22079 9.55863 9.06163 9.78638 8.94775C10.0467 8.81758 10.3339 8.75 10.625 8.75H12.5C12.9973 8.75 13.4741 8.94769 13.8257 9.29932C14.1773 9.65095 14.375 10.1277 14.375 10.625V12.5C14.375 12.9973 14.1773 13.4741 13.8257 13.8257C13.4741 14.1773 12.9973 14.375 12.5 14.375C9.35055 14.375 6.33039 13.1236 4.10339 10.8966C1.8764 8.66961 0.625 5.64945 0.625 2.5C0.625 2.00272 0.822686 1.52595 1.17432 1.17432C1.52595 0.822686 2.00272 0.625 2.5 0.625H4.375C4.87228 0.625 5.34905 0.822686 5.70068 1.17432C6.05231 1.52595 6.25 2.00272 6.25 2.5V4.375Z" fill="white"/></g><defs><clipPath id="clip0_6_121"><rect width="15" height="15" fill="white"/></clipPath></defs></svg>',
    },
    {
      label: 'Actualizar',
      icon: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 13.125V10C1.25 9.65482 1.52982 9.375 1.875 9.375H5C5.34518 9.375 5.625 9.65482 5.625 10C5.625 10.3452 5.34518 10.625 5 10.625H3.38379L3.72192 10.9631L3.91602 11.142C4.90577 12.0105 6.17857 12.4941 7.50122 12.4994C8.82686 12.4991 10.0984 11.9732 11.0358 11.0358C11.9734 10.0981 12.5 8.82608 12.5 7.5C12.5 7.15482 12.7798 6.875 13.125 6.875C13.4702 6.875 13.75 7.15482 13.75 7.5C13.75 9.1576 13.0917 10.7475 11.9196 11.9196C10.7475 13.0917 9.1576 13.75 7.5 13.75H7.49756C5.87203 13.7439 4.30776 13.1487 3.09143 12.0813L2.84546 11.8542L2.5 11.5088V13.125C2.5 13.4702 2.22018 13.75 1.875 13.75C1.52982 13.75 1.25 13.4702 1.25 13.125ZM1.25 7.5C1.25 5.8424 1.90834 4.25255 3.08044 3.08044C4.25255 1.90834 5.8424 1.25 7.5 1.25H7.50244L7.82654 1.25916C9.33493 1.33767 10.7733 1.92241 11.9086 2.9187L12.1545 3.14575L12.5 3.49121V1.875C12.5 1.52982 12.7798 1.25 13.125 1.25C13.4702 1.25 13.75 1.52982 13.75 1.875V5C13.75 5.34518 13.4702 5.625 13.125 5.625H10C9.65482 5.625 9.375 5.34518 9.375 5C9.375 4.65482 9.65482 4.375 10 4.375H11.6162L11.2781 4.03687L11.084 3.85803C10.0941 2.98938 8.82104 2.5051 7.49817 2.5C6.17275 2.50048 4.90148 3.02698 3.96423 3.96423C3.02655 4.90192 2.5 6.17392 2.5 7.5C2.5 7.84518 2.22018 8.125 1.875 8.125C1.52982 8.125 1.25 7.84518 1.25 7.5Z" fill="white"/></svg>',
    },
  ];

  sidebarModules: SidebarModule[] = [
    {
      icon: 'folder',
      label: 'Comercial',
      hasChildren: true,
    },
    {
      icon: 'award',
      label: 'Gestión Del Desempeño',
      hasChildren: true,
    },
    {
      icon: 'headset',
      label: 'Atención al Cliente',
      hasChildren: true,
    },
    {
      icon: 'users',
      label: 'Clientes',
      badgeCount: 12,
    },
    {
      icon: 'book-open',
      label: 'Cursos',
      badgeCount: 8,
    },
    {
      icon: 'settings',
      label: 'Configuración',
      badgeCount: 2,
    },
  ];

  performanceCards = [
    {
      title: 'Actividades Totales',
      value: 21,
      percent: 15.2,
      icon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6_31)"><path d="M6 3C6 2.80109 5.92093 2.61038 5.78027 2.46973C5.65717 2.34662 5.49572 2.27068 5.32397 2.25366L5.25 2.25H3C2.80109 2.25 2.61038 2.32907 2.46973 2.46973C2.32907 2.61038 2.25 2.80109 2.25 3C2.25 6.38151 3.59353 9.62429 5.98462 12.0154C8.37571 14.4065 11.6185 15.75 15 15.75C15.1989 15.75 15.3896 15.6709 15.5303 15.5303C15.6709 15.3896 15.75 15.1989 15.75 15V12.75C15.75 12.5511 15.6709 12.3604 15.5303 12.2197C15.3896 12.0791 15.1989 12 15 12H12.75C12.6336 12 12.5187 12.027 12.4146 12.0791C12.3104 12.1312 12.22 12.2071 12.1501 12.3003L12.1465 12.3054L11.8799 12.6526C11.6734 12.9238 11.3814 13.1171 11.0508 13.1997C10.7201 13.2823 10.371 13.2496 10.0613 13.1074C10.0555 13.1048 10.0494 13.1022 10.0437 13.0994C7.81179 12.004 6.00546 10.2 4.90723 7.96948L4.90576 7.96655C4.75401 7.65521 4.71466 7.30091 4.79443 6.96387C4.87427 6.62675 5.06841 6.32745 5.34375 6.11719L5.34888 6.11353L5.69971 5.84985C5.79285 5.77999 5.86883 5.68959 5.9209 5.58545C5.97297 5.48131 6 5.36643 6 5.25V3ZM7.5 5.25C7.5 5.5993 7.41891 5.94392 7.2627 6.25635C7.10648 6.56877 6.87929 6.84071 6.59985 7.05029L6.25342 7.30884C7.20238 9.2352 8.76123 10.7938 10.6868 11.7437L10.9497 11.4001L11.0317 11.2976C11.2284 11.0649 11.4704 10.874 11.7437 10.7373C12.0561 10.5811 12.4007 10.5 12.75 10.5H15C15.5967 10.5 16.1689 10.7372 16.5908 11.1592C17.0128 11.5811 17.25 12.1533 17.25 12.75V15C17.25 15.5967 17.0128 16.1689 16.5908 16.5908C16.1689 17.0128 15.5967 17.25 15 17.25C11.2207 17.25 7.59647 15.7483 4.92407 13.0759C2.25168 10.4035 0.75 6.77934 0.75 3C0.75 2.40326 0.987223 1.83114 1.40918 1.40918C1.83114 0.987223 2.40326 0.75 3 0.75H5.25C5.84674 0.75 6.41886 0.987223 6.84082 1.40918C7.26278 1.83114 7.5 2.40326 7.5 3V5.25Z" fill="#9333EA"/></g><defs><clipPath id="clip0_6_31"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>',
      iconColor: '#9333EA',
    },
    {
      title: 'Actividades Ejecutadas',
      value: 5,
      percent: 8.3,
      icon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 14.25V3.75C1.5 3.15326 1.73722 2.58114 2.15918 2.15918C2.58114 1.73722 3.15326 1.5 3.75 1.5H13.0078C13.422 1.5 13.7578 1.83579 13.7578 2.25C13.7578 2.66421 13.422 3 13.0078 3H3.75C3.55109 3 3.36038 3.07907 3.21973 3.21973C3.07907 3.36038 3 3.55109 3 3.75V14.25C3 14.4489 3.07907 14.6396 3.21973 14.7803C3.36038 14.9209 3.55109 15 3.75 15H14.25C14.4489 15 14.6396 14.9209 14.7803 14.7803C14.9209 14.6396 15 14.4489 15 14.25V7.99219C15 7.57797 15.3358 7.24219 15.75 7.24219C16.1642 7.24219 16.5 7.57797 16.5 7.99219V14.25C16.5 14.8467 16.2628 15.4189 15.8408 15.8408C15.4189 16.2628 14.8467 16.5 14.25 16.5H3.75C3.15326 16.5 2.58114 16.2628 2.15918 15.8408C1.73722 15.4189 1.5 14.8467 1.5 14.25ZM15.9697 2.46973C16.2626 2.17683 16.7374 2.17683 17.0303 2.46973C17.3232 2.76262 17.3232 3.23738 17.0303 3.53027L9.53027 11.0303C9.23738 11.3232 8.76262 11.3232 8.46973 11.0303L6.21973 8.78027C5.92683 8.48738 5.92683 8.01262 6.21973 7.71973C6.51262 7.42683 6.98738 7.42683 7.28027 7.71973L9 9.43945L15.9697 2.46973Z" fill="#3B82F6"/></svg>',
      iconColor: '#3B82F6',
    },
    {
      title: 'ITs Generados',
      value: 1,
      percent: 8.3,
      icon: '<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.375 15.8333V3.16666C2.375 2.53678 2.6254 1.93286 3.0708 1.48746C3.5162 1.04207 4.12011 0.791664 4.75 0.791664H11.0833V0.792437C11.4379 0.792031 11.7894 0.860811 12.117 0.996539C12.4445 1.13226 12.7418 1.33157 12.9921 1.58256L15.831 4.42142L15.923 4.51729C16.1321 4.74671 16.3001 5.01086 16.4194 5.29813C16.5555 5.62614 16.6254 5.97821 16.625 6.33333V15.8333C16.625 16.4632 16.3746 17.0671 15.9292 17.5125C15.4838 17.9579 14.8799 18.2083 14.25 18.2083H4.75C4.12011 18.2083 3.5162 17.9579 3.0708 17.5125C2.6254 17.0671 2.375 16.4632 2.375 15.8333ZM12.6667 12.6667C13.1039 12.6667 13.4583 13.0211 13.4583 13.4583C13.4583 13.8956 13.1039 14.25 12.6667 14.25H6.33333C5.89611 14.25 5.54167 13.8956 5.54167 13.4583C5.54167 13.0211 5.89611 12.6667 6.33333 12.6667H12.6667ZM12.6667 9.5C13.1039 9.5 13.4583 9.85444 13.4583 10.2917C13.4583 10.7289 13.1039 11.0833 12.6667 11.0833H6.33333C5.89611 11.0833 5.54167 10.7289 5.54167 10.2917C5.54167 9.85444 5.89611 9.5 6.33333 9.5H12.6667ZM7.91667 6.33333C8.35389 6.33333 8.70833 6.68777 8.70833 7.125C8.70833 7.56222 8.35389 7.91666 7.91667 7.91666H6.33333C5.89611 7.91666 5.54167 7.56222 5.54167 7.125C5.54167 6.68777 5.89611 6.33333 6.33333 6.33333H7.91667ZM14.7123 5.54166L11.875 2.70434V5.54166H14.7123ZM3.95833 15.8333C3.95833 16.0433 4.0418 16.2446 4.19027 16.3931C4.33873 16.5415 4.54004 16.625 4.75 16.625H14.25C14.46 16.625 14.6613 16.5415 14.8097 16.3931C14.9582 16.2446 15.0417 16.0433 15.0417 15.8333V7.125H11.875C11.4551 7.125 11.0525 6.95806 10.7555 6.66113C10.4586 6.3642 10.2917 5.96159 10.2917 5.54166V2.375H4.75C4.54004 2.375 4.33873 2.45847 4.19027 2.60693C4.0418 2.7554 3.95833 2.9567 3.95833 3.16666V15.8333Z" fill="#22C55E"/></svg>',
      iconColor: '#22C55E',
    },
    {
      title: 'IPs Generados',
      value: 0,
      percent: 0.0,
      icon: '<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.375 15.8333V3.16666C2.375 2.53678 2.6254 1.93286 3.0708 1.48746C3.5162 1.04207 4.12011 0.791664 4.75 0.791664H11.0833V0.792437C11.4379 0.792031 11.7894 0.860811 12.117 0.996539C12.4445 1.13226 12.7418 1.33157 12.9921 1.58256L15.831 4.42142L15.923 4.51729C16.1321 4.74671 16.3001 5.01086 16.4194 5.29813C16.5555 5.62614 16.6254 5.97821 16.625 6.33333V15.8333C16.625 16.4632 16.3746 17.0671 15.9292 17.5125C15.4838 17.9579 14.8799 18.2083 14.25 18.2083H4.75C4.12011 18.2083 3.5162 17.9579 3.0708 17.5125C2.6254 17.0671 2.375 16.4632 2.375 15.8333ZM12.6667 12.6667C13.1039 12.6667 13.4583 13.0211 13.4583 13.4583C13.4583 13.8956 13.1039 14.25 12.6667 14.25H6.33333C5.89611 14.25 5.54167 13.8956 5.54167 13.4583C5.54167 13.0211 5.89611 12.6667 6.33333 12.6667H12.6667ZM12.6667 9.5C13.1039 9.5 13.4583 9.85444 13.4583 10.2917C13.4583 10.7289 13.1039 11.0833 12.6667 11.0833H6.33333C5.89611 11.0833 5.54167 10.7289 5.54167 10.2917C5.54167 9.85444 5.89611 9.5 6.33333 9.5H12.6667ZM7.91667 6.33333C8.35389 6.33333 8.70833 6.68777 8.70833 7.125C8.70833 7.56222 8.35389 7.91666 7.91667 7.91666H6.33333C5.89611 7.91666 5.54167 7.56222 5.54167 7.125C5.54167 6.68777 5.89611 6.33333 6.33333 6.33333H7.91667ZM14.7123 5.54166L11.875 2.70434V5.54166H14.7123ZM3.95833 15.8333C3.95833 16.0433 4.0418 16.2446 4.19027 16.3931C4.33873 16.5415 4.54004 16.625 4.75 16.625H14.25C14.46 16.625 14.6613 16.5415 14.8097 16.3931C14.9582 16.2446 15.0417 16.0433 15.0417 15.8333V7.125H11.875C11.4551 7.125 11.0525 6.95806 10.7555 6.66113C10.4586 6.3642 10.2917 5.96159 10.2917 5.54166V2.375H4.75C4.54004 2.375 4.33873 2.45847 4.19027 2.60693C4.0418 2.7554 3.95833 2.9567 3.95833 3.16666V15.8333Z" fill="#F59E0B"/></svg>',
      iconColor: '#F59E0B',
    },
  ];

  navigationTabs = [
    {
      label: 'Contacto Entrante',
      count: 1,
      color: 'blue' as const,
      variant: 'solid' as const,
      isActive: true,
    },
    {
      label: 'Prog. Automaticas',
      count: 0,
      color: 'gray' as const,
      variant: 'soft' as const,
      isActive: false,
    },
    {
      label: 'Prog. Manuales',
      count: 5,
      color: 'blue' as const,
      variant: 'soft' as const,
      isActive: false,
    },
    {
      label: 'No Prog. 1 Solicitud',
      count: 0,
      color: 'gray' as const,
      variant: 'soft' as const,
      isActive: false,
    },
    {
      label: 'No Prog. +1 Solicitudes',
      count: 0,
      color: 'gray' as const,
      variant: 'soft' as const,
      isActive: false,
    },
    {
      label: 'Altas y Medias',
      count: 9,
      color: 'blue' as const,
      variant: 'soft' as const,
      isActive: false,
    },
    {
      label: 'Vencidas [IP, IC, PF]',
      count: 9,
      color: 'green' as const,
      variant: 'soft' as const,
      isActive: false,
    },
    {
      label: 'Vencidas [IS, M]',
      count: 9,
      color: 'green' as const,
      variant: 'soft' as const,
      isActive: false,
    },
    {
      label: 'Realizadas',
      count: 0,
      color: 'gray' as const,
      variant: 'soft' as const,
      isActive: false,
    },
    {
      label: 'Pre-Lanzamiento',
      count: 6,
      color: 'orange' as const,
      variant: 'soft' as const,
      isActive: false,
    },
    { label: 'RN2-B', count: 0, color: 'gray' as const, variant: 'soft' as const, isActive: false },
    { label: 'RN2-A', count: 0, color: 'gray' as const, variant: 'soft' as const, isActive: false },
    {
      label: 'Venta Cruzada',
      count: 0,
      color: 'gray' as const,
      variant: 'soft' as const,
      isActive: false,
    },
  ];

  actividadesData: ActividadRow[] = [
    {
      actividad: 'Consulta inicial',
      oportunidad: {
        etiqueta: 'Alta',
        nombre: 'Carlos Mendoza',
        programa: 'LEAN SSSB ONLINE 2024 II LIMA',
        fase: 'BNC',
        categoria: 'Facebook Chat',
        categoriaColor: '#2563EB',
      },
      mensajeEtiqueta: 'Correos',
      mensajeTexto: 'Solicita información sobre costos y modalidades disponibles',
      fecha: '17/04/2025',
      hora: '2:30 PM',
      indicadorColor: 'green',
      botonEjecutar: { label: 'Ejecutar', color: 'green' },
    },
    {
      actividad: 'Solicitud de información',
      oportunidad: {
        etiqueta: 'Alta',
        nombre: 'Ana María Gutiérrez',
        programa: 'D SIG ONLINE 2025 II LIMA',
        fase: 'BNC',
        categoria: 'Whatsapp Rpta - Mailing',
        categoriaColor: '#E32626',
      },
      mensajeEtiqueta: 'Portal Web',
      mensajeTexto: 'Interesada en conocer fechas de inicio y requisitos de admisión',
      fecha: '17/04/2025',
      hora: '11:45 AM',
      indicadorColor: 'yellow',
      botonEjecutar: { label: 'Ejecutar', color: 'yellow' },
    },
    {
      actividad: 'Consulta de precios',
      oportunidad: {
        etiqueta: 'Alta',
        nombre: 'Roberto Sánchez',
        programa: 'LEAN SSSB AONLINE 2025 I BOGOTA',
        fase: 'BNC',
        categoria: 'Whatsapp Chat Bases Propias',
        categoriaColor: '#5AA34A',
      },
      mensajeEtiqueta: 'WhatsApp',
      mensajeTexto: 'Pregunta por descuentos corporativos para grupo de 5 personas',
      fecha: '16/04/2025',
      hora: '6:20 PM',
      indicadorColor: 'red',
      botonEjecutar: { label: 'Ejecutar', color: 'red' },
    },
    {
      actividad: 'Solicitud de entrevista',
      oportunidad: {
        etiqueta: 'Alta',
        nombre: 'Patricia Flores',
        programa: 'D SIG ONLINE 2025 II LIMA',
        fase: 'BNC',
        categoria: 'Whatsapp Rpta - Mailing',
        categoriaColor: '#9336EB',
      },
      mensajeEtiqueta: 'Seguimiento de WhatsApp',
      mensajeTexto: 'Respuesta a campaña de email, solicita reunión con asesor académico',
      fecha: '15/04/2025',
      hora: '9:00 AM',
      indicadorColor: 'green',
      botonEjecutar: { label: 'Ejecutar', color: 'green' },
    },
  ];

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  onMenuClick(): void {
    this.toggleSidebar();
  }

  onSearch(value: string): void {
    this.searchValue = value;
  }
}
