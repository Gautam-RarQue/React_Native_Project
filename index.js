const AWS = require("aws-sdk")
const KEY_ID = "{ENTER SECRET KEY HERE}";
const SECRET_KEY = "{ENTER SECRET KEY HERE}";
const fs = require("fs");
const BUCKET_NAME = "{ENTER THE NAME OF BUCKET YOU WANT}";

const s3 = new AWS.S3({
accessKeyId: KEY_ID,
secretAccessKey: SECRET_KEY,


});

const parameter ={
Bucket: BUCKET_NAME

}

//This Code run for one time to create the Bucket.

s3.createBucket(params,(err, data)=>{
    
    if(err)
    {
        console.log(err);
    }

    else
    {
        console.log("Bucket created successfully",data.Location);
    }
})

//Above code runs to cerate the bucket, So it runs only one


const uploadFile = (fileName) => {
const fileContent = fs.readFileSync(fileName);

const params = {
    Bucket : BUCKET_NAME,
    Key: "{JSON FILE NAME}",
    Body : fileContent,
    ContentType : "JSON"
    
}

s3.upload(params,(err, data)=>{
 if(err)
 {
     console.log(err);
 }
 else
 {
console.log("File Uploaded Successfully.",data.Location);
 }

})

}

uploadFile("{File Name}");