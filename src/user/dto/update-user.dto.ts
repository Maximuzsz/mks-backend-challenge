import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto  {
    @IsString()
    @IsNotEmpty({message: 'nome não informado'})
    name: string;

    @IsString()
    @IsNotEmpty({message: 'email Não informado'})
    email: string;
}
