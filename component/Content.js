import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//import Carousel from "react-multi-carousel";
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import 'react-multi-carousel/lib/styles.css';
//icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

//css
import style from '../styles/content.module.css';

//shimmer
import Shimmer from 'react-shimmer-effect';
import injectSheet from 'react-jss';

//const Shimmer = dynamic(() => import("react-shimmer-effect"));
//const injectSheet = dynamic(() => import("react-jss").then((mod)=> mod.injectSheet));
//console.log("injected3", injectSheet);

const StyleSheet = {
  container: {
    border: '0px solid rgba(255, 255, 255, 1)',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, .1)',
    borderRadius: '4px',
    backgroundColor: 'white',
    display: 'flex',
    padding: '16px',
    // width: "250px",
  },
  circle: {
    height: '56px',
    width: '56px',
    borderRadius: '50%',
  },
  line: {
    width: '96px',
    height: '8px',
    alignSelf: 'center',
    marginLeft: '16px',
    borderRadius: '8px',
  },
  square: {
    width: '300px',
    height: '100px',
    backgroundColor: 'grey',
  },
};

const Carousel = dynamic(() => import('react-multi-carousel'), {
  ssr: true,
});

const useStyle = makeStyles({
  root: {
    textAlign: 'left',
    padding: '0px',
    margin: '0px',
  },
});

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
        cursor: 'pointer',
      }}
    >
      <ArrowBackIosIcon></ArrowBackIosIcon>
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
        cursor: 'pointer',
      }}
      onClick={() => onClick()}
    >
      <ArrowForwardIosIcon></ArrowForwardIosIcon>
    </div>
  );
};

