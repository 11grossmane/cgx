import { DefaultTemplate } from '../default/default.template'
import { injectable, inject } from 'inversify'
import { GithubPath } from '../../models/path'
import { FileName } from '../../models/filename'

@injectable()
export class FeatureRequest {
    private fileName = FileName.FEATURE_REQUEST
    private hasPath = true
    private pathOfFile = GithubPath.ISSUE_TEMPLATE

    //automatically does this.defaultTemplate = defaultTemplate
    constructor(
        @inject('DefaultTemplate') private defaultTemplate: DefaultTemplate
    ) {}

    generateFile(): void {
        this.defaultTemplate.generateFile(
            this.fileName,
            this.fileContent(),
            this.hasPath,
            this.pathOfFile
        )
    }
    private fileContent(): string {
        return `
      ---
       name:Feature request
       about:suggest an idea
       title:''
      ---

      **is your feature request related to a problem? please describe**
      A clear and concise description
      `
    }
}
