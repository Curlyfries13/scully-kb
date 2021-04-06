import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopnavComponent } from './topnav/topnav.component';
import { AboutComponent } from './about/about.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';
import { SidenavCategoryComponent } from './sidenav-category/sidenav-category.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SidenavComponent,
    HomepageComponent,
    TopnavComponent,
    CollapsibleComponent,
    SidenavCategoryComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MarkdownModule.forRoot(),
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
