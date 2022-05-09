import axiosClient from "../../api";

export async function getUsers(filter) {
  // TODO
}

export async function getUserByAddress(address) {
  let user, error;

  try {
    user = await axiosClient.get(`/user/${address}`);
    if (!user) {
      throw "User not found.";
    }
  } catch (err) {
    console.log(err);
    error = err;
  }

  return { user, error };
}

export async function updateUser() {
  // TODO
}

export async function deleteUser() {
  // TODO
}
