import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1Component } from './task1.component';
import { Routes, RouterModule } from '@angular/router';

const routing = [
  { path: '', component: Task1Component }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routing)
  ],
  declarations: [Task1Component]
})
export class Task1Module { }
