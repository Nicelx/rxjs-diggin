import { Inject, Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { TRIPPIN_BASE_URL } from "./app.config";

interface Result {
	value: [];
}

@Injectable({
	providedIn: "root",
})
export class TrippinService {
	constructor(
		private httpClient: HttpClient,
		@Inject(TRIPPIN_BASE_URL) private baseUrl: string
	) {}

	public getPeople(nameFilter?: string): Observable<{ value: any[] }> {
		// return this.httpClient.get<{ value: any[] }>(`${this.baseUrl}/People`);
    let params = new HttpParams();
    if (nameFilter) {
      params = params.set(
        '$filter',
        `contains(FirstName, '${nameFilter}') or contains(LastName, '${nameFilter}') or (MiddleName ne null and contains(MiddleName, '${nameFilter}'))`
      );
    }
    params = params.set('$select', 'UserName,FirstName,MiddleName,LastName,Age');
    params = params.set('$orderby', 'LastName,FirstName');

    return this.httpClient
      .get<{ value: any[] }>(`${this.baseUrl}/People`, { params })
	}
}
