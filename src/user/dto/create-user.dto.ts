import { IsString, IsEmail,MinLength, MaxLength,Matches,IsNotEmpty  } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({message: 'nome não informado'})
    name: string;

    @IsString()
    @IsNotEmpty({message: 'email Não informado'})
    email: string;

    @IsString()
    @IsNotEmpty({message: 'senha não informada'})
    @MinLength(4)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'password inválid',
    })
    password: string;
}