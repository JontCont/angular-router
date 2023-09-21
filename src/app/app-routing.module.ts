import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './@Views/home/home.component';
import { BookComponent } from './@Views/other/book/book.component';
import { OtherComponent } from './@Views/other/other.component';
import { ChildrenRoutingModule } from './@Views/children/children-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'other', component: OtherComponent, children: [
      { path: 'book', component: BookComponent, },
    ]
  },
  {
    path: 'children', loadChildren: () => ChildrenRoutingModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
