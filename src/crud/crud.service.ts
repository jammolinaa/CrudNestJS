import { Injectable } from '@nestjs/common';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crud } from './entities/crud.entity';

@Injectable()
export class CrudService {

  constructor(
    @InjectRepository(Crud)
    private crudRepositoty:Repository<Crud>
   ){
    
  }
  async create(createCrudDto: CreateCrudDto) {
    return await this.crudRepositoty.save(createCrudDto);
  }

  async findAll() {
    return await this.crudRepositoty.find();
  }

  async findOne(id: number) {
    return await this.crudRepositoty.findOneBy({id});
  }

  async update(id: number, updateCrudDto: UpdateCrudDto) {
    return await this.crudRepositoty.update(id, updateCrudDto);
  }

  async remove(id: number) {
    return await this.crudRepositoty.delete(id);
  }
}
