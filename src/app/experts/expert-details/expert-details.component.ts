import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ExpertService, IExpert } from '../shared/index'


@Component({
    // no selector as routed 
    templateUrl:'expert-details.component.html',
    styles:[`
       .container { padding-left: 20px; padding-right: 20px; }
       .expert-photo { height: 100px; }
    `]
})

export class ExpertDetailsComponent implements OnInit{
    expert:IExpert
    constructor(private expertService: ExpertService, private route: ActivatedRoute){

    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.expert = this.expertService.getById(id);
    }
}