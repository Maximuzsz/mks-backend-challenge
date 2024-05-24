import { IsNotEmpty, IsString } from "class-validator";

export class CreateCatalogoDto {

    @IsString()
    nome_filme:string;

    @IsString()
    genero_filme:string;

    @IsString()
    ano_lancamento:string;

    @IsString()
    diretor:string;

    @IsString()
    sinopse:string;
}
