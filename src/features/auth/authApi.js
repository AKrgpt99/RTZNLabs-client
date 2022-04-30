import Web3Token from "web3-token";

import axiosClient from "../../api";

export async function getUser(signer) {
  const token = await Web3Token.sign(
    async (msg) => await signer.signMessage(msg),
    "1m"
  );

  return await axiosClient.get(`/auth/user`, {
    headers: { Authorization: token },
  });
}
