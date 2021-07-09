import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const StyledContainer = styled.section`
  display: flex;
  position: fixed;
  bottom: -300px;
  width: 100%;
  height: 300px;
  background-color: black;
  justify-content: space-between;
  overflow: hidden;
  transition: all 0.5s;

  .videoContainer {
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
  }

  .video {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    z-index: 30;
  }

  .helper {
    display: none;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 40;
    background: transparent;
  }
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 35;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );

  .imgCardVideo {
    position: relative;
    width: 170px;
    height: 270px;
    object-fit: cover;
    z-index: 0;
    overflow: hidden;
    margin: auto 3% auto 0;
    /* border: 2px solid rgba(133, 133, 133, 0.2); */
    border: 1px solid grey;
    border-radius: 10px;
  }
  .wrapper-info {
    display: flex;
    width: 30%;
    padding: auto 100px;

    flex-direction: column;
  }
  h3 {
    font-size: 20px;
    margin: 6% 0;

    font-family: var(--font-arial);
  }

  p {
    /* margin: 6% 0; */
    font-size: 14px;
    font-family: var(--font-arial);
  }
`;

const StyledButtons = styled.div`
  display: flex;
  .play-bt {
    display: flex;
    align-items: center;
    background-color: var(--purple-color-bt);
    font-size: 12px;
    font-family: var(--font-arial);
    font-weight: bold;
    color: White;
    width: 30%;
    height: 30px;
    border-radius: 50px;
    margin-right: 2%;
    border: none;
    text-justify: initial;
    padding: 0 4%;
    text-align: start;
  }

  .list-bt {
    display: flex;
    align-items: center;
    background-color: white;
    font-size: 12px;
    font-family: var(--font-arial);
    font-weight: bold;
    width: 30%;
    height: 30px;
    /* height: 105%; */
    border-radius: 50px;
    border: none;
    /* text-justify: initial; */
    padding: 0 4%;
    text-align: start;

    span {
      display: flex;
      justify-content: start;
      text-justify: initial;
    }
  }
`;

const MovieDetail = ({ videoItem, moviesVideos, isOnScreen, backToList }) => {
  var isVisible = isOnScreen ? 0 : -300;
  var helpder = isOnScreen ? 'block' : 'none';

  // const [isOnScreen, setIsOnScreen] = useState(false);
  const videoOnReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  };
  const videoID = moviesVideos ? moviesVideos.key : null;
  // console.log(videoItem);
  // console.log(moviesVideos);

  // 2fuowcxdrYc
  const opts = {
    height: '300',
    width: '500',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      playlist: videoID,
      loop: 1,
    },
  };
  // var getElement = document.getElementsByClassName('videoContainer');
  // console.log(document.activeElement);

  return (
    <StyledContainer style={{ bottom: isVisible }}>
      <div className='videoContainer'>
        <YouTube
          className='video'
          videoId={videoID}
          opts={opts}
          onReady={videoOnReady}
        />
        <StyledInfoWrapper>
          <img className='imgCardVideo' src={videoItem.poster} alt='' />
          <div className='wrapper-info'>
            <h3>{videoItem.title}</h3>
            <p>{videoItem.overview}</p>
            <StyledButtons>
              <button className='play-bt'>
                <span>
                  PLAY <br /> NOW
                </span>
              </button>
              <button className='list-bt'>
                <span>
                  WATCH <br /> LIST
                </span>
              </button>
            </StyledButtons>
          </div>
        </StyledInfoWrapper>
      </div>
      <div
        style={{ display: helpder }}
        className='helper'
        onClick={() => backToList()}
      ></div>
    </StyledContainer>
  );
};

export default MovieDetail;
