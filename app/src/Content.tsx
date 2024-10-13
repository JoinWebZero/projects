import { Route, Router, Routes } from 'react-router-dom'
import { useProjects } from '@/contexts/ProjectsContext'
import HomePage from './pages/Home';

import { Home } from '@/pages/Home'
import { toast } from 'sonner'
import { useEffect } from 'react'
import { useNetwork } from './contexts/NetworkContext'
import ProjectPage from './pages/ProjectPage';
import PastEvents from './pages/PastEvents';
const pages = [
  {
    path: '',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/projects',
    element: <ProjectPage />,
  },
]

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
