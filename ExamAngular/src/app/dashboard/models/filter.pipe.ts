import { Pipe, PipeTransform } from '@angular/core';
import { Poll } from './poll';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<Poll>, searchStr: string): Array<Poll> {
    if (!value) { return value; }

    return value.filter(poll => {
      return poll.question.toLowerCase().includes(searchStr.toLowerCase());
    });
  }
}
