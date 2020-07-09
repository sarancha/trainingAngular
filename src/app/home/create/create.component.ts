import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { article } from 'src/app/Model/article';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  article: any;
  isDisabled = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit(article: article) {
    const articlesArr = JSON.parse(localStorage.getItem('article')) || [];
    await articlesArr.push(article);
    localStorage.setItem('article', JSON.stringify(articlesArr));
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
    this.router.navigate(['/home/list']);
  }
}
