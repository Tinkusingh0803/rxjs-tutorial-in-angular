import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  dell= {
    brand: 'dell',
    hardDisk: '1 TB',
    color: 'red'
  };
  hp={
    brand:'HP',
    hardDisk: '2 TB',
    color: 'green'
  }
  notAvail={
    brand: 'Not Available',
    status: 'failed'
  }

promise:any="";
  constructor() { }

  ngOnInit(): void {

    let buyNewLaptop = new Promise((resolve, reject)=>{
      // resolve("promise is resolved");
      // reject("promise is rejected");
      if(this.dellAvailable()){
          setTimeout(() => {
            // resolve("dell laptop is purchased");
          resolve(this.dell.brand);
          console.log(this.dell)
        }, 3000);
      }else if(this.hpAvailable()){
          setTimeout(() => {
            // resolve("HP laptop is purchased")
          resolve(this.hp);
        }, 3000);
      } else{
        setTimeout(() => {
          reject("laptop is not avaulable on the shop")
          reject(this.notAvail);
        }, 5000);
      }
    });

    buyNewLaptop.then(res=>{
      console.log("then code => success", res);
this.promise=res;
    }).catch(res=>{
      console.log("catch code => success", res);
this.promise=res;

    });
  }

  dellAvailable(){
    return true;

  }
  hpAvailable(){
    return false;

  }

// myFuntion(){
//   console.log("function called");
// }


}
