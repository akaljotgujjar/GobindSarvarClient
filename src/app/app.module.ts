import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routerModule } from './routes';
import { RouterModule, Routes} from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { SchoolInfoComponent } from './school-info/school-info.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ResourcesComponent } from './resources/resources.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GurmukhiComponent } from './resources/gurmukhi/gurmukhi.component';
import { LkcComponent } from './resources/lkc/lkc.component';
import { GsRecComponent } from './resources/gs-rec/gs-rec.component';

const appRoutes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SchoolInfoComponent,
    EventsComponent,
    ContactComponent,
    HomeComponent,
    HeaderComponent,
    ResourcesComponent,
    SignInComponent,
    GurmukhiComponent,
    LkcComponent,
    GsRecComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    routerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
