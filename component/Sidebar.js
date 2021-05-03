import styled from "styled-components";
import React, { useState } from "react";

//icon
import DehazeIcon from "@material-ui/icons/Dehaze";
import SearchBar from "material-ui-search-bar";
import { Input } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Button } from "@material-ui/core";
import { TreeView } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
//simplebar dependency
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
//css
import style from "../styles/sidebar.module.css";

function Sidebar() {
  const [show, setShow] = useState(false);
  const [recommendedvideos, setRecommendedVideos] = useState([]);
  const [id, setId] = useState("");
  const [channelTitle, setChannelTitle] = useState("");
  const [channelId, setChannelId] = useState("");
  const [title, setTitle] = useState("");
  const [thumbnailimg, setThumbnailimg] = useState("");
  const [publishedTime, setPublishTime] = useState("");
  const [views, setViews] = useState("");
  const [showSub, setShowSub] = useState(false);
  const [sliderItemdesk, setSliderItems] = useState(10);
  const [sliderItemdTab, setSliderItemsTab] = useState(2);
  const [sliderItemMo, setSliderItemsMo] = useState(1);

  const colourChanger = (e) => {};
  return (
    <div
      className={`col-2 h-100 p-0 ${style.sidebarcontainer}`}
      style={{
        maxHeight: "100%",
      }}
    >
      <SimpleBar
        className="col-2 h-100 w-100 p-0"
        style={{
          left: 0,
          right: 0,
          position: "fixed",
          display: "flex",
          width: 100,
          zIndex: 500,
          padding: "0px",
        }}
      >
        <Side className={`w-100 ${style.side1}`}>
          <div
            className=" w-100  border-0 btn btn-outline-light"
            style={{ textAlign: "left" }}
            onClick={colourChanger}
          >
            <div className="text-dark border-0 w-100 ">
              <span className="ml-2 ">
                <HomeIcon></HomeIcon>
              </span>
              <span className="ml-3">Home</span>
            </div>
          </div>

          <div
            className=" w-100   btn btn-outline-light"
            style={{ textAlign: "left" }}
          >
            <div className="text-dark w-100 ">
              <span className="ml-2 ">
                <WhatshotIcon></WhatshotIcon>
              </span>
              <span className="ml-3">Trendings</span>
            </div>
          </div>

          <div
            className=" w-100  btn btn-outline-light"
            style={{ textAlign: "left" }}
          >
            <div className="text-dark w-100 ">
              <span className="ml-2 ">
                <SubscriptionsIcon></SubscriptionsIcon>
              </span>
              <span className="ml-3">Subscription</span>
            </div>
          </div>

          <hr></hr>

          <div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <VideoLibraryIcon></VideoLibraryIcon>
                </span>
                <span className="ml-3">Library</span>
              </div>
            </div>

            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <HistoryIcon></HistoryIcon>
                </span>
                <span className="ml-3">History</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <OndemandVideoIcon></OndemandVideoIcon>
                </span>
                <span className="ml-3">Videos</span>
              </div>
            </div>
            <div>
              <div
                className=" w-100  btn btn-outline-light"
                style={{ textAlign: "left" }}
              >
                <div className="text-dark w-100 ">
                  <span className="ml-2 ">
                    <WatchLaterIcon></WatchLaterIcon>
                  </span>
                  <span className="ml-3">watch later</span>
                </div>
              </div>

              <div
                className=" w-100  btn btn-outline-light"
                style={{ textAlign: "left" }}
              >
                <div className="text-dark w-100 ">
                  <span className="ml-2 ">
                    <ThumbUpAltIcon></ThumbUpAltIcon>
                  </span>
                  <span className="ml-3">liked</span>
                </div>
              </div>

              {/*<Button onClick={() => setShow(!show)} style={{ width: "100%" }}>
                {show ? (
                  <ExpandLessIcon></ExpandLessIcon>
                ) : (
                  <ExpandMoreIcon></ExpandMoreIcon>
                )}
                <span>Show more</span>
              </Button>*/}

              {!show && (
                <div
                  className=" w-100  btn btn-outline-light"
                  style={{ textAlign: "left" }}
                >
                  <div
                    className="text-dark w-100 "
                    onClick={() => setShow(!show)}
                    style={{ width: "100%" }}
                  >
                    <span>
                      {show ? (
                        <ExpandLessIcon></ExpandLessIcon>
                      ) : (
                        <ExpandMoreIcon></ExpandMoreIcon>
                      )}
                    </span>
                    <span className="ml-3">Show more</span>
                  </div>
                </div>
              )}

              {show && (
                <div>
                  <Button style={{ width: "100%" }}>Library</Button>
                  <Button style={{ width: "100%" }}>History</Button>
                  <Button style={{ width: "100%" }}>Your videos</Button>
                  <Button style={{ width: "100%" }}>watch later</Button>
                  <Button style={{ width: "100%" }}>liked videos</Button>
                </div>
              )}
            </div>

            {show && (
              <div
                onClick={() => setShow(!show)}
                className=" w-100  btn btn-outline-light"
                style={{ textAlign: "left" }}
              >
                <div
                  className="text-dark w-100 "
                  onClick={() => setShow(!show)}
                  style={{ width: "100%" }}
                >
                  <span>
                    {show ? (
                      <ExpandLessIcon></ExpandLessIcon>
                    ) : (
                      <ExpandLessIcon></ExpandLessIcon>
                    )}
                  </span>
                  <span className="ml-3">Show more</span>
                </div>
              </div>
            )}
            <hr></hr>
            <div>
              <div
                className=" w-100  btn btn-outline-light"
                style={{ textAlign: "left" }}
              >
                <div className="text-dark w-100 ">
                  <span className="ml-2 ">
                    <AccountCircleIcon></AccountCircleIcon>
                  </span>
                  <span className="ml-3">watch later</span>
                </div>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">watch later</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">watch later</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">watch later</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">watch later</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">watch later</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">watch later</span>
              </div>
            </div>
          </div>

          <div
            onClick={() => setShowSub(!show)}
            className=" w-100  btn btn-outline-light"
            style={{ textAlign: "left" }}
          >
            {!showSub && (
              <div
                className="text-dark w-100 "
                onClick={() => setShowSub(!show)}
                style={{ width: "100%" }}
              >
                <span>
                  <ExpandMoreIcon></ExpandMoreIcon>
                </span>
                <span className="ml-3">Show more</span>
              </div>
            )}
          </div>

          {showSub && (
            <>
              <div
                className=" w-100  btn btn-outline-light"
                style={{ textAlign: "left" }}
              >
                <div className="text-dark w-100 ">
                  <span className="ml-2 ">
                    <AccountCircleIcon></AccountCircleIcon>
                  </span>
                  <span className="ml-3">watch later</span>
                </div>
              </div>
              <div
                className=" w-100  btn btn-outline-light"
                style={{ textAlign: "left" }}
              >
                <div className="text-dark w-100 ">
                  <span className="ml-2 ">
                    <AccountCircleIcon></AccountCircleIcon>
                  </span>
                  <span className="ml-3">watch later</span>
                </div>
              </div>
              <div
                className=" w-100  btn btn-outline-light"
                style={{ textAlign: "left" }}
              >
                <div className="text-dark w-100 ">
                  <span className="ml-2 ">
                    <AccountCircleIcon></AccountCircleIcon>
                  </span>
                  <span className="ml-3">watch later</span>
                </div>
              </div>
              <div
                className=" w-100  btn btn-outline-light"
                style={{ textAlign: "left" }}
              >
                <div className="text-dark w-100 ">
                  <span className="ml-2 ">
                    <AccountCircleIcon></AccountCircleIcon>
                  </span>
                  <span className="ml-3">watch later</span>
                </div>
              </div>
              <div
                className=" w-100  btn btn-outline-light"
                style={{ textAlign: "left" }}
              >
                <div className="text-dark w-100 ">
                  <span className="ml-2 ">
                    <AccountCircleIcon></AccountCircleIcon>
                  </span>
                  <span className="ml-3">watch later</span>
                </div>
              </div>
              <div
                className=" w-100  btn btn-outline-light"
                style={{ textAlign: "left" }}
              >
                <div className="text-dark w-100 ">
                  <span className="ml-2 ">
                    <AccountCircleIcon></AccountCircleIcon>
                  </span>
                  <span className="ml-3">watch later</span>
                </div>
              </div>
              {showSub && (
                <div
                  onClick={() => setShowSub(show)}
                  className=" w-100  btn btn-outline-light"
                  style={{ textAlign: "left" }}
                >
                  <div
                    className="text-dark w-100 "
                    onClick={() => setShowSub(!show)}
                    style={{ width: "100%" }}
                  >
                    <span>
                      <ExpandMoreIcon></ExpandMoreIcon>
                    </span>
                    <span className="ml-3">Show less</span>
                  </div>
                </div>
              )}
            </>
          )}
          <hr />
          <div>
            <div>
              <p className="ml-2">
                <b>MORE FROM YOUTUBE</b>
              </p>
            </div>

            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">Youtube Premium</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">Gaming</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">Live</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">Sports</span>
              </div>
            </div>

            <hr />
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">Settings</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">Report History</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">Help</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">send feedback</span>
              </div>
            </div>
            <div
              className=" w-100  btn btn-outline-light"
              style={{ textAlign: "left" }}
            >
              <div className="text-dark w-100 ">
                <span className="ml-2 ">
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
                <span className="ml-3">watch later</span>
              </div>
            </div>
          </div>
          <hr />
          <div
            className="w-100"
            style={{ overflowWrap: "break-word", fontSize: "14px" }}
          >
            <div className="w-60 p-1 ">
              <span className="m-1">About</span>
              <span className="m-1">Press</span>
              <span className="m-1">Copyright</span>
              <span className="m-1">Contact us</span>
              <span className="m-1">creators</span>
              <span className="m-1">Advertise</span>
              <span className="m-1">Developers</span>
              <br></br>
              <span className="m-1">Terms</span>
              <span className="m-1">Privacy</span>
              <span className="m-1">Policy Safety</span>
              <span className="m-1">How Youtube works</span>
              <span className="m-1">Test new Features</span>
            </div>
          </div>
        </Side>
        <div className={`w-100 ${style.side2}`}>
          <div className="row ">
            {/*home*/}
            <div className="col-12 m-2 text-center ">
              <div className="btn text-dark btn-outline-light">
                <div className="">
                  <HomeIcon></HomeIcon>
                </div>

                <div className="ml-auto mr-auto" style={{ fontSize: "0.5rem" }}>
                  Home
                </div>
              </div>
            </div>
            {/*Trending*/}
            <div className="col-12  m-2 text-center">
              <div className="text-dark btn btn-outline-light">
                <div className="">
                  <HomeIcon></HomeIcon>
                </div>

                <div className="ml-auto mr-auto" style={{ fontSize: "0.5rem" }}>
                  Trending
                </div>
              </div>
            </div>
            {/*subcription*/}
            <div className="col-12  m-2 text-center">
              <div className="text-dark btn btn-outline-light">
                <div className="">
                  <HomeIcon></HomeIcon>
                </div>

                <div className="ml-auto mr-auto" style={{ fontSize: "0.5rem" }}>
                  Subcription
                </div>
              </div>
            </div>
            {/*library*/}
            <div className="col-12  m-2 btn btn-outline text-center">
              <div className="text-dark btn btn-outline-light">
                <div className="">
                  <HomeIcon></HomeIcon>
                </div>

                <div className="ml-auto mr-auto" style={{ fontSize: "0.5rem" }}>
                  Library
                </div>
              </div>
            </div>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
}

export default Sidebar;

const Side = styled.div`
  box-sizing: border-box;
  overflow-y: hidden;
  font-size: 0.5rem;
`;
