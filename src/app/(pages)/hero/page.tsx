"use client"
import React from 'react'
import 

export default function page() {
  return (
    <div className='overflow-hidden'>
      <div className="hero relative "  >
      <div className="absolute top-0 left-0">
          <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/video/hero1.mp4" type="video/mp4" />
      </video>
      <div className="video-div">

      </div>
      <div className="display">
        <div className="text">
        <h1 className='text-white'>LET'S ENJOY THE NATURE</h1>
        <p className='text-center'>Get the best prices on 2,000,000+ properties,worldwide</p>
      </div>

      <div className="selection ">
      <div className="location text-center">
        <p className='head'>Location</p>
        <input type="text" placeholder='where is your destination?'
        className='input p-3' />
      </div>
        <div className="Date text-center">
        <p className='head'> <i className="fa-solid fa-calendar-days"></i>Starting Date</p>
        <input type="text" placeholder='where is your destination?'
        className='input p-3' />
      </div>
      </div>
      </div>

      </div>
      </div>
        </div>
  )
}
