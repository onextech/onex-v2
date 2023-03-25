import Post from './Post.types'

export interface PressRelease extends Omit<Post, 'category' | 'category_id'> {}

export default PressRelease
