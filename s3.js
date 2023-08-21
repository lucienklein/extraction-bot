const AWS = require("aws-sdk");
const mime = require("mime-types");
const stream = require("stream");
const fetch = require("node-fetch");

const {
  CELLAR_ADDON_HOST,
  CELLAR_ADDON_KEY_SECRET,
  CELLAR_ADDON_KEY_ID,
  CELLAR_BUCKET_NAME,
} = process.env;

const getS3Client = () => {
  return new AWS.S3({
    endpoint: CELLAR_ADDON_HOST,
    accessKeyId: CELLAR_ADDON_KEY_ID,
    secretAccessKey: CELLAR_ADDON_KEY_SECRET,
  });
};

const uploadFile = (path, file) => {
  return new Promise((resolve, reject) => {
    const s3bucket = new AWS.S3({
      endpoint: CELLAR_ADDON_HOST,
      accessKeyId: CELLAR_ADDON_KEY_ID,
      secretAccessKey: CELLAR_ADDON_KEY_SECRET,
    });
    let params = {
      // ACL: "public-read",
      Bucket: CELLAR_BUCKET_NAME,
      Key: path,
      Body: file.body || file.buffer,
      ContentType: file.mimetype,
      Metadata: { "Cache-Control": "max-age=31536000" },
    };
    s3bucket.upload(params, function (err, data) {
      if (err) return reject(`error in callback:${err}`);
      resolve(data);
    });
  });
};

function uploadToS3FromBuffer(path, buffer, ContentType) {
  return new Promise((resolve, reject) => {
    let s3bucket = new AWS.S3({
      endpoint: CELLAR_ADDON_HOST,
      accessKeyId: CELLAR_ADDON_KEY_ID,
      secretAccessKey: CELLAR_ADDON_KEY_SECRET,
    });
    let params = {
      ACL: "",
      Bucket: CELLAR_BUCKET_NAME,
      ContentType,
      ContentEncoding: "base64",
      Key: path,
      Body: buffer,
      Metadata: { "Cache-Control": "max-age=31536000" },
    };
    s3bucket.upload(params, function (err, data) {
      if (err) {
        console.log(err);
        return reject(`error in callback:${err}`);
      }
      resolve(data);
    });
  });
}
const EXPIRE_TIME = 60 * 60 * 24 * 365;

function getSignedUrl(path) {
  if (!path) return "";
  const s3bucket = new AWS.S3({
    endpoint: CELLAR_ADDON_HOST,
    accessKeyId: CELLAR_ADDON_KEY_ID,
    secretAccessKey: CELLAR_ADDON_KEY_SECRET,
  });
  return s3bucket.getSignedUrl("getObject", {
    Bucket: CELLAR_BUCKET_NAME,
    Key: path,
    Expires: EXPIRE_TIME,
  });
}

function getSignedUploadUrl(path) {
  const s3bucket = new AWS.S3({
    endpoint: CELLAR_ADDON_HOST,
    accessKeyId: CELLAR_ADDON_KEY_ID,
    secretAccessKey: CELLAR_ADDON_KEY_SECRET,
  });
  const s3Params = { Bucket: CELLAR_BUCKET_NAME, Key: path };
  return s3bucket.getSignedUrl("putObject", s3Params);
}

const getFile = (name) => {
  const p = new Promise((resolve, reject) => {
    const s3bucket = new AWS.S3({
      endpoint: CELLAR_ADDON_HOST,
      accessKeyId: CELLAR_ADDON_KEY_ID,
      secretAccessKey: CELLAR_ADDON_KEY_SECRET,
    });
    const params = { Bucket: CELLAR_BUCKET_NAME, Key: name };
    s3bucket.getObject(params, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    });
  });
  return p;
};

const createBucket = (name) => {
  return new Promise((resolve, reject) => {
    console.log("CREATING ", name);
    let s3bucket = new AWS.S3({
      endpoint: CELLAR_ADDON_HOST,
      accessKeyId: CELLAR_ADDON_KEY_ID,
      secretAccessKey: CELLAR_ADDON_KEY_SECRET,
    });
    let bucketParams = {
      Bucket: name,
      CreateBucketConfiguration: { LocationConstraint: "" },
    };
    s3bucket.createBucket(bucketParams, function (err, data) {
      if (err) console.log(err, err.stack);
      else console.log(data); // successful response
      s3bucket.listBuckets(function (err, res) {
        console.log(err, res);
      });
    });
  });
};

function uploadToS3FromStream(name) {
  console.log(
    CELLAR_ADDON_HOST,
    CELLAR_ADDON_KEY_ID,
    CELLAR_ADDON_KEY_SECRET,
    CELLAR_BUCKET_NAME
  );
  const pass = new stream.PassThrough();
  const s3bucket = new AWS.S3({
    endpoint: CELLAR_ADDON_HOST,
    accessKeyId: CELLAR_ADDON_KEY_ID,
    secretAccessKey: CELLAR_ADDON_KEY_SECRET,
  });
  const params = { Bucket: CELLAR_BUCKET_NAME, Key: name, Body: pass };
  return {
    writeStream: pass,
    promise: s3bucket.upload(params).promise(),
  };
}

function uploadFromUrlToS3(url, key, mimetype) {
  return new Promise(async (resolve, reject) => {
    const res = await fetch(url);
    if (!res.mimetype)
      res.mimetype = res.headers.get("content-type").split(";")[0];
    if (!res.mimetype) res.mimetype = mime.lookup(url);
    // Source: https://stackoverflow.com/a/2541083/978690
    if (!res.mimetype) res.mimetype = mime.lookup(url.split(/[?#]/)[0]);
    if (mimetype) res.mimetype = mimetype;
    const data = await uploadFile(key, res);
    resolve(data);
  });
}

function deleteFromS3(key) {
  return new Promise((resolve, reject) => {
    const client = getS3Client();
    client.deleteObject(
      { Bucket: CELLAR_BUCKET_NAME, Key: key },
      (err, data) => {
        if (err) return reject(err);
        resolve(data);
      }
    );
  });
}

module.exports = {
  createBucket,
  getFile,
  uploadToS3FromBuffer,
  uploadToS3FromStream,
  uploadFromUrlToS3,
  uploadFile,
  getSignedUrl,
  getSignedUploadUrl,
  deleteFromS3,
};
