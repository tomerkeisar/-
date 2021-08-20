import { Injectable } from '@angular/core';
import { countries } from './basic-countries-data';
import { CoronaCountriesStatus } from './corona-countries-data';
import { OneCountryModel } from './one-country.model';
import { statusCorona } from './status-corona.enum';

@Injectable({
  providedIn: 'root'
})
export class AllCountriesService {
  smallCountriesData;

  constructor() {
    this.smallCountriesData = this.GetAllCountries();
  }

  private GetAllCountries() {
    return countries.map(
      x => new OneCountryModel(x.name, x.flag, this.GetStatusCorona(x.name))
    );
  }

  private GetStatusCorona(nameOfCountry) {
    return CoronaCountriesStatus[nameOfCountry]
      ? CoronaCountriesStatus[nameOfCountry]
      : statusCorona.Unknown;
  }
}
