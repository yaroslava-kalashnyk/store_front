import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'select'})
export class SelectPipe implements PipeTransform {
  transform(selectedItem: number, item: number): boolean {
    return selectedItem === item;
  }
}
