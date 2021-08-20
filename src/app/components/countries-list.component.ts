import { Component } from '@angular/core';
import { AllCountriesService } from '../countries-data/map-function';

@Component({
  selector: 'countries-list',
  template: `
    <one-country *ngFor="let country of countriesData" [data]="country">
    </one-country>
  `
})
export class CountriesListComponent {
  countriesData;
  constructor(service: AllCountriesService) {
    this.countriesData = service.smallCountriesData;
  }
}
