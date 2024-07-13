import React from 'react'
import './started.css'

function Nav() {
  let x1= `import * as React from 'react';`
  let x2=`import { View, Text } from 'react-native';`
  let x3 =`import { NavigationContainer } from '@react-navigation/native';`
  let x4 =`import { createNativeStackNavigator } from '@react-navigation/native-stack';`
  return (
    <div className='Strarted'>
      <h1>Hello React Navigation</h1>
      <p>In a web browser, you can link to different pages using an anchor &lt; a &gt; tag. When the user clicks on a link, the URL is pushed to the browser history stack. When the user presses the back button, the browser pops the item from the top of the history stack, so the active page is now the previously visited page. React Native doesn't have a built-in idea of a global history stack like a web browser does -- this is where React Navigation enters the story.
      </p>
      <p>React Navigation's native stack navigator provides a way for your app to transition between screens and manage navigation history. If your app uses only one stack navigator then it is conceptually similar to how a web browser handles navigation state - your app pushes and pops items from the navigation stack as users interact with it, and this results in the user seeing different screens. A key difference between how this works in a web browser and in React Navigation is that React Navigation's native stack navigator provides the gestures and animations that you would expect on Android and iOS when navigating between routes in the stack.</p>
      <p>Let's start by demonstrating the most common navigator, createNativeStackNavigator.</p>
      <h3>Installing the native stack navigator library</h3>
      <p>The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the native stack navigator, we need to install @react-navigation/native-stack :</p>
      <div className="codesnippet">npm install @react-navigation/native-stack</div>
      <h3>Creating a native stack navigator</h3>
      <p>createNativeStackNavigator is a function that returns an object containing 2 properties: Screen and Navigator. Both of them are React components used for configuring the navigator. The Navigator should contain Screen elements as its children to define the configuration for routes.
        NavigationContainer is a component which manages our navigation tree and contains the navigation state. This component must wrap all navigators structure. Usually, we'd render this component at the root of our app, which is usually the component exported from App.js.</p>
      <div className="codesnippet">{x1}<br/>{x2}<br/>{x3}<br/>{x4}</div>
      <p>If you run this code, you will see a screen with an empty navigation bar and a grey content area containing your HomeScreen component (shown above). The styles you see for the navigation bar and the content area are the default configuration for a stack navigator, we'll learn how to configure those later.</p>
      <h3>Configuring the navigator</h3>
      <p>All of the route configuration is specified as props to our navigator. We haven't passed any props to our navigator, so it just uses the default configuration.</p>
      <h3>Summary</h3>
      <p>
        <li>React Native doesn't have a built-in API for navigation like a web browser does. React Navigation provides this for you, along with the iOS and Android gestures and animations to transition between screens.</li>
        <li>Stack.Navigator is a component that takes route configuration as its children with additional props for configuration and renders our content.</li>
        <li>Each Stack.Screen component takes a name prop which refers to the name of the route and component prop which specifies the component to render for the route. These are the 2 required props.</li>
        <li>To specify what the initial route in a stack is, provide an initialRouteName as the prop for the navigator.</li>
        <li>To specify screen-specific options, we can pass an options prop to Stack.Screen, and for common options, we can pass screenOptions to Stack.Navigator</li>
      </p>
    </div>
  )
}

export default Nav