export const fetchGravisApi = async (
  query: string,
  fetchOptions: RequestInit = {},
): Promise<any> => {
  if (!process.env.GRAVIS_API_KEY) {
    throw new Error('No GRAVIS_API_KEY found in environment variables')
  }

  return fetch(`${process.env.NEXT_PUBLIC_GRAVIS_API_URL}/api/v1${query}`, {
    /**
     * By default, data requests that use fetch are cached.
     * @link https://nextjs.org/docs/app/building-your-application/caching#data-cache
     */
    ...(process.env.NODE_ENV === 'development' && {
      cache: 'no-store',
    }),
    headers: {
      Authorization: `Bearer ${process.env.GRAVIS_API_KEY}`,
      'Content-Type': 'application/json',
      ...fetchOptions.headers,
    },
    method: 'GET',
    // Add revalidation else it will be cached until next rebuild.
    // Replace with on-demand revalidation in future.
    next: { revalidate: 60, ...fetchOptions.next },
    ...fetchOptions,
  })
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
