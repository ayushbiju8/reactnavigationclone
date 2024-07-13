import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer w-screen'>
      <div className="docs p-3">
        <ul>
          <li className='font-bold pb-2'>Docs</li>
          <li className='text-gray-600'>Getting Started</li>
          <li className='text-gray-600'>Building your own Navigator</li>
          <li className='text-gray-600'>Contributing</li>
        </ul>
      </div>
      <div className="support p-3">
        <ul>
          <li className='font-bold pb-2'>Support</li>
          <li className='text-gray-600'>Chat in Discord</li>
          <li className='text-gray-600'>Report a bug</li>
          <li className='text-gray-600'>Get help on stack overflow</li>
        </ul>
      </div>
      <div className="social p-3">
        <ul>
          <li className='font-bold pb-2'>Social</li>
          <li className='text-gray-600'>Blog</li>
          <li className='text-gray-600'>GitHub</li>
          <li className='text-gray-600'>Twitter</li>
        </ul>
      </div>
      <div className="builtwith p-3">
        <ul>
          <li className='font-bold pb-2'>Built with</li>
          <li className='text-gray-600'>Docusaurus</li>
          <li className='text-gray-600'>GitHub Pages</li>
          <li className='text-gray-600'>Netlify</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer