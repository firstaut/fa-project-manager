import { Request, Response } from "express";
import { nextTick } from "process";
import { Op } from "sequelize";
import User from "../models/user.model";


export async function existsUser(req: Request, res: Response, next: Function) {
    try {

        const _user: User = req.body.user;

        if(_user === null || _user === undefined) {
            return res.sendStatus(401).json({
                ok: false,
                message: 'Prohibido el uso de email o username'
            });
        }
        
        const user = await User.findOne({
            where: {
                [Op.or]: {
                    email: _user.email,
                    username: _user.username
                }
            }
        });

        if(user != null || user != undefined) {
            return res.sendStatus(401).json({
                ok: false,
                message: 'Use otro email o username'
            });
        }

        next();

    } catch (error) {
        console.log(error);
        res.sendStatus(401).json({
            ok: false,
            message: 'Prohibido el uso de email o username'
        });
    }
}