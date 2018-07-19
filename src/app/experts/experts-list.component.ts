import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ToastrService } from '../common/toastr.service'
import { ExpertService, IExpert } from './shared/index'

@Component({
    template:`
    <div>
        <h1>Bienvenue chez SoftFluent...</h1>
        <h2>Une équipe d'experts vous accueille.</h2>
        <hr/>
        <div class="row">
            <div *ngFor="let expert of experts" class="col-md-5">
                <expert-thumbnail [expert]="expert" (eventClick)="handleEventClicked($event)"></expert-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class ExpertsListComponent implements OnInit{
    experts:IExpert[]

    constructor(private expertService: ExpertService, 
                private toastr: ToastrService,
                private route: ActivatedRoute){
    }

    ngOnInit(){
        this.experts = this.route.snapshot.data['experts']
    }

    handleEventClicked(expertName){
        this.toastr.success(expertName);
    }
}
