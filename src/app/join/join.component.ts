import { Component } from '@angular/core';

@Component({
  selector: 'app-join',
  standalone: false,
  
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {
  userData = {
    fName: '',
    lName: '',
    email: '',
    phone: '',
    gender: '',
    country: '',
    city: '',
    experience: '',
    category: '',
    dateEnd: '',
    info: '',
    resume: '',
    cate2: '',
    degree: '',
    id: '',
  };

  constructor(){
    this.userData
  }

  add(){
    console.log(this.userData);
  }
}
