import React, { useState, useEffect } from "react";
import Header from "../component/Header";
//styled component
import styled from "styled-components";
//material ui
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ScreenShareIcon from "@material-ui/icons/ScreenShare";
import SaveIcon from "@material-ui/icons/Save";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import SortIcon from "@material-ui/icons/Sort";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Content from "../component/Content";
import { withRouter } from "next/router";
import Videoplayer from "../component/videoPlayer";
//css
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

export const getServerSideProps = async (context) => {
  //const router = withRouter();

  console.log(context.params.video);

  //console.log(videoObj);
  //setVideo(video);

  const data = await fetch(
    "https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=AIzaSyBTNcaANw-9ZKtuY50y3Fm2lrrYPKDfTGg"
  );
  const res = await data.json();
  const arrayVideo = await res.items;
  const getvideo = arrayVideo.filter(
    (eachVideo) => eachVideo.id === context.params.video
  );
  const video = getvideo[0];
  return {
    props: {
      video,
    },
  };
};

function Video(props) {
  const video = props.video;
  const title = video.snippet.title;
  const views = video.statistics.viewCount;
  const like = video.statistics.likeCount;
  const dislike = video.statistics.dislikeCount;
  const description = video.snippet.description;
  const date = video.snippet.publishedAt;
  const videoObj = { title, views, like, dislike, description, date };
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <Header></Header>
      <div
        className="container-fluid  bg-light h-100 p-5"
        style={{ height: "2000px" }}
      >
        <Videoplayer video={videoObj}></Videoplayer>
      </div>
    </SimpleBar>
  );
}

export default Video;
