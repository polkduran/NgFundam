import { FormGroup, FormControl, Validators } from '@angular/forms'


export function restrictedWordsValidator(words:string[]){
    return (controlForm: FormControl): {[key: string]: any} => {
        if(!words || words.length == 0){
            return null
        }

        let invalidWords = words.filter(w => controlForm.value.includes(w))

        return invalidWords && invalidWords.length > 0
                ? { 'restrictedWords': invalidWords.join(', ') }
                : null
    }
}