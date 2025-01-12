import { Component, OnInit } from '@angular/core';
import { ThuluthService } from '../Services/thuluth/thuluth.service';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private thuluthService:ThuluthService) {}

  ngOnInit(): void {
    
  }

}
