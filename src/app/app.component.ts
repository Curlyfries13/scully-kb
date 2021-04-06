import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import { SidebarService } from 'src/app/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = environment.appName || 'Angular App';
  open$: Observable<boolean> = this.sidebarService.open;

  public constructor(
    private titleService: Title,
    private sidebarService: SidebarService
  ) {
    this.setTitle(this.title);
  }

  public setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }

}
