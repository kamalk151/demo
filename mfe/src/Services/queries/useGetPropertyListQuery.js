import { useQuery } from '@tanstack/react-query'
import getPropertyListDelegate from '../getPropertyListDelegate'
import productConfig from '../../config'

const useGetPropertyListQuery = () => {
  /**
   * Fetches locations from the API.
   * @returns {Promise<Array>} - A promise that resolves to an array of locations.
   */
  
  return useQuery({
    queryKey: ['get-property-list'],
    queryFn: () => getPropertyListDelegate(productConfig.getPropertyListEndPoint),
    enabled: true,
    retry: false
  })
  // console.log(response, '==response===>')
  // return response?.data

}

export default useGetPropertyListQuery
