import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
  await prisma.element.createMany({
    data: [
      {
        name: 'Physical',
        color: 'physical',
        imageUrl: '/static/images/elements/physical.png',
      },
      {
        name: 'Fire',
        color: 'fire',
        imageUrl: '/static/images/elements/fire.png',
      },
      {
        name: 'Ice',
        color: 'ice',
        imageUrl: '/static/images/elements/ice.png',
      },
      {
        name: 'Lightning',
        color: 'lightning',
        imageUrl: '/static/images/elements/lightning.png',
      },
      {
        name: 'Wind',
        color: 'wind',
        imageUrl: '/static/images/elements/wind.png',
      },
      {
        name: 'Quantum',
        color: 'quantum',
        imageUrl: '/static/images/elements/quantum.png',
      },
      {
        name: 'Imaginary',
        color: 'imaginary',
        imageUrl: '/static/images/elements/imaginary.png',
      },
    ]
  })

  await prisma.path.createMany({
    data: [
      {
        name: 'Abundance',
      },
      {
        name: 'Destruction',
      },
      {
        name: 'Erudition',
      },
      {
        name: 'Harmony',
      },
      {
        name: 'Hunt',
      },
      {
        name: 'Nihility',
      },
      {
        name: 'Preservation',
      },
      {
        name: 'Remembrance',
      },
    ]
  })

  await prisma.character.createMany({
    data: [
      {
        name: 'Acheron',
        rarity: 5,
        imageUrl: '/static/images/characters/acheron.png',
        elementId: 4,
        pathId: 6,
      },
      {
        name: 'Argenti',
        rarity: 5,
        imageUrl: '/static/images/characters/argenti.png',
        elementId: 1,
        pathId: 3,
      },
      {
        name: 'Aventurine',
        rarity: 5,
        imageUrl: '/static/images/characters/aventurine.png',
        elementId: 7,
        pathId: 7,
      },
      {
        name: 'Feixiao',
        rarity: 5,
        imageUrl: '/static/images/characters/feixiao.png',
        elementId: 5,
        pathId: 5,
      },
      {
        name: 'Herta',
        rarity: 4,
        imageUrl: '/static/images/characters/herta.png',
        elementId: 3,
        pathId: 3,
      },
      {
        name: 'Robin',
        rarity: 5,
        imageUrl: '/static/images/characters/robin.png',
        elementId: 1,
        pathId: 4,
      },
      {
        name: 'Topaz & numby',
        rarity: 5,
        imageUrl: '/static/images/characters/topaz.png',
        elementId: 2,
        pathId: 5,
      }
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