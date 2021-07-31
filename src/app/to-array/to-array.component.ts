import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription,  } from 'rxjs';
import { take, toArray } from 'rxjs/operators';
@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  aryy=[
  {name: 'tinku', skill: 'angular'},
  {name: 'monu', skill: 'javascript'},
  {name: 'vishnu', skill: 'html'}
]

  unsub!: Subscription;
  constructor() { }

  ngOnInit(): void {
    // ex-1
    const int = interval(1000)
    this.unsub = int.pipe(take(5),toArray()).subscribe(res=>{
      console.log(res)
    })

    // ex-2
const fromValue = from(this.aryy);
fromValue.pipe(toArray()).subscribe(res=>{
  console.log(res)
})

// ex-3
const ex3 = of('tinku','singh', 'rohan','pankaj');
ex3.pipe(toArray()).subscribe(x=>{
  console.log(x)
})
  }

}


