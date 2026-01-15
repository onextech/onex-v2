import dynamic from 'next/dynamic'

// Dynamically import the progress provider to avoid blocking initial SSR
const ProgressProvider = dynamic(
  () => import('./progress-provider').then((mod) => mod.ProgressProvider),
  { ssr: false }
)

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ProgressProvider>{children}</ProgressProvider>
}
