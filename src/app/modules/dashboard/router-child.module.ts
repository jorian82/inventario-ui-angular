import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from '../category/components/category/category.component';

const dashboardChildRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoryComponent }
]

@NgModule({
  imports: [RouterModule.forChild(dashboardChildRoutes)],
  exports: [RouterModule]
})
export class DashboardRouterChildModule { }
