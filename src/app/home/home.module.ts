import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { ShowComponent } from './show/show.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

const mat = [
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    CreateComponent,
    ListComponent,
    UpdateComponent,
    ShowComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    mat,
  ],
  exports: [CreateComponent, ListComponent, UpdateComponent, ShowComponent],
})
export class HomeModule {}
