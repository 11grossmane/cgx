import inquirer from 'inquirer'
import { Answer, Choice, ProviderChoiceValue } from '../models/answer-choice'

export const providerQuestionsList = async (): Promise<Answer> => {
    const listOfFiles: Choice[] = [
        { name: ProviderChoiceValue.GITHUB, value: ProviderChoiceValue.GITHUB },
        { name: ProviderChoiceValue.GITLAB, value: ProviderChoiceValue.GITLAB }
    ]

    return inquirer.prompt([
        {
            name: 'provider',
            type: 'list',
            message: 'Select a Git hosting provider',
            choices: listOfFiles
        }
    ])
}
