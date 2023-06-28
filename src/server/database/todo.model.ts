import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
//? User 인터페이스는 사용자 정보를 나타내는 데이터 구조를 정의
export class User extends Document {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;
}

export const TodoSchema = SchemaFactory.createForClass(User);