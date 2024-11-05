import { Injectable } from '@nestjs/common';

@Injectable()
export class MyService {
  getHello(): string {
    return 'Hello from my custom NestJS package!';
  }

  getGoodbye(): string {
    return 'Goodbye from my custom NestJS package!';
  }

  updatedGoodbye(): string {
    return 'Goodbye!!!!!!!!!!!!!!!!!!!!!!!!';
  }
}
