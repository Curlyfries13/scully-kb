import { Injectable } from '@angular/core';

import { HomepageComponent } from 'src/app/homepage/homepage.component';
import { AboutComponent } from 'src/app/about/about.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    data: { title: 'Home', renderNav: false, home: true },
  },
  {
    path: 'docs',
    loadChildren: () =>
      import('src/app/docs/docs.module').then((m) => m.DocsModule),
    data: { title: 'Docs', renderNav: true },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About', renderNav: true },
  },
];

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  public routes = routes;
  constructor() {}
}
