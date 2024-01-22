import {
  ForbiddenException,
  Injectable,
  BadRequestException,
  NotFoundException,
} from "@nestjs/common";

import { InjectModel } from "@nestjs/mongoose";
import * as mongoose from "mongoose";

import { Query } from "express-serve-static-core";

import { Category } from "../schemas/index.schema";

import { CreateCategoryDto, EditCategoryDto } from "./dto";

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private categoryModel: mongoose.Model<Category>,
  ) {}

  /***:- list all data with search and pagination -:***/
  async getCategory(query: Query): Promise<Category[]> {
    const resPerPage = 2;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);

    const keyword = query.keyword
      ? {
          title: {
            $regex: query.keyword,
            $options: "i",
          },
        }
      : {};

    return await this.categoryModel
      .find({ ...keyword })
      .limit(resPerPage)
      .skip(skip);
  }

  /***:- find by id -:***/
  async getCategoryById(categoryId: mongoose.ObjectId): Promise<Category> {
    const isValidId = mongoose.isValidObjectId(categoryId);

    if (!isValidId) {
      throw new BadRequestException("Please enter correct id.");
    }

    const category = await this.categoryModel.findById(categoryId);

    if (!category) {
      throw new NotFoundException("Book not found.");
    }

    return category;
  }

  /***:- create new record -:***/
  async createCategory(dto: CreateCategoryDto): Promise<Category> {
    const category = await this.categoryModel.create({
      ...dto,
    });

    return category;
  }

  /***:- edit by id -:***/
  async updateCategoryById(
    categoryId: number,
    dto: EditCategoryDto,
  ): Promise<Category> {
    const isValidId = mongoose.isValidObjectId(categoryId);

    if (!isValidId) {
      throw new BadRequestException("Please enter correct id.");
    }

    const category = await this.categoryModel.findById(categoryId);

    if (!category) {
      throw new NotFoundException("Category not found.");
    }

    return await this.categoryModel.findByIdAndUpdate(categoryId, dto, {
      new: true,
      runValidators: true,
    });
  }

  /***:- delete by id -:***/
  async deleteCategoryById(categoryId: number): Promise<Category> {
    return await this.categoryModel.findByIdAndDelete(categoryId);
  }
}
