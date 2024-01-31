import {
  BadRequestException,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiConsumes, ApiOperation, ApiTags } from "@nestjs/swagger";
import { diskStorage } from "multer";
import { extname } from "path";
import { JwtGuard } from "../../guard/index";
@ApiTags("File Uploads")
@ApiConsumes("multipart/form-data")
@UseGuards(JwtGuard)
@Controller("file-upload")
export class FileUploadController {
  @ApiOperation({
    summary: "File-Upload",
    description: "file upload by multer.",
  })
  @Post("upload")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./src/uploads/files",
        filename: (req, file, callback) => {
          console.log("file", file);
          const name = Date.now();
          const ext = extname(file.originalname);
          const filename = `${name}${ext}`;
          callback(null, filename);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          return callback(null, false);
        }
        callback(null, true);
      },
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException("File is not an image.");
    } else {
      console.log(file);
    }
  }
}
