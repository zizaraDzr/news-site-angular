import { Component, OnInit } from '@angular/core';
import {delay} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {NewsService} from "../shared/news.service";

export interface listNews {
  id: string,
  title: string,
  url: string,
  imageUrl: string,
  newsSite: string,
  summary: string,
  publishedAt: string,
  updatedAt?: string,
  featured?: boolean,
  launches?: [],
  events?: []
}
@Component({
  selector: 'app-table-news',
  templateUrl: './table-news.component.html',
  styleUrls: ['./table-news.component.css']
})
export class TableNewsComponent implements OnInit {
  loading: boolean = true
  filter: string = ''
  listNews: listNews[] = []

  constructor( private http: HttpClient, private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.downloadNews()
      // .pipe(delay(1000))
      .subscribe((data) => {
        this.listNews = data
        this.loading = false
      })
  }
  clearFilter() {
    this.filter =''
  }

}
