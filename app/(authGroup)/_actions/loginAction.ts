"use server";

import { cookies } from "next/headers";

type actionPayloadType = {
  success: boolean;
  statusCode: number;
  message: string;
  data?: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (
  prevState: actionPayloadType | undefined,
  formData: FormData,
): Promise<actionPayloadType> => {
  const email = formData.get("email");
  const password = formData.get("password");

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const result = await res.json();

  if (!result.success) {
    return result;
  }

  const cookieStore = await cookies();
  cookieStore.set("accessToken", result.data.accessToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
  });
  cookieStore.set("refreshToken", result.data.refreshToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  });

  return result;
};
