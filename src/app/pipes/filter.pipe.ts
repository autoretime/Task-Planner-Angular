import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../interfaces/task';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: Task[], showCompleted: boolean): Task[] {
    return showCompleted ? items : items.filter(item => !item.complete);
  }
}
