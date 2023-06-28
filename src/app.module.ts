import { Module } from '@nestjs/common';
import { FallbackModuleModule } from './fallback-modules/fallback-module.module';

@Module({
  imports: [FallbackModuleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
