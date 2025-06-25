import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home';

import { toast } from 'sonner'
import { useEffect } from 'react'
import { useNetwork } from './contexts/NetworkContext'
import ProjectPage from './pages/ProjectPage';
import PastEvents from './pages/PastEvents';

export const Content = () => {
  const { lightClientLoaded, isLight } = useNetwork()
  useEffect(() => {
    isLight && lightClientLoaded && toast.success('Light client: Synced')
  }, [isLight, lightClientLoaded])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/past-events" element={<PastEvents />} />
      </Routes>
    </>
  )
}
