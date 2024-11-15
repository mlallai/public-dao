import { ProjectM } from '../models/project.model';
import { CreateProjectDto } from '../types/types';

export interface ProjectRepository {
  findAll(): Promise<ProjectM[]>;
  create(project: CreateProjectDto): Promise<ProjectM>;
}
