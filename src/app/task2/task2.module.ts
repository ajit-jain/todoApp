import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task2Component } from './task2.component';
import { Routes, RouterModule } from '@angular/router';

const routing = [
  { path: '', component: Task2Component }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routing)

  ],
  declarations: [Task2Component]
})
export class Task2Module { }
