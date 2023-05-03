import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './li components/home/home.component';
import { AboutMeComponent } from './li components/about-me/about-me.component';
import { SkillsComponent } from './li components/skills/skills.component';
import { ProyectsComponent } from './li components/proyects/proyects.component';
import { ContactMeComponent } from './li components/contact-me/contact-me.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    SkillsComponent,
    ProyectsComponent,
    ContactMeComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule, RouterModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
