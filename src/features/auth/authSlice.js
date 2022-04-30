import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import { sequence } from "0xsequence";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Web3Modal from "web3modal";

import { getUser } from "./authApi";

const initialState = {
  currentUser: null,
};

const providerOptions = {
  sequence: {
    package: sequence,
    options: {
      appName: "RTZN Labs",
      defaultNetwork: "mainnet",
    },
  },
  binancechainwallet: {
    package: true,
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "RTZN Labs",
      infuraId: "8c415f1bb9e8442e8e69ead8621dfed8",
    },
  },
};

const web3Modal = new Web3Modal({
  network: "mainnet",
  cacheProvider: false,
  providerOptions,
});

export const fetchUser = createAsyncThunk(
  "auth/fetchUser",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const instance = await web3Modal.connect();

      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();

      const user = getUser(signer);

      return fulfillWithValue(user);
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
