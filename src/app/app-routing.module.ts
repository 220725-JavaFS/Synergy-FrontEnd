import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CommentsComponent } from './components/comments/comments.component';
import { GameComponent } from './components/game/game.component';
import { RatingsComponent } from './components/ratings/ratings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorite', component: FavoriteComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'games/:game_id/comments', component: CommentsComponent },
  { path: 'games/:game_id', component: GameComponent },
  { path: 'games/:game_id/ratings', component: RatingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
