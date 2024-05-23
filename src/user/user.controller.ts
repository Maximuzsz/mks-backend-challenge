import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserCreateDecorator } from './decorators/user-create-decorator';
import { UserDecorator } from './decorators/user-decorators';

@UserDecorator()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UserCreateDecorator()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
