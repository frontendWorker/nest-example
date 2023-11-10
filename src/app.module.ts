import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './filters/http-exception.filter';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    { provide: 'APP_FILTER', useClass: HttpExceptionFilter },
    AppService,
  ],
})
export class AppModule {}
