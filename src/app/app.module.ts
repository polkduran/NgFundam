import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { ExpertsAppComponent } from './experts-app.component';
import { ExpertsListComponent } from './experts/experts-list.component'
import { ExpertThumbnailComponent } from './experts/expert-thumbnail.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { ExpertDetailsComponent } from './experts/expert-details/expert-details.component'
import { EnrollExpertComponent } from './experts/enroll-expert.component'
import { Error404Component } from './errors/404.component'

import { ExpertService } from './experts/shared/expert.service'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { ExpertRouteActivator } from './experts/expert-details/expert-route-activator.service'
import { ExpertsListResolver } from './experts/experts-list-resolver.service'

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ExpertsAppComponent,
    ExpertsListComponent,
    ExpertThumbnailComponent,
    NavBarComponent,
    ExpertDetailsComponent,
    EnrollExpertComponent,
    Error404Component
  ],

  providers: [
    ExpertService,
    ToastrService,
    ExpertRouteActivator,
    ExpertsListResolver,
    {
      provide: 'canDeactivateEnrollExpert',
      useValue: checkDirtyState
    }
   ],
  bootstrap: [ExpertsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: EnrollExpertComponent){
  if(component.isDirty){
    return window.confirm("Inscription de l'expert non terminée. Voulez-vous annuler l'inscription en cours ?")
  }
  return true
}