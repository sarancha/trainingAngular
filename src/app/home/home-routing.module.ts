import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'create',
        component: CreateComponent,
      },
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'show',
        component: ShowComponent,
      },
      {
        path: 'update',
        component: UpdateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
