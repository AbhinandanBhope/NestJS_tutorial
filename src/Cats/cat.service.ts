import { Injectable } from "@nestjs/common";


@Injectable()
export class CatService {
    private readonly catsdata =[{id:"1",Name:"Cat1"},{id:"2",Name:"Cat2"},{id:"3",Name:"Cat3"},{id:"4",Name:"Cat4"}]

    

    getHello(): String {
        return "Hello"
    }
    getcat(ImpId:String): string {
        let impid = ImpId;
        for(let i =0;i<this.catsdata.length;i++){
            if (this.catsdata[i].id==impid) {
                return this.catsdata[i].Name;
                
            }
            
        }

      return 'no Match found';
    }
    postCat(body:any){
        this.catsdata.push(body);
        
        console.log(this.catsdata);
        return "Cat created";

    }
    deleteCat(Id:any){
        let objid = Id;
        console.log(Id)
        for (let i = 0; i < this.catsdata.length; i++) {
          if (this.catsdata[i].id == Id) {
            this.catsdata.splice(i,1);
            
          }
        }
        console.log(this.catsdata);
        return 'user delete'

    }
    update(Id, obj2) {
        
        
        console.log(obj2);
        obj2.name = obj2.name; 
        for (let i = 0; i < this.catsdata.length; i++) {
            if (this.catsdata[i].id == Id) {
              this.catsdata[i].Name = obj2.Name;
              
            }
          }
        console.log(this.catsdata);
        return "user updated";
      }
    
    

}