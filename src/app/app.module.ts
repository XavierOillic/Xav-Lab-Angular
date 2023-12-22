import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SmileysComponent } from './components/smileys/smileys.component';
import { PenDrawingsComponent } from './components/pen-drawings/pen-drawings.component';
import { DigitalDrawingsComponent } from './components/digital-drawings/digital-drawings.component';
import { ColoursPortraitsComponent } from './components/colours-portraits/colours-portraits.component';
import { PenPortraitsComponent } from './components/pen-portraits/pen-portraits.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PenDrawingsPageComponent } from './pages/pen-drawings-page/pen-drawings-page.component';
import { DigitalDrawingsPageComponent } from './pages/digital-drawings-page/digital-drawings-page.component';
import { ColoursPortraitsPageComponent } from './pages/colours-portraits-page/colours-portraits-page.component';
import { PenPortraitsPageComponent } from './pages/pen-portraits-page/pen-portraits-page.component';
import { TestsComponent } from './components/tests/tests.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SmileysComponent,
    PenDrawingsComponent,
    DigitalDrawingsComponent,
    ColoursPortraitsComponent,
    PenPortraitsComponent,
    HomePageComponent,
    PenDrawingsPageComponent,
    DigitalDrawingsPageComponent,
    ColoursPortraitsPageComponent,
    PenPortraitsPageComponent,
    TestsComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
