import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JoinUsComponent } from './join-us/join-us.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:'join-Us', component:JoinUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
