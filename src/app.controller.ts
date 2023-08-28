import { Controller, Get, Param, Post, Req, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }



  @Get("/getalluser")
  getAllUsers(): object {
    return this.appService.getAllUsers();
  }


  @Get(":id")
  getUserById(@Param() param: any): any { 
    return this.appService.findOne(param.id)
  }
  @Post("/post")
  Postuser(@Req() req: Request): any {

    const BODY = req.body
    return this.appService.create(BODY);
  }
  @Put('/update/:id')
  updateuser(@Param() param: any, @Req() req: Request): any { 
    const ID  = param?.id
    const data = req.body
    return this.appService.update(ID, data);
  }



  @Delete('/delete/:id')
  remove(@Param() param: any) {
    const Id = this.appService.findOne(param.id);


    return this.appService.delete(Id);
  }
  




}


