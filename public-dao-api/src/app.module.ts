import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { ProjectController } from './infrastructure/controllers/projects/project.controller';

@Module({
  imports: [EnvironmentConfigModule, UsecasesProxyModule.register()],
  controllers: [ProjectController],
  providers: [],
})
export class AppModule {}
