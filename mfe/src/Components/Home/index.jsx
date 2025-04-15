
import Filter from './Filter'
import MiddleContent from './MiddleContent'
import Layout from '../Layout'
const HomeComponent = () => {

  return (
    <div className="stretched side-push-panel device-up-md device-up-sm device-up-xs has-plugin-html5video has-plugin-onepage has-plugin-bootstrap has-plugin-fitvids has-plugin-counter has-plugin-carousel has-plugin-form quick-contact-form-ready has-plugin-bscomponents has-plugin-gmap device-down-xxl device-xl device-up-xl device-up-lg is-expanded-menu">
      <Layout>
        <Filter key="filter" />,
        <MiddleContent key="middle-content" />
      </Layout>
    </div>
  )
}

export default HomeComponent;