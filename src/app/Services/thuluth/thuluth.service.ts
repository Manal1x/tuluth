import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThuluthService {

  constructor() { }

  getImg():String[]{
    return[
      '/assets/images/ThuluthLogo.png',
    ]
  }
}
