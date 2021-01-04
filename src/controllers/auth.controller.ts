import { Request, Response } from 'express';
import { Op } from 'sequelize';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/user.model';

dotenv.config();

export default class AuthController {

    public async signIn(req: Request, res: Response, next: Function) {
        try {

            const {
                email,
                username
            } = req.body;

            const user = User.findOne({
                where: {
                    [Op.or]: {
                        email,
                        username
                    }
                }
            });

            if(user === null || user === undefined) {
                return res.json({
                    ok: false,
                    message: 'Usuario o contraseña incorrectos'
                });
            }

            const token = jwt.sign({
                                user
                            }, process.env.SECRET_WORD, {
                                expiresIn: '48h'
                            });

            res.json({
                ok: true,
                message: 'Ingresó al sistema correctamente',
                token,
                word: process.env.SECRET_WORD
            });
            
        } catch (error) {
            console.log(error);
            res.sendStatus(500).json({
                ok: false,
                error: 'Ocurrió un error en el servidor'
            });
        }
    }

}