import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigModule } from '../config/typeorm/typeorm.module';
import { Project } from '../entities/project.entity';
import { DatabaseProjectRepository } from './project.repository';

@Module({
  imports: [TypeOrmConfigModule, TypeOrmModule.forFeature([Project])],
  providers: [DatabaseProjectRepository],
  exports: [DatabaseProjectRepository],
})
export class RepositoriesModule {}
