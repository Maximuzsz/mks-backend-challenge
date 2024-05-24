import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'catalogo'})

export class CatalogoEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name:'nome_filme', nullable:false})
    nome_filme:string;

    @Column({name:'genero_filme', nullable:false})
    genero_filme:string;

    @Column({name:'ano_lancamento', nullable:false})
    ano_lancamento:string;

    @Column({name:'diretor', nullable:false})
    diretor:string;

    @Column({name:'sinopse', nullable:false})
    sinopse:string;

    @CreateDateColumn({name:'inserido_em'})
    inserido_em:string;
}