/* eslint-disable react-hooks/exhaustive-deps */

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Link } from 'react-router-dom'  
import { FaCheckCircle } from 'react-icons/fa'
import { TbLoaderQuarter } from 'react-icons/tb'
import { Twitter, Github, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'
import { useNetwork } from './contexts/NetworkContext'


interface Props {
  lightClientLoaded: boolean
  setLightClientLoaded: React.Dispatch<React.SetStateAction<boolean>>
}


export const Navigation = ({}: Props) => {
  const { theme, setTheme } = useTheme()
  const { lightClientLoaded, isLight } = useNetwork()



  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-[14rem] flex-col border-r bg-background sm:flex">
      <nav className="items-left flex flex-col gap-4 px-4 sm:py-5">
        
        <Link
          to="/"
          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
        >
          Home
        </Link>

        <Link
          to="/past-events"
          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
        >
          Past Blockspace Editions
        </Link>
        
        <Link
          to="/milestones"
          className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
        >
          Submit a milestone
        </Link>
      </nav>
      
      <nav className="mt-auto flex flex-row items-center justify-center gap-8 px-2 sm:py-5">
    </nav>
    
    <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        {isLight && (
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                {!lightClientLoaded ? (
                  <TbLoaderQuarter className="h-5 w-5 animate-spin" />
                ) : (
                  <FaCheckCircle className="text-[#00b300]" />
                )}
                <span className="sr-only">
                  Light Client {!lightClientLoaded ? `syncing` : `synced`}
                </span>
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">
              Light Client {!lightClientLoaded ? `syncing` : `synced`}
            </TooltipContent>
          </Tooltip>
        )}
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://github.com/JoinWebZero/"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">Github</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://x.com/JoinWebZero/"
              target="_blank"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side="right">Twitter</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">Toggle theme</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  )
}
