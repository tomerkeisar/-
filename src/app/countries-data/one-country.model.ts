import { statusCorona } from './status-corona.enum';

export class OneCountryModel {
  _name: string;
  _image: string;
  _statusCorona: statusCorona;

  constructor(name: string, image: string, statusCorona?: any) {
    this._image = image;
    this._name = name;
    this._statusCorona = statusCorona;
  }
}
