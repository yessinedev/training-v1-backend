import { ClerkClient, createClerkClient } from '@clerk/backend';
import { Injectable } from '@nestjs/common';
import { CreateClerkUserDto } from './dto/create-clerk-user.dto';

const CLERK_API_KEY = process.env.CLERK_SECRET_KEY;

@Injectable()
export class ClerkService {
  private clerkClient: ClerkClient;

  constructor() {
    this.clerkClient = createClerkClient({secretKey: CLERK_API_KEY})
  }

  async createUser(data: CreateClerkUserDto) {
    return await this.clerkClient.users.createUser({
        firstName: data.firstName,
        lastName: data.lastName,
        emailAddress: [data.email],
        publicMetadata: { role_id: data.role.role_name },
        privateMetadata: { role_id: data.role.role_id },
    });
  }
}