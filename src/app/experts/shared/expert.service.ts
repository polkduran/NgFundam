import { Injectable } from '@angular/core'

@Injectable()
export class ExpertService{
    getAll(){
        return experts;
    }

    getById(id: number){
        return experts.find(x => x.id === id);
    }
}

const experts =[
    {
        id: 1,
        name: "Super coder",
        role: "Coder",
        expertise: "shiny code",
        tool: "Notepad",
        specialSkill: "bug creator"
    },
    {
        id: 2,
        name: "Scrum master",
        role: "Management",
        expertise: "rituels",
        tool: "Post-it"
    },
    {
        id: 3,
        name: "Archi bold",
        role: "Design",
        expertise: "CRUD",
        tool: "Visio"
    }
] 