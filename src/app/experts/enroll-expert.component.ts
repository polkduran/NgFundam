import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    template:`
    <h1>Inscription d'un expert</h1>
    <hr/>
    <div class="col-md-6">
        <h3>[Enroll Form]</h3>
        <br/><br/>
        <button type="submit" class="btn btn-primary">Inscrire</button>
        <button type="button" (click)="cancel()" class="btn btn-default">Annuler</button>
    </div>
    `
})

export class EnrollExpertComponent{
    isDirty: boolean = true

    constructor(private router: Router){

    }

    cancel(){
        this.router.navigate(['/experts'])
    }
}