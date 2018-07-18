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
    ExpertRouteActivator
   ],
  bootstrap: [ExpertsAppComponent]
})
export class AppModule { }
