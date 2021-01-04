import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table, CreatedAt, UpdatedAt, HasOne, BelongsTo, ForeignKey, Unique } from 'sequelize-typescript';
import Member from './member.model';
import Project from './project.model';


@Table({ tableName: 'tb_projects_members', timestamps: true })
export default class ProjectMember extends Model<ProjectMember> {
    
    @AutoIncrement
    @PrimaryKey
    @Column({ field: 'project_admin_id' })
    projectAdminId: number;

    @Column({ field: 'member_id' })
    @ForeignKey(() => Member)
    memberId: number;

    @Column({ field: 'project_id' })
    @ForeignKey(() => Project)
    projectId: number;

    @CreatedAt
    creationDate: Date;
    
    @UpdatedAt
    updatedOn: Date;
}

