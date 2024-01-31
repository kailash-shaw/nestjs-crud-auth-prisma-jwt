import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class AuthDto {
  @ApiProperty({
    example: "kailash@gmail.com",
    required: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: "123456",
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
export class AuthToken {
  @ApiProperty({
    example: "accessToken",
    required: true,
  })
  @IsString()
  accessToken: string;
}
