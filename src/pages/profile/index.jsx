import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link, useLocation } from "react-router-dom";

import useStyles from "./styles";
import Page from "../../components/page";
import EtherIcon from "../../assets/icons/svg/ether.svg";
import Tooltip from "../../components/tooltip";
import PenIcon from "../../assets/icons/svg/pen.svg";
import AllProjects from "./allProjects";
import Contracts from "./contracts";
import Mints from "./mints";
import Marketplaces from "./marketplaces";
import CopyButton from "../../components/copyButton";
import Avatar from "../../components/avatar";
import ProfileHeader from "../../components/profileHeader";
import TabRoutes from "../../components/tabRoutes";
import ShareButton from "../../components/shareButton";

function Profile() {
  const classes = useStyles();
  const user = useSelector((state) => state.auth.currentUser);

  return (
    <Page>
      <div className={classes.profileContainer}>
        <div className={classes.bannerContainer}></div>
      </div>
      <div className={classes.userInfoContainer}>
        <div className={classes.imageContainer}>
          {user && (
            <Avatar
              src={user.image !== "" ? user.image : null}
              width={125}
              id="publicProfile"
              address={user.address}
            />
          )}
        </div>
        <div className={classes.usernameContainer}>
          {user ? (
            <h2>{`@${user.username === "" ? "Unknown" : user.username}`}</h2>
          ) : (
            <div className={classes.emptyUsername}>
              <div></div>
            </div>
          )}
        </div>
        <div className={classes.addressContainer}>
          {user && (
            <>
              <Tooltip text="Mainnet">
                <div className={classes.blockchainLogoContainer}>
                  <img src={EtherIcon} alt="Ethereum blockchain" />
                </div>
              </Tooltip>
              <CopyButton copyValue={user.address}>
                {user.address.substring(0, 5) +
                  "..." +
                  user.address.substring(user.address.length - 4)}
              </CopyButton>
            </>
          )}
        </div>
        <div className={classes.joinedContainer}>
          {user && <p>Joined {moment(user.createdAt).fromNow()}</p>}
        </div>
        <div>
          {user && (
            <p>
              <i>{user.bio === "" ? "No bio yet." : user.bio}</i>
            </p>
          )}
        </div>
      </div>
      <div className={classes.userActionsContainer}>
        {user && <ShareButton address={user.address} />}
        <Tooltip text="Edit">
          <Link to="/settings" className={classes.userActionButton}>
            <img src={PenIcon} alt="Edit profile" />
          </Link>
        </Tooltip>
      </div>
      <div className={classes.profileTabsContainer}>
        <ProfileHeader />
        <TabRoutes>
          <TabRoutes.Route query="" element={<AllProjects />} />
          <TabRoutes.Route query="contracts" element={<Contracts />} />
          <TabRoutes.Route query="mints" element={<Mints />} />
          <TabRoutes.Route query="marketplaces" element={<Marketplaces />} />
        </TabRoutes>
      </div>
    </Page>
  );
}

export default Profile;
