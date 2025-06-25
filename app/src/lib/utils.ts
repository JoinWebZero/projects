import { type ClassValue, clsx } from 'clsx'
import {
  LucideProps,
  Component,
  Code,
} from 'lucide-react'

import { ForwardRefExoticComponent, RefAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type RouterType = {
  link: string
  name: string
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>
  >
  childs?: RouterType[]
}

export const routes: RouterType[] = [
  {
    link: 'dev',
    name: '2024',
    icon: Code,
    childs: [
      { link: 'https://symmetry.theblockspace.net/', name: 'Funkhaus', icon: Component },
      { link: 'https://github.com/JoinWebZero/hackathons/blob/main/past-submissions/ethdenver-2024-winners.md', name: 'Austin', icon: Component },
      { link: 'https://github.com/JoinWebZero/hackathons/blob/main/past-submissions/ethdenver-2024-winners.md', name: 'Denver', icon: Component },
    ],
  },
]

export type ResourcesType = {
  title: string
  resources: GetLinksType[]
}

export type GetLinksType = {
  label: string
  link: string
  target: '_parent' | '_blank'
}

export const resources: ResourcesType[] = [
  {
    title: 'Fellowship Admin',
    resources: [
      {
        label: 'Manifesto',
        link: 'https://github.com/polkadot-fellows/manifesto/blob/0c3df46d76625980b8b48742cb86f4d8fa6dda8d/manifesto.pdf',
        target: '_blank',
      },
      {
        label: 'Pallets and Docs',
        link: 'https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/index.html',
        target: '_blank',
      },
      {
        label: 'Fellows repo',
        link: 'https://github.com/polkadot-fellows',
        target: '_blank',
      },
    ],
  },
  {
    title: 'Fellowship UIs',
    resources: [
      {
        label: 'Polkassembly',
        link: 'https://collectives.polkassembly.io/',
        target: '_blank',
      },
      {
        label: 'SubSquare',
        link: 'https://collectives.subsquare.io/fellowship',
        target: '_blank',
      },
      {
        label: 'PolkadotJS Collectives',
        link: 'https://dotapps-io.ipns.dweb.link/?rpc=wss%3A%2F%2Fpolkadot-collectives-rpc.polkadot.io#/explorer',
        target: '_blank',
      },
    ],
  },
  {
    title: 'Fellowship Onboarding',
    resources: [
      {
        label: 'Polkadot Blockchain Academy',
        link: 'https://polkadot.network/development/blockchain-academy/',
        target: '_blank',
      },
      {
        label: 'Kudos',
        link: 'https://www.morekudos.com/explore/open-contributions-for-polkadot-sdk',
        target: '_blank',
      },
      {
        label: 'Polkadot SDK Mentor issues',
        link: 'https://mentor.tasty.limo/',
        target: '_blank',
      },
      {
        label: 'Polkadot Project Ideas',
        link: 'https:// gist.github.com/xlc/ebc2476afb7ecacdaa5ce95ae3b991c8#polkadot-project-ideas',
        target: '_blank',
      },
    ],
  },
]

export const openInNewTab = (url: string | URL | undefined) => {
  window.open(url, '_blank', 'noopener,noreferrer')
}

