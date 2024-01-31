import { IsEmail, IsOptional, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class EditUserDto {
  @ApiProperty({
    example: "kailash@gmail.com",
    required: true,
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    example: "kailash",
    required: false,
  })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({
    example: "Shaw",
    required: false,
  })
  @IsString()
  @IsOptional()
  lastName?: string;
}
