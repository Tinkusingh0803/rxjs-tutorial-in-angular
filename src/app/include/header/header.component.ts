import { Component, OnInit } from '@angular/core';
import {AppserviceService} from '../../appservice/appservice.service'
 @Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  exclusive:boolean = false;

obj={
  dell: 'dell laptop',
};
obj2={
  hp: 'HP laptop'
};
obj3={
  failed: 'not found'
}
store:any=""
  constructor(private _appService: AppserviceService) { }

  ngOnInit(): void {

this._appService.exclusive.subscribe(res=> {
  this.exclusive=res;
})

   let buylaptop= new Promise((resolve, rejects)=>{
    //  rejects("it is a rejected")
    if(this.goDellLaptopMarket()){
      resolve(this.obj);
      this.store=this.obj.dell;
    } else if (this.hplaptop()){

      resolve(this.obj2)
    } else{
      rejects(this.obj3)
    }

   })
   buylaptop.then(res=>{
     console.log(res);
   }).catch(res=>{
     console.log(res);
   })
  }

  goDellLaptopMarket(){
return true;
  }
  hplaptop(){
    return false
  }
}
