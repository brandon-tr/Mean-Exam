import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PollComponent } from './dashboard/poll/poll.component';
import { CreateComponent } from './dashboard/create/create.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'poll/:id', component: PollComponent},
  {path: 'create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
