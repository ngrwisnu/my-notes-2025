/* eslint-disable @typescript-eslint/no-explicit-any */
interface CallAPIRequest {
  url: string;
  method?: string;
  body?: any;
  token?: string | null;
}

const callAPI = async ({
  url,
  method = "GET",
  body,
  token,
}: CallAPIRequest) => {
  const headers: Record<string, any> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return { isError: true, data: null };
  }

  const responseJson = await response.json();

  return { isError: false, data: responseJson.data };
};

export default callAPI;
