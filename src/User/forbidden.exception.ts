import {   Injectable,HttpException,HttpStatus} from '@nestjs/common';
@Injectable()
export class ForbiddenException extends HttpException {
    constructor() {
      super('Forbidden', HttpStatus.FORBIDDEN);
    }
  }