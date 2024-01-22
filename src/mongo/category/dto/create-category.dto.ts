import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export enum Status {
  active = "Active",
  inactive = "Inactive",
  deleted = "Delete",
}

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(Status)
  @IsNotEmpty()
  status: Status;
}
