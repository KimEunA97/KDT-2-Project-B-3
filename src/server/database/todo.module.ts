import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { User, TodoSchema } from './todo.model';

//? @Module() 데코레이터는 클래스를 모듈로 정의
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://smooD:WNdG2flVfYIMW52e@jiseop.g8czkiu.mongodb.net/'),
    MongooseModule.forFeature([{ name: User.name , schema: TodoSchema }]),
  ],
  //? controllers 속성은 이 모듈에 속하는 컨트롤러들을 정의
  controllers: [TodoController],
  //? providers 속성은 이 모듈에 속하는 서비스(또는 프로바이더)들을 정의
  providers: [TodoService],
})
export class TodoModule {}

