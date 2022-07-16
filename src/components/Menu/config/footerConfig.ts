import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.dexo.exchange/careers/business-partnerships',
      },
      {
        label: t('Brand'),
        href: 'https://docs.dexo.exchange/dexo/brand-and-logos',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/@dexo_exchange',
      },
      {
        label: t('Community'),
        href: 'https://docs.dexo.exchange/dexo/communities',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Introduction'),
        href: 'https://docs.dexo.exchange/dexo/dexo-exchange-introduction',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.dexo.exchange/dexo/click-here-for-help/troubleshooting-errors',
      },
      {
        label: t('General FAQ'),
        href: 'https://docs.dexo.exchange/dexo/click-here-for-help/general-faq',
      },
  {
        label: t('Customer Support'),
        href: 'https://docs.dexo.exchange/careers/customer-support',
      },

    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/dexoexchange',
      },
      {
        label: t('Smart Contracts'),
        href: 'https://docs.dexo.exchange/developers/smart-contracts',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.dexo.exchange/developers/bug-bounty',
      },
      {
        label: t('Careers'),
        href: 'https://docs.dexo.exchange/careers/hiring',
      },
    ],
  },
]
