import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterCompleteComponent } from './components/register-complete/register-complete.component';
import { SigninComponent } from './components/signin/signin.component';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { VideogameComponent } from './components/videogame/videogame.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'register-complete', component: RegisterCompleteComponent}
  { path: 'main', component: MainComponent}, 
  { path: 'search/:game-search', component: VideogameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent, 
                                  LoginComponent, RegisterComponent,
                                  SigninComponent, MainComponent,
                                  SearchComponent, VideogameComponent];
