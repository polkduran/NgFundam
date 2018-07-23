import { Component, Input } from '@angular/core'
import { IAchievement } from '../shared/index';

@Component({
    template:`
    <div class="row" *ngFor="let achivement of achievements">
        <div class="col-md-10">
            <div class="well">
                <h4>{{achivement.description}}</h4>
                <h6>{{achivement.date}}</h6>
            </div>
        </div>
    </div>    
    `,
    selector:'achievements-list'
})

export class AchievementsListComponent{
    @Input() achievements: IAchievement[]
}