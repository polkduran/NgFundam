import { Component, Input, OnChanges } from '@angular/core'
import { IAchievement } from '../shared/index';

@Component({
    templateUrl:'achievements-list.component.html',
    selector:'achievements-list'
})

export class AchievementsListComponent implements OnChanges{
    @Input() achievements: IAchievement[]
    @Input() filterBy: string
    @Input() sortBy: string
    visibleAchievements: IAchievement[]

    ngOnChanges(){
        if(this.achievements){
            this.filterAchievements(this.filterBy)
            this.sortAchievements(this.sortBy)
        }
    }

    filterAchievements(filter: string) {
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

    sortAchievements(sortBy: string){
        switch(sortBy){
            case 'description':
                this.visibleAchievements.sort(compareByDescriptionAsc)
                break
            case 'proudness':
                this.visibleAchievements.sort(compareByProudnessDesc)
                break
        }
    }
}

function compareByDescriptionAsc(a:IAchievement, b:IAchievement){
    if(a.description === b.description){
        return 0
    }
    if(a.description > b.description){
        return 1
    }
    return -1
}

function compareByProudnessDesc(a:IAchievement, b:IAchievement){
    return b.proudness - a.proudness
}