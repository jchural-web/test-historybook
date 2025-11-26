import { Routes } from '@angular/router';
import { CrmPageComponent } from './components/crm-page/crm-page.component';
import { GestionAgendaComercialComponent } from './components/gestion-agenda-comercial/gestion-agenda-comercial.component';

export const routes: Routes = [
  {
    path: '',
    component: CrmPageComponent,
  },
  {
    path: 'gestion-agenda-comercial',
    component: GestionAgendaComercialComponent,
  },
];
