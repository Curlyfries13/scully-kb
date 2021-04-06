import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { combineLatest } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.scss']
})
export class DocComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private scully: ScullyRoutesService
  ) { }

  $docMetadata = combineLatest([
    this.activatedRoute.params.pipe(pluck('slug')),
      this.scully.available$
  ]).pipe(map(([slug, routes]) => {
        routes.find(route => route.route === `/blog/${slug}`);
  }));

  ngOnInit(): void {
  }

}
