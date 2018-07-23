import { Component } from '@angular/core'
import { Router } from '@angular/router'

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

export class EnrollExpertComponent{
    isDirty: boolean = true
    newExpert
    constructor(private router: Router){

    }

    cancel(){
        this.router.navigate(['/experts'])
    }

    saveExpert(formValues){
        console.log(formValues)
    }
}