const PageContent = (props) => {
  let createdDate = new Date(`${props.publish}`);
  console.log(createdDate);
  const router = useRouter();
  const handlePage = () => {
    router.push(`/${props.id}`);
  };
  console.log('search', props.searchPage);
  /*!loading ? (
        <div className={`${classes.container} row`}>
          <div className="col-12">
            <div className="row">
              <Shimmer>
                <div className={`${classes.square} w-100`}></div>
                <span className={classes.circle} />

                <div className={`${classes.line}`} style={{ height: "5px" }} />
              </Shimmer>
            </div>
          </div>
        </div>
      ) : */
  return (
    <>
      {props.loading ? (
        <div
          className={
            props.videoPage || props.searchPage ? 'col-12' : `col-lg-3 col-md-4`
          }
        >
          <div className='row '>
            <div className='col-12 m-1'>
              <div className={`${props.classes.container} w-100 `}>
                <div className='col-12 w-100 '>
                  <div className='row'>
                    <Shimmer>
                      <div className={`${props.classes.square} w-100`}></div>
                      <span className={props.classes.circle} />

                      <div
                        className={`${props.classes.line}`}
                        style={{ height: '5px' }}
                      />
                    </Shimmer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {props.searchPage ? (
            <div className='col-12'>
              <div className='row'>
                <div className='col-4'>
                  <div
                    className='w-100 m-1'
                    style={{ height: '140px', cursor: 'pointer' }}
                  >
                    <img
                      onClick={handlePage}
                      className='w-100 h-100'
                      style={{ objectFit: 'cover' }}
                      src={props.thumbnail.url}
                    ></img>
                  </div>
                </div>
                <div className='col-8'>
                  <div className='row justify-content-center m-1 '>
                    <div className='col-10 ' style={{ fontSize: '15px' }}>
                      {props.title}
                    </div>
                  </div>
                  <div className='row'>
                    <div
                      className='col-12 text-center'
                      style={{ fontSize: '12px' }}
                    >
                      <span>
                        <AccountCircleIcon></AccountCircleIcon>
                      </span>

                      <div>{props.channelTitle}</div>
                      <p>
                        {props.views} views. <span>3 days ago</span>
                      </p>

                      {/*    <span>{createdDate}</span>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={
                props.videoPage || props.searchPage
                  ? 'col-lg-12'
                  : 'col-lg-4 col-md-5 col-sm-6 col-xs-12 col-xl-3  '
              }
            >
              <div className='row  '>
                <div
                  className='w-100 m-1'
                  style={{ height: '140px', cursor: 'pointer' }}
                >
                  <img
                    onClick={handlePage}
                    className='w-100 h-100'
                    style={{ objectFit: 'cover' }}
                    src={props.thumbnail.url}
                  ></img>
                </div>
              </div>
              <div className='row justify-content-center m-1 '>
                <div className='col-2 text-center'>
                  <AccountCircleIcon></AccountCircleIcon>
                </div>

                <div className='col-10 ' style={{ fontSize: '15px' }}>
                  {props.title}
                </div>
              </div>
              <div className='row'>
                <div
                  className='col-12 text-center'
                  style={{ fontSize: '12px' }}
                >
                  <div>{props.channelTitle}</div>
                  <p>
                    {props.views} views. <span>3 days ago</span>
                  </p>

                  {/*    <span>{createdDate}</span>*/}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

function Content(props) {
  const [recommendedvideos, setRecommendedVideos] = useState([
    1, 2, 2, 3, 4, 4, 2, 3, 4, 4,
  ]);
  const [windowWidth, setWindowWidth] = useState(null);
  const [loading, setLoading] = useState(true);

  const { classes } = props;

  console.log('shimmer', StyleSheet.circle);

  useEffect(() => {
    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=AIzaSyBTNcaANw-9ZKtuY50y3Fm2lrrYPKDfTGg'
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setRecommendedVideos(res.items);
        setLoading(false);
        console.log(res);
      });

    //alert(window.innerWidth);
    setWindowWidth(window.innerWidth);
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
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const checkCodeEnv = () => {
    if (typeof window != 'undefined') {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {
        <>
          <Container
            className={
              props.videoPage
                ? `col-12 h-100 w-100 m-0 `
                : `col-10 h-100 w-100 m-0 ${style.cont1}`
            }
          >
            <hr></hr>
            <br></br>
            <Carousel
              responsive={responsive}
              customRightArrow={<CustomRightArrow></CustomRightArrow>}
              customLeftArrow={<CustomLeftArrow></CustomLeftArrow>}
            >
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
            </Carousel>
            <br></br>
            <hr></hr>

            <div className='row justify-content-center m-1'>
              {loading
                ? recommendedvideos.map((eachVideo) => {
                    return (
                      <PageContent
                        loading={loading}
                        classes={classes}
                        videoPage={props.videoPage}
                        searchPage={props.searchPage}
                      ></PageContent>
                    );
                  })
                : recommendedvideos.map((eachVideos) => {
                    const { id } = eachVideos;
                    const {
                      channelId,
                      channelTitle,
                      description,
                      publishedAt,
                    } = eachVideos.snippet;
                    const { title, desc } = eachVideos.snippet.localized;
                    const { high } = eachVideos.snippet.thumbnails;
                    const { viewCount } = eachVideos.statistics;

                    return (
                      <PageContent
                        title={title}
                        thumbnail={high}
                        views={viewCount}
                        publish={publishedAt}
                        channelTitle={channelTitle}
                        videoPage={props.videoPage}
                        searchPage={props.searchPage}
                        id={id}
                        loading={loading}
                        classes={classes}
                      ></PageContent>
                    );
                  })}
            </div>
          </Container>
          <Container className={`col-12  h-100 w-100 m-0 ${style.cont2}`}>
            <hr></hr>
            <br></br>
            <Carousel
              responsive={responsive}
              customRightArrow={<CustomRightArrow></CustomRightArrow>}
              customLeftArrow={<CustomLeftArrow></CustomLeftArrow>}
            >
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
              <button
                type='button'
                className='btn  btn-outline-dark'
                style={{ borderRadius: '70px' }}
              >
                Dark
              </button>
            </Carousel>
            <br></br>
            <hr></hr>

            <div className='row justify-content-center m-1'>
              {loading
                ? recommendedvideos.map((eachVideo) => {
                    return (
                      <PageContent
                        loading={loading}
                        classes={classes}
                      ></PageContent>
                    );
                  })
                : recommendedvideos.map((eachVideos) => {
                    const { id } = eachVideos;
                    const {
                      channelId,
                      channelTitle,
                      description,
                      publishedAt,
                    } = eachVideos.snippet;
                    const { title, desc } = eachVideos.snippet.localized;
                    const { high } = eachVideos.snippet.thumbnails;
                    const { viewCount } = eachVideos.statistics;

                    return (
                      <PageContent
                        title={title}
                        thumbnail={high}
                        views={viewCount}
                        publish={publishedAt}
                        channelTitle={channelTitle}
                        videoPage={props.videoPage}
                        searchPage={props.searchPage}
                        id={id}
                        loading={loading}
                        classes={classes}
                      ></PageContent>
                    );
                  })}
            </div>
          </Container>
        </>
      }
    </>
  );
}

//export default Content;
export default injectSheet(StyleSheet)(Content);

const Container = styled.div`
  overflow-y: scroll;
  box-sizing: border-box;
  overflow: hidden;
`;
