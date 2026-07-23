"use server";

type actionPayloadType = {
  success: true;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (
  prevState: actionPayloadType,
  formData: FormData,
) => {
  const email = formData.get("email");
  const password = formData.get("password");
  console.log(prevState, "prevstate");

  const payload = {
    email,
    password,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await res.json();
  return result;
};
