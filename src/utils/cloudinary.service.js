import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_secret // Click 'View API Keys' above to copy your API secret
    });



    const uploadOnCloudinary = async (localFilePath) => {
        try {
            
          if (!localFilePath)return null

          //upload the file on cloudinary
          const response = await cloudinary.uploader.upload(localFilePath, {
              resource_type : 'auto'
            })
          //file uploaded successfully 
          console.log("File is uploaded on cloudinary" , response.url)
          return response 
        } catch (error) {
          fs.unlinkSync(localFilePath)  // remove the locally saved file || upload file on cloud got failed
           console.log("upload failed" )
          return null
        }
    }

    export {uploadOnCloudinary}