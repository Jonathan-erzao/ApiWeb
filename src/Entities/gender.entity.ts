import { DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, ManyToMany} from "typeorm";
import { ArtistEntity} from "./artist.entity";

@Entity('genders', {schema:'musica'})

export class GenderEntity{
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

    @ManyToMany(() => ArtistEntity, artist => artist.gender)
    
    artist:ArtistEntity[];

    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'gender name',
    })
    name: string;

    @Column('varchar', {
        name: 'description',
        nullable: false,
        comment: 'description gender',
    })
    lastname: string;

}