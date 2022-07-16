import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade cryptocurrency without registration and KYC.',
  bodyText: 'Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.dexo.exchange/products/exchange/how-to-trade',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'BTC', alt: 'BTC token' },
      { src: 'DEXO', alt: 'DEXO token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'Dexo Exchange makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.dexo.exchange/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'stonks', alt: 'Stocks chart' },
      { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'More Power To Your Pocket!',
  bodyText:
    'Holders of DEXO can stake their tokens to receive a portion of Dexo Exchange transaction fees and participate in community governance.',
  reverse: false,
  primaryButton: {
    to: 'https://ico.dexo.exchange',
    text: 'Buy DEXO',
    external: true,
  },
  secondaryButton: {
    to: 'https://docs.dexo.exchange/tokenomics/Dexo Exchange-token/Dexo Exchange-tokenomics',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d pancake' },
      { src: 'top-right', alt: 'Small 3d pancake' },
      { src: 'coin', alt: 'DEXO token' },
      { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
