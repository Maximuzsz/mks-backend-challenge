import { applyDecorators, Put } from '@nestjs/common';
import { ApiBody, ApiOperation } from '@nestjs/swagger';

export const CatalogoDecoratorUpdate = () => {
    return applyDecorators(
        Put('update'),
        ApiOperation({
            summary: 'altera os dados do filme',
          }),
          ApiBody({
            schema: {
              type: 'object',
              properties: {
                nome_filme: {
                  type: 'string',
                  description: 'Nome do filme.',
                },
                genero_filme: {
                  type: 'string',
                  example: 'Terror/Suspense',
                  description: 'genero do filme',
                },
                ano_lancamento: {
                    type: 'string',
                    example: '2020',
                    description: 'Ano de lançamento ddo filme',
                },
                diretor: {
                    type: 'string',
                    example: 'Spillber',
                    description: 'diretor do filme',
                },
                sinopse: {
                    type: 'string',
                    example: '',
                    description: 'sinopse do filme',
                },
              },
            },
          }),
    );
};