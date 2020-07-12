import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { SchoolInfoComponent } from './school-info/school-info.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ResourcesComponent } from './resources/resources.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { GurmukhiComponent } from './resources/gurmukhi/gurmukhi.component';
import { LkcComponent } from './resources/lkc/lkc.component';
import { GsRecComponent } from './resources/gs-rec/gs-rec.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {},
        data: {
            name: 'Home'
        }
    },
    {
        path: 'resources',
        component: ResourcesComponent,
        resolve: {},
        data: {
            name: 'Resources'
        }
    },
    {
        path: 'schoolInfo',
        component: SchoolInfoComponent,
        resolve: {},
        data: {
            name: 'SchoolInfo'
        }
    },
    {
        path: 'events',
        component: EventsComponent,
        resolve: {},
        data: {
            name: 'Events'
        }
    },
    {
        path: 'contact',
        component: ContactComponent,
        resolve: {},
        data: {
            name: 'Contact'
        }
    },
    {
        path: 'signIn',
        component: SignInComponent,
        resolve: {},
        data: {
            name: 'SignIn'
        }
    },
    {
        path: 'gurmukhi',
        component: GurmukhiComponent,
        resolve: {},
        data: {
            name: 'Gurmukhi'
        }
    }
    ,
    {
        path: 'lkc',
        component: LkcComponent,
        resolve: {},
        data: {
            name: 'LKC'
        }
    }
    ,
    {
        path: 'gsRec',
        component: GsRecComponent,
        resolve: {},
        data: {
            name: 'GSRec'
        }
    }
];

export const routerModule = RouterModule.forRoot(routes);
