"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class WaitCondition extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::CloudFormation::WaitCondition', properties, dependsOn);
    }
}
exports.default = WaitCondition;