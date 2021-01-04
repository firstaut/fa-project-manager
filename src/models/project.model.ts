import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table, CreatedAt, UpdatedAt, HasOne, BelongsTo, ForeignKey, Unique, BelongsToMany } from 'sequelize-typescript';
import Admin from './admin.model';
import Member from './member.model';
import ProjectMember from './project-member.model';


@Table({ tableName: 'tb_projects', timestamps: true })
export default class Project extends Model<Project> {
    
    @AutoIncrement
    @PrimaryKey
    @Column({ field: 'project_id' })
    projectId: number;

    @Column({ field: 'admin_id' })
    @ForeignKey(() => Admin)
    adminId: number;

    @BelongsTo(() => Admin)
    admin: Admin;

    @BelongsToMany(() => Member, () => ProjectMember)
    members: Member[];

    @AllowNull(false)
    @NotEmpty
    @Unique
    @Column
    serial: string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    name: string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    lastname: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    path: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    cover: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    size: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    docs: number;

    @AllowNull(false)
    @NotEmpty
    @Column
    status: string;

    @AllowNull(false)
    @NotEmpty
    @Column({ field: 'category_id' })
    categoryId: number;

    @CreatedAt
    creationDate: Date;
    
    @UpdatedAt
    updatedOn: Date;
}

