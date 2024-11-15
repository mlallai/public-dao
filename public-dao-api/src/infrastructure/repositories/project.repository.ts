import { Injectable } from '@nestjs/common';
import { ProjectRepository } from '../../domain/repositories/projectRepository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../entities/project.entity';
import { Repository } from 'typeorm';
import { ProjectM } from '../../domain/models/project.model';
import { CreateProjectDatabaseDto } from '../dtos/project.dtos';

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

  async create(createProjectDto: CreateProjectDatabaseDto): Promise<ProjectM> {
    const project = new Project();
    project.name = createProjectDto.name;
    project.description = createProjectDto.description;
    project.status = createProjectDto.status;
    const projectE = await this.projectEntityRepository.save(project);
    return this.fromProjectEntityToProjectModel(projectE);
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
