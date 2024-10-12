import { createClient } from 'polkadot-api'
import { getSmProvider } from 'polkadot-api/sm-provider'
import SmWorker from 'polkadot-api/smoldot/worker?worker'
import { startFromWorker } from 'polkadot-api/smoldot/from-worker'
import { dot } from '@polkadot-api/descriptors'

const smoldot = startFromWorker(
  new SmWorker() /*, {maxLogLevel: 9,
      logCallback: (level: number, target: string, message: string) => {
        messages.push(`${getTickDate()} (${level})${target}\n${message}\n\n`)
      },
    }*/,
)

const dotRelayChain = import('polkadot-api/chains/polkadot').then(
  ({ chainSpec }) => smoldot.addChain({ chainSpec }),
)


export const polkadotClient = createClient(getSmProvider(dotRelayChain))

// API stuff
export const papi = polkadotClient?.getTypedApi(dot)