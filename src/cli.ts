import chalk from 'chalk'
import { FeatureRequest } from './templates/github/feature-request.template'
import {
    Answer,
    GithubChoiceValue,
    ProviderChoiceValue
} from './models/answer-choice'

import {
    GithubQuestions,
    ProviderQuestions,
    GitLabQuestions
} from './questions'

export class CLI {
    constructor(private featureRequest: FeatureRequest) {
        this.executeCLI()
    }
    async executeCLI(): Promise<any> {
        let providerAnswer: Answer = await ProviderQuestions.providerQuestionsList()
        if (providerAnswer.provider === ProviderChoiceValue.GITHUB) {
            return this.githubActions()
        } else {
            console.error('choose correct provider')
        }
    }

    async githubActions(): Promise<any> {
        let githubAnswer: Answer = await GithubQuestions.githubQuestionsList()

        console.log(chalk.yellow(githubAnswer.answerMe))

        switch (githubAnswer.files) {
            case GithubChoiceValue.FEATURE_REQUEST:
                return this.featureRequest.generateFile()

            default:
                break
        }
    }
}
