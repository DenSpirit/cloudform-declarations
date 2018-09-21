/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface DBInstanceProperties {
    DBParameterGroupName?: Value<string>
    DBInstanceClass: Value<string>
    AllowMajorVersionUpgrade?: Value<boolean>
    DBClusterIdentifier?: Value<string>
    AvailabilityZone?: Value<string>
    PreferredMaintenanceWindow?: Value<string>
    AutoMinorVersionUpgrade?: Value<boolean>
    DBSubnetGroupName?: Value<string>
    DBInstanceIdentifier?: Value<string>
    DBSnapshotIdentifier?: Value<string>
    Tags?: ResourceTag[]
}

export default class DBInstance extends ResourceBase {


    constructor(properties?: DBInstanceProperties) {
        super('AWS::Neptune::DBInstance', properties)
    }
}