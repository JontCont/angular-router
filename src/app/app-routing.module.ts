import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './@Views/home/home.component';
import { BookComponent } from './@Views/other/book/book.component';
import { OtherComponent } from './@Views/other/other.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'other', component: OtherComponent,children:[
    { path: 'book', component: BookComponent, },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
