import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
interface Payload {
  sub: string
}
export function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).end()
  }
  const [, token] = authToken.split(' ')
  try {
    const { sub } = verify(
      token,
      '4334eb90cc9e4da75264f62324e848db734eb9a2'
    ) as Payload
    request.user_id = sub
    return next()
  } catch (error) {
    return response.status(401).end()
  }
}
