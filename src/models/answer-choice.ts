export interface Answer {
    files: Object
    provider: ProviderChoiceValue
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
