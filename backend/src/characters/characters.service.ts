import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CharactersService {
  constructor(private  readonly  prisma: PrismaService) {}

  async getCharacters(): Promise<any[]> {
    return this.prisma.character.findMany({
      include:{
        element:true,
        path:true
      },
      orderBy:{
        name:'asc'
      }
    });
  }
}