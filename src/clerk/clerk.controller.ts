import { Controller, Post, Req, Res, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

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

      await this.prisma.user.update({
        where: {
          email: email,
        },
        data: {
          user_id: finalUserId,
        },
      });

      console.log(`User created: ${finalUserId} (${email})`);
    }

    return res.status(HttpStatus.OK).send();
  }
}
