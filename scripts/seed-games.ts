import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.game.deleteMany();

  await prisma.game.create({

    data: {

      name: "Mobile Legends",

      slug: "mobile-legends",

      image: "/games/ml.jpg",

      currency: "Diamond",

      inputType: "ml",

      nicknameCode: "mobile-legends",

      items: {

        create: [

          {
            amount: "86 Diamond",
            price: 20000,
            productCode: "MLA85-S13",
          },

          {
            amount: "172 Diamond",
            price: 40000,
            productCode: "ML172",
          },

          {
            amount: "257 Diamond",
            price: 60000,
            productCode: "ML257",
          },

        ],

      },

    },

  });

  await prisma.game.create({

    data: {

      name: "Free Fire",

      slug: "free-fire",

      image: "/games/ff.jpg",

      currency: "Diamond",

      inputType: "user",

      nicknameCode: "free-fire",

      items: {

        create: [

          {
            amount: "70 Diamond",
            price: 10000,
            productCode: "FF70",
          },

          {
            amount: "140 Diamond",
            price: 20000,
            productCode: "FF140",
          },

        ],

      },

    },

  });

  await prisma.game.create({

    data: {

      name: "PUBG Mobile",

      slug: "pubg",

      image: "/games/pubg.jpg",

      currency: "UC",

      inputType: "user",

      nicknameCode: "pubgm",

      items: {

        create: [

          {
            amount: "60 UC",
            price: 15000,
            productCode: "PUBG60",
          },

          {
            amount: "325 UC",
            price: 75000,
            productCode: "PUBG325",
          },

        ],

      },

    },

  });

  await prisma.game.create({

    data: {

      name: "Valorant",

      slug: "valorant",

      image: "/games/valorant.jpg",

      currency: "VP",

      inputType: "riot",

      nicknameCode: "valorant",

      items: {

        create: [

          {
            amount: "475 VP",
            price: 50000,
            productCode: "VAL475",
          },

          {
            amount: "1000 VP",
            price: 100000,
            productCode: "VAL1000",
          },

        ],

      },

    },

  });

  console.log("✅ Game berhasil diisi.");

}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });