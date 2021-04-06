import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
})
export class DocsComponent implements OnInit {
  constructor(
    private scully: ScullyRoutesService,
    private category: CategoryService
  ) {}

  // NOTE: switch to this.scully.allRoutes$ for everything not just published
  // page

  $docs = this.scully.available$.pipe(
    map((routes) => {
      return this.category.getScullyRoutesInCategory(routes, 'test');
    })
  );

  ngOnInit(): void {}
}
