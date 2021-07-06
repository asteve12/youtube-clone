import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DehazeIcon from '@material-ui/icons/Dehaze';
import SearchBar from 'material-ui-search-bar';
import { Input } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Button } from '@material-ui/core';
import { TreeView } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useRouter } from 'next/router';
import date from 'date-and-time';
//simple  bar
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import Head from 'next/head';
//component
import Header from '../component/Header';
import Content from '../component/Content';
import Sidebar from '../component/Sidebar';
import Link from 'next/link';

const useStyle = makeStyles({
  root: {
    textAlign: 'left',
    padding: '0px',
    margin: '0px',
  },
});

const PageContent = ({
  title,
  thumbnail,
  views,
  publish,
  channelTitle,
  id,
}) => {
  let createdDate = new Date(`${publish}`);
  console.log(createdDate);
  const router = useRouter();
  const handlePage = () => {
    //router.push(`/${id}`);
  };
  return (
    <div className='col-3 area bg-danger ' data-simplebar>
      <div className='row '>
        <div style={{ height: '140px', width: '250px', cursor: 'pointer' }}>
          <img
            onClick={handlePage}
            className='w-100 h-100'
            style={{ objectFit: 'cover' }}
            src={thumbnail.url}
          ></img>
        </div>
      </div>
      <div className='row'>
        <div className='col-2 text-center'>
          <AccountCircleIcon></AccountCircleIcon>
        </div>

        <div className='col-10' style={{ fontSize: '15px' }}>
          {title}
        </div>
      </div>
      <div className='row'>
        <div className='col-12 text-center' style={{ fontSize: '12px' }}>
          <div>{channelTitle}</div>
          <p>
            {views} views. <span>3 days ago</span>
          </p>

          {/*    <span>{createdDate}</span>*/}
        </div>
      </div>
    </div>
  );
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <div
      style={{
        textAlign: 'center',
        position: 'absolute',
        right: '0px',
        backgroundColor: 'white',
        bordertoprightradius: '5px',
        borderbottomrightradius: '5px',
        padding: '30px',
        paddingLeft: '15px',
        paddingRight: '15px',
      }}
      onClick={() => onClick()}
    >
      <ArrowForwardIosIcon></ArrowForwardIosIcon>
    </div>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <div
      onClick={() => onClick()}
      style={{
        textAlign: 'center',
        position: 'absolute',
        left: '0px',
        backgroundColor: 'white',
        bordertoprightradius: '5px',
        borderbottomrightradius: '5px',
        padding: '30px',
        paddingLeft: '15px',
        //paddingRight: "15px",
        margin: '0px',
      }}
    >
      <ArrowBackIosIcon></ArrowBackIosIcon>
    </div>
  );
};

export default function Home(props) {
  const [recommendedvideos, setRecommendedVideos] = useState([]);
  const [id, setId] = useState('');
  const [channelTitle, setChannelTitle] = useState('');
  const [channelId, setChannelId] = useState('');
  const [title, setTitle] = useState('');
  const [thumbnailimg, setThumbnailimg] = useState('');
  const [publishedTime, setPublishTime] = useState('');
  const [views, setViews] = useState('');
  const [sliderItemdesk, setSliderItems] = useState(10);
  const [sliderItemdTab, setSliderItemsTab] = useState(2);
  const [sliderItemMo, setSliderItemsMo] = useState(1);

  useEffect(() => {
    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=AIzaSyBTNcaANw-9ZKtuY50y3Fm2lrrYPKDfTGg'
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setRecommendedVideos(res.items);
        console.log(res);
      });
  }, []);
  const className = useStyle();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: props.sliderItemdesk,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 10,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 10,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <div className='container-fluid m-0 p-0' style={{ overflowX: 'hidden' }}>
        <SimpleBar
          forceVisible='y'
          style={{ maxHeight: '100vh', overflowX: 'hidden', width: '100%' }}
        >
          <Header></Header>
          <div className='row h-100= ' style={{ height: '100%' }}>
            <Sidebar></Sidebar>
            <Content sliderItemdesk={sliderItemdesk}></Content>
          </div>
        </SimpleBar>
      </div>
    </>
  );
}

const Container = styled.div`
  height: 90vh;
`;
