import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'app-reqest',
  templateUrl: './reqest.component.html',
  styleUrls: ['./reqest.component.css']
})
export class ReqestComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) { }

  makeRequest (): void {
    this.loading = true;
    this.http.request('https://swapi.co/api/people').subscribe((res: Response) => {
      this.data = res.json();
      this.loading = false;
    },
    (err: any) => {
        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          console.log('An error occurred:', err.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.log(`Backend return code ${err.status}, body was: ${err.error}`);
        }
      }
    )
  }


  ngOnInit() {
  }

}
