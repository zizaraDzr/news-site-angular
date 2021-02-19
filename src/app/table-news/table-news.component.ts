import { Component, OnInit } from '@angular/core';
import {delay, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

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
  constructor( private http: HttpClient) {}


  ngOnInit(): void {
    this.getNews()
      .pipe(delay(2000))
      .subscribe(() => {
        this.loading = false
      })
    console.log(this.listNews)
  }
  clearFilter() {
    this.filter =''
  }
  getNews(): Observable<listNews[]> {
    return this.http.get<listNews[]>('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30')
      .pipe(tap( item => {
        this.listNews = item
      } ))
  }
  search(data: string) {
    console.log('search', data, this.listNews)
  }


}
