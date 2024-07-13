import React from 'react'
import './blog.css'

function Blog() {
  return (
    <div className='blog'>
      <div className="leftblog">
        <ul className='p-6'>
          <li className='font-bold pb-2'>Recent posts</li>
          <li>React Navigation 7.0 Release Candidate</li>
          <li>Introducing Static API</li>
          <li>React Navigation 6.0</li>
          <li>React Navigation joins GitHub Sponsors</li>
          <li>On the way to React Navigation 6.0</li>
        </ul>
      </div>
      <div className="rightblog">
        <div className="blogcontainer">
          <div className="blogelement">
            <h1>React Navigation 7.0 Release Candidate</h1>
            <p>June 27, 2024 · 4 min read</p>
            <p>We're excited to announce the release candidate of React Navigation 7.0.

              This release includes a new static API that simplifies the configuration of navigators and improves TypeScript and deep linking support. As well as various other improvements and new features.</p>
          </div>
          <div className="blogelement">
            <h1>Introducing Static API</h1>
            <p>March 25, 2024 · 5 min read</p>
            <p>Two of the major pain points of using React Navigation have been TypeScript and deep linking configuration. Due to the dynamic nature of the navigators, it is necessary to manually maintain the TypeScript and deep linking configuration to match the navigation structure. This can be error-prone and time-consuming.

To solve this, we’re adding a new static API to React Navigation 7. It’s not the same API as React Navigation 4, but it’s similar. Many apps don’t need the features that the dynamic API provides, and they can use the simpler static API instead to simplify their codebase.</p>
          </div>
          <div className="blogelement">
            <h1>React Navigation 6.0</h1>
            <p>August 14, 2021 · 6 min read</p>
            <p>The documentation is now live at reactnavigation.org, and v5 lives here.

React Navigation 6 keeps mostly the same core API as React Navigation 5, and you can think of it as further polishing what was in React Navigation 5. Let's talk about the highlights of this release in this blog post.</p>
          </div>
          <div className="blogelement">
            <h1>On the way to React Navigation 6.0</h1>
            <p>May 19, 2020 · 4 min read
            </p>
            <p>React Navigation is depended on by some of the most respected engineering organizations, well-known brands, and talented startups. It's used by financial services apps like Brex and Coinbase Pro; educational apps like Codecademy Go and DataCamp; consumer apps like Shop from Shopify, Bloomberg, TaskRabbit, and Th3rdwave; entertainment apps like the National Football League (NFL) (in their main app and several others), Cameo, Tracker Network for Fortnite, and the Call of Duty companion app from Activision Blizzard. One of my personal favourite apps using React Navigation is Readwise, I love making my coffee with Single Origin 2, and managing household chores with Sweepy.

We've also seen React Navigation used in apps that help in the fight against COVID-19. Our favourites are How We Feel by Pinterest co-founder and CEO Ben Silbermann and a team from Pinterest in collaboration with leading scientists (article) and COVID Symptom Study by ZOE Global in association with King's College London (article).</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Blog