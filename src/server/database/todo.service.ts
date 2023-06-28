import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './todo.model';

//? @Injectable()은 Nestjs에서 제공하는 데코레이터로 의존성 주입(Dependency Injection)에 사용된다. 
@Injectable()
export class TodoService {
  //? @nestjs/mongoose에서 제공하는 데코레이터로, Mongoose 모델을 주입받기 위해 사용
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  //? 새로운 사용자를 생성하기 위해 사용
  async createUser(firstname: string, lastname: string): Promise<User> {
    const createdUser = new this.userModel({ firstname, lastname });
    return createdUser.save();
  }
  
  //? 모든 사용자를 조회하기 위해 사용
  async getUsers(): Promise<User[]> {
    //* find 메서드를 사용하여 MongoDB에서 모든 사용자를 조회
    //* exec() 메서드를 사용하여 쿼리를 실행하고, Promise로 조회된 사용자 배열을 반환
    return this.userModel.find().exec();
  }
}