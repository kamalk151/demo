import React from 'react'

import aboutUsTitle from '../../Assets/real-estate/images/about-us/page-title.jpg'
import Header from '../Header'
import Footer from '../Footer'
import OurTeam from './OurTeam'
import OurPartner from './OurPartner'
import WhatWeDo from './WhatWeDo'
import OurStory from './OurStory'
import Layout from '../Layout'

const AboutUs = () => {
  return (
    <div className="stretched side-push-panel">
      <div className="wrapper">
        <Layout>
        <div
          className="page-title scroll-detect page-title-row img-fluid"
          style={{
            backgroundImage: `url(${aboutUsTitle})`,
            minHeight: '20em',
            backgroundSize: 'cover'
          }}
        >
          <div className="page-title-content text-center">
            <h1>About Us</h1>
          </div>
        </div>
        {/* Content Section */}
        <section id="content">
          <div className="empty-line mt-5"></div>
          <div className="content-wrap mb-0 pb-0">
            <OurStory />
            <WhatWeDo />
            <OurTeam />
            <OurPartner />
          </div>
        </section>
      </Layout>
      </div>
    </div>
  )
}

export default AboutUs