'use client'

import React, { useEffect, useRef, useState } from 'react'

export interface LazyBlockProps {
  children: React.ReactNode
  /** Margin around the root element for intersection detection */
  rootMargin?: string
  /** Minimum height to prevent layout shift before content loads */
  minHeight?: number | string
  /** Placeholder to show before content loads */
  placeholder?: React.ReactNode
}

/**
 * LazyBlock - A wrapper component that defers rendering of children
 * until the component enters the viewport. Useful for optimizing
 * below-fold content to reduce initial JS execution time.
 */
export const LazyBlock: React.FC<LazyBlockProps> = ({
  children,
  rootMargin = '200px',
  minHeight = 200,
  placeholder = null,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Check if IntersectionObserver is supported
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div ref={ref} style={{ minHeight: isVisible ? undefined : minHeight }}>
      {isVisible ? children : placeholder}
    </div>
  )
}

export default LazyBlock
