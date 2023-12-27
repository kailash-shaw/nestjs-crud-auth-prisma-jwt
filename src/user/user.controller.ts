import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  UseGuards,
} from "@nestjs/common";
import { User } from "@prisma/client";
import { Request } from "express";
import { GetUser } from "../auth/decorator";
import { JwtGuard } from "../auth/guard/jwt.guard";

/***:- guard for all route means controller level -:***/
//@UseGuards(JwtGuard)
@Controller("users")
export class UserController {
  /***:- guard for single route -:***/
  @UseGuards(JwtGuard)

  /***:- status code by name -:***/
  //   @HttpCode(HttpStatus.OK)

  /***:- status code by number -:***/
  @HttpCode(200)
  @Get("me")

  /***:- with the help request decorator -:***/
  /*getMe(@Req() req: Request) {
    console.log({
      user: req.user,
    });
    return req.user;
  }*/

  /***:- with the help of custom decorator -:***/
  getMe(@GetUser() user: User, @GetUser("email") email: string) {
    console.log({
      email: email,
    });
    return user;
  }
}
