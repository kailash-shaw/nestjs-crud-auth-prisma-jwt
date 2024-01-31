import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";

import { JwtGuard } from "../../guard/index";
import { CategoryService } from "./category.service";
import { CreateCategoryDto, EditCategoryDto, Status } from "./dto";

import { Query as ExpressQuery } from "express-serve-static-core";
import { Category } from "../schemas/index.schema";
import { ParseObjectIdPipePipe } from "../../pipes/index.pipes";

import { ObjectId } from "mongoose";
import { ApiBearerAuth, ApiQuery, ApiTags } from "@nestjs/swagger";

@ApiBearerAuth()
@ApiTags("Category")
@UseGuards(JwtGuard)
@Controller("category")
export class CategoryController {
  constructor(private CategoryService: CategoryService) {}

  @Get()
  getCategory(@Query() query: ExpressQuery): Promise<Category[]> {
    return this.CategoryService.getCategory(query);
  }

  @Get(":id")
  getCategoryById(
    @Param("id", ParseObjectIdPipePipe) categoryId: ObjectId,
  ): Promise<Category> {
    return this.CategoryService.getCategoryById(categoryId);
  }

  @ApiQuery({ name: "status", enum: Status })
  @Post()
  createCategory(@Body() dto: CreateCategoryDto) {
    return this.CategoryService.createCategory(dto);
  }

  @Patch(":id")
  updateCategoryById(
    @Param("id", ParseIntPipe) categoryId: number,
    @Body() dto: EditCategoryDto,
  ) {
    return this.CategoryService.updateCategoryById(categoryId, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(":id")
  deleteCategoryById(@Param("id", ParseIntPipe) categoryId: number) {
    return this.CategoryService.deleteCategoryById(categoryId);
  }
}
