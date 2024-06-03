import LOGIN_API_URL from '@/app/api/auth/[...nextauth]/loginApi';
import type { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        phone: { label: 'Телефон', type: 'tel', required: true },
        password: { label: 'Пароль', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.phone || !credentials.password) return null;

        try {
          const response = await fetch(LOGIN_API_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: credentials.phone,
              password: credentials.password,
            }),
          });

          if (!response.ok) {
            throw new Error('Invalid credentials');
          }

          const data = await response.json();

          if (data.key) {
            const user = {
              id: data.user_id,
              phone: credentials.phone,
              role: data.role,
              token: data.key,
            };
            return user;
          }

          return null;
        } catch (error) {
          console.error('Error during authentication:', error);
          return null;
        }
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
      if (token.token) {
        session.user.token = token.token as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
        token.token = (user as any).token;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authConfig;
