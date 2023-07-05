/* eslint-disable no-param-reassign */
import type { Post } from '@gravis-os/types'

const shuffleArray = (
  array: number[],
  currentIndex = array.length - 1
): number[] => {
  if (currentIndex === 0) {
    return array
  }

  const randomIndex = Math.floor(Math.random() * (currentIndex + 1))

  // Swap current element with the randomly selected element
  const temp = array[currentIndex]
  array[currentIndex] = array[randomIndex]
  array[randomIndex] = temp

  return shuffleArray(array, currentIndex - 1)
}

const getNRandomPosts = (posts: Post[], n: number) => {
  const indexes = Array.from(Array(posts?.length).keys())
  const shuffledArray = shuffleArray(indexes)
  const selectedIndexes = shuffledArray.slice(0, n)
  return selectedIndexes.map((value) => posts[value])
}

export default getNRandomPosts
