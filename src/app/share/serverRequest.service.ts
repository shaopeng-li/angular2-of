import  { Http } from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class requestService {
	data: Object;

	constructor(private http: Http) {}

	getRequest (url: string): any {
		return this.http.get(url);
	}
}