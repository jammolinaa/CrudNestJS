import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudModule } from './crud/crud.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crud } from './crud/entities/crud.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'crud',
      entities: [Crud],
      synchronize: true,
    }),

    CrudModule 
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
