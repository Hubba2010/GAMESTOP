import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluck',
})
export class PluckPipe implements PipeTransform {
  transform(data: any, key: string): any[] {
    if (!Array.isArray(data)) {
      return data;
    }

    return data.map(item => item[key]);
  }

}