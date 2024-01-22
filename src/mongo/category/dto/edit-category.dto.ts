import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class EditCategoryDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  status?: string;
}
