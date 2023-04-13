const isDev = process.env.NODE_ENV === 'development'

export const MOCK_WORKSPACES = [
  { title: 'One X Tech', href: 'https://onextech.com' },
  { title: 'One X Design', href: 'https://onexdesign.com' },
  { title: 'One X Data', href: 'https://onexdata.com' },
  { title: 'One X Digital', href: 'https://onexdigital.com' },
  { title: 'One X Studio', href: 'https://onexstudio.com' },
  { title: 'One X Ventures', href: 'https://onexventures.com' },
  { title: 'One X Labs', href: 'https://onexlabs.com' },
  { title: 'Fin X', href: 'https://finx.com' },
  { title: 'Gov X', href: 'https://govx.com' },
].map((workspace, i) => ({
  id: i + 1,
  subtitle:
    'Discover the Agile process that makes 98% of tech executives recommend us',
  hrefProps: { targetBlank: true },
  ...workspace,
  href: isDev ? `http://localhost:${3000 + i + 1}` : workspace.href,
}))
