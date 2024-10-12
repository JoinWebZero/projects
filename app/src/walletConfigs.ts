import { dot } from '@polkadot-api/descriptors'
import type { Config } from '@reactive-dot/core'
import { InjectedWalletAggregator } from '@reactive-dot/core/wallets.js'
import { registerDotConnect } from 'dot-connect'
import { getWsProvider } from 'polkadot-api/ws-provider/web'

export const config = {
  chains: {
    polkadot: {
      descriptor: dot,
      provider: getWsProvider('wss://polkadot-asset-hub-rpc.polkadot.io'),
    },
  },
  wallets: [new InjectedWalletAggregator()],
} satisfies Config

// Register dot-connect custom elements & configure supported wallets
registerDotConnect({
  wallets: config.wallets,
})
