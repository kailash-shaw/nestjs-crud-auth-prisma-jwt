import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum Status {
  active = "Active",
  inactive = "Inactive",
  deleted = "Delete",
}

export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ enum: Status })
  @IsEnum(Status)
  @IsNotEmpty()
  status: Status;
}
