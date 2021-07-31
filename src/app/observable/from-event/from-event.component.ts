import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit {

  @ViewChild('addBtn') addBtn!:ElementRef;
store:any=[];
count=1;

  constructor() { }

  ngOnInit(): void {

  }
  ngAfterViewInit(){
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res=>{
      this.print();
    })
  }
  // myfun(){
  //    this.print();
  // }
print(){
  let el:any= document.createElement('div');
  el.innerText= 'video =>' + this.count++;
  document.getElementById('elContainer')?.appendChild(el);
}
}
