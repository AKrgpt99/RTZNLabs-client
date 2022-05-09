import axiosClient from "../../api";

export async function auth({ token }) {
  let user, error;

  try {
    if (!token) {
      throw "Invalid token.";
    }

    user = await axiosClient.get(`/auth`, {
      headers: { Authorization: token },
    });
  } catch (err) {
    console.log(err);
    error = err;
  }

  return { user, error };
}
