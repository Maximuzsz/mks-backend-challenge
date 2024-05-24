import { applyDecorators, Post } from "@nestjs/common"
import { ApiBody, ApiOperation } from "@nestjs/swagger"
import { IsPublic } from "src/auth/decorators/is-public.decorator"

export const UserCreateDecorator  =() =>{
    return applyDecorators(
        ApiOperation({ summary: "Criação do usuário" }),
        IsPublic(),
        ApiBody({
            schema: {
              type: 'object',
              properties: {
                name: {
                    type: 'string',
                    description: 'nome do usuário.',
                    example: 'Jose da Silva',
                },
                email: {
                    type: 'string',
                    description: 'email do usuário.',
                    example: 'teste@gmail.com',
                },
                password: {
                    type: 'string',
                    description: 'senha do usuário.',
                    example: 'Abc123',
                },
              },
            },
        }),
        Post(),
    )
}