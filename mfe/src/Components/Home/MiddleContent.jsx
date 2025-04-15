import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router'; // Import useLocation
import { Container } from 'react-bootstrap'

import WhyUs from './WhyUs'
import FeaturedProperty from './FeaturedProerpty'
import OurService from './OurService'
import SpecailOffers from './SpecialOffers'
import QuickNote from './QuickNote'
import Testimonial from './Testimonial'

const MiddleContent = () => {
	const location = useLocation(); // Hook to track URL changes
  const urlParams = new URLSearchParams(location.search)

  // Create a ref object to store refs for all components
  const componentRefs = useRef({
    OurService: null,
    QuickNote: null,
    WhyUs: null
  })

  // Scroll to a specific component dynamically based on URL or logic
  useEffect(() => {
    const targetComponent = urlParams.get('scrollTo') // Example: ?scrollTo=WhyUs
    if (targetComponent && componentRefs.current[targetComponent]) {
      componentRefs.current[targetComponent].scrollIntoView({ behavior: 'smooth' })
    }
  }, [urlParams.get('scrollTo')])

  return (
    <section id='content'>
      <div className='content-wrap'>
        <Container>
          <div className='empty-line'></div>
          <div className='line mt-5'></div>

          {/* Dynamically assign refs to components */}
					<FeaturedProperty />
          <div ref={(el) => (componentRefs.current.OurService = el)}>
            <OurService />
          </div>
          <div className='line'></div>
					<SpecailOffers />
          <div ref={(el) => (componentRefs.current.QuickNote = el)}>
            <QuickNote />
          </div>
          <div ref={(el) => (componentRefs.current.WhyUs = el)}>
            <WhyUs />
          </div>
					<Testimonial />
        </Container>
      </div>
    </section>
  )
}

export default MiddleContent