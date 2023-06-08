import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudOpsRoutingModule } from './crud-ops-routing.module';
import { ListRestroComponent } from './list-restro/list-restro.component';
import { AddRestroComponent } from './add-restro/add-restro.component';
import { UpdateRestroComponent } from './update-restro/update-restro.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListRestroComponent, AddRestroComponent, UpdateRestroComponent],
  imports: [
    CommonModule,
    CrudOpsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CrudOpsModule { }
