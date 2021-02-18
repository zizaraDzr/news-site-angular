import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-news',
  templateUrl: './filter-news.component.html',
  styleUrls: ['./filter-news.component.css']
})
export class FilterNewsComponent implements OnInit {
  filter: string = ''
  constructor() { }

  ngOnInit(): void {
  }
  clearFilter() {
    this.filter =''
  }
  search(data: string) {
    console.log('search', data)
  }

}
