import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderBarComponent, HeaderAction } from '../header-bar/header-bar.component';
import { SidebarMenuMaestroComponent, SidebarMenuItem } from '../sidebar-menu-maestro/sidebar-menu-maestro.component';
import { TabsNavegacionMaestrasComponent, TabMaestra } from '../tabs-navegacion-maestras/tabs-navegacion-maestras.component';

@Component({
  selector: 'app-gestion-agenda-comercial',
  standalone: true,
  imports: [CommonModule, HeaderBarComponent, SidebarMenuMaestroComponent, TabsNavegacionMaestrasComponent],
  templateUrl: './gestion-agenda-comercial.component.html',
  styleUrls: ['./gestion-agenda-comercial.component.css'],
})
export class GestionAgendaComercialComponent implements OnInit {
  isSidebarExpanded: boolean = false;
  activeSidebarId: string = 'comercial';
  expandedSidebarIds: string[] = [];

  sidebarItems: SidebarMenuItem[] = [
    {
      id: 'comercial',
      label: 'Comercial',
      icon: 'folder',
      children: [
        {
          id: 'gestion-comercial',
          label: 'Gestión Comercial',
          icon: 'folder',
          children: [
            {
              id: 'chats',
              label: 'Chats',
              icon: 'folder',
              badgeCount: 3,
            },
            {
              id: 'creacion-oportunidades',
              label: 'Creación de Oportunidades',
              icon: 'folder',
              badgeCount: 5,
            },
            {
              id: 'agenda',
              label: 'Agenda',
              icon: 'folder',
              badgeCount: 8,
            },
          ],
        },
        {
          id: 'control-operativo',
          label: 'Control Operativo',
          icon: 'folder',
        },
        {
          id: 'analitica-ventas',
          label: 'Analítica de Ventas',
          icon: 'folder',
        },
      ],
    },
    {
      id: 'desempenio',
      label: 'Gestión Del Desempeño',
      icon: 'award',
      children: [],
    },
    {
      id: 'atencion-cliente',
      label: 'Atención al Cliente',
      icon: 'headset',
      children: [],
    },
    {
      id: 'clientes',
      label: 'Clientes',
      icon: 'users',
      badgeCount: 12,
    },
    {
      id: 'cursos',
      label: 'Cursos',
      icon: 'book-open',
      badgeCount: 8,
    },
    {
      id: 'configuracion',
      label: 'Configuración',
      icon: 'settings',
      badgeCount: 2,
    },
  ];

