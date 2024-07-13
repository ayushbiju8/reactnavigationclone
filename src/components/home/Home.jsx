import React from 'react'
import LeftImg from '../../assets/LeftImg.png'
import RightImg from '../../assets/RightImg.png'
import './home.css'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="all overflow-y-hidden">
      <div className="home overflow-y-hidden">
        <div className="leftpart ">
          <img src={LeftImg} width="80%" className='opacity-75' alt="" />
        </div>
        <div className="centerpart">
          <div className="homebox">
            <h1>React Navigation</h1>
            <h5>Routing and navigation for Expo and React Native apps.</h5>
            <div className="homebutton">
            <NavLink to="/docs/fundamentals/getting-started" className="tiresome"><button className='xbutton'>Read Docs</button></NavLink>
            <NavLink to="/docs/fundamentals/react-nav" className="tiresome"><button id='tryit' className='xbutton'>Try it</button></NavLink>
            </div>
          </div>
        </div>
        <div className="rightpart">
          <img src={RightImg} width='80%' className='opacity-75' alt="" />
        </div>
      </div>
      <div className="nextpart overflow-y-hidden">
        <div className="content1 content">
          <i className="fa-solid fa-masks-theater text-5xl"></i>
          <h1 className='text-3xl p-1 pb-3 text-center font-bold text-white'>Easy to Use</h1>
          <p className='text-center text-gray-500'>Start quickly with built-in navigators that deliver a seamless out-of-the-box experience.</p>
        </div>
        <div className="content2 content"><i className="fa-solid fa-mobile-screen-button text-5xl"></i>
          <h1 className='text-3xl p-1 pb-3 text-center font-bold text-white'>Components built for iOS and Android</h1>
          <p className='text-center text-gray-500'>Platform-specific look-and-feel with smooth animations and gestures.</p></div>
        <div className="content3 content"><i className="fa-brands fa-square-font-awesome-stroke text-5xl"></i>
          <h1 className='text-3xl p-1 pb-3 text-center font-bold text-white'>Completely customizable</h1>
          <p className='text-center text-gray-500'>If you know how to write apps using JavaScript you can customize any part of React Navigation.</p></div>
        <div className="content4 content"><i className="fa-solid fa-link text-5xl"></i>
          <h1 className='text-3xl p-1 pb-3 text-center font-bold text-white'>Extensible platform</h1>
          <p className='text-center text-gray-500'>React Navigation is extensible at every layer— you can write your own navigators or even replace the user-facing API.</p></div>
      </div>
      <div className="lastpart w-screen">
        <h1 className='text-black'>React Navigation is built by Expo, Software Mansion, and Callstack, with contributions from the community and sponsors:</h1>
        <div className="imgbox">
          <img className='imgprop' src="https://avatars.githubusercontent.com/u/1257695?u=e142a0ae6314aa8b462e664db429d926b31bf978&v=4" alt="" />
          <img className='imgprop' src="https://avatars.githubusercontent.com/u/1629785?u=f91613c118bb1fcf442a71008dff1cd5f9b30411&v=4" alt="" />
          <img className='imgprop' src="https://avatars.githubusercontent.com/u/2443340?v=4" alt="" />
          <img className='imgprop' src="https://avatars.githubusercontent.com/u/4328772?u=c4e0fd72bd7cdb3751166c8ade8ef253e6f5ba67&v=4" alt="" />
          <img className='imgprop' src="https://avatars.githubusercontent.com/u/6457344?u=47e100289441b7f4681a7809202ff683886e4f5e&v=4" alt="" />
          <img className='imgprop' src="https://avatars.githubusercontent.com/u/6936373?u=4edd14e6636c45d10ac6a3eecb4b3ffa6cc2bf5c&v=4" alt="" />
          <img className='imgprop' src="https://avatars.githubusercontent.com/u/7029942?u=5eb1fed31f05fe97bcb07227268165c4028cc662&v=4" alt="" />
          <img className='imgprop' src="https://avatars.githubusercontent.com/u/9664363?u=46ba6d5fbd29729df2950b845c9ca2cd085a1c2b&v=4" alt="" />
        </div>
        <h1 className='text-black'>If React Navigation is helpful to you, consider supporting the project by sponsoring it 💜</h1>
      </div>
    </div>
  )
}

export default Home