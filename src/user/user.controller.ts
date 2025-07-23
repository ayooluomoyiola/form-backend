import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  create(@Body() dto: CreateUserDto) {
    return this.userService.createUser(dto);
  }

  @Get('all')
  get() {
    return this.userService.getUsers();
  }
}
