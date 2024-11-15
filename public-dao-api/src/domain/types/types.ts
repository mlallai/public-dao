export enum ProjectStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export interface CreateProjectDto {
  name: string;
  description: string;
}

export interface ProjectProps extends CreateProjectDto {
  status: ProjectStatus;
}
