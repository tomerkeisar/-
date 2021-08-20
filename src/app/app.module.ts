import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list.component';
import { OneCountryCompnent } from './components/one-country.component';
import { StatusCoronaPipe } from './status-corona.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CountriesListComponent,
    OneCountryCompnent,
    StatusCoronaPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
