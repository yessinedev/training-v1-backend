import { ClerkClient, createClerkClient } from '@clerk/backend';
import { Injectable } from '@nestjs/common';
import { CreateClerkUserDto } from './dto/create-clerk-user.dto';

const CLERK_API_KEY = process.env.CLERK_SECRET_KEY;

@Injectable()
export class ClerkService {
  private clerkClient: ClerkClient;

  constructor() {
    this.clerkClient = createClerkClient({ secretKey: CLERK_API_KEY });
  }

  async createUser(data: CreateClerkUserDto) {
    return await this.clerkClient.invitations.createInvitation({
      emailAddress: data.email,
      publicMetadata: {
        role: {
          role_name: data.role.role_name,
          role_id: data.role.role_id,
        },
      },
      redirectUrl: 'http://localhost:3000/sign-in',
    });
  }

  async removeUser(userId: string) {
    try {
      if(userId.startsWith('inv')) {
        await this.clerkClient.invitations.revokeInvitation(userId);
        return { message: 'Invitation revoked successfully' };
      }
      await this.clerkClient.users.deleteUser(userId);
      return { message: 'User deleted successfully' };
    } catch (error) {
      console.error('Error deleting user:', error);
      throw new Error('Failed to delete user');
    }
  }
}
