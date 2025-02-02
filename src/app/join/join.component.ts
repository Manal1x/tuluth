import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-join',
  standalone: false,
  
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
 
  constructor(){
  }

  add(f:NgForm){
    console.log(f.value);
  }
}
