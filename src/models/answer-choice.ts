export interface Answer {
    files: Object
    provider: ProviderChoiceValue
    answerMe: string
}

export interface Choice {
    name: string
    value: GithubChoiceValue | GitLabChoiceValue | ProviderChoiceValue
}

export enum GithubChoiceValue {
    FEATURE_REQUEST = 'FEATURE_REQUEST'
}

export enum GitLabChoiceValue {
    MERGE_REQUEST = 'MERGE_REQUEST'
}

export enum ProviderChoiceValue {
    GITHUB = 'Github',
    GITLAB = 'Gitlab'
}

const obj = {
    name: 'yohan',
    answers: <Answer[]>[
        {
            files: {},
            answerMe: 'hi there!',
            provider: ProviderChoiceValue.GITHUB
        }
    ]
}
