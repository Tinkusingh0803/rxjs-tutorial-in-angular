import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css'],
})
export class RetryComponent implements OnInit {
  person: any;
  noData: any = 'No Data';
  fetching: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  fetchObject() {
    this.fetching = true;
    this.http
      .get('https://jsonplaceholder.typicode.com/users').pipe(
        retry(100)
      )
      .subscribe((res) => {
        console.log(res);
        this.person = res;
        this.noData = 'data fetched';
        this.fetching = false;
      },
      (err: any) => {
        console.log(err);
        this.noData = 'data problem fetch';
        this.fetching = false;
      });
  }
}
