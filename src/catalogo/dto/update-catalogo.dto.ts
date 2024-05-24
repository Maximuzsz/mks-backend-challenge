import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCatalogoDto {
    @IsString()
    @IsNotEmpty({message: 'nome não informado'})
    nome_filme:string;

    @IsString()
    @IsNotEmpty({message: 'nome não informado'})
    genero_filme:string;

    @IsString()
    @IsNotEmpty({message: 'nome não informado'})
    ano_lancamento:string;

    @IsString()
    @IsNotEmpty({message: 'nome não informado'})
    diretor:string;

    @IsString()
    @IsNotEmpty({message: 'nome não informado'})
    sinopse:string;
}
