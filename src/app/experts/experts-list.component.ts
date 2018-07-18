import { Component, OnInit } from '@angular/core'
import { ExpertService } from './shared/expert.service'
import { ToastrService } from '../common/toastr.service'

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
    experts:any[]
    constructor(private expertService: ExpertService, private toastr: ToastrService){
    }

    ngOnInit(){
        this.experts = this.expertService.getAll();
    }

    handleEventClicked(expertName){
        this.toastr.success(expertName);
    }
}
