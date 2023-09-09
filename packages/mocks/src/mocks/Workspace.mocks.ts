const isDev = process.env.NODE_ENV === 'development'

export const MOCK_WORKSPACES = [
  { title: 'One X Tech', href: 'https://www.onextech.com', subtitle: 'Discover how we modernise enterprise user experiences.' },
  { title: 'One X Design', href: 'https://www.onexdesign.com', subtitle: 'Discover how we build custom, user-centric enterprise designs.' },
  { title: 'One X Data', href: 'https://www.onexdata.co', subtitle: 'Discover how we utilize enterprise-scale AI to build digital solutions.' },
  { title: 'One X Labs', href: 'https://www.onexlabs.com', subtitle: 'Discover how we research & transform the future of web-driven applications.' },
  { title: 'One X Digital', href:'https://www.onexdigital.co', subtitle: 'Discover how we can help digitalize enterprise effectively.' },
  { title: 'Gov X', href: 'https://www.govx.ai', subtitle: 'Discover how we help public enterprises digitalize effectively.' },
  { title: 'Fin X', href: 'https://www.finx.ai', subtitle: 'Discover how we help financial enterprises digitalize effectively.' },
  { title: 'Aether Labs', href: 'https://www.aetherlabs.ai', subtitle: 'Discover how we help financial enterprises digitalize effectively.' },
  { title: 'SRI', href: 'https://www.sri.com.sg', subtitle: 'Discover how we help financial enterprises digitalize effectively.' },
  { title: 'Gravis AI', href: 'https://www.gravis-ai.com', subtitle: 'Discover how we help financial enterprises digitalize effectively.' },
  { title: 'Coastal Electronics', href: 'https://www.coastal.com.sg', subtitle: 'Discover how we help financial enterprises digitalize effectively.' },
].map((workspace, i) => ({
  id: i + 1,
  hrefProps: { targetBlank: true },
  ...workspace,
  href: isDev ? `http://localhost:${3000 + i + 1}` : workspace.href,
}))
