import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Header from './Header';
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
      </div>
    </QueryClientProvider>
  );
}

export default App;
