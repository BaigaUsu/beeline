import { withAuth } from 'next-auth/middleware';

export default withAuth({
  pages: {
    signIn: '/career/login', 
  },
});

export const config = { matcher: ['/admin'] };  