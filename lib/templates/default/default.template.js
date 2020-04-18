"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs_extra_1 = tslib_1.__importDefault(require("fs-extra"));
var DefaultTemplate = /** @class */ (function () {
    function DefaultTemplate() {
    }
    DefaultTemplate.prototype.generateFile = function (nameOfFileWithExtension, fileContent, hasPath, pathOfFile) {
        if (hasPath === void 0) { hasPath = false; }
        if (pathOfFile === void 0) { pathOfFile = ''; }
        this.createFile(pathOfFile, nameOfFileWithExtension, fileContent);
    };
    DefaultTemplate.prototype.createFile = function (pathOfFile, fileName, fileContent) {
        var filepath = process.cwd() + (pathOfFile + "/" + fileName);
        fs_extra_1.default.writeFile(filepath, fileContent, function (err) {
            if (!err) {
                console.log("File Created: " + filepath);
            }
            else {
                console.error("File Error:" + filepath, err);
            }
        });
    };
    return DefaultTemplate;
}());
exports.DefaultTemplate = DefaultTemplate;
