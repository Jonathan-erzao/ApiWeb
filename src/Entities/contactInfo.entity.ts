import { OneToOne, ManyToOne, DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import { EmployeeEntity} from "./employee.entity";

@Entity('contact_info', {schema:'ventas'})

export class ContactInfoEntity{
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

    @OneToOne(() => EmployeeEntity, employee => employee.contactInfo)
    employee:EmployeeEntity;


    @Column('varchar', {
        name: 'title',
        nullable: false,
        comment: 'role name',
    })
    title: string;

    @Column('varchar', {
        name: 'description',
        nullable: true,
        comment: 'role description',
    })
    description: string;
    

}