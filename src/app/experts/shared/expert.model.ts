export interface IExpert{
    id: number
    name: string
    role: string
    expertise: string
    tool: ITool
    specialSkill?: string
    photo: string
}

export interface ITool {
    id: number
    name: string
    level: string
}