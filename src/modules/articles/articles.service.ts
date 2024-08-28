import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Article } from 'src/core/schemas/articles.schema';
import { CreateArticleDto } from './DTO/article.dto';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel(Article.name) private readonly articleModel: Model<Article>,
    private jwtService: JwtService
  ) {}

  async getArticles() {
    return this.articleModel.find().exec();
  }

  async postArticle(body: CreateArticleDto, req: Request): Promise<any> {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return { message: 'Authorization header is missing' };
    }

    const token = authHeader.split(' ')[1];
    try {
      const decodedToken = this.jwtService.verify(token, {
        secret: 'Allahakbar'
      });

      const userId = decodedToken.userId;
      const articleData = { ...body, userId };

      const newArticle = await this.articleModel.create(articleData);
      return newArticle;
    } catch (error) {
      return { message: 'invalid token', error: error.message };
    }
  }
}
