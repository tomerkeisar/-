import { Component, Input } from '@angular/core';
import { OneCountryModel } from '../countries-data/one-country.model';

@Component({
  selector: 'one-country',
  template: `
    <div style="border:4px {{ data._statusCorona }} solid;">
      <h4>{{ data._name }}</h4>
      <img src="{{ data._image }}" width="100" height="100" />
      <p>{{ data._statusCorona | statusCorona }} Country</p>
    </div>
  `,
  styles: [
    `
      div {
        width: 300px;
        height: 250px;
        margin: 5px;
        padding: 5px;
        display: inline-block;
      }
    `
  ]
})
export class OneCountryCompnent {
  @Input() data: OneCountryModel;
}
