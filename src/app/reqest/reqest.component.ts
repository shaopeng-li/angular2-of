import { Component, OnInit } from '@angular/core';
import { requestService } from '../share/serverRequest.service';
import {Response} from '@angular/http';
import {loggingService} from '../share/logging.service';


@Component({
  selector: 'app-reqest',
  templateUrl: './reqest.component.html',
  styleUrls: ['./reqest.component.css'],
  providers: [loggingService, requestService]
})
export class ReqestComponent implements OnInit {
  data: Object;
  loading: boolean;
  private condition = false;

  constructor(private loggingService: loggingService, private requestService: requestService) { }

  makeRequest (): void {
    this.loading = true;
    var url = 'https://swapi.co/api/people';

    this.requestService.getRequest(url).subscribe((res: Response) => {
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
    });
    this.loggingService.logStatusChange(url);
  }

  // toggle request result block
  toggleCondition () {
    this.condition = !this.condition;
  }

  ngOnInit() {
  }

}
