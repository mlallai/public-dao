import { ProjectStatus } from '../entities/project.entity';

export class CreateProjectControllerDto {
  name: string;
  description: string;
}

export class CreateProjectDatabaseDto extends CreateProjectControllerDto {
  status: ProjectStatus;
}
