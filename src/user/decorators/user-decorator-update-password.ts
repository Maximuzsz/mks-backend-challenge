import { applyDecorators, Put } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

export const UserDecoratorUpdatePassword = () => {
  return applyDecorators(
    Put('resetPassword'),
    ApiOperation({
      summary: 'altera a senha do usuário',
    }),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'Id do usuário.',
          },
          password: {
            type: 'string',
            example: 'abc123',
            description: 'Nova senha do usuário',
          },
        },
      },
    }),
  );
};