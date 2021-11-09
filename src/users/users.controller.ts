import { Controller, Get, Param } from '@nestjs/common';

@Controller('laboratories')
export class UsersController {
  @Get()
  index(): string {
    return 'olamundo';
  }

  @Get(':id')
  show(@Param() params): string {
    return params.id;
  }
}
