import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-join',
  standalone: false,
  
  templateUrl: './join.component.html',
  styleUrl: './join.component.css'
})
export class JoinComponent {

}

// export interface joinRequests{
//   uid: string;
//   firstName: string;
//   lastName: string;
//   phone: number;
//   email: EmailValidator;
//   gender: boolean;
//   country: string;
//   city: string;
//   yearEx: number;
//   category: string;
//   dateEnd: Date;
//   type: string;
//   resume: File;
//   HealthClassification: File;
//   degree: File;
//   idPic: File;

// }
