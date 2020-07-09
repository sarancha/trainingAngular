import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';


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
        path: 'edit/:title',
        component: EditComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
