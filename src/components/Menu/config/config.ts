import { MenuItemsType, DropdownMenuItemType, menuStatus } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Trade'),
    icon: 'Swap',
    href: '/swap?outputCurrency=0x55d398326f99059ff775485246999027b3197955',
    showItemsOnMobile: false,
    items: [
      {
        label: t('Exchange'),
        href: '/swap?outputCurrency=0x55d398326f99059ff775485246999027b3197955',
      },
      {
        label: t('Liquidity'),
        href: '/liquidity',
      },
    ],
  },
  {
    label: t('Earn'),
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label: t('Farms'),
        href: '/farms',
      },
      {
        label: t('Pools'),
        href: '/pools',
      },
    ],
  },
  //  {
    //  label: t('Win'),
  //    href: '/prediction',
    //  icon: 'Trophy',
    //  items: [
    //    {
    //      label: t('Lottery'),
    //      href: '/lottery',
    //    },
    //    {
    //      label: t('Prediction'),
    //      href: '/prediction',
      //  },
    //  ],
  // },
    // {
  //  label: t('NFT'),
  //   href: `${nftsBaseUrl}`,
  //   icon: 'Nft',
  //   items: [
  //     {
    //     label: t('Overview'),
    //     href: `${nftsBaseUrl}`,
  //     },
    //   {
    //     label: t('Collections'),
    //     href: `${nftsBaseUrl}/collections`,
    //   },
  //   ],
//   },
  {
    label: 'More',
    href: '#',
    icon: 'More',
    hideSubNav: true,
    items: [
      // {
      //   label: t('Analytics'),
      //   href: '/info',
      // },
    //  {
      //     label: t('IFO'),
      //     href: '/ifo',
    //     },
      {
        label: t('Voting'),
        href: 'https://snapshot.org/#/dexo_exchange.eth',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    //  {
      //  type: DropdownMenuItemType.DIVIDER,
  //    },
      //   {
      //     label: t('Leaderboard'),
      //     href: '/teams',
      //   },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/@dexo_exchange',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        href: 'https://docs.dexo.exchange',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
]

export default config
