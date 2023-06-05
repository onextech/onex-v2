// @link https://www.npmjs.com/package/next-sitemap

const siteUrl = process.env.NEXT_PUBLIC_ABSOLUTE_URL

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
}
