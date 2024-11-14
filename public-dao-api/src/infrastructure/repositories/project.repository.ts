import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../../domain/repositories/projectRepository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../entities/project.entity';
import { Repository } from 'typeorm';
import { ProjectM } from '../../domain/models/project.model';

@Injectable()
export class DatabaseProjectRepository implements ProjectRepository {
  constructor(
    @InjectRepository(Project)
    private readonly projectEntityRepository: Repository<Project>,
  ) {}

  async findAll(): Promise<ProjectM[]> {
    return (await this.projectEntityRepository.find()).map((projectEntity) =>
      this.fromProjectEntityToProjectModel(projectEntity),
    );
  }

  private fromProjectEntityToProjectModel(projectEntity: Project): ProjectM {
    const projectModel = new ProjectM();
    projectModel.id = projectEntity.id;
    projectModel.name = projectEntity.name;
    projectModel.description = projectEntity.description;
    projectModel.createdAt = projectEntity.created_at;
    projectModel.updatedAt = projectEntity.updated_at;

    return projectModel;
  }
}
