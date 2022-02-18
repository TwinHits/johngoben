import * as cdk from 'aws-cdk-lib';
import { Stack, App, aws_s3 as s3, aws_cloudfront as cloudfront, aws_cloudfront_origins as origins, aws_s3_deployment as s3Deploy, aws_iam as iam } from 'aws-cdk-lib';

export class JohnGobenStack extends Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const comWebsiteBucket = new s3.Bucket(this, 'JohnGobenComBucket', {
            bucketName: "johngoben.com",
            publicReadAccess: true,
            websiteRedirect: { hostName: 'www.johngoben.com' },
        });
        
        const wwwWebsiteBucket = new s3.Bucket(this, 'wwwJohnGobenComBucket', {
            bucketName: "www.johngoben.com",
            websiteIndexDocument: 'index.html',
            publicReadAccess: true,
        });

        wwwWebsiteBucket.addToResourcePolicy(
            new iam.PolicyStatement({
              effect: iam.Effect.ALLOW,
              principals: [new iam.ArnPrincipal("*")],
              actions: ['s3:GetObject'],
              resources: [`${wwwWebsiteBucket.bucketArn}/*`],
            }),
          );

        const websiteDeploy = new s3Deploy.BucketDeployment(this, 'JohnGobenBucketDeployment', {
            sources: [s3Deploy.Source.asset('dist')],
            destinationBucket: wwwWebsiteBucket,
        });
    }
}
