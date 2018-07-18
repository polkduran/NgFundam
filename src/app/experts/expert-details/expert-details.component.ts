import { Component, Input, OnInit } from '@angular/core'
import { ExpertService } from '../shared/expert.service'
import { ActivatedRoute } from '@angular/router'


@Component({
    // no selector as routed 
    templateUrl:'expert-details.component.html',
    styles:[`
       .container { padding-left: 20px; padding-right: 20px; }
       .expert-photo { height: 100px; }
    `]
})

export class ExpertDetailsComponent implements OnInit{
    expert
    constructor(private expertService: ExpertService, private route: ActivatedRoute){

    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.expert = this.expertService.getById(id);
    }
}