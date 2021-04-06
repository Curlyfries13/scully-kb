import { Component, OnInit } from '@angular/core';

import { RouteService } from 'src/routes.config';
import { sizes } from 'src/app/devices';
import { SidebarService } from 'src/app/sidebar.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  constructor(
    public navRoutes: RouteService,
    private sidebar: SidebarService) {
  }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.sidebar.toggleState();
  }

  closeOverSidebar(): void {
    // If the popover is drawn over, then close it
    if (this.sidebar.screenSize < sizes.medium && this.sidebar.open.getValue()) {
      this.sidebar.setState(false);
    }
  }

}
