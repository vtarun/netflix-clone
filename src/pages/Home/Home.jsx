import React from 'react';
import "./Home.css";

import Navbar from "./../../components/Navbar/Navbar";
import hero_banner from "./../../assets/hero_banner.jpg";
import hero_title from "./../../assets/hero_title.png";
import info_icon from "./../../assets/info_icon.png";
import play_icon from "./../../assets/play_icon.png";
import TitleCards from '../../components/TitleCards/TitleCards';

const Home = () => {
  return (
    <div className="home">
        <Navbar />
        <div className='hero'>
          <img src={hero_banner} alt="" className='banner-img'/>
          <div className='hero-caption'>
            <img src={hero_title} alt="caption-img"/>
            <p>Discovering his ties to a secret ancient order, a young man living in modern Instanbul embarks on aquest to save the city from an immortal enemy.</p>
            <div className="hero-btns">
              <button className='btn'>
                <img src={play_icon} alt="Play"/>Play
              </button>
              <button className='btn dark-btn'>
                <img src={info_icon} alt="More info"/>More Info
              </button>
            </div>
            <TitleCards />
          </div>
        </div>
        <div className='more-cards'>
          <TitleCards title="Award winning films"/>
          <TitleCards title="New on Netflix"/>
          <TitleCards title="Only on Netflix"/>
          <TitleCards title="Top picks for you"/>
        </div>
    </div>
  )
}

export default Home
