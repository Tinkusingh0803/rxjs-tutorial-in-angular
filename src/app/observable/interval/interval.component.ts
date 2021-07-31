import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer,  } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
watch:any="";
  videoSubscription!: Subscription;
constructor() { }

  ngOnInit(): void {
    // const broadCastVideos = interval(1000)
    const broadCastVideos = timer(3000, 1000)
   this.videoSubscription= broadCastVideos.subscribe(res=>{
      console.log(res)
      this.watch=res;
      this.print(this.watch);
      if(res>5){
        this.videoSubscription.unsubscribe()
      }
    })
  }
  print(val:any){
    let watchVal= document.createElement('div');
    watchVal.innerText=val;
     // document.getElementById('watchId')?.appendChild(watchVal);
    document.getElementById('elContainer')?.appendChild(watchVal);
  }

}

