import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFormatDate'
})
export class TableFormatDatePipe implements PipeTransform{
  transform(date: string, value: string) {
    if (!value.trim()) {
      return date
    }
    let options = { day: 'numeric', month: 'long', year: 'numeric' }

    return new Intl.DateTimeFormat('ru-Ru', options).format(Date.parse(value))
  }
}
