import { Request, Response } from 'express';
import { sequelize } from '../../database/db';
import { genSaltSync, hashSync } from 'bcryptjs';
import Member from '../models/member.model';
import User from '../models/user.model';



export default class MemberController {

    public async createMember(req: Request, res: Response) {

        const t_add = await sequelize.transaction();

        try {
            
            const _user: User = req.body.user;
            const _member: Member = req.body.member;

            _user.kind = 'member';
            const salt = genSaltSync(10);
            _user.password = hashSync(_user.password, salt);
            const user = new User(_user);
            await user.save({
                transaction: t_add
            });

            _member.userId = user.userId;
            const member = new Member(_member);

            await member.save({
                transaction: t_add
            });

            await t_add.commit();

            res.json({
                ok: true,
                message: 'Usuario registrado correctamente',
                data: {
                    user,
                    member
                }
            });

        } catch (error) {
            console.log(error);
            await t_add.rollback();
            res.sendStatus(500).json({
                ok: false,
                error: 'Ocurrió un error en el servidor'
            });
        }
    }


    public async updateMember(req: Request, res: Response) {

        const t_add = await sequelize.transaction();

        try {
            
            const _user: User = req.body.user;
            const _member: Member = req.body.member;

            _user.kind = 'member';
            const user = new User(_user);
            await user.save({
                transaction: t_add
            });

            _member.userId = user.userId;
            const member = new Member(_member);

            await member.save({
                transaction: t_add
            });

            await t_add.commit();

            res.json({
                ok: true,
                message: 'Usuario registrado correctamente',
                data: {
                    user,
                    member
                }
            });

        } catch (error) {
            console.log(error);
            await t_add.rollback();
            res.sendStatus(500).json({
                ok: false,
                error: 'Ocurrió un error en el servidor'
            });
        }
    }
}