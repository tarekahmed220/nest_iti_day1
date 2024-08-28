import { TagsDto } from './DTO/tags.dto';
import { TagsService } from './tags.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Request,
  Post,
  Put,
  UnauthorizedException
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('tags')
export class TagsController {
  constructor(
    private readonly _tagsService: TagsService,
    private readonly jwtService: JwtService
  ) {}

  @Get()
  getAllTags() {
    return this._tagsService.getAllTags();
  }

  @Get(':id')
  getTagById(@Param('id') id: string) {
    return this._tagsService.getTagById(id);
  }

  @Post()
  addTag(@Body() newTag: TagsDto, @Request() req: any) {
    const userId = this.verifyToken(req);
    return this._tagsService.addTag(newTag, userId);
  }

  @Delete(':id')
  removeTag(@Param('id') id: string, @Request() req: any) {
    this.verifyToken(req);
    return this._tagsService.removeTag(id);
  }

  @Put(':id')
  updateTag(@Param('id') id: string, @Body() newTag: any, @Request() req: any) {
    this.verifyToken(req);
    return this._tagsService.updateTag(id, newTag);
  }

  private verifyToken(req: any): string {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }

    const token = authHeader.split(' ')[1];
    try {
      const decodedToken = this.jwtService.verify(token);
      if (!decodedToken || !decodedToken.userId) {
        throw new UnauthorizedException('Invalid token');
      }

      return decodedToken.userId;
    } catch (error) {
      throw new UnauthorizedException('Invalid token', error.message);
    }
  }
}
