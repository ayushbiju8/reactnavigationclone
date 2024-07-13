import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Root from './Root'
import Home from './components/home/Home'
import Docs from './components/docs/Docs'
import Blog from './components/blog/Blog'
import Help from './components/help/Help'
import Started from './components/docs/docscomponents/Started'
import Nav from './components/docs/docscomponents/Nav'
import Guide from './components/docs/docscomponents/Guide'


const router = createHashRouter([
  {
    path : '/',
    element : <Root/>,
    children : [
      {
        path : '',
        element : <Home/>
      },
      {
        path : '/docs',
        element : <Docs/>,
        children:[
          {
            path : '/docs/fundamentals',
            element : <Started/>
          },
          {
            path : '/docs/fundamentals/getting-started',
            element : <Started/>
          },
          {
            path : '/docs/fundamentals/react-nav',
            element : <Nav/>
          },
          {
            path : '/docs/fundamentals/react-guide',
            element : <Guide/>
          },
          {
            path : '/docs/guide/',
            element : <Started/>
          },
          {
            path : '/docs/guide/getting-started',
            element : <Started/>
          },
          {
            path : '/docs/guide/react-nav',
            element : <Nav/>
          },
          {
            path : '/docs/guide/react-guide',
            element : <Guide/>
          },
          {
            path : '/docs/navigators',
            element : <Started/>
          },
          {
            path : '/docs/navigators/getting-started',
            element : <Started/>
          },
          {
            path : '/docs/navigators/react-nav',
            element : <Nav/>
          },
          {
            path : '/docs/navigators/react-guide',
            element : <Guide/>
          }
        ]
      },
      {
        path : '/blog',
        element : <Blog/>
      },
      {
        path : '/help',
        element : <Help/>
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
