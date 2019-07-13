import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavTabsComponent } from './app-nav-tabs/app-nav-tabs.component';
import { HttpClientModule } from '@angular/common/http';
import { TraineesListComponent } from './trainees-list/trainees-list.component';
import { TestsListComponent } from './tests-list/tests-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavTabsComponent,
    TraineesListComponent,
    TestsListComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
