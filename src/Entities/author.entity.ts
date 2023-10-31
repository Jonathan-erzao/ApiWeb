import { DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { ArticleEntity} from "./articles.entity";

@Entity('authors', {schema:'ventas'})

export class AuthorEntity{
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

    @OneToMany(() => ArticleEntity, article => article.author)
    articles:ArticleEntity[];

    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'author name',
    })
    title: string;

    @Column('varchar', {
        name: 'nationality',
        nullable: true,
        comment: 'author nationality',
    })
    description: string;
}
