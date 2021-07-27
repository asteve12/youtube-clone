import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import SaveIcon from '@material-ui/icons/Save';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import SortIcon from '@material-ui/icons/Sort';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Content from '../component/Content';
import style from '../styles/recommended.module.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    backgroundColor: 'yellow',
    display: 'block',
    width: '100',
  },
}));

const Videoplayer = (props) => {
  const classes = useStyles();
  const [sliderItemdesk, setSliderItems] = useState(4);
  const [sliderItemdTab, setSliderItemsTab] = useState(2);
  const [sliderItemMo, setSliderItemsMo] = useState(1);
  const [isVideoPage, setIsVideoPage] = useState(true);
  const [visible, setVisible] = useState(false);
  const [video, setVideo] = useState(props.video);

  const handleBtnVisibility = (e) => {
    setVisible(true);
  };
  return (
    <div className='row '>
      <div className={`col-7   ${style.cont1}`}>
        {/*video section*/}
        <div className='video-container'>
          <Videocontainer>
            <video width='100%' height='100%' autoPlay muted controls>
              <source
                src='https://www.w3schools.com/html/mov_bbb.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </Videocontainer>
          {/*end of video section*/}
          <div className='col-12 video-sub-section '>
            {/*title*/}
            <div className='row '>
              <div className='col-12'>
                <h7>{video.title}</h7>
              </div>
            </div>
            {/*views */}
            <div className='title-container-2  row '>
              <div className='col-5   '>
                <div classNapme='col-12  '>{video.views}.3 days ago</div>
              </div>
              {/*like btn*/}
              <div className=' col-7   ml-auto'>
                <div className='text-right '>
                  <span className='ml-3 mr-0'>
                    <ThumbUpAltIcon></ThumbUpAltIcon>
                    {video.like}
                  </span>
                  {/*dislike btn*/}
                  <span className='ml-3 mr-0'>
                    <ThumbDownIcon></ThumbDownIcon>
                    {video.dislike}
                  </span>
                  {/*share btn*/}
                  <span className='ml-3 mr-0 '>
                    <ScreenShareIcon></ScreenShareIcon>
                    share
                  </span>
                  {/*save*/}
                  <span className='ml-3 mr-0'>
                    <SaveIcon></SaveIcon>
                    save
                  </span>
                  {/*horizon btn icon*/}
                  <span className='ml-3 mr-0 '>
                    <MoreHorizIcon></MoreHorizIcon>
                  </span>
                </div>
              </div>
            </div>
            <hr></hr>
            {/*subscribe section*/}
            <div className='row  '>
              <div className='col-3'>
                <span>
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
              </div>

              <div className='col-3 ml-auto m-0 '>
                <div className='row'>
                  <div
                    className='ml-auto rounded text-white p-2  '
                    style={{ backgroundColor: 'red' }}
                  >
                    subscribe
                  </div>
                </div>
              </div>

              <div className='col-12 text-center pt-5 h-25'>
                {video.description}
              </div>
            </div>
            <hr></hr>
            <div className='row '>
              <div className='col-12 '>
                <div className='row mb-5'>
                  <span>1090 comment </span>
                  <span className='ml-5'>
                    <SortIcon></SortIcon>
                    <span>SORTBY</span>
                  </span>
                </div>
                <div className='row '>
                  <div className=' col-1 border'>
                    <AccountCircleIcon w={1}></AccountCircleIcon>
                  </div>
                  <div className='col-11  '>
                    <form width={1}>
                      <Input
                        //className={classes.input}
                        style={{ width: '100%' }}
                        placeholder='add a public comment'
                        defaultValue='Hello world'
                        inputProps={{ 'aria-label': 'description' }}
                        onClick={handleBtnVisibility}
                      />
                      <div className='row'>
                        {/*cancel btn*/}
                        {visible && (
                          <div className='ml-auto mt-2'>
                            <span
                              className='p-2 bg-white'
                              onClick={() => setVisible(false)}
                            >
                              CANCEL
                            </span>
                            <span className='p-2 bg-dark text-white'>
                              {' '}
                              CANCEL
                            </span>
                          </div>
                        )}
                        {/*comment btn*/}
                      </div>
                    </form>
                  </div>
                  <hr></hr>
                  <br></br>
                  {/*comment section*/}
                  <div className='col-12 mt-5'>
                    <div className='row'>
                      <div className='col-1 '>
                        <AccountCircleIcon></AccountCircleIcon>
                      </div>
                      <div className='col-11'>
                        <p>Akinfolarin stephen</p>
                        <p>he is an handsome boy</p>
                        <div className='col-12 p-0 m-0'>
                          <span className='m-2'>
                            <ThumbUpAltIcon></ThumbUpAltIcon>
                          </span>
                          <span className='m-2'>
                            <ThumbDownIcon></ThumbDownIcon>
                          </span>
                          <span className='m-2 '>REPLY</span>
                        </div>

                        {/************view reply*****************/}
                        <div className='text-primary'>
                          <span>
                            <ArrowDropDownIcon></ArrowDropDownIcon>
                          </span>
                          <span>View Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*second container*/}
      <div className={`col-12  ${style.cont2}`}>
        {/*video section*/}
        <div className='video-container'>
          <Videocontainer>
            <video width='100%' height='100%' autoPlay muted controls>
              <source
                src='https://www.w3schools.com/html/mov_bbb.mp4'
                type='video/mp4'
              />
              Your browser does not support the video tag.
            </video>
          </Videocontainer>
          {/*end of video section*/}
          <div className='col-12 video-sub-section '>
            {/*title*/}

            <div className='title-container '>
              <h7>{video.title}</h7>
            </div>
            {/*views */}
            <div className='title-container-2  row'>
              <div
                className={`${style.interest} col-sm-12  col-md-4 col-lg-4 `}
                style={{ overflow: 'hidden' }}
              >
                <div id='ade'></div>
                <span className='w-100'> {video.views}.3 days ag</span>
              </div>
              {/*like btn*/}
              <div
                className={`${style.interested} col-md-8 col-sm-10  col-lg-8 ml-auto`}
              >
                <div className=' '>
                  <span className='ml-auto mr-0 p-2'>
                    <ThumbUpAltIcon></ThumbUpAltIcon>
                    {video.like}
                  </span>
                  {/*dislike btn*/}
                  <span className='ml-auto mr-0 p-2'>
                    <ThumbDownIcon></ThumbDownIcon>
                    {video.dislike}
                  </span>
                  {/*share btn*/}
                  <span className='ml-auto mr-0 p-2'>
                    <ScreenShareIcon></ScreenShareIcon>
                    share
                  </span>
                  {/*save*/}
                  <span className='ml-auto mr-0 p-2'>
                    <SaveIcon></SaveIcon>
                    save
                  </span>
                  {/*horizon btn icon*/}
                  <span className='ml-auto mr-0 p-2'>
                    <MoreHorizIcon></MoreHorizIcon>
                  </span>
                </div>
              </div>
            </div>
            <hr></hr>
            {/*subscribe section*/}
            <div className='row  '>
              <div className='col-3'>
                <span>
                  <AccountCircleIcon></AccountCircleIcon>
                </span>
              </div>

              <div className='col-3 ml-auto '>
                <div className='row'>
                  <div
                    className='ml-auto rounded text-white p-2  '
                    style={{ backgroundColor: 'red' }}
                  >
                    subscribe
                  </div>
                </div>
              </div>

              <div className='col-12 text-center pt-5 h-25'>
                {video.description}
              </div>
            </div>
            <hr></hr>
            {/*inisible recommended video container section*/}
            <div
              className={`col-md-10 col-12 col-lg-10 p-0 border ${style.cont2}`}
            >
              <Content searchPage={true} videoPage={isVideoPage}></Content>
            </div>
            <hr></hr>
            <div className='row '>
              <div className='col-12 '>
                <div className='row justify-content-center mb-5'>
                  <span>1090 comment </span>
                  <span className='ml-5'>
                    <SortIcon></SortIcon>
                    <span>SORTBY</span>
                  </span>
                </div>
                <div className='row '>
                  <div className=' col-1  '>
                    <AccountCircleIcon w={1}></AccountCircleIcon>
                  </div>
                  <div className='col-11  '>
                    <form width={1}>
                      <Input
                        //className={classes.input}
                        style={{ width: '100%' }}
                        placeholder='add a public comment'
                        defaultValue='Hello world'
                        inputProps={{ 'aria-label': 'description' }}
                        onClick={handleBtnVisibility}
                      />
                      <div className='row'>
                        {/*cancel btn*/}
                        {visible && (
                          <div className='ml-auto mt-2'>
                            <span
                              className='p-2 bg-white'
                              onClick={() => setVisible(false)}
                            >
                              CANCEL
                            </span>
                            <span className='p-2 bg-dark text-white'>
                              {' '}
                              CANCEL
                            </span>
                          </div>
                        )}
                        {/*comment btn*/}
                      </div>
                    </form>
                  </div>
                  <hr></hr>
                  <br></br>
                  {/*comment section*/}
                  <div className='col-12 mt-5'>
                    <div className='row'>
                      <div className='col-1 '>
                        <AccountCircleIcon></AccountCircleIcon>
                      </div>
                      <div className='col-11'>
                        <p>Akinfolarin stephen</p>
                        <p>he is an handsome boy</p>
                        <div className='col-12 p-0 m-0'>
                          <span className='m-2'>
                            <ThumbUpAltIcon></ThumbUpAltIcon>
                          </span>
                          <span className='m-2'>
                            <ThumbDownIcon></ThumbDownIcon>
                          </span>
                          <span className='m-2 '>REPLY</span>
                        </div>

                        {/************view reply*****************/}
                        <div className='text-primary'>
                          <span>
                            <ArrowDropDownIcon></ArrowDropDownIcon>
                          </span>
                          <span>View Reply</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`col-4 ml-5 p-0  border ${style.cont1}`}>
        <Content
          sliderItemdesk={sliderItemdesk}
          videoPage={isVideoPage}
          //searchPage={true}
        ></Content>
      </div>
    </div>
  );
};

export default Videoplayer;

const Videocontainer = styled.div`
  width: 567;
  height: 319;
  object-fit: cover;
`;
