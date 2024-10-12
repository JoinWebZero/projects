import { Navigation } from './navigation'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Header } from './header'
import { Theme, ThemeProvider } from './components/theme-provider'
import { useLocalStorage } from 'usehooks-ts'
import { Toaster } from '@/components/ui/sonner'
import './index.css'
import { Content } from './Content'
import 'dot-connect/font.css'
import { config } from './walletConfigs'
import { ReDotProvider, ReDotChainProvider } from '@reactive-dot/react'
import { Suspense, useState } from 'react'
import { AccountContextProvider } from './contexts/AccountsContext'
import { ProjectContextProvider } from '@/contexts/ProjectsContext'
import { NetworkContextProvider } from './contexts/NetworkContext'

const App = () => {
  const [settings] = useLocalStorage('fellowship-settings', {
    themeMode: 'light',
  })

  const [lightClientLoaded, setLightClientLoaded] = useState<boolean>(false)


  return (
    <>
      <ThemeProvider defaultTheme={settings?.themeMode as Theme}>
        <ReDotProvider config={config}>
          <ReDotChainProvider chainId="polkadot">
            <Suspense>
              <NetworkContextProvider>
                <ProjectContextProvider>
                  <AccountContextProvider>
                      <TooltipProvider>
                        <div className="flex min-h-screen w-full flex-col bg-muted/40">
                        <Navigation
                lightClientLoaded={lightClientLoaded}
                setLightClientLoaded={setLightClientLoaded}
              />
                          <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                            <Header />
                            <Content />
                          </div>
                        </div>
                      </TooltipProvider>
                  </AccountContextProvider>
                </ProjectContextProvider>
              </NetworkContextProvider>
            </Suspense>
          </ReDotChainProvider>
        </ReDotProvider>
      </ThemeProvider>
      <Toaster />
    </>
  )
}

export default App
