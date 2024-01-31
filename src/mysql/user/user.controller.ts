import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Req,
  UseGuards,
} from "@nestjs/common";
import { User } from "@prisma/client";
import { Request } from "express";
import { GetUser } from "../../decorator/index";
import { JwtGuard } from "../../guard/index";
import { EditUserDto } from "./dto/edit-user.dto";
import { UserService } from "./user.service";

import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";

/***:- guard for all route means controller level -:***/
@ApiBearerAuth()
@ApiTags("User")
@UseGuards(JwtGuard)
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}
  /***:- guard for single route -:***/
  // @UseGuards(JwtGuard)

  /***:- status code by name -:***/
  //   @HttpCode(HttpStatus.OK)

  /***:- status code by number -:***/
  @ApiOperation({
    summary: "user details",
    description: "Get logged in user information using access token.",
  })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({
    status: 200,
    description: "The found record",
    type: EditUserDto,
  })
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

  // @UseGuards(JwtGuard)
  @Patch()
  editUser(@GetUser("id") userId: number, @Body() dto: EditUserDto) {
    console.log("userId", userId);
    return this.userService.editUser(userId, dto);
  }
}
