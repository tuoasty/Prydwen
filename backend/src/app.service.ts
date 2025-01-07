import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private  readonly  prisma: PrismaService) {}

  // async createItem(name: string, description:string): Promise<any> {
  //   return this.prisma.item.create({
  //     data:{name, description}
  //   })
  // }
  //
  async getCharacters(): Promise<any[]> {
    return this.prisma.character.findMany({
      include:{
        element:true,
        path:true
      }
    });
  }
}
