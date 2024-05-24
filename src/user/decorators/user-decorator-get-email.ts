import { applyDecorators, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

export const UserDecoratorGetEmail = () => {
  return applyDecorators(
    Get('/findemail/:email'),
    ApiOperation({ summary: 'Busca o  usuário pelo email.' }),
  );
};