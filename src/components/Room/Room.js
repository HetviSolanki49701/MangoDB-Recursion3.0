import React from 'react';
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import './Room.css';

const Room = () => {
  return (
    <div className='whereby'>
      <Header />
      <iframe
        width="1000"
        height="500"
        src="https://mangodb.whereby.com/09fe22c7-d85f-45e0-be90-4ee188692794"
        allow="camera; microphone; fullscreen; speaker"
      ></iframe>
      <Footer />
    </div>
  )
}

export default Room
