import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap, } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
 obs!: Subscription;
  constructor() { }

  ngOnInit(): void {

    // Ex -01
    const arr= ['Anup', 'tinku', 'monu','ravi', 'sharma', 'john', 'Alex'];
    const source = interval(1000)
    this.obs= source.pipe(
      tap(res=>{
          if(res==4){
 this.obs.unsubscribe()
          }
        }),
      map(res =>arr[res])
    )
    .subscribe(res=>{
      console.log(res)
    })
   }

}
