import React,{useRef, useState} from 'react'
import { Link ,NavLink, redirect} from 'react-router-dom'
import './navbar.css'
import "../../index.css"
function Navbar() {
  const hamburgeroptions = useRef(null);
  let hamicon = useRef(null);
  let hamvisible=false;
  let navbar = useRef(null)
  let option = useRef(null)
  let darktheme = false;
  const [font,setFont] = useState('fa-solid fa-sun')
const changetheme = ()=>{
  if (darktheme){
    navbar.current.style.backgroundColor = 'white' ;
    option.current.style.backgroundColor = 'white' ;
    navbar.current.style.color = 'black';
    option.current.style.color = 'black';
    setFont('fa-solid fa-sun')
  }else{
    navbar.current.style.backgroundColor = '#242526' ;
    option.current.style.backgroundColor = '#242526' ;
    navbar.current.style.color = 'white';
    option.current.style.color = 'white';
    setFont('fa-solid fa-moon')
  }
  darktheme = !darktheme
}
  const showhiddenoptions = ()=>{
    if (hamvisible) {
      hamburgeroptions.current.classList.remove("slide-in-left")
      hamburgeroptions.current.classList.add("slide-out-left")
      hamicon.current.innerHTML=`<i class="fa-solid fa-bars"></i>`
    }else{
      hamburgeroptions.current.classList.remove("slide-out-left")
      hamburgeroptions.current.classList.add("slide-in-left")
      hamicon.current.innerHTML=`<i class="fa-solid fa-xmark"></i>`
    }
    hamburgeroptions.current.classList.toggle("onclickanimation")
    hamvisible = !hamvisible
  }
  return (
    <nav className='Navbar z-50' ref={navbar}>
        <div className="leftnav">
            <ul className='flex text-center items-center'>
                <div className="hamburger hidden p-4" onClick={showhiddenoptions} ref={hamicon}><i className="fa-solid fa-bars"></i></div>
                <li className='navprop'><div className="logo flex items-center gap-3"><img src="https://reactnavigation.org/img/spiro.svg" alt="" width='30px'/><Link to="/">React Navigation</Link></div></li>
                <li className='navprop vanishinsmallscreen'><NavLink to='/docs/fundamentals/getting-started'>Docs</NavLink></li>
                <li className='navprop vanishinsmallscreen'><NavLink to='/blog'>Blog</NavLink></li>
                <li className='navprop vanishinsmallscreen'><NavLink to='/help'>Help</NavLink></li>
                <li className='navprop vanishinsmallscreen'><select name="" id="" ref={option}><option value=""><NavLink to='/docs/fundamentals/getting-started'>7.x</NavLink></option></select></li>
            </ul>
        </div>
        <div className="leftshortnav" ref={hamburgeroptions}>
          <ul className='w-full'>
              <li className='smallsceennav navprop cursor-pointer text-black'><NavLink to='/'>Home</NavLink></li>
              <li className='smallsceennav navprop cursor-pointer text-black'><NavLink to='/docs/fundamentals/getting-started'>Docs</NavLink></li>
              <li className='smallsceennav navprop cursor-pointer text-black'><NavLink to='/blog'>Blog</NavLink></li>
              <li className='smallsceennav navprop cursor-pointer text-black'><NavLink to='/help'>Help</NavLink></li>
          </ul>
        </div>
        <div className="rightnav flex items-center text-center gap-2">
            <div className="navgithub navprop"><a href="https://github.com/ayushbiju8?tab=repositories">Github <i className="fa-brands fa-square-github"></i></a></div>
            <div className="navtheme flex items-center justify-center cursor-pointer" onClick={changetheme}><i className={font}></i></div>
            <input className='navinputsearch' type="text" placeholder='Search'/>
            <div className="navsearch mr-4 hidden"><i className="fa-solid fa-magnifying-glass"></i></div>
        </div>
    </nav>
  )
}

export default Navbar