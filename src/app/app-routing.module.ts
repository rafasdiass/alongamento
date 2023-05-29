import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './template/navbar/navbar.component';
import { HeadingRowComponent } from './components/heading-row/heading-row.component';
import { ContentRowComponent } from './components/content-row/content-row.component';
import { FooterComponent } from './template/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HeadingRowComponent },
  { path: 'about', component: ContentRowComponent },
  { path: 'content', component: ContentRowComponent },

  { path: 'services', component: ContentRowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
