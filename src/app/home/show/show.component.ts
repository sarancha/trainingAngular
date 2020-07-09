import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { article } from 'src/app/Model/article';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  title: string;
  show: article;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.queryParamMap.get('title');
    const article = JSON.parse(localStorage.getItem('article'));
    this.show = article.filter((article) =>
      Object.is(JSON.stringify(article.title), JSON.stringify(this.title))
    )[0];
    console.log(this.show);
    
  }

  deleteArticle(i) {
    const article = JSON.parse(localStorage.getItem('article'));
    const j = article.filter(
      (article) => !Object.is(JSON.stringify(article), JSON.stringify(i))
    );
    localStorage.setItem('article', JSON.stringify(j));
  }
}
