import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoinComponent } from './components/join.component';



@NgModule({
  declarations: [
    JoinComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    JoinComponent
  ]
})
export class JoinModule { }
