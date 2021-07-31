import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, Observable, ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import { Search } from '../appInterface/search.interface';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
exclusive= new Subject<boolean>();
userName= new Subject<string>();
videoEmit = new ReplaySubject<string>(5);
asyncVideoEmit = new AsyncSubject();

url = 'https://my-json-server.typicode.com/Uxtrendz/apis/videoList'

  constructor(private http: HttpClient) { }

  print(val:any, containerId: any){
    let el = document.createElement('li')
    el.innerText= val;
    document.getElementById(containerId)?.appendChild(el)

  }

getSearches(searchTerm: string):Observable<any>{
  return this.http.get<any>(this.url+'?q='+searchTerm)
}
}
