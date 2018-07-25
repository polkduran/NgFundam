import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ExpertService, IExpert, IAchievement } from '../shared/index'


@Component({
    // no selector as routed 
    templateUrl:'expert-details.component.html',
    styles:[`
       .container { padding-left: 20px; padding-right: 20px; }
       .expert-photo { height: 100px; }
       a {cursor: pointer}
    `]
})

export class ExpertDetailsComponent implements OnInit{
    expert:IExpert
    addMode:boolean
    filterBy:string

    constructor(private expertService: ExpertService, private route: ActivatedRoute){

    }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.expert = this.expertService.getExpertById(id);
        this.filterBy = 'all'
    }

    addAchievement(){
        this.addMode = true
    }

    saveAchievement(achievement:IAchievement){
        const nextId = Math.max.apply(null, this.expert.achievements.map(x => x.id))
        achievement.id = nextId + 1
        this.expert.achievements.push(achievement)
        this.expertService.updateExpert(this.expert)
        this.addMode = false
    }

    cancelAddAchievement(){
        this.addMode = false
    }
}