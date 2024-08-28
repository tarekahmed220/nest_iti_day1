import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './DTO/article.dto';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async getArticles() {
    return this.articlesService.getArticles();
  }

  @Post()
  async postArticle(@Body() body: CreateArticleDto, @Request() req) {
    return this.articlesService.postArticle(body, req);
  }
}
