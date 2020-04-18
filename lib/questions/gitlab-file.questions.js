"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inquirer_1 = tslib_1.__importDefault(require("inquirer"));
var answer_choice_1 = require("../models/answer-choice");
exports.gitlabQuestionsList = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var listOfFiles;
    return tslib_1.__generator(this, function (_a) {
        listOfFiles = [
            { name: 'Merge request', value: answer_choice_1.GitLabChoiceValue.MERGE_REQUEST }
        ];
        return [2 /*return*/, inquirer_1.default.prompt([
                {
                    name: 'files',
                    type: 'list',
                    message: 'Which Gitlab files do you want to generate',
                    choices: listOfFiles
                }
            ])];
    });
}); };
