"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var chalk_1 = tslib_1.__importDefault(require("chalk"));
var answer_choice_1 = require("./models/answer-choice");
var questions_1 = require("./questions");
var CLI = /** @class */ (function () {
    function CLI(featureRequest) {
        this.featureRequest = featureRequest;
        this.executeCLI();
    }
    CLI.prototype.executeCLI = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var providerAnswer;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, questions_1.ProviderQuestions.providerQuestionsList()];
                    case 1:
                        providerAnswer = _a.sent();
                        if (providerAnswer.provider === answer_choice_1.ProviderChoiceValue.GITHUB) {
                            return [2 /*return*/, this.githubActions()];
                        }
                        else {
                            console.error('choose correct provider');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CLI.prototype.githubActions = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var githubAnswer;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, questions_1.GithubQuestions.githubQuestionsList()];
                    case 1:
                        githubAnswer = _a.sent();
                        console.log(chalk_1.default.yellow(githubAnswer.answerMe));
                        switch (githubAnswer.files) {
                            case answer_choice_1.GithubChoiceValue.FEATURE_REQUEST:
                                return [2 /*return*/, this.featureRequest.generateFile()];
                            default:
                                break;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return CLI;
}());
exports.CLI = CLI;
