import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      phone: string;
      role: string;
      token: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    phone: string;
    role: string;
    token: string;
  }
}