import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ResourcesComponent } from './resources/resources.component';
import { BooksComponent } from './books/books.component';
import { PostComponent } from './books/components/post/post.component';
import { BlogComponent } from './books/components/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomeComponent,
    EventsComponent,
    FooterComponent,
    ResourcesComponent,
    BooksComponent,
    PostComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
