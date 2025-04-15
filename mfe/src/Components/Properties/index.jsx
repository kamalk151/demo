import { Container } from 'react-bootstrap'
import Layout from '../Layout'
// import PropertyFilter from './PropertySideFilter'
import PropertyList from './PropertyList'

const Properties = () => {

  return (
    <div className="stretched side-push-panel device-up-md device-up-sm device-up-xs has-plugin-html5video has-plugin-onepage has-plugin-bootstrap has-plugin-fitvids has-plugin-counter has-plugin-carousel has-plugin-form quick-contact-form-ready has-plugin-bscomponents has-plugin-gmap device-down-xxl device-xl device-up-xl device-up-lg is-expanded-menu">
      <div className="wrapper">
        <Layout>
        <Container>
          <PropertyList />
        </Container>
        </Layout>
      </div>
    </div>
  )
}

export default Properties
