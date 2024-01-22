import { ForbiddenException, Injectable } from "@nestjs/common";

import { AuthDto } from "./dto/auth.dto";

import * as argon from "argon2";
import { PrismaService } from "../../prisma/prisma.service";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: AuthDto) {
    console.log("dto", dto);
    const hash = await argon.hash(dto.password);
    console.log(hash);
    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      delete user.hash;
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ForbiddenException("Credentials taken");
        }
      }
      throw error;
    }
  }

  async signin(dto: AuthDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    if (!user) {
      throw new ForbiddenException("Credentials incorrect");
    }
    const passMatch = await argon.verify(user.hash, dto.password);
    if (!passMatch) {
      throw new ForbiddenException("Credentials incorrect!");
    }
    delete user.hash;
    console.log(passMatch);

    return this.singnToken(user.id, user.email);
  }

  /***:- generate the token -:***/
  async singnToken(
    userId: number,
    email: string,
  ): Promise<{ accessToken: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get("JWT_SECRET");
    const token = await this.jwt.signAsync(payload, {
      expiresIn: "15m",
      secret: secret,
    });
    const data = {
      accessToken: token,
    };

    return data;
  }
}
