import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import {AppserviceService} from '../../appservice/appservice.service'
@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css'],
})
export class ConcatComponent implements OnInit {
  constructor(private _appserviceService: AppserviceService) {}

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(map(v=> 'Tech video=>' + (v+1)), take(5));
    const sourceComedy = interval(1000).pipe(map(v=> 'Comedy video=>' + (v+1)), take(3));
    const sourceNews = interval(1000).pipe(map(v=> 'News video=>' + (v+1)), take(4));

    const finalObs = concat(sourceTech, sourceComedy, sourceNews)
     finalObs.subscribe((res) => {
      console.log(res);
      this._appserviceService.print(res,'serviceContainer')
    });
  }
}