  headerActions: HeaderAction[] = [
    {
      label: 'Wavix',
      icon: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6_121)"><path d="M5 2.5C5 2.33424 4.9341 2.17532 4.81689 2.05811C4.7143 1.95552 4.57977 1.89223 4.43665 1.87805L4.375 1.875H2.5C2.33424 1.875 2.17532 1.9409 2.05811 2.05811C1.9409 2.17532 1.875 2.33424 1.875 2.5C1.875 5.31792 2.99461 8.02024 4.98718 10.0128C6.97976 12.0054 9.68207 13.125 12.5 13.125C12.6658 13.125 12.8247 13.0591 12.9419 12.9419C13.0591 12.8247 13.125 12.6658 13.125 12.5V10.625C13.125 10.4592 13.0591 10.3003 12.9419 10.1831C12.8247 10.0659 12.6658 10 12.5 10H10.625C10.528 10 10.4322 10.0225 10.3455 10.0659C10.2587 10.1093 10.1833 10.1726 10.1251 10.2502L10.1221 10.2545L9.8999 10.5438C9.72786 10.7698 9.48452 10.9309 9.20898 10.9998C8.93343 11.0686 8.64252 11.0414 8.3844 10.9229C8.37957 10.9206 8.37452 10.9185 8.36975 10.9161C6.50982 10.0033 5.00455 8.5 4.08936 6.64124L4.08813 6.63879C3.96168 6.37934 3.92889 6.0841 3.99536 5.80322C4.06189 5.52229 4.22368 5.27288 4.45312 5.09766L4.4574 5.0946L4.74976 4.87488C4.82738 4.81666 4.89069 4.74133 4.93408 4.65454C4.97747 4.56776 5 4.47203 5 4.375V2.5ZM6.25 4.375C6.25 4.66608 6.18242 4.95327 6.05225 5.21362C5.92207 5.47398 5.73275 5.70059 5.49988 5.87524L5.21118 6.0907C6.00198 7.696 7.30103 8.99479 8.90564 9.78638L9.12476 9.50012L9.19312 9.41467C9.357 9.22079 9.55863 9.06163 9.78638 8.94775C10.0467 8.81758 10.3339 8.75 10.625 8.75H12.5C12.9973 8.75 13.4741 8.94769 13.8257 9.29932C14.1773 9.64107 14.375 10.1178 14.375 10.625V12.5C14.375 12.9973 14.1773 13.4741 13.8257 13.8257C13.4741 14.1773 12.9973 14.375 12.5 14.375C8.82107 14.375 5.31618 13.0252 2.70471 10.4137C0.0932422 7.80226 -1.25625 4.29739 -1.25625 0.625C-1.25625 0.127718 -1.05856 -0.349055 -0.707031 -0.701181C-0.355469 -1.05331 0.121094 -1.25 0.625 -1.25H2.5C2.99728 -1.25 3.47405 -1.05231 3.82568 -0.700681C4.1773 -0.349055 4.375 0.127718 4.375 0.625V2.5C4.375 2.79109 4.25321 3.06918 4.04409 3.27829C3.83496 3.48741 3.55687 3.60919 3.26578 3.60919H1.875C1.68609 3.60919 1.50537 3.68826 1.36472 3.82892C1.22407 3.96957 1.145 4.15029 1.145 4.33919V5.625C1.145 6.37865 1.40268 7.10151 1.87631 7.6528C2.34994 8.20409 3.00321 8.53938 3.70625 8.59297C4.05143 8.6208 4.35062 8.78879 4.53313 9.05161C4.71562 9.31443 4.75625 9.64583 4.64609 9.94549C4.53594 10.2451 4.29265 10.4763 3.98937 10.5813C3.68609 10.6863 3.34937 10.6499 3.07766 10.4816C1.42588 9.45278 0.078703 7.92598 -0.827859 6.12676C-1.7344 4.32754 -2.1875 2.26262 -2.1875 0.125C-2.1875 -0.371094 -1.99181 -0.847656 -1.64018 -1.20059C-1.28855 -1.55352 -0.811771 -1.75 -0.3125 -1.75H2.5C3.49316 -1.75 4.44637 -1.35286 5.1347 -0.664551C5.82303 0.023926 6.25 0.977148 6.25 2V4.375Z" fill="white"/></g></clip-path></svg>',
    },
    {
      label: 'Actualizar',
      icon: '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 13.125V10C1.25 9.65482 1.52982 9.375 1.875 9.375H5C5.34518 9.375 5.625 9.65482 5.625 10C5.625 10.3452 5.34518 10.625 5 10.625H3.38379L3.72192 10.9631L3.91602 11.142C4.90577 12.0105 6.17857 12.4941 7.50122 12.4994C8.82686 12.4991 10.0984 11.9732 11.0358 11.0358C11.9734 10.0981 12.5 8.82608 12.5 7.5C12.5 7.15482 12.7798 6.875 13.125 6.875C13.4702 6.875 13.75 7.15482 13.75 7.5C13.75 9.1576 13.0917 10.7475 11.9196 11.9196C10.7475 13.0917 9.1576 13.75 7.5 13.75H7.49756C5.87203 13.7439 4.30776 13.1487 3.09143 12.0813L2.84546 11.8542L2.5 11.5088V13.125C2.5 13.4702 2.22018 13.75 1.875 13.75C1.52982 13.75 1.25 13.4702 1.25 13.125ZM1.25 7.5C1.25 5.8424 1.90834 4.25255 3.08044 3.08044C4.25255 1.90834 5.8424 1.25 7.5 1.25H7.50244L7.82654 1.25916C9.33493 1.33767 10.7733 1.92241 11.9086 2.9187L12.1545 3.14575L12.5 3.49121V1.875C12.5 1.52982 12.7798 1.25 13.125 1.25C13.4702 1.25 13.75 1.52982 13.75 1.875V5C13.75 5.34518 13.4702 5.625 13.125 5.625H10C9.65482 5.625 9.375 5.34518 9.375 5C9.375 4.65482 9.65482 4.375 10 4.375H11.6162L11.2781 4.03687L11.084 3.85803C10.0941 2.98938 8.82104 2.5051 7.49817 2.5C6.17275 2.50048 4.90148 3.02698 3.96423 3.96423C3.02655 4.90192 2.5 6.17392 2.5 7.5C2.5 7.84518 2.22018 8.125 1.875 8.125C1.52982 8.125 1.25 7.84518 1.25 7.5Z" fill="white"/></svg>',
    },
  ];

  navigationTabs: TabMaestra[] = [
    {
      id: 'speech',
      label: 'Speech',
      tipo: 'cuadrada-icono',
      iconName: 'speech',
      color: 'blue',
    },
    {
      id: 'editar-datos',
      label: 'Editar datos\npersonales',
      tipo: 'cuadrada-icono',
      iconName: 'edit',
      color: 'blue',
    },
    {
      id: 'cronograma-pagos',
      label: 'Cronograma de\npagos',
      tipo: 'cuadrada-icono',
      iconName: 'calendar',
      color: 'blue',
    },
    {
      id: 'info-programa',
      label: 'Información del\nprograma',
      tipo: 'cuadrada-icono',
      iconName: 'info',
      color: 'green',
    },
    {
      id: 'docs-programa',
      label: 'Documentos del\nprograma',
      tipo: 'cuadrada-icono',
      iconName: 'file-text',
      color: 'green',
    },
    {
      id: 'resumen-prog-1',
      label: 'Resumen\nprogramas',
      tipo: 'cuadrada-icono',
      iconName: 'file',
      color: 'green',
    },
    {
      id: 'competidores',
      label: 'Competidores',
      tipo: 'cuadrada-icono',
      iconName: 'question-circle',
      color: 'orange',
    },
    {
      id: 'resumen-prog-2',
      label: 'Resumen\nprogramas',
      tipo: 'cuadrada-icono',
      iconName: 'check-circle',
      color: 'orange',
    },
  ];

  activeTabId: string = 'speech';

  ngOnInit(): void {
    // Component initialization
  }

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  onMenuClick(): void {
    this.toggleSidebar();
  }

  onSidebarItemClick(itemId: string): void {
    this.activeSidebarId = itemId;
  }

  onExpandedIdsChange(expandedIds: string[]): void {
    this.expandedSidebarIds = expandedIds;
  }

  onTabChange(tabId: string): void {
    this.activeTabId = tabId;
  }
}
