"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubQuestions = __importStar(require("./github-file.questions"));
exports.GitLabQuestions = __importStar(require("./gitlab-file.questions"));
exports.ProviderQuestions = __importStar(require("./provider.questions"));
