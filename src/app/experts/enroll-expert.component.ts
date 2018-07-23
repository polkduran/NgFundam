import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { ExpertService, IExpert } from './shared/index'

@Component({
    templateUrl: 'enroll-expert.component.html',
    styles:[`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-ms-input-placeholder { color: #999; }
  `]
})

export class EnrollExpertComponent {
    isDirty: boolean = true
    constructor(private router: Router, private expertService: ExpertService){

    }

    cancel(){
        this.router.navigate(['/experts'])
    }

    saveExpert(formValues){
        this.expertService.save(formValues)
        this.isDirty = false
        this.router.navigate(['/experts'])
    }
}