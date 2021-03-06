import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
    ExpertsListComponent,
    ExpertDetailsComponent,
    EnrollExpertComponent,
    ExpertRouteActivator,
    ExpertsListResolver,
    CreateToolComponent,
    CreateAchievementComponent
} from './experts/index'

export const appRoutes:Routes = [
    { path: 'experts', component: ExpertsListComponent, resolve: {experts: ExpertsListResolver} },
    { path: 'experts/enroll', component: EnrollExpertComponent, canDeactivate: ['canDeactivateEnrollExpert']},
    { path: 'experts/tool/new', component: CreateToolComponent},
    { path: 'experts/achievement/new', component: CreateAchievementComponent},
    { path: 'experts/:id', component: ExpertDetailsComponent, canActivate: [ExpertRouteActivator] },
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/experts', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule'}
]