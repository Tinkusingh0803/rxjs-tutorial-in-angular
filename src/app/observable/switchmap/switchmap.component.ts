import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, mergeMap, switchAll, switchMap } from 'rxjs/operators';
import { AppserviceService } from 'src/app/appservice/appservice.service';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.css']
})
export class SwitchmapComponent implements OnInit {

  constructor(private _appserviceService: AppserviceService) {}

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | mergeMap
    source.pipe(mergeMap(x=> this.getData(x))
    )
    .subscribe(res=>{
      console.log(res)
      this._appserviceService.print(res, 'switchMap1')
    })
    // Ex - 02 | ConcatMap
    source.pipe(concatMap(x=> this.getData(x))
    )
    .subscribe(res=>{
      console.log(res)
      this._appserviceService.print(res, 'switchMap2')
    })
     // Ex - 03 | mergeMap
     source.pipe(switchMap(x=> this.getData(x))
     )
     .subscribe(res=>{
       console.log(res)
       this._appserviceService.print(res, 'switchMap3')
     })
  }
  getData(data: any) {
    return of(data + ' ' + 'video Uploaded').pipe(delay(1000));
  }

}
