import { Module } from '@nestjs/common';
import { ItemController, InsertController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ItemController, InsertController],
  providers: [AppService],
})
export class AppModule {}
