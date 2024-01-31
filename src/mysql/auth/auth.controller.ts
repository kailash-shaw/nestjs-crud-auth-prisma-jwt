import { Body, Controller, Post, HttpCode } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto, AuthToken } from "./dto/auth.dto";

import { ApiOperation, ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: "sing up", description: "create user account" })
  @ApiBody({
    type: AuthDto,
    description: "Json structure for user login",
  })
  @ApiResponse({
    status: 200,
    description: "The user created successfully.",
    type: AuthDto,
  })
  @HttpCode(200)
  @Post("signup")
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @ApiOperation({ summary: "sign in", description: "user login" })
  @ApiBody({
    type: AuthDto,
    description: "Json structure for user login",
  })
  @ApiResponse({
    status: 200,
    description: "The user login successfully.",
    type: AuthToken,
  })
  @HttpCode(200)
  @Post("signin")
  signin(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
