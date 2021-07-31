import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../../appservice/appservice.service'

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
userName= "tinku"
  constructor(private _appserviceService:AppserviceService) { }

  ngOnInit(): void {
    this._appserviceService.userName.subscribe(res=>{
      this.userName=res;
    })

  }
  onChange(val:any){
    this._appserviceService.userName.next(val.value)
  }

}
