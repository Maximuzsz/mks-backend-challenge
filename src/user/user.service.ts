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

    async getAll() {
        return this.userRepository.find();
    }

    async getByEmail(email: string): Promise<UserEntity> {
        return this.userRepository.findOneBy({
            email: email,
        });
    }

    async updatePassword(id: string, password: string) : Promise<void>{
        let senha = String(bcrypt.hash(password, 10));
        const user = await this.userRepository.findOneBy({
            id: id,
        });
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        user.password = senha;
        await this.userRepository.save(user);
        return;
    }

    async updateUser(id: string,update: UpdateUserDto) {
        const user = await this.userRepository.findOneBy({
            id: id,
        });
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        user.email = update.email;
        user.name = update.name;
        await this.userRepository.save(user);
        return;
    }

    async delete(id: string) {
        const user = await this.userRepository.findOneBy({
            id: id,
        });
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        await this.userRepository.remove(user);
        return;
    }
}
