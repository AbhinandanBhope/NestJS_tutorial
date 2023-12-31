import { Controller, Get, Param, Post, Body, Delete, Req, Put, UseGuards,HttpException, ParseIntPipe, HttpStatus, UsePipes } from "@nestjs/common";
import { UserService, ValidationPipe } from "./user.service";
import { Request } from "express";
import { AuthGuard } from "./auth.guard";
import {  CreateUserDto } from "./create-userdto";
import { ForbiddenException } from "./forbidden.exception";



@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  ragisterUser(@Body() ureateUserDto: CreateUserDto) {
    console.log(ureateUserDto);
    return this.userService.register(ureateUserDto);
  }

  @Get("/findall")
  findAll() {
    return this.userService.findAll()
  }
 


  @Delete('/delete/:id')
  
@UseGuards(AuthGuard)
  remove(@Param() param: any) {
    const Id = param.id;
    return this.userService.delete(Id);
  }



  @Get(":id")
  
  @UsePipes(new ValidationPipe())
  
  async findById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
    console.log(id, "params.id")
    
  
   const reult =  await   this.userService.findById(id);
   if(!reult){

    throw new ForbiddenException();

   }
  return reult;
  
  

  }


  @UseGuards(AuthGuard)
  @Put('/update/:id')
  updateuser(@Param() param: any, @Req() req: Request): any {
    const ID = param?.id
    const data = req.body
    return this.userService.update(ID, data);
  }

  @Post('/login')
  login(@Body() Body ): any {
    const data = Body;
    return this.userService.login(data);
  }




}