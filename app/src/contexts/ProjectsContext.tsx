/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import funkhausSubmissions from '../assets/funkhaus-2024.json'
import { useNetwork } from './NetworkContext'

type ProjectsContextProps = {
  children: React.ReactNode | React.ReactNode[]
}

export type Project = {
  donationAddress: string
  eventStartedAt: string
  slidesUrl: string
  demoUrl: string
  githubRepo: string
  description: string
  projectName: string
  teamLead: string
  techStack: string
  milestones: string
}

export interface IProjectsContext {
  projects: Project[]
  getProjectByAddress: (donationAddress?: string) => Project | undefined
}

const ProjectsContext = createContext<IProjectsContext | undefined>(
  undefined,
)

const ProjectContextProvider = ({ children }: ProjectsContextProps) => {
  const { network } = useNetwork()
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    setProjects(funkhausSubmissions as unknown as Project[],)
  }, [network])

  const getProjectByAddress = (donationAddress?: string) => {
    if (!donationAddress) return undefined

    return projects.find((d) => d.donationAddress === donationAddress)
  }

  return (
    <ProjectsContext.Provider value={{ projects, getProjectByAddress }}>
      {children}
    </ProjectsContext.Provider>
  )
}

const useProjects = () => {
  
  const context = useContext(ProjectsContext)
  if (context === undefined) {
    throw new Error(
      'useProjects must be used within a ProjectsContextProvider',
    )
  }
  return context
}

export { ProjectContextProvider, useProjects }
