import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { restrictedWordsValidator, IAchievement } from '../shared/index';

@Component({
    selector:'create-achievement',
    templateUrl: 'create-achievement.component.html',
    styles:[`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input, .error select, .error textarea { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-ms-input-placeholder { color: #999; }
  `]
})

export class CreateAchievementComponent implements OnInit{
    @Output() saveNewAchievement = new EventEmitter()
    @Output() cancelAddAchievement = new EventEmitter()
    newAchievementForm: FormGroup
    date: FormControl
    description: FormControl
    proudness: FormControl

    constructor(private router:Router){

    }

    ngOnInit(){
        this.date = new FormControl('')
        this.description = new FormControl('', [Validators.required, Validators.maxLength(100), restrictedWordsValidator(['java'])])
        this.proudness = new FormControl('', [Validators.min(1), Validators.max(10), Validators.required])

        this.newAchievementForm = new FormGroup({
            date: this.date,
            description: this.description,
            proudness: this.proudness
        })
    }

    saveAchievement(formValues){
        let achievement:IAchievement = {
            id: undefined,
            date: new Date(formValues.date),
            description: formValues.description,
            proudness: +formValues.proudness
        }
        this.saveNewAchievement.emit(achievement)
    }

    cancel(){
        this.cancelAddAchievement.emit()
    }
}