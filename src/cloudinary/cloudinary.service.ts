import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadFile(
    file: Buffer,
    folder: string,
    mimeType: string,
  ): Promise<string> {
    const base64 = `data:${mimeType};base64,${file.toString('base64')}`;
    const result = await cloudinary.uploader.upload(base64, { folder });
    console.log("result", result.secure_url);
    return result.secure_url;
  }

  async deleteFile(url: string): Promise<void> {
    const lastPart = url.split('/').pop() || '';
    const publicId = lastPart.split('.')[0];
    const folder = url.includes('/cv/') ? 'formateurs/cv' : 'formateurs/badges';
    await cloudinary.uploader.destroy(`${folder}/${publicId}`);
  }
}
