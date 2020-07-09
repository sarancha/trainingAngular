import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  get loadLocalStorage() {
    return JSON.parse(localStorage.getItem('article'));
  }

  deleteArticle(i) {
    const article = JSON.parse(localStorage.getItem('article'));
    var j = article.filter(
      (article) => !Object.is(JSON.stringify(article), JSON.stringify(i))
    );
    localStorage.setItem('article', JSON.stringify(j));
  }

  param(i) {
    this.router.navigate(['/home/show'], { queryParams: { title: i } });
  }
}
