import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'level'})
export class LevelPipe implements PipeTransform{
    transform(value: number): string {
        if(value <= 0){
            return 'nul'
        }
        
        switch(value){
            case 1: return 'un'
            case 2: return '++'
            case 3: return 'master'
            default: return 'oh yeah'
        }
    }
}