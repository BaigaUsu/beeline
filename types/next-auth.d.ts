import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      phone: string;
      token: string;
      name?: string; // Add this line
      role?: string; 
    };
  }

  interface User {
    id: string;
    phone: string;
    token: string;
    name?: string; // Add this line
    role?: string; 
  }
}
