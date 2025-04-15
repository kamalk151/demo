import { useQuery } from '@tanstack/react-query'
import getLocationsDelegate from '../getPropertyListDelegate'
import productConfig from '../../config'

const useGetSpecialOfferQuery = (param) => {
  /**
   * Fetches locations from the API.
   * @returns {Promise<Array>} - A promise that resolves to an array of locations.
   */
  const queryParam = param || {}
  
  return useQuery({
    queryKey: ['get-special-offer'],
    queryFn: () => getLocationsDelegate(productConfig.getSpecialOfferPropertyListEndPoint, queryParam),
    enabled: true,
    retry: false
  })
}

export default useGetSpecialOfferQuery
