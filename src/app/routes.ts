import { Routes } from '@angular/router'
import { ExpertsListComponent } from "./experts/experts-list.component";
import { ExpertDetailsComponent } from "./experts/expert-details/expert-details.component";
import { EnrollExpertComponent } from './experts/enroll-expert.component'

export const appRoutes:Routes = [
    { path: 'experts', component: ExpertsListComponent },
    { path: 'experts/enroll', component: EnrollExpertComponent},
    { path: 'experts/:id', component: ExpertDetailsComponent },
    { path: '', redirectTo: '/experts', pathMatch: 'full' }
]