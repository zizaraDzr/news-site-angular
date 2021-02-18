import { Component, OnInit } from '@angular/core';
import {NewsService} from "../shared/news.service";
import {delay} from "rxjs/operators";

@Component({
  selector: 'app-table-news',
  templateUrl: './table-news.component.html',
  styleUrls: ['./table-news.component.css']
})
export class TableNewsComponent implements OnInit {
  news: string[] = [];
  loading: boolean = true

  constructor( private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews()
      .pipe(delay(2000))
      .subscribe(() => {
        this.loading = false
      })
    console.log(this.newsService)
  }

}
