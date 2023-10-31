import { ManyToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { AuthorEntity} from "./author.entity";

@Entity('articles', {schema:'ventas'})

export class ArticleEntity{
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

    @ManyToOne(() => AuthorEntity, author => author.articles)
    author:AuthorEntity;


    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'article title',
    })
    title: string;

    @Column('number', {
        name: 'content',
        nullable: false,
        comment: 'article content',
    })
    price: number;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'article description',
    })
    description: string;

    @Column('varchar', {
        name: 'status',
        nullable: false,
        comment: 'Estado del artículo (ejemplo: publicado, en revisión, archivado, etc.)',
    })
    status: string;
    

}
