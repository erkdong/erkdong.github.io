export const sendPostRequest = async (
  url: string,
  body: { [key: string]: any }
): Promise<Response> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "An unknown error occurred");
  }

  return response;
};
