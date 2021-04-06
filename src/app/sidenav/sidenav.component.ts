import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScullyRoutesService, ScullyRoute } from '@scullyio/ng-lib';
import { Observable, combineLatest, from } from 'rxjs';
import { map } from 'rxjs/operators';

import { SidebarService } from 'src/app/sidebar.service';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  constructor(
    private scully: ScullyRoutesService,
    private sidebarService: SidebarService,
    private categoryService: CategoryService
  ) {}

  // NOTE: switch to this.scully.allRoutes$ for everything not just published
  // pages
  // if more than one document type exists, split this by the root url
  topLevel$: Observable<ScullyRoute[]> = this.scully.topLevel$;
  available$: Observable<ScullyRoute[]> = this.scully.available$;
  categories: string[] = [];

  // Only show routes for documents that aren't top-level, or only actual scully
  // documents.
  routes$: Observable<ScullyRoute[]> = combineLatest([
    this.available$,
    this.topLevel$,
  ]).pipe(
    map(([docs, topLevel]) => {
      return docs.filter(
        (doc: ScullyRoute) =>
          !topLevel.some((route: ScullyRoute) => route.route === doc.route)
      );
    })
  );

  categoryRoutes: { [category: string]: ScullyRoute[] } = {};
  uncategorizedRoutes: ScullyRoute[] = [];

  open$: Observable<boolean> = this.sidebarService.open;

  ngOnInit(): void {
    this.routes$.subscribe((routes: ScullyRoute[]) => {
      this.categories = this.categoryService.getScullyRouteCategories(routes);
      for (const category of this.categories) {
        this.categoryRoutes[category] = routes.filter(
          (route) => route.category === category
        );
      }
      this.uncategorizedRoutes = routes.filter(
        (route) => route.category === undefined || route.category === ''
      );
    });
  }
}
