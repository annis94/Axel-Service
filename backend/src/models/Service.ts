import mongoose, { Document, Schema } from 'mongoose';

export interface IService extends Document {
  title: string;
  description: string;
  category: string;
  price: string; // Ex: "à partir de 50€" ou "sur devis"
  image?: string; // Optionnel, pour une photo
}

const serviceSchema = new Schema<IService>({
  title: { 
    type: String, 
    required: true, 
    trim: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  category: { 
    type: String, 
    required: true, 
    trim: true 
  },
  price: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String 
  },
}, { timestamps: true });

export const Service = mongoose.model<IService>('Service', serviceSchema); 