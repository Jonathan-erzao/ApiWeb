import { ManyToMany, OneToOne, ManyToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, JoinTable} from "typeorm";
import {GenderEntity } from "./gender.entity";

@Entity('artists', {schema:'musica'})

export class ArtistEntity{
    @PrimaryGeneratedColumn( 'uuid')
    id: string;
    @CreateDateColumn({
        name:'create_at',
        type:'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })
    createAT:Date;
    @UpdateDateColumn({
        name: 'update_at',
        type: 'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
    })
    updateAT:Date
    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        nullable: true,
    })
    deleteAT:Date

    @ManyToMany(() => GenderEntity, gender => gender.artist)
    @JoinTable()
    gender:GenderEntity;


    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'artist name',
    })
    title: string;

    @Column('varchar', {
        name: 'lastname',
        nullable: true,
        comment: 'artist lastname',
    })
    lastname: string;
    

}