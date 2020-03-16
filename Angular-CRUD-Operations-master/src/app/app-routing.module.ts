import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { CockiesComponent } from './cockies/cockies.component';


const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'user-detail', component: UserDetailComponent },
  { path : '', redirectTo : 'home', pathMatch : 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'cockies', component: CockiesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
