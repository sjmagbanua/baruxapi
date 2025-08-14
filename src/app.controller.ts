import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Controllers are responsible for handling incoming requests and sending responses back to the client.
  // The routing mechanism determines which controller will handle each request. Often, a controller has multiple routes, and each route can perform a different action.
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
