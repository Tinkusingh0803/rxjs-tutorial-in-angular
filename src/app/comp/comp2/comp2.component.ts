import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../../appservice/appservice.service'
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
userName="Tinku"
  constructor(private _appserviceService: AppserviceService) {

   }

  ngOnInit(): void {
this._appserviceService.userName.subscribe(res=>{
  this.userName=res;
})
  }

  onchange(val:any){
    this._appserviceService.userName.next(val.value);
  }


}
