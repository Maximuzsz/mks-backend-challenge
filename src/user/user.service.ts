import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ){}

    async createUser(data: CreateUserDto): Promise<UserEntity> {

        const date = {
            ...data,
            password: await bcrypt.hash(data.password, 10),
        };

        const createUser =  await  this.userRepository.save(this.userRepository.create(date));

        return {
            ...createUser,
            password: undefined,
        };
        
    }

    async getByEmail(email: string): Promise<UserEntity> {
        return this.userRepository.findOneBy({
            email: email,
        });
    }
}
