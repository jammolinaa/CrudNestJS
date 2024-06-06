import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Crud {
    @PrimaryGeneratedColumn()
    id:          number;
    @Column()
    Titulo:      string;
    @Column()
    FirsName: string;
    @Column()
    LastName:         string;
    @Column()
    Correo:      string;
    @Column({default:true})
    isActive:      boolean;
}
