
import { GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl }  from "@aws-sdk/s3-request-presigner";
const client = new S3Client({ 
  credentials: {
    accessKeyId: '',
    secretAccessKey: ''
  },
  region: "us-east-1" 
});


// const getKeyByEnv = (key) => {
//   return process.env.ENV +  '/' + key;
// }

async function uploadS3(file) {
  const params = new PutObjectCommand({
    Bucket: 'tads-2024-webii',
    Key: file.originalname,
    Body: file.buffer,
    ContentType: file.mimetype
  });

  const { Location } = await client.send(params);
  return Location;
}

async  function fileByKey(key) {

  const params = new GetObjectCommand({
    Bucket: 'tads-2024-webii',
    Key: key
  });

  const { Body } = await client.send(params);
  return Body;

}

async function signedUrl(key) {
  const params = new GetObjectCommand({
    Bucket: 'tads-2024-webii',
    Key: key
  });

  const url = await getSignedUrl(client, params, { expiresIn: 3600 });
  return url;
}

export { uploadS3, fileByKey, signedUrl }