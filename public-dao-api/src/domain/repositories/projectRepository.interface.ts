import { ProjectM } from '../models/project.model';

export interface ProjectRepository {
  findAll(): Promise<ProjectM[]>;
}
