import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Info } from '../info';
import { InfoService } from '../info.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  infoForm: Info = {
    id: 0,
    name: '',
    age: 0,
  };
 
  constructor(private infoService:InfoService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.infoService.create(this.infoForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/info/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}