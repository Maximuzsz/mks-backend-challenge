import { BadRequestException, Body, Param, Req } from '@nestjs/common';
import { UserCreateDecorator } from './decorators/user-create-decorator';
import { UserDecorator } from './decorators/user-decorators';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { UserDecoratorUpdatePassword } from './decorators/user-decorator-update-password';
import { UserDecoratorUpdate } from './decorators/user-decorator-update';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDecoratorGetAll } from './decorators/user-decorator-get-users';
import { UserDecoratorGetEmail } from './decorators/user-decorator-get-email';
import { UserDecoratorDelete } from './decorators/user-decorator-delete';

@UserDecorator()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UserDecoratorGetAll()
  async getUsers() {
    try {
      return await this.userService.getAll();
    } catch (error) {
      throw new BadRequestException('Failed to request');
    }
  }

  @UserDecoratorGetEmail()
  async getUserEmail(@Param('email') email: string) {
    try {
      return await this.userService.getByEmail(email);
    } catch (error) {
      throw new BadRequestException('Failed to request');
    }
  }

  @UserCreateDecorator()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.createUser(createUserDto);
    } catch (error) {
      throw new BadRequestException('Failed to insert');
    }
  }

  @UserDecoratorUpdatePassword()
  async changePassword(@Body() body: { id: string, password: string }){
    const { id, password } = body;
    try {
      await this.userService.updatePassword(id, password);
      return { message: 'Password updated successfully' };
    } catch (error) {
      throw new BadRequestException('Failed to update password');
    }
  }

  @UserDecoratorUpdate()
  async update(@Param('id') id: string, @Body() user: UpdateUserDto) {
    try {
      await this.userService.updateUser(id, user)
      return { message: 'Updated successfully' };
    } catch (error) {
      throw new BadRequestException('Failed to update ');
    }
  }

  @UserDecoratorDelete()
  async deleteUser(@Param('id') id: string) {
    try {
      await this.userService.delete(id)
      return { message: 'Deleted successfully' };
    } catch (error) {
      throw new BadRequestException('Failed to delete ');
    }
  }

}
