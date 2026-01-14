/* eslint-disable fp/no-mutation */

import { KeenSliderPlugin } from 'keen-slider/react'

/**
 * @note that this is different from adaptiveHeight because the latter
 * requires height to be manually set on the slider item while the former
 * does not require height.
 * https://keen-slider.io/examples#adaptive-height
 *
 * @param slider
 */
const withAutoHeight: KeenSliderPlugin = (slider) => {
  let rafId: number | null = null

  const updateHeight = () => {
    // Cancel any pending RAF to avoid multiple updates
    if (rafId) {
      cancelAnimationFrame(rafId)
    }

    // Use requestAnimationFrame to batch reads and writes, avoiding forced reflow
    rafId = requestAnimationFrame(() => {
      const currentSlideIndex = slider.track.details?.rel ?? 0
      const currentSlide = slider.slides[currentSlideIndex]
      if (!currentSlide) return

      const nextHeight = (currentSlide.firstChild as HTMLElement)?.offsetHeight
      if (nextHeight) {
        slider.container.style.height = `${nextHeight}px`
      }
    })
  }

  slider.on('created', () => {
    // Use RAF instead of setTimeout for better performance
    requestAnimationFrame(updateHeight)
  })
  slider.on('slideChanged', updateHeight)
  slider.on('destroyed', () => {
    if (rafId) {
      cancelAnimationFrame(rafId)
    }
  })
}

export default withAutoHeight
