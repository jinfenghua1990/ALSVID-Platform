import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const platforms = [
    { code: "FC", name: "Folding Carbon", description: "折叠碳纤维平台" },
    { code: "FT", name: "Fat Tire", description: "胖胎电助力平台" },
    { code: "CT", name: "City Touring", description: "城市通勤平台" },
    { code: "GT", name: "Grand Touring", description: "长途旅行平台" },
  ];

  for (const platform of platforms) {
    await prisma.productPlatform.upsert({
      where: { code: platform.code },
      update: platform,
      create: platform,
    });
  }

  const models = [
    { code: "FC1", platformCode: "FC", frameMaterial: "Carbon Fiber", wheelSize: "20 inch", motorPosition: "Mid-drive" },
    { code: "FT1", platformCode: "FT", frameMaterial: null, wheelSize: null, motorPosition: null },
    { code: "CT1", platformCode: "CT", frameMaterial: null, wheelSize: null, motorPosition: null },
    { code: "GT1", platformCode: "GT", frameMaterial: null, wheelSize: null, motorPosition: null },
  ];

  for (const model of models) {
    const platform = await prisma.productPlatform.findUniqueOrThrow({
      where: { code: model.platformCode },
    });

    await prisma.productModel.upsert({
      where: { code: model.code },
      update: {
        name: model.code,
        platformId: platform.id,
        frameMaterial: model.frameMaterial,
        wheelSize: model.wheelSize,
        motorPosition: model.motorPosition,
      },
      create: {
        code: model.code,
        name: model.code,
        platformId: platform.id,
        frameMaterial: model.frameMaterial,
        wheelSize: model.wheelSize,
        motorPosition: model.motorPosition,
      },
    });
  }
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
