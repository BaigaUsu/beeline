import { JWTPayload, SignJWT, jwtVerify } from "jose";

interface UserInfo {
  email: string;
  name: string;
}

// Создайте интерфейс для сессии, содержащей массив элементов информации
interface Session {
  user: any;
  userInfoList: UserInfo[];
  expires: Date;
}

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(session: Session): Promise<string> {
  const expirationTime = Math.floor(Date.now() / 1000) + 100; // 100 seconds from now
  const payload: JWTPayload = {
    userInfoList: session.userInfoList,
    expires: expirationTime
  };
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expirationTime)
    .sign(key);
}

export async function decrypt(input: string): Promise<Session> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload as unknown as Session;
}

export async function login(formData: FormData) {
  const email = formData.get("email");
  const name = formData.get("name") || "User";
  const user = { email, name };

  const expires = new Date(Date.now() + 100 * 1000); // 100 seconds from now
  const session = await encrypt({
      user, expires,
      userInfoList: []
  });

  // Save session to localStorage
  localStorage.setItem("session", session);
  console.log("Session stored in localStorage:", session);
}

export async function logout() {
  // Clear session from localStorage
  localStorage.removeItem("session");
  console.log("Session cleared from localStorage");
}

export async function getSession() {
  const session = localStorage.getItem("session");
  if (!session) {
    console.log("No session found in localStorage");
    return null;
  }
  const decryptedSession = await decrypt(session);
  console.log("Session found and decrypted:", decryptedSession);
  return decryptedSession;
}
