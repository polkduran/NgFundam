import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import {
  ExpertsListComponent,
  ExpertThumbnailComponent,
  ExpertDetailsComponent,
  EnrollExpertComponent,
  ExpertService,
  ExpertRouteActivator,
  ExpertsListResolver
} from './experts/index'

import { ExpertsAppComponent } from './experts-app.component';
import { NavBarComponent } from './nav/nav-bar.component'
import { Error404Component } from './errors/404.component'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'
import { AuthService } from './user/auth.service'

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
    },
    AuthService
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