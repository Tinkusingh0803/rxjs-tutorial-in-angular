import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
store:any;
store1:any;
  users = [
    {
      name: 'amup',
      skills: 'angular',
      job: {
        title: 'Frontend Developer',
        exp: '1 year'
      }
    },
    {
      name: 'tinku',
      skills: 'javascript',
      job: {
        title: ' UI Developer',
        exp: '1 year'
      }
    },
    {
      name: 'monu',
      skills: 'java',
      job: {
        title: 'backend Developer',
        exp: '1 year'
      }
    },
    {
      name: 'anuj',
      skills: 'html',
      job: {
        title: 'fullstack Developer',
        exp: '1 year'
      }
    },
  ]
  constructor() { }

  ngOnInit(): void {
    //  Ex - 01
    from(this.users).pipe(
      // map(x=> x.name),
      pluck('name'),
      toArray()
    )
    .subscribe(x=>{
      console.log(x)
this.store=x;
    })

    // Ex - 02
    from(this.users).pipe(
      // map(x=> x.name),
      pluck('job','title'),
      toArray()
    )
    .subscribe(x=>{
      console.log(x)
this.store1=x;
    })
  }

}
