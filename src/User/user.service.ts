import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/Entity/user.entity";
import { Repository } from 'typeorm';
import { sign } from "jsonwebtoken"
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async register(data) {
    data["isDeleted"] = null
    const CREATE_USER = await this.usersRepository.save(data)
    return CREATE_USER
  }


  async findAll() {
    const dataf = await this.usersRepository.find();
    return dataf;
  }

  async findById(id) {
    const user = await this.usersRepository.findOneBy({
      id: parseInt(id)
    })
    return user
  }


  async login(data) {
    console.log(data, "data")
    const user = await this.usersRepository.findOneBy({
      email: data.email
    })
    if (!user) {
      return { status: false, msg: "user not found", status_code: 404 }
    }

    if (user.password != data.password) {
      return { status: false, msg: "invalid password", status_code: 409 }
    }

    const TOKEN = await sign({ email: user.email, id: user.id }, "TTEEHJUDFHCUD")
  return {
    status: true , token : TOKEN
  }
  }

  async delete(id) {
    const user = await this.usersRepository.findOneBy({
      id: parseInt(id)
    })
    let d = new Date("October 13, 2014 11:13:00");
    user.isDeleted = d;
    await this.usersRepository.save(user)
    return user
  }


  async update(id, data) {
    const user1 = await this.usersRepository.findOneBy({
      id: parseInt(id)
    })
    user1.first_name = data.first_name;
    user1.last_name = data.last_name;
    user1.email = data.email;
    user1.password = data.password;
    await this.usersRepository.save(user1)
    return user1;
  }





}