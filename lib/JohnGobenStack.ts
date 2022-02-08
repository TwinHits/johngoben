import * as cdk from 'aws-cdk-lib';
import { Stack, App, aws_s3 as s3, aws_cloudfront as cloudfront, aws_cloudfront_origins as origins, aws_s3_deployment as s3Deploy } from 'aws-cdk-lib';

export class JohnGobenStack extends Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const websiteBucket = new s3.Bucket(this, 'JohnGobenPortfolioBucket', {
            bucketName: "john-goben-website",
            websiteIndexDocument: 'index.html',
            publicReadAccess: true
        });

        const webDistribution = new cloudfront.Distribution(this, 'JohnGobenCloudfrontDistribution', { 
            defaultBehavior: {
                origin: new origins.S3Origin(websiteBucket),
            },
        });

        const websiteDeploy = new s3Deploy.BucketDeployment(this, 'JohnGobenBucketDeployment', {
            sources: [s3Deploy.Source.asset('dist')],
            destinationBucket: websiteBucket,
            distribution: webDistribution,
        });
    }
}
