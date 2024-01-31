import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

/***:- DataBase Connection -:***/
import { PrismaModule } from "./prisma/prisma.module";
import { MongooseModule } from "@nestjs/mongoose";

import { AuthModule } from "./mysql/auth/auth.module";
import { UserModule } from "./mysql/user/user.module";
import { BookmarkModule } from "./mysql/bookmark/bookmark.module";

import { ProductModule } from "./mongo/product/product.module";
import { CategoryModule } from "./mongo/category/category.module";
import { BookModule } from "./mongo/book/book.module";
import { FileUploadModule } from "./mysql/file-upload/file-upload.module";
import { MulterModule } from "@nestjs/platform-express";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    MongooseModule.forRoot(process.env.MONGO_DATABASE_URL),
    AuthModule,
    UserModule,
    BookmarkModule,
    ProductModule,
    CategoryModule,
    BookModule,
    FileUploadModule,
    MulterModule.register({
      dest: "./uploads",
    }),
  ],
})
export class AppModule {}
