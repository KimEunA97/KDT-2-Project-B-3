import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TodoModule } from './server/database/todo.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://smooD:WNdG2flVfYIMW52e@jiseop.g8czkiu.mongodb.net/'), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}