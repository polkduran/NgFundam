import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ExpertService } from '../shared/expert.service';

@Injectable()
export class ExpertRouteActivator implements CanActivate {
    constructor(private expertService: ExpertService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot){
        let id = +route.params['id']
        let expertExist = !!this.expertService.getById(id)

        if (!expertExist){
            this.router.navigate(['/404'])
        }
        return expertExist
    }
}