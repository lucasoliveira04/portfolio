import { Routes } from '@angular/router';
import { Notfound } from '../pages/notfound/notfound';
import { Home } from '../pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: '404', component: Notfound },
  { path: '**', redirectTo: '404' },
];
