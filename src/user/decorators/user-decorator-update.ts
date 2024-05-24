import { applyDecorators, Put } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

export const UserDecoratorUpdate = () => {
    return applyDecorators(
        Put('update'),
        ApiOperation({
            summary: 'altera os dados do usuário',
          }),
          ApiBody({
            schema: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  description: 'Nome do usuário.',
                },
                email: {
                  type: 'string',
                  example: 'joao@gmail.com',
                  description: 'Email do usuário',
                },
              },
            },
          }),
    );
};