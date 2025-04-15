
import heroImg4 from '../../../Assets/real-estate/images/hero/4.jpg'
import heroImg2 from '../../../Assets/real-estate/images/hero/2.jpg'
import singleImg from '../../../Assets/real-estate/images/single-condo.jpg'

const SliderPanel = () => {
  
  return (					
    <section id="slider" className="slider-element dark parallax scroll-detect include-header include-topbar"
      style={{ height: '550px' }}
    >
      <img src={singleImg} className="parallax-bg" />
      <div className="container z-2">
        <div className="real-estate-info-wrap">
          <div className="heading-block mb-0 border-bottom-0 d-md-flex d-block align-items-center justify-content-between">
            <h2 className="me-auto"> Luxury Modern Condo Apartment / <span className="h5 text-info">Apartments</span></h2>
            <div className="d-flex flex-shrink-1" data-lightbox="gallery">
              <a href={heroImg2} className="button button-color button-rounded text-transform-none m-0 fw-medium align-self-end" data-lightbox="gallery-item">
                <i className="uil uil-images"></i>
                View Gallery
              </a>
              <a href={heroImg2} className="d-none" data-lightbox="gallery-item"></a>
              <a href={heroImg4} className="d-none" data-lightbox="gallery-item"></a>
              <a href="https://www.youtube.com/watch?v=GU58qaKmZhQ" data-lightbox="iframe" className="button button-color button-rounded text-transform-none fw-medium align-self-end my-0 ms-2">
                <i className="bi-play"></i>
                Play Video
              </a>
            </div>
          </div>
          <div className="real-estate-price mb-md-0 mb-lg-4 mb-xl-0">
            <h3>$120<span className="text-light h6">/day</span></h3>
          </div>
        </div>
      </div>
      <div className="video-overlay z-1"
        style={{ background:'linear-gradient(180deg,rgba(0,0,0,.3) 0,transparent 40%,transparent 60%,rgba(0,0,0,.8))' }}>
      </div>
    </section>
  )
}

export default SliderPanel