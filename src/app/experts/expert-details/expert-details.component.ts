import { Component, Input, OnInit } from '@angular/core'
import { ExpertService } from '../shared/expert.service'

@Component({
    // no selector as routed 
    templateUrl:'expert-details.component.html',
    styles:[`
       .container { padding-left: 20px; padding-right: 20px; }
       .expert-photo { height: }
    `]
})

export class ExpertDetailsComponent implements OnInit{
    expert
    constructor(private expertService: ExpertService){

    }

    ngOnInit(): void {
        this.expert = this.expertService.getById(1);
    }
}