import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routing: Routes = [
  {
    path: '', loadChildren: 'app/task1/task1.module#Task1Module'
  },


  { path: 'task1', loadChildren: 'app/task1/task1.module#Task1Module' },
  { path: 'task2', loadChildren: 'app/task2/task2.module#Task2Module' },
  { path: 'task3', loadChildren: 'app/task3/task3.module#Task3Module' },
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routing)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
