import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
//styled component
import styled from 'styled-components';
//material ui
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import SaveIcon from '@material-ui/icons/Save';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import SortIcon from '@material-ui/icons/Sort';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Content from '../component/Content';
import { withRouter } from 'next/router';
import Videoplayer from '../component/videoPlayer';
import { Wave } from 'react-animated-text';
import Link from 'next/link';
//css
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import style from '../styles/video.module.css';

export const getServerSideProps = async (context) => {
  //const router = withRouter();

  console.log(context.params.video);

  //console.log(videoObj);
  //setVideo(video);

  const data = await fetch(
    'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=AIzaSyBTNcaANw-9ZKtuY50y3Fm2lrrYPKDfTGg'
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
    <>
      {/*
        <div className={`mobile-version   ${style.mobileVersion}`}>
        <div className={`${style.message}`}>
          <Wave
            text='Mobile Version Not Available'
            effect='stretch'
            effectChange='2'
          />

          <Link href='/'>
            <button
              id='home-btn'
              style={{
                backgroundColor: 'white',
                color: 'red',
                outline: 'none',
                border: 'none',
                borderRadius: '15px',
                padding: '1%',
                width: '40%',
              }}
            >
              Visit Home
            </button>
          </Link>
        </div>
      </div>*/}

      <div className={`${style.main}`}>
        <SimpleBar style={{ maxHeight: '100vh' }}>
          <Header></Header>

          <div
            className='container-fluid  bg-light h-100  video-container'
            style={{ height: '2000px' }}
          >
            <Videoplayer video={videoObj}></Videoplayer>
          </div>
        </SimpleBar>
      </div>
    </>
  );
}

export default Video;
