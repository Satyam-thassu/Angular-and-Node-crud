import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './component/create/create.component';
import { ReadComponent } from './component/read/read.component';
import { EditComponent } from './component/edit/edit.component';

const routes: Routes = [
  {path:'create', component:CreateComponent},
  {path:'read', component:ReadComponent},
  {path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
