import { Component, Input } from '@angular/core';
import { OneCountryModel } from '../countries-data/one-country.model';

@Component({
  selector: 'one-country',
  template: `
    <div style="border:4px {{ data._statusCorona }} solid;">
      <h4>{{ data._name }}</h4>
      <img src="{{ data._image }}" width="200" />
      <p>{{ data._statusCorona }} Country</p>
    </div>
  `,
  styles: [
    `
      div {
        width: 250px;
        margin: 5px;
        padding: 5px;
      }
    `
  ]
})
export class OneCountryCompnent {
  @Input() data: OneCountryModel;
}
