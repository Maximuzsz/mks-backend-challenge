import { Module } from '@nestjs/common';
import { CatalogoService } from './catalogo.service';
import { CatalogoController } from './catalogo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogoEntity } from './entities/catalogo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CatalogoEntity])],
  controllers: [CatalogoController],
  providers: [CatalogoService],
})
export class CatalogoModule {}
