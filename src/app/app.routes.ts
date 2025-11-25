import { Routes } from '@angular/router';
import { SpeechComponent } from './components/speech/speech.component';
import { GestionAgendaComercialComponent } from './components/gestion-agenda-comercial/gestion-agenda-comercial.component';

export const routes: Routes = [
  {
    path: 'speech',
    component: SpeechComponent,
  },
  {
    path: 'gestion-agenda-comercial',
    component: GestionAgendaComercialComponent,
  },
];
