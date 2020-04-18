"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("../../models/path");
var filename_1 = require("../../models/filename");
var FeatureRequest = /** @class */ (function () {
    //automatically does this.defaultTemplate = defaultTemplate
    function FeatureRequest(defaultTemplate) {
        this.defaultTemplate = defaultTemplate;
        this.fileName = filename_1.FileName.FEATURE_REQUEST;
        this.hasPath = true;
        this.pathOfFile = path_1.GithubPath.ISSUE_TEMPLATE;
    }
    FeatureRequest.prototype.generateFile = function () {
        this.defaultTemplate.generateFile(this.fileName, this.fileContent(), this.hasPath, this.pathOfFile);
    };
    FeatureRequest.prototype.fileContent = function () {
        return "\n      ---\n       name:Feature request\n       about:suggest an idea\n       title:''\n      ---\n\n      **is your feature request related to a problem? please describe**\n      A clear and concise description\n      ";
    };
    return FeatureRequest;
}());
exports.FeatureRequest = FeatureRequest;
