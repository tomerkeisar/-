import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusCorona'
})
export class StatusCoronaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}