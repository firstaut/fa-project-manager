import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table, CreatedAt, UpdatedAt, HasOne, BelongsTo, ForeignKey, HasMany } from 'sequelize-typescript';
import Project from './project.model';
import User from './user.model';


@Table({ tableName: 'tb_admins', timestamps: true })
export default class Admin extends Model<Admin> {
    
    @AutoIncrement
    @PrimaryKey
    @Column({ field: 'admin_id' })
    adminId:number;

    @Column({ field: 'user_id' })
    @ForeignKey(() => User)
    userId:number;
    
    @BelongsTo(() => User)
    user: User;

    @HasMany(() => Project)
    projects: Project[];

    @AllowNull(false)
    @NotEmpty
    @Column
    name:string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    lastname:string;

    @CreatedAt
    creationDate: Date;
    
    @UpdatedAt
    updatedOn: Date;
}

