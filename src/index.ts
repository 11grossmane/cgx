#!/usr/bin/env node

import 'reflect-metadata'
import { Container } from 'inversify'
import { CLI } from './cli'
import { FeatureRequest } from './templates/github/feature-request.template'
import { DefaultTemplate } from './templates/default/default.template'

export function index(): CLI {
    return new CLI(new FeatureRequest(new DefaultTemplate()))
}

index()
