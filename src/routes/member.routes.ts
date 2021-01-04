import { Router } from 'express';
import MemberController from '../controllers/member.controller';
import { existsUser } from '../middlewares/user.middleware';

const router: Router = Router();
const memberController = new MemberController();

router.post(
    '/create',
    [existsUser],
    memberController.createMember
);

export default router;