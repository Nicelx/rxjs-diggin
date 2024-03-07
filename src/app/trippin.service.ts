import { Inject, Injectable } from "@angular/core";
import { Observable, map, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
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

	public getPeople(nameFilter?: string): Observable<{value: any[]}> {
		return this.httpClient
			.get<{value: any[]}>(`${this.baseUrl}/People`)
	}
}
