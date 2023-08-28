import { Controller, Get, Param, Post, Body, Delete, Req, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { Request } from "express";
import { AuthGuard } from "./auth.guard";


@Controller('user')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) { }
  
  @Post()
  ragisterUser(@Req() req: Request) {
    const DATA = req.body
    return this.userService.register(DATA);
  }

  @Get("/findall")
  findAll(){
    return this.userService.findAll()
  }

  @Delete('/delete/:id')
  remove(@Param() param: any) {
    const Id = param.id;
    return this.userService.delete(Id);
  }

  @Get(":id")
  findById(@Param() params: any){ 
    console.log(params.id , "params.id")
    return this.userService.findById(params.id);
  }

  @Put('/update/:id')
  updateuser(@Param() param: any, @Req() req: Request): any { 
    const ID  = param?.id
    const data = req.body
    return this.userService.update(ID, data);
  }

  @Post('/login')
  login(@Req() req: Request):any{ 
    const data = req.body
    return this.userService.login(data);
  }

   
  

}