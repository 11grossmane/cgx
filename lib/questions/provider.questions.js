"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var inquirer_1 = tslib_1.__importDefault(require("inquirer"));
var answer_choice_1 = require("../models/answer-choice");
exports.providerQuestionsList = function () { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var listOfFiles;
    return tslib_1.__generator(this, function (_a) {
        listOfFiles = [
            { name: answer_choice_1.ProviderChoiceValue.GITHUB, value: answer_choice_1.ProviderChoiceValue.GITHUB },
            { name: answer_choice_1.ProviderChoiceValue.GITLAB, value: answer_choice_1.ProviderChoiceValue.GITLAB }
        ];
        return [2 /*return*/, inquirer_1.default.prompt([
                {
                    name: 'provider',
                    type: 'list',
                    message: 'Select a Git hosting provider',
                    choices: listOfFiles
                }
            ])];
    });
}); };
