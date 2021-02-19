import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tableFilter'
})
export class TableFilterPipe implements PipeTransform{
  transform(listNews: any[], searchValue: string) {
    if (!searchValue.trim()) {
      return listNews
    }

    return listNews.filter(item => {
      return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    })
  }

}
