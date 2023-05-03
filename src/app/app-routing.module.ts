import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './li components/home/home.component';
import { AboutMeComponent } from './li components/about-me/about-me.component';
import { SkillsComponent } from './li components/skills/skills.component';
import { ProyectsComponent } from './li components/proyects/proyects.component';
import { ContactMeComponent } from './li components/contact-me/contact-me.component';

const routes :Routes=[
  {
    path:"", component:HomeComponent,
  },
  {
    path:"aboutMe", component:AboutMeComponent
  },
  {
    path:"skills", component:SkillsComponent
  },
  {
    path:"proyects", component:ProyectsComponent
  },
  {
    path:"contacts", component:ContactMeComponent 
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
