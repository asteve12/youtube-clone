import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import DehazeIcon from "@material-ui/icons/Dehaze";
import YouTubeIcon from "@material-ui/icons/YouTube";
//import SearchBar from "material-ui-search-bar";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useRouter } from "next/router";
import style from "../styles/header.module.css";

import dynamic from "next/dynamic";

const SearchBar = dynamic(() => import("material-ui-search-bar"), {
  ssr: false,
});

function Header() {
  const router = useRouter();
  const navSearchPage = () => {
    router.push("/search");
  };
  return (
    <Heading
      className=" header-style  row align-items-center pt-1 justify-content-center bg-white m-0"
      style={{
        position: "sticky",
        top: 0,

        zIndex: 1000,
        boxSizing: "border-box",
        padding: "0px",
        margin: "0px",
      }}
    >
      <div className="col-md-3  col-lg-2 col-sm-6 mr-auto">
        <div className="row align-items-center justify-content-center">
          <IconButton>
            <DehazeIcon></DehazeIcon>
          </IconButton>

          <YouTubeIcon style={{ color: "red" }}></YouTubeIcon>
          <h5>
            Youtube
            <sup style={{ fontSize: "10px" }}>NG</sup>
          </h5>
        </div>
      </div>
      <div className={`col-lg-8 ${style.search_box} col-md-5 col-sm-12 `}>
        <div className="row align-items-center justify-content-center">
          <div className={`${style.search} col-8`}>
            <SearchBar
              style={{
                width: "100%",
              }}
              onRequestSearch={navSearchPage}
            ></SearchBar>
          </div>

          <IconButton>
            <MicIcon></MicIcon>
          </IconButton>
        </div>
      </div>
      <div className=" col-md-3 col-lg-2 col-sm-6  ml-auto ">
        <div className="row align-items-center justify-content-center">
          <div className="ml-auto">
            <IconButton>
              <VideoCallIcon></VideoCallIcon>
            </IconButton>
          </div>
          <div className="ml-auto">
            <IconButton>
              <NotificationsIcon></NotificationsIcon>
            </IconButton>
          </div>
          <div className="ml-auto">
            <IconButton>
              <AccountCircleIcon></AccountCircleIcon>
            </IconButton>
          </div>
        </div>
      </div>
    </Heading>
  );
}

export default Header;

const Heading = styled.div`
  background-color: white;
`;
