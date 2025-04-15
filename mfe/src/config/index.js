import dev from './dev'
import prod from './prod'

const productConfig =
  process.env.NODE_ENV === 'development'
    ? {...dev, baseUrl: process.env.REACT_APP_BASE_URL_LOCAL }
    : {...prod, baseUrl: process.env.REACT_APP_BASE_URL_PROD }

const config = { ...productConfig.api }
console.log(productConfig, 'Config:', config)

const getConfig = () => config

const getBaseUrl = () => productConfig.baseUrl

const getApiUrl = (apiName) => `${productConfig.baseUrl}${config[apiName].url}`

export { getApiUrl, getBaseUrl, getConfig, config }
export default productConfig