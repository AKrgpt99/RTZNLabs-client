import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import Page from "../../components/page";
import MetaMaskLogo from "../../assets/images/svg/metamask.svg";
import CoinbaseLogo from "../../assets/images/svg/coinbase.svg";
import BinanceLogo from "../../assets/images/svg/binance.svg";
import WalletConnectLogo from "../../assets/images/svg/walletconnect.svg";
import Illustration3 from "../../assets/images/png/illustration3.png";
import Illustration5 from "../../assets/images/png/illustration5.png";
import Illustration6 from "../../assets/images/png/illustration6.png";
import Slider from "../../components/slider";
import { authenticate } from "../../features/auth/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

const slides = [
  {
    src: Illustration6,
    title: "Launch NFTs from scratch",
    subtitle: "Our launchpad was made by NFT creators, for NFT creators.",
  },
  {
    src: Illustration5,
    title: "Plan and build your project",
    subtitle: "Add utility and rewards effortlessly, no code required.",
  },
  {
    src: Illustration3,
    title: "Collaborate with your team",
    subtitle: "Add team members to projects and work together.",
  },
];

function Login() {
  const classes = useStyles();
  const [slideIndex, setSlideIndex] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);
  const loading = useSelector((state) => state.auth.loading);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user) {
      let next = "/";

      if (location.search !== "") {
        next = location.search.split("next=")[1];
      }

      navigate(next);
    }
  }, [user]);

  const handleLogin = () => {
    dispatch(authenticate());
  };

  const handleSlider = (index) => {
    setSlideIndex(index);
  };

  return (
    <Page>
      {loading && (
        <div className={classes.loadingContainer}>
          <div className={classes.loadingSpinner}></div>
        </div>
      )}
      <div className={classes.loginWrapper}>
        <div className={classes.loginWrapperContainer}>
          <Slider
            slides={slides}
            slideIndex={slideIndex}
            onChange={handleSlider}
          />
        </div>
        <div className={classes.loginWrapperContainer}>
          <div className={classes.loginCard}>
            <h1 className={classes.loginTitle}>
              Please connect your wallet to continue
            </h1>
            <p className={classes.loginSubtitle}>
              We support the following wallets
            </p>
            <hr className={classes.hr} />
            <div className={classes.walletLogos}>
              <img src={MetaMaskLogo} alt="MetaMask supported" />
              <img src={WalletConnectLogo} alt="WalletConnect supported" />
              <img src={BinanceLogo} alt="Binance supported" />
              <img src={CoinbaseLogo} alt="Coinbase supported" />
            </div>
            <button
              onClick={handleLogin}
              className={clsx(classes.loginButton, "transition")}
            >
              Connect
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default Login;
