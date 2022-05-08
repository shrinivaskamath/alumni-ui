import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraionFormComponent } from './registraion-form/registraion-form.component';

const routes: Routes = [
  {path:'registration', component: RegistraionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
