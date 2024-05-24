import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCatalogoDto } from './dto/create-catalogo.dto';
import { UpdateCatalogoDto } from './dto/update-catalogo.dto';
import { CatalogoEntity } from './entities/catalogo.entity';

@Injectable()
export class CatalogoService {
  constructor(
    @InjectRepository(CatalogoEntity)
    private readonly catalogoRepository: Repository<CatalogoEntity>,
  ){}

  async create(createCatalogoDto: CreateCatalogoDto) {
    return await this.catalogoRepository.save(this.catalogoRepository.create(createCatalogoDto));
  }

  findAll() {
    return this.catalogoRepository.find();
  }

  findOne(id: string) {
    return this.catalogoRepository.findOneBy({
      id,
    });
  }

  async update(id: string, updateCatalogoDto: UpdateCatalogoDto) {
    const filme = await this.catalogoRepository.findOneBy({
      id: id,
    });
    if (!filme) {
        throw new Error('Filme não encontrado');
    }
    filme.nome_filme = updateCatalogoDto.nome_filme;
    filme.genero_filme = updateCatalogoDto.genero_filme;
    filme.diretor = updateCatalogoDto.diretor;
    filme.ano_lancamento = updateCatalogoDto.ano_lancamento;
    filme.sinopse = updateCatalogoDto.sinopse;
    await this.catalogoRepository.save(filme);
    return;
  }

  async remove(id: string) {
    const filme = await this.catalogoRepository.findOneBy({
      id: id,
    });
    if (!filme) {
        throw new Error('Filme não encontrado');
    }
    await this.catalogoRepository.remove(filme);
    return;
  }
}
