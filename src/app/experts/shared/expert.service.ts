import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { IExpert, ITool } from './expert.model';

@Injectable()
export class ExpertService{
    getExperts(): Observable<IExpert[]>{
        let subject = new Subject<IExpert[]>()
        setTimeout(()=>{
            subject.next(experts);
            subject.complete();
        }, 500)

        return subject;
    }

    getExpertById(id: number): IExpert{
        return experts.find(x => x.id === id);
    }

    saveExpert(expert: IExpert){
        expert.id = experts.length + 1
        experts.push(expert)
    }

    getTools() : Observable<ITool[]>{
        let subject = new Subject<ITool[]>()
        setTimeout(() => {
            subject.next(tools)
            subject.complete()
        }, 500);
        
        return subject
    }

    saveTool(tool: ITool){
        tool.id = tools.length + 1
        tools.push(tool)
    }
}

const tools:ITool[] = [
    {
        id: 1,
        name: "Notepad",
        level: "++"
    },
    {
        id: 2,
        name: "Post-it",
        level: "+"
    },
    {
        id: 3,
        name: "Rational Rose",
        level: "+++"
    }
]

const experts:IExpert[] =[
    {
        id: 1,
        name: "Super coder",
        role: "Coder",
        expertise: "shiny code",
        tool: tools[0],
        specialSkill: "bug creator",
        photo: '/assets/images/angularconnect-shield.png'
    },
    {
        id: 2,
        name: "Scrum master",
        role: "Management",
        expertise: "rituels",
        tool: tools[1],
        photo: '/assets/images/ng-nl.png'
    },
    {
        id: 3,
        name: "Archi bold",
        role: "Design",
        expertise: "CRUD",
        tool: tools[2],
        photo: '/assets/images/ng-conf.png'
    }
] 