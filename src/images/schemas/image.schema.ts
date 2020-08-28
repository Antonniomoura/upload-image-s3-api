import * as mongoose from 'mongoose';

export const ImageSchema = new mongoose.Schema({
  idUser: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
}, { collection: 'images', timestamps: true });