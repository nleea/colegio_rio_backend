import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";


const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;
const AWS_PUBLIC_KEY = process.env.AWS_PUBLIC_KEY;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;

const client = new S3Client({ region: AWS_BUCKET_REGION, credentials:{accessKeyId:AWS_PUBLIC_KEY!,secretAccessKey:AWS_SECRET_KEY!}});

export async function UploadFile(pathfile: any,name?:string) {

    const object = new PutObjectCommand({ Bucket: AWS_BUCKET_NAME, Key:  `${name}.zip`, Body: pathfile });
    return await client.send(object)
}