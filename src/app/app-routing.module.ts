import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraineesListComponent } from './trainees-list/trainees-list.component';
import { TestsListComponent } from './tests-list/tests-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/trainees', pathMatch: 'full' },  
  { path: 'trainees', component: TraineesListComponent },
  { path: 'tests', component: TestsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
