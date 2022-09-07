import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FeatureOneComponent } from './feature-one/feature-one.component';
import { FeatureTwoComponent } from './feature-two/feature-two.component';
import { FeatureThreeComponent } from './feature-three/feature-three.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { SelectorComponent } from './selector/selector.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FeatureOneComponent,
    FeatureTwoComponent,
    FeatureThreeComponent,
    FaqComponent,
    FooterComponent,
    SelectorComponent,
    RegisterComponent,
    NavComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
