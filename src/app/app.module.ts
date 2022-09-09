import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectorComponent } from './components/selector/selector.component';
// import { RegisterComponent } from './components/register/register.component';
// import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
// import { HomeComponent } from './components/home/home.component';
// import { GalleryComponent } from './components/gallery/gallery.component';
// import { SigninComponent } from './components/signin/signin.component';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FaqComponent,
    FooterComponent,
    SelectorComponent,
    // RegisterComponent,
    NavComponent,
    FavoriteComponent,
    // HomeComponent,
    // GalleryComponent,
    // LoginComponent,
    // SigninComponent
    routingComponents  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
