import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { User } from './todo.model';
import { CreateUserDto } from './dto/create-todo.dto';

//? 엔드포인트를 /user로 시작
@Controller('user')
export class TodoController {
  constructor(private readonly TodoService: TodoService) {}
  //? http GET요청 처리, 모든 사용자 반환
  @Get()
  async getUsers(): Promise<User[]> {
    console.log('잘 작동하는지 확인');
    return this.TodoService.getUsers();
  }
  //? http Post요청 처리, CreateUserDto에서 받은 데이터를 사용하여 새로운 사용자를 생성하고 반환
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { firstname, lastname } = createUserDto;
    return this.TodoService.createUser(firstname, lastname);
  }
}