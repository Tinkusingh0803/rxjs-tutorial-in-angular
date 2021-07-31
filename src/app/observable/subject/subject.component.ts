import { Component, OnDestroy, OnInit } from '@angular/core';
import {AppserviceService} from '../../appservice/appservice.service'
import {Comp1Component} from '../../../app/comp/comp1/comp1.component'
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private _appservice: AppserviceService) { }
userName:string = 'tinku';
  ngOnInit(): void {
    // this._appservice.exclusive.next(true);
    this._appservice.userName.subscribe(res=> {
      this.userName=res;

    })

  }
// ngOnDestroy(){
//   this._appservice.exclusive.next(false);

// }
}
