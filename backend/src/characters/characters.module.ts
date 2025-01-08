import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { CharactersController } from './characters.controller';
import { CharactersService } from './characters.service';

@Module({
  imports: [PrismaModule],
  controllers: [CharactersController],
  providers: [CharactersService],
})

export class CharactersModule {}