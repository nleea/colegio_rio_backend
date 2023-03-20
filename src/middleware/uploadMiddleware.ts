import { Request, Response, NextFunction } from "express";
import { v2 as cloudinary } from "cloudinary";
import sharp from "sharp";
import path from "path";

const UploadFileMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    
    if (!req.file) return next();

    cloudinary.config({
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    });

    const res = await cloudinary.uploader.upload(req.file.path, {
      folder: "rio_dev",
    });

    req.file.path = res.secure_url;

    next();
  } catch (error) {
    next(error);
  }
};

export { UploadFileMiddleware };
