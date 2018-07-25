export interface IExpert{
    id: number
    name: string
    role: string
    expertise: string
    tool: ITool
    specialSkill?: string
    photo: string,
    achievements: IAchievement[] 
}

export interface ITool {
    id: number
    name: string
    level: number
}

export interface IAchievement{
    id: number,
    date: Date,
    description: string,
    proudness: number
}