import fs from 'fs-extra'
import { injectable } from 'inversify'
import { Answer } from '../../models/answer-choice'

export class DefaultTemplate {
    constructor() {}
    generateFile(
        nameOfFileWithExtension: string,
        fileContent: string,
        hasPath = false,
        pathOfFile = ''
    ): void {
        this.createFile(pathOfFile, nameOfFileWithExtension, fileContent)
    }

    private createFile(
        pathOfFile: string,
        fileName: string,
        fileContent: string
    ): void {
        let filepath: string = process.cwd() + `${pathOfFile}/${fileName}`
        fs.writeFile(filepath, fileContent, (err: Error) => {
            if (!err) {
                console.log(`File Created: ${filepath}`)
            } else {
                console.error(`File Error:${filepath}`, err)
            }
        })
    }
}
