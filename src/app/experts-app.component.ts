import { Component } from '@angular/core';

@Component({
  selector: 'experts-app-root',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `
})
export class ExpertsAppComponent {
  title = 'Les experts';
}
