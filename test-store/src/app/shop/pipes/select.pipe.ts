import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'select'})
export class SelectPipe implements PipeTransform {
  transform(selectedItem: number | string, item: number | string): boolean {
    return selectedItem === item;
  }
}
