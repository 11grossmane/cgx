#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var cli_1 = require("./cli");
var feature_request_template_1 = require("./templates/github/feature-request.template");
var default_template_1 = require("./templates/default/default.template");
function index() {
    return new cli_1.CLI(new feature_request_template_1.FeatureRequest(new default_template_1.DefaultTemplate()));
}
exports.index = index;
index();
