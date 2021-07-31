import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
dataFetch: any;
dataFetch1: any;
dataFetch2: any;
  datArr = [
    {id: 1, name: 'Anup', gender: 'Male'},
    {id: 2, name: 'priya', gender: 'Female'},
    {id: 3, name: 'Vinod', gender: 'Male'},
    {id: 4, name: 'Janet', gender: 'Male'},
    {id: 5, name: 'Rajesh', gender: 'Male'},
    {id: 6, name: 'sanjana', gender: 'Female'},
    {id: 7, name: 'neha', gender: 'Female'},
    {id: 8, name: 'sakshi', gender: 'Female'},
    {id: 9, name: 'neeraj', gender: 'Male'},
    {id: 10, name: 'pradeep', gender: 'Male'},
    {id: 11, name: 'monu', gender: 'Male'},
    {id: 12, name: 'Anuj', gender: 'Male'},
  ]
  constructor() { }

  ngOnInit(): void {
   const source = from(this.datArr)

  //  Ex - 01 - Filter by length
  source.pipe(
    filter(member=> member.name.length<6),
    toArray()
  )
  .subscribe(res=>{
    console.log(res)
    this.dataFetch=res;
  })

  // Ex - 02 - Filter by gender
  source.pipe(
    filter(member=> member.gender == 'Male'),
    toArray()
  )
  .subscribe(res=>{
    console.log(res)
    this.dataFetch1=res;
  })

  // Ex - 03 - Filter by nth Item
  source.pipe(
    filter(member=> member.id <=6),
     toArray()
  )
  .subscribe(res=>{
    console.log(res)
    this.dataFetch2=res;
  })
  }

}
