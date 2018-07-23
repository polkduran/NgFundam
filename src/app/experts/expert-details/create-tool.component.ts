import { Component, OnInit } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ITool, ExpertService } from '../shared/index';

@Component({
    templateUrl: 'create-tool.component.html',
    styles:[`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input, .error select { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-ms-input-placeholder { color: #999; }
  `]
})

export class CreateToolComponent implements OnInit{
    newToolForm: FormGroup
    name: FormControl
    level: FormControl

    constructor(private router:Router, private expertService:ExpertService ){
        
    }

    ngOnInit(){
        this.name = new FormControl('', [Validators.required, Validators.maxLength(20)])
        this.level = new FormControl('', Validators.required)

        this.newToolForm = new FormGroup({
            name: this.name,
            level: this.level
        })
    }

    saveTool(formValues){
        let tool:ITool = {
            id: undefined,
            name: formValues.name,
            level: formValues.level
        } 

        this.expertService.saveTool(tool)
        this.router.navigate(['/experts'])
    }

    cancel(){
        this.router.navigate(['experts'])
    }
}