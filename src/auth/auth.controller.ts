import { Body } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthDecorator } from './decorators/auth-decorator';
import { AuthDecoratorLogin } from './decorators/auth-decorator-login';
import { CurrentUser } from './decorators/current-user.decorator';
import { CreateAuthDto } from './dto/create-auth.dto';

@AuthDecorator()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @AuthDecoratorLogin()
  async login( @Body() req: CreateAuthDto, @CurrentUser() user: UserEntity) {

    let token = await this.authService.login(user);
    return {
      token,
      user
    };
    
  }
}
