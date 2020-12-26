import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditCompComponent } from './edit-comp/edit-comp.component';

const routes: Routes = [
  {path:'edit/:urlId' , component:EditCompComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
