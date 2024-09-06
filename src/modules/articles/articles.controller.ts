import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './DTO/article.dto';
import { AuthGuard } from 'src/core/guards/auth.guard';

@Controller('articles')
@UseGuards(AuthGuard)
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getArticles() {
    return this.articlesService.getArticles();
  }

  @Post()
  async postArticle(@Body() body: CreateArticleDto, @Request() req) {
    body.userId = req['userId'];
    return this.articlesService.postArticle(body);
  }
}
