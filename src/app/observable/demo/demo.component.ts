import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, of, Subscription, timer } from 'rxjs';
import { debounceTime, take } from 'rxjs/operators';

  @Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements  OnInit {

subscription:any= Subscription
  constructor( ) { }

   ngOnInit(): void{

    const click= fromEvent(document, 'click');
    const result= click.pipe(debounceTime(1000)).subscribe(res=>{
      console.log(res);
    })


   }
  }
