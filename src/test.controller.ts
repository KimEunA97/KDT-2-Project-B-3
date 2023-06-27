import { Controller, Get, Res } from '@nestjs/common';
import { TestService } from './test.service';
@Controller()
export class TestController {
  constructor(private readonly TestService:TestService){}
  
  @Get()
  kimochi(@Res() res) {
    res.send(this.TestService.getHello())
  }

}