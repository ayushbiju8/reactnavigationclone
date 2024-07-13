import React from 'react'
import './started.css'

function Started() {
  return (
    <div className='Strarted'>
      <h1>Getting started</h1>
      <p>What follows within the Fundamentals section of this documentation is a tour of the most important aspects of React Navigation. It should cover enough for you to know how to build your typical small mobile application, and give you the background that you need to dive deeper into the more advanced parts of React Navigation.</p>
      <h3>Pre-requisites</h3>
      <p>If you're already familiar with JavaScript, React and React Native, then you'll be able to get moving with React Navigation quickly! If not, we highly recommend you to gain some basic knowledge first, then come back here when you're done.
        Here are some resources to help you out:
        <li>React Native Express (Sections 1 to 4)</li>
        <li>Main Concepts of React</li>
        <li>React Hooks</li>
        <li>React Context (Advanced)</li></p>
      <h3>Minimum requirements</h3>
      <p>
        <li>react-native &gt;= 0.63.0</li>
        <li>expo &gt;= 41 (if you use Expo)</li>
        <li>typescript &gt;= 4.1.0 (if you use TypeScript)</li>
      </p>
      <h3>Installation</h3>
      <p>Install the required packages in your React Native project:</p>
      <div className="codesnippet">
        npm install @react-navigation/native
      </div>
      <p>React Navigation is made up of some core utilities and those are then used by navigators to create the navigation structure in your app. Don't worry too much about this for now, it'll become clear soon enough! To frontload the installation work, let's also install and configure dependencies used by most navigators, then we can move forward with starting to write some code.

        The libraries we will install now are react-native-screens and react-native-safe-area-context. If you already have these libraries installed and at the latest version, you are done here! Otherwise, read on.</p>
      <h3>Installing dependencies into an Expo managed project</h3>
      <p>In your project directory, run:</p>
      <div className="codesnippet">
        npx expo install react-native-screens react-native-safe-area-context
      </div>
      <p>This will install versions of these libraries that are compatible.

        You can now continue to "Hello React Navigation" to start writing some code.</p>
      <h3>Installing dependencies into a bare React Native project</h3>
      <p>In your project directory, run:</p>
      <div className="codesnippet">npm install react-native-screens react-native-safe-area-context</div>
      <p>From React Native 0.60 and higher, linking is automatic. So you don't need to run react-native link.</p>
    </div>
  )
}

export default Started