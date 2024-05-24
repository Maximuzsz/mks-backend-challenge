import { applyDecorators, Get } from "@nestjs/common"
import { ApiOperation } from "@nestjs/swagger"

export const CatalogoDecoratorGetAll =() =>{
    return applyDecorators(
        Get('/allFilmes'),
        ApiOperation({ summary: 'Busca todos os filmes.' })
    )
}