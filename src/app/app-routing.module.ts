import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskaddComponent } from './taskadd/taskadd.component';

const routes: Routes = [
  { path: '', component: TasklistComponent},
  { path: 'tasks/add', component: TaskaddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
