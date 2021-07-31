import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
msg1: any;
msg2: any;
msg3: any;
@ViewChild('fetchData') fetchData!: ElementRef
  sub1!: Subscription
  sub2!: Subscription
  constructor() { }

  ngOnInit(): void {
    // Ex - 01
    const broadCastVideos = interval(1000);
   this.sub1 = broadCastVideos.pipe(
     map(data=> 'video ->' + data)
   )
   .subscribe(res=>{
      // console.log(res)
      this.msg1= res;
    })

 setTimeout(() => {
   this.sub1.unsubscribe();
 }, 10000);

 // Ex -2
 this.sub2= broadCastVideos.pipe(
   map(data=> data*10)
 )
 .subscribe(res=>{
  //  console.log(res)
  this.msg2=res;

 })
 setTimeout(() => {
  this.sub2.unsubscribe();
}, 5000);

// Ex - 03
const members = from([
  {id: 1, name: 'tinku'},
  {id: 2, name: 'pankaj'},
  {id: 3, name: 'monu'},
  {id: 4, name: 'anuj'},
  {id: 5, name: 'vishnu'},
  {id: 6, name: 'yogesh'},
  {id: 7, name: 'Anoop'},
  {id: 8, name: 'Ashish'},

])
members.pipe(
  map(mapData=> mapData.name)
)
.subscribe(res=>{
  // console.log(res)
  this.msg3=res;
  this.primary(res);
})


  }

  primary(res:any){
    let store = document.createElement('div');
    store.innerText= res;
    document.getElementById('fetchData')?.appendChild(store);
  }

}
