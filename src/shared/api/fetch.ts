import { RefreshTokenDto } from "@/shared/types/dto";

const context = typeof window !== 'undefined' ? window : global
const { fetch: originalFetch } = context

context.fetch = async (...args) => {
  let [resource, config] = args
  const token = localStorage.getItem('token') || null

  resource = (resource as string).startsWith('http') 
    ? resource 
    : `${process.env.NEXT_PUBLIC_PIPEDRIVE_API}${resource}`

  config = {
    ...config,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...config?.headers
    }
  }

  let response = await originalFetch(resource, config)

  if (!response.ok && response.status === 401) {
    const tokenResponse = await originalFetch(`${process.env.NEXT_PUBLIC_API}/oauth/refresh`)
    const { accessToken } = await tokenResponse.json() as RefreshTokenDto

    localStorage.setItem('token', accessToken)

    response = await originalFetch(resource, {
      ...config,
      headers: {
        ...config?.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    })
  }

  return response
}

export const $fetch = context.fetch