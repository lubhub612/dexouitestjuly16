import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Dexo Exchange',
  description:
    'The most popular AMM on BSC by user count! Earn DEXO through yield farming or win it in the Lottery, then stake it in DEXOChips Pools to earn more tokens! Initial Farm Offerings, NFTs, and more, on a platform you can trust.',
  image: 'https://app.dexo.exchange/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Dexo Exchange')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Dexo Exchange')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Dexo Exchange')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Dexo Exchange')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Dexo Exchange')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Dexo Exchange')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Dexo Exchange')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Dexo Exchange')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Dexo Exchange')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Dexo Exchange')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Dexo Exchange')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Dexo Exchange')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Dexo Exchange')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Dexo Exchange')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Dexo Exchange')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Dexo Exchange')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Dexo Exchange')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Dexo Exchange')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Dexo Exchange Info & Analytics')}`,
        description: 'View statistics for Dexo Exchange exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Dexo Exchange Info & Analytics')}`,
        description: 'View statistics for Dexo Exchange exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Dexo Exchange Info & Analytics')}`,
        description: 'View statistics for Dexo Exchange exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Dexo Exchange')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Dexo Exchange')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Dexo Exchange')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Dexo Exchange')}`,
      }
    default:
      return null
  }
}
