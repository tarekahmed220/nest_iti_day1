import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tag } from 'src/core/schemas/tags.schema';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tag.name) private tagModel: Model<Tag>) {}

  async getAllTags() {
    return await this.tagModel.find();
  }

  async getTagById(id: string) {
    return await this.tagModel.findById(id);
  }

  async addTag(tag: any, userId: string) {
    tag.createdBy = userId;
    await this.tagModel.create(tag);
    return {
      message: 'Added successfully!',
      tags: await this.tagModel.find({ createdBy: userId })
    };
  }

  async removeTag(id: string) {
    const removedTag = await this.tagModel.findByIdAndDelete(id);
    return { message: 'Removed successfully!', tag: removedTag };
  }

  async updateTag(id: string, newTag: any) {
    const findTag = await this.tagModel.findById(id);
    if (findTag) {
      findTag.name = newTag.name;
      await findTag.save();
      return { message: 'Updated successfully!', tag: findTag };
    } else {
      return { message: 'Tag Not Found!' };
    }
  }
}
