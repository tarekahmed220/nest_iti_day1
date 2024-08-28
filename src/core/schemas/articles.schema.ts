import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from './user.schema';

@Schema({ versionKey: false, timestamps: true })
export class Article {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  coverImg: string;

  @Prop({ required: true, type: [String] })
  images: string[];

  @Prop({ required: true, type: [String] })
  tagList: string[];

  @Prop({ required: true, default: 0 })
  likes: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: User;
}

export const ArticlesSchema = SchemaFactory.createForClass(Article);
