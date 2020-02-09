import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const AppRoutes: Routes = [
  {path: '', loadChildren : './auth/auth.module#AuthModule'},
  {path: 'dashbaord', loadChildren : './dashboard/dashboard.module#DashboardModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes,{
    useHash : true,
  }),
],

  exports: [RouterModule]
})
export class AppRoutingModule { }