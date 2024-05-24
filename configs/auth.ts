import type { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { users } from '../data/users';

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) return null;

        const currentUser = users.find(user => user.email === credentials.email);

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;
          return { ...userWithoutPass, role: currentUser.role };
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/career/login',
  },
  callbacks: {
    async session({ session, token }) {
      if (token.role) {
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};