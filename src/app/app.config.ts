import { InjectionToken, importProvidersFrom } from "@angular/core"
import { ApplicationConfig } from "@angular/platform-browser"
import {HttpClientModule,
  //  provideHttpClient
  } from "@angular/common/http"

// export const TRIPPIN_BASE_URL = new InjectionToken<string>('TRIPPIN_BASE_URL')

export const appConfig:ApplicationConfig = {
  providers: [
    // {provide: TRIPPIN_BASE_URL, useValue: 'https://services.odata.org/TripPinRESTierService/(S(1s4zmzvoy2jngy3i43cgymh5))'},
    // importProvidersFrom(HttpClientModule),
    // provideHttpClient()
  ]
}
// S(1s4zmzvoy2jngy3i43cgymh5)