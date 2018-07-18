import { Component } from '@angular/core';

@Component({
  selector: 'experts-app-root',
  template: `
  <nav-bar></nav-bar>
  <experts-list></experts-list>
  `
})
export class ExpertsAppComponent {
  title = 'Les experts';
}
