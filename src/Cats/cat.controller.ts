import { Controller, Get ,Param ,Post,Body,Delete,Req,Put,Request} from "@nestjs/common";
import { CatService } from "./cat.service";


@Controller('cat')
export class CatController {
    constructor(private readonly catService: CatService) { }

    @Get('gethello')
    getHello(): String {
        return this.catService.getHello()
    }
    @Get(':id')
    getCats(@Param() params: any):String{
        let impId = params.id;
        return this.catService.getcat(impId);
        

    }
    @Post('PostCat')
    postCat(@Body() cat:string ){ 
        return this.catService.postCat(cat);

        

    }
    
  @Delete('/delete/:id')
  remove(@Param() param: any) {
    const Id = (param.id);
   


    return this.catService.deleteCat(Id);
  }
  
  
  @Put('/update/:id')
  updateuser(@Param() param: any, @Req() req: Request): any { 
    const ID  = param?.id
    const data = req.body
    return this.catService.update(ID, data);
  }
    
    




}