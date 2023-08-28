import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly users = [
    { "id": 1, "name": "ram"  },
    { "id": 2, "name": "shyam" },
    { "id": 3, "name": "sunny" },
  ];

  getAllUsers(): object {
    return this.users;
  }

  findOne(id: number): any {
    const ID = id
    let FIND_USER;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == ID) {
        FIND_USER = this.users[i]
      }
    }
    return FIND_USER
  }


  create(body): string {
    this.users.push(body);
    let user = this.users;
    console.log(this.users);
    return "user created";
  }

  update(Id, obj2) {
    let  id  =Id;
    let obj = this.findOne(id);
    console.log(obj);
    obj.name = obj2.name; 
    console.log(this.users);
    return "user updated";
  }
  delete(id) {
    
    let objid = id;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].id == objid.id) {
        this.users.splice(i,1);
        
      }
    }
    console.log(this.users);
    return 'user delete';

    

  }
  
}
