import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(a => a.AuthModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./crud-ops/crud-ops.module').then(c => c.CrudOpsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
