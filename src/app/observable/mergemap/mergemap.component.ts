import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { AppserviceService } from '../../appservice/appservice.service';
@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css'],
})
export class MergemapComponent implements OnInit {
  constructor(private _appserviceService: AppserviceService) {}

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    // Ex - 01 | Map
    source.pipe(map((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
      this._appserviceService.print(res, 'mergeMapId');
    });

    // Ex - 02 | Map + mergeAll
    source.pipe(map((res) => this.getData(res)),mergeAll()).subscribe((res) => {
      console.log(res);
      this._appserviceService.print(res, 'mergeMapId2');
    });
     // Ex - 03 | mergeMap
     source.pipe(mergeMap((res) => this.getData(res))).subscribe((res) => {
      console.log(res);
      this._appserviceService.print(res, 'mergeMapId3');
    });
  }
  getData(data: any) {
    return of(data + ' ' + 'video Uploaded');
  }

  // res.subscribe(res2=>{
  //   console.log(res2)
  //   this._appserviceService.print(res2, 'mergeMapId')
  // })
}
