import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('characters')
export class ItemController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getCharacters(): Promise<any[]> {
    return this.appService.getCharacters();
  }
}

// Insert
@Controller('insert')
export class InsertController {
  constructor(private readonly appService: AppService) {
  }

  // @Get()
  // insertUser(){
  //   return this.appService.createItem("Hi", "Hello");
  // }
}
