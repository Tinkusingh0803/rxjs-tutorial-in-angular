import { Component, OnInit } from '@angular/core';
import {AppserviceService} from "../../appservice/appservice.service"

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {
  asyncVideoEmit:any;
  constructor(private _appserviceService: AppserviceService) { }

  ngOnInit(): void {
this._appserviceService.asyncVideoEmit.subscribe(res=>{
   this.asyncVideoEmit=res;
})
  }

  // video Add Method
  onVideoAdd(val:any){
console.log(val.value)
this._appserviceService.asyncVideoEmit.next(val.value);
  }


  onComplete(){
this._appserviceService.asyncVideoEmit.complete();
  }
}
