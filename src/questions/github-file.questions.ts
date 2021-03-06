import inquirer from 'inquirer'
import {
    Answer,
    GitLabChoiceValue,
    Choice,
    GithubChoiceValue
} from '../models/answer-choice'

export const githubQuestionsList = async (): Promise<Answer> => {
    const listOfFiles: Choice[] = [
        { name: 'Feature request', value: GithubChoiceValue.FEATURE_REQUEST }
    ]

    return inquirer.prompt([
        {
            name: 'files',
            type: 'list',
            message: 'Which Github files do you want to generate',
            choices: listOfFiles
        },
        {
            name: 'answerMe',
            type: 'input',
            message: 'type something to see what happens!'
        }
    ])
}
