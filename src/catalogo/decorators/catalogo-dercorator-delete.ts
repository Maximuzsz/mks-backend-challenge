import { applyDecorators, Delete } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

export const CatalogoDecoratorDelete = () => {
  return applyDecorators(
    Delete(':id'),
    ApiOperation({ summary: 'deleta os dados do filme.' }),
  );
};