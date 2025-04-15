import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router'

import HomeCompoent from './Components/Home'
import { GlobalStyle } from './Components/styledComponents'
import AboutUs from './Components/AboutUs/'
import ProductDetail from './Components/Properties/PropertyDetail/'
import Properties from './Components/Properties'
import FreeSellProperty from './Components/Properties/FreeSellProperty'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes path='ecom'>
          <Route exact path='/demo' element={<HomeCompoent />} />
          <Route exact path='/property-detail/*' element={<ProductDetail />} />
          <Route exact path='/about-us' element={<AboutUs />} />
          <Route exact path='/properties' element={<Properties />} />
          <Route exact path='/free-sell-property' element={<FreeSellProperty />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
