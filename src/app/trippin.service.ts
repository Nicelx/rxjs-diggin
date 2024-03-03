import {  Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TRIPPIN_BASE_URL } from './app.config';
// import { TRIPPIN_BASE_URL } from './app.config';

@Injectable({
  providedIn: 'root'
})
export class TrippinService {

  constructor(
    private httpClient: HttpClient,
    @Inject(TRIPPIN_BASE_URL) private baseUrl: string
    ) { }

  public getPeople(nameFilter?: string) : Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}/People`)
  }
}
