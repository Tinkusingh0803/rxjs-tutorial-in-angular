import { Component, OnInit } from '@angular/core';
import { toArray } from 'rxjs/operators';
import {AppserviceService} from "../../appservice/appservice.service"
@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit {

  // storeValue:any="";
// List Data
user1List=[
  'Angular 1',
  'Angular 2'
];
user2List:any=[];
user3List=[];
// SubscribeMeodes
subscribeMode2:boolean = false;
subscribeMode3:boolean = false;


  constructor(private _appserviceService: AppserviceService) { }

  ngOnInit(): void {
    this._appserviceService.videoEmit
    .subscribe(res=>{
      console.log(res);

      //  <!-- ese bhi ham ise kar sakte h id bna kar appendChild se append kara denge -->
      // let store = document.createElement('div')
      // store.innerText = res;
      // document.getElementById('itemId')?.appendChild(store);

      // <!-- or push method se bhi kar sakte h  -->
this.user1List.push(res);

     })
  }

  // video Add Method
  onVideoAdd(val:any){
// console.log(val.value)
this._appserviceService.videoEmit.next(val.value);
  }

  // User 2 subscribe Button
  user2Subscribe(){
this._appserviceService.videoEmit.subscribe(res=>{
  this.user2List.push(res)
})
    this.subscribeMode2 = !this.subscribeMode2;
  }

  // User 2 subscribe Button
  user3Subscribe(){
    this.subscribeMode3 = !this.subscribeMode3;
  }

}
