import type { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const LOGIN_API_URL = 'https://eea93a50e6dc5aed989901546f5b9742.serveo.net/api/v1/auth/login/';

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

          console.log('Login API response:', data);

          if (data.key) {
            return {
              id: data.user_id,
              phone: credentials.phone,
              role: data.role,
              token: data.key,
            };
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
      console.log('Session callback:', { session, token });
      if (token.role) {
        session.user.role = token.role;
        session.user.token = token.token;
      }
      return session;
    },
    async jwt({ token, user }) {
      console.log('JWT callback:', { token, user });
      if (user) {
        token.role = user.role;
        token.token = user.token;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authConfig;