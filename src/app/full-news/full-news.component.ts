import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {listNews, NewsService} from "../shared/news.service";


@Component({
  selector: 'app-full-news',
  templateUrl: './full-news.component.html',
  styleUrls: ['./full-news.component.css']
})
export class FullNewsComponent implements OnInit {
    fullNews: listNews = {
      id: "",
      newsSite: "",
      publishedAt: "",
      url: "",
      title: '', updatedAt: '', summary: '', imageUrl: ''};

    constructor(private route: ActivatedRoute, private newsService: NewsService){}
    ngOnInit() {
      this.route.paramMap
        .subscribe(params=> {
          this.fullNews = this.newsService.getNews().filter(item => item.id === params.get('id'))[0]
        });
    }


}
