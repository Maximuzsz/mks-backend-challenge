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
  async gatAllFilmes() {
    try {
      return  JSON.stringify(await this.catalogoService.findAll());
    } catch (error) {
      throw new BadRequestException('Failed to request ');
    }
  }

  @CatalogoDecoratorGetID()
  async getFilmesId(@Param('id') id: string) {
    try {
      return JSON.stringify( await this.catalogoService.findOne(id));
    } catch (error) {
      throw new BadRequestException('Failed to request ');
    }
  }

  @CatalogoCreateDecorator() 
  async create(@Body() createCatalogoDto: CreateCatalogoDto) {
    try {
      return JSON.stringify(await this.catalogoService.create(createCatalogoDto));
    } catch (error) {
      throw new BadRequestException('Failed to insert ');
    }
  }

  @CatalogoDecoratorUpdate()
  async update(@Param('id') id: string, @Body() filme: UpdateCatalogoDto) {
    try {
      return JSON.stringify(await this.catalogoService.update(id, filme));
    } catch (error) {
      throw new BadRequestException('Failed to request ');
    }
  }


  @CatalogoDecoratorDelete()
  async delete(@Param('id') id: string) {
    try {
      return JSON.stringify(await this.catalogoService.remove(id));
    } catch (error) {
      throw new BadRequestException('Failed to delete ');
    }
  }

  
  
}
