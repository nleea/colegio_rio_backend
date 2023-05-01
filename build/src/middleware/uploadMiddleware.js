"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileMiddleware = void 0;
const cloudinary_1 = require("cloudinary");
const fs_1 = require("fs");
const UploadFileMiddleware = async (req, res, next) => {
    try {
        if (!req.file)
            return next();
        cloudinary_1.v2.config({
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        });
        const res = await cloudinary_1.v2.uploader.upload(req.file?.path, {
            folder: "rio_dev",
        });
        (0, fs_1.unlinkSync)(req.file?.path);
        req.file.path = res.secure_url;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.UploadFileMiddleware = UploadFileMiddleware;
//# sourceMappingURL=uploadMiddleware.js.map