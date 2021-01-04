import { Model, AllowNull, AutoIncrement, Column, NotEmpty, PrimaryKey, Table, CreatedAt, UpdatedAt, HasOne, BelongsTo, ForeignKey, BelongsToMany } from 'sequelize-typescript';
import Project from './project.model';
import User from './user.model';


@Table({ tableName: 'tb_documents', timestamps: true })
export default class Document extends Model<Document> {

    @AutoIncrement
    @PrimaryKey
    @Column({ field: 'doc_id' })
    docId: number;

    @Column({ field: 'project_id' })
    @ForeignKey(() => Project)
    projectId: number;

    @BelongsTo(() => Project)
    project: Project;

    @Column({ field: 'user_id' })
    @ForeignKey(() => User)
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @AllowNull(false)
    @NotEmpty
    @Column
    filename: string;
    
    @AllowNull(false)
    @NotEmpty
    @Column
    path: string;

    @AllowNull(false)
    @NotEmpty
    @Column
    type: string;

    @CreatedAt
    creationDate: Date;
    
    @UpdatedAt
    updatedOn: Date;
}

