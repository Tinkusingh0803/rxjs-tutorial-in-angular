import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  @ViewChild('ofEvent')
  ofEvent!: ElementRef;
  obj:any=''
  constructor() { }

  ngOnInit(): void {

    // of operator
    const ofOperator = of('anup', 'monu', 'tinku');
    ofOperator.subscribe(res=>{
      console.log(res)
      this.ofEventOperator(res)
    })
    const ofOperator1 = of({a:'anup', b:'monu', c:'tinku'});
    ofOperator1.subscribe(res=>{
      console.log(res)
      this.obj=res;
     })

    // from operator - Array
    const ofOperator2 = from(['yogesh', 'anuj', 'dinesh'])
    ofOperator2.subscribe(res=>{
      console.log(res)
      this.ofEventOperator2(res);
    })

    // from operator with promise
    const promise = new Promise(resolve=>{
      setTimeout(() => {
        resolve('promise is resolve');
      }, 3000);
    })
     const ofOperator3 = from(promise)
    ofOperator3.subscribe(res=>{
      console.log('from promise=> ', res)
     })

    //  from with String
     const ofOperator5 = from("tinku singh is a good boy")
     ofOperator5.subscribe(res=>{
       console.log('from string=> ', res)
      })

  }
  ofEventOperator2(val1: any){
    let of1= document.createElement('div')
    of1.innerText=val1;
    document.getElementById('ofEventFrom1')?.appendChild(of1);
  }

ofEventOperator(val: any){
  let of= document.createElement('div')
  of.innerText=val;
  document.getElementById('ofEvent')?.appendChild(of);
}



}
