import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { IExpert } from './expert.model';

@Injectable()
export class ExpertService{
    getAll(): Observable<IExpert[]>{
        let subject = new Subject<IExpert[]>()
        setTimeout(()=>{
            subject.next(experts);
            subject.complete();
        }, 500)

        return subject;
    }

    getById(id: number): IExpert{
        return experts.find(x => x.id === id);
    }
}

const experts:IExpert[] =[
    {
        id: 1,
        name: "Super coder",
        role: "Coder",
        expertise: "shiny code",
        tool: "Notepad",
        specialSkill: "bug creator",
        photo: '/assets/images/angularconnect-shield.png'
    },
    {
        id: 2,
        name: "Scrum master",
        role: "Management",
        expertise: "rituels",
        tool: "Post-it",
        photo: '/assets/images/ng-nl.png'
    },
    {
        id: 3,
        name: "Archi bold",
        role: "Design",
        expertise: "CRUD",
        tool: "Rational Rose",
        photo: '/assets/images/ng-conf.png'
    }
] 