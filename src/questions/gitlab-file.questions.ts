import inquirer from 'inquirer'
import {
    Answer,
    GitLabChoiceValue,
    Choice,
    GithubChoiceValue
} from '../models/answer-choice'

export const gitlabQuestionsList = async (): Promise<Answer> => {
    const listOfFiles: Choice[] = [
        { name: 'Merge request', value: GitLabChoiceValue.MERGE_REQUEST }
    ]

    return inquirer.prompt([
        {
            name: 'files',
            type: 'list',
            message: 'Which Gitlab files do you want to generate',
            choices: listOfFiles
        }
    ])
}
