import { S3Client } from "@aws-sdk/client-s3";

const accountId = process.env.CF_ACCOUNT_ID;
const accessKeyId = process.env.R2_ACCESS_KEY;
const secretAccessKey = process.env.R2_SECRET_KEY;

console.log(accountId)

if (!accountId || !accessKeyId || !secretAccessKey) {
  throw new Error(
    "Missing R2 credentials. Set R2_ACCOUNT_ID (or CF_ACCOUNT_ID), R2_ACCESS_KEY_ID (or R2_ACCESS_KEY), and R2_SECRET_ACCESS_KEY (or R2_SECRET_KEY).",
  );
}

export const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
  forcePathStyle: true,
});
