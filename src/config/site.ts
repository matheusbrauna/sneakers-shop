import { SidebarNavItem } from '@/types/nav'

const links = {
  twitter: 'https://twitter.com/sadmann17',
  github: 'https://github.com/sadmann7/skateshop',
  githubAccount: 'https://github.com/sadmann7',
  discord: 'https://discord.com/users/sadmann7',
  calDotCom: 'https://cal.com/sadmann7',
}

export const siteConfig = {
  name: 'Sneakers Shop',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  navMenu: [
    {
      title: 'Nike',
      href: '#',
      description:
        'A Nike é líder mundial em roupas e calçados esportivos. Conhecida por sua inovação e design icônico, a Nike oferece produtos de alta qualidade para atletas e entusiastas da moda esportiva.',
    },
    {
      title: 'Adidas',
      href: '#',
      description:
        'A Adidas é uma das marcas mais reconhecidas no mundo da moda e esportes. Seus sneakers combinam estilo e desempenho, tornando-os ideais tanto para atividades esportivas quanto para o dia a dia.',
    },
    {
      title: 'Puma',
      href: '#',
      description:
        'A Puma é conhecida por sua ousadia e inovação. Seus sneakers apresentam designs exclusivos que incorporam moda e esportividade, atendendo às necessidades de pessoas com estilo próprio.',
    },
    {
      title: 'Converse',
      href: '#',
      description:
        'Os icônicos tênis Converse, também conhecidos como "Chuck Taylors", têm sido símbolos de autenticidade e estilo desde a década de 1920. Estes sneakers atemporais são perfeitos para expressar sua individualidade.',
    },
    {
      title: 'Vans',
      href: '#',
      description:
        'Os tênis Vans são um marco no mundo do skate e da cultura urbana. Com seu visual casual e versatilidade, eles são uma escolha popular entre os jovens que buscam autenticidade e estilo descolado.',
    },
    {
      title: 'New Balance',
      href: '#',
      description:
        'A New Balance é conhecida por seu compromisso com o conforto e a qualidade. Seus sneakers são ideais para quem busca um equilíbrio entre moda e funcionalidade, especialmente para esportes e estilo de vida ativo.',
    },
  ],
  links: {
    github: 'https://github.com/matheusbrauna',
    linkedin: 'https://www.linkedin.com/in/matheus-brauna',
  },
  footerNav: [
    {
      title: 'Credits',
      items: [
        {
          title: 'OneStopShop',
          href: 'https://onestopshop.jackblatch.com',
          external: true,
        },
        {
          title: 'Acme Corp',
          href: 'https://acme-corp.jumr.dev',
          external: true,
        },
        {
          title: 'craft.mxkaske.dev',
          href: 'https://craft.mxkaske.dev',
          external: true,
        },
        {
          title: 'Taxonomy',
          href: 'https://tx.shadcn.com/',
          external: true,
        },
        {
          title: 'shadcn/ui',
          href: 'https://ui.shadcn.com',
          external: true,
        },
      ],
    },
    {
      title: 'Help',
      items: [
        {
          title: 'About',
          href: '/about',
          external: false,
        },
        {
          title: 'Contact',
          href: '/contact',
          external: false,
        },
        {
          title: 'Terms',
          href: '/terms',
          external: false,
        },
        {
          title: 'Privacy',
          href: '/privacy',
          external: false,
        },
      ],
    },
    {
      title: 'Social',
      items: [
        {
          title: 'Twitter',
          href: links.twitter,
          external: true,
        },
        {
          title: 'GitHub',
          href: links.githubAccount,
          external: true,
        },
        {
          title: 'Discord',
          href: links.discord,
          external: true,
        },
        {
          title: 'cal.com',
          href: links.calDotCom,
          external: true,
        },
      ],
    },
    {
      title: 'Lofi',
      items: [
        {
          title: 'beats to study to',
          href: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
          external: true,
        },
        {
          title: 'beats to chill to',
          href: 'https://www.youtube.com/watch?v=rUxyKA_-grg',
          external: true,
        },
        {
          title: 'a fresh start',
          href: 'https://www.youtube.com/watch?v=rwionZbOryo',
          external: true,
        },
        {
          title: 'coffee to go',
          href: 'https://www.youtube.com/watch?v=2gliGzb2_1I',
          external: true,
        },
      ],
    },
  ],
}

export interface DashboardConfig {
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: 'Account',
      href: '/dashboard/account',
      icon: 'user',
      items: [],
    },
    {
      title: 'Stores',
      href: '/dashboard/stores',
      icon: 'store',
      items: [],
    },
    {
      title: 'Billing',
      href: '/dashboard/billing',
      icon: 'billing',
      items: [],
    },
    {
      title: 'Purchases',
      href: '/dashboard/purchases',
      icon: 'dollarSign',
      items: [],
    },
  ],
}

export type SiteConfig = typeof siteConfig
