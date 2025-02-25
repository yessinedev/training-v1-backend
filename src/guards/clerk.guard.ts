import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { verifyToken } from '@clerk/backend';

@Injectable()
export class ClerkAuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('No token provided');
    }

    const token = authHeader.replace('Bearer ', '');

    try {
      // Verify the JWT token using the correct method
      const payload = await verifyToken(token, {
        secretKey: process.env.CLERK_SECRET_KEY,
        authorizedParties: ['http://localhost:3000'], // Replace with your authorized parties
      });
      // Attach user payload to request
      request['user'] = payload;

      return true;
    } catch (error) {
      console.error('Authentication error:', error);
      throw new UnauthorizedException('Invalid token');
    }
  }
}
