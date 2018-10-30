import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movies/movie-list.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './shared/component/not-found.component';
import { MovieService } from './services/movie.service';
import { MovieComponent } from './movies/movie.component';

const routes: Routes = [
  {path:'',component:MovieListComponent},
  {path:'login',component:LoginComponent},
  {path:'movie/:id',component:MovieComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
