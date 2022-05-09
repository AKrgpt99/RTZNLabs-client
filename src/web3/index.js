import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import Web3Modal from "web3modal";
import WalletConnect from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import Web3Token from "web3-token";
import web3TokenConfig from "./web3-token.config";

const providerOptions = {
  binancechainwallet: {
    package: true,
  },
  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "RTZN Labs",
      infuraId: process.env.INFURA_ID,
    },
  },
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: process.env.INFURA_ID,
    },
  },
};

const web3Modal = new Web3Modal({
  providerOptions,
  cacheProvider: true,
});

class Web3 {
  constructor() {
    if (Web3._instance) {
      return Web3._instance;
    }

    Web3._instance = this;

    this._provider = null;
    this._token = localStorage.getItem("token");
  }

  static instance() {
    if (!Web3._instance) {
      return new Web3();
    }

    return Web3._instance;
  }

  getProvider() {
    return this._provider;
  }

  async setProvider() {
    const providerInstance = await web3Modal.connect();
    this._provider = new ethers.providers.Web3Provider(providerInstance);
  }

  getToken() {
    return this._token;
  }

  async setToken() {
    if (!this._provider) {
      throw "Please set a provider.";
    }

    const signer = this._provider.getSigner();
    const token = await Web3Token.sign(
      async (msg) => await signer.signMessage(msg),
      {
        expires_in: web3TokenConfig.expires_in,
        domain: web3TokenConfig.domain,
        statement: web3TokenConfig.statement,
      }
    );

    this._token = token;
    localStorage.setItem("token", token);
  }

  reset() {
    this._provider = null;
    this._token = null;
    localStorage.removeItem("token");
  }

  disconnect() {
    this._token = null;
    localStorage.removeItem("token");
    web3Modal.clearCachedProvider();
  }
}

Web3._instance = null;

export function useWeb3() {
  return Web3.instance();
}
