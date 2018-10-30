import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movies/movie-list.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/layout/header.component';
import { FooterComponent } from './shared/layout/footer.component';
import { NotFoundComponent } from './shared/component/not-found.component';
import { MovieComponent } from './movies/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
