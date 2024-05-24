import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'users'})

export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({name:'name', nullable:false})
    name:string;

    @Column({name:'email', nullable:false})
    email:string;

    @Column({name:'password', nullable:false})
    password:string;

    @CreateDateColumn({name:'created_at'})
    createdAt:string;
}