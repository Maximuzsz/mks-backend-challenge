import { IsPublic } from 'src/auth/decorators/is-public.decorator';
import { CatalogoService } from './catalogo.service';
import { CatalogoDecorator } from './decorators/catalogo-decorator';
import { CatalogoDecoratorGetAll } from './decorators/catalogo-dercorator-get-all';
import { CatalogoDecoratorGetID } from './decorators/catalogo-dercorator-get-Id';
import { BadRequestException, Body, Param } from '@nestjs/common';
import { CatalogoDecoratorDelete } from './decorators/catalogo-dercorator-delete';
import { CatalogoDecoratorUpdate } from './decorators/catalogo-dercorator-update';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { CatalogoCreateDecorator } from './decorators/catalogo-decorator-create';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';

@CatalogoDecorator()
export class CatalogoController {
  constructor(private readonly catalogoService: CatalogoService) {}

  @CatalogoDecoratorGetAll()
  @IsPublic()
  gatAllFilmes() {
    try {
      return this.catalogoService.findAll();
    } catch (error) {
      throw new BadRequestException('Failed to request ');
    }
  }

  @CatalogoDecoratorGetID()
  getFilmesId(@Param('id') id: string) {
    try {
      return this.catalogoService.findOne(id);
    } catch (error) {
      throw new BadRequestException('Failed to request ');
    }
  }

  @CatalogoCreateDecorator() 
  create(@Body() createCatalogoDto: CreateCatalogoDto) {
    try {
      return this.catalogoService.create(createCatalogoDto)
    } catch (error) {
      throw new BadRequestException('Failed to insert ');
    }
  }

  @CatalogoDecoratorUpdate()
  update(@Param('id') id: string, @Body() filme: UpdateCatalogoDto) {
    try {
      return this.catalogoService.update(id, filme);
    } catch (error) {
      throw new BadRequestException('Failed to request ');
    }
  }


  @CatalogoDecoratorDelete()
  delete(@Param('id') id: string) {
    try {
      return this.catalogoService.remove(id);
    } catch (error) {
      throw new BadRequestException('Failed to delete ');
    }
  }

  
  
}
