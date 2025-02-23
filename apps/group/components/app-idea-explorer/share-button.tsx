import React, { useCallback } from 'react'

import { Button, ButtonProps } from '@/components/ui/button'
import { ShareIcon } from 'lucide-react'

interface ShareButtonProps extends ButtonProps {
  onShare?: () => void
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  onShare,
  children,
  ...rest
}) => {
  const handleShare = useCallback(() => {
    if (onShare) {
      onShare()
    } else if (navigator.share) {
      navigator
        .share({
          title: document.title,
          url: window.location.href,
        })
        .catch((error) => console.error('Error sharing:', error))
    }
  }, [onShare])

  return (
    <Button onClick={handleShare} {...rest}>
      {children || (
        <>
          <ShareIcon className="size-3" />
          Share
        </>
      )}
    </Button>
  )
}
