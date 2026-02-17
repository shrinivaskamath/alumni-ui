import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistraionFormComponent } from './registraion-form/registraion-form.component';
import { CentenaryPageComponent } from './centenary-page/centenary-page.component';

const routes: Routes = [
  { path: 'centenary', component: CentenaryPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'gallery', component: GalleryPageComponent },
  { path: 'history', component: HistoryPageComponent },
  { path: 'contact', component: ContactUsComponent },
  {
    path: 'registration',
    component: RegistraionFormComponent,
  },
  { path: '', redirectTo: 'centenary', pathMatch: 'full' },
  { path: '**', redirectTo: 'centenary', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
