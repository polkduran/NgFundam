import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ExpertsAppComponent } from './experts-app.component';
import { ExpertsListComponent } from './experts/experts-list.component'
import { ExpertThumbnailComponent } from './experts/expert-thumbnail.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { ExpertService } from './experts/shared/expert.service'
import { ToastrService } from './common/toastr.service'

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    ExpertsAppComponent,
    ExpertsListComponent,
    ExpertThumbnailComponent,
    NavBarComponent
  ],

  providers: [
    ExpertService,
    ToastrService
   ],
  bootstrap: [ExpertsAppComponent]
})
export class AppModule { }
