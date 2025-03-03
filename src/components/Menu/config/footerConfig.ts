import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.fourswap.xyz/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.fourswap.xyz/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/pancakeswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.fourswap.xyz/contact-us/telegram',
      },
      {
        label: t('Litepaper'),
        href: 'https://v2litepaper.fourswap.xyz/',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.fourswap.xyz/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.fourswap.xyz/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.fourswap.xyz/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.fourswap.xyz',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.fourswap.xyz/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.fourswap.xyz/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.fourswap.xyz/hiring/become-a-chef',
      },
    ],
  },
]
