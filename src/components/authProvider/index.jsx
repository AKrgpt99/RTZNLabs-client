import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { authenticate } from "../../features/auth/authSlice";
import { useWeb3 } from "../../web3";

function AuthProvider({ children }) {
  const web3 = useWeb3();
  const token = web3.getToken();
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(authenticate());
    }
  }, [token]);

  return children;
}

export default AuthProvider;
