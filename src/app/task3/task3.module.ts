import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task3Component } from './task3.component';
import { Routes, RouterModule } from '@angular/router';

const routing = [
  { path: '', component: Task3Component }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routing)

  ],
  declarations: [Task3Component]
})
export class Task3Module { }
