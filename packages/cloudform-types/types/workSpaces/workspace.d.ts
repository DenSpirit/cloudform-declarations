import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export declare class WorkspaceProperties {
    ComputeTypeName?: Value<string>;
    RootVolumeSizeGib?: Value<number>;
    RunningMode?: Value<string>;
    RunningModeAutoStopTimeoutInMinutes?: Value<number>;
    UserVolumeSizeGib?: Value<number>;
    constructor(properties: WorkspaceProperties);
}
export interface WorkspaceProperties {
    BundleId: Value<string>;
    DirectoryId: Value<string>;
    RootVolumeEncryptionEnabled?: Value<boolean>;
    Tags?: ResourceTag[];
    UserName: Value<string>;
    UserVolumeEncryptionEnabled?: Value<boolean>;
    VolumeEncryptionKey?: Value<string>;
    WorkspaceProperties?: WorkspaceProperties;
}
export default class Workspace extends ResourceBase {
    static WorkspaceProperties: typeof WorkspaceProperties;
    constructor(properties?: WorkspaceProperties);
}
