import { Controller, Post, Req, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('webhooks/clerk')
export class ClerkController {
  constructor(private readonly prisma: PrismaService) {}
  @Post()
  async handleClerkWebhook(@Req() req: Request, @Res() res: Response) {
    const event = req.body;

    if (event.type === 'user.created') {
      const finalUserId = event.data.id;
      const email = event.data.email_addresses?.[0]?.email_address;

      const user = await this.prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        console.error(`User not found: ${email}`);
        return res.status(HttpStatus.NOT_FOUND).send();
      }

      const participant = await this.prisma.participant.findUnique({
        where: {
          user_id: user.user_id,
        },
      });

      const formateur = await this.prisma.formateur.findUnique({
        where: {
          user_id: user.user_id,
        },
      });

      await this.prisma.user.update({
        where: {
          email: email,
        },
        data: {
          user_id: finalUserId,
        },
      });

      if (participant) {
        await this.prisma.participant.update({
          where: {
            user_id: user.user_id,
          },
          data: {
            user_id: finalUserId,
          },
        });
      }

      if (formateur) {
        await this.prisma.formateur.update({
          where: {
            user_id: user.user_id,
          },
          data: {
            user_id: finalUserId,
          },
        });

        await this.prisma.file.updateMany({
          where: {
            formateur_id: user.user_id,
          },
          data: {
            formateur_id: finalUserId,
          },
        });
      }

      console.log(`User created: ${finalUserId} (${email})`);
    }

    return res.status(HttpStatus.OK).send();
  }
}
