import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { ClerkService } from 'src/clerk/clerk/clerk.service';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly clerkService: ClerkService,
  ) {}
  async create(createUserDto: CreateUserDto) {
    try {
      const userRole = await this.prisma.role.findUnique({
        where: {
          role_id: createUserDto.role_id,
        },
      });

      if (!userRole) {
        throw new Error('Role not found');
      }

      // Create user in Clerk
      const clerkUser = await this.clerkService.createUser({
        firstName: createUserDto.prenom,
        lastName: createUserDto.nom,
        email: createUserDto.email,
        role: {
          role_id: userRole?.role_id!,
          role_name: userRole?.role_name!,
        },
      });

      // Extract user data
      const user_id = clerkUser.id;
      const email = createUserDto.email;
      const prenom = createUserDto.prenom;
      const nom = createUserDto.nom;
      const telephone = createUserDto.telephone || ''; // Default to empty string if not provided
      let role_id = createUserDto.role_id;

      // Validate role_id against Role table

      // Create user in Prisma
      await this.prisma.user.create({
        data: {
          user_id,
          email,
          nom: nom,
          prenom: prenom,
          telephone,
          role_id,
        },
      });

      return { message: 'User created successfully' };
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to create user');
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
