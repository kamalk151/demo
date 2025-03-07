import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TestLeadForm from './Components/TestLeadForm'
import { GlobalStyle } from './Components/styledComponents'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <div className="App">
        <TestLeadForm />
      </div>
    </QueryClientProvider>
  );
}

export default App;
