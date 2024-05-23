export type PipedriveOAuthResponse = {
  access_token: string // expire in 1 hour
  token_type: 'bearer'
  refresh_token: string // expire in 60 days
  scope: string[]
  expires_in: number // exppiration time
  api_domain: string
}