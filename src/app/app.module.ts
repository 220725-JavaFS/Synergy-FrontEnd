import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';

import { FeatureOneComponent } from './components/feature-one/feature-one.component';
import { FeatureTwoComponent } from './components/feature-two/feature-two.component';
import { FeatureThreeComponent } from './components/feature-three/feature-three.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { SelectorComponent } from './components/selector/selector.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HomeComponent } from './components/home/home.component';
import { GalleryComponent } from './components/gallery/gallery.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ComponentsComponent } from './components/components.component';
import { RegisterCompleteComponent } from './components/register-complete/register-complete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FaqComponent,
    FooterComponent,
    SelectorComponent,
    NavComponent,
    FavoriteComponent,
    HomeComponent,
    GalleryComponent,
    LoginComponent,
    ComponentsComponent,
    RegisterCompleteComponent,
    routingComponents  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
