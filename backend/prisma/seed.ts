import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
  await prisma.element.createMany({
    data: [
      {
        name: 'Lightning',
        color: '#9617ff',
        imageUrl: '../../uploads/elements/lightning.png',
      },
    ]
  })

  await prisma.path.createMany({
    data: [
      {
        name: 'Nihility',
      }
    ]
  })

  await prisma.character.createMany({
    data: [
      {
        name: 'Acheron',
        rarity: 5,
        imageUrl: '../../uploads/characters/acheron.png',
        elementId: 1,
        pathId: 1,
      },
    ]
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })