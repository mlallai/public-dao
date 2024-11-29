import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/config/environment-config/environment-config.module';
import { UsecasesProxyModule } from './infrastructure/usecases-proxy/usecases-proxy.module';
import { ProjectController } from './infrastructure/controllers/projects/project.controller';
import { ExceptionsModule } from './infrastructure/exceptions/exceptions.module';
import { LoggerModule } from './infrastructure/logger/logger.module';
import { WelcomeController } from './infrastructure/controllers/welcome/welcome.controller';

@Module({
  imports: [
    EnvironmentConfigModule,
    UsecasesProxyModule.register(),
    ExceptionsModule,
    LoggerModule,
  ],
  controllers: [ProjectController, WelcomeController],
  providers: [],
})
export class AppModule {}
