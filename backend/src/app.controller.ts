import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('items')
export class ItemController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // async getItems(): Promise<any[]> {
  //   return this.appService.getItems();
  // }
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
