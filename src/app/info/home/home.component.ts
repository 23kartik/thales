import { Component, OnInit } from '@angular/core';
import { Info } from '../info';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allInfo: Info[] = [];
 
  constructor(private infoService:InfoService) {}
 
  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.infoService.get().subscribe((data) => {
      this.allInfo = data;
    });
  }
}
