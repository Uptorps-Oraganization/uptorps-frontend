export const apiStatusCheck = async () => {
  const baseurl = "http://127.0.0.1:8000/api";
  const response = await fetch(`${baseurl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
