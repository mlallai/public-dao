import { Controller, Get } from '@nestjs/common';

@Controller()
export class WelcomeController {
  @Get('')
  async welcome() {
    return {
      status: 'OK',
      code: 200,
      message: 'Welcome to Public DAO API',
      data: {},
    };
  }
}
