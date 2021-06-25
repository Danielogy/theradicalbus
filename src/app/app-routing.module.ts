import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BlogComponent } from './books/components/blog/blog.component';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "events", component: EventsComponent},
  {path: "resources", component: ResourcesComponent},
  {path: "books", component: BooksComponent},
  {path: "books/blog", component: BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
