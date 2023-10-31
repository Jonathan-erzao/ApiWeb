import { ManyToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { CategoryEntity } from "./category.entity";

@Entity('products', {schema:'ventas'})

export class ProductEntity{
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

    @ManyToOne(() => CategoryEntity, category => category.products)
    category:CategoryEntity;


    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'product name',
    })
    title: string;

    @Column('number', {
        name: 'price',
        nullable: false,
        comment: 'product price',
    })
    price: number;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'product description',
    })
    description: string;
    

}
