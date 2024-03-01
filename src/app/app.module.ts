import { InjectionToken, NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { HttpClientModule } from '@angular/common/http';

export const TRIPPIN_BASE_URL = new InjectionToken<string>('TRIPPIN_BASE_URL')

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
       {provide: TRIPPIN_BASE_URL, useValue: 'https://services.odata.org/TripPinRESTierService/(S(1s4zmzvoy2jngy3i43cgymh5))'},
      importProvidersFrom(HttpClientModule),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
