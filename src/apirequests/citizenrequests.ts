export const get_All_Citizens = async () => {
  const baseurl = "http://127.0.0.1:8000/api/citizens";
  const response = await fetch(`${baseurl}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
};
