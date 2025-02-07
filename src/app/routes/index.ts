import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.routes';

const router = Router();
const applicationRoutes = [
  {
    path: '/user',
    route: UserRoutes,
  },
];

applicationRoutes.forEach((item) => router.use(item.path, item.route));

export default router;
