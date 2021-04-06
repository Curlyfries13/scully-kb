import { HostListener, OnDestroy, OnInit, Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import {
  BehaviorSubject,
  combineLatest,
  Observable,
  ReplaySubject,
  fromEvent,
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { sizes } from 'src/app/devices';
// import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService implements OnDestroy {
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  public screenSize: number;
  public open: BehaviorSubject<boolean>;

  constructor(private router: Router) {
    this.open = new BehaviorSubject<boolean>(window.innerWidth > sizes.medium);
    // this.screenSize = window.innerWidth;

    // Collapse the sidenav if the window gets too small, or if the screen
    // navigates
    combineLatest([fromEvent(window, 'load'), this.router.events])
      .pipe(takeUntil(this.destroyed$))
      .subscribe(([windowEvent, routerEvent]: [any, any]) => {
        this.screenSize = windowEvent.srcElement.body.clientWidth || 0;
        if (this.screenSize < sizes.medium && this.open.getValue()) {
          this.open.next(false);
          if (routerEvent instanceof NavigationStart) {
            this.open.next(false);
          }
        }
      });
  }

  getState(): Observable<boolean> {
    return this.open.asObservable();
  }

  setState(input: boolean): void {
    this.open.next(input);
  }

  toggleState(): void {
    this.open.next(!this.open.getValue());
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
