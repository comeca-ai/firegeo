import { auth } from '@/lib/auth';
import { toNextJsHandler } from 'better-auth/integrations/nextjs';
const { GET, POST } = toNextJsHandler(auth);
export { GET, POST };
