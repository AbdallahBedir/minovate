import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {CommonModule} from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {WelcomeSectionsService} from './welcome/welcome-sections.service';
import { OurServicesComponent } from './our-services/our-services.component';
import {ServiceSectionsService} from './our-services/service-sections.service';
import { SectionsComponent } from './sections/sections.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievmentsComponent } from './achievments/achievments.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    WelcomeComponent,
    OurServicesComponent,
    SectionsComponent,
    ProjectsComponent,
    AchievmentsComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [WelcomeSectionsService,ServiceSectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
