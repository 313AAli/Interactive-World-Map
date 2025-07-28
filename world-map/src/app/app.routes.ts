import { Routes } from '@angular/router';
import { MapViewComponent } from './map-view/map-view.component';

export const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: 'map', component: MapViewComponent }
];