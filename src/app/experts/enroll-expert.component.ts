import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ExpertService, IExpert, ITool } from './shared/index'

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

export class EnrollExpertComponent implements OnInit {
    isDirty: boolean = true
    availableTools: ITool[]
    constructor(private router: Router, private expertService: ExpertService){

    }

    ngOnInit(){
        this.expertService.getTools().subscribe( tools => this.availableTools = tools)
    }

    cancel(){
        this.router.navigate(['/experts'])
    }

    saveExpert(formValues){
        this.expertService.saveExpert(formValues)
        this.isDirty = false
        this.router.navigate(['/experts'])
    }

    compareTools(tool1:ITool, tool2:ITool){
        return tool1 && tool2 && tool1.id == tool2.id
    }
}