import { applyDecorators, Get } from "@nestjs/common"
import { ApiOperation } from "@nestjs/swagger"

export const UserDecoratorGetAll =() =>{
    return applyDecorators(
        Get('/allUsers'),
        ApiOperation({ summary: 'Busca todos os usuários.' })
    )
}