import { Injectable } from '@angular/core';
import { HandledRoute } from '@scullyio/scully';
import { ScullyRoute } from '@scullyio/ng-lib';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  // CategoryService is an example of a service which can parse routes for
  // Angular components and Scully Plugins.

  constructor() {}

  getCategoryRoutes(
    routes: HandledRoute[],
    routePrefix: string = ''
  ): { routes: HandledRoute[]; data: any } {
    const categories = this.getHandledRouteCategories(routes);
    const outRoutes: HandledRoute[] = [];
    for (const category in categories) {
      if (routePrefix !== '') {
        outRoutes.push({
          route: `/${routePrefix}/${category}`,
          type: 'router',
        });
      } else {
        outRoutes.push({ route: `/${category}`, type: 'router' });
      }
    }
    return { routes: outRoutes, data: categories };
  }

  getHandledRouteCategories(routes: HandledRoute[]): string[] {
    const categories: string[] = [];
    for (const route of routes) {
      if (route.data.category && !categories.includes(route.data.category)) {
        categories.push(route.data.category);
      }
    }
    return categories;
  }

  getScullyRouteCategories(routes: ScullyRoute[]): string[] {
    const categories: string[] = [];
    for (const route of routes) {
      if (route.category && !categories.includes(route.category)) {
        categories.push(route.category);
      }
    }
    return categories;
  }

  getHandledRoutesInCategory(
    routes: HandledRoute[],
    category: string = ''
  ): HandledRoute[] {
    return routes.filter((route: HandledRoute) => {
      return route.data.category && route.data.category === category;
    });
  }

  getScullyRoutesInCategory(
    routes: ScullyRoute[],
    category: string = ''
  ): ScullyRoute[] {
    return routes.filter((route: ScullyRoute) => {
      return route.category && route.category === category;
    });
  }
}
