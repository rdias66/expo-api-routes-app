import { ExpoRequest, ExpoResponse } from 'expo-router/server'

export async function GET(): Promise<ExpoResponse> {
  return ExpoResponse.json({
    message: 'Expo router accessed via get request!',
  })
}

//Login
export async function POST(request: ExpoRequest): Promise<ExpoResponse> {
  const { email, pass } = await request.json()

  if (email === 'test@email.com' && pass === 'dev') {
    return ExpoResponse.json({
      email,
      message: 'Login succesful',
    })
  }
  return new ExpoResponse('Login info incorrect', {
    status: 404,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
