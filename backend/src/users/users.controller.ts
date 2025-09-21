import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './users.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
     constructor(private readonly usersService: UsersService) {}

  // naya user create karna
  @Post()
  async create(@Body() userData: Partial<User>) {
    return this.usersService.create(userData);
  }

  // email ke basis pe ek user find karna
  @Get(':email')
  async findByEmail(@Param('email') email: string) {
    return this.usersService.findByEmail(email);
  }
}
