import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(){
  await prisma.element.createMany({
    data: [
      { name: 'Physical', color: 'physical', imageUrl: '/static/images/elements/physical.png', },
      { name: 'Fire', color: 'fire', imageUrl: '/static/images/elements/fire.png', },
      { name: 'Ice', color: 'ice', imageUrl: '/static/images/elements/ice.png', },
      { name: 'Lightning', color: 'lightning', imageUrl: '/static/images/elements/lightning.png', },
      { name: 'Wind', color: 'wind', imageUrl: '/static/images/elements/wind.png', },
      { name: 'Quantum', color: 'quantum', imageUrl: '/static/images/elements/quantum.png', },
      { name: 'Imaginary', color: 'imaginary', imageUrl: '/static/images/elements/imaginary.png', },
    ]
  })

  await prisma.path.createMany({
    data: [
      { name: 'Abundance', },
      { name: 'Destruction', },
      { name: 'Erudition', },
      { name: 'Harmony', },
      { name: 'Hunt', },
      { name: 'Nihility', },
      { name: 'Preservation', },
      { name: 'Remembrance', },
    ]
  })

  const physical = await prisma.element.findFirst({ where: { name: 'Physical' } })
  const fire = await prisma.element.findFirst({ where: { name: 'Fire' } })
  const ice = await prisma.element.findFirst({ where: { name: 'Ice' } })
  const lightning = await prisma.element.findFirst({ where: { name: 'Lightning' } })
  const wind = await prisma.element.findFirst({ where: { name: 'Wind' } })
  const quantum = await prisma.element.findFirst({ where: { name: 'Quantum' } })
  const imaginary = await prisma.element.findFirst({ where: { name: 'Imaginary' } })

  const abundance = await prisma.path.findFirst({ where: { name: 'Abundance' } })
  const destruction = await prisma.path.findFirst({ where: { name: 'Destruction' } })
  const erudition = await prisma.path.findFirst({ where: { name: 'Erudition' } })
  const harmony = await prisma.path.findFirst({ where: { name: 'Harmony' } })
  const hunt = await prisma.path.findFirst({ where: { name: 'Hunt' } })
  const nihility = await prisma.path.findFirst({ where: { name: 'Nihility' } })
  const preservation = await prisma.path.findFirst({ where: { name: 'Preservation' } })
  const remembrance = await prisma.path.findFirst({ where: { name: 'Remembrance' } })

  await prisma.character.createMany({
    data: [
      {
        name: 'Acheron',
        rarity: 5,
        imageUrl: '/static/images/characters/acheron.png',
        elementId: lightning.id,
        pathId: nihility.id
      },
      {
        name: 'Argenti',
        rarity: 5,
        imageUrl: '/static/images/characters/argenti.png',
        elementId: physical.id,
        pathId: erudition.id
      },
      {
        name: 'Aventurine',
        rarity: 5,
        imageUrl: '/static/images/characters/aventurine.png',
        elementId: imaginary.id,
        pathId: preservation.id
      },
      {
        name: 'Feixiao',
        rarity: 5,
        imageUrl: '/static/images/characters/feixiao.png',
        elementId: wind.id,
        pathId: hunt.id
      },
      {
        name: 'Herta',
        rarity: 4,
        imageUrl: '/static/images/characters/herta.png',
        elementId: ice.id,
        pathId: erudition.id
      },
      {
        name: 'Robin',
        rarity: 5,
        imageUrl: '/static/images/characters/robin.png',
        elementId: physical.id,
        pathId: harmony.id
      },
      {
        name: 'Topaz & Numby',
        rarity: 5,
        imageUrl: '/static/images/characters/topaz.png',
        elementId: fire.id,
        pathId: hunt.id
      },
      {
        name: 'Fu Xuan',
        rarity: 5,
        imageUrl: '/static/images/characters/fuxuan.png',
        elementId: quantum.id,
        pathId: preservation.id
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