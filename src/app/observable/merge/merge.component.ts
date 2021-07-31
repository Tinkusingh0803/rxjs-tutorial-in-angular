import { Component, OnInit } from '@angular/core';
import { interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppserviceService } from 'src/app/appservice/appservice.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.css']
})
export class MergeComponent implements OnInit {

  constructor(private _appserviceService: AppserviceService) {}

  ngOnInit(): void {
    const sourceTech = interval(1000).pipe(map(v=> 'Tech video=>' + (v+1)), take(5));
    const sourceComedy = interval(1000).pipe(map(v=> 'Comedy video=>' + (v+1)), take(3));
    const sourceNews = interval(1000).pipe(map(v=> 'News video=>' + (v+1)), take(4));

    const finalObs = merge(sourceTech, sourceComedy, sourceNews)
     finalObs.subscribe((res) => {
      console.log(res);
      this._appserviceService.print(res,'serviceContainer')
    });
  }

}
