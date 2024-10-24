import { useState } from 'react';
import './App.css';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();


async function getter() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const response = await data.json;
  return response;

}

function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
    
    
  )
}

function Posts() {
  const {data, isLoading, error} = useQuery({ queryKey: ['posts'], queryFN: getter});
  
  if (error) {
    return <div>
      ERror while fetching
    </div>
  }

  if (isLoading) {
    return "Loading..."
  }

  return <div>
    {JSON.stringify(data)};
  </div>

}

export default App
