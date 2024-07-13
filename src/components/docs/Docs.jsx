import React, { useRef } from 'react'
import './docs.css'
import { Outlet, NavLink } from 'react-router-dom'

function Docs() {
  let subcontent1 = useRef(null)
  let subcontent2 = useRef(null)
  let subcontent3 = useRef(null)
  const hideunhide1 = () => {
    subcontent1.current.classList.toggle("hidden")
    console.log("HEllo");
  }
  const hideunhide2 = () => {
    subcontent2.current.classList.toggle("hidden")
    console.log("HEllo");
  }
  const hideunhide3 = () => {
    subcontent3.current.classList.toggle("hidden")
    console.log("HEllo");
  }
  return (
    <div className='docsmain'>
      <div className="leftdocs">
        <div className="mainheadingbox">
          <div className="mainheading" onClick={hideunhide1}>
            <NavLink to="/docs/fundamentals" onClick={ (event) => event.preventDefault() }>Fundamentals</NavLink><i className="fa-solid fa-angle-right text-gray-400"></i>
          </div>
          <div className="subcontent hidden" ref={subcontent1}>
            <ul>
              <NavLink to='/docs/fundamentals/getting-started'><li>Getting Started</li></NavLink>
              <NavLink to='/docs/fundamentals/react-nav'><li>Hello React Navigation</li></NavLink>
              <NavLink to='/docs/fundamentals/react-guide'><li>Moving Between Screens</li></NavLink>
            </ul>
          </div>
        </div>
        <div className="mainheadingbox">
          <div className="mainheading" onClick={hideunhide2}>
            <NavLink to="/docs/guide" onClick={ (event) => event.preventDefault() }>Guide</NavLink><i className="fa-solid fa-angle-right text-gray-400"></i>
          </div>
          <div className="subcontent hidden" ref={subcontent2}>
            <ul>
              <NavLink to='/docs/guide/getting-started'><li>Tab Navigation</li></NavLink>
              <NavLink to='/docs/guide/react-nav'><li>Drawer Navigation</li></NavLink>
              <NavLink to='/docs/guide/react-guide'><li>Advanced</li></NavLink>
            </ul>
          </div>
        </div>
        <div className="mainheadingbox">
          <div className="mainheading" onClick={hideunhide3}>
            <NavLink to="/docs/navigators" onClick={ (event) => event.preventDefault() }>Navigators</NavLink><i className="fa-solid fa-angle-right text-gray-400"></i>
          </div>
          <div className="subcontent hidden" ref={subcontent3}>
            <ul>
              <NavLink to='/docs/navigators/getting-started'><li>Basics</li></NavLink>
              <NavLink to='/docs/navigators/react-nav'><li>Intermediate</li></NavLink>
              <NavLink to='/docs/navigators/react-guide'><li>Advanced</li></NavLink>
            </ul>
          </div>
        </div>
      </div>
      <div className="middledocs">
        <Outlet />
      </div>
      <div className="rightdocs">
        <div className="insiderightdocs">
          <h6>Pre-requisites</h6>
          <h6>Minimum requirements</h6>
          <h6>Installation</h6>
          <h6>Installing dependencies into an Expo managed project</h6>
          <h6>Installing dependencies into a bare React Native project</h6>
        </div>
      </div>
    </div>
  )
}

export default Docs