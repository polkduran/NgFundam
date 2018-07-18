import {Component} from '@angular/core'
@Component({
    selector:"experts-list",
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

export class ExpertsListComponent{
    experts =[
        {
            name: "Super coder",
            expertise: "shiny code"
        },
        {
            name: "Scrum master",
            expertise: "rituels"
        },
        {
            name: "Super archi",
            expertise: "CRUD"
        }
    ] 

    handleEventClicked(event){
        alert(event);
    }
}
