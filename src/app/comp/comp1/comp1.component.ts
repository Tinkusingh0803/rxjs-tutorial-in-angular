import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../../appservice/appservice.service'
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
userName="Tinku";
  constructor(private appserviceService: AppserviceService) {
    this.appserviceService.userName.subscribe(res=>{
    this.userName=res;
    })
  }

  ngOnInit(): void {
  }
  onChange(value:any){
console.log(value.value);
this.appserviceService.userName.next(value.value)


  }
}
