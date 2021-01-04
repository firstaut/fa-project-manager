import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table, CreatedAt, UpdatedAt, HasOne, BelongsTo, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import ProjectMember from './project-member.model';
import Project from './project.model';
import User from './user.model';


@Table({ tableName: 'tb_members', timestamps: true })
export default class Member extends Model<Member> {
    
    @AutoIncrement
    @PrimaryKey
    @Column({ field: 'member_id' })
    memberId: number;

    @Column({ field: 'user_id' })
    @ForeignKey(() => User)
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @BelongsToMany(() => Project, () => ProjectMember)
    projects: Project[];
    
    @AllowNull(false)
    @NotEmpty
    @Column
    name: string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    lastname: string;

    @CreatedAt
    creationDate: Date;
    
    @UpdatedAt
    updatedOn: Date;
}

