import { Component, Input, OnChanges } from '@angular/core'
import { IAchievement } from '../shared/index';

@Component({
    templateUrl:'achievements-list.component.html',
    selector:'achievements-list'
})

export class AchievementsListComponent implements OnChanges{
    @Input() achievements: IAchievement[]
    @Input() filterBy: string
    visibleAchievements: IAchievement[]

    ngOnChanges(){
        if(this.achievements){
            this.filterAchievements(this.filterBy)
        }
    }

    filterAchievements(filter: string): any {
        switch(filter){
            case 'few': 
                this.visibleAchievements = this.achievements.filter(x => x.proudness < 4)
                break
            case 'some': 
                this.visibleAchievements = this.achievements.filter(x => x.proudness >= 4 && x.proudness < 8)
                break
            case 'very': 
                this.visibleAchievements = this.achievements.filter(x => x.proudness >= 8)
                break
            default: this.visibleAchievements = this.achievements
        }
    }
}