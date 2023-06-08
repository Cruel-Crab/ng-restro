import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddRestroComponent} from './add-restro/add-restro.component';
import {ListRestroComponent} from './list-restro/list-restro.component';
import {UpdateRestroComponent} from './update-restro/update-restro.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'crud/add',
  //   pathMatch: 'full'
  // },
  {
    path: 'add',
    component: AddRestroComponent
  },
  {
    path: 'list',
    component: ListRestroComponent
  },
  {
    path: 'update/:id',
    component: UpdateRestroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudOpsRoutingModule { }
