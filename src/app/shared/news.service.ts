import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

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
// для автоматического регистрирования и не надо его отмечать в модуле
@Injectable({providedIn: 'root'})
export class NewsService {
  public news: listNews[] = [{
      id: '4',
      title: 'asd',
      url: 'asd',
      imageUrl: 'eee',
      newsSite: 'string',
      summary: 'string',
      publishedAt: 'string'
    }]
  constructor( private http: HttpClient) {}

  getNews(): Observable<listNews[]> {
    return this.http.get<listNews[]>('https://test.spaceflightnewsapi.net/api/v2/articles?_limit=30')
      .pipe(tap( item => {
        this.news = item
      } ))
  }
}
