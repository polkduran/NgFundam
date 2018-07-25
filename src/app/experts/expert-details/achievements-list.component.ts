import { Component, Input } from '@angular/core'
import { IAchievement } from '../shared/index';

@Component({
    templateUrl:'achievements-list.component.html',
    selector:'achievements-list'
})

export class AchievementsListComponent{
    @Input() achievements: IAchievement[]
}