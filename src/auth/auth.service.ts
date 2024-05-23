import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { UserToken } from './models/UserToken';
import { UserPayload } from './models/UserPayload';

@Injectable()
export class AuthService {
    constructor( 
        private readonly usersService: UserService, 
        private readonly jwtService: JwtService
    ) {}

    login(user: UserEntity): UserToken {
        // transforma o user em JWT
        const payload: UserPayload ={
            sub: user.id,
            email: user.email,
            name: user.name,
        };

        const jwtToken = this.jwtService.sign(payload);
        return {
            access_token: jwtToken,
        };
    }

    async validateUser(email: string, password: string) {
        
        const userEmail = await this.usersService.getByEmail(email);
        if (userEmail) {
            //checar se senha é correspondente 
            const isPasswordValid  = await bcrypt.compare(password, userEmail.password);
            if (isPasswordValid) {
                return{
                    ...userEmail,
                    password: undefined,
                };
            }
        }
        // se chegou aqui não encontrou o usuário ou senha correspondente
        throw new Error('User not found or password is invalid')
    }
}
