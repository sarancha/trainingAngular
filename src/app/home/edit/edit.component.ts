import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { article } from 'src/app/Model/article';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  article: any;
  isDisabled = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.findDataLocalStorage(title);
  }

  findDataLocalStorage(title: any) {
    const data = JSON.parse(localStorage.getItem('article'));
    this.article = data.filter((data) =>
      Object.is(JSON.stringify(data.title), JSON.stringify(title))
    )[0];
  }

  async onSubmit(article: article) {
    const data = JSON.parse(localStorage.getItem('article'));
    const patchValue = data.filter(
      (data) =>
        !Object.is(JSON.stringify(data.title), JSON.stringify(article.title))
    );
    await patchValue.push(article);
    localStorage.setItem('article', JSON.stringify(patchValue));
    Swal.fire({
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500,
    });
    this.router.navigate(['/home/list']);
  }
}
