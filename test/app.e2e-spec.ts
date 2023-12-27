import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { PrismaService } from "../src/prisma/prisma.service";

describe("App e2e", () => {
  let app: INestApplication;

  /***:- db connect -:***/
  let prisma: PrismaService;

  /***:- before calling the any request need to initialize the app module -:***/
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
      }),
    );
    await app.init();
    prisma = app.get(PrismaService);
    await prisma.cleanDb();
  });

  /***:- before calling the any request need to initialize the app module -:***/
  afterAll(() => {
    app.close();
  });

  it.todo("should pass");
});
