import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';
import { map, take, takeLast, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
arry: any;
arry1: any;

  randomName=['Anup', 'tinku', 'monu', 'dinesh', 'vishnu', 'anuj', 'yogesh' ]
  constructor() { }

  ngOnInit(): void {

    const nameSource= from(this.randomName);
    // Ex - 01 | Take
     nameSource.pipe(
       take(5),
       toArray()
     )
     .subscribe(res=>{
      // console.log(res)
      this.arry=res;
    })

    // Ex - 02 | TakeLast
    nameSource.pipe(
      takeLast(3),
      toArray()
    )
    .subscribe(res=>{
     console.log(res)
this.arry1=res;
   })

  }

}
