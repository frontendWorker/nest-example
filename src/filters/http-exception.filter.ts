import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';
import { Request, Response } from 'express';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    console.log(JSON.stringify(exception));
    const status = exception.getStatus();
    response.status(200).json({
      status,
      message: response.statusMessage,
      timestamp: Date.now(),
      path: request.url,
    });
  }
}
