import { DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn} from "typeorm";
import { ContactInfoEntity} from "./contactInfo.entity";

@Entity('employees', {schema:'ventas'})

export class EmployeeEntity{
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

    @OneToOne(() => ContactInfoEntity, contactInfo => contactInfo.employee)
    @JoinColumn()
    contactInfo:ContactInfoEntity;



    @Column('varchar', {
        name: 'name',
        nullable: false,
        comment: 'employee name',
    })
    lastname: string;

    @Column('string', {
        name: 'lastname',
        nullable: true,
        comment: 'employee lastname',
    })
    address: string;

    @Column('varchar', {
        name: 'work area',
        nullable: true,
        comment: 'employee work area',
    })
    description: string;
}
