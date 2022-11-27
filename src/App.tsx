import { useEffect, useState } from 'react'
import { SnackbarProvider } from 'notistack';
import { testingService } from './services/testing.service'
import './App.css'
import { SnackbarConfigurator } from './utils';

function App() {
  const [morty, setMorty] = useState({} as any)

  const fetchMorty = async () => {
    const { data } = await testingService();
    setMorty(data);
  }

  useEffect(() => {
    try {
      fetchMorty();
    } catch (error) {
    }
  }, [])
  

  return (
    <SnackbarProvider>
      <SnackbarConfigurator />
      <pre>
        {JSON.stringify(morty, null, 3)}
      </pre>
    </SnackbarProvider>
  )
}

export default App
