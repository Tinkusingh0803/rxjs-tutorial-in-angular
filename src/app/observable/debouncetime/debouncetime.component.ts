import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, map, } from 'rxjs/operators';
@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.css']
})
export class DebouncetimeComponent implements AfterViewInit {
  @ViewChild('myInputId')
  myInputId!: ElementRef;
requestData = null;
// reqData=null;
  constructor( ) { }

  ngAfterViewInit(): void {

    const searchTimeAll = fromEvent<any>(this.myInputId.nativeElement, 'keyup');
    searchTimeAll.pipe(
      map(event=> event.target.value),
       debounceTime(500)
    )
    .subscribe(res=>{
      console.log(res)
      this.requestData=res;
      setTimeout(() => {
        this.requestData=null;
      }, 2000);
    })

  }

}
