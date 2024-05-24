import { applyDecorators, Get } from "@nestjs/common"
import { ApiOperation } from "@nestjs/swagger"

export const CatalogoDecoratorGetID =() =>{
    return applyDecorators(
        Get(':id'),
        ApiOperation({ summary: 'Busca o  filme pelo id.' })
    )
}