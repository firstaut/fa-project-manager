import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table, CreatedAt, UpdatedAt, HasMany, Unique } from 'sequelize-typescript';
import Admin from './admin.model';
import Document from './document.model';
import Member from './member.model';


@Table({ tableName: 'tb_users', timestamps: true })
export default class User extends Model<User> {
    
    @AutoIncrement
    @PrimaryKey
    @Column({ field: 'user_id' })
    userId:number;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    kind:string;
    
    @AllowNull(false)
    @NotEmpty
    @Unique
    @Column
    email:string;
    
    @AllowNull(false)
    @NotEmpty
    @Unique
    @Column
    username:string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    password:string;

    @HasMany(() => Admin)
    admins: Admin[];

    @HasMany(() => Member)
    members: Member[];

    @HasMany(() => Document)
    docs: Document[];

    @CreatedAt
    creationAt: Date;
    
    @UpdatedAt
    updatedAt: Date;
}

