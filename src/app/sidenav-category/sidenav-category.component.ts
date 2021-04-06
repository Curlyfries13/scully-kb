import { Component, OnInit, Input } from '@angular/core';
import { ScullyRoute } from '@scullyio/ng-lib';

@Component({
  selector: 'app-sidenav-category',
  templateUrl: './sidenav-category.component.html',
  styleUrls: ['./sidenav-category.component.scss'],
})
export class SidenavCategoryComponent implements OnInit {
  @Input() categoryRoutes: ScullyRoute[];
  @Input() category: string;
  collapse = false;

  constructor() {}

  ngOnInit(): void {}

  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }
}
