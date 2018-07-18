import { Injectable } from '@angular/core'

@Injectable()
export class ExpertService{
    getAll(){
        return experts;
    }
}

const experts =[
    {
        name: "Super coder",
        role: "Coder",
        expertise: "shiny code",
        tool: "Notepad",
        specialSkill: "bug creator"
    },
    {
        name: "Scrum master",
        role: "Management",
        expertise: "rituels",
        tool: "Post-it"
    },
    {
        name: "Archi bold",
        role: "Design",
        expertise: "CRUD",
        tool: "Visio"
    }
] 