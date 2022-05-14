import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable({})
export class AuthService {

  constructor(private prisma: PrismaService) {
  }


  signUp(dto: AuthDto) {
    return { akshay: dto };
  }

  login() {

  }
}
