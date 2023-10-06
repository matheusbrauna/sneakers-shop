import { SidebarNavItem } from '@/types/nav'

const links = {
  github: 'https://github.com/matheusbrauna/sneakers-shop',
  githubAccount: 'https://github.com/matheusbrauna',
  linkedin: 'https://www.linkedin.com/in/matheus-brauna',
}

export const siteConfig = {
  name: 'Sneakers Shop',
  description:
    'Beautifully designed components built with Radix UI and Tailwind CSS.',
  navMenu: [
    {
      title: 'Nike',
      href: '/brands/nike',
      description:
        'A Nike é líder mundial em roupas e calçados esportivos. Conhecida por sua inovação e design icônico, a Nike oferece produtos de alta qualidade para atletas e entusiastas da moda esportiva.',
    },
    {
      title: 'Adidas',
      href: '/brands/adidas',
      description:
        'A Adidas é uma das marcas mais reconhecidas no mundo da moda e esportes. Seus sneakers combinam estilo e desempenho, tornando-os ideais tanto para atividades esportivas quanto para o dia a dia.',
    },
    {
      title: 'Puma',
      href: '/brands/puma',
      description:
        'A Puma é conhecida por sua ousadia e inovação. Seus sneakers apresentam designs exclusivos que incorporam moda e esportividade, atendendo às necessidades de pessoas com estilo próprio.',
    },
    {
      title: 'Converse',
      href: '/brands/converse',
      description:
        'Os icônicos tênis Converse, também conhecidos como "Chuck Taylors", têm sido símbolos de autenticidade e estilo desde a década de 1920. Estes sneakers atemporais são perfeitos para expressar sua individualidade.',
    },
    {
      title: 'Vans',
      href: '/brands/vans',
      description:
        'Os tênis Vans são um marco no mundo do skate e da cultura urbana. Com seu visual casual e versatilidade, eles são uma escolha popular entre os jovens que buscam autenticidade e estilo descolado.',
    },
    {
      title: 'New Balance',
      href: '/brands/new-balance',
      description:
        'A New Balance é conhecida por seu compromisso com o conforto e a qualidade. Seus sneakers são ideais para quem busca um equilíbrio entre moda e funcionalidade, especialmente para esportes e estilo de vida ativo.',
    },
  ],
  links: {
    github: 'https://github.com/matheusbrauna',
    linkedin: 'https://www.linkedin.com/in/matheus-brauna',
    portfolio: 'https://matheusbrauna.dev',
  },
  footerNav: [
    {
      title: 'Ajuda',
      items: [
        {
          title: 'Sobre',
          href: '/sobre',
          external: false,
        },
        {
          title: 'Contato',
          href: '/contato',
          external: false,
        },
        {
          title: 'Termos',
          href: '/termos',
          external: false,
        },
        {
          title: 'Privacidade',
          href: '/privacidade',
          external: false,
        },
      ],
    },
    {
      title: 'Social',
      items: [
        {
          title: 'GitHub',
          href: links.githubAccount,
          external: true,
        },
        {
          title: 'LinkedIn',
          href: links.linkedin,
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
      title: 'Todos os produtos',
      href: '/products',
      icon: 'product',
      items: [],
    },
    {
      title: 'Lançamentos',
      href: '/feature',
      icon: 'store',
      items: [],
    },
    {
      title: 'Em destaque',
      href: '/trending',
      icon: 'billing',
      items: [],
    },
  ],
}

export type SiteConfig = typeof siteConfig
