import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, pluck, switchMap } from 'rxjs/operators';
import { Search } from 'src/app/appInterface/search.interface';
import { AppserviceService } from 'src/app/appservice/appservice.service';

@Component({
  selector: 'app-switchmap-project',
  templateUrl: './switchmap-project.component.html',
  styleUrls: ['./switchmap-project.component.css']
})
export class SwitchmapProjectComponent implements AfterViewInit {

  @ViewChild('searchForm')
  searchForm!: NgForm;
  searchResults:any;
  searchResultsCount:any;
  constructor(private _searchService: AppserviceService ) { }

  ngAfterViewInit(): void{
// it's for testing
// this._searchService.getSearches('rxjs').subscribe(res=>{
//   console.log(res)
// })

    const formValue = this.searchForm.valueChanges;

    formValue?.pipe(
      // map and pluck both are same work we can use map and pluck
      // map(data=> data.searchTerm)
      filter( ()=> this.searchForm.valid ! ),
      pluck('searchTerm'),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(data=> this._searchService.getSearches(data))
    )
    .subscribe(res=>{
      console.log(res)
      this.searchResults = res;
      console.log('count =>', Object.keys(res))
      this.searchResultsCount = Object.keys(res).length
    })
  }

}
