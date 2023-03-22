import authRouters from '../../features/auth/routers';
import mainRouters from '@/features/main/routers';

export const routers = [...authRouters, ...mainRouters];