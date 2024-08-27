import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { tag } from '../tags.dto';

@Controller('tags')
export class TagsController {
  constructor(private readonly _tagsService: TagsService) {}
  @Get()
  getTag() {
    return this._tagsService.getTag();
  }
  @Get('/:id')
  getTagByID(@Param('id') param: any) {
    return this._tagsService.getTagById(param);
  }

  @Post()
  addTag(@Body() body: tag) {
    return this._tagsService.addTag(body);
  }

  @Delete('/:id')
  deleteTag(@Param('id') id: string) {
    return this._tagsService.deleteTag(id);
  }

  @Put('/:id')
  updateTag(@Param('id') id: string, @Body() body: tag) {
    return this._tagsService.updateTag(id, body);
  }
}
