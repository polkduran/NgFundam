import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { ExpertService } from './shared/expert.service'
import { map } from 'rxjs/operators'

@Injectable()
export class ExpertsListResolver implements Resolve<any>{
    constructor(private expertService: ExpertService){

    }
    
    resolve(){
        return this.expertService.getExperts().pipe(map(experts => experts));
    }
}