import { Controller, Get, Res } from '@nestjs/common';
import { FallbackModuleService } from './fallback-module.service';
@Controller()
export class FallbakController {
  constructor(private readonly FallbackModuleService:FallbackModuleService){}
  @Get('*')
  fallback(@Res() res) {
    res.sendFile(this.FallbackModuleService.getBuildPath())
  }
}
