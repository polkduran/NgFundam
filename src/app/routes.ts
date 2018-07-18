import { Routes } from '@angular/router'
import { ExpertsListComponent } from "./experts/experts-list.component";
import { ExpertDetailsComponent } from "./experts/expert-details/expert-details.component";
import { EnrollExpertComponent } from './experts/enroll-expert.component'
import { Error404Component } from './errors/404.component';
import { ExpertRouteActivator } from './experts/expert-details/expert-route-activator.service';

export const appRoutes:Routes = [
    { path: 'experts', component: ExpertsListComponent },
    { path: 'experts/enroll', component: EnrollExpertComponent},
    { path: 'experts/:id', component: ExpertDetailsComponent, canActivate: [ExpertRouteActivator] },
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/experts', pathMatch: 'full' }
]