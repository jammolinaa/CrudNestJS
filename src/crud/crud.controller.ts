import { Controller, Get, Post, Body, Param, Delete, ValidationPipe, UsePipes, Put } from '@nestjs/common';
import { CrudService } from './crud.service';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { query } from 'express';

@Controller('crud')
@UsePipes (new ValidationPipe())
export class CrudController {
  constructor(private readonly crudService: CrudService) {}

  @Post()
  create(@Body() createCrudDto: CreateCrudDto) {
    const user = this.crudService.create(createCrudDto);
    return user;
  }

  @Get()
  findAll() {
    return this.crudService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crudService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCrudDto: UpdateCrudDto) {
    return this.crudService.update(+id, updateCrudDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crudService.remove(+id);
  }
}
